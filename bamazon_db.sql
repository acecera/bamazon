DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(13,4) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM bamazon_db.products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1519016998, "Oakley Mod5 Factory Pilot Helmet", "Sports & Outdoor", 240.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1519016999, "Oakley Mod3 Factory Pilot Helmet", "Sports & Outdoor", 150.00, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1508565446, "Oakley Flight Deck Snow Goggles", "Sports & Outdoor", 199.95, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1508565430, "Anon M2 MFI Goggle", "Sports & Outdoor", 191.96, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1508565435, "Electric EG2 Goggles", "Sports & Outdoor", 159.95, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1518996203, "Lib Tech Banana Magic FP Snowboard", "Sports & Outdoor", 599.95, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1518996445, "Lib Tech Skate Banana Snowbaord", "Sports & Outdoor", 499.95, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1518996751, "Lib Tech T.Rice Gold Member FP Snowboard", "Sports & Outdoor", 749.95, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1518996893, "Burton Custom X Snowbaord", "Sports & Outdoor", 749.95, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1518996891, "Burton Custom Snowboard", "Sports & Outdoor", 599.95, 15);