/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    while (!numbers.isEmpty()) {
        numbers.pop();
    }

    return 0;
};