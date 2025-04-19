
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would come from a backend service
const MOCK_USERS = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin" as UserRole,
    createdAt: new Date(),
  },
  {
    id: "2",
    name: "Seller One",
    email: "seller@example.com",
    role: "seller" as UserRole,
    shopName: "Fresh Farm Produce",
    createdAt: new Date(),
    products: [
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
      }
    ]
  },
  {
    id: "3",
    name: "Buyer One",
    email: "buyer@example.com", 
    role: "buyer" as UserRole,
    createdAt: new Date(),
    orders: []
  }
];

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage (simulating persistence)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    setIsLoading(true);
    try {
      // For demo purposes, just find the user with matching email
      const foundUser = MOCK_USERS.find(u => u.email === email);
      
      if (!foundUser) {
        throw new Error('User not found');
      }
      
      // In a real app, you would verify the password here
      
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    // Simulate API call
    setIsLoading(true);
    try {
      // In a real app, you would create a new user in the database
      const newUser = {
        id: `${MOCK_USERS.length + 1}`,
        email,
        name,
        role,
        createdAt: new Date(),
      };
      
      // For demo purposes, we'll just set the user
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading,
      login,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
