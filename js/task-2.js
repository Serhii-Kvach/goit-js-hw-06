class Storage {
  #items;
  constructor(objItems) {
    this.#items = objItems;
  }
  getItems() {
    return this.#items;
  }
  addItem(nemItem) {
    this.#items.push(nemItem);
  }
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(
      (item) => item.toLowerCase() !== itemToRemove.toLowerCase()
    );
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
