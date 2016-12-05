/*jslint node: true */
'use strict';

var Calculator = require('./calculator');

var calculator = new Calculator();
console.log("result: " + processCommandlineArgs(calculator));
console.log("post-stack: ", calculator.numbers.toString());

function processCommandlineArgs(calculator) {
    var result = 0;
    process.argv.forEach(function (val, index, array) {
        if (index === 0) {
            //this is likely 'node'
        } else if (index === 1) {
            //this is likely 'calculator.js'
        } else if (isNaN(val)) {
            result = calculator.perform(val);
        } else {
            result = calculator.enter(parseFloat(val, 10));
        }
    });
    return result;
}