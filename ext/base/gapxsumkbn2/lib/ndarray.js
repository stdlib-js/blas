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
* Adds a scalar constant to each strided array element and computes the sum using a second-order iterative Kahan–Babuška algorithm.
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
* @param {number} alpha - scalar constant
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = gapxsumkbn2( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/
function gapxsumkbn2( N, alpha, x, strideX, offsetX ) {
	var sum;
	var ccs;
	var ix;
	var cs;
	var cc;
	var v;
	var t;
	var c;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		return N * ( alpha + x[ ix ] );
	}
	sum = 0.0;
	ccs = 0.0; // second order correction term for lost low order bits
	cs = 0.0; // first order correction term for lost low order bits
	for ( i = 0; i < N; i++ ) {
		v = alpha + x[ ix ];
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
		ix += strideX;
	}
	return sum + cs + ccs;
}


// EXPORTS //

module.exports = gapxsumkbn2;
