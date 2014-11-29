/*jslint node: true */
'use strict';

module.exports = function(numbers, operation) {
    var n = numbers.pop();
    var result = operation(n);
    numbers.push(result);
    return result;
};