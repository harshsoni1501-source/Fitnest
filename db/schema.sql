-- Fitnest_database_schema.sql
-- SQL schema and seed data for the Fitnest website (Clothing, Apparel, Accessories)
-- Designed for PostgreSQL (syntax compatible with most RDBMS; minor tweaks may be needed for MySQL)

-- =====================
-- 1. Roles & users
-- =====================
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  role_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE RESTRICT,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(200),
  phone VARCHAR(20),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Simple audit trigger helper (Postgres example)
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_set_timestamp
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

-- =====================
-- 2. Product catalog
-- =====================
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(120) NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  short_description VARCHAR(500),
  long_description TEXT,
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  sale_price NUMERIC(10,2),
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE INDEX idx_products_category ON products(category_id);

CREATE TABLE product_images (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url VARCHAR(1000) NOT NULL,
  alt_text VARCHAR(255),
  is_primary BOOLEAN DEFAULT FALSE,
  position INTEGER DEFAULT 0
);

CREATE TABLE product_attributes (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  attribute_name VARCHAR(100) NOT NULL, -- e.g., Size, Color, Material
  attribute_value VARCHAR(255) NOT NULL
);

-- =====================
-- 3. Inventory (simple)
-- =====================
CREATE TABLE inventory (
  product_id INTEGER PRIMARY KEY REFERENCES products(id) ON DELETE CASCADE,
  sku VARCHAR(100) UNIQUE,
  stock INTEGER NOT NULL DEFAULT 0,
  safety_stock INTEGER NOT NULL DEFAULT 0,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- =====================
-- 4. Shopping cart & orders
-- =====================
CREATE TABLE carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price_at_added NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  order_number VARCHAR(50) NOT NULL UNIQUE,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  subtotal NUMERIC(12,2) NOT NULL,
  shipping NUMERIC(12,2) DEFAULT 0,
  tax NUMERIC(12,2) DEFAULT 0,
  total NUMERIC(12,2) NOT NULL,
  placed_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price NUMERIC(10,2) NOT NULL,
  line_total NUMERIC(12,2) NOT NULL
);

CREATE INDEX idx_order_user ON orders(user_id);

-- =====================
-- 5. Payments & coupons
-- =====================
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  payment_provider VARCHAR(100),
  provider_payment_id VARCHAR(255),
  amount NUMERIC(12,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE coupons (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) NOT NULL UNIQUE,
  description TEXT,
  discount_percent INTEGER CHECK (discount_percent >= 0 AND discount_percent <= 100),
  fixed_amount NUMERIC(10,2),
  valid_from TIMESTAMP WITH TIME ZONE,
  valid_to TIMESTAMP WITH TIME ZONE,
  active BOOLEAN DEFAULT TRUE,
  usage_limit INTEGER DEFAULT 0
);

-- coupon usage tracking
CREATE TABLE coupon_redemptions (
  id SERIAL PRIMARY KEY,
  coupon_id INTEGER NOT NULL REFERENCES coupons(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  order_id INTEGER REFERENCES orders(id),
  redeemed_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- =====================
-- 6. Reviews & ratings
-- =====================
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  title VARCHAR(255),
  body TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  is_approved BOOLEAN DEFAULT TRUE
);

-- =====================
-- 7. Addresses
-- =====================
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  label VARCHAR(100), -- e.g., Home, Office
  line1 VARCHAR(255) NOT NULL,
  line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  postal_code VARCHAR(20),
  country VARCHAR(100) DEFAULT 'India',
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- =====================
-- 8. Subscriptions & memberships (optional loyalty program)
-- =====================
CREATE TABLE subscription_plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE,
  price NUMERIC(10,2) NOT NULL,
  billing_cycle VARCHAR(50) NOT NULL, -- monthly, yearly
  features TEXT
);

CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  plan_id INTEGER NOT NULL REFERENCES subscription_plans(id) ON DELETE RESTRICT,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) DEFAULT 'active'
);

-- =====================
-- 9. Admin / audit logs
-- =====================
CREATE TABLE admin_logs (
  id SERIAL PRIMARY KEY,
  admin_user_id INTEGER REFERENCES users(id),
  action VARCHAR(255) NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- =====================
-- 10. Sample seed data (lightweight)
-- =====================
-- insert roles
INSERT INTO roles (name, description) VALUES
('admin','Site administrator'),
('customer','Registered customer'),
('guest','Unregistered/Guest');

-- insert a sample user (passwords should be hashed in real apps)
INSERT INTO users (role_id, email, password_hash, full_name) VALUES
(1, 'admin@fitnest.com', 'HASHED_PASSWORD_PLACEHOLDER', 'Fitnest Admin'),
(2, 'harsh@example.com', 'HASHED_PASSWORD_PLACEHOLDER', 'Harsh Soni');

-- categories
INSERT INTO categories (name, slug, description) VALUES
('Men','men','Clothing and accessories for men'),
('Women','women','Clothing and accessories for women'),
('Accessories','accessories','Fashion accessories like belts, caps, and jewelry');

-- products
INSERT INTO products (category_id, title, slug, short_description, price) VALUES
(1, 'Slim Fit Shirt','slim-fit-shirt','Cotton slim fit shirt for men', 1299.00),
(2, 'Summer Dress','summer-dress','Floral summer dress for women', 1999.00),
(3, 'Leather Belt','leather-belt','Genuine leather belt', 799.00);

-- inventory
INSERT INTO inventory (product_id, sku, stock, safety_stock) VALUES
(1, 'APP-SHIRT-001', 50, 5),
(2, 'APP-DRESS-001', 30, 3),
(3, 'ACC-BELT-001', 100, 10);

-- product images
INSERT INTO product_images (product_id, url, alt_text, is_primary) VALUES
(1, '/assets/images/slim-fit-shirt.jpg', 'Slim Fit Shirt', TRUE),
(2, '/assets/images/summer-dress.jpg', 'Summer Dress', TRUE),
(3, '/assets/images/leather-belt.jpg', 'Leather Belt', TRUE);

-- a sample subscription plan
INSERT INTO subscription_plans (name, slug, price, billing_cycle, features) VALUES
('Premium Shopper','premium-shopper', 299.00, 'monthly', 'Exclusive discounts, early access to sales, free shipping');

-- =====================
-- 11. Helpful views & common queries
-- =====================
-- view: product with primary image
CREATE OR REPLACE VIEW vw_products_with_image AS
SELECT p.*, pi.url as primary_image_url
FROM products p
LEFT JOIN product_images pi ON pi.product_id = p.id AND pi.is_primary = TRUE;

-- query: check stock before checkout
-- SELECT i.stock FROM inventory i WHERE i.product_id = <product_id>;

-- =====================
-- 12. Performance & constraints notes
-- =====================
-- 1) Add indexes on columns used for lookups (e.g., products.slug, users.email)
-- 2) For high read-volume, consider caching frequently-read resources (product listings)
-- 3) Use transactions when creating orders + payment + inventory adjustments
-- 4) For GDPR/Privacy: keep anonymization and deletion policies for users

-- =====================
-- 13. Integration / migration tips
-- =====================
-- - In your Node/Express or whichever backend: run these CREATE TABLE statements as migrations
-- - Use an ORM (Prisma/TypeORM/Sequelize) for faster development and safer migrations
-- - Hash passwords with bcrypt/argon2 and never store plain passwords
-- - Use prepared statements or parameterized queries to avoid SQL injection

-- End of Fitnest_database_schema.sql
