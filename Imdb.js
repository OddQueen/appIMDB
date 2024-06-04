
const fs = require("./fs")

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var Imdb = /** @class */ (function () {
    function Imdb(pelicula) {
        this.pelicula = pelicula;
    }
    return Imdb;
}()
escribirEnFicheroJSON(archivo.JSON:string) {
    let data = JSON.stringify(this.array.forEach(element => {
        pelicula);
    });
    fs.writeFileSync('archivo.json', data);
    console.log(`Se ha guardado la información en el fichero archivo.json.`);
}
obtenerInstanciaIMDB() {
    let data = fs.readFileSync('archivo.json');
    let peliculaData = JSON.parse(data);
    return new Imdb(peliculaData);
});
exports.Imdb = Imdb;


//const jason = JSON.stringify(Imdb);
//console.log(jason);


let jason = JSON.stringify(imdb)
console.log(jason);

let movies = ["Black Panther: Wakanda Forever", 2022, "USA", "Action"]; 
console.log(movies);

let myjason = new imdb(movies);

console.log(myjason);

fs.writeFileSync('imdbBBDD.json', Imdb);
