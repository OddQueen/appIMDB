
export class Professional {
    constructor(public name:string, public age:number, public weight:number, public height:number, public isRetired:boolean, public nationality:string, public oscarsNumber:number, public profession:string){};

    public printAttributes():void {
        for (let element in this) {
            if (typeof this[element] !== "function") {
                console.log(this[element]);
            };
        };
    };
};