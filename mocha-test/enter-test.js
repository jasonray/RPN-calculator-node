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


/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.enterStringReturnsValue = function (test) {
    var calc = new Calculator();
    test.equals(1, calc.enter("1"));
    test.done();
};

module.exports.enterNumberReturnsValue = function (test) {
    var calc = new Calculator();
    test.equals(1, calc.enter(1));
    test.done();
};

module.exports.enterNonInteger = function (test) {
    var calc = new Calculator();
    test.equals(1.5, calc.enter("1.5"));
    test.done();
};