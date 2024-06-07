"use strict";
//arrays
let arrayOfStrings = ["foo1", "foo2", "foo3"];
arrayOfStrings.push("foo4");
arrayOfStrings.push(2);
arrayOfStrings[1] = 3;
let arrayOfNumbers = [1, 2, 3];
arrayOfNumbers.push("foo");
let mixed = ["foo1", 1, "foo2", 2, false, {}, []];
let mixed2 = ["foo1", 1, "foo2", 2, false];
mixed.push("22");
mixed.push(2);
mixed.push(true);
let name44;
// union type
let foo;
// Object
let ninja = {
    name: "naruto",
    belt: "black",
    age: 88
};
ninja.age = 30;
ninja.name = "Goku";
ninja.age = "33";
ninja = {
    name: "naruto2",
    belt: "black1",
    age: 44
};
//explicit Types
let bar;
bar = {
    name: "naruto2",
    belt: "black1",
    age: "bawfjkbafjw"
};
