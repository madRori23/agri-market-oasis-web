
import { AuthForms } from '@/components/auth/AuthForms';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Auth() {
  const { isAuthenticated } = useAuth();
  
  // Redirect if already logged in
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <AuthForms />
      </main>
      <Footer />
    </div>
  );
}
