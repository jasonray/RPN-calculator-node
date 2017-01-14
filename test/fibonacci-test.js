/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

describe('fibonacci', function () {
    it('fib on empty is 0', function () {
        let calc = new Calculator();
        calc.perform("fib").should.equal(0);
    });
    it('fib on 1 is 1', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform("fib").should.equal(1);
    });
    it('fib on 2 is 1', function () {
        let calc = new Calculator();
        calc.enter(2);
        calc.perform("fib").should.equal(1);
    });
    it('fib on 3 is 2', function () {
        let calc = new Calculator();
        calc.enter(3);
        calc.perform("fib").should.equal(2);
    });
    it('fib on 4 is 3', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform("fib").should.equal(3);
    });
    it('fib on 5 is 5', function () {
        let calc = new Calculator();
        calc.enter(5);
        calc.perform("fib").should.equal(5);
    });
    it('fib on 6 is 8', function () {
        let calc = new Calculator();
        calc.enter(6);
        calc.perform("fib").should.equal(8);
    });
    it('fib on 7 is 13', function () {
        let calc = new Calculator();
        calc.enter(7);
        calc.perform("fib").should.equal(13);
    });
    it('fib on 8 is 21', function () {
        let calc = new Calculator();
        calc.enter(8);
        calc.perform("fib").should.equal(21);
    });
    it('fib on 30 is 832040', function () {
        let calc = new Calculator();
        calc.enter(30);
        calc.perform("fib").should.equal(832040);
    });
    it('fib on 40 is 102334155', function () {
        let calc = new Calculator();
        calc.enter(40);
        calc.perform("fib").should.equal(102334155);
    });
    it('fib on non integer is not defined', function () {
        let calc = new Calculator();
        calc.enter(1.5);
        assert.throws(
            function () {
                calc.perform('fib');
            },
            Error
        );
    });
});
