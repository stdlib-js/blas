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

var gfindIndex = require( './../../../../ext/base/gfind-index' ).ndarray;


// MAIN //

/**
* Returns the index of the last element which passes a test implemented by a predicate function.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - execution context
* @returns {integer} index
*
* @example
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 3.0, -2.0, -3.0 ];
*
* var idx = gfindLastIndex( x.length, x, 1, 0, isEven );
* // returns 5
*/
function gfindLastIndex( N, x, strideX, offsetX, clbk, thisArg ) {
	var idx;

	if ( N <= 0 ) {
		return -1;
	}
	// Reverse the iteration order by flipping the stride and adjusting the offset:
	offsetX += ( N-1 ) * strideX;
	strideX *= -1;

	// Find the index of the search element in the reversed "view":
	idx = gfindIndex( N, x, strideX, offsetX, clbk, thisArg );
	if ( idx < 0 ) {
		return idx;
	}
	// Convert the index from the reversed "view" to an index in the original "view":
	idx = N - 1 - idx;
	return idx;
}


// EXPORTS //

module.exports = gfindLastIndex;
