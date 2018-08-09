BEGIN;

DROP TABLE IF EXISTS cities, places, review;

CREATE TABLE IF NOT EXISTS cities (
city_id SERIAL PRIMARY KEY,
city_name TEXT NOT NULL
);

INSERT INTO cities(city_name) VALUES
('Haifa'),
('Jerusalem'),
('Nazareth'),
('Akko');

CREATE TABLE IF NOT EXISTS places(
place_id SERIAL PRIMARY KEY,
place_name TEXT NOT NULL,
city_id INTEGER REFERENCES cities
);

INSERT INTO places(place_name, city_id) VALUES
('The Basilica church or anounciation', 3),
('al-aksa mosque', 2),
('the baha garden',1),
('knights halls',4);

CREATE TABLE IF NOT EXISTS review(
review_id SERIAL PRIMARY KEY,
place_name TEXT NOT NULL,
rev_dis TEXT NOT NULL,
place_id INTEGER REFERENCES places,
stars INTEGER
);

INSERT INTO review(place_name,rev_dis, place_id, stars) VALUES
('The Basilica church','If in Nazareth then one has to visit this church for many reasons. Do take a guide or read the history of the monument to know what is the significance. Do not take a car as the lanes are really small. However its a beautiful place and very different from the other cities in IS-REAL?. Do see the museum and the church from both the floors.', 3, 4.6),
('the bahaa Garden','The view of the gardens from the top of the map Miss amazing. The first entrance to the gardens is a lookout which does not allow you to go past the first Terrace. Theres a small sign that points out that a hundred yards to the right there is another entrance where there are free garden tours. The tour was well worth the time it took to go through the garden. The guide was knowledgeable. Although Hebrew was the posted language for art or all of the people who participated spoke English. The tour was given an English so all could understand. The guy that was very accommodating. The 45 minutes spent on tour was was a very worthwhile experience.', 3, 4.7),
('al-aksa-mosque','Absolutely incredible atmosphere. Such lovely and caring locals with huge hearts. Not felt so much unity anywhere else !', 2 ,5),
('knights halls','This is another ruins of a city with lots of historical significance. Must visit for those who like to know about the past. There are quite a few places around the ruins which are also with history. One can buy the tickets of one or all the places or chose a few. Its not cheap but definitely worth seeing. A well preserved place.', 4, 4.4);

COMMIT;
