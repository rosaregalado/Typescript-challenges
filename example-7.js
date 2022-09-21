"use strict";
// Use the enum type to define the suit for 
// a playing card. 
// Below define the ace. It should have a suit
// and a value.
exports.__esModule = true;
exports.Suit = void 0;
// Check the docs and define your enum below
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
var Suit;
(function (Suit) {
    Suit[Suit["hearts"] = 0] = "hearts";
    Suit[Suit["clubs"] = 1] = "clubs";
    Suit[Suit["diamonds"] = 2] = "diamonds";
    Suit[Suit["spades"] = 3] = "spades";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var ace = {
    suit: Suit.spades,
    value: 1
};
