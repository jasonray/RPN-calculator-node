/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('reverse', function () {
    it('reverseNoNumbers', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("reverse"), 0);
        assert.equal(0, calc.numbers.pop());
    });
    it('reverseOneNumber', function () {
        var calc = new Calculator();
        calc.enter(1);
        assert.equal(calc.perform("reverse"), 1);
        assert.equal(calc.numbers.pop(), 1);
        assert.equal(calc.numbers.pop(), 0);
    });
    it('reverseTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        assert.equal(calc.perform("reverse"), 1);
        assert.equal(calc.numbers.pop(), 1);
        assert.equal(calc.numbers.pop(), 2);
        assert.equal(calc.numbers.pop(), 0);
    });
    it('reverseMultipleNumbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        calc.enter(4);
        calc.enter(5);
        calc.enter(6);
        calc.enter(7);
        calc.enter(8);
        calc.enter(9);
        calc.enter(10);
        var result = calc.perform("reverse");
        assert.equal(1, result);
        assert.equal(calc.numbers.pop(), 1);
        assert.equal(calc.numbers.pop(), 2);
        assert.equal(calc.numbers.pop(), 3);
        assert.equal(calc.numbers.pop(), 4);
        assert.equal(calc.numbers.pop(), 5);
        assert.equal(calc.numbers.pop(), 6);
        assert.equal(calc.numbers.pop(), 7);
        assert.equal(calc.numbers.pop(), 8);
        assert.equal(calc.numbers.pop(), 9);
        assert.equal(calc.numbers.pop(), 10);
        assert.equal(calc.numbers.pop(), 0);
    });
});
