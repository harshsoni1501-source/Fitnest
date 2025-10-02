// SPA navigation and animation logic will go here

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
            alert('Mobile: ' + userMobile + '\nWelcome to your profile!');
        };
        document.getElementById('order-history').onclick = function() {
            loadOrderHistory();
            menu.style.display = 'none';
        };
        document.getElementById('profile-logout').onclick = function() {
            isLoggedIn = false;
            userMobile = null;
            div.remove();
            loadSection('home');
        };
    }

    function loadOrderHistory() {
        mainContent.innerHTML = '<h2>Your Order History</h2><div id="order-history-list">Loading...</div>';
        fetch('http://localhost:4567/api/orders/history?mobile=' + userMobile)
            .then(res => res.json())
            .then(orders => {
                const listDiv = document.getElementById('order-history-list');
                if (!orders.length) {
                    listDiv.innerHTML = '<p>No orders found.</p>';
                    return;
                }
                let html = '';
                orders.forEach(order => {
                    html += `<div class='order-block'><div class='order-header'>Order #${order.orderId} <span class='order-date'>${new Date(order.createdAt).toLocaleString()}</span></div><ul class='order-items'>`;
                    order.items.forEach(item => {
                        html += `<li><img src='${item.img}' alt='' style='width:32px;height:32px;border-radius:4px;margin-right:8px;vertical-align:middle;'>${item.name} (${item.size}) x${item.quantity} - ₹${item.price * item.quantity}</li>`;
                    });
                    html += '</ul></div>';
                });
                listDiv.innerHTML = html;
            });
    }
    const mainContent = document.getElementById('main-content');
    let cart = [];
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
    // Fetch products from backend
    function fetchProducts(category) {
        fetch('http://localhost:4567/api/products?category=' + category)
            .then(res => res.json())
            .then(products => {
                let html = '';
                products.forEach(p => {
                    html += `<div class='product-card' data-id='${p.id}' data-name='${p.name}' data-price='${p.price}' data-img='${p.img}'>
                        <img src='${p.img}' alt='${p.name}' class='product-img'/>
                        <div class='product-info'>
                            <h3>${p.name}</h3>
                            <p>${p.description || ''}</p>
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
            });
    }
                case 'cart':
                    mainContent.innerHTML = `<h2>Your Cart</h2><div id='cart-items'></div>`;
                    renderCart();
                    break;
                case 'login':
                    mainContent.innerHTML = `<h2>Login / Signup</h2>
                        <form id='login-form' class='login-form'>
                            <label for='mobile'>Mobile Number:</label><br>
                            <input type='tel' id='mobile' name='mobile' pattern='[0-9]{10}' maxlength='10' required placeholder='Enter 10-digit mobile'><br><br>
                            <button type='button' id='send-otp-btn'>Send OTP</button><br><br>
                            <div id='otp-section' style='display:none;'>
                                <label for='otp'>Enter OTP:</label><br>
                                <input type='text' id='otp' name='otp' maxlength='6' required placeholder='Enter OTP'><br><br>
                                <button type='submit' id='verify-otp-btn'>Verify OTP</button>
                            </div>
                        </form>
                        <div id='login-message'></div>`;
                    setupLoginForm();
                    break;
    function setupLoginForm() {
        const sendOtpBtn = document.getElementById('send-otp-btn');
        const otpSection = document.getElementById('otp-section');
        const loginForm = document.getElementById('login-form');
        const loginMsg = document.getElementById('login-message');
        sendOtpBtn.addEventListener('click', function() {
            const mobile = document.getElementById('mobile').value;
            if (!/^\d{10}$/.test(mobile)) {
                loginMsg.textContent = 'Please enter a valid 10-digit mobile number.';
                loginMsg.style.color = 'red';
                return;
            }
            fetch('http://localhost:4567/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobile })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    otpSection.style.display = 'block';
                    loginMsg.textContent = 'OTP sent to ' + mobile + ' (simulated)';
                    loginMsg.style.color = 'green';
                } else {
                    loginMsg.textContent = 'Failed to send OTP.';
                    loginMsg.style.color = 'red';
                }
            });
        });
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const mobile = document.getElementById('mobile').value;
            const otp = document.getElementById('otp').value;
            fetch('http://localhost:4567/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobile, otp })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    loginMsg.textContent = 'Login successful!';
                    loginMsg.style.color = 'green';
                    isLoggedIn = true;
                    userMobile = mobile;
                    setTimeout(() => {
                        showProfileDropdown();
                        navLinks.forEach(l => l.classList.remove('active'));
                        document.getElementById('home-link').classList.add('active');
                        loadSection('home');
                    }, 1000);
                } else {
                    loginMsg.textContent = 'Invalid OTP.';
                    loginMsg.style.color = 'red';
                }
            });
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
        if (!isLoggedIn || !userMobile) {
            alert('Please login to add items to cart.');
            return;
        }
        fetch('http://localhost:4567/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobile: userMobile,
                productId: product.id,
                size: product.size,
                quantity: 1
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert('Added to cart!');
            } else {
                alert('Failed to add to cart.');
            }
        });
    }

    function renderCart() {
        const cartDiv = document.getElementById('cart-items');
        if (!isLoggedIn || !userMobile) {
            cartDiv.innerHTML = '<p>Please login to view your cart.</p>';
            return;
        }
        fetch('http://localhost:4567/api/cart?mobile=' + userMobile)
            .then(res => res.json())
            .then(items => {
                if (!items.length) {
                    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
                    return;
                }
                let total = 0;
                let html = '<table class="cart-table"><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th>Remove</th></tr>';
                items.forEach((item, i) => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    html += `<tr>
                        <td><img src='${item.img}' alt='' style='width:40px;height:40px;border-radius:4px;margin-right:8px;vertical-align:middle;'>${item.name}</td>
                        <td>${item.size}</td>
                        <td>${item.quantity}</td>
                        <td>₹${itemTotal}</td>
                        <td><button class='remove-cart-btn' data-id='${item.id}'>Remove</button></td>
                    </tr>`;
                });
                html += `<tr><td colspan='3' style='text-align:right;font-weight:bold;'>Total:</td><td colspan='2' style='font-weight:bold;'>₹${total}</td></tr>`;
                html += '</table>';
                html += '<button class="checkout-btn">Proceed to Checkout</button>';
                cartDiv.innerHTML = html;
                document.querySelectorAll('.remove-cart-btn').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const cartId = btn.getAttribute('data-id');
                        fetch('http://localhost:4567/api/cart/remove', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ cartId })
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) renderCart();
                            else alert('Failed to remove item.');
                        });
                    });
                });
                document.querySelector('.checkout-btn').addEventListener('click', function() {
                    fetch('http://localhost:4567/api/order/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ mobile: userMobile })
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            cartDiv.innerHTML = `<div class='checkout-success'>Thank you for your purchase! Your order #${data.orderId} has been placed successfully.</div>`;
                        } else {
                            alert('Checkout failed: ' + (data.error || 'Unknown error'));
                        }
                    });
                });
            });
    }
});