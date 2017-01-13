/*jslint node: true */
'use strict';

var RpnStack = require("./rpn-stack");
var Registry = require("./operator-registry");


class Calculator {
    constructor() {
        var self = this;

        self.numbers = new RpnStack();
        self.operatorRegistry = initializeRegistry();

        function initializeRegistry() {
            //todo: register alternate operands (like 'add');
            var registry = new Registry();
            registry.registerHandler("+", require("./operators/addition-operator"));
            registry.registerHandler("*", require("./operators/multiplication-operator"));
            registry.registerHandler("x", require("./operators/multiplication-operator"));
            registry.registerHandler("/", require("./operators/division-operator"));
            registry.registerHandler("-", require("./operators/subtraction-operator"));
            registry.registerHandler("||", require("./operators/absolute-operator"));
            registry.registerHandler("average", require("./operators/average-operator"));
            registry.registerHandler("ave", require("./operators/average-operator"));
            registry.registerHandler("c", require("./operators/clear-operator"));
            registry.registerHandler("clear", require("./operators/clear-operator"));
            registry.registerHandler("fib", require("./operators/fibonacci-operator"));
            registry.registerHandler("!", require("./operators/factorial-operator"));
            registry.registerHandler("sum", require("./operators/sum-operator"));
            registry.registerHandler("reverse", require("./operators/reverse-operator"));
            return registry;
        }
    }

    peek() {
        var self = this;
        return self.numbers.peek();
    }

    enter(operand) {
        var self = this;

        //todo: use _.isNumber
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        if (!isNumber(operand)) {
            throw new Error("Cannot enter non-numeric values");
        }

        self.numbers.push(operand);

        return operand;
    }

    perform(operatorCharacter) {
        var self = this;
        var operator = self.operatorRegistry.getOperatorMethod(operatorCharacter);

        if (!operator) {
            throw new Error("Unknown operator '" + operatorCharacter + "'");
        }

        return operator(self.numbers);
    }
}

module.exports = Calculator;