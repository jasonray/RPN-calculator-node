/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    let min = undefined;

    while (!numbers.isEmpty()) {
        let next = numbers.pop();

        if (min == undefined) {
        	min = next;
        } else if (next<min) {
        	min = next;
        }
    }

    if (min == undefined) {
    	min = 0;
    }

    numbers.push(min);
    return min;
};