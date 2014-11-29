/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.reverseNoNumbers = function(test) {
    var calc = new Calculator();
    var result = calc.perform("reverse");
    test.equals(0, result);
    test.equals(0, calc.numbers.pop());
    test.done();
};

module.exports.reverseOneNumber = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    var result = calc.perform("reverse");
    test.equals(1, result);
    test.equals(1, calc.numbers.pop());
    test.equals(0, calc.numbers.pop());
    test.done();
};

module.exports.reverseTwoNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(2);
    var result = calc.perform("reverse");
    test.equals(1, result);
    test.equals(1, calc.numbers.pop());
    test.equals(2, calc.numbers.pop());
    test.equals(0, calc.numbers.pop());
    test.done();
};

// module.exports.reverseMultipleNumbers = function(test) {
//     var calc = new Calculator();
//     calc.enter(1);
//     calc.enter(2);
//     calc.enter(3);
//     calc.enter(4);
//     calc.enter(5);
//     calc.enter(6);
//     calc.enter(7);
//     calc.enter(8);
//     calc.enter(9);
//     calc.enter(10);
//     var result = calc.perform("reverse");
//     test.equals(10, result);
//     test.equals(10, calc.numbers.pop());
//     test.equals(9, calc.numbers.pop());
//     test.equals(8, calc.numbers.pop());
//     test.equals(7, calc.numbers.pop());
//     test.equals(6, calc.numbers.pop());
//     test.equals(5, calc.numbers.pop());
//     test.equals(4, calc.numbers.pop());
//     test.equals(3, calc.numbers.pop());
//     test.equals(2, calc.numbers.pop());
//     test.equals(1, calc.numbers.pop());
//     test.equals(0, calc.numbers.pop());
//     test.done();
// };