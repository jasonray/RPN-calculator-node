/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('squareroot', function () {
    it('√ of 0 is 0', function () {
        let calc = new Calculator();
        calc.enter(0)
        calc.perform('√').should.equal(0);
    });
    it('√ of 1 is 1', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform('√').should.equal(1);
    });
    it('squareroot of 1 is 1', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform('squareroot').should.equal(1);
    });
    it('√ of 4 is 2', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform('√').should.equal(2);
    });
    it('√ of 2 is approx 1.41', function () {
        let calc = new Calculator();
        calc.enter(2);
        const result=Math.round(calc.perform('√')*100)/100;
        result.should.equal(1.41);
    });
    it('√ of -1 is NaN', function () {
        let calc = new Calculator();
        calc.enter(-1);
        calc.perform('√').should.be.NaN();
    });
});
