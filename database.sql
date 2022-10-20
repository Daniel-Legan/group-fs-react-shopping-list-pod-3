-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

DROP TABLE IF EXISTS "shopping_list";

CREATE TABLE "shopping_list" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR(80) NOT NULL,
	"quantity" FLOAT NOT NULL,
	"unit" VARCHAR(20) NOT NULL,
	"status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "shopping_list" ("item", "quantity", "unit")
VALUES ('orange', 5, 'lbs'), ('potato', 20, 'oz');