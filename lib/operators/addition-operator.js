/*jslint node: true */
'use strict';

const binaryOperation = require('./binary-operator');

module.exports = function (numbers) {
    function add(lhs, rhs) {
        return lhs + rhs;
    }
    
    return binaryOperation(numbers, add);
};