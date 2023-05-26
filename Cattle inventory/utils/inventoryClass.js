import Cow from "./cowClass.js"

export default class Inventory {
    constructor() {
        this.cows = [];
    }

    addCow(registrationNumber, stallNumber, breed, birthday, milkProduction){
        const newCow = new Cow(registrationNumber, stallNumber, breed, birthday, milkProduction);
        this.cows.push(newCow);
    }

    getCow(registrationNumber){
        for (const cow of this.cows) {
            if (registrationNumber === cow.registrationNumber) {
                return cow;
            }
        }
        //The value null represents the intentional absence of an object value;
        return null;
    }

    search(idealCow) {
        //Destructuring
        const {stallNumber, breed, birthday, milkProduction} = idealCow;
        console.log(stallNumber, breed, birthday, milkProduction)
        console.log(idealCow)

        for (const cow of this.cows) {
            if (cow.stallNumber == stallNumber && cow.breed === breed && cow.birthday === birthday && cow.milkProduction <= milkProduction) {
                return cow;
            }
        }
        return null;
    }

    allCows() {
        return this.cows;
    }

    deleteCow(rn) {
        const index = this.cows.map(cow => cow.registrationNumber).indexOf(rn);
        this.cows.splice(index, 1); // removes guitar from guitar object list
    }
}