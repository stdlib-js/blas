/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var cmul = require( '@stdlib/complex/float64/base/mul' ).assign;
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} za - constant
* @param {Complex128Array} zx - input array
* @param {integer} strideZX - `zx` stride length
* @param {NonNegativeInteger} offsetZX - starting `zx` index
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var za = new Complex128( 2.0, 2.0 );
*
* zscal( 3, za, zx, 1, 0 );
* // zx => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/
function zscal( N, za, zx, strideZX, offsetZX ) {
	var view;
	var re1;
	var im1;
	var re2;
	var im2;
	var sx;
	var ix;
	var i;

	if ( N <= 0 ) {
		return zx;
	}
	// Reinterpret the input array as a real-valued array of interleaved real and imaginary components:
	view = reinterpret( zx, 0 );

	// Adjust the stride and offset:
	sx = strideZX * 2;
	ix = offsetZX * 2;

	// Decompose the input scalar to real and imaginary components:
	re1 = real( za );
	im1 = imag( za );

	for ( i = 0; i < N; i++ ) {
		re2 = view[ ix ];
		im2 = view[ ix+1 ];
		cmul( re1, im1, re2, im2, view, 1, ix );
		ix += sx;
	}
	return zx;
}


// EXPORTS //

module.exports = zscal;
