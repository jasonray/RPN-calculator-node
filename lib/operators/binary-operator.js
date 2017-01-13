/*jslint node: true */
'use strict';

module.exports = function(numbers, operation) {
    var rhs = numbers.pop();
    var lhs = numbers.pop();
    var result = operation(lhs, rhs);
    numbers.push(result);
    return result;
};