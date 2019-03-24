/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('absolute', function () {
    it('√ of 1 is 1', function () {
        let calc = new Calculator();
        calc.enter(1)
        calc.perform('√').should.equal(1);
    });
});
