-- Fitnest E-Commerce Database Schema

CREATE DATABASE IF NOT EXISTS fitnest;
USE fitnest;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    image_url VARCHAR(255),
    stock INT DEFAULT 10,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Order Items Table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    size VARCHAR(10),
    color VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Sample Fitnest Apparel Products - 8 items (4 Men, 4 Women)
INSERT INTO products (name, description, price, category, image_url, stock) VALUES
-- Men's Products
('Classic Crew Neck Tee', 'Premium quality crew neck tee with moisture-wicking fabric. Perfect for workouts and everyday wear.', 49.99, 'men', '/mens-black-crew-neck-t-shirt-fitness.jpg', 50),
('Performance Training Shorts', 'Lightweight training shorts with internal compression and deep pockets for maximum comfort and functionality.', 59.99, 'men', '/mens-black-training-shorts.jpg', 40),
('Flex Joggers', 'Versatile joggers designed for both gym and casual wear with tapered ankles and tech fabric.', 79.99, 'men', '/mens-gray-joggers-athleisure.jpg', 35),
('Compression Tank Top', 'Supportive compression tank with breathable mesh panels for high-intensity workouts.', 44.99, 'men', '/mens-black-compression-tank.jpg', 45),
-- Women's Products
('High-Waist Leggings', 'Premium high-waist leggings with tummy control and phone pockets. Designed for comfort and support.', 89.99, 'women', '/womens-black-high-waist-leggings.jpg', 55),
('Sports Bra - Maximum Support', 'Maximum support sports bra with underwire and moisture-wicking technology for intense workouts.', 69.99, 'women', '/womens-black-sports-bra.jpg', 50),
('Fitted Athletic Tank', 'Sleek fitted tank with built-in bra support. Perfect for studio workouts and active lifestyle.', 54.99, 'women', '/womens-white-fitted-athletic-tank.jpg', 60),
('Women\'s Training Shorts', 'Breathable training shorts with hidden pockets and moisture-wicking fabric.', 64.99, 'women', '/womens-black-training-shorts.jpg', 48);
