class Professional {
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }

    printAttributes() {
        for (let element in this) {
            if (typeof this[element] !== "function") {
                console.log(this[element]);
            }
        }
    }
}

let professionals = [];

document.addEventListener("DOMContentLoaded", () => {
    let enlaceProfesionales = document.getElementById("enlaceProfesionales");
    let sectionProfesionales = document.getElementById("sectionProfesionales");
    let listaProfesionales = document.getElementById("listaProfesionales");

    enlaceProfesionales.addEventListener("click", () => {
        document.getElementById("sectionPrincipal").style.display = "none";
        document.getElementById("sectionPeliculas").style.display = "none";
        sectionProfesionales.style.display = "block";
    });

    function displayProfessionals() {
        listaProfesionales.innerHTML = "";
        professionals.forEach(professional => {
            const professionalDiv = document.createElement("div");
            professionalDiv.innerHTML = `
                <h4>${professional.name}</h4>
                <img src="${professional.photo}" alt="${professional.name}">
                <p><strong>Edad:</strong> ${professional.age}</p>
                <p><strong>Peso:</strong> ${professional.weight} kg</p>
                <p><strong>Altura:</strong> ${professional.height} cm</p>
                <p><strong>Retirado:</strong> ${professional.isRetired ? "Sí" : "No"}</p>
                <p><strong>Nacionalidad:</strong> ${professional.nationality}</p>
                <p><strong>Oscars:</strong> ${professional.oscarsNumber}</p>
                <p><strong>Profesión:</strong> ${professional.profession}</p>
            `;
            listaProfesionales.appendChild(professionalDiv);
        });
    }
});

module.exports = Professional;
