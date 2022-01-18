INSERT INTO bookstore(bookstore_id, address) values (1, 'Warszawa');
INSERT INTO bookstore(bookstore_id, address) values (2, 'Kraków');
INSERT INTO bookstore(bookstore_id, address) values (3, 'Wrocław');
INSERT INTO bookstore(bookstore_id, address) values (4, 'Poznań');

INSERT INTO author(author_id, first_name, last_name, country) VALUES (1, 'John', 'Steinbeck', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (2, 'Carlos Ruiz', 'Zafon', 'Hiszpania');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (3, 'Haruki', 'Murakami', 'Japonia');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (4, 'Stieg', 'Larsson', 'Szwecja');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (5, 'Joanna', 'Gierak-Onoszko', 'Polska');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (6, 'Olga', 'Tokarczuk', 'Polska');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (7, 'Stephen', 'King', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (8, 'Janusz', 'Zajdel', 'Polska');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (9, 'Victor', 'Frankl', 'Austria');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (10, 'Herbert', 'Wells', 'Anglia');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (11, 'Agatha', 'Christie', 'Anglia');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (12, 'Tahereh', 'Mafi', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (13, 'Franz', 'Kafka', 'Czechy');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (14, 'William', 'Shakespeare', 'Anglia');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (15, 'George', 'Orwell', 'Anglia');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (16, 'Andrzej', 'Sapkowski', 'Polska');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (17, 'John', 'Green', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (18, 'Eric Emmanuel', 'Schmitt', 'Francja');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (19, 'J. D.', 'Salinger', 'Stany Zjednoczone');
INSERT INTO author(author_id, first_name, last_name, country) VALUES (20, 'Miguel', 'de Cervantes', 'Hiszpania');

INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (1, 'Na wschód od Edenu', 'Powieść uznawana za najwybitniejsze dzieło Steinbecka opowiada o tragicznym losie rodziny Trasków, która na przełomie XIX i XX wieku osiedliła się w dolinie Salinas. Adam Trask, farmer, samotnie wychowuje dwóch synów – Arona i Kaleba. Chłopcy różnią się od siebie jak woda i ogień, a jedyne co ich łączy, to nieustanna rywalizacja o miłość surowego ojca. Aron jest spokojny i posłuszny, Kal to urodzony buntownik, który żywi wyraźną niechęć do brata i za wszelką cenę chce odnaleźć matkę. Napiętą sytuację między braćmi pogłębia jeszcze miłość do tej samej dziewczyny – Abry. W końcu Kaleb odnajduje matkę, demoniczną Kathy, w domu publicznym i odkrywa, że jest ona zupełnym przeciwieństwem tego, co uosabia ukochany ojciec. Rozdarcie wewnętrzne, konieczność dokonania wyboru i nadmiar napięć doprowadzają do tragedii…
„Na wschód od Edenu” to jedna z najwybitniejszych i zarazem najpopularniejszych powieści XX wieku. Podczas gdy w warstwie fabularnej jest realistyczną sagą rodziny kalifornijskich ranczerów, jej drugie, głębsze dno można odczytywać jako reinterpretację biblijnej historii o Kainie i Ablu i przypowieść o walce dobra ze złem w człowieku.', 'FICTION', 1952);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (2, 'Cień wiatru', 'Zauroczony powieścią i zafascynowany jej autorem Daniel usiłuje odnaleźć inne jego książki i odkryć tajemnicę pisarza, nie podejrzewając nawet, iż zaczyna się największa i najbardziej niebezpieczna przygoda jego życia, która da również początek niezwykłym opowieściom, wielkim namiętnościom, przeklętym i tragicznym miłościom rozgrywającym się w cudownej scenerii Barcelony gotyckiej i renesansowej, secesyjnej i powojennej.', 'FICTION', 2001);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (3, 'Norwegian Wood', 'Powieść "Norwegian Wood", opublikowana w 1987 przyniosła Harukiemu Murakamiemu ogromny rozgłos. Napisana w Grecji i we Włoszech jest książką, którą przeczytał "każdy" w Japonii. Sam autor mówi, że było to dla niego wyzwanie -
"Nigdy nie napisałem tego typu prostej powieści i chciałem się sprawdzić".
Wiele osób myślało, że jest to powieść autobiograficzna, ale tak nie jest.
"Gdybym napisał prawdę o moim własnym życiu, powieść nie miałaby więcej niż 15 stron."
Akcję umieścił autor w późnych latach 60-tych, symbolem etosu tych lat jest tytułowa piosenka Beatlesów "Norwegian Wood". Bohaterem jest młody człowiek Toru, zafascynowany piękną Naoko. Ich uczucie jest obciążone samobójczą śmiercią wspólnego przyjaciela i słabą konstrukcją psychiczną Naoko. Dramatyczne przeżycia bohaterów robią na czytelniku duże wrażenie.','FICTION', 1987);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (4, 'Mężczyźni, którzy nienawidzą kobiet', 'Pewnego wrześniowego dnia w 1966 roku szesnastoletnia Harriet Vanger znika jak kamień w wodę. Prawie czterdzieści lat później Mikael Blomkvist otrzymuje nietypowe zlecenie od Henrika Vangera. Stojący na czele wielkiego koncernu magnat przemysłowy prosi znajdującego się na zakręcie życiowym dziennikarza o napisanie kroniki rodzinnej Vangerów. Okazuje się, że spisywanie dziejów to tylko pretekst do próby rozwiązania zagadki zniknięcia Harriet. Mikael Blomkvist, skazany za zniesławienie, redaktor czasopisma Millennium, przechodzi kryzys wartości i rezygnuje z obowiązków zawodowych. Podejmuje się niezwykłego zlecenia, opuszcza Sztokholm i osiada w niewielkiej wiosce na północy kraju. Po pewnym czasie dołącza do niego młoda ekscentryczna hakerka, Lisbeth Salander. Wspólnie, choć nie zawsze ramię w ramię, biorą pod lupę przeszłość klanu Vangerów i wykrywają prawdę o wiele bardziej mroczną i krwawą niż ta, którą spodziewali się odnaleźć...', 'CRIME', 2006);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (5, '27 śmierci Tobyego Obeda', 'To też jest Kanada: siedem zapałek w słoiku, sny o czubkach drzew, powiewające na wietrze czerwone suknie, dzieci odbierane rodzicom o świcie. I ludzie, którzy nie mówią, że są absolwentami szkół z internatem. Mówią: jesteśmy ocaleńcami. Przetrwaliśmy.
– Zniszczono cały nasz naród. Nigdyśmy się nie podnieśli. W Europie ekscytujecie się modą na Kanadę, bo patrzycie na nią przez kolorowe skarpetki naszego nowoczesnego premiera. Ale prawda mniej się nadaje do lajkowania – powiedział autorce jeden z bohaterów tej książki.
Joanna Gierak-Onoszko spędziła w Kanadzie dwa lata, sprawdzając, co ukryto pod tamtejszą kulturową mozaiką. W swoim reportażu autorka kreśli obraz Kanady, który burzy nasze wyobrażenia o tym kraju.
Dlaczego Kanada ściąga dziś z pomników i banknotów swoich dawnych bohaterów? Jak to możliwe, że odbierano tam dzieci rodzicom? Czyja ręka temu błogosławiła?', 'NONFICTION', 2019);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (6, 'Miasto z mgły', 'Ostatnia książka Carlosa Ruiza Zafona.
Młody chłopak odkrywa, że chce zostać pisarzem, kiedy jego opowieści zaciekawiają bogatą dziewczynę, która skradła mu serce. Budowniczy ucieka z Konstantynopola z projektami sekretnej biblioteki. Dziwny dżentelmen zachęca Cervantesa do napisania książki, jaka jeszcze nigdy nie powstała. Gaudí, płynący na pokładzie transatlantyku zachwyca się parą i światłem ̶ materią, z której powinny być zrobione miasta.
"Miasto z mgły", ostatnia książka Carlosa Ruiza Zafona, jest poszerzeniem literackiego świata Cmentarza Zapomnianych Książek. Ten zbiór jedenastu opowiadań pokazuje wszystkie cechy pisarstwa Zafona, ale subtelnie, jakby przez mgłę wszechobecną w jego literackich obrazach. Te opowieści mogłyby stać się elementami większej całości, a jednak pisarz puścił je wolno, dając im osobne życie. Może po to, by ukazały w pełni wyjątkowość jego prozy tym, którzy nie mieli jeszcze okazji zajrzeć do powieści mistrza?', 'FICTION', 2021);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (7, 'Prowadź swój pług przez kości umarłych', 'Inspirująca, głośno dyskutowana powieść. Thriller moralny z metafizyczną zagadką, zaskakującą pod każdym względem.
Zimą piękna Kotlina Kłodzka jest miejscem mało przyjaznym i opustoszałym. Wsród nielicznych mieszkańców pozostała Janina Duszejko - miłośniczka astrologii, która w wolnych chwilach dogląda domów nieobecnych sąsiadów i tłumaczy poezję Blake''a. Niespodziewanie przez tę spokojną okolicę przetacza się fala morderstw, których ofiarami padają myśliwi. Czy to możliwe, by - jak sugeruje Duszejko - to zwierzęta zaczęły czyhać na życie swoich oprawców? Wszak Blake pisał: "Błąkająca się Sarna po lesie / Ludzkiej Duszy niepokój niesie" ...', 'FICTION', 2015);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (8, 'Instytut', 'Głęboko w lasach stanu Maine znajduje się mroczny państwowy obiekt, gdzie uprowadza się i więzi dzieci z całych Stanów Zjednoczonych. W Instytucie poddawane są one testom i zabiegom wykorzystującym ich szczególne dary – telepatię i telekinezę – dla osiągnięcia pewnych celów.
Ostatnim rekrutem jest 12 letni Luke Ellis, który nie jest po prostu mądrym chłopcem – jest super mądry. Posiada jeszcze jeden dar, który Instytut chciałby wykorzystać…
Daleko od tego miejsca, w małym miasteczku w Południowej Karolinie były gliniarz przyjął robotę u lokalnego szeryfa. Na co dzień po prostu patroluje ulice, ale lada dzień zmierzy się z największą sprawą w swojej karierze.
Podczas gdy korytarze Instytutu obwieszone są plakatami reklamującymi „kolejnym dzień w raju”, Luke, jego przyjaciółka Kalisha i reszta dzieciaków nie mają wątpliwości, że nie są tutaj gośćmi, a więźniami, i nie mają szans na ucieczkę.
Ale nawet mały trybik może poruszyć wielką maszynę. Luke połączy siły z nowym, jeszcze młodszym rekrutem, Averym Dixonem, który ma zdolność czytania w myślach rozwiniętą jak nikt inny. Podczas gdy Instytut chce zaprząc ich zdolności do własnych, tajnych celów, połączone siły Luke’a i Avery’ego dadzą rezultaty, których nie mogą się spodziewać nawet ci, którzy przeprowadzają eksperymenty, włączając w to nawet cieszącą się złą sławą Panią Sigsby.', 'HORROR', 2019);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (9, 'Limes inferior', 'W absurdalnym, sztucznie wykreowanym świecie Argolandu, nic nie jest tym, czym się na pierwszy rzut oka wydaje. Drobny kombinator dzięki sprytowi i inteligencji odkrywa prawdę o pozornie idealnym porządku społeczno-ekonomicznym.', 'SCIFI', 1982);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (10, 'Człowiek w poszukiwaniu sensu', 'Człowiek w poszukiwaniu sensu Viktora E. Frankla to jedna z najbardziej wpływowych książek w literaturze psychiatrycznej od czasu Freuda. Zaczyna się od długiego, suchego i głęboko poruszającego osobistego eseju o pięcioletnim pobycie Frankla w Auschwitz i innych obozach koncentracyjnych i jego wysiłkach w tym czasie, by znaleźć powody do życia. Druga część książki opisuje metody psychoterapeutyczne, które Frankl opracował jako pierwszy na bazie swoich doświadczeń z obozów. Freud uważał, że życiem człowieka rządzi popęd seksualny i pokusy. Frankl z kolei wierzy, że najgłębszym popędem człowieka jest poszukiwanie sensu i celu. Logoterapia Frankla zatem bardziej przystaje do zachodnich religii niż freudeowskiej psychoterapii.', 'NONFICTION', 2004);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (11, 'Wojna światów', 'Jak zachowują się ludzie – zarówno jednostki, jak i całe społeczności – w obliczu inwazji, która grozi masową zagładą? Kim jesteśmy dla najeźdźców i kim oni są dla nas? Jaką rolę odgrywają w tym nowe technologie? I co może nas uratować? Na te pytania próbuje odpowiedzieć Herbert George Wells w sposób wciąż atrakcyjny dla współczesnego czytelnika, a powszechne już chyba poczucie niepokoju, niepewności i zagrożenia sprawia, że „Wojnę światów” odbieramy jako powieść ciekawą i aktualną również w XXI wieku.', 'SCIFI', 1899);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (12, 'I nie było już nikogo', 'Dziesięć osób zostaje zaproszonych przez tajemniczego gospodarza do domu na wyspie. Gdy dwie z nich giną, goście zdają sobie sprawę, że to, co początkowo uważali za nieszczęśliwy wypadek, jest robotą zabójcy. Postanawiają odkryć jego tożsamość, ale okazuje się, że nikt nie ma alibi. Odizolowani od społeczeństwa, niezdolni do opuszczenia miejsca pobytu, umierają jeden po drugim w sposób opisany w dziecięcej rymowance, która wywieszona jest w ich pokojach.','CRIME', 1939);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (13, 'Gdyby ocean nosił twoje imię', 'Bycie inną nie musi oznaczać bycia gorszą. Ale świat nie jest idealny i Shirin naprawdę nie ma łatwego życia. Minęło kilkanaście miesięcy od głośnego zamachu z 11 września. To wyjątkowo burzliwy czas zwłaszcza dla szesnastoletniej muzułmanki, która nie zgadza się na to, co zgotował jej los.
Shirin doskonale wie, jak okropni mogą być ludzie. Jest zmęczona agresywnymi spojrzeniami, poniżającymi komentarzami, nawet przemocą fizyczną, które spotykają ją ze względu na hidżab. Z każdym dniem bardziej zamyka się w sobie i coraz silniej oddaje muzyce i tańcowi.
Wszystko jednak się zmienia, gdy na jej drodze staje Ocean James.
Jest pierwszą osobą, która chce poznać prawdziwą Shirin.
Ale czy dziewczyna jest gotowa, by komukolwiek zaufać?
Zwłaszcza komuś z tak odmiennego świata?', 'ROMANCE', 2018);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (14, 'Proces', '„Proces” jest surrealistyczną powieścią Franza Kafki należącą do ścisłego kanonu literatury światowej. Opowiada o prokurencie bankowym Józefie K., który zostaje pewnego dnia aresztowany, mimo że nie popełnił żadnego przestępstwa. Pozornie areszt ma łagodny charakter; skazany może prowadzić normalne życie, będąc jedynie zobowiązanym do pozostania do dyspozycji sądu. Jednak w rzeczywistości aresztowanie diametralnie zmienia egzystencję Józefa K. Odwracają się od niego przyjaciele i znajomi. Mnożą się niezrozumiałe zdarzenia. Sąd nie odstępuje od wyroku, a liczne przesłuchania nie pozwalają bohaterowi udowodnić swojej niewinności. Szuka on pomocy w rodzinie i poza nią: u żony sądowego, prawnika, malarza sądowego, innego oskarżonego, kapelana więziennego, ale wszystkie te próby okazują się bezskuteczne.
„Proces” zapisał się w historii literatury jako genialna metafora totalitaryzmu i jako opowieść o samotności człowieka we współczesnym świecie, w którym wszechwładne państwo i biurokracja odbierają obywatelowi prawo do prywatności i wolności. Fascynujący charakter powieści potęguje narracja utrzymana w konwencji absurdu i atmosfera kojarząca się z sennym koszmarem.', 'FICTION', 1925);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (15, 'Sen nocy letniej', 'Sen nocy letniej Shakespeare''a był początkowo traktowany jako lekka komedia weselna. Z biegiem czasu dostrzeżono jednak w tej sztuce zachwycające połączenie liryzmu z refleksją nad naturą i miłością.
Akcja jest osadzona w starożytnych Atenach podczas nocy świętojańskiej. Trwają przygotowania do ślubu księcia ateńskiego Tezeusza z Hipolitą, królową Amazonek. Trzy pary kochanków: Hermia i Lizander, Helena i Demetriusz oraz należący do ponadnaturalnego świata Oberon i Tytania za sprawą sprytnej interwencji elfa Puka przeżywają szaloną, pełną namiętności i magii noc.
Shakespeare w Śnie nocy letniej po mistrzowsku podjął motywy snu i jawy, zderzenia marzeń i rzeczywistości. Nie brak też elementu komicznego w postaci amatorskiej trupy próbującej z okazji zaślubin książęcej pary wystawić sztukę o Pyramie i Tyzbe.', 'ROMANCE', 1605);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (16, 'Folwark zwierzęcy', 'Orwell pisał: „»Folwark zwierzęcy« miał być przede wszystkim satyrą na rewolucję rosyjską. Jednak, jak podkreślam, przesłanie utworu jest szersze – chciałem wyrazić w nim myśl, iż ów szczególny rodzaj rewolucji (gwałtowna rewolucja oparta na konspiracji, z motorem napędowym w postaci nieświadomie żądnych władzy osób) może doprowadzić jedynie do zmiany władców. Mój morał brzmi tak oto: rewolucje mogą przynieść radykalną poprawę, gdy masy będą czujne i będą wiedzieć, jak pozbyć się swych przywódców, gdy tamci zrobią, co do nich należy. (...) Nie można robić rewolucji, jeśli nie robi się jej dla siebie; nie ma czegoś takiego jak dobrotliwa dyktatura".', 'FICTION', 1945);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (17, 'Ostatnie życzenie', 'Później mówiono, że człowiek ów nadszedł od północy, od Bramy Powroźniczej. Nie był stary, ale włosy miał prawie zupełnie białe. Kiedy ściągnął płaszcz, okazało się, że na pasie za plecami ma miecz. Nie było w tym nic dziwnego, w Wyzimie prawie wszyscy chodzili z bronią, ale nikt nie nosił miecza na plecach niby łuku czy kołczana. Białowłosego przywiodło do miasta królewskie orędzie: trzy tysiące orenów nagrody za odczarowanie nękającej mieszkańców Wyzimy strzygi. Takie czasy nastały. Dawniej po lasach jeno wilki wyły, teraz namnożyło się wszelakiego paskudztwa – gdzie spojrzysz, tam upiory, strzygi, bobołaki plugawe, bazyliszki, diaboły, żywiołaki, wiły i utopce. Tu nie wystarczą zwykłe czary ani osinowe kołki. Tu trzeba profesjonalisty. A przybysz z dalekiej Rivii takim profesjonalistą jest. To wiedźmin Geralt, mistrz miecza i magii, mutant zaprogramowany, by strzec na świecie moralnej i biologicznej równowagi.','FANTASY', 2010);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (18, 'Szukając Alaski', 'Porównywany z przełomowym "Buszującym w zbożu" J.D. Salingera literacki debiut Johna Greena to powieść o myślących i wrażliwych młodych ludziach. Zbuntowanych, szukających intensywnych wrażeń i odpowiedzi na najważniejsze pytania: o miłość, która wywraca świat do góry nogami, o przyjaźń, której doświadcza się na całe życie.
Niezapomniana opowieść o odkrywającym życie Milesie zakochanym w szalonej, zbuntowanej Alasce, dzięki której odnalazł Wielkie Być Może – czyli najintensywniejsze i najprawdziwsze doświadczenie rzeczywistości.','ROMANCE', 2007);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (19, 'Oskar i Pani Róża', 'Codziennie patrz na świat, jakbyś oglądał go po raz pierwszy.
Czy w ciągu dwunastu dni można poznać smak życia i odkryć jego najgłębszy sens? Dziesięcioletni Oskar leży w szpitalu i nie wierzy już w żadne bajki. Na jego drodze staje tajemnicza pani Róża, która ma za sobą karierę zapaśniczki i potrafi znaleźć wyjście z każdej sytuacji…
"Oskar i Pani Róża" to najsłynniejsza powieść Érica-Emmanuela Schmitta, znakomitego francuskiego pisarza i filozofa, którego książki przetłumaczono na 35 języków. Czytelnicy na całym świecie pokochali go za niezrównaną wrażliwość i mądrość, z jaką opisuje nawet najbardziej skomplikowane emocje.','CHILDRENS', 2017);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (20, 'Buszujący w zbożu', 'Bohaterem ''Buszującego w zbożu'' jest szesnastoletni uczeń, Holden Caulfield, który nie mogąc pogodzić się z otaczającą go głupotą, podłością, a przede wszystkim zakłamaniem, ucieka z college`u i przez kilka dni ''buszuje'' po Nowym Jorku, nim wreszcie powróci do domu rodzinnego. Historia tych paru dni, którą opowiada swym barwnym językiem, jest na pierwszy rzut oka przede wszystkim zabawna, jednakże rychło spostrzegamy, że pod pozorami komizmu ważą się tutaj sprawy bynajmniej nie błahe...','ADVENTURE', 1951);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (21, 'Joyland', 'Devin Jones, student college’u, zatrudnia się na okres wakacji w lunaparku, by zapomnieć o dziewczynie, która złamała mu serce. Tam jednak zmuszony jest zmierzyć się z czymś dużo straszniejszym: brutalnym morderstwem sprzed lat, losem umierającego dziecka i mrocznymi prawdami o życiu – i tym, co po nim następuje. Wszystko to sprawi, że jego świat już nigdy nie będzie taki sam...
Życie nie zawsze jest ustawioną grą. Czasem nagrody są prawdziwe. Bywają też cenne.
Pasjonująca opowieść o miłości i stracie, o dorastaniu i starzeniu się – i o tych, którym nie dane jest doświadczyć ani jednego, ani drugiego, bo śmierć zabiera ich przedwcześnie.
„Joyland” to Stephen King w szczytowej pisarskiej formie, równie poruszający jak „Zielona Mila” czy „Skazani na Shawshank”. To jednocześnie kryminał, horror i słodko-gorzka powieść o dojrzewaniu, która poruszy serce nawet najbardziej cynicznego czytelnika.','HORROR', 2013);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (22, 'Lśnienie', 'To jeden z najlepszych współczesnych horrorów. Nastrój grozy i napięcia potęguje się w niej z każdą minutą. Pięcioletni chłopiec Danny znalazł się z rodzicami w opustoszałym na zimie hotelu. Wrażliwe, obdarzone zdolnościami wizjonerskimi dziecko odbiera fluidy czające się w jego murach były one świadkami krwawych porachunków świata przestępczego i milionerów. Straszliwe zdarzenia, które kończą fabułę, są jednak niczym w porównaniu z przejściami psychicznymi bohaterów.','HORROR', 1978);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (23, 'Rok 1984', 'Wielki Brat Patrzy – to właśnie napisy tej treści, w antyutopii Orwella krzyczące z plakatów rozlepionych po całym Londynie, natchnęły twórców telewizyjnego show „Big Brother”. Czyżby wraz z upadkiem komunizmu wielka, oskarżycielska powieść straciła swoją rację bytu, stając się zaledwie inspiracją programu rozrywkowego? Nie. Bo ukazuje świat, który zawsze może powrócić. Świat pustych sklepów, permanentnej wojny, jednej wiary.
Klaustrofobiczny świat Wielkiego Brata, w którym każda sekunda ludzkiego życia znajduje się pod kontrolą, a dominującym uczuciem jest strach. Świat, w którym ludzie czują się bezradni i samotni, miłość uchodzi za zbrodnię, a takie pojęcie jak „wolność” i „sprawiedliwość” nie istnieją. Na kuli ziemskiej są miejsca, gdzie ten świat wciąż trwa. I zawsze znajdą się cudotwórcy gotowi obiecywać stworzenie nowego, który od wizji Orwella dzieli tylko krok. Niestety, piekło wybrukowane jest dobrymi chęciami. A dwa plus dwa wcale nie musi się równać cztery.','FICTION', 1948);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (24, 'Romeo i Julia', 'Matka Julii Kapulet postanawia wydać córkę za Parysa (jest to krewny księcia Werony). Organizuje ona bal, na którym młodzi mają się zapoznać. Zjawia się tam też potomek zwaśnionego z nimi rodu Monteki, Romeo. Romeo i Julia zakochują się w sobie „od pierwszego wejrzenia”. Wkrótce w tajemnicy biorą ze sobą ślub. Jednak los bywa okrutny….','ROMANCE', 1597);
INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (25, 'Don Kichot', 'Miguel de Cervantes Saavedra swoim „Don Kichotem” położył podwaliny pod nowoczesną powieść. Przygody oszalałego od czytania książek szlachcica i jego giermka od z górą czterystu lat bawią i wzruszają kolejne pokolenia czytelników. Dzięki nowemu polskiemu przekładowi dzieło zostało odświeżone, więc współczesny miłośnik literatury będzie mógł cieszyć się tą historią jak nigdy przedtem. Wspaniały przekład wspaniałego dzieła. Okazuje się, że mimo swego sędziwego wieku „Don Kichot” to książka interesująca, wciągająca i pouczająca, a przede wszystkim śmieszna, jak informuje sam autor na kartach swojej powieści. Do tej pory trudno było tę śmieszność dostrzec. Dopiero teraz w pełni możemy docenić humor i doskonałe pióro wielkiego Hiszpana.','ADVENTURE', 1605);
-- INSERT INTO book(book_id, title, description, genre, original_publication_year) VALUES (26, '', '','', );

INSERT INTO author_book(author_id, book_id) VALUES (1, 1);
INSERT INTO author_book(author_id, book_id) VALUES (2, 2);
INSERT INTO author_book(author_id, book_id) VALUES (3, 3);
INSERT INTO author_book(author_id, book_id) VALUES (4, 4);
INSERT INTO author_book(author_id, book_id) VALUES (5, 5);
INSERT INTO author_book(author_id, book_id) VALUES (2, 6);
INSERT INTO author_book(author_id, book_id) VALUES (6, 7);
INSERT INTO author_book(author_id, book_id) VALUES (7, 8);
INSERT INTO author_book(author_id, book_id) VALUES (8, 9);
INSERT INTO author_book(author_id, book_id) VALUES (9, 10);
INSERT INTO author_book(author_id, book_id) VALUES (10, 11);
INSERT INTO author_book(author_id, book_id) VALUES (11, 12);
INSERT INTO author_book(author_id, book_id) VALUES (12, 13);
INSERT INTO author_book(author_id, book_id) VALUES (13, 14);
INSERT INTO author_book(author_id, book_id) VALUES (14, 15);
INSERT INTO author_book(author_id, book_id) VALUES (15, 16);
INSERT INTO author_book(author_id, book_id) VALUES (16, 17);
INSERT INTO author_book(author_id, book_id) VALUES (17, 18);
INSERT INTO author_book(author_id, book_id) VALUES (18, 19);
INSERT INTO author_book(author_id, book_id) VALUES (19, 20);
INSERT INTO author_book(author_id, book_id) VALUES (7, 21);
INSERT INTO author_book(author_id, book_id) VALUES (7, 22);
INSERT INTO author_book(author_id, book_id) VALUES (15, 23);
INSERT INTO author_book(author_id, book_id) VALUES (14, 24);
INSERT INTO author_book(author_id, book_id) VALUES (20, 25);

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
(4, 'Polski', 2004, null, null, 'AUDIOBOOK', 44.99, 'https://s.lubimyczytac.pl/upload/books/4802000/4802748/589833-352x500.jpg', 'https://i.pinimg.com/originals/a0/4b/51/a04b517464647a684cfa070eb89167ec.jpg', 6, 2);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(5, 'Angielski', 2012, 794, 'PAPERBACK', 'BOOK', 34.99, 'https://s.lubimyczytac.pl/upload/books/205000/205004/222513-352x500.jpg', 'http://2.bp.blogspot.com/-Mid8eKGJh1k/VpwB_uuI2oI/AAAAAAAAHb8/Rfe8TnW1tX4/s1600/norwegian%2Bwood.JPG', 4, 3);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(6, 'Polski', 1993, 786, 'HARDCOVER', 'BOOK', 30.99, 'https://s.lubimyczytac.pl/upload/books/4806000/4806427/596553-352x500.jpg', 'https://i.pinimg.com/originals/a0/4b/51/a04b517464647a684cfa070eb89167ec.jpg',1, 2);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(7, 'Polski', 2011, 640, 'PAPERBACK', 'BOOK', 45.99, 'https://s.lubimyczytac.pl/upload/books/124000/124655/352x500.jpg', 'https://bi.im-g.pl/im/ac/46/15/z22310060V,Stieg-Larsson-piszac-trylogie--Millennium--i-wymys.jpg', 4, 4);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(8, 'Polski', 2019, 344, 'HARDCOVER', 'BOOK', 27.89, 'https://s.lubimyczytac.pl/upload/books/4882000/4882986/866945-352x500.jpg', 'https://www.vogue.pl/images/blog/entry/facebook-27-smierci-tobyego-obeda-krzywda-zaczyna-sie-od-slow-25-big-4136.png', 1, 5);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(9, 'Polski', 2021, 224, null, 'EBOOK', 35.49, 'https://s.lubimyczytac.pl/upload/books/4966000/4966195/896580-352x500.jpg', 'https://detalistka.pl/wp-content/uploads/2021/09/miasto-z-mgly-zafon-recenzja-scaled.jpg', 2, 6);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(10, 'Polski', 2015, 320, 'PAPERBACK', 'BOOK', 37.99, 'https://s.lubimyczytac.pl/upload/books/273000/273198/431147-352x500.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztUeU0iwpCq9c_tT-8gKqJK4SS8GlAbnGFA&usqp=CAU', 3, 7);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(11, 'Polski', 2019, 672, 'PAPERBACK', 'BOOK', 55.99, 'https://s.lubimyczytac.pl/upload/books/4877000/4877852/755673-352x500.jpg', 'http://kulturacja.pl/wp-content/uploads/2019/09/instytut.jpg', 4, 8);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(12, 'Polski',2004, 226, null, 'EBOOK', 30.99, 'https://s.lubimyczytac.pl/upload/books/37000/37961/921678-352x500.jpg', 'https://ae01.alicdn.com/kf/HTB13UQ1azzuK1RjSspeq6ziHVXax/Sci-Fi-SciFi-panorama-miasta-deszcz-droga-t-o-wysokiej-jako-ci-druk-komputerowy-dzieci-dzieci.jpg_Q90.jpg_.webp', 6, 9);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(13, 'Polski', 2011, 224, 'HARDCOVER', 'BOOK', 42.99, 'https://s.lubimyczytac.pl/upload/books/4924000/4924482/809224-352x500.jpg', 'https://krakow.ipn.gov.pl/dokumenty/zalaczniki/82/82-430362.jpg', 1, 10);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(14, 'Polski', 2018, 216, 'PAPERBACK', 'BOOK', 35.99, 'https://s.lubimyczytac.pl/upload/books/4819000/4819772/663424-352x500.jpg', 'https://static.wirtualnemedia.pl/media/top/wojna-%C5%9Bwiat%C3%B3w-steven-spielberg-655.jpg', 2, 11);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(15, 'Polski', 2014, null, null, 'AUDIOBOOK', 33.99, 'https://s.lubimyczytac.pl/upload/books/227000/227945/296880-352x500.jpg', 'https://i2.wp.com/popbookownik.pl/wp-content/uploads/2020/02/i-nie-by%C5%82o-ju%C5%BC-nikogo.jpg', 3, 12);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(16, 'Polski', 2019, 315, null, 'EBOOK', 28.99, 'https://s.lubimyczytac.pl/upload/books/4900000/4900973/787844-352x500.jpg', 'https://i.ytimg.com/vi/on2flGIRmCM/maxresdefault.jpg', 4, 13);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(17, 'Polski', 2017, 192, 'PAPERBACK', 'BOOK', 40.99, 'https://s.lubimyczytac.pl/upload/books/4798000/4798546/582908-352x500.jpg', 'http://i.idnes.cz/09/072/gal/OB2c70c7_3.jpg', 5, 14);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(18, 'Polski', 1998, 85, 'PAPERBACK', 'BOOK', 35.99, 'https://s.lubimyczytac.pl/upload/books/212000/212496/246097-352x500.jpg', 'https://www.gdansk.pl/download/2020-03/146157.jpg', 6, 15);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(19, 'Polski', 2006, 136, 'PAPERBACK', 'BOOK', 42.89, 'https://s.lubimyczytac.pl/upload/books/48000/48379/352x500.jpg', 'https://ocdn.eu/pulscms-transforms/1/s5UktkpTURBXy9lMDYxOWI3NDZmNmI3MTMyYjMxMTEwMTcwNDdjM2U3OS5qcGeRlQMAH80EAM0CQA', 1, 16);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(20, 'Polski', 2010, 288, null, 'EBOOK', 29.99, 'https://s.lubimyczytac.pl/upload/books/96000/96980/352x500.jpg', 'https://static.polityka.pl/_resource/res/path/78/f9/78f90ad4-05ce-43d7-ac93-d57cdfb30171_f1400x900', 1, 17);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(21, 'Polski', 2013, 320, 'PAPERBACK', 'BOOK', 32.99, 'https://s.lubimyczytac.pl/upload/books/188000/188946/170383-352x500.jpg', 'https://d-tm.ppstatic.pl/kadry/73/7f/b9eed43114046984c707f47c0be4.1000.jpg', 2, 18);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(22, 'Polski', 2017, 96, 'HARDCOVER', 'BOOK', 48.99, 'https://s.lubimyczytac.pl/upload/books/4805000/4805264/594213-352x500.jpg', 'https://programtv.naziemna.info/images/moviedb/00051/51880/tlo/oskar-i-pani-r%C3%B3%C5%BCa---backdrop-w1280.jpg', 3, 19);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(23, 'Polski', 2017, null, null, 'AUDIOBOOK', 34.89, 'https://s.lubimyczytac.pl/upload/books/4856000/4856683/677920-352x500.jpg', 'http://static.prsa.pl/images/5fb34f8f-e568-4bd9-8780-1089f30a3df6.jpg', 4, 20);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(24, 'Polski', 2013, 336, 'PAPERBACK', 'BOOK', 24.79, 'https://s.lubimyczytac.pl/upload/books/176000/176275/298556-352x500.jpg', 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/10/Joyland-Stephen-King-Freeform.jpg',5, 21);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(25, 'Polski', 1997, 520, 'SOFTWRAP', 'BOOK', 35.89, 'https://s.lubimyczytac.pl/upload/books/304000/304061/940164-352x500.jpg', 'https://kulturalnemedia.pl/wp-content/uploads/2018/12/danny-lloyd.jpg', 6, 22);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(26, 'Polski', 2014, 360, 'PAPERBACK', 'BOOK', 29.89, 'https://s.lubimyczytac.pl/upload/books/241000/241181/839087-352x500.jpg', 'https://instagalleryapp.com/images/are-we-living-in-an-orwellian-nightmare-did-1984-predict-real-world-surveillance.jpg', 6, 23);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(27, 'Polski', 2007, 105, 'PAPERBACK', 'BOOK', 33.89, 'https://s.lubimyczytac.pl/upload/books/4900000/4900298/760411-352x500.jpg', 'https://aleklasa.pl/wp-content/uploads/2018/02/Romeo-i-Julia-2-bis.jpg', 2, 24);
INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
(28, 'Polski', 2004, 1044, 'HARDCOVER', 'BOOK', 74.99, 'https://s.lubimyczytac.pl/upload/books/221000/221953/564966-352x500.jpg', 'https://ocdn.eu/pulscms-transforms/1/_jKktkuTURBXy9mNDYwNGU5MS0zYjNmLTQ4Y2QtYmU0Ny1mMzZkNDhjNDc4Y2YuanBlZ5GTBc0EsM0CpA', 5, 25);
-- INSERT INTO issue(issue_id, language, publication_year, number_of_pages, cover_type, book_type, price, image_url, background_url, publishing_house_id, book_id) VALUES
-- (29, 'Polski', , , , 'BOOK', , '', '', , );

INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (1, 300, 1, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (2, 200, 1, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (3, 50, 1, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (4, 55, 2, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (5, 130, 2, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (6, 500, 2, 3);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (7, 320, 3, 1);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (8, 20, 3, 2);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (9, 3, 1, 4);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (11, 5, 2, 5);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (12, 9, 3, 6);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (13, 20, 4, 7);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (14, 19, 1, 8);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (15, 20, 4, 9);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (16, 30, 2, 10);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (17, 25, 3, 11);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (18, 18, 4, 10);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (19, 19, 1, 12);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (20, 28, 2, 13);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (21, 32, 3, 14);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (22, 13, 4, 15);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (23, 9, 1, 16);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (24, 8, 2, 17);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (25, 12, 3, 18);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (26, 36, 4, 19);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (27, 8, 4, 19);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (28, 2, 1, 20);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (29, 12, 2, 21);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (30, 24, 3, 22);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (31, 15, 4, 23);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (32, 26, 4, 24);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (33, 18, 1, 25);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (34, 7, 2, 26);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (35, 1, 3, 27);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (36, 16, 4, 20);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (37, 8, 3, 27);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (38, 8, 1, 28);
INSERT INTO assortment(assortment_id, count, bookstore_id, issue_id) VALUES (39, 4, 2, 28);
