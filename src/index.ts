let id: number = 5;
let company: string = "Jono";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, "Jono", true];

// Tuple 
// A tuple is a TypeScript type that works like an array with some special considerations: 
// The number of elements of the array is fixed.
// The type of the elements is known. The type of the elements of the array need not be the same.
// The elements of the array can be accessed using index numbers.

let person: [string, number, boolean] = ["Jono", 5, true];

// Tuple Array
let people: [string, number, boolean][]

people = [
    ["Jono", 5, true], 
    ["Alli", 5, true]
];


console.log(people);

// Union Types
// A union type is a type that can be one of several other types.
// Union type is  a variable  that can hold multiple types

let unionType: number | string = "Jono";


console.log(unionType);

// Enum or Enumerated type
// An enum is a way of giving more friendly names to sets of numeric values.
// The enum keyword defines an enum-like type.
// Enum allow us to define a set of named constants either numeric or string.
// Enum values are zero-based and the first value is 0.

enum ColorDefaults {
    Red, 
    Green, 
    Blue
};
 
enum Color {
    Red = 1, 
    Green = 2, 
    Blue = 3
};

enum ColorString {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
};

console.log(ColorString.Red);


// Objects 
// An object is a collection of properties.
// The properties of an object can be of any type.
// The properties of an object can be accessed using dot notation.
// The properties of an object can be accessed using bracket notation.

type User = {
   id: number,
   name: string,
}

const user: User = {
    id: 1,
    name: "Jono"
};

const person1: {
    name: string,
    age: number,
    isMarried: boolean
    } = {
    name: "Jono",
    age: 5,
    isMarried: true
};

console.log(person1);

// Type Assertion
// Type assertion is a way to tell the compiler "trust me, I know what I'm doing."
// Type assertion explicitly tellings the complier that we want to treat an entity as a different type.

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let cid: any = 1;
// let customerId = <number>cid;
let customerId1 = cid as number;

console.log(strLength);

// Functions
// A function is a reusable block of code that can accept parameters and return a value.
// A function can be defined using the function keyword.
// A function can be defined using the arrow notation.
// A function can be defined using the function declaration syntax.
// A function can be defined using the function expression syntax.

function addNum(a: number, b: number): number {
    return a + b;
}

console.log('Sum is:', addNum(1, 2));


// Void type 
// The void type is the absence of having a value.
// The void type is often used in the return statement.

function log( message: string | number ): void {
    console.log(message);
}
log("Hello void");

// Interfaces 
// An interface is a blueprint of an object.
// An interface defines the properties and methods of an object.
// An interface can be defined using the interface keyword.
// An interface can be defined using the interface declaration syntax.
// An interface can be defined using the interface expression syntax.

interface UserInterface {
    readonly id: number
    id1?: number
    name: string
    isMarried: boolean
    age?: number
}

// age is optional we will not get an error if we do not pass it 
const user1: UserInterface = {
    id: 1,
    name: "Jono Interface",
    isMarried: true,
};

user1.age = 5

// cannot assign a value to a readonly property you get an error eg below 
// user1.id = 2

console.log('Your age is: ', user1.age);
console.log(user1.id);
console.log(user1);

type Point = number | string;
const point: Point = 1;

console.log(point);

// We can also use interfaces in a function

interface MathFuncInterface {
    (a: number, b: number): number;
}
 const add: MathFuncInterface = (a: number, b: number): number => a + b;
 const sub: MathFuncInterface = (a: number, b: number) => a - b;

console.log('Your Result', add(1, 2));
console.log('Your Result', sub(1, 2));

interface  PersonInterface {
    id: number
    name: string
    register(): string 
};

// Classes
// A class is a blueprint of an object.
// A class defines the properties and methods of an object. 
// A class can be defined using the class keyword.
// A class can be defined using the class declaration syntax.
// A class can be defined using the class expression syntax.


class UserClass  implements PersonInterface {

    // access modifiers
    // public - can be accessed from anywhere
    // private - can only be accessed from within the class
    // protected - can be accessed from within the class and from within the child classes or extended classes
    // public id: number;
    // private id: number;
    // protected id: number;
    id: number;
    name: string;
    isMarried: boolean;

    constructor(id: number, name: string, isMarried: boolean) {
        // this refers to the current instance of the class we in
        this.id = id;
        this.name = name;
        this.isMarried = isMarried;

        console.log(123);
        
    }

    register() {
        return `${this.name} is now registered`;
        // console.log(`${this.name} is registered`);
    }
    // printUser is a method of the class
    printUser() {
        console.log(this.id, this.name, this.isMarried);
    }
}


const jono = new UserClass( 1, "Jono", true);

console.log(jono.register())

jono.id = 1;
jono.name = "Jono";

const user2 = new UserClass(2, "Jono Class", true);
user2.printUser();
jono.printUser();

class Employe extends UserClass {
    position: string;

    constructor(id: number, name: string, isMarried: boolean, position: string) {
        super(id, name, isMarried);
        this.position = position;
    }
}

const emp = new Employe(3, "Jono extended Class", true, "Software Engineer");

console.log(emp.register());  // will print the register method of the parent class -> return `${this.name} is now registered`;
console.log(emp.name);

// Generics
// Generics are a way to create reusable functions and classes that can work with any type.
// Generics are defined using the generic keyword.
// Generics can be defined using the generic type syntax.
// Generics can be defined using the generic class syntax.
// Generics can be defined using the generic interface syntax.

// function addGeneric<T>(a: T, b: T): T {
//     return a + b;
// }

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["Jono", "Alli", "Mae"]);

numArray.push(1)
console.log(numArray);