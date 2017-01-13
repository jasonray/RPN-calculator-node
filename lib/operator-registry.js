/*jslint node: true */
'use strict';

class Registry {
    constructor() {
        var self = this;
        self.handlers = {};
    }

    registerHandler(operatorCharacter, operatorMethod) {
        var self = this;
        self.handlers[operatorCharacter.toLowerCase()] = operatorMethod;
    }

    getOperatorMethod(operatorCharacter) {
        var self = this;
        var handler = self.handlers[operatorCharacter.toLowerCase()];
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