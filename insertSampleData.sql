select * from users;
select * from categories;
select * from movies;
select * from movie_categories;
select * from reviews;
select * from watchlist;
INSERT INTO categories (name) VALUES
('Action'),
('Adventure'),
('Animation'),
('Comedy'),
('Drama'),
('Fantasy'),
('Horror'),
('Mystery'),
('Romance'),
('Science Fiction');

INSERT INTO users (username, email, password_hash) VALUES
('user1', 'user1@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user2', 'user2@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user3', 'user3@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user4', 'user4@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user5', 'user5@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user6', 'user6@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user7', 'user7@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user8', 'user8@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user9', 'user9@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc'),
('user10', 'user10@example.com', '$argon2id$v=19$m=65536,t=3,p=4$FXYrF7Yz8pSoNYGh2kZCng$l/wtfdwTFDPBj8+R1oMFkED+X75OrcJtTaJ7Ogvsxwc');

INSERT INTO movies (director, title, description, release_date, duration, rating) VALUES
('Christopher Nolan', 'Inception', 'A mind-bending sci-fi thriller about dream invasion.', '2010-07-16', 148, 8.8),
('Francis Ford Coppola', 'The Godfather', 'An organized crime dynasty transfer its leadership.', '1972-03-24', 175, 9.2),
('Anthony Russo, Joe Russo', 'Avengers: Endgame', 'The final battle against Thanos.', '2019-04-26', 181, 8.4),
('Andy Muschietti', 'It', 'A group of kids face a shape-shifting clown.', '2017-09-08', 135, 7.3),
('Denis Villeneuve', 'Interstellar', 'Explorers travel through a wormhole in space.', '2014-11-07', 169, 8.6),
('Ridley Scott', 'Gladiator', 'A former general seeks revenge.', '2000-05-05', 155, 8.5),
('Quentin Tarantino', 'Pulp Fiction', 'Interwoven stories of crime and redemption.', '1994-10-14', 154, 8.9),
('Peter Jackson', 'The Lord of the Rings: The Fellowship of the Ring', 'A journey to destroy the One Ring.', '2001-12-19', 178, 8.8),
('Steven Spielberg', 'Jurassic Park', 'A theme park with real dinosaurs.', '1993-06-11', 127, 8.1),
('David Fincher', 'Fight Club', 'An insomniac and a soap salesman start an underground fight club.', '1999-10-15', 139, 8.8),
('James Cameron', 'Titanic', 'A love story on the ill-fated Titanic.', '1997-12-19', 195, 7.8),
('Martin Scorsese', 'The Wolf of Wall Street', 'A stockbroker rises and falls.', '2013-12-25', 180, 8.2),
('James Gunn', 'Guardians of the Galaxy', 'A group of intergalactic criminals join forces.', '2014-08-01', 121, 8.0),
('Christopher Nolan', 'The Dark Knight', 'Batman faces the Joker.', '2008-07-18', 152, 9.0),
('Robert Zemeckis', 'Forrest Gump', 'A man witnesses historical events.', '1994-07-06', 142, 8.8),
('George Lucas', 'Star Wars: A New Hope', 'A rebellion against the Empire.', '1977-05-25', 121, 8.6),
('Sam Raimi', 'Spider-Man', 'A teenager gets spider-like abilities.', '2002-05-03', 121, 7.4),
('James Wan', 'The Conjuring', 'Paranormal investigators help a family.', '2013-07-19', 112, 7.5),
('Jordan Peele', 'Get Out', 'A visit to meet the girlfriend’s parents turns sinister.', '2017-02-24', 104, 7.7),
('Wes Craven', 'Scream', 'A masked killer terrorizes a town.', '1996-12-20', 111, 7.4),
('Denis Villeneuve', 'Dune: Part One', 'A noble family battles for control of a desert planet.', '2021-10-22', 155, 8.0),
('Chad Stahelski', 'John Wick', 'A retired hitman seeks revenge.', '2014-10-24', 101, 7.4),
('Bryan Singer', 'X-Men', 'Mutants fight for their place in the world.', '2000-07-14', 104, 7.4),
('Edgar Wright', 'Baby Driver', 'A getaway driver gets in trouble.', '2017-06-28', 113, 7.6),
('Guy Ritchie', 'Snatch', 'A British crime comedy full of twists.', '2000-09-01', 104, 8.3);

