/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('addition', function () {
    it('adding no numbers returns 0', function () {
        var calc = new Calculator();
        assert.equal(0,calc.perform("+"))
    });
    it('adding two numbers returns the sum', function () {
        var calc = new Calculator();
        calc.enter(30);
        calc.enter(4);
        assert.equal(34,calc.perform("+"))
    });
    it('adding one numbers returns the number', function () {
        var calc = new Calculator();
        calc.enter(4);
        assert.equal(4,calc.perform("+"))
    });
});

module.exports.addOneNumber = function(test) {
    var calc = new Calculator();
    calc.enter(4);
    var result = calc.perform("+");
    test.equals(4, result);
    test.done();
};

module.exports.addThreeNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(2);
    calc.enter(3);
    calc.perform("+");
    var result = calc.perform("+");
    test.equals(6, result);
    test.done();
};

module.exports.addNegativeNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(-1);
    calc.enter(-2);
    var result = calc.perform("+");
    test.equals(-3, result);
    test.done();
};

module.exports.addDecimals = function(test) {
    var calc = new Calculator();
    calc.enter(1.5);
    calc.enter(2.3);
    var result = calc.perform("+");
    test.equals(3.8, result);
    test.done();
};