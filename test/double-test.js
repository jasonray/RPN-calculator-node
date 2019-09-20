/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

describe('double', function () {
    it('double works on single number and returns double', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform('double').should.equal(8);
    });
    it('double on nothing returns 0', function () {
        let calc = new Calculator();
        calc.perform('double').should.equal(0);
    });
    it('ensure that double puts result on stack', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform('double');
        calc.peek().should.equal(8);
    });
    it('execute double twice', function () {
        let calc = new Calculator();
        calc.enter(4);
        calc.perform('double');
        calc.perform('double').should.equal(16);
    });
    it('double on non-integer works', function () {
        let calc = new Calculator();
        calc.enter(4.4);
        calc.perform('double').should.equal(8.8);
    });
    it('double on non-integer works', function () {
        let calc = new Calculator();
        calc.enter(-4);
        calc.perform('double').should.equal(-8);
    });
});
