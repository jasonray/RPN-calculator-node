/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var should = require('should');

describe('subtraction', function () {
    it('subtractNoNumbers', function () {
        var calc = new Calculator();
        calc.perform("-").should.equal(0);
    });
    it('subtractOneNumber', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("-").should.equal(-1);
    });
    it('subtractOneNumberTwice', function () {
        var calc = new Calculator();
        calc.enter(1);
        calc.perform("-");
        calc.perform("-").should.equal(1);
    });
    it('subtractTwoNumbers', function () {
        var calc = new Calculator();
        calc.enter(10);
        calc.enter(3);
        calc.perform("-").should.equal(7);
    });
    it('subtractThreeNumbers', function () {
        var calc = new Calculator();
        calc.enter(21);
        calc.enter(13);
        calc.perform("-");
        calc.enter(5);
        calc.perform("-").should.equal(3);
    });
    it('subtractWithNonInteger', function () {
        var calc = new Calculator();
        calc.enter(1.5);
        calc.enter(0.3);
        calc.perform("-").should.equal(1.2);
    });
});
