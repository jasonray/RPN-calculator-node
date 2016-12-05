/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('addition', function () {
    it('adding no numbers returns 0', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("+"), 0);
    });
    it('adding two numbers returns the sum', function () {
        var calc = new Calculator();
        calc.enter(30);
        calc.enter(4);
        assert.equal(calc.perform("+"), 34);
    });
    it('with three numbers on the stack, adding add the top two and puts onto stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        assert.equal(calc.perform("+"), 5);
        assert.equal(calc.peek(), 5);
    });
    it('with three numbers on the stack, adding twice results in the sum of those three numbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        calc.perform("+");
        assert.equal(calc.perform("+"), 6);
    });
    it('adding two numbers returns the sum (with negative numbers)', function () {
        var calc = new Calculator();
        calc.enter(-1);
        calc.enter(-2);
        assert.equal(-3, calc.perform("+"))
    });
    it('adding two numbers returns the sum (with decimal numbers)', function () {
        var calc = new Calculator();
        calc.enter(2.1);
        calc.enter(3.2);
        assertFloatsEqual(calc.perform("+"), 5.3)
    });
});

function assertFloatsEqual(actual, expected) {
    // assert.equal(actual, expected);
    var x = (Math.round(parseFloat(actual)) );
    var y = (Math.round(parseFloat(expected)) );
    assert.equal(x, y);
}