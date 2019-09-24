/*jslint node: true */
'use strict';

const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function squareroot(n) {
        return Math.sqrt(n);
    }

    return monomialOperator(numbers, squareroot);
};