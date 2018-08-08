BEGIN;

DROP TABLE IF EXISTS cities, places, review, reviewer;

CREATE TABLE IF NOT EXISTS cities (
  city_id    SERIAL  PRIMARY KEY,
  city_name  TEXT    NOT NULL
);

INSERT INTO  cities( city_name) VALUES
('Haifa'),
('Jerusalem'),
('Nazareth'),
('akko');


CREATE TABLE IF NOT EXISTS places(
  place_id   SERIAL PRIMARY KEY,
  place_name TEXT   NOT NULL,
  city_id   FOREIGN KEY REFERENCES cities(city_id)
);

INSERT INTO places( place_name, city_id) VALUES;



CREATE TABLE IF NOT EXISTS review(
  review_id  SERIAL PRIMARY KEY,
  rev_dis    TEXT   NOT NULL,
  place_id   FOREIGN KEY REFERENCES places(place_id),
  stars      INTEGER,

);

INSERT INTO review(rev_dis, stars, place_id ) VALUES;

COMMIT;
