function registry() {
	var handlers = {};

	this.registerHandler = function(operatorCharacter, operatorMethod) {
		operatorCharacter = operatorCharacter.toLowerCase();
		handlers[operatorCharacter] = operatorMethod;
	}

	this.getOperatorMethod = function(operatorCharacter) {
		operatorCharacter = operatorCharacter.toLowerCase();
		var handler = handlers[operatorCharacter];
		if (typeof handler === 'function') {
			return handler;
		} else if (typeof handler === 'object') {
			return handle[operatorCharacter].doOperation;
		} else {
			console.log("return null");
			return null;
		}
	}

}

exports.registry = registry;