/*jslint node: true */
'use strict';

function calculateMin(numbers) {
    let min;

    if (numbers.isEmpty()) {
        min=0;
    } else {
        min=numbers.pop();
    }

    while (!numbers.isEmpty()) {
        let next = numbers.pop();

        if (next<min) {
            min = next;
        }
    }

    numbers.push(min);
    return min;
}

module.exports = calculateMin;
