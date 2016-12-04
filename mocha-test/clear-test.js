/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('clear', function () {
    it('clear on a empty stack does not throw error', function () {
        var calc = new Calculator();
        calc.perform("C");
    });
    it('clear on a single item stack clear stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        assert.equal(calc.peek(), 1);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('clear on a two item stack clear stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        assert.equal(calc.peek(), 2);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "C"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "c"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("c");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "clear"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("c");
        assert.equal(calc.peek(), 0);
    });
});

module.exports.ensureSupportForWordClear = function (test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.perform("clear");
    test.equals(0, calc.perform("+"));
    test.done();
};

module.exports.ensureSupportForLowerCaseOperator = function (test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.perform("c");
    test.equals(0, calc.perform("+"));
    test.done();
};

module.exports.clearOnList = function (test) {
    var calc = new Calculator();
    calc.enter(1);
    calc.enter(1);
    calc.enter(1);
    calc.enter(1);
    calc.enter(1);
    calc.perform("C");
    test.equals(0, calc.perform("+"));
    test.done();
};