/*jslint node: true */
'use strict';

const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function nthOfPi(n) {
        if (n===0) return 0;

        const pi = '31415926535';
        let digit = pi.substring(n-1,1);
        return parseInt(digit);
    }

    return monomialOperator(numbers, nthOfPi);
};