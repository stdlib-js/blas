/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Returns the last index of a specified search element in a double-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} searchElement - search element
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {integer} index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );
*
* var idx = dlastIndexOf( x.length, 3.0, x, 1 );
* // returns 7
*/
function dlastIndexOf( N, searchElement, x, strideX ) {
	return ndarray( N, searchElement, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = dlastIndexOf;
