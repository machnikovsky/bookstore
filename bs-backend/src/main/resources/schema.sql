-- DROPPING TABLES
DROP TABLE IF EXISTS assortment;
DROP TABLE IF EXISTS issue_order;
DROP TABLE IF EXISTS campaign_issue;
DROP TABLE IF EXISTS author_book;
DROP TABLE IF EXISTS discount_issue;
DROP TABLE IF EXISTS bookstore;
DROP TABLE IF EXISTS issue;
DROP TABLE IF EXISTS publishing_house;
DROP TABLE IF EXISTS campaign;
DROP TABLE IF EXISTS discount;
DROP TABLE IF EXISTS author;
DROP TABLE IF EXISTS "order";
DROP TABLE IF EXISTS payment;
DROP TABLE IF EXISTS shipment;
DROP TABLE IF EXISTS rating;
DROP TABLE IF EXISTS account;
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS book;

-- DROPPING SEQUENCES
DROP SEQUENCE IF EXISTS issue_issue_id_seq;
DROP SEQUENCE IF EXISTS bookstore_bookstore_id_seq;
DROP SEQUENCE IF EXISTS assortment_assortment_id_seq;
DROP SEQUENCE IF EXISTS account_account_id_seq;
DROP SEQUENCE IF EXISTS author_author_id_seq;
DROP SEQUENCE IF EXISTS book_book_id_seq;
DROP SEQUENCE IF EXISTS order_order_id_seq;
DROP SEQUENCE IF EXISTS payment_payment_id_seq;
DROP SEQUENCE IF EXISTS person_person_id_seq;
DROP SEQUENCE IF EXISTS publishing_house_publishing_house_id_seq;
DROP SEQUENCE IF EXISTS campaign_campaign_id_seq;
DROP SEQUENCE IF EXISTS discount_discount_id_seq;
DROP SEQUENCE IF EXISTS shipment_shipment_id_seq;
DROP SEQUENCE IF EXISTS issue_order_issue_order_id_seq;

-- DROPPING ENUMS
DROP TYPE IF EXISTS cover_type;
DROP TYPE IF EXISTS role;
DROP TYPE IF EXISTS genre;
DROP TYPE IF EXISTS gender;
DROP TYPE IF EXISTS payment_status;
DROP TYPE IF EXISTS shipment_status;



-- CREATING ENUMS
CREATE TYPE cover_type AS ENUM ('hardcover', 'paperback', 'softwrap');
CREATE TYPE role AS ENUM ('USER', 'WORKER', 'ADMIN');
CREATE TYPE genre AS ENUM ('HORROR', 'CONTEMPORARY', 'THRILLER', 'SCIFI', 
    'FANTASY', 'ADVENTURE', 'ROMANCE', 'MYSTERY', 'FICTION', 'NONFICTION', 'CHILDRENS');
CREATE TYPE gender AS ENUM ('FEMALE', 'MALE', 'OTHER');
CREATE TYPE payment_status AS ENUM ('ACCEPTED', 'REJECTED');
CREATE TYPE shipment_status AS ENUM ('ACCEPTED', 'SHIPPED', 'DELIVERED');

-- CREATING TABLES
CREATE TABLE book (
    book_id serial PRIMARY KEY,
    title varchar(50) NOT NULL,
    genre genre NOT NULL,
    original_publication_year integer NOT NULL
);

CREATE TABLE publishing_house (
    publishing_house_id serial PRIMARY KEY,
    name varchar(40) NOT NULL,
    foundation_year integer NOT NULL
);

CREATE TABLE issue (
   issue_id serial PRIMARY KEY,
   language varchar(30) NOT NULL,
   publication_year integer NOT NULL,
   number_of_pages integer NOT NULL,
   cover_type cover_type NOT NULL,
   price float(2) NOT NULL,
   image_url varchar(255) NOT NULL,
   publishing_house_id integer REFERENCES publishing_house(publishing_house_id),
   book_id integer REFERENCES book(book_id)
);

CREATE TABLE bookstore (
    bookstore_id serial PRIMARY KEY,
    address varchar(60) NOT NULL
);

CREATE TABLE assortment (
    assortment_id serial PRIMARY KEY,
    count integer NOT NULL,
    bookstore_id serial REFERENCES bookstore(bookstore_id),
    issue_id serial REFERENCES issue(issue_id)
);

CREATE TABLE person (
    person_id serial PRIMARY KEY,
    first_name varchar(25) NOT NULL,
    last_name varchar(25) NOT NULL,
    date_of_birth date,
    phone_number varchar(11) NOT NULL,
    gender gender NOT NULL
);

CREATE TABLE account (
    account_id serial PRIMARY KEY,
    login varchar(25) NOT NULL,
    password varchar(25) NOT NULL,
    email varchar(25) NOT NULL,
    creation_date date NOT NULL,
    role role NOT NULL,
    person_id integer REFERENCES person(person_id)
);

CREATE TABLE author (
    author_id serial PRIMARY KEY,
    first_name varchar(25) NOT NULL,
    last_name varchar(25),
    country varchar(25)
);

CREATE TABLE payment (
    payment_id serial PRIMARY KEY,
    status payment_status NOT NULL
);

CREATE TABLE shipment (
    shipment_id serial PRIMARY KEY,
    status shipment_status NOT NULL,
    address varchar(60) NOT NULL
);

CREATE TABLE "order" (
     order_id serial PRIMARY KEY,
     total_price float(15) NOT NULL,
     date_of_order date NOT NULL,
     account_id integer REFERENCES account(account_id),
     payment_id integer REFERENCES payment(payment_id),
     shipment_id integer REFERENCES shipment(shipment_id)
);

CREATE TABLE campaign (
    campaign_id serial PRIMARY KEY,
    campaign_name varchar(50) NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    percent integer NOT NULL
);

CREATE TABLE discount (
    discount_id serial PRIMARY KEY,
    percent integer NOT NULL,
    discount_code varchar(20) NOT NULL
);

CREATE TABLE issue_order (
    issue_order_id serial PRIMARY KEY,
    count integer NOT NULL,
    issue_id serial REFERENCES issue(issue_id),
    order_id serial REFERENCES "order"(order_id)
);

CREATE TABLE rating (
    rating_id serial PRIMARY KEY,
    score integer NOT NULL,
    review text,
    book_id integer REFERENCES book(book_id),
    account_id integer REFERENCES account(account_id)
);

CREATE TABLE author_book (
    author_id int REFERENCES author(author_id),
    book_id int REFERENCES book(book_id),
    CONSTRAINT author_book_pkey PRIMARY KEY (author_id, book_id)
);

CREATE TABLE campaign_issue (
   campaign_id int REFERENCES campaign(campaign_id),
   issue_id int REFERENCES issue(issue_id),
   CONSTRAINT campaign_issue_pkey PRIMARY KEY (campaign_id, issue_id)
);

CREATE TABLE discount_issue (
   discount_id int REFERENCES discount(discount_id),
   issue_id int REFERENCES issue(issue_id),
   CONSTRAINT discount_issue_pkey PRIMARY KEY (discount_id, issue_id)
);