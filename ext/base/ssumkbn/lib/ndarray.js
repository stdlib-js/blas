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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var absf = require( '@stdlib/math/base/special/absf' );


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.
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
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = ssumkbn( 4, x, 2, 1 );
* // returns 5.0
*/
function ssumkbn( N, x, strideX, offsetX ) {
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
		return f32( N * x[ ix ] );
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
			sum = f32( sum + v );
			ix += strideX;
		}
	} else {
		flg = true;
		i = 1;
	}
	c = 0.0;
	for ( ; i < N; i++ ) {
		v = x[ ix ];
		t = f32( sum + v );
		if ( absf( sum ) >= absf( v ) ) {
			c = f32( c + f32( f32( sum-t ) + v ) );
		} else {
			c = f32( c + f32( f32( v-t ) + sum ) );
		}
		sum = t;
		ix += strideX;
	}
	return ( flg ) ? f32( sum+c ) : sum;
}


// EXPORTS //

module.exports = ssumkbn;
