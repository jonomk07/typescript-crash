var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
var company = "Jono";
var isPublished = true;
var x = "Hello";
var ids = [1, 2, 3];
var arr = [1, "Jono", true];
// Tuple 
// A tuple is a TypeScript type that works like an array with some special considerations: 
// The number of elements of the array is fixed.
// The type of the elements is known. The type of the elements of the array need not be the same.
// The elements of the array can be accessed using index numbers.
var person = ["Jono", 5, true];
// Tuple Array
var people;
people = [
    ["Jono", 5, true],
    ["Alli", 5, true]
];
console.log(people);
// Union Types
// A union type is a type that can be one of several other types.
// Union type is  a variable  that can hold multiple types
var unionType = "Jono";
console.log(unionType);
// Enum or Enumerated type
// An enum is a way of giving more friendly names to sets of numeric values.
// The enum keyword defines an enum-like type.
// Enum allow us to define a set of named constants either numeric or string.
// Enum values are zero-based and the first value is 0.
var ColorDefaults;
(function (ColorDefaults) {
    ColorDefaults[ColorDefaults["Red"] = 0] = "Red";
    ColorDefaults[ColorDefaults["Green"] = 1] = "Green";
    ColorDefaults[ColorDefaults["Blue"] = 2] = "Blue";
})(ColorDefaults || (ColorDefaults = {}));
;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var ColorString;
(function (ColorString) {
    ColorString["Red"] = "Red";
    ColorString["Green"] = "Green";
    ColorString["Blue"] = "Blue";
})(ColorString || (ColorString = {}));
;
console.log(ColorString.Red);
var user = {
    id: 1,
    name: "Jono"
};
var person1 = {
    name: "Jono",
    age: 5,
    isMarried: true
};
console.log(person1);
// Type Assertion
// Type assertion is a way to tell the compiler "trust me, I know what I'm doing."
// Type assertion explicitly tellings the complier that we want to treat an entity as a different type.
var someValue = "this is a string";
var strLength = someValue.length;
var cid = 1;
// let customerId = <number>cid;
var customerId1 = cid;
console.log(strLength);
// Functions
// A function is a reusable block of code that can accept parameters and return a value.
// A function can be defined using the function keyword.
// A function can be defined using the arrow notation.
// A function can be defined using the function declaration syntax.
// A function can be defined using the function expression syntax.
function addNum(a, b) {
    return a + b;
}
console.log('Sum is:', addNum(1, 2));
// Void type 
// The void type is the absence of having a value.
// The void type is often used in the return statement.
function log(message) {
    console.log(message);
}
log("Hello void");
// age is optional we will not get an error if we do not pass it 
var user1 = {
    id: 1,
    name: "Jono Interface",
    isMarried: true
};
user1.age = 5;
// cannot assign a value to a readonly property you get an error eg below 
// user1.id = 2
console.log('Your age is: ', user1.age);
console.log(user1.id);
console.log(user1);
var point = 1;
console.log(point);
var add = function (a, b) { return a + b; };
var sub = function (a, b) { return a - b; };
console.log('Your Result', add(1, 2));
console.log('Your Result', sub(1, 2));
;
// Classes
// A class is a blueprint of an object.
// A class defines the properties and methods of an object. 
// A class can be defined using the class keyword.
// A class can be defined using the class declaration syntax.
// A class can be defined using the class expression syntax.
var UserClass = /** @class */ (function () {
    function UserClass(id, name, isMarried) {
        // this refers to the current instance of the class we in
        this.id = id;
        this.name = name;
        this.isMarried = isMarried;
        console.log(123);
    }
    UserClass.prototype.register = function () {
        return "".concat(this.name, " is now registered");
        // console.log(`${this.name} is registered`);
    };
    // printUser is a method of the class
    UserClass.prototype.printUser = function () {
        console.log(this.id, this.name, this.isMarried);
    };
    return UserClass;
}());
var jono = new UserClass(1, "Jono", true);
console.log(jono.register());
jono.id = 1;
jono.name = "Jono";
var user2 = new UserClass(2, "Jono Class", true);
user2.printUser();
jono.printUser();
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(id, name, isMarried, position) {
        var _this = _super.call(this, id, name, isMarried) || this;
        _this.position = position;
        return _this;
    }
    return Employe;
}(UserClass));
var emp = new Employe(3, "Jono extended Class", true, "Software Engineer");
console.log(emp.register()); // will print the register method of the parent class -> return `${this.name} is now registered`;
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
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(["Jono", "Alli", "Mae"]);
numArray.push(1);
console.log(numArray);
