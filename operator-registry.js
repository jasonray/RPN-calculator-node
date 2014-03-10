var rpnstack = require("./rpn-stack");

var registry = new Array();
registry.push( require("./operators/addition-operator") );
registry.push( require("./operators/subtraction-operator") );
registry.push( require("./operators/absolute-operator") );
registry.push( require("./operators/average-operator") );
registry.push( require("./operators/clear-operator") );
registry.push( require("./operators/factorial-operator") );
registry.push( require("./operators/fibonacci-operator") );

function getOperator(operatorCharacter) {
	var relevantOperator = null;
	if (operatorCharacter!=null) {
		for (var i = 0; i < registry.length; i++) {
    		var operator = registry[i];
    		if (operator.handlesOperatorCharacter(operatorCharacter)) {
    			relevantOperator = operator;
    		}
		}
	}
	return relevantOperator;
}

exports.getOperator = getOperator;
