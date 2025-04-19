
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Product } from "@/types/user";

// Temporary mock data - replace with API call later
const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fresh Tomatoes",
    description: "Locally grown fresh tomatoes",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Vegetables",
    sellerId: "seller1",
    sellerName: "Farm Fresh",
    stock: 100,
    purchaseCount: 0
  },
  {
    id: 1, // Same product ID
    title: "Fresh Tomatoes",
    description: "Organic tomatoes from our greenhouse",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Vegetables",
    sellerId: "seller2",
    sellerName: "Green Gardens",
    stock: 50,
    purchaseCount: 0
  },
  {
    id: 2,
    title: "Organic Carrots",
    description: "Fresh organic carrots",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Vegetables",
    sellerId: "seller1",
    sellerName: "Farm Fresh",
    stock: 75,
    purchaseCount: 0
  }
];

export default function Products() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => Promise.resolve(mockProducts), // Replace with actual API call
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-forest mb-8">All Products</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <ProductFilters />
            <div className="lg:col-span-3">
              <ProductGrid products={products || []} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
