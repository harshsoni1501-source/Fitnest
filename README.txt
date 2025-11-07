===============================================================
                    FITNEST E-COMMERCE WEBSITE
           Premium Fitness Apparel - Built with HTML, CSS, JS
===============================================================

PROJECT OVERVIEW
================
Fitnest is a minimalist, luxury e-commerce website inspired by 
Garmentory's elegant design aesthetic. The site showcases a curated 
collection of premium fitness apparel for men and women. 

Built with vanilla HTML, CSS, and JavaScript - no frameworks or 
build tools required. The frontend runs entirely in the browser 
using localStorage for cart and user data persistence.

TECHNOLOGY STACK
================
Frontend:
  - HTML5 (semantic markup)
  - CSS3 (responsive design, design tokens)
  - Vanilla JavaScript (no frameworks)

Backend (Optional):
  - Java with JDBC
  - MySQL database

QUICK START
===========

OPENING THE SITE LOCALLY:
1. Extract the project folder to your desired location
2. Open WebContent/index.html in any modern web browser
3. The site will load with full functionality - no server required!

FOLDER STRUCTURE
================
fitnest/
├── WebContent/                    # Frontend files
│   ├── index.html                # Home page with hero & featured products
│   ├── products.html             # Product listing with filtering
│   ├── product.html              # Product detail page
│   ├── cart.html                 # Shopping cart
│   ├── login.html                # Login page
│   ├── register.html             # User registration
│   ├── about.html                # About Fitnest
│   ├── contact.html              # Contact form
│   ├── css/
│   │   └── style.css             # All styles with design tokens
│   ├── js/
│   │   └── script.js             # All JavaScript functionality
│   └── public/
│       ├── mens-black-crew-neck-t-shirt-fitness.jpg
│       ├── mens-black-training-shorts.jpg
│       ├── mens-gray-joggers-athleisure.jpg
│       ├── mens-black-compression-tank.jpg
│       ├── womens-black-high-waist-leggings.jpg
│       ├── womens-black-sports-bra.jpg
│       ├── womens-white-fitted-athletic-tank.jpg
│       └── womens-black-training-shorts.jpg
│
├── src/com/fitnest/               # Backend Java source files
│   ├── util/
│   │   └── DBUtil.java           # Database connection utility
│   ├── model/
│   │   ├── Product.java          # Product model class
│   │   ├── User.java             # User model class
│   │   └── Order.java            # Order model class
│   └── dao/
│       ├── ProductDAO.java       # Product data access object
│       ├── UserDAO.java          # User data access object
│       └── OrderDAO.java         # Order data access object
│
├── fitnest_schema.sql            # MySQL database schema
└── README.txt                    # This file

FEATURES
========

FRONTEND FEATURES:
✓ Responsive product grid with category filtering (Men/Women/All)
✓ Product detail pages with size and color selection
✓ Shopping cart with quantity adjustment and remove functionality
✓ Cart persistence using browser localStorage
✓ User login/registration with localStorage (demo)
✓ Contact form with message handling
✓ About page with brand story and mission
✓ Elegant, minimalist design inspired by Garmentory
✓ Smooth navigation between all pages
✓ Mobile-responsive layout
✓ Design system with CSS custom properties (tokens)

PRODUCT CATALOG:
Men's Collection (4 items):
  • Classic Crew Neck Tee - $49.99
  • Performance Training Shorts - $59.99
  • Flex Joggers - $79.99
  • Compression Tank Top - $44.99

Women's Collection (4 items):
  • High-Waist Leggings - $89.99
  • Sports Bra - Maximum Support - $69.99
  • Fitted Athletic Tank - $54.99
  • Women's Training Shorts - $64.99

DESIGN SYSTEM
=============
Color Palette:
  Primary Background: #faf8f5 (beige)
  Secondary Background: #ffffff (white)
  Dark Accent: #1a1a1a (black)
  Light Accent: #e8e6e1 (light beige)
  Text Primary: #1a1a1a (dark)
  Text Secondary: #666666 (gray)

