/*jslint node: true */
'use strict';

module.exports = function (numbers, operation) {
    const n = numbers.pop();
    const result = operation(n);
    numbers.push(result);
    return result;
};