const Professional = require("./professional");

let professional1 = new Professional("Carlos", 36, 74, 1.81, false, "Español", 2, "actor", "carlos.jpg");
let professional2 = new Professional("Laura", 29, 60, 1.72, false, "Francesa", 5, "guionista", "laura.jpg");
let professional3 = new Professional("David", 55, 71, 1.77, true, "Portugues", 3, "director", "david.jpg");

professional1.printAttributes();
professional2.printAttributes();
professional3.printAttributes();
