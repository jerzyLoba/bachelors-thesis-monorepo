-- insert dummy
INSERT INTO categories(category_name)
VALUES ('category1');
INSERT INTO categories(category_name)
VALUES ('category2');
INSERT INTO categories(category_name)
VALUES ('category3');
INSERT INTO categories(category_name)
VALUES ('category4');
INSERT INTO categories(category_name)
VALUES ('category5');
INSERT INTO categories(category_name)
VALUES ('category6');
INSERT INTO brands(brand_name)
VALUES ('brand1');
INSERT INTO brands(brand_name)
VALUES ('brand2');
INSERT INTO brands(brand_name)
VALUES ('brand3');
INSERT INTO brands(brand_name)
VALUES ('brand4');
INSERT INTO brands(brand_name)
VALUES ('brand5');
INSERT INTO brands(brand_name)
VALUES ('brand6');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (1, 1, 'product1');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (2, 2, 'product2');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (3, 3, 'product3');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (4, 4, 'product4');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (5, 5, 'product5');
INSERT INTO products(category_id, brand_id, product_name)
VALUES (6, 6, 'product6');
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (10000, 20, 1);
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (13210, 50, 2);
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (41720, 10, 3);
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (32100, 2, 4);
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (2130, 7, 5);
INSERT INTO product_inventory(price, quantity, product_id)
VALUES (7400, 22, 6);