/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('average', function () {
    it('average on empty stack is 0', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("AVE"),0);
    });
    it('average of 0 is 0', function () {
        var calc = new Calculator();
        calc.enter(0);
        assert.equal(calc.perform("AVE"),0);
    });
    it('average of x is x', function () {
        var calc = new Calculator();
        calc.enter(5);
        assert.equal(calc.perform("AVE"),5);
    });
    it('average of x is x (with negative numbers)', function () {
        var calc = new Calculator();
        calc.enter(-5);
        assert.equal(calc.perform("AVE"),-5);
    });
    it('average two numbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        assert.equal(calc.perform("AVE"),2);
    });
});


module.exports.averageEmpty = function(test) {
    var calc = new Calculator();
    test.equals(0, calc.perform("AVE"));
    test.done();
};

module.exports.averageOneNumber = function(test) {
    var calc = new Calculator();
    calc.enter(5);
    test.equals(5, calc.perform("AVE"));
    test.done();
};

module.exports.averageTwoNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(5);
    calc.enter(15);
    test.equals(10, calc.perform("AVE"));
    test.done();
};

module.exports.averageFiveNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(2);
    calc.enter(3);
    calc.enter(4);
    calc.enter(5);
    test.equals(3, calc.perform("AVE"));
    test.done();
};

module.exports.averageUsingAverageKeyworkd = function(test) {
    var calc = new Calculator();
    calc.enter(2);
    calc.enter(4);
    test.equals(3, calc.perform("AVERAGE"));
    test.done();
};

module.exports.averageWithNegativeNumbers = function(test) {
    var calc = new Calculator();
    calc.enter(2);
    calc.enter(-4);
    test.equals(-1, calc.perform("AVE"));
    test.done();
};

module.exports.ensureOperatorNotCaseSensitive = function(test) {
    var calc = new Calculator();
    calc.enter(2);
    calc.enter(4);
    test.equals(3, calc.perform("ave"));
    test.done();
};

module.exports.ensureEmptyAverageAffectsStack = function(test) {
    //if empty average does not put 0 onto stack
    //then average with 2 would be 2
    //if empty average does put 0 onto stack
    //then average with 2 would be 1 (0,1)

    var calc = new Calculator();
    calc.perform("ave");
    calc.enter(2);
    test.equals(1, calc.perform("ave"));
    test.done();
};

module.exports.resultIsNonInteger = function(test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(4);
    test.equals(2.5, calc.perform("AVE"));
    test.done();
};

module.exports.inputIsNonInteger = function(test) {
    var calc = new Calculator();
    calc.enter(1.5);
    calc.enter(3.5);
    test.equals(2.5, calc.perform("AVE"));
    test.done();
};