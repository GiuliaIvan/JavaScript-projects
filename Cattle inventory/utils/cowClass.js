export default class Cow {
    constructor(registrationNumber, stallNumber, breed, birthday, milkProduction) {
        this.registrationNumber = registrationNumber;
        this.stallNumber = stallNumber;
        this.breed = breed;
        this.birthday = birthday;
        this.milkProduction = milkProduction;
    }

    getRegistrationNumber() {
        return this.registrationNumber;
    }

    getStallNumber() {
        return this.stallNumber;
    }

    getBreed() {
        return this.breed;
    }

    getBirthday() {
        return this.birthday;
    }

    getMilkProduction() {
        return this.milkProduction;
    }
}