
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-forest mb-8">About AgriMarket</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
            <h2 className="text-2xl font-semibold text-forest mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              AgriMarket aims to bridge the gap between local farmers and consumers, creating a sustainable marketplace
              that supports small-scale agriculture while providing consumers with access to fresh, locally grown produce.
            </p>
            
            <h2 className="text-2xl font-semibold text-forest mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2025, AgriMarket is a community-focused platform that connects buyers directly with sellers
              of agricultural products. We believe in supporting local economies, reducing food miles, and promoting
              sustainable farming practices.
            </p>
            
            <h2 className="text-2xl font-semibold text-forest mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-forest text-white text-xl font-bold mb-3">1</div>
                <h3 className="font-medium mb-2">Farmers List Products</h3>
                <p className="text-sm text-gray-600">Local farmers upload their available produce with pricing and details.</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-forest text-white text-xl font-bold mb-3">2</div>
                <h3 className="font-medium mb-2">Buyers Browse & Purchase</h3>
                <p className="text-sm text-gray-600">Consumers browse products, compare prices, and place orders.</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-forest text-white text-xl font-bold mb-3">3</div>
                <h3 className="font-medium mb-2">Direct Delivery</h3>
                <p className="text-sm text-gray-600">Products are delivered fresh from farm to table.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-forest mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><span className="font-medium">Sustainability</span> - We prioritize environmentally friendly farming practices.</li>
              <li><span className="font-medium">Community</span> - We support local farmers and strengthen regional food systems.</li>
              <li><span className="font-medium">Transparency</span> - We provide clear information about product origins and practices.</li>
              <li><span className="font-medium">Quality</span> - We ensure high standards for all products on our platform.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
