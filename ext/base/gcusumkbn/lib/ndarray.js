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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var abs = require( '@stdlib/math/base/special/abs' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.
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
* @param {number} sum - initial sum
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - output array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} output array
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcusumkbn( 4, 0.0, x, 2, 1, y, 1, 0 );
* // y => [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function gcusumkbn( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var ox;
	var oy;
	var s;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return y;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, sum, ox, strideX, offsetX, oy, strideY, offsetY );
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	s = sum;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( s === 0.0 ) {
		for ( i = 0; i < N; i++ ) {
			v = x[ ix ];
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

module.exports = gcusumkbn;
