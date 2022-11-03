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

// VARIABLES //

var M = 5;


// MAIN //

/**
* Multiplies `x` by a scalar `alpha`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {NumericArray} x - input array
* @param {PositiveInteger} stride - index increment
* @returns {NumericArray} input array
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gscal( x.length, 5.0, x, 1 );
* // x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
*/
function gscal( N, alpha, x, stride ) {
	var m;
	var i;

	if ( N <= 0 || stride <= 0|| alpha === 1.0 ) {
		return x;
	}
	// Use loop unrolling if the stride is equal to `1`...
	if ( stride === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i += 1 ) {
				x[ i ] *= alpha;
			}
		}
		if ( N < M ) {
			return x;
		}
		for ( i = m; i < N; i += M ) {
			x[ i ] *= alpha;
			x[ i+1 ] *= alpha;
			x[ i+2 ] *= alpha;
			x[ i+3 ] *= alpha;
			x[ i+4 ] *= alpha;
		}
		return x;
	}
	N *= stride;
	for ( i = 0; i < N; i += stride ) {
		x[ i ] *= alpha;
	}
	return x;
}


// EXPORTS //

module.exports = gscal;
