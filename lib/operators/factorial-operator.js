/*jslint node: true */
'use strict';

const monomialOperator = require('./monomial-operator');
const _ = require('lodash');

module.exports = function (numbers) {
    function isNegative(n) {
        return n < 0;
    }

    function factorial(n) {
        if (!_.isInteger(n)) {
            throw new Error('Cannot perform factorial on non-integer');
        }
        if (isNegative(n)) {
            throw new Error('Cannot perform factorial on negative number');
        }

        let product = 1;

        for (let i = n; i > 0; i--) {
            product = product * i;
        }

        return product;
    }

    return monomialOperator(numbers, factorial);
};