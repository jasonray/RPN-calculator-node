/*jslint node: true */
'use strict';

const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function absolute(n) {
        if (n < 0) {
            n = n * -1;
        }
        return n;
    }

    return monomialOperator(numbers, absolute);
};