Typography:
  Font Family: Georgia, serif (elegant, minimalist)
  Heading Font Size: 28px - 48px
  Body Font Size: 14px - 16px
  Letter Spacing: 0.5px - 1px (for sophistication)

Layout:
  Max Container Width: 1200px
  Grid System: CSS Grid + Flexbox
  Responsive Breakpoint: 768px (mobile)

HOW TO USE THE SITE
===================

BROWSING PRODUCTS:
1. From Home page, click "Shop Men" or "Shop Women"
2. Use filter buttons to view All, Men, or Women products
3. Click any product card to view details

ADDING TO CART:
1. Click "Add to Cart" on product grid OR
2. Visit product detail page, select size/color/quantity, click "Add to Cart"
3. Products are saved to your browser's cart

VIEWING CART:
1. Click "Cart" in navigation header
2. Adjust quantities with +/- buttons
3. Remove items with "Remove" button
4. See order summary with subtotal, shipping, and total

CHECKOUT:
1. Click "Proceed to Checkout" button
2. You'll be directed to login page
3. Create account or login with credentials

AUTHENTICATION:
1. Click "Login" to sign in with existing account
2. Click "Register" to create new account
3. Credentials stored in browser localStorage (demo version)

CONTACT:
1. Go to Contact page via header navigation
2. Fill out form with name, email, subject, message
3. Submit message (demo confirmation)

ADDING NEW PRODUCTS
===================

TO ADD PRODUCTS VIA FRONTEND:
Currently, the site displays 8 sample products from the JavaScript 
array in js/script.js. To add more products:

1. Open WebContent/js/script.js
2. Find the "products" array (line ~3)
3. Add a new product object following this format:

    {
        id: 9,
        name: 'Product Name',
        category: 'men' or 'women',
        price: 99.99,
        image: '/image-filename.jpg',
        description: 'Product description here',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Black', 'White', 'Navy']
    }

4. Save the file and refresh the browser

TO ADD PRODUCT IMAGES:
1. Add your image files to WebContent/public/ folder
2. Use filename in product's "image" field (e.g., '/your-image.jpg')
3. Recommended image size: 400x500px (landscape)
4. Supported formats: JPG, PNG, WebP

OPTIONAL: JAVA BACKEND & MYSQL SETUP
=====================================

The project includes complete Java backend files for future MySQL 
integration. Currently, the site runs without a backend server.

TO CONNECT TO MYSQL:

1. Install MySQL and create database:
   - MySQL Host: localhost
   - Username: root
   - Password: password123
   - Database Name: fitnest

2. Run the SQL schema:
   - Open MySQL command line or MySQL Workbench
   - Run fitnest_schema.sql to create tables
   - Sample products will be auto-populated

3. Compile Java files:
   - Set up Java project in IDE (Eclipse, IntelliJ)
   - Add MySQL JDBC driver (mysql-connector-java)
   - Compile src/com/fitnest/ files

4. Available Java Classes:

   DBUtil.java:
   - Handles MySQL connection/disconnection
   - Usage: Connection conn = DBUtil.getConnection();

   ProductDAO.java:
   - getAllProducts() - retrieve all products
   - getProductById(id) - get single product
   - getProductsByCategory(category) - filter by Men/Women
   - addProduct(product) - insert new product
   - updateProduct(product) - modify existing product
   - deleteProduct(id) - remove product

   UserDAO.java:
   - createUser(user) - register new user
   - getUserById(id) - retrieve user by ID
   - getUserByEmail(email) - find user by email
   - updateUser(user) - modify user info
   - deleteUser(id) - remove user account

   OrderDAO.java:
   - createOrder(order) - place new order
   - getOrderById(id) - retrieve order details
   - getUserOrders(userId) - get user's order history
   - updateOrderStatus(orderId, status) - change order status
   - deleteOrder(id) - cancel order

DATABASE SCHEMA
===============

USERS TABLE:
  id (INT, PRIMARY KEY, AUTO_INCREMENT)
  name (VARCHAR 100)
  email (VARCHAR 100, UNIQUE)
  password (VARCHAR 255)
  created_at (TIMESTAMP)

