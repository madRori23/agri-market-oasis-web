
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "./button";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-forest">
              AgriMarket
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-forest px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-forest px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-forest px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-forest px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-700">
                  <span className="hidden md:inline">Hi, </span>
                  <Link to="/dashboard" className="font-medium text-forest hover:underline">
                    {user?.name}
                  </Link>
                  <span className="hidden md:inline text-xs ml-1">
                    ({user?.role})
                  </span>
                </div>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
