// Classes are like blueprints for creating objects.
// Classes have properties (data) that describe the object, like the cookie's name ("Chocolate Chip") or its size.
// Classes also have methods (functions) that act on the object's data, like a bake() method to cook the cookie.
// We use classes to create multiple objects (cookies) that share the same characteristics but can have different values (flavors, sizes).
// Classes make our code cleaner because we don't have to rewrite the same code for each similar object.
// They also help us avoid mistakes by keeping the data (properties) and actions (methods) organized together.

// Core Concepts of OOP:

// Objects: Objects are fundamental building blocks in OOP.
// They represent real-world entities or concepts with properties (data) and methods (functions) that operate on that data.
// Classes: Classes act as blueprints for creating objects.
// They define the structure and behavior of objects belonging to that class.
// Inheritance: Classes can inherit properties and methods from parent classes, allowing for code reuse and specialization.
// Derived classes can extend the functionality of parent classes.
// Encapsulation: Classes promote encapsulation by bundling related properties and methods together.
// This helps control access to data and prevents unintended modifications.

// Classes are a tool for implementing OOP concepts in JavaScript.
// They provide a way to define objects, establish inheritance relationships, and encapsulate data and methods within a well-defined structure.
// This makes your JavaScript code more organized, reusable, and easier to reason about,
// especially for larger projects that rely heavily on OOP principles.

//  This is a class named Person
class Person {
  //  These are properties (like variables) that define a person
  name: string; // string data type specifies the name must be text
  age: number; // number data type specifies the age must be a number

  // This is a constructor. It's called when you create a new Person object
  constructor(name: string, age: number) {
    //  this. refers to the current object being created
    this.name = name;
    this.age = age;
  }

  // This is a method (like a function) that can be used with Person objects
  greet(): void {
    // void specifies this method doesn't return a value
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Now you can create objects (instances) of the Person class
let student1 = new Person("Alice", 18);
let teacher1 = new Person("Mr. Brown", 42);

// You can call methods on these objects
student1.greet(); // Output: Hello, my name is Alice and I am 18 years old.
teacher1.greet(); // Output: Hello, my name is Mr. Brown and I am 42 years old.

let people: Person[] = [];
people.push("");
people.push(student1);
people.push(teacher1);
