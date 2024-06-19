class Movie {
    constructor(title, releaseYear, nationality, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.photo = photo;
        this.actors = [];
        this.writer = '';
        this.director = '';
        this.language = '';
        this.platform = '';
        this.isMCU = false;
        this.mainCharacterName = '';
        this.producer = '';
        this.distributor = '';
    }

    showMovieDetails() {
        console.log("Movie Title:", this.title);
        console.log("Release Year:", this.releaseYear);
        console.log("Nationality:", this.nationality);
        console.log("Genre:", this.genre);
        console.log("Photo:", this.photo);
        console.log("Director:", this.director);
        console.log("Writer:", this.writer);
        console.log("Actors:");
        this.actors.forEach(actor => {
            console.log("- " + actor);
        });
        console.log("Language:", this.language);
        console.log("Platform:", this.platform);
        console.log("Is MCU:", this.isMCU);
        console.log("Main Character Name:", this.mainCharacterName);
        console.log("Producer:", this.producer);
        console.log("Distributor:", this.distributor);
    }
}

const movies = [
    {
        title: "Mad Max: Furia en la carretera",
        rating: "8.1",
        image: "https://image.tmdb.org/t/p/w500/8tNX8s3j1O0eqilOQkuroRLyOZA.jpg"
    },
    {
        title: "Dune",
        rating: "8.0",
        image: "https://image.tmdb.org/t/p/w500/p8Gg1WwvuZimlVRJmTtnBLFz4Wv.jpg"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const enlacePeliculas = document.getElementById("enlacePeliculas");
    const sectionPeliculas = document.getElementById("sectionPeliculas");
    const listaPeliculas = document.getElementById("listaPeliculas");
    const movieForm = document.getElementById("movieForm");

    enlacePeliculas.addEventListener("click", () => {
        document.getElementById("sectionPrincipal").style.display = "none";
        sectionPeliculas.style.display = "block";
        document.getElementById("sectionProfesionales").style.display = "none";
    });

    movieForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newMovie = new Movie(
            document.getElementById("titulo").value,
            document.getElementById("anyo").value,
            document.getElementById("nacion").value,
            document.getElementById("genero").value,
            document.getElementById("direc").value
        );
        newMovie.actors = document.getElementById("actor").value.split(",").map(actor => actor.trim());
        newMovie.director = document.getElementById("director").value;
        newMovie.writer = document.getElementById("escritor").value;
        newMovie.language = document.getElementById("lengua").value;
        newMovie.platform = document.getElementById("plataforma").value;
        newMovie.mainCharacterName = document.getElementById("prota").value;
        newMovie.producer = document.getElementById("produc").value;
        newMovie.distributor = document.getElementById("distri").value;
        movies.push(newMovie);
        displayMovies();
        movieForm.reset();
    });

    function displayMovies() {
        listaPeliculas.innerHTML = "";
        movies.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.innerHTML = `
                <h4>${movie.title} (${movie.releaseYear})</h4>
                <img src="${movie.photo}" alt="${movie.title}">
                <p><strong>Nacionalidad:</strong> ${movie.nationality}</p>
                <p><strong>Género:</strong> ${movie.genre}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Escritor:</strong> ${movie.writer}</p>
                <p><strong>Idioma:</strong> ${movie.language}</p>
                <p><strong>Plataforma:</strong> ${movie.platform}</p>
                <p><strong>Protagonista:</strong> ${movie.mainCharacterName}</p>
                <p><strong>Productor:</strong> ${movie.producer}</p>
                <p><strong>Distribuidor:</strong> ${movie.distributor}</p>
                <p><strong>Actores:</strong> ${movie.actors.join(", ")}</p>
            `;
            listaPeliculas.appendChild(movieDiv);
        });
    }
});

module.exports = Movie;
