/*jslint node: true */
'use strict';

var monomialOperator = require('./monomial-operator');

module.exports = function(numbers) {
    return monomialOperator(numbers, factorial);

    function factorial(n) {
        if (!isInteger(n)) {
            throw new Error("Cannot perform factorial on non-integer");
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

};