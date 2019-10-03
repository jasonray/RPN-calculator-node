/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

    describe('calculate', function () {
        it.skip('binary operation returns answer', function () {
            let calc = new Calculator();
            calc.calculate('1 2 +').should.equal(3);
        });
        it.skip('monomial operation returns answer', function () {
            let calc = new Calculator();
            calc.calculate('1 double').should.equal(2);
        });
        it.skip('recognize negative value', function () {
            let calc = new Calculator();
            calc.calculate('-2 double').should.equal(-2);
        });
        it.skip('operations puts item on stack', function () {
            let calc = new Calculator();
            calc.calculate('1 2 +');
            calc.peek(3);
        });
    });