PRODUCTS TABLE:
  id (INT, PRIMARY KEY, AUTO_INCREMENT)
  name (VARCHAR 200)
  category (VARCHAR 50) - 'men' or 'women'
  price (DECIMAL 10,2)
  description (TEXT)
  image_url (VARCHAR 500)
  stock (INT, DEFAULT 10)
  created_at (TIMESTAMP)

ORDERS TABLE:
  id (INT, PRIMARY KEY, AUTO_INCREMENT)
  user_id (INT, FOREIGN KEY)
  order_date (TIMESTAMP)
  total_amount (DECIMAL 10,2)
  status (VARCHAR 50) - 'pending', 'completed', 'cancelled'

ORDER_ITEMS TABLE:
  id (INT, PRIMARY KEY, AUTO_INCREMENT)
  order_id (INT, FOREIGN KEY)
  product_id (INT, FOREIGN KEY)
  quantity (INT)
  price (DECIMAL 10,2)
  size (VARCHAR 10)
  color (VARCHAR 50)

BROWSER COMPATIBILITY
=====================
✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

The site uses modern CSS3 and ES6 JavaScript features.
Older browsers (IE11 and below) are not supported.

TROUBLESHOOTING
===============

PRODUCTS NOT DISPLAYING:
- Check that WebContent/js/script.js is in correct location
- Verify images are in WebContent/public/ folder
- Check browser console for JavaScript errors (F12)

CART NOT SAVING:
- Ensure browser allows localStorage
- Try clearing browser cache and cookies
- Disable private/incognito mode

IMAGES NOT LOADING:
- Verify image filenames match exactly (case-sensitive on Linux/Mac)
- Check image paths in js/script.js start with "/"
- Ensure images are in WebContent/public/ folder

PAGES NOT LINKING:
- All links are relative (e.g., "products.html")
- Make sure all HTML files are in WebContent/ root
- Don't move files to subfolders without updating links

PERFORMANCE TIPS
================
- Site is optimized to run locally with no server latency
- All data stored in browser memory (localStorage)
- Product images are lightweight (under 500KB each)
- CSS is minifiable for production use
- JavaScript has no external dependencies

CUSTOMIZATION GUIDE
===================

CHANGE BRAND NAME:
- Search "Fitnest" in all HTML files and replace with your brand
- Update header logo in each HTML file
- Modify about.html and footer

CHANGE COLORS:
- Open css/style.css
- Modify CSS custom properties at top (:root section)
- All colors are centralized for easy theming

CHANGE FONTS:
- css/style.css uses Georgia serif font
- To change, modify font-family property
- Update in multiple places: body, h1, h2, etc.

ADD NEW PAGES:
- Create new HTML file in WebContent/
- Copy header/footer from existing page
- Add link to header navigation in all files
- Link new page from existing pages

DEPLOYMENT
==========

TO DEPLOY TO WEB SERVER:
1. Upload entire WebContent/ folder to web host
2. Map domain to WebContent/ directory
3. All HTML/CSS/JS files will work as-is
4. No server configuration needed

TO CREATE INSTALLABLE ZIP:
1. Create folder: fitnest/
2. Copy WebContent/ to fitnest/
3. Copy src/ to fitnest/
4. Copy fitnest_schema.sql to fitnest/
5. Add README.txt to fitnest/
6. Right-click fitnest/ folder → Compress/ZIP
7. Share fitnest.zip with others

FUTURE ENHANCEMENTS
===================
- Connect to Java/MySQL backend for persistent data
- Add Stripe payment integration
- Implement user account dashboard
- Add product reviews and ratings
- Email confirmation for orders
- Admin panel for inventory management
- Advanced product search and filtering
- Wishlist functionality
- Product recommendations engine
- Analytics and reporting

SUPPORT & DOCUMENTATION
=======================
For questions or issues:
1. Check the Troubleshooting section above
2. Review browser console for error messages (F12)
3. Verify file paths and folder structure
4. Check SQL schema if using MySQL backend

PROJECT CREATED: November 2025
VERSION: 1.0

===============================================================
              Thank you for using Fitnest!
   Where Fashion Meets Fitness - Premium Apparel for Athletes
===============================================================
