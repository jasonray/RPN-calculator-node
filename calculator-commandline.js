var calculator = require('./calculator');

console.log("result: " + processCommandlineArgs(new calculator.calc()));
function processCommandlineArgs(calc) {
	process.argv.forEach(function (val, index, array) {
		if (index==0) {
			//this is likely 'node'
		}
		else if (index==1) {
			//this is likely 'calculator.js'
		} else if (isNaN(val)) {
			// console.log("operator:" + val);
			result=calc.perform(val);
		} else {
			// console.log("operand:" + val);
			calc.enter(parseInt(val));
		}
	});
	return result;
}
