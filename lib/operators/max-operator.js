/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    let max = undefined;

    while (!numbers.isEmpty()) {
        let next = numbers.pop();

        if (max == undefined) {
        	max = next;
        } else if (next>max) {
        	max = next;
        }
    }

    if (max == undefined) {
    	max = 0;
    }

    numbers.push(max);
    return max;
};