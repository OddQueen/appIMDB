const Professional = require("./professional");

class Movie {
    constructor(title, releaseYear, nationality, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.photo = photo;
        this.actors = [];
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

module.exports = Movie;
