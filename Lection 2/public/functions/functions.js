"use strict";
let greet = () => {
    console.log("hello");
};
// greet = "";
greet = () => {
    console.log("test");
};
let hey;
// optional params, default params, return values, voids , function parameters
const add = (a = 10, b = 4, c = 77) => {
    // let sum = a  + b;
    // return {
    //     sum
    // }
    if (a && b) {
        console.log(a + b);
    }
};
let var1 = add(10, 4);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
const plus = (a, b) => {
    return a + b;
};
let result2 = plus("1", "2");
//arrow functions
