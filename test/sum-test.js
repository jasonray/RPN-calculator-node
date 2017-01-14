/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('sum', function () {
    it('sumNoNumbers', function () {
        const calc = new Calculator();
        calc.perform("sum").should.equal(0);
    });
    it('sumOneNumber', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.perform("sum").should.equal(5);
    });
    it('sumTwoNumbers', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.perform("sum").should.equal(8);
    });
    it('sumThreeNumbers', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        calc.perform("sum").should.equal(9);
    });
    it('subtractThreeNumbers', function () {
        const calc = new Calculator();
        calc.enter(11);
        calc.enter(5);
        calc.enter(3);
        calc.enter(1);
        calc.perform("sum").should.equal(20);
    });
    it('sumNonIntegers', function () {
        const calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3.5);
        calc.enter(2.5);
        calc.perform("sum").should.equal(7.5);
    });
});
