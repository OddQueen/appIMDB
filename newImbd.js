"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const { Movie } = require('./Movie');

class Imdb {
    constructor(pelicula) {
        this.pelicula = pelicula;
    }
    escribirEnFicheroJSON() {
        let data = JSON.stringify(this.pelicula);
        fs.writeFileSync('archivo.json', data);
        console.log(`Se ha guardado la información en el fichero archivo.json.`);
    }
    obtenerInstanciaIMDB() {
        let data = fs.readFileSync('archivo.json');
        let peliculaData = JSON.parse(data);
        return new Imdb(peliculaData);
    }
}
exports.Imdb = Imdb;

let movies1 = new Movie("The Godfather", 1972, "USA", "Crime");
let movies2 = new Movie("The Dark Knight", 2008, "USA", "Action");
let movies3 = new Movie("Forrest Gump", 1994, "USA", "Drama");
let movies4 = new Movie("The Matrix", 1999, "USA", "Action");
let movies5 = new Movie("The Silence of the Lambs", 1991, "USA", "Thriller");
let movies6 = new Movie("Inception", 2010, "USA", "Sci-Fi");

let imdb = new Imdb([movies1, movies2, movies3, movies4, movies5, movies6]);

console.log("Películas en la base de datos IMDb:");
imdb.pelicula.forEach(function (movies, index) {
    console.log(`  Película ${index + 1}: ${movies.title}`);
});

console.log(movies1);
