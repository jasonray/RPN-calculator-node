/*jslint node: true */
'use strict';

module.exports = function(numbers) {

    var tempNumbers = [];

    while (!numbers.isEmpty()) {
        tempNumbers.push(numbers.pop());
    }

    for (var i = tempNumbers.length; i > 0; i--) {
        numbers.push(tempNumbers[i - 1]);
    }

    return numbers.peek();
};