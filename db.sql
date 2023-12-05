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
