/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Computes the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses a second-order iterative Kahan–Babuška algorithm, as described by Klein (2005).
*
* ## References
*
* -   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x](https://doi.org/10.1007/s00607-005-0139-x).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NumericArray} y - output array
* @param {integer} strideY - stride length for `y`
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
* var y = [ 0.0, 0.0, 0.0 ];
*
* var v = gcusumkbn2( x.length, 0.0, x, 1, y, 1 );
* // returns [ 1.0, -1.0, 1.0 ]
*/
function gcusumkbn2( N, sum, x, strideX, y, strideY ) {
	var ox = stride2offset( N, strideX );
	var oy = stride2offset( N, strideY );
	return ndarray( N, sum, x, strideX, ox, y, strideY, oy );
}


// EXPORTS //

module.exports = gcusumkbn2;
