/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('average', function () {
    it('average on empty stack is 0', function () {
        let calc = new Calculator();
        calc.perform('AVE').should.equal(0);
    });
    it('average of 0 is 0', function () {
        let calc = new Calculator();
        calc.enter(0);
        calc.perform('AVE').should.equal(0);
    });
    it('average of x is x', function () {
        let calc = new Calculator();
        calc.enter(5);
        calc.perform('AVE').should.equal(5);
    });
    it('average of x is x (with negative numbers)', function () {
        let calc = new Calculator();
        calc.enter(-5);
        calc.perform('AVE').should.equal(-5);
    });
    it('average two numbers', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.perform('AVE').should.equal(2);
    });
    it('average three numbers', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.enter(5);
        calc.perform('AVE').should.equal(3);
    });
    it('average five numbers', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.enter(3);
        calc.enter(4);
        calc.enter(5);
        calc.perform('AVE').should.equal(3);
    });
    it('average numbers (with negative numbers)', function () {
        let calc = new Calculator();
        calc.enter(10);
        calc.enter(-20);
        calc.enter(50);
        calc.enter(4);
        calc.perform('AVE').should.equal(11);
    });
    it('average numbers (using "AVERAGE" operator)', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.perform('AVERAGE').should.equal(2);
    });
    it('operator not case sensitive', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(3);
        calc.perform('ave').should.equal(2);
    });
    it('empty average affects stack', function () {
        //if empty average does not put 0 onto stack
        //then average with 2 would be 2
        //if empty average does put 0 onto stack
        //then average with 2 would be 1 (0,1)
        let calc = new Calculator();
        calc.perform('ave');
        calc.enter(2);
        calc.perform('AVE').should.equal(1);
    });
    it('average two numbers with non integer result', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(4);
        calc.perform('AVE').should.equal(2.5);
    });
    it('average two non-integer numbers with non integer result', function () {
        let calc = new Calculator();
        calc.enter(1.5);
        calc.enter(3.5);
        calc.perform('AVE').should.equal(2.5);
    });
});
