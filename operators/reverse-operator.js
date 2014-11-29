/*jslint node: true */
'use strict';

module.exports = function(numbers) {

    var tempNumbers = [];
    var tempNumbers2 = [];

    while (!numbers.isEmpty()) {
        tempNumbers.push(numbers.pop());
    }

    for (var i = tempNumbers.length; i > 0; i--) {
        tempNumbers2.push(tempNumbers[i - 1]);
    }

    for (var i = tempNumbers2.length; i > 0; i--) {
        numbers.push(tempNumbers2[i - 1]);
    }

    return numbers.peek();
};