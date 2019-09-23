/*jslint node: true */
'use strict';

const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function isInteger(n) {
        return n % 1 === 0;
    }

    function isNegative(n) {
        return n < 0;
    }

    function nthOfPi(n) {
        if (!isInteger(n)) {
            throw new Error('Cannot perform pi on non-integer');
        }

        if (isNegative(n)) {
            throw new Error('Cannot perform pi on negative number');
        }

        if (n===0) return 0;

        const pi = '31415926535';
        const digit = pi.substring(n-1,n);
        return parseInt(digit);
    }

    return monomialOperator(numbers, nthOfPi);
};