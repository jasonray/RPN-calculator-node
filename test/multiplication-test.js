/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('multiplication', function () {
    it('multiply empty stack is 0', function () {
        let calc = new Calculator();
        calc.perform('*').should.equal(0);
    });
    it('multiply two numbers returns product', function () {
        let calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform('*').should.equal(20);
    });
    it('multiply one number returns 0', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform('*').should.equal(0);
    });
    it('multiply three numbers', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.enter(2);
        calc.enter(3);
        calc.perform('*');
        calc.perform('*').should.equal(24);
    });
    it('multiply negative numbers', function () {
        let calc = new Calculator();
        calc.enter(-3);
        calc.enter(-2);
        calc.perform('*').should.equal(6);
    });
    it('use "x" operator', function () {
        let calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform("x").should.equal(20);
    });
    it('use "X" operator', function () {
        let calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform("X").should.equal(20);
    });
    it('multiply non integer numbers', function () {
        let calc = new Calculator();
        calc.enter(1.5);
        calc.enter(4);
        calc.perform("X").should.equal(6);
    });
    it('multiply with non integer result', function () {
        let calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3);
        calc.perform("X").should.equal(4.5);
    });
});
