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

--changeset cinemania:9
INSERT INTO author(author_name) values ('author_one');
INSERT INTO author(author_name) values ('author_two');
INSERT INTO author(author_name) values ('author_three');