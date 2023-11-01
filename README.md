# RPN-calculator-js

[![Node.js CI](https://github.com/jasonray/RPN-calculator-node/actions/workflows/node.js.yml/badge.svg)](https://github.com/jasonray/RPN-calculator-node/actions/workflows/node.js.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d5e3527df15c423f94eb0d9f50addb3d)](https://app.codacy.com/gh/jasonray/RPN-calculator-node/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

The [RPN](http://en.wikipedia.org/wiki/Reverse_Polish_notation) calculator implementation is a good exercise for working through a languages capabilities and exploring OO strategies.

I have done four variations of the RPN calculator as exploratory into languages: 
-   [java](https://github.com/jasonray/RPN-calculator) 
-   [scala](https://github.com/jasonray/RPN-calculator-scala)
-   [javascript / node.js](https://github.com/jasonray/RPN-calculator-node)
-   [python](https://github.com/jasonray/RPN-calculator-python)

## How to run
This implementation utilizes node.js and mocha.

### Prereqs
To install node.js, either download or install using brew
``` bash
brew install node
```

To install the node modules:
``` bash
npm install
```

### Run from command line
You can run the calculator from the command line by running:
``` bash
node calculator-commandline.js 1 2 +
```

Note that '\*' has unix command line meaning, so us 'x' or '\\\*' for multiplication.

``` bash
>node calculator-commandline.js 3 2 \*
result: 6
>node calculator-commandline.js 3 2 x
result: 6
```

### Unit Test
To run the unit tests, run the following shell script:
``` bash
npm test
```

## To add a new operator
1) Create a new operator implementation class.  Add this class to the `operators` directory.  Follow the conventation of `(operator name)-operator.js` (example: `addition-operator.js`).

2) The operator implementation class needs to implement a function `function(numbers)`, where numbers is an instance of RPN-stack.  The function is responsible for `pop`-ing the operands necessary to perform the operation, and `push`-ing the result back to the stack.  Either export this as `module.exports.doOperation` or `module.exports`

A sample base implementation for addition is shown below:

``` javascript
module.exports = function(numbers) {
	var rhs = numbers.pop();
	var lhs = numbers.pop();
	var result = lhs + rhs;
	numbers.push(result);
	return result;
};
```

3) Register operator in `operator-register.js`.  To do this, add the following statement: 
``` javascript
registry.registerHandler("+", require("./operators/addition-operator"));
```
