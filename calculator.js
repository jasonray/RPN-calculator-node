var rpnstack = require("./rpn-stack");
var Registry = require("./operator-registry");


function Calculator() {
var self = this;

	self.numbers = new rpnstack.stack();
	self.operatorRegistry = initializeRegistry();

	function initializeRegistry() {
		var registry = new Registry();
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

	return self;
}

	Calculator.prototype.enter = function(operand) {
var self = this;

		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}

		if (!isNumber(operand)) {
			throw new Error("cannot enter non-numeric values");
		}

		self.numbers.push(operand);

		return operand;
	};

		Calculator.prototype.perform = function(operatorCharacter) {
			var self = this;
		var operator = self.operatorRegistry.getOperatorMethod(operatorCharacter);

		if (!operator) {
			throw new Error("Unknown operator '" + operatorCharacter + "'");
		}

		return operator(self.numbers);
	};

module.exports = Calculator;