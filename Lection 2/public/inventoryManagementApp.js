"use strict";
let inventory = [];
function addItem(newitem) {
    inventory.push(newitem);
}
function displayItem(item) {
    return `${item.name} , ${item.category}, ${item.stock}`;
}
function filterItems(searchBy) {
    return inventory.filter((item) => item.name.toLowerCase().includes(searchBy.toLowerCase()) || item.category.toLowerCase().includes(searchBy.toLowerCase()));
}
function displayAllItems() {
    inventory.forEach(item => console.log(displayItem(item)));
}
function updateInventory(name, newStock) {
    const itemIndex = inventory.findIndex((item) => item.name === name);
    if (itemIndex !== -1) {
        inventory[itemIndex].stock = newStock;
    }
    else {
        console.log("Nuk u gjet anje element ne liste");
    }
}
addItem({ name: "makine", stock: 2, category: "automjete" });
addItem({ name: "bicklete", stock: 10, category: "mjete me 2 rrota" });
console.log("inventory", inventory);
console.log(displayItem({ name: "bicklete", stock: 10, category: "mjete me 2 rrota" }));
console.log(filterItems("bi"));
console.log(displayAllItems());
updateInventory("makine", 18);
