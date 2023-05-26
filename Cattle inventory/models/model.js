import Inventory from "../utils/inventoryClass.js"

export default class Model {
    constructor() {
        this.cowList = new Inventory;
        this.cowList.addCow("34-343", 13, "Paula", "5/26/1998", 5600);
        this.cowList.addCow("74-323", 7, "Milka", "6/21/2003", 4352);
        this.cowList.addCow("11-421", 20, "Muu-Muu", "2/01/1997", 5276);
        this.cowList.addCow("67-965", 3, "Joiana", "7/20/2002", 6000);
    }
}