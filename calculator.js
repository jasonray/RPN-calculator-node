var rpnstack = require("./rpn-stack");
var registryModule = require("./operator-registry");


function Calculator() {
	this.numbers = new rpnstack.stack();
	this.operatorRegistry = initializeRegistry();





	function initializeRegistry() {
		var registry = new registryModule.registry();
		registry.registerHandler("+", require("./operators/addition-operator").doOperation);
		registry.registerHandler("*", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("x", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("/", require("./operators/division-operator").doOperation);
		registry.registerHandler("-", require("./operators/subtraction-operator").doOperation);
		registry.registerHandler("||", require("./operators/absolute-operator").doOperation);
		registry.registerHandler("average", require("./operators/average-operator").doOperation);
		registry.registerHandler("ave", require("./operators/average-operator").doOperation);
		registry.registerHandler("c", require("./operators/clear-operator").doOperation);
		registry.registerHandler("clear", require("./operators/clear-operator").doOperation);
		registry.registerHandler("fib", require("./operators/fibonacci-operator").doOperation);
		registry.registerHandler("!", require("./operators/factorial-operator").doOperation);
		registry.registerHandler("sum", require("./operators/sum-operator").doOperation);
		return registry;
	}

	return this;
}

	Calculator.prototype.enter = function(operand) {
		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}

		if (!isNumber(operand)) {
			throw new Error("cannot enter non-numeric values");
		}

		this.numbers.push(operand);

		return operand;
	};

		Calculator.prototype.perform = function(operatorCharacter) {
		var operator = this.operatorRegistry.getOperatorMethod(operatorCharacter);

		if (!operator) {
			throw new Error("Unknown operator '" + operatorCharacter + "'");
		}

		return operator(this.numbers);
	};



module.exports = Calculator;