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

var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
*
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {NumericArray} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {NumericArray} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @throws {RangeError} first argument must be a nonnegative integer
* @throws {RangeError} second argument must be a nonnegative integer
* @throws {RangeError} fifth argument must be non-zero
* @throws {RangeError} eighth argument must be non-zero
* @returns {NumericArray} `A`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
function gger( M, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ) { // eslint-disable-line max-params, max-len
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%d`.', M ) );
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
	// Check if we can early return...
	if ( M === 0 || N === 0 || alpha === 0.0 ) {
		return A;
	}
	return base( M, N, alpha, x, strideX, offsetX, y, strideY, offsetY, A, strideA1, strideA2, offsetA ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gger;
