CREATE TYPE order_status AS ENUM (
    'PAYMENT_PENDING',
    'SENT',
    'FINISHED',
    'CANCELED',
    'UNDEFINED'
);
CREATE TYPE payment_method AS ENUM ('CREDIT_CARD', 'BANK_TRANSFER');
CREATE TABLE orders(
    order_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    order_status VARCHAR DEFAULT 'UNDEFINED',
    payment_method VARCHAR DEFAULT 'BANK_TRANSFER',
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP,
);
CREATE TABLE order_item(
    order_item_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    order_id INT,
    product_id INT NOT NULL,
    amount INT NOT NULL,
    price INT NOT NULL,
    CONSTRAINT order_id_fk FOREIGN KEY(order_id) REFERENCES orders(order_id)
);