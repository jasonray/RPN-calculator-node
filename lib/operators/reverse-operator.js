/*jslint node: true */
'use strict';

module.exports = function (numbers) {

    let tempNumbers = [];
    let tempNumbers2 = [];

    while (!numbers.isEmpty()) {
        tempNumbers.push(numbers.pop());
    }

    for (let i = tempNumbers.length; i > 0; i--) {
        tempNumbers2.push(tempNumbers[i - 1]);
    }

    for (let i = tempNumbers2.length; i > 0; i--) {
        numbers.push(tempNumbers2[i - 1]);
    }

    return numbers.peek();
};