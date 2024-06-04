import { Professional } from "./professional";

let professional1:Professional = new Professional ("Carlos", 36, 74, 1.81, false, "Español", 2, "actor")
let professional2:Professional = new Professional ("Laura", 29, 60, 1.72, false, "Francesa", 5, "cantante")
let professional3:Professional = new Professional ("David", 55, 71, 1.77, true, "Portugues", 3, "cantante")

console.log(professional1.printAttributes());
console.log(professional2.printAttributes());
console.log(professional3.printAttributes());