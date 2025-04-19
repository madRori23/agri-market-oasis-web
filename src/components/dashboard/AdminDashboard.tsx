
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/user';
import { toast } from 'sonner';

export function AdminDashboard() {
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredIds, setFeaturedIds] = useState<number[]>([]);
  
  // Mock data fetching
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    const mockProducts = [
      {
        id: 1,
        title: "Fresh Tomatoes",
        description: "Juicy, ripe tomatoes freshly harvested from our organic farm.",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
        category: "vegetables",
        sellerId: "2",
        sellerName: "Fresh Farm Produce",
        stock: 50,
        purchaseCount: 120
      },
      {
        id: 2,
        title: "Organic Carrots",
        description: "Sweet and crunchy carrots grown without pesticides.",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
        category: "vegetables",
        sellerId: "2",
        sellerName: "Fresh Farm Produce",
        stock: 75,
        purchaseCount: 85
      },
      {
        id: 3,
        title: "Green Apples",
        description: "Crisp and tart green apples perfect for snacking or baking.",
        price: 25.00,
        image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a",
        category: "fruits",
        sellerId: "3",
        sellerName: "Orchard Fresh",
        stock: 100,
        purchaseCount: 200
      },
      {
        id: 4,
        title: "Fresh Spinach",
        description: "Nutrient-rich spinach leaves freshly harvested.",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
        category: "vegetables",
        sellerId: "3",
        sellerName: "Orchard Fresh",
        stock: 30,
        purchaseCount: 75
      },
    ];
    
    // Sort by purchase count
    const sorted = [...mockProducts].sort((a, b) => b.purchaseCount - a.purchaseCount);
    setTopProducts(sorted);
    
    // Get currently featured products
    const featured = [1, 2]; // IDs of products that are currently featured
    setFeaturedIds(featured);
    
    setIsLoading(false);
  }, []);
  
  const handleUpdateFeatured = (productId: number) => {
    // In a real app, you would call an API to update featured products
    if (featuredIds.includes(productId)) {
      setFeaturedIds(featuredIds.filter(id => id !== productId));
      toast.success('Product removed from featured list');
    } else {
      setFeaturedIds([...featuredIds, productId]);
      toast.success('Product added to featured list');
    }
  };
  
  if (isLoading) {
    return <div className="p-8 text-center">Loading data...</div>;
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-forest mb-6">Admin Dashboard</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Top Selling Products</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border-b">Product</th>
                <th className="text-left p-3 border-b">Seller</th>
                <th className="text-left p-3 border-b">Price</th>
                <th className="text-left p-3 border-b">Purchases</th>
                <th className="text-left p-3 border-b">Featured</th>
                <th className="text-left p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 flex items-center gap-3">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{product.title}</span>
                  </td>
                  <td className="p-3">{product.sellerName}</td>
                  <td className="p-3">R{product.price.toFixed(2)}</td>
                  <td className="p-3">{product.purchaseCount}</td>
                  <td className="p-3">
                    {featuredIds.includes(product.id) ? 
                      <span className="text-green-500">Featured</span> : 
                      <span className="text-gray-400">Not featured</span>
                    }
                  </td>
                  <td className="p-3">
                    <Button 
                      variant={featuredIds.includes(product.id) ? "destructive" : "default"}
                      size="sm"
                      onClick={() => handleUpdateFeatured(product.id)}
                    >
                      {featuredIds.includes(product.id) ? "Remove from Featured" : "Add to Featured"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
