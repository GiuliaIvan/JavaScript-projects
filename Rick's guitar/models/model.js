import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.guitarList = new Inventory;
        // this.guitarList.addGuitar("34-343", 3200.50, "Gibson", "Les Paul", "Electric", "Maple", "Walnut");
        // this.guitarList.addGuitar("74-323", 5407.00, "Fender", "Stratocaster", "Electric", "Cedar", "Mahogany");
        // this.guitarList.addGuitar("11-421", 109.50, "Yamaha", "F310", "Acoustic", "Ash", "Birch");
        // this.guitarList.addGuitar("67-965", 199.76, "Tanglewood", "Crossroads", "Acoustic", "Mahogany", "Mahogany");
    }

    // 8.09.22
    initialize(guitars) {
        for(const guitar of guitars){
            this.guitarList.addGuitar(guitar.serialNumber, guitar.price, guitar.builder, guitar.model,
            guitar.type, guitar.backwood, guitar.topwood)
        }
    }
}