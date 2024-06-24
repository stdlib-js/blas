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
var max = require( '@stdlib/math/base/special/max' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var isLayout = require( './../../../base/assert/is-layout' );
var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );


// MAIN //

/**
* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float32Array} A - matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {number} beta - scalar constant
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether to reference the lower or upper triangular matrix
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} sixth argument must be greater than or equal to max(1,N)
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} twelfth argument must be non-zero
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0 ] );
*
* ssymv( 'row-major', 'lower', 3, 1.0, A, 3, x, 1, 0, 0.0, y, 1, 0 );
* // y => <Float32Array>[ 1.0, 2.0, 3.0 ]
*/
function ssymv( order, uplo, N, alpha, A, LDA, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
	var temp1;
	var temp2;
	var jmin;
	var jmax;
	var ix;
	var iy;
	var jx;
	var jy;
	var ox;
	var oy;
	var i;
	var j;
	var k;

	if ( !isLayout( order ) ) {
		throw new TypeError( 'invalid argument. First argument must be a valid order. Value: `%s`.', order );
	}
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( 'invalid argument. Second argument must specify whether to reference the lower or upper triangular matrix. Value: `%s`.', uplo );
	}
	if ( N < 0 ) {
		throw new RangeError( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N );
	}
	if ( LDA < max( 1, N ) ) {
		throw new RangeError( 'invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.', N, LDA );
	}
	if ( strideX === 0 ) {
		throw new RangeError( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideX );
	}
	if ( strideY === 0 ) {
		throw new RangeError( 'invalid argument. Twelfth argument must be non-zero. Value: `%d`.', strideY );
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
	ox = offsetX;
	oy = offsetY;

	// Form: y = alpha*A*x + y
	if (
		( order === 'row-major' && uplo === 'upper' ) ||
		( order === 'column-major' && uplo === 'lower' )
	) {
		ix = ox;
		iy = oy;
		for ( i = 0; i < N; i++ ) {
			temp1 = f32( alpha * x[ ix ] );
			temp2 = 0.0;
			jmin = i + 1;
			jmax = N;
			jx = ox + ( jmin*strideX );
			jy = oy + ( jmin*strideY );
			y[ iy ] += f32( temp1 * A[(LDA*i)+i] );
			for ( j = jmin; j < jmax; j++ ) {
				k = ( LDA*i ) + j;
				y[ jy ] += f32( temp1 * A[k] );
				temp2 = f32( temp2 + f32( x[jx] * A[k] ) );
				jx += strideX;
				jy += strideY;
			}
			y[ iy ] += f32( alpha * temp2 );
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	// ( order === 'row-major' && uplo === 'lower') || ( order === 'column-major' && uplo === 'upper' )
	ix = ox + ( (N-1)*strideX );
	iy = oy + ( (N-1)*strideY );
	for ( i = N-1; i >= 0; i-- ) {
		temp1 = f32( alpha * x[ ix ] );
		temp2 = 0.0;
		jmin = 0;
		jmax = i;
		jx = ox + ( jmin*strideX );
		jy = oy + ( jmin*strideY );
		y[ iy ] += f32( temp1 * A[(LDA*i)+i] );
		for ( j = jmin; j < jmax; j++ ) {
			k = ( LDA*i ) + j;
			y[ jy ] += f32( temp1 * A[k] );
			temp2 = f32( temp2 + f32( x[jx] * A[k] ) );
			jx += strideX;
			jy += strideY;
		}
		y[ iy ] += f32( alpha * temp2 );
		ix -= strideX;
		iy -= strideY;
	}
	return y;
}


// EXPORTS //

module.exports = ssymv;
