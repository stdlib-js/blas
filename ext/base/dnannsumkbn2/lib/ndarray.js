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
var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
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
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var out = new Float64Array( 2 );
*
* var v = dnannsumkbn2( 5, x, 2, 1, out, 1, 0 );
* // returns <Float64Array>[ 5.0, 4 ]
*/
function dnannsumkbn2( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var sum;
	var ccs;
	var flg;
	var cs;
	var cc;
	var ix;
	var io;
	var v;
	var t;
	var c;
	var n;
	var i;

	io = offsetOut;
	if ( N <= 0 ) {
		out[ io ] = 0.0;
		out[ io+strideOut ] = 0;
		return out;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnan( x[ ix ] ) ) {
			out[ io ] = 0.0;
			out[ io+strideOut ] = 0;
			return out;
		}
		out[ io ] = x[ ix ] * N;
		out[ io+strideOut ] = N;
		return out;
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
		out[ io ] = 0.0;
		out[ io+strideOut ] = 0;
		return out;
	}
	n = 1;
	sum = v;
	ix += strideX;
	i += 1;

	// In order to preserve the sign of zero which can be lost during compensated summation below, find the first non-zero element...
	if ( sum === 0.0 ) {
		for ( ; i < N; i++ ) {
			v = x[ ix ];
			if ( isnan( v ) === false ) {
				if ( v !== 0.0 ) {
					flg = true;
					break;
				}
				sum += v;
				n += 1;
			}
			ix += strideX;
		}
	} else {
		flg = true;
	}
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( ; i < N; i++ ) {
		v = x[ ix ];
		if ( isnan( v ) === false ) {
			t = sum + v;
			if ( abs( sum ) >= abs( v ) ) {
				c = (sum-t) + v;
			} else {
				c = (v-t) + sum;
			}
			sum = t;
			t = cs + c;
			if ( abs( cs ) >= abs( c ) ) {
				cc = (cs-t) + c;
			} else {
				cc = (c-t) + cs;
			}
			cs = t;
			ccs += cc;
			n += 1;
		}
		ix += strideX;
	}
	out[ io ] = ( flg ) ? sum+cs+ccs : sum;
	out[ io+strideOut ] = n;
	return out;
}


// EXPORTS //

module.exports = dnannsumkbn2;
