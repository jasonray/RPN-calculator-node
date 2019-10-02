/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('max', function () {
    it('max with no numbers is 0', function () {
        const calc = new Calculator();
        calc.perform('max').should.equal(0);
    });
    it('max with one number is that number', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.perform('max').should.equal(5);
    });
    it('max with two numbers, high then low', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.perform('max').should.equal(5);
    });
    it('max with two numbers, low then high', function () {
        const calc = new Calculator();
        calc.enter(3);
        calc.enter(5);
        calc.perform('max').should.equal(5);
    });
    it('max with several numbers', function () {
        const calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.enter(5);
        calc.enter(2);
        calc.enter(4);
        calc.perform('max').should.equal(5);
    });
    it('max with single negative number', function () {
        const calc = new Calculator();
        calc.enter(-5);
        calc.perform('max').should.equal(-5);
    });
    it('max with negative numbers', function () {
        const calc = new Calculator();
        calc.enter(-1);
        calc.enter(-3);
        calc.enter(-5);
        calc.enter(-2);
        calc.enter(-4);
        calc.perform('max').should.equal(-1);
    });
    it('max puts number back onto stack', function () {
        const calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.enter(5);
        calc.enter(2);
        calc.enter(4);
        calc.perform('max');
        calc.peek().should.equal(5);
    });});