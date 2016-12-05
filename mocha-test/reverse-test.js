/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('reverse', function () {
    it('reverseNoNumbers', function () {
        var calc = new Calculator();
        var result = calc.perform("reverse");
        assert.equal(result, 0);
        assert.equal(0, calc.numbers.pop());
    });
    it('reverseOneNumber', function () {
        var calc = new Calculator();
        calc.enter(1);
        var result = calc.perform("reverse");
        assert.equal(1, result);
        assert.equal(1, calc.numbers.pop());
        assert.equal(0, calc.numbers.pop());
    });
    it('reverseTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        var result = calc.perform("reverse");
        assert.equal(1, result);
        assert.equal(1, calc.numbers.pop());
        assert.equal(2, calc.numbers.pop());
        assert.equal(0, calc.numbers.pop());
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
        assert.equal(1, calc.numbers.pop());
        assert.equal(2, calc.numbers.pop());
        assert.equal(3, calc.numbers.pop());
        assert.equal(4, calc.numbers.pop());
        assert.equal(5, calc.numbers.pop());
        assert.equal(6, calc.numbers.pop());
        assert.equal(7, calc.numbers.pop());
        assert.equal(8, calc.numbers.pop());
        assert.equal(9, calc.numbers.pop());
        assert.equal(10, calc.numbers.pop());
        assert.equal(0, calc.numbers.pop());
    });
});
