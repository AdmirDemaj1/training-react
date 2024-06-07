// Generics

// Generics are a feature that allow us to create reusable functions, components, interfaces, classes
// that can operate on a variaty of data types without changing type safety.


// Generics with Functions

// const addUID = (obj: object ) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
// };

// 1- Create the Generic Type

const addUID = <T>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}


// 2 - Make it more explicit so it can accept only objects

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
// return {...obj, uid}
// }

// 3 - Make it more explicit so it can only caccept objects which have the name in it

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
// return {...obj, uid}
// }

let docOne = addUID({name: "foo", surname: "foo", bar: "bar"});
let docTwo = addUID({ bar: "bar"});
// let docThree = addUID(5);

console.log(docOne.name)


// Generics with Interfaces

// interface Resource<G extends object> {
//     uid: number,
//     resName: string,
//     data: G
// }

// const docThree: Resource<object> = {
//     uid: 2,
//     resName: "test",
//     data: {foo:"foo"}
// }

// const docFour: Resource<string[]> = {
//     uid: 2,
//     resName: "test",
//     data: ["foo", "foo", "foo"]
// }

// const docFive: Resource<number> = {
//     uid: 2,
//     resName: "test",
//     data: 2
// }



// Being more explicit
interface Resource<G extends {name: string}> {
    uid: number,
    resName: string,
    data: G
}

const docThree: Resource<{name:"hey", foo:"foo"}> = {
    uid: 2,
    resName: "test",
    data: {name:"hey", foo:"foo"}
}