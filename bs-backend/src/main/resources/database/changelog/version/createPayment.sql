--liquibase formatted sql

--changeset cinemania:13
DROP TABLE IF EXISTS payment;
DROP SEQUENCE IF EXISTS payment_payment_id_seq;

--changeset cinemania:14
CREATE TYPE status AS ENUM('ACCEPTED', 'REJECTED');
CREATE TABLE payment(
    payment_id serial PRIMARY KEY,
    status status NOT NULL
);
--rollback drop table payment;

--todo
