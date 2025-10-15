                    // SPA navigation and animation logic will go here

// Sample products data
const sampleProducts = {
    men: [
        { id: 1, name: 'Classic White Shirt', description: 'Elegant cotton shirt for formal occasions.', price: 2500, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 2, name: 'Denim Jeans', description: 'Comfortable blue denim jeans.', price: 3500, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', sizes: ['28', '30', '32', '34'] },
        { id: 3, name: 'Leather Belt', description: 'Genuine leather belt with metal buckle.', price: 1200, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['M', 'L'] },
        { id: 4, name: 'Casual Sneakers', description: 'Stylish sneakers for everyday wear.', price: 4000, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sizes: ['8', '9', '10', '11'] },
        { id: 5, name: 'Wool Sweater', description: 'Warm wool sweater for winter.', price: 3200, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 6, name: 'Leather Wallet', description: 'Premium leather wallet with multiple compartments.', price: 1800, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 13, name: 'Polo Shirt', description: 'Classic polo shirt for casual wear.', price: 2200, img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 14, name: 'Chinos Pants', description: 'Slim fit chinos for smart casual.', price: 2800, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=300&fit=crop', sizes: ['28', '30', '32', '34'] },
        { id: 15, name: 'Watch', description: 'Stylish wristwatch with leather strap.', price: 6500, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 16, name: 'Sunglasses', description: 'UV protection sunglasses.', price: 3200, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 17, name: 'Blazer', description: 'Formal blazer for professional look.', price: 8500, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 18, name: 'T-Shirt', description: 'Comfortable cotton t-shirt.', price: 1500, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] }
    ],
    women: [
        { id: 7, name: 'Floral Dress', description: 'Beautiful floral print dress.', price: 2800, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L'] },
        { id: 8, name: 'Skinny Jeans', description: 'Slim fit jeans for women.', price: 3200, img: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=300&h=300&fit=crop', sizes: ['26', '28', '30', '32'] },
        { id: 9, name: 'Silk Scarf', description: 'Elegant silk scarf.', price: 1500, img: 'https://images.unsplash.com/photo-1601762603332-db5e4b90cca7?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 10, name: 'High Heels', description: 'Classic black high heels.', price: 4500, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop', sizes: ['6', '7', '8', '9'] },
        { id: 11, name: 'Cardigan Sweater', description: 'Cozy cardigan for layering.', price: 2600, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 12, name: 'Leather Handbag', description: 'Stylish leather handbag.', price: 5500, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 19, name: 'Blouse', description: 'Elegant blouse for office wear.', price: 2400, img: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 20, name: 'Skirt', description: 'A-line skirt for casual outings.', price: 2200, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L'] },
        { id: 21, name: 'Necklace', description: 'Gold plated necklace set.', price: 1800, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 22, name: 'Earrings', description: 'Diamond stud earrings.', price: 3500, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 23, name: 'Jacket', description: 'Leather jacket for style.', price: 7200, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 24, name: 'Sandals', description: 'Comfortable wedge sandals.', price: 2800, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sizes: ['6', '7', '8', '9'] }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // State management
    let isLoggedIn = false;
    let userEmail = null;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            const expanded = navLinks.classList.contains('open');
            navToggle.setAttribute('aria-expanded', expanded);
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Navigation event listeners
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.id.replace('-link', '');
            loadSection(section);

            // Update active link
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Close mobile menu
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Sellers form submission
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'sell-form') {
            e.preventDefault();
            handleSellFormSubmit();
        }
    });

    // CTA button on hero
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cta-button')) {
            loadSection('men');
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            document.getElementById('men-link').classList.add('active');
        }
    });

    // Initial load
    loadSection('home');

    function loadSection(section) {
        const mainContent = document.querySelector('main');
        mainContent.classList.remove('fade-in');

        setTimeout(() => {
            switch(section) {
                case 'home':
                    renderHome();
                    break;
                case 'men':
                    renderProducts('men');
                    break;
                case 'women':
                    renderProducts('women');
                    break;
                case 'sellers':
                    renderSellers();
                    break;
                case 'cart':
                    renderCart();
                    break;
                case 'login':
                    renderLogin();
                    break;
            }
            mainContent.classList.add('fade-in');
        }, 200);
    }

    function renderHome() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1>New arrivals — refined essentials</h1>
                        <p>Discover elegant and classy apparel and accessories from home-grown sellers.</p>
                        <button class="cta-button" aria-label="Shop new arrivals">Shop New Arrivals</button>
                    </div>
                </div>
            </section>
            <section class="products">
                <div class="container">
                    <h2>Featured Products</h2>
                    <div class="product-list" id="product-list">
                        ${renderFeaturedProducts()}
                    </div>
                </div>
            </section>
        `;
        setupAddToCart();
    }

    function renderFeaturedProducts() {
        const featured = [...sampleProducts.men.slice(0, 4), ...sampleProducts.women.slice(0, 4)];
        return featured.map(p => `
            <div class='product-card' data-id='${p.id}' data-name='${p.name}' data-price='${p.price}' data-img='${p.img}'>
                <img src='${p.img}' alt='${p.name}' class='product-img'/>
                <div class='product-info'>
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                    <div class='product-sizes'>
                        <label>Size:</label>
                        <select class='size-select'>
                            ${p.sizes.map(s => `<option>${s}</option>`).join('')}
                        </select>
                    </div>
                    <button class='add-cart-btn'>Add to Cart</button>
                    <div class='product-price'>₹${p.price}</div>
                </div>
            </div>
        `).join('');
    }

    function renderProducts(category) {
        const main = document.querySelector('main');
        main.innerHTML = `
            <section class="products">
                <div class="container">
                    <h2>${category.charAt(0).toUpperCase() + category.slice(1)}'s Collection</h2>
                    <div class="product-list" id="product-list">
                        Loading products...
                    </div>
                </div>
            </section>
        `;
        loadProductsForCategory(category);
    }

    function loadProductsForCategory(category) {
        fetch('http://localhost:4567/api/products')
        .then(response => response.json())
        .then(products => {
            const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
            const html = filteredProducts.map(p => `
                <div class='product-card' data-id='${p.id}' data-name='${p.name}' data-price='${p.price}' data-img='${p.imageUrl}'>
                    <img src='${p.imageUrl || 'https://via.placeholder.com/300x300?text=No+Image'}' alt='${p.name}' class='product-img'/>
                    <div class='product-info'>
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                        <div class='product-sizes'>
                            <label>Size:</label>
                            <select class='size-select'>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                        <button class='add-cart-btn'>Add to Cart</button>
                        <div class='product-price'>₹${p.price}</div>
                    </div>
                </div>
            `).join('');
            document.getElementById('product-list').innerHTML = html || '<p>No products available in this category.</p>';
            setupAddToCart();
        })
        .catch(error => {
            console.error('Error loading products:', error);
            document.getElementById('product-list').innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
    }

    function renderCart() {
        const main = document.querySelector('main');
        if (!isLoggedIn || !userEmail) {
            main.innerHTML = `
                <section class="products">
                    <div class="container">
                        <h2>Your Cart</h2>
                        <p>Please login to view your cart.</p>
                    </div>
                </section>
            `;
            return;
        }

        if (!cart.length) {
            main.innerHTML = `
                <section class="products">
                    <div class="container">
                        <h2>Your Cart</h2>
                        <p>Your cart is empty.</p>
                    </div>
                </section>
            `;
            return;
        }

        let total = 0;
        const cartItems = cart.map((item, i) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            return `
                <tr>
                    <td><img src='${item.img}' alt='' style='width:40px;height:40px;border-radius:4px;margin-right:8px;vertical-align:middle;'>${item.name}</td>
                    <td>${item.size}</td>
                    <td>${item.quantity}</td>
                    <td>₹${itemTotal}</td>
                    <td><button class='remove-cart-btn' data-index='${i}'>Remove</button></td>
                </tr>
            `;
        }).join('');

        main.innerHTML = `
            <section class="products">
                <div class="container">
                    <h2>Your Cart</h2>
                    <table class="cart-table">
                        <tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th>Remove</th></tr>
                        ${cartItems}
                        <tr><td colspan='3' style='text-align:right;font-weight:bold;'>Total:</td><td colspan='2' style='font-weight:bold;'>₹${total}</td></tr>
                    </table>
                    <button class="checkout-btn">Proceed to Checkout</button>
                </div>
            </section>
        `;

        // Setup cart event listeners
        document.querySelectorAll('.remove-cart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(btn.getAttribute('data-index'));
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart();
            });
        });

        document.querySelector('.checkout-btn').addEventListener('click', function() {
            // Simulate checkout
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push({ date: new Date().toISOString(), items: cart });
            localStorage.setItem('orders', JSON.stringify(orders));
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            main.innerHTML = `
                <section class="products">
                    <div class="container">
                        <h2>Checkout Success</h2>
                        <div class='checkout-success'>Thank you for your purchase! Your order has been placed successfully.</div>
                    </div>
                </section>
            `;
        });
    }

    function renderLogin() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <section class="products">
                <div class="container">
                    <h2>Login / Signup</h2>
                    <form id='login-form' class='login-form'>
                        <label for='email'>Email:</label><br>
                        <input type='email' id='email' name='email' required placeholder='Enter your email'><br><br>
                        <label for='password'>Password:</label><br>
                        <input type='password' id='password' name='password' required placeholder='Enter your password'><br><br>
                        <button type='submit'>Login</button>
                    </form>
                    <div id='login-message'></div>
                </div>
            </section>
        `;
        setupLoginForm();
    }

    function setupLoginForm() {
        const loginForm = document.getElementById('login-form');
        const loginMsg = document.getElementById('login-message');

        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                loginMsg.textContent = 'Please fill in all fields.';
                loginMsg.style.color = 'red';
                return;
            }

            // Simulate login success
            loginMsg.textContent = 'Login successful!';
            loginMsg.style.color = 'green';
            isLoggedIn = true;
            userEmail = email;

            setTimeout(() => {
                showProfileDropdown();
                loadSection('home');
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                document.getElementById('home-link').classList.add('active');
            }, 1000);
        });
    }

    function setupAddToCart() {
        document.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', handleAddToCart);
        });
    }

    function handleAddToCart() {
        const card = this.closest('.product-card');
        const id = card.getAttribute('data-id');
        const name = card.getAttribute('data-name');
        const price = parseInt(card.getAttribute('data-price'));
        const img = card.getAttribute('data-img');
        const size = card.querySelector('.size-select').value;

        addToCart({ id, name, price, img, size, quantity: 1 });
    }

    function addToCart(product) {
        if (!isLoggedIn || !userEmail) {
            alert('Please login to add items to cart.');
            return;
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart!');
    }

    function showProfileDropdown() {
        let div = document.getElementById('profile-dropdown');
        if (!div) {
            div = document.createElement('div');
            div.id = 'profile-dropdown';
            div.style.position = 'fixed';
            div.style.top = '16px';
            div.style.right = '16px';
            div.style.zIndex = 1000;
            document.body.appendChild(div);
        }

        div.innerHTML = `
            <button class='profile-btn' id='profile-btn' aria-label='Profile menu'>👤</button>
            <div class='profile-menu' id='profile-menu' style='display:none;'>
                <a href='#' id='profile-view'>View Profile</a>
                <a href='#' id='order-history'>Order History</a>
                <a href='#' id='profile-logout'>Logout</a>
            </div>
        `;

        const btn = document.getElementById('profile-btn');
        const menu = document.getElementById('profile-menu');

        btn.onclick = function(e) {
            e.stopPropagation();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        };

        document.body.addEventListener('click', function hideMenu(e) {
            if (!div.contains(e.target)) menu.style.display = 'none';
        });

        document.getElementById('profile-view').onclick = function() {
            alert('Email: ' + userEmail + '\nWelcome to your profile!');
        };

        document.getElementById('order-history').onclick = function() {
            loadOrderHistory();
            menu.style.display = 'none';
        };

        document.getElementById('profile-logout').onclick = function() {
            isLoggedIn = false;
            userEmail = null;
            localStorage.removeItem('cart');
            div.remove();
            loadSection('home');
        };
    }

    function loadOrderHistory() {
        const main = document.querySelector('main');
        main.innerHTML = '<h2>Your Order History</h2><div id="order-history-list">Loading...</div>';

        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const listDiv = document.getElementById('order-history-list');

        if (!orders.length) {
            listDiv.innerHTML = '<p>No orders found.</p>';
            return;
        }

        let html = '';
        orders.forEach((order, index) => {
            html += `<div class='order-block'><div class='order-header'>Order #${index + 1} <span class='order-date'>${new Date(order.date).toLocaleString()}</span></div><ul class='order-items'>`;
            order.items.forEach(item => {
                html += `<li><img src='${item.img}' alt='' style='width:32px;height:32px;border-radius:4px;margin-right:8px;vertical-align:middle;'>${item.name} (${item.size}) x${item.quantity} - ₹${item.price * item.quantity}</li>`;
            });
            html += '</ul></div>';
        });
        listDiv.innerHTML = html;
    }

    function renderSellers() {
        const main = document.querySelector('main');
        main.innerHTML = `
            <section class="sellers" id="sellers-section">
                <div class="container">
                    <h2>Sell Your Products</h2>
                    <form id="sell-form" class="sell-form">
                        <div class="form-group">
                            <label for="product-name">Product Name</label>
                            <input type="text" id="product-name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="product-description">Description</label>
                            <textarea id="product-description" name="description" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="product-price">Price (INR)</label>
                            <input type="number" id="product-price" name="price" min="1" required>
                        </div>
                        <div class="form-group">
                            <label for="product-category">Category</label>
                            <select id="product-category" name="category" required>
                                <option value="">Select Category</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="product-image">Image URL</label>
                            <input type="url" id="product-image" name="imageUrl" placeholder="https://example.com/image.jpg">
                        </div>
                        <div class="form-group">
                            <label for="seller-mobile">Your Mobile (for tracking)</label>
                            <input type="text" id="seller-mobile" name="seller" placeholder="e.g., +91 9876543210">
                        </div>
                        <button type="submit" class="btn">Submit Product</button>
                    </form>
                    <div class="listed-products">
                        <h3>Your Listed Products</h3>
                        <div id="products-list" class="product-list">
                            <!-- Products will be loaded here -->
                        </div>
                    </div>
                </div>
            </section>
        `;
        loadListedProducts();
    }

    function handleSellFormSubmit() {
        const form = document.getElementById('sell-form');
        const formData = new FormData(form);
        const productData = Object.fromEntries(formData.entries());

        // Basic validation
        if (!productData.name || !productData.description || !productData.price || !productData.category) {
            alert('Please fill in all required fields.');
            return;
        }

        // Send data to backend
        fetch('http://localhost:4567/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Product submitted successfully! It will be listed soon.');
                form.reset();
                loadListedProducts(); // Refresh the list
            } else {
                alert('Error submitting product: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting product. Please try again.');
        });
    }

    function loadListedProducts() {
        const listDiv = document.getElementById('products-list');
        listDiv.innerHTML = 'Loading products...';

        fetch('http://localhost:4567/api/products')
        .then(response => response.json())
        .then(products => {
            if (products.length === 0) {
                listDiv.innerHTML = '<p>No products listed yet.</p>';
                return;
            }

            const html = products.map(p => `
                <div class='product-card' data-id='${p.id}'>
                    <img src='${p.imageUrl || 'https://via.placeholder.com/300x300?text=No+Image'}' alt='${p.name}' class='product-img'/>
                    <div class='product-info'>
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                        <div class='product-price'>₹${p.price}</div>
                        <div class='product-category'>Category: ${p.category}</div>
                        <div class='seller-info'>Seller: ${p.seller || 'N/A'}</div>
                    </div>
                </div>
            `).join('');
            listDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading products:', error);
            listDiv.innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
    }
});
