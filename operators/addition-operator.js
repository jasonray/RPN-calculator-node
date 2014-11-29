/*jslint node: true */
'use strict';

var binaryOperation = require('./binary-operator');

module.exports = function(numbers) {
    return binaryOperation(numbers, add);

    function add(lhs, rhs) {
        return lhs + rhs;
    }
};