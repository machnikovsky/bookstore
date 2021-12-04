INSERT INTO issue(language, publication_year, number_of_pages, cover_type, price) values ('Polish', 1995, 255, 'hardcover', 25.50);
INSERT INTO issue(language, publication_year, number_of_pages, cover_type, price) values ('English', 1995, 255, 'paperback', 25.50);

INSERT INTO bookstore(address) values ('Krakow, Dluga 5');

INSERT INTO assortment(count, bookstore_id, issue_id) values (10, 1, 1);