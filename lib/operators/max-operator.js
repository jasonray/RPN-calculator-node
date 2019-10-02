/*jslint node: true */
'use strict';

function calculateMax(numbers) {
    let max;

    if (numbers.isEmpty()) {
        max=0;
    } else {
        while (!numbers.isEmpty()) {
            let next = numbers.pop();

            if (next>max) {
                max = next;
            }
        }
    }

    numbers.push(max);
    return max;
}

module.exports = calculateMax;
