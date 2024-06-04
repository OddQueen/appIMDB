
import { Movie } from "./movie";
import { Professional } from "./professional";

// Instancia de Movie para Black Panther
const blackPantherMovie:Movie = new Movie("Black Panther: Wakanda Forever", 2022, "USA", "Action");

const director = new Professional("Steven Spielberg", 56, 71, 184, true, "USA", 1, "Director");
const writer = new Professional("Pedro Almodóvar", 74, 75, 170, false, "Spanish", 1, "Writer");
const actor = new Professional("Tom Holland", 25, 70, 175, false, "British", 1, "Actor");

// Profesionales en la película
blackPantherMovie.director = director;
blackPantherMovie.writer = writer;
blackPantherMovie.actors.push(actor);

// Añadir datos a película
blackPantherMovie.language = "English";
blackPantherMovie.platform = "Cinemas";
blackPantherMovie.isMCU = true;
blackPantherMovie.mainCharacterName = "T'Challa";
blackPantherMovie.producer = "Marvel Studios";
blackPantherMovie.distributor = "Walt Disney Studios Motion Pictures";

blackPantherMovie.showMovieDetails();
