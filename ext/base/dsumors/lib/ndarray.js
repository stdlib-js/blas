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

var M = 6;


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dsumors( 4, x, 2, 1 );
* // returns 5.0
*/
function dsumors( N, x, strideX, offsetX ) {
	var sum;
	var ix;
	var m;
	var i;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		return N * x[ ix ];
	}

	// If the stride is equal to `1`, use unrolled loops...
	if ( strideX === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				sum += x[ ix ];
				ix += strideX;
			}
		}
		if ( N < M ) {
			return sum;
		}
		for ( i = m; i < N; i += M ) {
			sum += x[ix] + x[ix+1] + x[ix+2] + x[ix+3] + x[ix+4] + x[ix+5];
			ix += M;
		}
		return sum;
	}
	for ( i = 0; i < N; i++ ) {
		sum += x[ ix ];
		ix += strideX;
	}
	return sum;
}


// EXPORTS //

module.exports = dsumors;
