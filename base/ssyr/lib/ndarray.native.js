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

var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var resolveUplo = require( './../../../base/matrix-triangle-resolve-enum' );
var format = require( '@stdlib/string/format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A`.
*
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float32Array} x - input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @throws {TypeError} first argument must specify whether to reference the lower or upper triangular matrix
* @throws {RangeError} second argument must be a nonnegative integer
* @throws {RangeError} fifth argument must be non-zero
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} ninth argument must be non-zero
* @returns {Float32Array} `A`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 2.0, 1.0, 2.0 ], [ 3.0, 2.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* ssyr( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
* // A => <Float32Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
*/
function ssyr( uplo, N, alpha, x, strideX, offsetX, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-len
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( format( 'invalid argument. First argument must specify whether to reference the lower or upper triangular matrix. Value: `%s`.', uplo ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideA1 === 0 ) {
		throw new RangeError( format( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideA1 ) );
	}
	if ( strideA2 === 0 ) {
		throw new RangeError( format( 'invalid argument. Ninth argument must be non-zero. Value: `%d`.', strideA2 ) );
	}
	// Check if we can early return...
	if ( N === 0 || alpha === 0.0 ) {
		return A;
	}
	addon.ndarray( resolveUplo( uplo ), N, alpha, x, strideX, offsetX, A, strideA1, strideA2, offsetA ); // eslint-disable-line max-len
	return A;
}


// EXPORTS //

module.exports = ssyr;
