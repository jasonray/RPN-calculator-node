/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var should = require('should');

describe('sum', function () {
    it('sumNoNumbers', function () {
        var calc = new Calculator();
        calc.perform("sum").should.equal(0);
    });
    it('sumOneNumber', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.perform("sum").should.equal(5);
    });
    it('sumTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.perform("sum").should.equal(8);
    });
    it('sumThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        calc.perform("sum").should.equal(9);
    });
    it('subtractThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(11);
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        calc.perform("sum").should.equal(20);
    });
    it('sumNonIntegers', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3.5);
        calc.enter(2.5);
        calc.perform("sum").should.equal(7.5);
    });
});
