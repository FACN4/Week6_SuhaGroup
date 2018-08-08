BEGIN;

DROP TABLE IF EXISTS cities, places, review;

CREATE TABLE IF NOT EXISTS cities (
  city_id    SERIAL  PRIMARY KEY,
  city_name  TEXT    NOT NULL
);

INSERT INTO  cities( city_name) VALUES
('Haifa'),
('Jerusalem'),
('Nazareth'),
('Akko');


CREATE TABLE IF NOT EXISTS places(
  place_id   SERIAL PRIMARY KEY,
  place_name TEXT NOT NULL,
  city_id   INTEGER
);




CREATE TABLE IF NOT EXISTS review(
  review_id  SERIAL PRIMARY KEY,
  rev_dis    TEXT   NOT NULL,
  place_id   INTEGER,
  stars      INTEGER

);


COMMIT;
