/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

    describe('calculate', function () {
        it('binary operation returns answer', function () {
            let calc = new Calculator();
            let result = calc.calculate('1 2 +');
            result.should.equal(3);
        });
        it('monomial operation returns answer', function () {
            let calc = new Calculator();
            calc.calculate('1 double').should.equal(2);
        });
        it('recognize negative value', function () {
            let calc = new Calculator();
            calc.calculate('-2 double').should.equal(-4);
        });
        it('operations puts item on stack', function () {
            let calc = new Calculator();
            calc.calculate('1 2 +');
            calc.peek(3);
        });
        it('with extra items on stack, binary operation operates on top two values', function () {
            let calc = new Calculator();
            calc.calculate('3 1 2 +').should.equal(3);
        });
        it.skip('multiple operations return value', function () {
            let calc = new Calculator();
            calc.calculate('3 1 2 + +').should.equal(6);
        });
    });
