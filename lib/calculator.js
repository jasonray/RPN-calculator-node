/*jslint node: true */
'use strict';

const RpnStack = require("./rpn-stack");
const Registry = require("./operator-registry");


class Calculator {
    constructor() {
        const self = this;

        self.numbers = new RpnStack();
        self.operatorRegistry = initializeRegistry();

        function initializeRegistry() {
            //todo: register alternate operands (like 'add');
            const registry = new Registry();
            registry.registerHandler('+', require("./operators/addition-operator"));
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
            registry.registerHandler("√", require("./operators/squareroot-operator"));
            registry.registerHandler("squareroot", require("./operators/squareroot-operator"));
            return registry;
        }
    }

    peek() {
        const self = this;
        return self.numbers.peek();
    }

    enter(operand) {
        const self = this;

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
        const self = this;
        const operator = self.operatorRegistry.getOperatorMethod(operatorCharacter);

        if (!operator) {
            throw new Error("Unknown operator '" + operatorCharacter + "'");
        }

        return operator(self.numbers);
    }
}

module.exports = Calculator;