/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.enterStringReturnsValue = function (test) {
    var calc = new Calculator();
    test.equals(1, calc.enter("1"));
    test.done();
};

module.exports.enterNumberReturnsValue = function (test) {
    var calc = new Calculator();
    test.equals(1, calc.enter(1));
    test.done();
};

module.exports.enterNonInteger = function (test) {
    var calc = new Calculator();
    test.equals(1.5, calc.enter("1.5"));
    test.done();
};