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
}

document.addEventListener('DOMContentLoaded', function () {
    let arrayMovie = []; 

    let showMovie = (arrayMovie) => {
        let listaMovie = document.querySelector("#listaPeliculas");
        listaMovie.innerHTML = '';
        
        arrayMovie.forEach(pelicula => {
            let divPadreMovie = document.createElement("div");
            divPadreMovie.classList.add("movie-card");

            let divFotoMovie = document.createElement("div");
            divFotoMovie.classList.add("movie-photo");
            divFotoMovie.innerHTML = `<img src="${pelicula.photo}" alt="${pelicula.title}">`;

            let divTextoMovie = document.createElement("div");
            divTextoMovie.classList.add("movie-details");
            divTextoMovie.innerHTML = `
                <p><strong>Título:</strong> ${pelicula.title}</p>
                <p><strong>Año estreno:</strong> ${pelicula.releaseYear}</p>
                <p><strong>Nacionalidad:</strong> ${pelicula.nationality}</p>
                <p><strong>Género:</strong> ${pelicula.genre}</p>
                <p><strong>Actores:</strong> ${pelicula.actors.join(', ')}</p>
                <p><strong>Director:</strong> ${pelicula.director}</p>
                <p><strong>Escritor:</strong> ${pelicula.writer}</p>
                <p><strong>Lenguaje:</strong> ${pelicula.language}</p>
                <p><strong>Plataforma:</strong> ${pelicula.platform}</p>
                <p><strong>Protagonista:</strong> ${pelicula.mainCharacterName}</p>
                <p><strong>Productor:</strong> ${pelicula.producer}</p>
                <p><strong>Distribuidor:</strong> ${pelicula.distributor}</p>
            `;

            divPadreMovie.appendChild(divFotoMovie);
            divPadreMovie.appendChild(divTextoMovie);
            listaMovie.appendChild(divPadreMovie);
        });
    };

    let botonMovie = document.querySelector("#enlacePeliculas");
    botonMovie.addEventListener("click", () => {
        let prof = document.querySelector("#sectionProfesionales");
        let prin = document.querySelector("#sectionPrincipal");
        let movie = document.querySelector("#sectionPeliculas");

        prof.style.display = "none";
        prin.style.display = "none";
        movie.style.display = "block";

        showMovie(arrayMovie);
    });

    let movieForm = document.getElementById('movieForm');
    movieForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let titulo = document.querySelector("#titulo").value;
        let anio = document.querySelector("#anio").value;
        let nacionalidad = document.querySelector("#nacionalidad").value;
        let genero = document.querySelector("#genero").value;
        let actor = document.querySelector("#actor").value.split(',');
        let director = document.querySelector("#director").value;
        let escritor = document.querySelector("#escritor").value;
        let idioma = document.querySelector("#idioma").value;
        let plataforma = document.querySelector("#plataforma").value;
        let protagonista = document.querySelector("#protagonista").value;
        let productor = document.querySelector("#productor").value;
        let distribuidor = document.querySelector("#distribuidor").value;
        let photo = document.querySelector("#photo").value;

        let nuevaPelicula = new Movie(titulo, anio, nacionalidad, genero, actor, director, escritor, idioma, plataforma, protagonista, productor, distribuidor, photo);
        arrayMovie.push(nuevaPelicula);

        showMovie(arrayMovie);
    });
});


module.exports = Movie;
