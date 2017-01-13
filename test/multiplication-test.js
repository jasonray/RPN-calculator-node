/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var assert = require('assert');

describe('multiplication', function () {
    it('multiply empty stack is 0', function () {
        var calc = new Calculator();
        var result = calc.perform("*");
        assert.equal(result, 0);
    });
    it('multiply two numbers returns product', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        var result = calc.perform("*");
        assert.equal(result, 20);
    });
    it('multiply one number returns 0', function () {
        var calc = new Calculator();
        calc.enter(4);
        var result = calc.perform("*");
        assert.equal(result, 0);
    });
    it('multiply three numbers', function () {
        var calc = new Calculator();
        calc.enter(4);
        calc.enter(2);
        calc.enter(3);
        calc.perform("*");
        var result = calc.perform("*");
        assert.equal(result, 24);
    });
    it('multiply negative numbers', function () {
        var calc = new Calculator();
        calc.enter(-3);
        calc.enter(-2);
        var result = calc.perform("*");
        assert.equal(result, 6);
    });
    it('use "x" operator', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        var result = calc.perform("x");
        assert.equal(result, 20);
    });
    it('use "X" operator', function () {
        var calc = new Calculator();
        calc.enter(5);
        calc.enter(4);
        var result = calc.perform("X");
        assert.equal(result, 20);
    });
    it('multiply non integer numbers', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(4);
        var result = calc.perform("X");
        assert.equal(result, 6);
    });
    it('multiply with non integer result', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3);
        var result = calc.perform("X");
        assert.equal(result, 4.5);
    });
});
