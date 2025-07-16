/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isLayout = require( './../../../base/assert/is-layout' );
var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var resolveOrder = require( './../../../base/layout-resolve-enum' );
var resolveUplo = require( './../../../base/matrix-triangle-resolve-enum' );
var max = require( '@stdlib/math/base/special/fast/max' );
var format = require( '@stdlib/string/format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {Float64Array} A - input matrix
* @param {integer} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether to reference the lower or upper triangular matrix
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} sixth argument must be non-zero
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} tenth argument must be a valid stride
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ]
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dsyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
* // A => <Float64Array>[ 3.0, 6.0, 9.0, 2.0, 9.0, 14.0, 3.0, 2.0, 19.0 ]
*/
function dsyr2( order, uplo, N, alpha, x, strideX, y, strideY, A, LDA ) {
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must specify whether to reference the lower or upper triangular matrix. Value: `%s`.', uplo ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Sixth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideY === 0 ) {
		throw new RangeError( format( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( LDA < max( 1, N ) ) {
		throw new RangeError( format( 'invalid argument. Tenth argument must be greater than or equal to max(1,%d). Value: `%d`.', N, LDA ) );
	}
	// Check if we can early return...
	if ( N === 0 || alpha === 0.0 ) {
		return A;
	}
	addon( resolveOrder( order ), resolveUplo( uplo ), N, alpha, x, strideX, y, strideY, A, LDA ); // eslint-disable-line max-len
	return A;
}


// EXPORTS //

module.exports = dsyr2;
