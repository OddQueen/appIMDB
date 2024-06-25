class Movie {
    constructor(title, releaseYear, nationality, genre, language, platform, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.language = language;
        this.platform = platform;
        this.photo = photo;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let arrayMovie = [
        new Movie("Mad Max: Furia en la carretera", 2024, "EEUU", "Acción, aventura, ciencia ficción", "Español", "Max", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0v6pWmUWXyKOiGfL8NKa3gHaKk%26pid%3DApi&f=1&ipt=bd051025d5192653c63a279b4a719e865b0f9de49097405538f92fd8d1083ca2&ipo=images"),
        new Movie("Dune", 2021, "EEUU", "Acción, aventura, drama", "Inglés", "Prime video", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1LJ-th-2pxKGLsFjICUj6gAAAA%26pid%3DApi&f=1&ipt=d5bed40d062fbac14db85182f4bba595a3ee711674e1ba2167c9b8163d620d55&ipo=images"),
        new Movie("Del revés 2", 2024, "EEUU", "Animación, aventura, comedia", "Inglés", "Cines", "assets/del reves.jpeg"),
        new Movie("Los juegos del hambre: Balada de pájaros cantores y serpientes", 2023, "EEUU", "Acción, aventura, drama", "Inglés", "Prime video", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ct5V9D0KwmdNXSvFyPSHDAHaK8%26pid%3DApi&f=1&ipt=d7437b4624bade949bf36d763f572b8e547313e5d546ab0d4c60073844d37e11&ipo=images")
    ];

    let showMovie = (arrayMovie) => {
        let listaMovie = document.querySelector(".row");
        listaMovie.innerHTML = '';

        arrayMovie.forEach(pelicula => {
            let divPadreMovie = document.createElement("div");
            divPadreMovie.classList.add("col-md-3");
            divPadreMovie.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${pelicula.photo}" class="card-img-top" alt="${pelicula.title}">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.title}</h5>
                        <p class="card-text"><strong>Año:</strong> ${pelicula.releaseYear}</p>
                        <p class="card-text"><strong>Nacionalidad:</strong> ${pelicula.nationality}</p>
                        <p class="card-text"><strong>Género:</strong> ${pelicula.genre}</p>
                        <p class="card-text"><strong>Idioma:</strong> ${pelicula.language}</p>
                        <p class="card-text"><strong>Plataforma:</strong> ${pelicula.platform}</p>
                        <a href="#" class="btn btn-dark">Ver detalles</a>
                    </div>
                </div>
            `;
            listaMovie.appendChild(divPadreMovie);
        });
    };

    let movieForm = document.getElementById('movieForm');
    movieForm.addEventListener('submit', function (event) {
        event.preventDefault();

        let titulo = document.querySelector("#titulo").value;
        let anio = document.querySelector("#anio").value;
        let nacionalidad = document.querySelector("#nacionalidad").value;
        let genero = document.querySelector("#genero").value;
        let idioma = document.querySelector("#idioma").value;
        let plataforma = document.querySelector("#plataforma").value;
        let photo = document.querySelector("#photo").value;

        let nuevaPelicula = new Movie(titulo, anio, nacionalidad, genero, idioma, plataforma, photo);
        arrayMovie.push(nuevaPelicula);

        showMovie(arrayMovie);
    });

    showMovie(arrayMovie);
});
