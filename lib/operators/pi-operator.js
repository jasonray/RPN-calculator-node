/*jslint node: true */
'use strict';

const _ = require('underscore');
const monomialOperator = require('./monomial-operator');

module.exports = function (numbers) {
    function pi(n) {
        return 0;
    }

    return monomialOperator(numbers, pi);
};