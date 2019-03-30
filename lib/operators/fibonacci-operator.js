/*jslint node: true */
'use strict';

const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function fib(n) {
        let prev1 = 1;
        let prev2 = 0;

        if (n <= 0)
            return 0;

        _.times(n - 1, function () {
            let sum = prev1 + prev2;
            prev2 = prev1;
            prev1 = sum;
        });

        return prev1;
    }

    return monomialOperator(numbers, fib);
};