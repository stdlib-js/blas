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

// MAIN //

/**
* Adds a constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - constant
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = dapxsumors( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/
function dapxsumors( N, alpha, x, stride, offset ) {
	var sum;
	var ix;
	var i;

	if ( N <= 0 ) {
		return 0.0;
	}
	if ( N === 1 || stride === 0 ) {
		return alpha + x[ 0 ];
	}
	ix = offset;
	sum = 0.0;
	for ( i = 0; i < N; i++ ) {
		sum += alpha + x[ ix ];
		ix += stride;
	}
	return sum;
}


// EXPORTS //

module.exports = dapxsumors;
