"use strict";
const book = {
    type: "book",
    title: "TypeScript Starter",
    author: "Beni"
};
const phone = {
    type: "electronics",
    name: "Iphone X",
    brand: "Apple"
};
// const tapet = {
//     type: "mobilie",
//     name: "Iphone X",
//     brand: "Apple"
// }
// Krijojme funksionin
function getProdDetails(product) {
    switch (product.type) {
        case "book":
            return `Title : ${product.title}, Author: ${product.author}`;
        case "electronics":
            return `Title : ${product.name}, Author: ${product.brand}`;
        default:
            return `Nuk u gjet asnje e dhene per kete type`;
    }
    ;
}
// getProdDetails(phone);
