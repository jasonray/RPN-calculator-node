/*jslint node: true */
'use strict';

var monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    return monomialOperator(numbers, factorial);

    function factorial(n) {
        if (!isInteger(n)) {
            throw new Error("Cannot perform factorial on non-integer");
        }
        if (isNegative(n)) {
            throw new Error("Cannot perform factorial on negative number");
        }

        var product = 1;

        for (var i = n; i > 0; i--) {
            product = product * i;
        }

        return product;
    }

    function isInteger(n) {
        return n % 1 === 0;
    }

    function isNegative(n) {
        return n < 0;
    }

};