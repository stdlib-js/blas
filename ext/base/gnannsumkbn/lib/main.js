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
* Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* ## Method
*
* -   This implementation uses an "improved Kahan–Babuška algorithm", as described by Neumaier (1974).
*
* ## References
*
* -   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106](https://doi.org/10.1002/zamm.19740540106).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NumericArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, -2.0, NaN, 2.0 ];
* var out = [ 0.0, 0 ];
*
* var v = gnannsumkbn( x.length, x, 1, out, 1 );
* // returns [ 1.0, 3 ]
*/
function gnannsumkbn( N, x, strideX, out, strideOut ) {
	var ix = stride2offset( N, strideX );
	var io = stride2offset( 2, strideOut );
	return ndarray( N, x, strideX, ix, out, strideOut, io );
}


// EXPORTS //

module.exports = gnannsumkbn;
