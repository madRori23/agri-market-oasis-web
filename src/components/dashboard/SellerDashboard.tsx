
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Product } from '@/types/user';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Plus, Trash2, Edit } from 'lucide-react';

export function SellerDashboard() {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Fresh Tomatoes",
      description: "Juicy, ripe tomatoes freshly harvested from our organic farm.",
      price: 20.00,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "vegetables",
      sellerId: user?.id || "",
      sellerName: user?.name || "",
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
      sellerId: user?.id || "",
      sellerName: user?.name || "",
      stock: 75,
      purchaseCount: 85
    },
  ]);
  
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id' | 'sellerId' | 'sellerName' | 'purchaseCount'>>({
    title: '',
    description: '',
    price: 0,
    image: '',
    category: 'vegetables',
    stock: 0
  });
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const handleAddProduct = () => {
    const productToAdd: Product = {
      ...newProduct,
      id: products.length + 1,
      sellerId: user?.id || "",
      sellerName: user?.name || "",
      purchaseCount: 0
    };
    
    setProducts([...products, productToAdd]);
    setNewProduct({
      title: '',
      description: '',
      price: 0,
      image: '',
      category: 'vegetables',
      stock: 0
    });
    
    toast.success('Product added successfully');
  };
  
  const handleUpdateProduct = () => {
    if (!editingProduct) return;
    
    const updatedProducts = products.map(p => 
      p.id === editingProduct.id ? editingProduct : p
    );
    
    setProducts(updatedProducts);
    setEditingProduct(null);
    toast.success('Product updated successfully');
  };
  
  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(p => p.id !== productId));
    toast.success('Product removed successfully');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-forest">Seller Dashboard</h2>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-forest">
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add a New Product</SheetTitle>
              <SheetDescription>
                Fill in the details for your new product listing.
              </SheetDescription>
            </SheetHeader>
            
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="title">Product Name</Label>
                <Input
                  id="title"
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="price">Price (R)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: Number(e.target.value)})}
                />
              </div>
              
              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="stock">Stock Available</Label>
                <Input
                  id="stock"
                  type="number"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({...newProduct, stock: Number(e.target.value)})}
                />
              </div>
            </div>
            
            <SheetFooter>
              <SheetClose asChild>
                <Button className="bg-forest" onClick={handleAddProduct}>Add Product</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Your Products</h3>
        
        {products.length === 0 ? (
          <p className="text-gray-500">You haven't added any products yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden flex flex-col">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex-grow">
                  <h4 className="font-semibold text-lg">{product.title}</h4>
                  <p className="text-forest text-lg">R{product.price.toFixed(2)} per kg</p>
                  <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">In stock: {product.stock}</span>
                    <span className="text-sm text-gray-500">Purchases: {product.purchaseCount}</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 flex justify-end space-x-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setEditingProduct(product)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit Product</SheetTitle>
                        <SheetDescription>
                          Make changes to your product listing.
                        </SheetDescription>
                      </SheetHeader>
                      
                      {editingProduct && (
                        <div className="grid gap-4 py-4">
                          <div>
                            <Label htmlFor="edit-title">Product Name</Label>
                            <Input
                              id="edit-title"
                              value={editingProduct.title}
                              onChange={(e) => setEditingProduct({...editingProduct, title: e.target.value})}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="edit-description">Description</Label>
                            <Textarea
                              id="edit-description"
                              value={editingProduct.description}
                              onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="edit-price">Price (R)</Label>
                            <Input
                              id="edit-price"
                              type="number"
                              value={editingProduct.price}
                              onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="edit-image">Image URL</Label>
                            <Input
                              id="edit-image"
                              value={editingProduct.image}
                              onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="edit-stock">Stock Available</Label>
                            <Input
                              id="edit-stock"
                              type="number"
                              value={editingProduct.stock}
                              onChange={(e) => setEditingProduct({...editingProduct, stock: Number(e.target.value)})}
                            />
                          </div>
                        </div>
                      )}
                      
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button className="bg-forest" onClick={handleUpdateProduct}>
                            Update Product
                          </Button>
                        </SheetClose>
                      </SheetFooter>
                    </SheetContent>
                  </Sheet>
                  
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
