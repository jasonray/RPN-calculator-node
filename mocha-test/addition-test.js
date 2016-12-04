/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('addition', function () {
    it('adding no numbers returns 0', function () {
        var calc = new Calculator();
        assert.equal(0, calc.perform("+"))
    });
    it('adding two numbers returns the sum', function () {
        var calc = new Calculator();
        calc.enter(30);
        calc.enter(4);
        assert.equal(34, calc.perform("+"))
    });
    it('with three numbers on the stack, adding add the top two and puts onto stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        assert.equal(5, calc.perform("+"));
        assert.equal(5, calc.peek());
    });
    it('with three numbers on the stack, adding twice results in the sum of those three numbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        calc.perform("+");
        assert.equal(6, calc.perform("+"));
    });
    it('adding two numbers returns the sum (with negative numbers)', function () {
        var calc = new Calculator();
        calc.enter(-1);
        calc.enter(-2);
        assert.equal(-3, calc.perform("+"))
    });
    // it('adding two numbers returns the sum (with decimal numbers)', function () {
    //     var calc = new Calculator();
    //     calc.enter(2.1);
    //     calc.enter(3.2);
    //     assert.equal(5.3, calc.perform("+"))
    // });
});
