'use strict';

function Registry() {
	var self = this;
	  self.handlers = {};
}

Registry.prototype.registerHandler = function(operatorCharacter, operatorMethod) {
		var self = this;
		operatorCharacter = operatorCharacter.toLowerCase();
		self.handlers[operatorCharacter] = operatorMethod;
	};

	Registry.prototype.getOperatorMethod = function(operatorCharacter) {
		var self = this;
		operatorCharacter = operatorCharacter.toLowerCase();
		var handler = self.handlers[operatorCharacter];
		if (typeof handler === 'function') {
			return handler;
		} else if (typeof handler === 'object') {
			return handle[operatorCharacter].doOperation;
		} else {
			console.log("return null");
			return null;
		}
	};

module.exports = Registry;