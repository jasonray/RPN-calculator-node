/*jslint node: true */
'use strict';

const binaryOperation = require('./binary-operator');

module.exports = function (numbers) {
    function divide(lhs, rhs) {
        if (rhs === 0) {
            throw new Error('division by zero');
        }
        return lhs / rhs;
    }

    return binaryOperation(numbers, divide);
};