"use strict";
// Here I have defined a class with type script. 
// Take a look at how the properties are typed. 
exports.__esModule = true;
exports.Student = exports.Course = void 0;
// https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content
// Complete the Course class below. 
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return "".concat(this.name, " is ").concat(this.age);
    };
    return Person;
}());
var joe = new Person('Joe', 33);
// Define a Course. A Course a title: string and a units: number
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());
exports.Course = Course;
// Define a Student class. Student extends Person. A Student 
// has an array of Courses and a cohort which is: junior or senior
// Add enroll method that takes a Course as parameter and adds 
// this to the course array
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
exports.Student = Student;
exports["default"] = Person;
