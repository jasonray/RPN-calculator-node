/*jslint node: true */
'use strict';

var binaryOperation = require('./binary-operator');

module.exports = function(numbers) {
    return binaryOperation(numbers, divide);

    function divide(lhs, rhs) {
        if (rhs === 0) throw new Error("division by zero");
        return lhs / rhs;
    }
};