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

module.exports = Professional;
