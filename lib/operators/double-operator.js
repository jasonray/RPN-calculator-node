/*jslint node: true */
'use strict';

const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function double(n) {
        return n * 2;
    }

    return monomialOperator(numbers, double);
};