"use strict";
class Shape {
    constructor() {
        this._name = "Shape 1";
    }
    toString() {
        return `This is shape of ${this._name}`;
    }
}
;
class Rectangle extends Shape {
    getArea() {
        return 2;
    }
}
class Circle extends Shape {
    getArea() {
        return 2;
    }
}
