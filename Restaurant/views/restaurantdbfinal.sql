CREATE DATABASE restaurant_dbfinal;

CREATE TABLE restaurant(
  id serial primary key,
  name varchar,
  address varchar,
  catagory varchar
);

CREATE TABLE reviewer(
  id serial primary key,
  name varchar,
  email varchar,
  karma integer,
  CHECK (karma > 0 and karma <= 7)
);

CREATE TABLE review_table(
  id serial primary key,
  reviewer_id integer REFERENCES reviewer(id),
  stars integer,
  title varchar,
  review varchar,
  restaurant_id integer REFERENCES restaurant (id),
    CHECK (stars >= 0 and stars <= 5)
);

INSERT INTO restaurant values
(default, 'NaanStop', '123 uwuStreet', 'Indian'),
(default, 'Chipotle', '456 uwuStreet', 'Mexican'),
(default, 'Lovies', '789 uwuStreet', 'BBQ');

INSERT INTO reviewer values
(default, 'Marie','MarieT@gmail.com', 6),
(default, 'John','xXsweglord840KappaXx@gmail.com', 2),
(default, 'BSME','science@gmail.com', 7),
(default, 'Druid','art@gmail.com', 6);

INSERT INTO review_table values
(default,1,4,'Epic Food Review','peak food tbhiidssmsf',1),
(default,2,2,'The hungry Worker', 'meh food tbhiidssmsf',3),
(default,3,5,'Solid Food','great food tbhiidssmsf',2),
(default,4,5,'Solid Food','AMAZING food tbhiidssmsf',2);
