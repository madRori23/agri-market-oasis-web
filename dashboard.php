
<?php
require_once 'includes/config.php';

// Check if user is logged in
if (!isLoggedIn()) {
    redirectWithMessage("auth.php", "Please log in to access the dashboard", "error");
}

// Get user role
$userRole = getUserRole();
?>

<?php require_once 'includes/header.php'; ?>

<main class="main">
    <div class="container">
        <h1 class="mb-8">My Dashboard</h1>
        
        <?php if ($userRole === 'admin'): ?>
            <!-- Admin Dashboard -->
            <div class="card mb-8">
                <div class="card-body">
                    <h2 class="card-title">Admin Controls</h2>
                    <p>Welcome to the admin dashboard. From here you can manage users, products, and view reports.</p>
                    
                    <div class="mt-4">
                        <h3 class="mb-2">Quick Stats</h3>
                        <div class="grid grid-cols-3 gap-4">
                            <?php
                            // In a real application, fetch these from database
                            $userCount = 10;
                            $productCount = 25;
                            $orderCount = 37;
                            ?>
                            <div class="border rounded p-4 text-center">
                                <div class="text-2xl font-bold text-forest"><?php echo $userCount; ?></div>
                                <div>Total Users</div>
                            </div>
                            <div class="border rounded p-4 text-center">
                                <div class="text-2xl font-bold text-forest"><?php echo $productCount; ?></div>
                                <div>Products</div>
                            </div>
                            <div class="border rounded p-4 text-center">
                                <div class="text-2xl font-bold text-forest"><?php echo $orderCount; ?></div>
                                <div>Orders</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Recent Activity</h2>
                    <p>Here you can see recent activity on the platform.</p>
                    <!-- Admin dashboard content -->
                </div>
            </div>
            
        <?php elseif ($userRole === 'seller'): ?>
            <!-- Seller Dashboard -->
            <div class="card mb-8">
                <div class="card-body">
                    <h2 class="card-title">Seller Dashboard</h2>
                    <p>Welcome to your seller dashboard. Manage your products and orders here.</p>
                    
                    <div class="mt-4">
                        <a href="add-product.php" class="btn btn-primary">Add New Product</a>
                    </div>
                </div>
            </div>
            
            <div class="card mb-8">
                <div class="card-body">
                    <h2 class="card-title">My Products</h2>
                    <p>Here are the products you currently have listed:</p>
                    
                    <div class="grid grid-cols-3 gap-4 mt-4">
                        <!-- In a real application, fetch products from database -->
                        <div class="card">
                            <div class="card-header">
                                <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Tomatoes">
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">Fresh Tomatoes</h3>
                                <p class="card-price">R20.00 per kg</p>
                                <p>Stock: 100</p>
                            </div>
                            <div class="card-footer">
                                <a href="#" class="btn btn-outline">Edit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        <?php else: ?>
            <!-- Buyer Dashboard -->
            <div class="card mb-8">
                <div class="card-body">
                    <h2 class="card-title">My Orders</h2>
                    <p>Track your order history below:</p>
                    
                    <div class="mt-4">
                        <!-- Sample order, replace with real data in production -->
                        <div class="border rounded p-4 mb-4">
                            <div class="flex justify-between">
                                <div>
                                    <h3 class="font-medium">Order #12345</h3>
                                    <p class="text-sm text-gray-600">Placed on April 15, 2025</p>
                                </div>
                                <div>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 text-sm rounded">Delivered</span>
                                </div>
                            </div>
                            <div class="mt-2">
                                <p>2x Fresh Tomatoes</p>
                                <p>1x Organic Carrots</p>
                            </div>
                            <div class="mt-2 font-medium">
                                Total: R55.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">My Account</h2>
                    <!-- Account settings form would go here -->
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php require_once 'includes/footer.php'; ?>
