"use strict";
// Syntax Error
let let, banane;
();
if 
// Type error
(
// Type error
console.blub())
    ;
let name2 = "foo";
console.log(name2.length());
name2 = {};
name2 = [];
// Type Annotations
let rocket;
rocket = "JOHN";
rocket.toUpperCase();
rocket = 19.55;
rocket.toPrecision(1);
rocket.toUpperCase();
let kursi;
kursi = 19;
// Generic Types
//Interfaces
//default types
// unknows types


// currying
function add(x, y) {
    const complexLogic = 999 + 999;
    setTimeout(100000);
  }


function add(x) {
    const complexLogic = 999 + 999;
    setTimeout(100000);
    return function(y) {
      return x + y;
    };
  }
const addByThree = add(3);
addByThree(7);

