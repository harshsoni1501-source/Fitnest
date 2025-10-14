// SPA navigation and animation logic will go here

// Sample products data
const sampleProducts = {
    men: [
        { id: 1, name: 'Classic White Shirt', description: 'Elegant cotton shirt for formal occasions.', price: 2500, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 2, name: 'Denim Jeans', description: 'Comfortable blue denim jeans.', price: 3500, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', sizes: ['28', '30', '32', '34'] },
        { id: 3, name: 'Leather Belt', description: 'Genuine leather belt with metal buckle.', price: 1200, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['M', 'L'] },
        { id: 4, name: 'Casual Sneakers', description: 'Stylish sneakers for everyday wear.', price: 4000, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', sizes: ['8', '9', '10', '11'] },
        { id: 5, name: 'Wool Sweater', description: 'Warm wool sweater for winter.', price: 3200, img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 6, name: 'Leather Wallet', description: 'Premium leather wallet with multiple compartments.', price: 1800, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['One Size'] }
    ],
    women: [
        { id: 7, name: 'Floral Dress', description: 'Beautiful floral print dress.', price: 2800, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L'] },
        { id: 8, name: 'Skinny Jeans', description: 'Slim fit jeans for women.', price: 3200, img: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=300&h=300&fit=crop', sizes: ['26', '28', '30', '32'] },
        { id: 9, name: 'Silk Scarf', description: 'Elegant silk scarf.', price: 1500, img: 'https://images.unsplash.com/photo-1601762603332-db5e4b90cca7?w=300&h=300&fit=crop', sizes: ['One Size'] },
        { id: 10, name: 'High Heels', description: 'Classic black high heels.', price: 4500, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop', sizes: ['6', '7', '8', '9'] },
        { id: 11, name: 'Cardigan Sweater', description: 'Cozy cardigan for layering.', price: 2600, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop', sizes: ['S', 'M', 'L', 'XL'] },
        { id: 12, name: 'Leather Handbag', description: 'Stylish leather handbag.', price: 5500, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', sizes: ['One Size'] }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Profile dropdown logic
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
        div.innerHTML = `<button class='profile-btn' id='profile-btn'>👤</button>
            <div class='profile-menu' id='profile-menu' style='display:none;'>
                <a href='#' id='profile-view'>View Profile</a>
                <a href='#' id='order-history'>Order History</a>
                <a href='#' id='profile-logout'>Logout</a>
            </div>`;
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
        mainContent.innerHTML = '<h2>Your Order History</h2><div id="order-history-list">Loading...</div>';
        // Simulate order history
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
    const mainContent = document.getElementById('main-content');
    let isLoggedIn = false;
    let userEmail = null;
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadSection('home');
    });
    document.getElementById('men-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadSection('men');
    });
    document.getElementById('women-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadSection('women');
    });
    document.getElementById('cart-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadSection('cart');
    });
    document.getElementById('login-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadSection('login');
    });
    // Initial load
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            loadSection(link.id.replace('-link', ''));
        });
    });
    loadSection('home');

    function loadSection(section) {
        mainContent.classList.remove('fade-in');
        setTimeout(() => {
            switch(section) {
                case 'home':
                    mainContent.innerHTML = `<h1>Welcome to Fitnest</h1><p>Discover elegant and classy apparel and accessories from home-grown sellers.</p>`;
                    break;
                case 'men':
                    mainContent.innerHTML = `<h2>Men's Collection</h2><div class='product-list' id='men-products'></div>`;
                    fetchProducts('men');
                    break;
                case 'women':
                    mainContent.innerHTML = `<h2>Women's Collection</h2><div class='product-list' id='women-products'></div>`;
                    fetchProducts('women');
                    break;
    // Fetch products from sample data
    function fetchProducts(category) {
        const products = sampleProducts[category] || [];
        let html = '';
        products.forEach(p => {
            html += `<div class='product-card' data-id='${p.id}' data-name='${p.name}' data-price='${p.price}' data-img='${p.img}'>
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
            </div>`;
        });
        document.getElementById(category + '-products').innerHTML = html;
        setTimeout(setupAddToCart, 10);
    }
                case 'cart':
                    mainContent.innerHTML = `<h2>Your Cart</h2><div id='cart-items'></div>`;
                    renderCart();
                    break;
                case 'login':
                    mainContent.innerHTML = `<h2>Login / Signup</h2>
                        <form id='login-form' class='login-form'>
                            <label for='email'>Email:</label><br>
                            <input type='email' id='email' name='email' required placeholder='Enter your email'><br><br>
                            <label for='password'>Password:</label><br>
                            <input type='password' id='password' name='password' required placeholder='Enter your password'><br><br>
                            <button type='submit'>Login</button>
                        </form>
                        <div id='login-message'></div>`;
                    setupLoginForm();
                    break;
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
                navLinks.forEach(l => l.classList.remove('active'));
                document.getElementById('home-link').classList.add('active');
                loadSection('home');
            }, 1000);
        });
    }
            }
            mainContent.classList.add('fade-in');
        }, 200);

    }

    function setupAddToCart() {
        const buttons = document.querySelectorAll('.add-cart-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const card = btn.closest('.product-card');
                const id = card.getAttribute('data-id');
                const name = card.getAttribute('data-name');
                const price = parseInt(card.getAttribute('data-price'));
                const img = card.getAttribute('data-img');
                const size = card.querySelector('.size-select').value;
                addToCart({ id, name, price, img, size, quantity: 1 });
            });
        });
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

    function renderCart() {
        const cartDiv = document.getElementById('cart-items');
        if (!isLoggedIn || !userEmail) {
            cartDiv.innerHTML = '<p>Please login to view your cart.</p>';
            return;
        }
        if (!cart.length) {
            cartDiv.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }
        let total = 0;
        let html = '<table class="cart-table"><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th>Remove</th></tr>';
        cart.forEach((item, i) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            html += `<tr>
                <td><img src='${item.img}' alt='' style='width:40px;height:40px;border-radius:4px;margin-right:8px;vertical-align:middle;'>${item.name}</td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>₹${itemTotal}</td>
                <td><button class='remove-cart-btn' data-index='${i}'>Remove</button></td>
            </tr>`;
        });
        html += `<tr><td colspan='3' style='text-align:right;font-weight:bold;'>Total:</td><td colspan='2' style='font-weight:bold;'>₹${total}</td></tr>`;
        html += '</table>';
        html += '<button class="checkout-btn">Proceed to Checkout</button>';
        cartDiv.innerHTML = html;
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
            cartDiv.innerHTML = `<div class='checkout-success'>Thank you for your purchase! Your order has been placed successfully.</div>`;
        });
    }
});