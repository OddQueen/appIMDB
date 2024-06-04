
import { Movie } from "./movie";

export class Imdb {
    public pelicula: Movie[];

    constructor(pelicula: Movie[]) {
        this.pelicula = pelicula;
    }
}
