
export function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AgriMarket</h3>
            <p className="text-sm text-gray-300">
              Connecting farmers and consumers for a sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">
              Email: info@agrimarket.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300">
            &copy; {new Date().getFullYear()} AgriMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
