BEGIN;

DROP TABLE IF EXISTS cities, places, review;

CREATE TABLE IF NOT EXISTS cities (
  city_id    SERIAL  PRIMARY KEY,
  city_name  TEXT    NOT NULL
);

INSERT INTO  cities(city_name) VALUES
('Haifa'),
('Jerusalem'),
('Nazareth'),
('Akko');


CREATE TABLE IF NOT EXISTS places(
  place_id   SERIAL PRIMARY KEY,
  place_name TEXT NOT NULL,
  city_id INTEGER REFERENCES cities
);

INSERT INTO places(place_name, city_id) VALUES
('The Basilica church or anounciation', 3),
('al-aksa mosque', 2),
('the baha garden',1);


CREATE TABLE IF NOT EXISTS review(
  review_id  SERIAL PRIMARY KEY,
  rev_dis    TEXT   NOT NULL,
  place_id   INTEGER REFERENCES places,
  stars      INTEGER
);

INSERT INTO review(rev_dis, place_id, stars) VALUES
('There must be a limit to how many of these a family needs,
   but we all carry them every day and use them all the time.
   Very handy for fishing line, manicures, odd strings and threads,
    opening mail, prying stuff loose, driving small screws, etc', 1, 5);


COMMIT;
