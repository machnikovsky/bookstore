--liquibase formatted sql

--changeset cinemania:7
DROP TABLE IF EXISTS author;
DROP SEQUENCE IF EXISTS author_author_id_seq;

--changeset cinemania:8
CREATE TABLE author (
       author_id serial PRIMARY KEY,
       first_name varchar(15) NOT NULL,
       last_name varchar(15),
       country varchar(15)
);
--rollback drop table author;

--todo
