--liquibase formatted sql

--changeset cinemania:13
DROP TABLE IF EXISTS rating;
DROP SEQUENCE IF EXISTS rating_rating_id_seq;

--changeset cinemania:14
CREATE TABLE rating(
    rating_id serial PRIMARY KEY,
    score int(1) NOT NULL,
    review varchar(255)
);
--rollback drop table rating;

--todo
