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
('Akko'),
('Bethlehem'),
('Ramallah');

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
place_id INTEGER ,
stars INTEGER
);

INSERT INTO review(place_name,rev_dis, place_id, stars) VALUES
('The Basilica church','If in Nazareth then one has to visit this church for many reasons. Do take a guide or read the history of the monument to know what is the significance. Do not take a car as the lanes are really small. However its a beautiful place and very different from the other cities in IS-REAL?. Do see the museum and the church from both the floors.', 3, 4.6),
('the bahaa Garden','The view of the gardens from the top of the map Miss amazing. The first entrance to the gardens is a lookout which does not allow you to go past the first Terrace. Theres a small sign that points out that a hundred yards to the right there is another entrance where there are free garden tours. The tour was well worth the time it took to go through the garden. The guide was knowledgeable. Although Hebrew was the posted language for art or all of the people who participated spoke English. The tour was given an English so all could understand. The guy that was very accommodating. The 45 minutes spent on tour was was a very worthwhile experience.',1, 4.7),
('al-aksa-mosque','Absolutely incredible atmosphere. Such lovely and caring locals with huge hearts. Not felt so much unity anywhere else !', 2 ,5),
('knights halls','This is another ruins of a city with lots of historical significance. Must visit for those who like to know about the past. There are quite a few places around the ruins which are also with history. One can buy the tickets of one or all the places or chose a few. Its not cheap but definitely worth seeing. A well preserved place.', 4, 4.4),
('Ramallah old city and sights','organised an excellent, informative and moving tour of the old city and several of the main monuments in the city, very efficient and friendly; the old city is lovely and a great place to hang out amongst winding narrow streets, historic limestone building and great coffee, snacks and meals',6,3.5),
('The church of nativity','I did Bethlehem as part of an Israel/Palestine tour. The Church of the Nativity is a must see regardless of your religious persuasion. How much you get from your visit will vary depending on your guide and how much you have already read. As we came from Jerusalem, we had to be handed over to a Palestinian guide, at the border. The guide was ok, and was the only time we got any Palestinian perspective on things but he seemed really rushed and we did not get much information. We spent more time at his cousins gift shop, than was really necessary...
But the Church was interesting and it is good see the different demoninational sections.',5,3.5),
('The village of Nazareth','A wonderful must see place to visit while in Nazareth. This village is set to look like a 1 st century village would have been. Even the wheat, almond trees, olive trees, cabbage, figs, grapes and more are grown in the village. Wonderful guides to lead you through as you tour. Also you can have a 1st century meal which is absolutely delicious!!',3,5),
('Mt. of Precipice Lookout Point','Just south of Nazareth you will find Mt. of Precipice Lookout Point. This is a wonderful site to go for a walk, reflect on life, look across the Jezreel Valley at Mt. Tabor and reflect on the biblical story of Jesus making that leap to avoid the angry mob! This is all part of the Jesus Trail, and you can see the trail in bits and pieces, but I highly recommend this as one of your must-see spots (especially if you were raised a Catholic since you will know the story)!',3,4.1),
('Yefe Nof Street','"Yefe Nof" means "Beautiful View" much like "Belvedere" and indeed this is the most beautiful street in Haifa, overlooking the Haifa Bay, the whole cost up to Lebanon with the beautiful white rocks that mark the state border, the mountains of the Galilee, and when the view is really great - all the way up to Mr. Hermon. Stunning views during both day and night, when the Bay shines like thousands of diamonds and the ships stand like islands of lights in the dark sea. If yo visit Haifa, which you really must, do not miss out on this, and if you are lucky you will have the full moon over the bay.',1,5),
('Church of St. James','We primarily went to that church for St James tomb, step brother of the Christ. But we arrived during vespers and remained there, captivated by the chants of the choir. The church itself is worth a look, as is the Armenian neighborhood it is located at.',2,4),
('The Citadel','I have visited the Citadel multiple times over the years. The site has been substantially restored to its former glory. It is easily visted using the self-tour equipment. An interesting site to visit which would also be interesting to teenagers.',4,3),
('Dar Zahran Heritage Building','Zahran was a wonderful host; he offered us coffee and his time telling us the story of the building and of his history, expecting nothing in return. His generosity and kindness were things I will forever remember about Ramallah. Thank you, friend, for taking the time for us!',6,5);
COMMIT;
