exports.doOperation = function(numbers) {
	var count = 0;
	var sum = 0;

	while (!numbers.isEmpty()) {
		count = count + 1;
		sum = sum + numbers.pop();
	}

	var result;
	if (count === 0) {
		result = 0;
	} else {
		result = sum / count;
	}

	numbers.push(result);
	return result;
};