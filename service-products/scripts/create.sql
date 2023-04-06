CREATE TABLE IF NOT EXISTS categories (
    category_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR
);
CREATE TABLE IF NOT EXISTS brands (
    brand_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    brand_name VARCHAR
);
CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_id INT,
    brand_id INT,
    product_name VARCHAR NOT NULL,
    CONSTRAINT category_id_fk FOREIGN KEY(category_id) REFERENCES categories(category_id),
    CONSTRAINT brand_id_fk FOREIGN KEY(brand_id) REFERENCES brands(brand_id)
);
CREATE TABLE IF NOT EXISTS product_inventory (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    price INT NOT NULL,
    quantity INT,
    product_id INT,
    CONSTRAINT product_id_fk FOREIGN KEY(product_id) REFERENCES products(product_id)
);