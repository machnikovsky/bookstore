--liquibase formatted sql

--changeset cinemania:13
DROP TABLE IF EXISTS person;
DROP SEQUENCE IF EXISTS person_person_id_seq;

--changeset cinemania:14
CREATE TYPE gender AS ENUM('FEMALE', 'MALE', 'OTHER');
CREATE TABLE person(
    person_id serial PRIMARY KEY,
    first_name varchar(15) NOT NULL,
    last_name varchar(30) NOT NULL,
    date_of_birth date,
    phone_number varchar(11) NOT NULL,
    gender gender NOT NULL
);
--rollback drop table person;

--todo


