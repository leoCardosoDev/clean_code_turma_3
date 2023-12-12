create schema cccat3;

CREATE TABLE cccat3.item (
    id SERIAL PRIMARY KEY,
    category VARCHAR(255),
    description VARCHAR(255),
    price DOUBLE PRECISION,
    width DOUBLE PRECISION,
    height DOUBLE PRECISION,
    length DOUBLE PRECISION,
    weight DOUBLE PRECISION
);

INSERT INTO cccat3.item (category, description, price, width, height, length, weight) VALUES ('Instrumentos Musicais', 'Guitarra',1000, 100, 50, 15, 3);
INSERT INTO cccat3.item (category, description, price, width, height, length, weight) VALUES ('Instrumentos Musicais', 'Amplificador',5000, 50, 50, 50, 22);
INSERT INTO cccat3.item (category, description, price, width, height, length, weight) VALUES ('Acessórios', 'Cabo',30, 10, 10, 10, 1);

SELECT * FROM cccat3.item;

CREATE TABLE cccat3.order (
    id SERIAL PRIMARY KEY,
    coupon VARCHAR(255),
    code VARCHAR(255),
    cpf VARCHAR(255),
    issue_date TIMESTAMP,
    freight DOUBLE PRECISION,
    sequence INT
);

INSERT INTO cccat3.order (coupon, code, cpf, issue_date, freight, sequence) VALUES (NULL, '202100000001', '847.903.332-05', '2021-10-11 16:48:51.722', 280, 1);
INSERT INTO cccat3.order (coupon, code, cpf, issue_date, freight, sequence) VALUES (NULL, '202100000001', '847.903.332-05', '2021-10-11 18:21:53.155', 280, 1);

SELECT * FROM cccat3.order;
