USE mydb;
SELECT * FROM mydb.Customer;
SELECT * FROM mydb.Contact;

INSERT INTO Supplier VALUES 
(DEFAULT, "Davinci Gourmet", "davincigourmet@kerry.com", "(206)-762-0379", "Syrups and Sauces", "Seattle", "WA", "98104", "North America, USA", "224 1st Avenue South");
SELECT * FROM Supplier; 

INSERT INTO CartLineItem VALUES 
("2073738410058", "DVG French Vanilla Syrup", 7.65, "25.4 OZ",1),
("2073738410104", "DVG Raspberry Syrup", 6.32, "25.4 OZ",1),
("2073738410021", "DVG Caramel Syrup", 7.21, "25.4 OZ",1),
("2073738410105", "DVG Strawberry Syrup", 5.45, "25.4 OZ",1),
("6073738409201", "DVG Chocolate Sauce", 12.45, "64 OZ",1),
("6073738409202", "DVG Pumpkin Sauce", 13.42, "64 OZ",1),
("6073738406211", "DVG White Chocolate Sauce", 12.45, "64 OZ",1);
SELECT * FROM CartLineItem;