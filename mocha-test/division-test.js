/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('division', function () {
    it('divide two numbers', function () {
        // with two numbers, the first number on stack is x, second number is y, and divide is x/y
        var calc = new Calculator();
        calc.enter(8);
        calc.enter(2);
        var result = calc.perform("/");
        assert.equal(4, result);
    });
    it('divide one number is 0', function () {
        // with two numbers, the first number on stack is x, second number is y, and divide is x/y
        // with one number, x=0, so 0/y

        var calc = new Calculator();
        calc.enter(2);
        var result = calc.perform("/");
        assert.equal(0, result);
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
        var result = calc.perform("/");
        assert.equal(4, result);
    });
    it('non integer result', function () {
        // this is 2/0 so this is an error
        var calc = new Calculator();
        calc.enter(6);
        calc.enter(4);
        var result = calc.perform("/");
        assert.equal(result, 1.5);
    });
});


module.exports.divideWithNonInteger = function (test) {
    var calc = new Calculator();
    calc.enter(2.5);
    calc.enter(1.5);
    var result = calc.perform("/");
    floatsAreEqual(test, 1 + 2 / 3, result);
    test.done();
};

function floatsAreEqual(test, x, y) {
    var a = (Math.round(parseFloat(x) * 100) / 100);
    var b = (Math.round(parseFloat(y) * 100) / 100);
    test.equals(a, b);
}