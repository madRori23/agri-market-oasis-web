
import { useAuth } from '@/context/AuthContext';

export function BuyerDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-forest mb-6">Welcome, {user?.name}</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Recent Orders</h3>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500">You haven't placed any orders yet.</p>
            <p className="mt-2">Start shopping for fresh produce from local farmers!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
