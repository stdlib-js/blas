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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - output array
* @param {integer} strideY - stride length `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, NaN, NaN ] );
* var y = new Float64Array( x.length );
*
* var v = dnancusumkbn( 4, 0.0, x, 2, 1, y, 1, 0 );
* // returns <Float64Array>[ 1.0, -1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function dnancusumkbn( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var s;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	s = sum;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( s === 0.0 ) {
		for ( i = 0; i < N; i++ ) {
			v = x[ ix ];
			if ( isnan( v ) ) {
				y[ iy ] = s;
				ix += strideX;
				iy += strideY;
				continue;
			}
			if ( v !== 0.0 ) {
				break;
			}
			s += v;
			y[ iy ] = s;
			ix += strideX;
			iy += strideY;
		}
	} else {
		i = 0;
	}
	c = 0.0;
	for ( ; i < N; i++ ) {
		v = x[ ix ];
		if ( isnan( v ) ) {
			y[ iy ] = s + c;
			ix += strideX;
			iy += strideY;
			continue;
		}
		t = s + v;
		if ( abs( s ) >= abs( v ) ) {
			c += (s-t) + v;
		} else {
			c += (v-t) + s;
		}
		s = t;
		y[ iy ] = s + c;
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = dnancusumkbn;
