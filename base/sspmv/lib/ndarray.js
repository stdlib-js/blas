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

var sfill = require( './../../../ext/base/sfill' ).ndarray;
var sscal = require( './../../../base/sscal' ).ndarray;
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var isLayout = require( './../../../base/assert/is-layout' );
var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major-string' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );


// MAIN //

/**
* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float32Array} AP - packed form of a symmetric matrix `A`
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {number} beta - scalar constant
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether the lower or upper triangular matrix is supplied
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} seventh argument must be non-zero
* @throws {RangeError} eleventh argument must be non-zero
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
*
* sspmv( 'column-major', 'lower', 3, 1.0, A, x, 1, 0, 1.0, y, 1, 0 );
* // y => <Float32Array>[ ~7.0, ~12.0, ~15.0 ]
*/
function sspmv( order, uplo, N, alpha, AP, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
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

	if ( !isLayout( order ) ) {
		throw new TypeError( 'invalid argument. First argument must be a valid order. Value: `%s`.', order );
	}
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( 'invalid argument. Second argument must specify whether the lower or upper triangular matrix is supplied. Value: `%s`.', uplo );
	}
	if ( N < 0 ) {
		throw new RangeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N );
	}
	if ( strideX === 0 ) {
		throw new RangeError( 'invalid argument. Seventh argument must be non-zero. Value: `%d`.', strideX );
	}
	if ( strideY === 0 ) {
		throw new RangeError( 'invalid argument. Eleventh argument must be non-zero. Value: `%d`.', strideY );
	}
	if ( N === 0 || ( alpha === 0.0 && beta === 1.0 ) ) {
		return y;
	}
	// Form: y = beta*y
	if ( beta !== 1.0 ) {
		if ( beta === 0.0 ) {
			sfill( N, 0.0, y, strideY, offsetY );
		} else {
			sscal( N, beta, y, strideY, offsetY );
		}
	}
	if ( alpha === 0.0 ) {
		return y;
	}
	// Form: y = alpha*A*x + y
	kx = offsetX;
	ky = offsetY;
	kk = 0;
	if (
		( isRowMajor( order ) && uplo === 'upper' ) ||
		( isColumnMajor( order ) && uplo === 'lower' )
	) {
		jx = kx;
		jy = ky;
		for ( j = 0; j < N; j++ ) {
			temp1 = f32( alpha * x[ jx ] );
			temp2 = 0.0;
			y[ jy ] += f32( temp1 * AP[ kk ] );
			ix = jx;
			iy = jy;
			for ( k = kk + 1; k < kk + N - j; k++ ) {
				ix += strideX;
				iy += strideY;
				y[ iy ] += f32( temp1 * AP[ k ] );
				temp2 += f32( AP[ k ] * x[ ix ] );
			}
			y[ jy ] += f32( alpha * temp2 );
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
		temp1 = f32( alpha * x[ jx ] );
		temp2 = 0.0;
		ix = kx;
		iy = ky;
		for ( k = kk; k < kk + j; k++ ) {
			y[ iy ] += f32( temp1 * AP[ k ] );
			temp2 += f32( AP[ k ] * x[ ix ] );
			ix += strideX;
			iy += strideY;
		}
		y[ jy ] += f32( f32( temp1 * AP[ kk + j ] ) + f32( alpha * temp2 ) );
		jx += strideX;
		jy += strideY;
		kk += j + 1;
	}
	return y;
}


// EXPORTS //

module.exports = sspmv;
