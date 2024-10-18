CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone_number VARCHAR(15),
    role VARCHAR(20) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shipping_addresses (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    address_line_1 VARCHAR(255) NOT NULL,
    address_line_2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shopping_carts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cart_items (
    id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES shopping_carts(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    shipping_address_id INT REFERENCES shipping_addresses(id),
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pendiente', 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    amount DECIMAL(10, 2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    payment_status VARCHAR(50) DEFAULT 'pendiente',
    payment_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shipments (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    shipment_status VARCHAR(50) DEFAULT 'pendiente',
    tracking_number VARCHAR(100),
    carrier VARCHAR(100), 
    shipped_date TIMESTAMP,
    delivered_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inventory_logs (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    change_type VARCHAR(50),
    quantity INT NOT NULL,
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Llenado de tablas.

INSERT INTO users (username, email, password_hash, first_name, last_name, phone_number, role)
VALUES 
('johndoe', 'johndoe@gmail.com', 'hashpassword123', 'John', 'Doe', '555-1234', 'customer'),
('janesmith', 'janesmith@gmail.com', 'hashpassword456', 'Jane', 'Smith', '555-5678', 'customer'),
('michaelbrown', 'michaelbrown@gmail.com', 'hashpassword101', 'Michael', 'Brown', '555-1122', 'customer'),
('emilyjones', 'emilyjones@gmail.com', 'hashpassword102', 'Emily', 'Jones', '555-3344', 'customer'),
('adminuser', 'admin@shop.com', 'adminpassword789', 'Admin', 'User', '555-9876', 'admin'),
('shopmanager', 'manager@shop.com', 'managerpassword321', 'Manager', 'Shop', '555-4433', 'admin');

INSERT INTO shipping_addresses (user_id, address_line_1, address_line_2, city, state, postal_code, country)
VALUES 
(1, '123 Main St', NULL, 'New York', 'NY', '10001', 'USA'),
(2, '456 Maple Ave', 'Apt 101', 'Los Angeles', 'CA', '90001', 'USA'),
(3, '789 Pine St', NULL, 'Chicago', 'IL', '60601', 'USA'),
(4, '101 Oak St', 'Suite 200', 'Houston', 'TX', '77001', 'USA');

INSERT INTO categories (name, description)
VALUES 
('Electronics', 'Devices and gadgets'),
('Clothing', 'Apparel and accessories'),
('Home & Garden', 'Furniture, decor, and appliances'),
('Books', 'Fiction, non-fiction, and academic books'),
('Beauty & Health', 'Cosmetics, skincare, and health products');

INSERT INTO products (name, description, price, stock_quantity, category_id, image_url)
VALUES 
('Smartphone', 'Latest model smartphone with 128GB storage', 699.99, 50, 1, 'https://example.com/smartphone.jpg'),
('Jeans', 'Comfortable blue jeans', 39.99, 200, 2, 'https://example.com/jeans.jpg'),
('Coffee Maker', 'Automatic coffee maker with timer', 89.99, 30, 3, 'https://example.com/coffeemaker.jpg'),
('Novel - Mystery Thriller', 'Exciting mystery thriller novel by popular author', 14.99, 100, 4, 'https://example.com/mysterybook.jpg'),
('Skincare Set', 'Complete skincare set for healthy glowing skin', 49.99, 75, 5, 'https://example.com/skincare.jpg'),
('Gaming Laptop', 'High-performance gaming laptop with RTX 3080', 1999.99, 25, 1, 'https://example.com/gaminglaptop.jpg');

INSERT INTO shopping_carts (user_id)
VALUES 
(1),
(2),
(3),
(4);

INSERT INTO cart_items (cart_id, product_id, quantity)
VALUES 
(1, 1, 1),  -- John Doe's cart contains 1 smartphone
(1, 3, 2),  -- John Doe's cart contains 2 coffee makers
(2, 2, 3),  -- Jane Smith's cart contains 3 pairs of jeans
(3, 6, 2),  -- Michael Brown's cart contains 2 skincare sets
(3, 5, 1),  -- Michael Brown's cart contains 1 mystery novel
(4, 7, 1);  -- Emily Jones' cart contains 1 gaming laptop

INSERT INTO orders (user_id, shipping_address_id, total, status)
VALUES 
(1, 1, 879.97, 'pendiente'),  -- John Doe's order
(2, 2, 119.97, 'pendiente'),  -- Jane Smith's order
(3, 3, 79.97, 'pendiente'),  -- Michael Brown's order
(4, 4, 1999.99, 'pendiente');  -- Emily Jones' order

INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES 
(1, 1, 1, 699.99),  -- 1 smartphone for John Doe
(1, 3, 2, 89.99),   -- 2 coffee makers for John Doe
(2, 2, 3, 39.99),   -- 3 pairs of jeans for Jane Smith
(3, 6, 2, 49.99),  -- 2 skincare sets for Michael Brown
(3, 5, 1, 14.99),  -- 1 mystery novel for Michael Brown
(4, 7, 1, 1999.99);  -- 1 gaming laptop for Emily Jones

INSERT INTO payments (order_id, amount, payment_method, payment_status, payment_date)
VALUES 
(1, 879.97, 'Credit Card', 'completado', '2024-10-15 14:30:00'),
(2, 119.97, 'PayPal', 'completado', '2024-10-15 15:00:00'),
(3, 79.97, 'Credit Card', 'completado', '2024-10-16 11:00:00'),
(4, 1999.99, 'Credit Card', 'pendiente', NULL);

INSERT INTO shipments (order_id, shipment_status, tracking_number, carrier, shipped_date)
VALUES 
(1, 'shipped', 'TRACK123', 'FedEx', '2024-10-16 10:00:00'),
(2, 'pendiente', NULL, NULL, NULL),
(3, 'shipped', 'TRACK456', 'UPS', '2024-10-17 09:00:00'),
(4, 'pendiente', NULL, NULL, NULL);

INSERT INTO product_reviews (product_id, user_id, rating, review)
VALUES 
(1, 1, 5, 'Great smartphone, very satisfied with the purchase!'),
(2, 2, 4, 'Jeans are good, but the sizing could be better.'),
(5, 3, 4, 'Good read, but the plot was predictable.'),
(6, 4, 5, 'Excellent skincare set, my skin has never looked better!'),
(7, 4, 5, 'Best gaming laptop I have ever used!');

INSERT INTO inventory_logs (product_id, change_type, quantity)
VALUES 
(1, 'purchase', -1),  -- 1 smartphone sold
(3, 'purchase', -2),  -- 2 coffee makers sold
(2, 'purchase', -3),  -- 3 pairs of jeans sold
(6, 'purchase', -2),  -- 2 skincare sets sold
(5, 'purchase', -1),  -- 1 mystery novel sold
(7, 'purchase', -1);  -- 1 gaming laptop sold
