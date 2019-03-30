/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('subtraction', function () {
    it('subtractNoNumbers', function () {
        const calc = new Calculator();
        calc.perform('-').should.equal(0);
    });
    it('subtractOneNumber', function () {
        const calc = new Calculator();
        calc.enter(1);
        calc.perform('-').should.equal(-1);
    });
    it('subtractOneNumberTwice', function () {
        const calc = new Calculator();
        calc.enter(1);
        calc.perform('-');
        calc.perform('-').should.equal(1);
    });
    it('subtractTwoNumbers', function () {
        const calc = new Calculator();
        calc.enter(10);
        calc.enter(3);
        calc.perform('-').should.equal(7);
    });
    it('subtractThreeNumbers', function () {
        const calc = new Calculator();
        calc.enter(21);
        calc.enter(13);
        calc.perform('-');
        calc.enter(5);
        calc.perform('-').should.equal(3);
    });
    it('subtractWithNonInteger', function () {
        const calc = new Calculator();
        calc.enter(1.5);
        calc.enter(0.3);
        calc.perform('-').should.equal(1.2);
    });
});
