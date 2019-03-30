/*jslint node: true */
'use strict';

const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function isInteger(n) {
        return n % 1 === 0;
    }

    function isNegative(n) {
        return n < 0;
    }

    function factorial(n) {
        if (!isInteger(n)) {
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