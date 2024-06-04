const fs = require ("fs");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
// Creamos instancias de películas para cada array
var movies1 = new movie_1.Movie("The Godfather", 1972, "USA", "Crime");
var movies2 = new movie_1.Movie("The Dark Knight", 2008, "USA", "Action");
var movies3 = new movie_1.Movie("Forrest Gump", 1994, "USA", "Drama");
var movies4 = new movie_1.Movie("The Matrix", 1999, "USA", "Action");
var movies5 = new movie_1.Movie("The Silence of the Lambs", 1991, "USA", "Thriller");
var movies6 = new movie_1.Movie("Inception", 2010, "USA", "Sci-Fi");
// Creamos una instancia de Imdb con las películas creadas
var imdb = new imdb_1.Imdb([movies1, movies2, movies3, movies4, movies5, movies6]);
// Mostramos las películas en la base de datos IMDb
console.log("Películas en la base de datos IMDb:");
imdb.pelicula.forEach(function (movies, index) {
    console.log("  Pel\u00EDcula ".concat(index + 1, ": ").concat(movies.title));
});


let jason = JSON.stringify(movies1)
fs.writeFileSync("imdbBBDD.json", jason);


let JSONaObjeto = JSON.parse(fs.readFileSync("imdbBBDD.json"))
imdb.pelicula.push(JSONaObjeto)