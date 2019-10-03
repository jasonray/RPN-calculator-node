/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

    describe('calculate', function () {
        it.skkp('binary operation returns answer', function () {
            let calc = new Calculator();
            calc.calculate('1 2 +').should.equal(3);
        });
    });
