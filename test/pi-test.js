/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const assert = require('assert');
const should = require('should');

describe('pi', function () {
    function runPiTest(nthNumber, expected) {
        let calc = new Calculator();
        calc.enter(nthNumber);
        calc.perform('pi').should.equal(expected);
    }

    it('pi using pi as operator', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform('pi').should.equal(1);
    });

    it('pi using π as operator', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.perform('π').should.equal(1);
    });

    it('pi on 0', function () {
        runPiTest(0,3);
    });
    it('pi on 1', function () {
        runPiTest(1,1);
    });
    it('pi on 2', function () {
        runPiTest(2,4);
    });
    it('pi on 3', function () {
        runPiTest(3,1);
    });
    it('pi on 4', function () {
        runPiTest(4,5);
    });
    it('pi on 5', function () {
        runPiTest(5,9);
    });
    it('pi on 6', function () {
        runPiTest(6,2);
    });
    it('pi on 7', function () {
        runPiTest(7,6);
    });
    it('pi on 8', function () {
        runPiTest(8,5);
    });
    it('pi on 9', function () {
        runPiTest(9,3);
    });
    it('pi on 10', function () {
        runPiTest(10,5);
    });
    it('pi on 100', function () {
        runPiTest(100,9);
    });
    it('pi on 1000', function () {
        runPiTest(100,9);
    });

    it('pi on non integer is not defined', function () {
         let calc = new Calculator();
         calc.enter(1.5);
         assert.throws(
             function () {
                 calc.perform('pi');
             },
             Error
         );
    });

    it('pi on negative is not defined', function () {
         let calc = new Calculator();
         calc.enter(-2);
         assert.throws(
             function () {
                 calc.perform('pi');
             },
             Error
         );
    });

});
