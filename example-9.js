"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
exports.__esModule = true;
exports.rampage = void 0;
// Import Kaiju and KaijuType from example-8.js
// Fix the rampage function so it makes use of the KaijuType enum
var example_8_1 = require("./example-8");
function rampage(name, type, power, city) {
    var action;
    switch (type) {
        case example_8_1.KaijuType.ape:
            action = 'smash';
            break;
        case example_8_1.KaijuType.lizard:
            action = 'burn';
            break;
        case example_8_1.KaijuType.flying:
            action = 'flap';
            break;
    }
    var result = "".concat(name, " ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
exports.rampage = rampage;
// Define two more monsters
console.log(rampage('Gojira', example_8_1.KaijuType.lizard, 90, 'San Francisco'));
console.log(rampage('Frankenstein', example_8_1.KaijuType.ape, 60, 'New York'));
console.log(rampage('Unicorn', example_8_1.KaijuType.flying, 30, 'London'));
