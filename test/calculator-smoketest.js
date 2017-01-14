/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

describe('calculator', function () {
    describe('smoke test', function () {
        it('constructor', function () {
            let calc = new Calculator();
        });
        it('empty add', function () {
            let calc = new Calculator();
            calc.perform('+').should.equal(0);
        });
        it('enter on non-numeric value returns error, but allows for more entry', function () {
            let calc = new Calculator();
            assert.throws(
                function () {
                    calc.enter('a');
                },
                Error
            );
            calc.perform('+').should.equal(0);
        });
    });
});
