/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

31415926535

describe('pi', function () {
    it('pi on empty is 0', function () {
        let calc = new Calculator();
        calc.perform('pi').should.equal(0);
    });
    it('pi on 1', function () {
        runPiTest(1,3);
    });

    function runPiTest(nthNumber, expected) {
        let calc = new Calculator();
        calc.enter(nthNumber);
        calc.perform('pi').should.equal(expected);
    }

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
