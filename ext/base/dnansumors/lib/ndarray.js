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

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
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
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = dnansumors( 5, x, 2, 1 );
* // returns 5.0
*/
function dnansumors( N, x, strideX, offsetX ) {
	var sum;
	var ix;
	var v;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnan( x[ ix ] ) ) {
			return 0.0;
		}
		return x[ ix ] * N;
	}
	// Find the first non-NaN element...
	for ( i = 0; i < N; i++ ) {
		v = x[ ix ];
		if ( isnan( v ) === false ) {
			break;
		}
		ix += strideX;
	}
	if ( i === N ) {
		return 0.0;
	}
	sum = v;
	ix += strideX;
	i += 1;
	for ( ; i < N; i++ ) {
		if ( isnan( x[ ix ] ) === false ) {
			sum += x[ ix ];
		}
		ix += strideX;
	}
	return sum;
}


// EXPORTS //

module.exports = dnansumors;
