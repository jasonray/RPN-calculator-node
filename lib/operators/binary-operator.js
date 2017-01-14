/*jslint node: true */
'use strict';

module.exports = function (numbers, operation) {
    const rhs = numbers.pop();
    const lhs = numbers.pop();
    const result = operation(lhs, rhs);
    numbers.push(result);
    return result;
};