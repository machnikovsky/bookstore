INSERT INTO bookstore(bookstore_id, address) values (1, 'Warszawa');
INSERT INTO bookstore(bookstore_id, address) values (2, 'Kraków');
INSERT INTO bookstore(bookstore_id, address) values (3, 'Wrocław');
INSERT INTO bookstore(bookstore_id, address) values (4, 'Poznań');

-- INSERT INTO person(person_id, first_name, last_name, phone_number, gender) VALUES (1, 'John', 'Admin', '123123123', 'MALE');
-- INSERT INTO person(person_id, first_name, last_name, phone_number, gender) VALUES (2, 'Joanna', 'Worker', '456456456', 'FEMALE');
-- INSERT INTO person(person_id, first_name, last_name, phone_number, gender) VALUES (3, 'Jake', 'User', '789789789', 'MALE');
--
-- INSERT INTO account(account_id, login, password, email, creation_date, person_id) VALUES (1, 'admin', 'admin', 'admin@gmail.com', current_date, 1);
-- INSERT INTO account(account_id, login, password, email, creation_date, person_id) VALUES (2, 'worker', 'worker', 'worker@gmail.com', current_date, 2);
-- INSERT INTO account(account_id, login, password, email, creation_date, person_id) VALUES (3, 'user', 'user', 'user@gmail.com', current_date, 3);

INSERT INTO author(author_id, first_name, last_name, country) VALUES (1, 'John', 'Steinbeck', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (2, 'Carlos Ruiz', 'Zafon', 'Hiszpania');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (3, 'Haruki', 'Murakami', 'Japonia');

INSERT INTO book(book_id, title, genre, original_publication_year) VALUES (1, 'Na wschód od Edenu', 'FICTION', 1952);
INSERT INTO book(book_id, title, genre, original_publication_year) VALUES (2, 'Cień wiatru', 'FICTION', 2001);
INSERT INTO book(book_id, title, genre, original_publication_year) VALUES (3, 'Norwegian Wood', 'FICTION', 1987);

INSERT INTO author_book(author_id, book_id) VALUES (1, 1);
INSERT INTO author_book(author_id, book_id) VALUES (2, 2);
INSERT INTO author_book(author_id, book_id) VALUES (3, 3);

INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (1, 'Albatros', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (2, 'Prószyński i S-ka', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (3, 'Helion', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (4, 'Znak', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (5, 'Mag', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (6, 'Rebis', 1990);

INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url,  publishing_house_id, book_id) VALUES
(1, 'Polski', 2004, 786, 'hardcover', 'book', 44.99, 'https://s.lubimyczytac.pl/upload/books/119000/119566/568271-352x500.jpg', 1, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, publishing_house_id, book_id) VALUES
(2, 'Polski', 2012, 794, null, 'ebook', 34.99, 'https://s.lubimyczytac.pl/upload/books/4862000/4862497/690137-352x500.jpg',  2, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, publishing_house_id, book_id) VALUES
(3, 'Angielski', 1993, 745, 'softwrap', 'book', 30.99, 'https://s.lubimyczytac.pl/upload/books/193000/193706/186213-352x500.jpg',  3, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, publishing_house_id, book_id) VALUES
(4, 'Polski', 2004, 786, 'hardcover', 'book', 44.99, 'https://s.lubimyczytac.pl/upload/books/4802000/4802748/589833-352x500.jpg',  6, 2);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, publishing_house_id, book_id) VALUES
(5, 'Angielski', 2012, 794, 'paperback', 'book', 34.99, 'https://s.lubimyczytac.pl/upload/books/205000/205004/222513-352x500.jpg', 4, 3);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, publishing_house_id, book_id) VALUES
(6, 'Polski', 1993, null, null, 'audiobook', 30.99, 'https://s.lubimyczytac.pl/upload/books/4806000/4806427/596553-352x500.jpg', 1, 2);

INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (1, 300, 1, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (2, 200, 1, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (3, 50, 1, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (4, 55, 2, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (5, 130, 2, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (6, 500, 2, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (7, 320, 3, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (8, 20, 3, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (9, 90, 3, 3);