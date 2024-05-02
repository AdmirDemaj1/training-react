abstract class Shape {
    private _name: string = "Shape 1";

    abstract getArea(): number;

    toString(): string {
        return `This is shape of ${this._name}`
    }
};

class Rectangle extends Shape{
    getArea(): number {
        return 2
    }
}

class Circle extends Shape{
    getArea(): number {
        return 2
    }
}
