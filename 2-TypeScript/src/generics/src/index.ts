// Bad Approach, PeopleCollection class works only or Person object.
// If I want to perfrom the same set of operations on Product object, then this approach does not work

// I can create another Class to use Product object but that will drop the DRY principle.
// I can make it work by using union types but still that approach can cause to use redudant code.




// import { Person, Product , City} from "./dataTypes.js";


// let people = [new Person("Bob Smith", "London"),
// new Person("Dora Peters", "New York")];

// let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

// type dataType = Person | Product | City;

// class PeopleCollection {

//     private items: dataType[] = [];
    
//     constructor(initialItems: dataType[]) { //Type safe 1
//     this.items.push(...initialItems);
//     }


//     add(newItem: dataType) {
//     this.items.push(newItem);
//     }

//     getNames(): string[] {
//     return this.items.map(item => item.name);
//     }

//     getItem(index: number): dataType {
//     return this.items[index];
//     }
// }


// class ProductCollection {

//     private items: Product[] = [];
    
//     constructor(initialItems: Product[]) { //Type safe 1
//     this.items.push(...initialItems);
//     }


//     add(newItem: Product) {
//     this.items.push(newItem);
//     }

//     getNames(): string[] {
//     return this.items.map(item => item.name);
//     }

//     getItem(index: number): Product {
//     return this.items[index];
//     }
// }

// let peopleData = new PeopleCollection(people);

// console.log(`Names: ${peopleData.getNames().join(", ")}`);
// let firstPerson = peopleData.getItem(0);
// console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

// if (firstPerson instanceof Person) {
//     console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//     }

// let productData = new PeopleCollection(products);
// console.log(`First Person: ${productData.price}`);



// Creating Generic Classes


// import { Person, Product , City} from "./dataTypes.js";


// let people = [new Person("Bob Smith", "London"),
// new Person("Dora Peters", "New York")];

// let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

// let cities = [new City(8136000), new City( 2141000)];


// class DataCollection<T extends {name: string}> {

//     private items: T[] = [];
    
//     constructor(initialItems: T[]) { //Type safe 1
//     this.items.push(...initialItems);
//     }


//     add(newItem: T) {
//     this.items.push(newItem);
//     }

//     // getNames(): string[] {
//     // return this.items.map(item => item.name);
//     // }

//     getItem(index: number): T {
//     return this.items[index];
//     }
// }

// let peopleData = new DataCollection<Person>(people);
// //console.log(`Names: ${peopleData.getNames().join(", ")}`);
// let firstPerson = peopleData.getItem(0);
// //if (firstPerson instanceof Person) {
// console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

// //}


// let productData = new DataCollection<Product>(products);
// let cities1 = new DataCollection<City>(cities);



// Defining multiple type parameters

import { City, Person, Product, Employee } from "./dataTypes.js";
let people = [new Person("Bob Smith", "London"),
new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];



class DataCollection<T extends {name: string}, U, T, V> {

    private items: T[] = [];

constructor(initialItems: T[]) {
this.items.push(...initialItems);
}


collate(targetData: U[], itemProp: string, targetProp: string){
  let resultss = [];
  this.items.forEach(item => {
  let match = targetData.find(d =>
  d[targetProp] === item[itemProp]);
  if (match !== undefined) {
  resultss.push({ ...match, ...item });
}

showName(user: T): T{
    return "Hey there ...."
}
});
return resultss;
}

}


let peopleData = new DataCollection<Person, City, Employee>(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c =>
console.log(`${c.name}, ${c.city}, ${c.population}`));


