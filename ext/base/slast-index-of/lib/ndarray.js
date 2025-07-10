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

var sindexOf = require( './../../../../ext/base/sindex-of' ).ndarray;


// MAIN //

/**
* Returns the last index of a specified search element in a single-precision floating-point strided array using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} searchElement - search element
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {integer} index
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );
*
* var idx = slastIndexOf( x.length, 3.0, x, 1, 0 );
* // returns 7
*/
function slastIndexOf( N, searchElement, x, strideX, offsetX ) {
	var idx;
	if ( N <= 0 ) {
		return -1;
	}
	// Reverse the iteration order by flipping the stride and adjusting the offset:
	offsetX += ( N-1 ) * strideX;
	strideX *= -1;

	// Find the index of the search element in the reversed "view":
	idx = sindexOf( N, searchElement, x, strideX, offsetX );
	if ( idx < 0 ) {
		return idx;
	}
	// Convert the index from reversed "view" to an index in the original "view":
	idx = N - 1 - idx;
	return idx;
}


// EXPORTS //

module.exports = slastIndexOf;
