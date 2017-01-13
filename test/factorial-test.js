/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var assert = require('assert');

describe('factorial', function () {
    it('factorial works on single number and returns product', function () {
        var calc = new Calculator();
        calc.enter(4);
        assert.equal(calc.perform("!"), 24);
    });
    it('factorial on nothing returns 1', function () {
        var calc = new Calculator();
        assert.equal(calc.perform("!"), 1);
    });
    it('ensure that factorial puts result on stack', function () {
        var calc = new Calculator();
        calc.enter(3);
        calc.perform("!");
        assert.equal(calc.peek(), 6);
    });
    it('execute factorial twice', function () {
        var calc = new Calculator();
        calc.enter(3);
        calc.perform("!");
        assert.equal(calc.perform("!"), 720);
    });
    it('factorial on non-integer throws error', function () {
        var calc = new Calculator();
        calc.enter(1.1);
        assert.throws(
            function () {
                calc.perform('!');
            },
            Error
        );
    });
    it('factorial on negative integer throws error', function () {
        var calc = new Calculator();
        calc.enter(-2);
        assert.throws(
            function () {
                calc.perform('!');
            },
            Error
        );
    });
});
