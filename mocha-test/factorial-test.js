/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('factorial', function () {
    it('factorial works on single number and returns product', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
    it('factorial on nothing returns 1', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
    it('ensure that factorial puts result on stack', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
    it('execute factorial twice', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
    it('factorial on non-integer throws error', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
    it('factorial on negative integer throws error', function () {
        var calc = new Calculator();
        assert.fail(null, null, 'test not implemented');
    });
});


/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.factorialReturnsProduct = function (test) {
    var calc = new Calculator();
    calc.enter(4);
    test.equals(24, calc.perform("!"));
    test.done();
};

module.exports.factorialOnNothing = function (test) {
    var calc = new Calculator();
    test.equals(1, calc.perform("!"));
    test.done();
};

module.exports.twoFactorials = function (test) {
    var calc = new Calculator();
    calc.enter(3);
    calc.perform("!");
    test.equals(720, calc.perform("!"));
    test.done();
};

module.exports.nonInteger = function (test) {
    var calc = new Calculator();
    calc.enter(3.1);

    test.throws(function () {
        calc.perform("!");
    }, Error);

    test.done();
};