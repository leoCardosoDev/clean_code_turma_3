drop table cccat3.item;
drop table cccat3.coupon;
drop table cccat3.order;
drop table cccat3.order_item;
drop schema cccat3 cascade;
create schema cccat3;

create table cccat3.item (
	id serial primary key,
	category text,
	description text,
	price numeric,
	width integer,
	height integer,
	length integer,
	weight integer
);

insert into cccat3.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Guitarra', 1000, 100, 50, 15, 3);
insert into cccat3.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Amplificador', 5000, 50, 50, 50, 22);
insert into cccat3.item (category, description, price, width, height, length, weight) values ('Acessórios', 'Cabo', 30, 10, 10, 10, 1);

create table cccat3.coupon (
	code text,
	percentage numeric,
	expire_date timestamp,
	primary key (code)
);

insert into cccat3.coupon (code, percentage, expire_date) values ('VALE20', 20, '2021-10-10T10:00:00');
insert into cccat3.coupon (code, percentage, expire_date) values ('VALE20_EXPIRED', 20, '2020-10-10T10:00:00');

create table cccat3.order (
	id serial,
	coupon text,
	code text,
	cpf text,
	issue_date timestamp,
	freight numeric,
	sequence integer,
	primary key (id)
);

create table cccat3.order_item (
	id_order integer,
	id_item integer,
	price numeric,
	quantity integer,
	primary key (id_order, id_item)
);
