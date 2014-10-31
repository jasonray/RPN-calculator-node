'use strict';

module.exports.doOperation = function(numbers) {
	var n = numbers.pop();

	if (!isInteger(n)) {
		throw new Error("cannot enter non-integer values");
	}

	var product = 1;

	for (var i = n; i > 0; i--) {
		product = product * i;
	}

	numbers.push(product);
	return product;

	function isInteger(n) {
		return (n == parseInt(n, 10));
	}
};