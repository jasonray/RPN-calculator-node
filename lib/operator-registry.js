/*jslint node: true */
'use strict';

class Registry {
    constructor() {
        const self = this;
        self.handlers = {};
    }

    registerHandler(operatorCharacter, operatorMethod) {
        const self = this;
        self.handlers[operatorCharacter.toLowerCase()] = operatorMethod;
    }

    getOperatorMethod(operatorCharacter) {
        const self = this;
        const handler = self.handlers[operatorCharacter.toLowerCase()];
        if (typeof handler === 'function') {
            return handler;
        } else if (typeof handler === 'object') {
            return handler.doOperation;
        } else {
            return null;
        }
    }
}

module.exports = Registry;