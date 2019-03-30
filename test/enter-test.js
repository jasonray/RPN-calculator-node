/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('calculator', function () {
    describe('Enter', function () {
        it('enter with string returns value', function () {
            let calc = new Calculator();
            calc.enter('1').should.equal('1');
        });
        it('enter with number returns value', function () {
            let calc = new Calculator();
            calc.enter(1).should.equal(1);
        });
        it('enter with non integer number returns value', function () {
            let calc = new Calculator();
            calc.enter('1.1').should.equal('1.1');
        });
    });
});
