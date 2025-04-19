
import { Phone, Mail, MapPin } from 'lucide-react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-forest mb-8">Contact AgriMarket</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-forest mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-forest w-6 h-6" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-600">(123) 456-7890</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-forest w-6 h-6" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@agrimarket.com" className="text-gray-600">info@agrimarket.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-forest w-6 h-6" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Farm Street, Agriculture District, AG 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-forest mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-forest text-white py-2 rounded-md hover:bg-forest-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
