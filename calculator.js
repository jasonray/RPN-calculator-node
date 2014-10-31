'use strict';

var RpnStack = require("./rpn-stack");
var Registry = require("./operator-registry");


function Calculator() {
	var self = this;

	self.numbers = new RpnStack();
	self.operatorRegistry = initializeRegistry();

	function initializeRegistry() {
		var registry = new Registry();
		registry.registerHandler("+", require("./operators/addition-operator"));
		registry.registerHandler("*", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("x", require("./operators/multiplication-operator").doOperation);
		registry.registerHandler("/", require("./operators/division-operator"));
		registry.registerHandler("-", require("./operators/subtraction-operator").doOperation);
		registry.registerHandler("||", require("./operators/absolute-operator"));
		registry.registerHandler("average", require("./operators/average-operator"));
		registry.registerHandler("ave", require("./operators/average-operator"));
		registry.registerHandler("c", require("./operators/clear-operator"));
		registry.registerHandler("clear", require("./operators/clear-operator"));
		registry.registerHandler("fib", require("./operators/fibonacci-operator"));
		registry.registerHandler("!", require("./operators/factorial-operator"));
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
		throw new Error("Cannot enter non-numeric values");
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