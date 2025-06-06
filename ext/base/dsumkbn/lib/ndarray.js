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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
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
* var v = dsumkbn( 4, x, 2, 1 );
* // returns 5.0
*/
function dsumkbn( N, x, strideX, offsetX ) {
	var sum;
	var flg;
	var ix;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		return N * x[ ix ];
	}
	v = x[ ix ];
	ix += strideX;
	sum = v;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( sum === 0.0 ) {
		for ( i = 1; i < N; i++ ) {
			v = x[ ix ];
			if ( v !== 0.0 ) {
				flg = true;
				break;
			}
			sum += v;
			ix += strideX;
		}
	} else {
		flg = true;
		i = 1;
	}
	c = 0.0;
	for ( ; i < N; i++ ) {
		v = x[ ix ];
		t = sum + v;
		if ( abs( sum ) >= abs( v ) ) {
			c += (sum-t) + v;
		} else {
			c += (v-t) + sum;
		}
		sum = t;
		ix += strideX;
	}
	return ( flg ) ? sum + c : sum;
}


// EXPORTS //

module.exports = dsumkbn;
