/*jslint node: true */
'use strict';

module.exports = calculateMax;

function calculateMax(numbers) {
    let max;

    if (numbers.isEmpty()) {
        max=0;
    } else {
        while (!numbers.isEmpty()) {
            let next = numbers.pop();

            if (max == undefined) {
                max = next;
            } else if (next>max) {
                max = next;
            }
        }
    }

    numbers.push(max);
    return max;
};