/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var should = require('should');

describe('absolute', function () {
    it('|| should be recognized by calculator', function () {
        var calc = new Calculator();
        calc.perform('||').should.equal(0);
    });
    it('absolute of 0 is 0', function () {
        var calc = new Calculator();
        calc.enter(0);
        calc.perform('||').should.equal(0);
    });
    it('absolute of positive number x is x (1)', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform('||').should.equal(1);
    });
    it('absolute of negative number x is positive x (-1)', function () {
        var calc = new Calculator();
        calc.enter(-1);
        calc.perform('||').should.equal(1);
    });
    it('absolute of positive number x is x (10)', function () {
        var calc = new Calculator();
        calc.enter(10);
        calc.perform('||').should.equal(10);
    });
    it('absolute of negative number x is positive x (-10)', function () {
        var calc = new Calculator();
        calc.enter(-10);
        calc.perform('||').should.equal(10);
    });
    it('ensure that operation works on the most recent item in stack', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.perform('||').should.equal(2);
    });
    it('ensure that result is put back onto stack (with positive number)', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.perform('||').should.equal(2);
        calc.perform('||').should.equal(2);
    });
    it('ensure that result is put back onto stack (with negative number)', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(-2);
        calc.perform("||")
        calc.peek().should.equal(2);
    });
    it('absolute of positive decimal number x is x', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.perform('||').should.equal(1.5);
    });
    it('absolute of negative decimal number x is positive x', function () {
        var calc = new Calculator();
        calc.enter(-1.5);
        calc.perform('||').should.equal(1.5);
    });
});
