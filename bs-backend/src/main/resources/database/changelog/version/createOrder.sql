--liquibase formatted sql

--changeset cinemania:10
DROP TABLE IF EXISTS order;
DROP SEQUENCE IF EXISTS order_order_id_seq;

--changeset cinemania:11
CREATE TABLE order(
    order_id serial PRIMARY KEY,
    total_price double(15) NOT NULL,
	date_of_order date NOT NULL
);
--rollback drop table order;

--todo
