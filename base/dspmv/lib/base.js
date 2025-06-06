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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major-string' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var dfill = require( './../../../ext/base/dfill' ).ndarray;
var dscal = require( './../../../base/dscal' ).ndarray;


// MAIN //

/**
* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @private
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} AP - packed form of a symmetric matrix `A`
* @param {NonNegativeInteger} offsetAP - starting `AP` index
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {number} beta - scalar constant
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );
*
* dspmv( 'column-major', 'lower', 3, 1.0, AP, 0, x, 1, 0, 1.0, y, 1, 0 );
* // y => <Float64Array>[ ~7.0, ~12.0, ~15.0 ]
*/
function dspmv( order, uplo, N, alpha, AP, offsetAP, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
	var temp1;
	var temp2;
	var ix;
	var iy;
	var jx;
	var jy;
	var kk;
	var kx;
	var ky;
	var j;
	var k;

	if ( N === 0 || ( alpha === 0.0 && beta === 1.0 ) ) {
		return y;
	}
	// Form: y = beta*y
	if ( beta !== 1.0 ) {
		if ( beta === 0.0 ) {
			dfill( N, 0.0, y, strideY, offsetY );
		} else {
			dscal( N, beta, y, strideY, offsetY );
		}
	}
	if ( alpha === 0.0 ) {
		return y;
	}
	// Form: y = alpha*A*x + y
	kx = offsetX;
	ky = offsetY;
	kk = offsetAP;
	if (
		( isRowMajor( order ) && uplo === 'upper' ) ||
		( isColumnMajor( order ) && uplo === 'lower' )
	) {
		jx = kx;
		jy = ky;
		for ( j = 0; j < N; j++ ) {
			temp1 = alpha * x[ jx ];
			temp2 = 0.0;
			y[ jy ] += temp1 * AP[ kk ];
			ix = jx;
			iy = jy;
			for ( k = kk + 1; k < kk + N - j; k++ ) {
				ix += strideX;
				iy += strideY;
				y[ iy ] += temp1 * AP[ k ];
				temp2 += AP[ k ] * x[ ix ];
			}
			y[ jy ] += alpha * temp2;
			jx += strideX;
			jy += strideY;
			kk += N - j;
		}
		return y;
	}
	// ( order === 'row-major' && uplo === 'lower') || ( order === 'column-major' && uplo === 'upper' )
	jx = kx;
	jy = ky;
	for ( j = 0; j < N; j++ ) {
		temp1 = alpha * x[ jx ];
		temp2 = 0.0;
		ix = kx;
		iy = ky;
		for ( k = kk; k < kk + j; k++ ) {
			y[ iy ] += temp1 * AP[ k ];
			temp2 += AP[ k ] * x[ ix ];
			ix += strideX;
			iy += strideY;
		}
		y[ jy ] += ( temp1 * AP[ kk + j ] ) + ( alpha * temp2 );
		jx += strideX;
		jy += strideY;
		kk += j + 1;
	}
	return y;
}


// EXPORTS //

module.exports = dspmv;
