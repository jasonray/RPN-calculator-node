/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('clear', function () {
    it('clear on a empty stack does not throw error', function () {
        var calc = new Calculator();
        calc.perform("C");
    });
    it('clear on a single item stack clear stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        assert.equal(calc.peek(), 1);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('clear on a two item stack clear stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        assert.equal(calc.peek(), 2);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('clear on a list of items stack clears stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "C"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("C");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "c"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("c");
        assert.equal(calc.peek(), 0);
    });
    it('ensure support for "clear"', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("c");
        assert.equal(calc.peek(), 0);
    });
});
