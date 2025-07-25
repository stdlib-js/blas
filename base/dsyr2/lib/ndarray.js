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

var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @throws {TypeError} first argument must specify whether to reference the lower or upper triangular matrix
* @throws {RangeError} second argument must be a nonnegative integer
* @throws {RangeError} fifth argument must be non-zero
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} eleventh argument must be non-zero
* @throws {RangeError} twelfth argument must be non-zero
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ]
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dsyr2( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
* // A => <Float64Array>[ 3.0, 6.0, 9.0, 2.0, 9.0, 14.0, 3.0, 2.0, 19.0 ]
*/
function dsyr2( uplo, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len, max-params
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( format( 'invalid argument. First argument must specify whether the reference the lower or upper triangular matrix. Value: `%s`.', uplo ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideY === 0 ) {
		throw new RangeError( format( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideY ) );
	}
	if ( strideA1 === 0 ) {
		throw new RangeError( format( 'invalid argument. Eleventh argument must be non-zero. Value: `%d`.', strideA1 ) );
	}
	if ( strideA2 === 0 ) {
		throw new RangeError( format( 'invalid argument. Twelfth argument must be non-zero. Value: `%d`.', strideA2 ) );
	}
	// Check if we can early return...
	if ( N === 0 || alpha === 0.0 ) {
		return A;
	}
	return base( uplo, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dsyr2;
