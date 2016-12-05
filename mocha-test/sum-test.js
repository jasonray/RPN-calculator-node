/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('sum', function () {
    it('sumNoNumbers', function () {
        var calc = new Calculator();
        assert.equal(0, calc.perform("sum"));
    });
    it('sumOneNumber', function () {
        var calc = new Calculator();
        calc.enter(5);
        assert.equal(5, calc.perform("sum"));
    });
    it('sumTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        assert.equal(8, calc.perform("sum"));
    });
    it('sumThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        assert.equal(9, calc.perform("sum"));
    });
    it('subtractThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(11);
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        assert.equal(20, calc.perform("sum"));
    });
    it('sumNonIntegers', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3.5);
        calc.enter(2.5);
        assert.equal(7.5, calc.perform("sum"));
    });
});
