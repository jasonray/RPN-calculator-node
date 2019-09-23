/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

//926535

describe('pi', function () {
    it('pi on empty is 0', function () {
        let calc = new Calculator();
        calc.perform('pi').should.equal(0);
    });
    it('pi on 1', function () {
        runPiTest(1,3);
    });
    it('pi on 2', function () {
        runPiTest(2,1);
    });
    it('pi on 3', function () {
        runPiTest(3,4);
    });
    it('pi on 4', function () {
        runPiTest(4,1);
    });
    it('pi on 5', function () {
        runPiTest(5,5);
    });
    it('pi on 6', function () {
        runPiTest(6,9);
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
