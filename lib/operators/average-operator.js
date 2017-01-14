/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    let count = 0;
    let sum = 0;

    while (!numbers.isEmpty()) {
        count = count + 1;
        sum = sum + numbers.pop();
    }

    let result;
    if (count === 0) {
        result = 0;
    } else {
        result = sum / count;
    }

    numbers.push(result);
    return result;
};