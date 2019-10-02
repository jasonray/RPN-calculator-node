/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    let max = 0;

    while (!numbers.isEmpty()) {
        let next = numbers.pop();
        if (next>max) {
        	max = next;
        }
    }

    numbers.push(max);
    return max;
};