
let greet = () => {
    console.log("hello")
};
// greet = "";
greet = () => {
    console.log("test")
}

let hey;

// optional params, default params, return values, voids , function parameters

const add = (a: number = 10, b: number = 4, c: number | string = 77): void => {
    // let sum = a  + b;
    // return {
    //     sum
    // }
    if(a && b) {
        console.log(a + b)
    }

};
let var1= add(10, 4);

const minus = (a: number, b: number): number => {
    return a-b;
}

let result = minus(10 , 5);

const plus = (a: string, b: string): string => {
    return a+b;
}

let result2 = plus("1","2");




//arrow functions

