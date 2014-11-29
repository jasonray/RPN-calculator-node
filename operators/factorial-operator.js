/*jslint node: true */
'use strict';

module.exports = function(numbers) {
    var n = numbers.pop();

    if (!isInteger(n)) {
        throw new Error("Cannot perform factorial on non-integer");
    }

    var product = 1;

    for (var i = n; i > 0; i--) {
        product = product * i;
    }

    numbers.push(product);
    return product;

    function isInteger(n) {
        return n % 1 === 0;
    }
};