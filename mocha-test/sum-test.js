/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('sum', function () {
    it('sumNoNumbers', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("sum"), 0);
    });
    it('sumOneNumber', function () {
        var calc = new Calculator();
        calc.enter(5);
        assert.equal(calc.perform("sum"), 5);
    });
    it('sumTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        assert.equal(calc.perform("sum"), 8);
    });
    it('sumThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        assert.equal(calc.perform("sum"), 9);
    });
    it('subtractThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(11);
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        assert.equal(calc.perform("sum"), 20);
    });
    it('sumNonIntegers', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3.5);
        calc.enter(2.5);
        assert.equal(calc.perform("sum"), 7.5);
    });
});
