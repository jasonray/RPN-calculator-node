/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.empty = function(test) {
    var calc = new Calculator();
    test.equals(0, calc.perform("||"));
    test.done();
};

module.exports.zero = function(test) {
    var calc = new Calculator();
    calc.enter(0);
    test.equals(0, calc.perform("||"));
    test.done();
};

module.exports.one = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    test.equals(1, calc.perform("||"));
    test.done();
};

module.exports.negOne = function(test) {
    var calc = new Calculator();
    calc.enter(-1);
    test.equals(1, calc.perform("||"));
    test.done();
};

module.exports.negTen = function(test) {
    var calc = new Calculator();
    calc.enter(-10);
    test.equals(10, calc.perform("||"));
    test.done();
};

module.exports.ensureResultIsOnStack = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(-5);
    calc.perform("||")
    test.equals(6, calc.perform("+"));
    test.done();
};

module.exports.decimal = function(test) {
    var calc = new Calculator();
    calc.enter(-1.5);
    test.equals(1.5, calc.perform("||"));
    test.done();
};