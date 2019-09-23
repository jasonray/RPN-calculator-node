/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

describe('pi', function () {
    it('pi on empty is 0', function () {
        let calc = new Calculator();
        calc.perform('pi').should.equal(0);
    });
    it('pi on 1 is 3', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform('pi').should.equal(3);
    });

    // it('fib on non integer is not defined', function () {
    //     let calc = new Calculator();
    //     calc.enter(1.5);
    //     assert.throws(
    //         function () {
    //             calc.perform('fib');
    //         },
    //         Error
    //     );
    // });
});
