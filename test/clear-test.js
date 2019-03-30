/*jslint node: true */
'use strict';

const Calculator = require('../lib/calculator');
const should = require('should');

describe('clear', function () {
    it('clear on a empty stack does not throw error', function () {
        let calc = new Calculator();
        calc.perform('C');
    });
    it('clear on a single item stack clear stack', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.peek().should.equal(1);
        calc.perform('C');
        calc.peek().should.equal(0);
    });
    it('clear on a two item stack clear stack', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(2);
        calc.peek().should.equal(2);
        calc.perform('C');
        calc.peek().should.equal(0);
    });
    it('clear on a list of items stack clears stack', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.enter(1);
        calc.perform('C');
        calc.peek().should.equal(0);
    });
    it('ensure support for 'C'', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.peek().should.equal(1);

        calc.perform('C');
        calc.peek().should.equal(0);
    });
    it('ensure support for 'C'', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.peek().should.equal(1);
        calc.perform('C');
        calc.peek().should.equal(0);
    });
    it('ensure support for "clear"', function () {
        let calc = new Calculator();
        calc.enter(1);
        calc.peek().should.equal(1);
        calc.perform('C');
        calc.peek().should.equal(0);
    });
});
