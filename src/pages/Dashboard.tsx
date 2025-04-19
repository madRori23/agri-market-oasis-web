
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { useAuth } from '@/context/AuthContext';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';
import { SellerDashboard } from '@/components/dashboard/SellerDashboard';
import { BuyerDashboard } from '@/components/dashboard/BuyerDashboard';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-7xl mx-auto">
          {user?.role === 'admin' && <AdminDashboard />}
          {user?.role === 'seller' && <SellerDashboard />}
          {user?.role === 'buyer' && <BuyerDashboard />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
