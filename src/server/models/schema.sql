DROP DATABASE IF EXISTS zoopocalypse;
CREATE DATABASE zoopocalypse;
USE zoopocalypse;

CREATE TABLE animals
(
	id INT
	AUTO_INCREMENT,
	animal_name VARCHAR
	(10),
	first_letter VARCHAR
	(1),
	second_letter VARCHAR
	(1),
	third_letter VARCHAR
	(1),
	fourth_letter VARCHAR
	(1),
	fifth_letter VARCHAR
	(1),
	sixth_letter VARCHAR
	(1),
	seventh_letter VARCHAR
	(1),
	eighth_letter VARCHAR
	(1),
	ninth_letter VARCHAR
	(1),
	tenth_letter VARCHAR
	(1),
	PRIMARY KEY
	(id)
);

	CREATE TABLE Users
	(
		id int(11) NOT NULL
		AUTO_INCREMENT,
  username varchar
		(255) NOT NULL,
  email varchar
		(255) NOT NULL,
  password varchar
		(255) NOT NULL,
  age int
		(5) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY
		(id),
  UNIQUE KEY email
		(email)
)

		INSERT INTO animals
			(animal_name, first_letter, second_letter, third_letter, fourth_letter, fifth_letter, sixth_letter, seventh_letter, eighth_letter, ninth_letter, tenth_letter)
		VALUES
			("Lion", "l", "i", "o", "n", null, null, null, null, null, null);

		bat -
		https:
		//pngtree.com/freepng/cartoon-bats-material_3046789.html
fox -
		https:
		//pngio.com/images/png-49851.html
Lion -
		https:
		//pngtree.com/freepng/ferocious-lion_2973357.html
bear -
		https:
		//www.pngfly.com/png-xqnd4f/
tiger -
		https:
		//www.kisspng.com/png-clip-art-jungle-image-cartoon-drawing-6959686/
rhino -
		https:
		//www.kisspng.com/png-cartoon-rhinoceros-illustration-cartoon-rhino-75190/
walrus -
		https:
		//www.123rf.com/photo_96156004_stock-vector-cute-cartoon-walrus-arctic-animal-vector-illustration-isolated-on-white-background-.html?vti=mid8cmwpa7c7tss711-1-2
alpaca -
		https:
		//www.kisspng.com/png-llama-alpaca-drawing-cartoon-clip-art-alpaca-1075394/download-png.html#
penguin -
		https:
		//banner2.kisspng.com/20180130/cxe/kisspng-the-penguin-in-the-snow-cartoon-clip-art-penguin-swing-5a702c5841fbb3.6816422715173008242703.jpg
giraffe -
		https:
		//www.kisspng.com/png-giraffe-cartoon-illustration-giraffe-392474/download-png.html#
elephant -
		https:
		//icon2.kisspng.com/20180226/fjq/kisspng-cartoon-elephant-illustration-animals-elephants-5a94d1d9efa228.4502303715197024899815.jpg