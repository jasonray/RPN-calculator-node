/*jslint node: true */
'use strict';

const binaryOperation = require('./binary-operator');

module.exports = function (numbers) {
    return binaryOperation(numbers, multiply);

    function multiply(lhs, rhs) {
        return lhs * rhs;
    }
};