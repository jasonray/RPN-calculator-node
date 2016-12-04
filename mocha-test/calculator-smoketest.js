/*jslint node: true */
'use strict';

var Calculator = require('../calculator');
var assert = require('assert');

describe('calculator', function () {
    describe('smoke test', function () {
        it('constructor', function () {
            var calc = new Calculator();
        });
        it('empty add', function () {
            var calc = new Calculator();
            assert.equal(calc.perform("+"), 0);
        });
    });
});


/*jslint node: true */
'use strict';

var Calculator = require('../calculator');

module.exports.emptyAdd = function (test) {
    var calc = new Calculator();
    var result = calc.perform("+");
    test.equals(0, result);
    test.done();
};

module.exports.enterNonNumericValue = function (test) {
    var calc = new Calculator();
    test.throws(
        function () {
            calc.enter('a');
        },
        Error
    );
    test.done();
};

module.exports.handleUnknownOperatorCharacter = function (test) {
    var calc = new Calculator();
    test.throws(
        function () {
            calc.perform("unknown");
        },
        Error
    );
    test.done();
};