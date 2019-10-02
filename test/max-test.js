/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('max', function () {
    it.skip('max with no numbers is 0', function () {
        const calc = new Calculator();
        calc.perform('max').should.equal(0);
    });
});