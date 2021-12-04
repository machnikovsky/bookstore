--liquibase formatted sql

--changeset cinemania:4
DROP TABLE IF EXISTS book;
DROP SEQUENCE IF EXISTS book_book_id_seq;

--changeset cinemania:5
CREATE TYPE genre AS ENUM('HORROR', 'CONTEMPORARY', 'THRILLER', 'SCIFI', 'FANTASY', 'ADVENTURE', 'ROMANCE',
                         'MYSTERY', 'NONFICTION', 'CHILDRENS');

CREATE TABLE book (
    book_id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    genre genre NOT NULL,
    original_publication_year int(4) NOT NULL
);
--rollback drop table book;

--todo
--changeset cinemania:6
INSERT INTO book(book_name) values ('book_one');
INSERT INTO book(book_name) values ('book_two');
INSERT INTO book(book_name) values ('book_three');