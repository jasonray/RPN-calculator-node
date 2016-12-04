/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('calculator', function () {
    describe('Enter', function () {
        it('enter with string returns value', function () {
            var calc = new Calculator();
            assert.equal(1, calc.enter("1"))
        });
        it('enter with number returns value', function () {
            var calc = new Calculator();
            assert.equal(1, calc.enter(1))
        });
        it('enter with non integer number returns value', function () {
            var calc = new Calculator();
            assert.equal(1.1, calc.enter(1.1))
        });
    });
});
