/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var assert = require('assert');

describe('subtraction', function () {
    it('subtractNoNumbers', function () {
        var calc = new Calculator();
        var result = calc.perform("-");
        assert.equal(0, result);
    });
    it('subtractOneNumber', function () {
        var calc = new Calculator();
        calc.enter(1);
        var result = calc.perform("-");
        assert.equal(-1, result);
    });
    it('subtractOneNumberTwice', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("-");
        var result = calc.perform("-");
        assert.equal(1, result);
    });
    it('subtractTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(10);
        calc.enter(3);
        var result = calc.perform("-");
        assert.equal(7, result);
    });
    it('subtractThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(21);
        calc.enter(13);
        calc.perform("-");
        calc.enter(5);
        var result = calc.perform("-");
        assert.equal(3, result);
    });
    it('subtractWithNonInteger', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(0.3);
        var result = calc.perform("-");
        assert.equal(1.2, result);
    });
});
