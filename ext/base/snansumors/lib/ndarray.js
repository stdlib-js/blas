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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );


// MAIN //

/**
* Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
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
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = snansumors( 5, x, 2, 1 );
* // returns 5.0
*/
function snansumors( N, x, strideX, offsetX ) {
	var sum;
	var ix;
	var i;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	ix = offsetX;
	if ( strideX === 0 ) {
		if ( isnanf( x[ ix ] ) ) {
			return sum;
		}
		return N * x[ ix ];
	}
	for ( i = 0; i < N; i++ ) {
		if ( isnanf( x[ ix ] ) === false ) {
			sum = f32( sum + x[ ix ] );
		}
		ix += strideX;
	}
	return sum;
}


// EXPORTS //

module.exports = snansumors;
