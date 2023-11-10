/*jslint node: true */
'use strict';

const RpnStack = require('./rpn-stack');
const Registry = require('./operator-registry');
const _ = require('lodash');

class Calculator {
    constructor() {
        const self = this;

        function initializeRegistry() {
            //todo: register alternate operands (like 'add');
            const registry = new Registry();
            registry.registerHandler('+', require('./operators/addition-operator'));
            registry.registerHandler('*', require('./operators/multiplication-operator'));
            registry.registerHandler('x', require('./operators/multiplication-operator'));
            registry.registerHandler('/', require('./operators/division-operator'));
            registry.registerHandler('-', require('./operators/subtraction-operator'));
            registry.registerHandler('||', require('./operators/absolute-operator'));
            registry.registerHandler('min', require('./operators/min-operator'));
            registry.registerHandler('max', require('./operators/max-operator'));
            registry.registerHandler('average', require('./operators/average-operator'));
            registry.registerHandler('ave', require('./operators/average-operator'));
            registry.registerHandler('c', require('./operators/clear-operator'));
            registry.registerHandler('clear', require('./operators/clear-operator'));
            registry.registerHandler('fib', require('./operators/fibonacci-operator'));
            registry.registerHandler('!', require('./operators/factorial-operator'));
            registry.registerHandler('sum', require('./operators/sum-operator'));
            registry.registerHandler('reverse', require('./operators/reverse-operator'));
            registry.registerHandler('√', require('./operators/squareroot-operator'));
            registry.registerHandler('squareroot', require('./operators/squareroot-operator'));
            registry.registerHandler('double', require('./operators/double-operator'));
            registry.registerHandler('pi', require('./operators/pi-operator'));
            registry.registerHandler('π', require('./operators/pi-operator'));
            return registry;
        }

        self.numbers = new RpnStack();
        self.operatorRegistry = initializeRegistry();

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
            throw new Error('Cannot enter non-numeric values');
        }

        self.numbers.push(operand);

        return operand;
    }

    perform(operatorCharacter) {
        const self = this;
        const operator = self.operatorRegistry.getOperatorMethod(operatorCharacter);

        if (!operator) {
            throw new Error('Unknown operator \'' + operatorCharacter + '\'');
        }

        let result = operator(self.numbers);
        return result;

    }

    calculate(buffer) {
        const self = this;
        let lastResult = 0;

        let bufferArray = buffer.split(' ');
        _.each(bufferArray, function (value) {
            lastResult = self.enterValue(value);
        });
        return lastResult;
    }

    enterValue(value) {
        function isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        if (value === '') {
            return 0;
        }
        else if (isNumber(value)) {
            return this.enter(Number(value));
        } else {
            return this.perform(value);
        }
    }

}

module.exports = Calculator;