
export type UserRole = 'admin' | 'seller' | 'buyer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export interface Seller extends User {
  role: 'seller';
  shopName?: string;
  products: Product[];
}

export interface Admin extends User {
  role: 'admin';
}

export interface Buyer extends User {
  role: 'buyer';
  orders: Order[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sellerId: string;
  sellerName: string;
  stock: number;
  purchaseCount: number;
}

export interface Order {
  id: string;
  buyerId: string;
  products: {
    productId: number;
    quantity: number;
    price: number;
    sellerId: string;
  }[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}
