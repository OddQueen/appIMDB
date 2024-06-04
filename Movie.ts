import { Professional } from "./professional";

export class Movie {
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nationality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
    }

    public showMovieDetails(): void {
        console.log("Movie Title:", this.title);
        console.log("Release Year:", this.releaseYear);
        console.log("Nationality:", this.nationality);
        console.log("Genre:", this.genre);
        console.log("Director:", this.director.name); 
        console.log("Writer:", this.writer.name); 
        console.log("Actors:");
        this.actors.forEach(actor => {
            console.log("- " + actor.name);
        });
        console.log("Language:", this.language);
        console.log("Platform:", this.platform);
        console.log("Is MCU:", this.isMCU);
        console.log("Main Character Name:", this.mainCharacterName);
        console.log("Producer:", this.producer);
        console.log("Distributor:", this.distributor);
    }
}
