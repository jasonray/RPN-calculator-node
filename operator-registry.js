function Registry() {
	var self = this;
	  self.handlers = {};


	this.getOperatorMethod = function(operatorCharacter) {
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

}

Registry.prototype.registerHandler = function(operatorCharacter, operatorMethod) {
		var self = this;
		operatorCharacter = operatorCharacter.toLowerCase();
		self.handlers[operatorCharacter] = operatorMethod;
	};


module.exports.registry = Registry;