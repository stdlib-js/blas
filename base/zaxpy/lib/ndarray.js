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
var muladd = require( '@stdlib/complex/float64/base/mul-add' ).assign;
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var dcabs1 = require( './../../../base/dcabs1' );


// MAIN //

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} alpha - scalar constant
* @param {Complex128Array} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {integer} offsetX - starting index for `x`
* @param {Complex128Array} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {integer} offsetY - starting index for `y`
* @returns {Complex128Array} second input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = new Complex128( 2.0, 2.0 );
*
* zaxpy( 3, alpha, x, 1, 0, y, 1, 0 );
* // y => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
*/
function zaxpy( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX;
	var viewY;
	var sx;
	var sy;
	var ix;
	var iy;
	var re;
	var im;
	var i;

	if ( N <= 0 || dcabs1( alpha ) === 0.0 ) {
		return y;
	}
	re = real( alpha );
	im = imag( alpha );
	viewX = reinterpret( x, 0 );
	viewY = reinterpret( y, 0 );
	sx = strideX * 2;
	sy = strideY * 2;
	ix = offsetX * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		muladd( re, im, viewX[ ix ], viewX[ ix+1 ], viewY[ iy ], viewY[ iy+1 ], viewY, 1, iy ); // eslint-disable-line max-len
		ix += sx;
		iy += sy;
	}
	return y;
}


// EXPORTS //

module.exports = zaxpy;
