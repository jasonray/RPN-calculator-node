exports.doOperation = function(numbers) {
	var n = numbers.pop();
	if (n < 0) {
		n = n * -1;
	}
	numbers.push(n);
	return n;
};