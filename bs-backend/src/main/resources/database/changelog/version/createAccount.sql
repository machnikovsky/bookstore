--liquibase formatted sql

--changeset cinemania:13
DROP TABLE IF EXISTS account;
DROP SEQUENCE IF EXISTS account_account_id_seq;

--changeset cinemania:14
CREATE TYPE role AS ENUM('USER', 'WORKER', 'ADMIN');
CREATE TABLE account(
    account_id serial PRIMARY KEY,
    login varchar(15) NOT NULL,
    password varchar(15) NOT NULL,
    email varchar(15) NOT NULL,
    creation_date date NOT NULL,
    role role NOT NULL
);
--rollback drop table account;

--todo


