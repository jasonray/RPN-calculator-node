/*jslint node: true */
'use strict';

function Registry() {
    var self = this;
    self.handlers = {};
}

Registry.prototype.registerHandler = function(operatorCharacter, operatorMethod) {
    var self = this;
    self.handlers[operatorCharacter.toLowerCase()] = operatorMethod;
};

Registry.prototype.getOperatorMethod = function(operatorCharacter) {
    var self = this;
    var handler = self.handlers[operatorCharacter.toLowerCase()];
    if (typeof handler === 'function') {
        return handler;
    } else if (typeof handler === 'object') {
        return handler.doOperation;
    } else {
        return null;
    }
};

module.exports = Registry;