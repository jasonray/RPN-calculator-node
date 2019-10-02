/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('min', function () {
    it('min with no numbers is 0', function () {
        const calc = new Calculator();
        calc.perform('min').should.equal(0);
    });
    it('min with one number is that number', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.perform('min').should.equal(5);
    });
    it('min with two numbers, high then low', function () {
        const calc = new Calculator();
        calc.enter(5);
        calc.enter(3);
        calc.perform('min').should.equal(3);
    });
    it('min with two numbers, low then high', function () {
        const calc = new Calculator();
        calc.enter(3);
        calc.enter(5);
        calc.perform('min').should.equal(3);
    });
    it('min with several numbers', function () {
        const calc = new Calculator();
        calc.enter(3);
        calc.enter(1);
        calc.enter(5);
        calc.enter(2);
        calc.enter(4);
        calc.perform('min').should.equal(1);
    });
    it('min with single negative number', function () {
        const calc = new Calculator();
        calc.enter(-5);
        calc.perform('min').should.equal(-5);
    });
    it('min with negative numbers', function () {
        const calc = new Calculator();
        calc.enter(-1);
        calc.enter(-3);
        calc.enter(-5);
        calc.enter(-2);
        calc.enter(-4);
        calc.perform('min').should.equal(-5);
    });
    it('min puts number back onto stack', function () {
        const calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.enter(5);
        calc.enter(2);
        calc.enter(4);
        calc.perform('min');
        calc.peek().should.equal(1);
    });});