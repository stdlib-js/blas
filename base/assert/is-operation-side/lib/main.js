/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var operationSides = require( './../../../../base/operation-sides' );


// MAIN //

/**
* Tests whether an input value is a BLAS operation side.
*
* @name isOperationSide
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is an operation side
*
* @example
* var bool = isOperationSide( 'right' );
* // returns true
*
* bool = isOperationSide( 'left' );
* // returns true
*
* bool = isOperationSide( 'foo' );
* // returns false
*/
var isOperationSide = contains( operationSides() );


// EXPORTS //

module.exports = isOperationSide;
