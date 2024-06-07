type Product = | {type: "book", title: string, author: string} 
                | {type: "electronics", name: string, brand: string};


const book: Product = {
    type: "book",
    title: "TypeScript Starter",
    author: "Beni"
}

const phone: Product = {
    type: "electronics",
    name: "Iphone X",
    brand: "Apple"
}

// const tapet = {
//     type: "mobilie",
//     name: "Iphone X",
//     brand: "Apple"
// }

// Krijojme funksionin

function getProdDetails(product: Product): string {
    switch (product.type) {
        case "book": 
        return `Title : ${product.title}, Author: ${product.author}`;
        case "electronics":
            return `Title : ${product.name}, Author: ${product.brand}`;
        default:
            return `Nuk u gjet asnje e dhene per kete type`;
};
}

// getProdDetails(phone);


