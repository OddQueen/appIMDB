
import { Imdb } from "./imdb";
import { Movie } from "./movie";

// Creamos instancias de películas para cada array
const movies1: Movie = new Movie("The Godfather", 1972, "USA", "Crime");

const movies2: Movie = new Movie("The Dark Knight", 2008, "USA", "Action");

const movies3: Movie = new Movie("Forrest Gump", 1994, "USA", "Drama");

const movies4: Movie = new Movie("The Matrix", 1999, "USA", "Action");

const movies5: Movie = new Movie("The Silence of the Lambs", 1991, "USA", "Thriller");

const movies6: Movie = new Movie("Inception", 2010, "USA", "Sci-Fi");

// Creamos una instancia de Imdb con las películas creadas
const imdb = new Imdb([movies1, movies2, movies3, movies4, movies5, movies6]);

// Mostramos las películas en la base de datos IMDb
console.log("Películas en la base de datos IMDb:");
imdb.pelicula.forEach((movies, index) => {
    console.log(`  Película ${index + 1}: ${movies.title}`);  
   
    });
