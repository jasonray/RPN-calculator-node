/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('fibonacci', function () {
    it('fib on empty is 0', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("fib"), 0);
    });
    it('fib on 1 is 1', function () {
        var calc = new Calculator();
        calc.enter(1);
        assert.equal(calc.perform("fib"), 1);
    });
    it('fib on 2 is 1', function () {
        var calc = new Calculator();
        calc.enter(2);
        assert.equal(calc.perform("fib"), 1);
    });
    it('fib on 3 is 2', function () {
        var calc = new Calculator();
        calc.enter(3);
        assert.equal(calc.perform("fib"), 2);
    });
    it('fib on 4 is 3', function () {
        var calc = new Calculator();
        calc.enter(4);
        assert.equal(calc.perform("fib"), 3);
    });
    it('fib on 5 is 5', function () {
        var calc = new Calculator();
        calc.enter(5);
        assert.equal(calc.perform("fib"), 5);
    });
    it('fib on 6 is 8', function () {
        var calc = new Calculator();
        calc.enter(6);
        assert.equal(calc.perform("fib"), 8);
    });
    it('fib on 7 is 13', function () {
        var calc = new Calculator();
        calc.enter(7);
        assert.equal(calc.perform("fib"), 13);
    });
    it('fib on 8 is 21', function () {
        var calc = new Calculator();
        calc.enter(8);
        assert.equal(calc.perform("fib"), 21);
    });
    it('fib on 30 is 832040', function () {
        var calc = new Calculator();
        calc.enter(30);
        assert.equal(calc.perform("fib"), 832040);
    });
    it('fib on 40 is 102334155', function () {
        var calc = new Calculator();
        calc.enter(40);
        assert.equal(calc.perform("fib"), 102334155);
    });
    it('fib on non integer is not defined', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        assert.throws(
            function () {
                calc.perform('fib');
            },
            Error
        );
    });
});
