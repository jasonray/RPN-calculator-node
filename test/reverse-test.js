/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var should = require('should');

describe('reverse', function () {
    it('reverseNoNumbers', function () {
        var calc = new Calculator();
        calc.perform("reverse").should.equal(0);
        calc.numbers.pop().should.equal(0);
    });
    it('reverseOneNumber', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("reverse").should.equal(1);
        calc.numbers.pop().should.equal(1);
        calc.numbers.pop().should.equal(0);
    });
    it('reverseTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.perform("reverse").should.equal(1);
        calc.numbers.pop().should.equal(1);
        calc.numbers.pop().should.equal(2);
        calc.numbers.pop().should.equal(0);
    });
    it('reverseMultipleNumbers', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        calc.enter(4);
        calc.enter(5);
        calc.enter(6);
        calc.enter(7);
        calc.enter(8);
        calc.enter(9);
        calc.enter(10);
        calc.perform("reverse").should.equal(1);
        calc.numbers.pop().should.equal(1);
        calc.numbers.pop().should.equal(2);
        calc.numbers.pop().should.equal(3);
        calc.numbers.pop().should.equal(4);
        calc.numbers.pop().should.equal(5);
        calc.numbers.pop().should.equal(6);
        calc.numbers.pop().should.equal(7);
        calc.numbers.pop().should.equal(8);
        calc.numbers.pop().should.equal(9);
        calc.numbers.pop().should.equal(10);
        calc.numbers.pop().should.equal(0);
    });
});
