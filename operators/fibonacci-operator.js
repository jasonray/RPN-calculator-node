/*jslint node: true */
'use strict';

var _ = require('underscore');
var monomialOperator = require('./monomial-operator');

module.exports = function(numbers) {
    return monomialOperator(numbers, fib);

    function fib(n) {
        var prev1 = 1;
        var prev2 = 0;

        if (n <= 0)
            return 0;

        _.times(n - 1, function() {
            var sum = prev1 + prev2;
            prev2 = prev1;
            prev1 = sum;
        });

        return prev1;
    }

    function isInteger(n) {
        return n % 1 === 0;
    }

};