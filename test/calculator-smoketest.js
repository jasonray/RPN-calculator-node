/*jslint node: true */
'use strict';

var Calculator = require('../lib/calculator');
var assert = require('assert');
var should = require('should');


describe('calculator', function () {
    describe('smoke test', function () {
        it('constructor', function () {
            var calc = new Calculator();
        });
        it('empty add', function () {
            var calc = new Calculator();
            calc.perform('+').should.equal(0);
        });
        it('enter on non-numeric value returns error, but allows for more entry', function () {
            var calc = new Calculator();
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