INSERT INTO movie_categories (movie_id, category_id)
VALUES 
((SELECT movie_id FROM movies WHERE title = 'Inception'), 1),
((SELECT movie_id FROM movies WHERE title = 'The Godfather'), 2),
((SELECT movie_id FROM movies WHERE title = 'Avengers: Endgame'), 3),
((SELECT movie_id FROM movies WHERE title = 'It'), 4),
((SELECT movie_id FROM movies WHERE title = 'Interstellar'), 1),
((SELECT movie_id FROM movies WHERE title = 'Gladiator'), 5),
((SELECT movie_id FROM movies WHERE title = 'Pulp Fiction'), 6),
((SELECT movie_id FROM movies WHERE title = 'The Lord of the Rings: The Fellowship of the Ring'), 7),
((SELECT movie_id FROM movies WHERE title = 'Jurassic Park'), 8),
((SELECT movie_id FROM movies WHERE title = 'Fight Club'), 6),
((SELECT movie_id FROM movies WHERE title = 'Titanic'), 9),
((SELECT movie_id FROM movies WHERE title = 'The Wolf of Wall Street'), 10),
((SELECT movie_id FROM movies WHERE title = 'Guardians of the Galaxy'), 3),
((SELECT movie_id FROM movies WHERE title = 'The Dark Knight'), 6),
((SELECT movie_id FROM movies WHERE title = 'Forrest Gump'), 9),
((SELECT movie_id FROM movies WHERE title = 'Star Wars: A New Hope'), 1),
((SELECT movie_id FROM movies WHERE title = 'Spider-Man'), 3),
((SELECT movie_id FROM movies WHERE title = 'The Conjuring'), 4),
((SELECT movie_id FROM movies WHERE title = 'Get Out'), 4),
((SELECT movie_id FROM movies WHERE title = 'Scream'), 4),
((SELECT movie_id FROM movies WHERE title = 'Dune: Part One'), 1),
((SELECT movie_id FROM movies WHERE title = 'John Wick'), 3),
((SELECT movie_id FROM movies WHERE title = 'X-Men'), 3),
((SELECT movie_id FROM movies WHERE title = 'Baby Driver'), 6),
((SELECT movie_id FROM movies WHERE title = 'Snatch'), 6);

INSERT INTO reviews (user_id, movie_id, rating, comment) VALUES
((SELECT user_id FROM users WHERE username = 'user1'),
 (SELECT movie_id FROM movies WHERE title = 'Inception'), 9, 'A mind-blowing experience!'),

((SELECT user_id FROM users WHERE username = 'user2'),
 (SELECT movie_id FROM movies WHERE title = 'The Godfather'), 10, 'An absolute masterpiece.'),

((SELECT user_id FROM users WHERE username = 'user3'),
 (SELECT movie_id FROM movies WHERE title = 'Avengers: Endgame'), 8, 'An epic conclusion to the saga!'),

((SELECT user_id FROM users WHERE username = 'user4'),
 (SELECT movie_id FROM movies WHERE title = 'It'), 7, 'Creepy and suspenseful, but a bit long.'),

((SELECT user_id FROM users WHERE username = 'user5'),
 (SELECT movie_id FROM movies WHERE title = 'Interstellar'), 9, 'Deep, emotional, and scientifically intriguing!'),

((SELECT user_id FROM users WHERE username = 'user6'),
 (SELECT movie_id FROM movies WHERE title = 'Pulp Fiction'), 10, 'Tarantino at his finest!'),

((SELECT user_id FROM users WHERE username = 'user7'),
 (SELECT movie_id FROM movies WHERE title = 'Titanic'), 8, 'A timeless love story with stunning visuals.'),

((SELECT user_id FROM users WHERE username = 'user8'),
 (SELECT movie_id FROM movies WHERE title = 'The Dark Knight'), 10, 'The best Batman movie ever made!'),

((SELECT user_id FROM users WHERE username = 'user9'),
 (SELECT movie_id FROM movies WHERE title = 'Get Out'), 9, 'Brilliant social horror with a powerful message.'),

((SELECT user_id FROM users WHERE username = 'user10'),
 (SELECT movie_id FROM movies WHERE title = 'John Wick'), 8, 'Action-packed and thrilling from start to finish.');
 