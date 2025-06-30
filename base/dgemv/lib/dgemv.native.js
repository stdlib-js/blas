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
var isMatrixTranspose = require( './../../../base/assert/is-transpose-operation' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var max = require( '@stdlib/math/base/special/fast/max' );
var resolveOrder = require( './../../../base/layout-resolve-enum' );
var resolveTrans = require( './../../../base/transpose-operation-resolve-enum' );
var format = require( '@stdlib/string/format' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @param {string} order - storage layout
* @param {string} trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Float64Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {number} beta - scalar constant
* @param {Float64Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must be a valid transpose operation
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} fourth argument must be a nonnegative integer
* @throws {RangeError} seventh argument must be a valid stride
* @throws {RangeError} ninth argument must be non-zero
* @throws {RangeError} twelfth argument must be non-zero
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float64Array( [ 1.0, 1.0 ] );
*
* dgemv( 'row-major', 'no-transpose', 2, 3, 1.0, A, 3, x, 1, 1.0, y, 1 );
* // y => <Float64Array>[ 7.0, 16.0 ]
*/
function dgemv( order, trans, M, N, alpha, A, LDA, x, strideX, beta, y, strideY ) { // eslint-disable-line max-params, max-len
	var vala;
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isMatrixTranspose( trans ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a valid transpose operation. Value: `%s`.', trans ) );
	}
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', M ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Fourth argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Ninth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideY === 0 ) {
		throw new RangeError( format( 'invalid argument. Twelfth argument must be non-zero. Value: `%d`.', strideY ) );
	}
	if ( isColumnMajor( order ) ) {
		vala = M;
	} else {
		vala = N;
	}
	if ( LDA < max( 1, vala ) ) {
		throw new RangeError( format( 'invalid argument. Seventh argument must be greater than or equal to max(1,%d). Value: `%d`.', vala, LDA ) );
	}
	// Check if we can early return...
	if ( M === 0 || N === 0 || ( alpha === 0.0 && beta === 1.0 ) ) {
		return y;
	}
	addon( resolveOrder( order ), resolveTrans( trans ), M, N, alpha, A, LDA, x, strideX, beta, y, strideY ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = dgemv;
