const Movie = require("./movie");
const Professional = require("./professional");

const blackPantherMovie = new Movie("Black Panther: Wakanda Forever", 2022, "USA", "Action", "black_panther.jpg");

const director = "Steven Spielberg";
const writer = "Pedro Almodóvar";
const actor = "Tom Holland";

blackPantherMovie.director = director;
blackPantherMovie.writer = writer;
blackPantherMovie.actors.push(actor);

blackPantherMovie.language = "English";
blackPantherMovie.platform = "Cinemas";
blackPantherMovie.isMCU = true;
blackPantherMovie.mainCharacterName = "T'Challa";
blackPantherMovie.producer = "Marvel Studios";
blackPantherMovie.distributor = "Walt Disney Studios Motion Pictures";

blackPantherMovie.showMovieDetails();
