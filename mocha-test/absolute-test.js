/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('absolute', function () {
    it('|| should be recognized by calculator', function () {
        var calc = new Calculator();
        assert.equal(0, calc.perform("||"));
    });
    it('description here', function () {
        var calc = new Calculator();
        // do stuff
    });
    it('absolute of 0 is 0', function () {
        var calc = new Calculator();
        calc.enter(0);
        assert.equal(0, calc.perform("||"));
    });
    it('absolute of positive number x is x (1)', function () {
        var calc = new Calculator();
        calc.enter(1);
        assert.equal(1, calc.perform("||"));
    });
    it('absolute of negative number x is positive x (-1)', function () {
        var calc = new Calculator();
        calc.enter(-1);
        assert.equal(1, calc.perform("||"));
    });
    it('absolute of positive number x is x (10)', function () {
        var calc = new Calculator();
        calc.enter(10);
        assert.equal(10, calc.perform("||"));
    });
    it('absolute of negative number x is positive x (-10)', function () {
        var calc = new Calculator();
        calc.enter(-10);
        assert.equal(10, calc.perform("||"));
    });
    it('ensure that operation works on the most recent item in stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        assert.equal(2, calc.perform("||"));
    });
    it('ensure that result is put back onto stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        assert.equal(2, calc.perform("||"));
        assert.equal(2, calc.perform("||"));
    });
});

module.exports.ensureResultIsOnStack = function (test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(-5);
    calc.perform("||")
    test.equals(6, calc.perform("+"));
    test.done();
};

module.exports.decimal = function (test) {
    var calc = new Calculator();
    calc.enter(-1.5);
    test.equals(1.5, calc.perform("||"));
    test.done();
};