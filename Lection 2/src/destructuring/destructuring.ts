// Extracting properties

const obj1 = {name: "FOO", age: 40};
obj1.name;
obj1.age;

const {name: firstName, age} = obj1;

// Extracting elements

const numbers = [10, 20, 30];
const [first, second, third] = numbers;

// rest operators

const letters = ["a", "b", "c", "d"];
const [firstLetter, ...restLetters] = letters;

// spread operator

const originalArray = [1, 2, 3];
const newArray = [ ...originalArray];

// 12123
// 123

// spread Objects

const person1 = {name: "John"}
const person2= {age: 35, name: "John"}
const person3= {birth: 35, name: "Test"}

const combined = {...person1, ...person2}

// John 35 John
// 35 John

// 35, 35, Test

// Rest Operators In Objects

const person = {
    first1: "a",
    second1: "b",
    address: {
        a1: "a",
        b1: "b",
        c1: "c"
    }
}

const {first1, second1 , ...addressInfo} = person;
const {a1, b1 ,c1 } = addressInfo;

// const {a1, b1 ,c1 } = person.address;


