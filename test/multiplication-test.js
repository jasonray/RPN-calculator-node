/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var should = require('should');

describe('multiplication', function () {
    it('multiply empty stack is 0', function () {
        var calc = new Calculator();
        calc.perform("*").should.equal(0);
    });
    it('multiply two numbers returns product', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform("*").should.equal(20);
    });
    it('multiply one number returns 0', function () {
        var calc = new Calculator();
        calc.enter(4);
        calc.perform("*").should.equal(0);
    });
    it('multiply three numbers', function () {
        var calc = new Calculator();
        calc.enter(4);
        calc.enter(2);
        calc.enter(3);
        calc.perform("*");
        calc.perform("*").should.equal(24);
    });
    it('multiply negative numbers', function () {
        var calc = new Calculator();
        calc.enter(-3);
        calc.enter(-2);
        calc.perform("*").should.equal(6);
    });
    it('use "x" operator', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform("x").should.equal(20);
    });
    it('use "X" operator', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        calc.perform("X").should.equal(20);
    });
    it('multiply non integer numbers', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(4);
        calc.perform("X").should.equal(6);
    });
    it('multiply with non integer result', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3);
        calc.perform("X").should.equal(4.5);
    });
});
