/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var assert = require('assert');
var should = require('should');

describe('division', function () {
    it('divide two numbers', function () {
        // with two numbers, the first number on stack is x, second number is y, and divide is x/y
        var calc = new Calculator();
        calc.enter(8);
        calc.enter(2);
        calc.perform("/").should.equal(4);
    });
    it('divide one number is 0', function () {
        // with two numbers, the first number on stack is x, second number is y, and divide is x/y
        // with one number, x=0, so 0/y

        var calc = new Calculator();
        calc.enter(2);
        calc.perform("/").should.equal(0);
    });
    it('divide with no numbers on stack is error', function () {
        // this is 0/0 so this is an error
        var calc = new Calculator();
        assert.throws(
            function () {
                calc.perform('/');
            },
            Error
        );
    });
    it('divide by 0 is error', function () {
        // this is 2/0 so this is an error
        var calc = new Calculator();
        calc.enter(2);
        calc.enter(0);
        assert.throws(
            function () {
                calc.perform('/');
            },
            Error
        );
    });
    it('divide by three numbers', function () {
        // this is 2/0 so this is an error
        var calc = new Calculator();
        calc.enter(16);
        calc.enter(8);
        calc.enter(2);
        calc.perform("/");
        calc.perform("/").should.equal(4);
    });
    it('divide with non integer result', function () {
        // this is 2/0 so this is an error
        var calc = new Calculator();
        calc.enter(6);
        calc.enter(4);
        calc.perform("/").should.equal(1.5);
    });
    it('divide with non integer operands', function () {
        var calc = new Calculator();
        calc.enter(4.8);
        calc.enter(2.4);
        calc.perform("/").should.equal(2);
    });
});
