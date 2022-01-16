INSERT INTO bookstore(bookstore_id, address) values (1, 'Warszawa');
INSERT INTO bookstore(bookstore_id, address) values (2, 'Kraków');
INSERT INTO bookstore(bookstore_id, address) values (3, 'Wrocław');
INSERT INTO bookstore(bookstore_id, address) values (4, 'Poznań');

INSERT INTO author(author_id, first_name, last_name, country) VALUES (1, 'John', 'Steinbeck', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (2, 'Carlos Ruiz', 'Zafon', 'Hiszpania');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (3, 'Haruki', 'Murakami', 'Japonia');

INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (1, 'Na wschód od Edenu', 'Powieść uznawana za najwybitniejsze dzieło Steinbecka opowiada o tragicznym losie rodziny Trasków, która na przełomie XIX i XX wieku osiedliła się w dolinie Salinas. Adam Trask, farmer, samotnie wychowuje dwóch synów – Arona i Kaleba. Chłopcy różnią się od siebie jak woda i ogień, a jedyne co ich łączy, to nieustanna rywalizacja o miłość surowego ojca. Aron jest spokojny i posłuszny, Kal to urodzony buntownik, który żywi wyraźną niechęć do brata i za wszelką cenę chce odnaleźć matkę. Napiętą sytuację między braćmi pogłębia jeszcze miłość do tej samej dziewczyny – Abry. W końcu Kaleb odnajduje matkę, demoniczną Kathy, w domu publicznym i odkrywa, że jest ona zupełnym przeciwieństwem tego, co uosabia ukochany ojciec. Rozdarcie wewnętrzne, konieczność dokonania wyboru i nadmiar napięć doprowadzają do tragedii…
„Na wschód od Edenu” to jedna z najwybitniejszych i zarazem najpopularniejszych powieści XX wieku. Podczas gdy w warstwie fabularnej jest realistyczną sagą rodziny kalifornijskich ranczerów, jej drugie, głębsze dno można odczytywać jako reinterpretację biblijnej historii o Kainie i Ablu i przypowieść o walce dobra ze złem w człowieku.', 'FICTION', 1952);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (2, 'Cień wiatru', 'Zauroczony powieścią i zafascynowany jej autorem Daniel usiłuje odnaleźć inne jego książki i odkryć tajemnicę pisarza, nie podejrzewając nawet, iż zaczyna się największa i najbardziej niebezpieczna przygoda jego życia, która da również początek niezwykłym opowieściom, wielkim namiętnościom, przeklętym i tragicznym miłościom rozgrywającym się w cudownej scenerii Barcelony gotyckiej i renesansowej, secesyjnej i powojennej.', 'FICTION', 2001);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (3, 'Norwegian Wood', 'Powieść "Norwegian Wood", opublikowana w 1987 przyniosła Harukiemu Murakamiemu ogromny rozgłos. Napisana w Grecji i we Włoszech jest książką, którą przeczytał "każdy" w Japonii. Sam autor mówi, że było to dla niego wyzwanie -
"Nigdy nie napisałem tego typu prostej powieści i chciałem się sprawdzić".
Wiele osób myślało, że jest to powieść autobiograficzna, ale tak nie jest.
"Gdybym napisał prawdę o moim własnym życiu, powieść nie miałaby więcej niż 15 stron."
Akcję umieścił autor w późnych latach 60-tych, symbolem etosu tych lat jest tytułowa piosenka Beatlesów "Norwegian Wood". Bohaterem jest młody człowiek Toru, zafascynowany piękną Naoko. Ich uczucie jest obciążone samobójczą śmiercią wspólnego przyjaciela i słabą konstrukcją psychiczną Naoko. Dramatyczne przeżycia bohaterów robią na czytelniku duże wrażenie.','FICTION', 1987);

INSERT INTO author_book(author_id, book_id) VALUES (1, 1);
INSERT INTO author_book(author_id, book_id) VALUES (2, 2);
INSERT INTO author_book(author_id, book_id) VALUES (3, 3);

INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (1, 'Albatros', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (2, 'Prószyński i S-ka', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (3, 'Helion', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (4, 'Znak', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (5, 'Mag', 1990);
INSERT INTO publishing_house(publishing_house_id, name, foundation_year) VALUES (6, 'Rebis', 1990);

INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url,  publishing_house_id, book_id) VALUES
(1, 'Polski', 2004, 786, 'HARDCOVER', 'BOOK', 44.99, 'https://s.lubimyczytac.pl/upload/books/119000/119566/568271-352x500.jpg', 'https://static3.redcart.pl/templates/images/thumb/25861/1500/1500/pl/0/templates/images/products/25861/ba26c3e4e8d988d358d466cf3553c503.jpg', 1, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(2, 'Polski', 2012, 794, null, 'EBOOK', 34.99, 'https://s.lubimyczytac.pl/upload/books/4862000/4862497/690137-352x500.jpg', 'https://static3.redcart.pl/templates/images/thumb/25861/1500/1500/pl/0/templates/images/products/25861/ba26c3e4e8d988d358d466cf3553c503.jpg',  2, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(3, 'Angielski', 1993, 745, 'SOFTWRAP', 'BOOK', 30.99, 'https://s.lubimyczytac.pl/upload/books/193000/193706/186213-352x500.jpg', 'https://static3.redcart.pl/templates/images/thumb/25861/1500/1500/pl/0/templates/images/products/25861/ba26c3e4e8d988d358d466cf3553c503.jpg',  3, 1);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(4, 'Polski', 2004, 786, 'HARDCOVER', 'AUDIOBOOK', 44.99, 'https://s.lubimyczytac.pl/upload/books/4802000/4802748/589833-352x500.jpg', 'https://i.pinimg.com/originals/a0/4b/51/a04b517464647a684cfa070eb89167ec.jpg', 6, 2);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(5, 'Angielski', 2012, 794, 'PAPERBACK', 'BOOK', 34.99, 'https://s.lubimyczytac.pl/upload/books/205000/205004/222513-352x500.jpg', 'http://2.bp.blogspot.com/-Mid8eKGJh1k/VpwB_uuI2oI/AAAAAAAAHb8/Rfe8TnW1tX4/s1600/norwegian%2Bwood.JPG', 4, 3);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(6, 'Polski', 1993, null, null, 'BOOK', 30.99, 'https://s.lubimyczytac.pl/upload/books/4806000/4806427/596553-352x500.jpg', 'https://i.pinimg.com/originals/a0/4b/51/a04b517464647a684cfa070eb89167ec.jpg',1, 2);

INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (1, 300, 1, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (2, 200, 1, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (3, 50, 1, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (4, 55, 2, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (5, 130, 2, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (6, 500, 2, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (7, 320, 3, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (8, 20, 3, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (9, 90, 3, 3);