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

var max = require( '@stdlib/math/base/special/fast/max' );
var isLayout = require( './../../../base/assert/is-layout' );
var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var isTransposeOperation = require( './../../../base/assert/is-transpose-operation' );
var isDiagonal = require( './../../../base/assert/is-diagonal-type' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Solves one of the systems of equations `A*x = b` or `A^T*x = b` where `b` and `x` are `N` element vectors and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether `A` is an upper or lower triangular matrix
* @param {string} trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {string} diag - specifies whether `A` has a unit diagonal
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {Float64Array} A - input matrix
* @param {integer} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float64Array} x - input vector
* @param {integer} strideX - `x` stride length
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether a lower or upper triangular matrix is supplied
* @throws {TypeError} third argument must be a valid transpose operation
* @throws {TypeError} fourth argument must be a valid diagonal type
* @throws {RangeError} fifth argument must be a nonnegative integer
* @throws {RangeError} seventh argument must be greater than or equal to max(1,N)
* @throws {RangeError} ninth argument must be non-zero
* @returns {Float64Array} `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
*
* dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, 1 );
* // x => <Float64Array>[ 0.0, -4.0, 3.0 ]
*/
function dtrsv( order, uplo, trans, diag, N, A, LDA, x, strideX ) {
	var sa1;
	var sa2;
	var ox;

	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must specify whether the lower or upper triangular matrix is supplied. Value: `%s`.', uplo ) );
	}
	if ( !isTransposeOperation( trans ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a valid transpose operation. Value: `%s`.', trans ) );
	}
	if ( !isDiagonal( diag ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be a valid diagonal type. Value: `%s`.', diag ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( LDA < max( 1, N ) ) {
		throw new RangeError( format( 'invalid argument. Seventh argument must be greater than or equal to max(1,%d). Value: `%d`.', N, LDA ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Ninth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( N === 0 ) {
		return x;
	}
	if ( isColumnMajor( order ) ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
	}
	ox = stride2offset( N, strideX );
	return base( uplo, trans, diag, N, A, sa1, sa2, 0, x, strideX, ox );
}


// EXPORTS //

module.exports = dtrsv;
