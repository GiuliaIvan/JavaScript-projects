export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(cow) {
        return `

        <div class="row">
            <div class="column">
                <div class="card">
                    
                    <h3>${cow.getBreed()}</h3>
                    <p>Registration Number: ${cow.getRegistrationNumber()}</p>
                    <p>Stall: ${cow.getStallNumber()}</p>
                    <p>Birthday: ${cow.getBirthday()}</p>
                    <p>Milk ( L / Year): ${cow.getMilkProduction()}</p>
                    <p><button type="button" id="${cow.getRegistrationNumber()}">Delete</button></p>
                </div>
            </div>
        </div>
        `
    }

    rnSearch(registrationNumber) {
        const cow = this.model.cowList.getCow(registrationNumber);
        let template = "";

        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search(searchCow) {
        console.log(searchCow.milkProduction)
        const cow = this.model.cowList.search(searchCow);
        let template = "";

        if (cow !== null) {
            template = this.buildTemplate(cow);
        } else {
            template = `
            <tr class="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    showAllCows() {
        let template = "";
        for (const cow of this.model.cowList.allCows()) {
            template += this.buildTemplate(cow);
        }
        this.view.message(template);
    }

    newCow(cow) {
        const doesCowAlreadyExist = this.model.cowList.getCow(cow.registrationNumber);

        if(doesCowAlreadyExist === null) {
            this.model.cowList.addCow(cow.registrationNumber, cow.stallNumber, cow.breed, cow.birthday, cow.milkProduction);
            this.view.snackbar("The cow was saved");
            this.showAllCows();
        } else {
            this.view.snackbar("The cow already exists");
        }
    }

    deleteCow(rn) {
        this.model.cowList.deleteCow(rn);
        this.view.snackbar("The cow was deleted!");
    }
}