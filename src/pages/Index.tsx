
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { Footer } from "@/components/ui/Footer";

const featuredProducts = [
  {
    id: 1,
    title: "Fresh Tomatoes",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: 2,
    title: "Organic Carrots",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        <section id="featured" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
