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
var accessors = require( './accessors.js' );


// VARIABLES //

var M = 5;


// MAIN //

/**
* Computes the dot product of `x` and `y`.
*
* @param {integer} N - number of indexed elements
* @param {NumericArray} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {number} dot product
*
* @example
* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];

* var z = gdot( x.length, x, 1, 0, y, 1, 0 );
* // returns -5.0
*/
function gdot( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var dot;
	var ix;
	var iy;
	var ox;
	var oy;
	var m;
	var i;

	dot = 0.0;
	if ( N <= 0 ) {
		return dot;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		return accessors( N, ox, strideX, offsetX, oy, strideY, offsetY );
	}
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				dot += ( x[ ix ] * y[ iy ] );
				ix += 1;
				iy += 1;
			}
		}
		if ( N < M ) {
			return dot;
		}
		for ( i = m; i < N; i += M ) {
			dot += ( x[ix]*y[iy] ) + ( x[ix+1]*y[iy+1] ) + ( x[ix+2]*y[iy+2] ) + ( x[ix+3]*y[iy+3] ) + ( x[ix+4]*y[iy+4] ); // eslint-disable-line max-len
			ix += M;
			iy += M;
		}
		return dot;
	}
	for ( i = 0; i < N; i++ ) {
		dot += x[ ix ] * y[ iy ];
		ix += strideX;
		iy += strideY;
	}
	return dot;
}


// EXPORTS //

module.exports = gdot;
