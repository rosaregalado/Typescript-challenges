"use strict";
// You are making a mapping application. 
exports.__esModule = true;
// Write an enum that defines the directions: 
// North, South, East, West
var Direction;
(function (Direction) {
})(Direction || (Direction = {}));
// Should having a heading property type Direction
var MapPosition = /** @class */ (function () {
    function MapPosition() {
    }
    // takes a new Direction as an argument
    MapPosition.prototype.move = function (newDirection) {
        // set the direction on your property 
        // Print the new direction
    };
    // Should return a string and print:
    // "you are heading <direction>"
    MapPosition.prototype.describe = function () {
        return '';
    };
    return MapPosition;
}());
var location = new MapPosition();
console.log(location.describe());
// Might output:
// "You are heading north"
location.move( /* add a direction here */);
exports["default"] = MapPosition;
