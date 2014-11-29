/*jslint node: true */
'use strict';

var _ = require('underscore');

module.exports = function(numbers) {
	var n = numbers.pop();

	if (!isInteger(n)) {
		throw new Error("Cannot perform fibonacci on non-integer");
	}

	var result = fib(n);

	numbers.push(result);
	return result;

	function fib(n) {
		var prev1 = 1;
		var prev2 = 0;

		if (n <= 0)
			return 0;

        _.times(n - 1, function() {
            var sum = prev1 + prev2;
            prev2 = prev1;
            prev1 = sum;
        });

		return prev1;
	}

	function isInteger(n) {
		return (n == parseInt(n, 10));
	}
};