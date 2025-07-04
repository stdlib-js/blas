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
var isMatrixTranspose = require( './../../../base/assert/is-transpose-operation' );
var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major-string' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* @param {string} order - storage layout
* @param {string} transA - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {string} transB - specifies whether `B` should be transposed, conjugate-transposed, or not transposed
* @param {NonNegativeInteger} M - number of rows in the matrix `op(A)` and in the matrix `C`
* @param {NonNegativeInteger} N - number of columns in the matrix `op(B)` and in the matrix `C`
* @param {NonNegativeInteger} K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
* @param {number} alpha - scalar constant
* @param {Float32Array} A - first matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float32Array} B - second matrix
* @param {PositiveInteger} LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
* @param {number} beta - scalar constant
* @param {Float32Array} C - third matrix
* @param {PositiveInteger} LDC - stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`)
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must be a valid transpose operation
* @throws {TypeError} third argument must be a valid transpose operation
* @throws {RangeError} fourth argument must be a nonnegative integer
* @throws {RangeError} fifth argument must be a nonnegative integer
* @throws {RangeError} sixth argument must be a nonnegative integer
* @throws {RangeError} ninth argument must be greater than or equal to max(1,M) when `A` is not transposed and max(1,K) otherwise
* @throws {RangeError} eleventh argument must be greater than or equal to max(1,K) when `B` is not transposed and max(1,N) otherwise
* @throws {RangeError} fourteenth argument must be greater than or equal to max(1,M)
* @returns {Float32Array} `C`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* sgemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
* // C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
*/
function sgemm( order, transA, transB, M, N, K, alpha, A, LDA, B, LDB, beta, C, LDC ) { // eslint-disable-line max-params, max-len
	var nrowsa;
	var nrowsb;
	var valc;
	var isrm;
	var iscm;
	var sa1;
	var sa2;
	var sb1;
	var sb2;
	var sc1;
	var sc2;

	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isMatrixTranspose( transA ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a valid transpose operation. Value: `%s`.', transA ) );
	}
	if ( !isMatrixTranspose( transB ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a valid transpose operation. Value: `%s`.', transB ) );
	}
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.', M ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( K < 0 ) {
		throw new RangeError( format( 'invalid argument. Sixth argument must be a nonnegative integer. Value: `%d`.', K ) );
	}
	isrm = isRowMajor( order );
	iscm = isColumnMajor( order );
	if (
		( isrm && transA === 'no-transpose' ) ||
		( iscm && transA === 'transpose' )
	) {
		nrowsa = K;
	} else {
		nrowsa = M;
	}
	if (
		( isrm && transB === 'no-transpose' ) ||
		( iscm && transB === 'transpose' )
	) {
		nrowsb = N;
	} else {
		nrowsb = K;
	}
	if ( LDA < max( 1, nrowsa ) ) {
		throw new RangeError( format( 'invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.', nrowsa, LDA ) );
	}
	if ( LDB < max( 1, nrowsb ) ) {
		throw new RangeError( format( 'invalid argument. Eleventh argument must be greater than or equal to max(1,%d). Value: `%d`.', nrowsb, LDB ) );
	}
	if ( isrm ) {
		valc = N;
	} else {
		valc = M;
	}
	if ( LDC < max( 1, valc ) ) {
		throw new RangeError( format( 'invalid argument. Fourteenth argument must be greater than or equal to max(1,%d). Value: `%d`.', valc, LDC ) );
	}
	if ( iscm ) {
		sa1 = 1;
		sa2 = LDA;
		sb1 = 1;
		sb2 = LDB;
		sc1 = 1;
		sc2 = LDC;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
		sb1 = LDB;
		sb2 = 1;
		sc1 = LDC;
		sc2 = 1;
	}
	return base( transA, transB, M, N, K, alpha, A, sa1, sa2, 0, B, sb1, sb2, 0, beta, C, sc1, sc2, 0 ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = sgemm;
