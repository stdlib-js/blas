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

var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var isLayout = require( './../../../base/assert/is-layout' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var max = require( '@stdlib/math/base/special/fast/max' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
*
* @param {string} order - storage layout
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {Float64Array} A - input matrix
* @param {PositiveInteger} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} second argument must be a nonnegative integer
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} sixth argument must be non-zero
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} tenth argument must be a valid stride
* @returns {Float64Array} `A`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float64Array( [ 1.0, 1.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );
*
* dger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
* // A => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/
function dger( order, M, N, alpha, x, strideX, y, strideY, A, LDA ) {
	var iscm;
	var vala;
	var sa1;
	var sa2;
	var ox;
	var oy;

	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( M < 0 ) {
		throw new RangeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%d`.', M ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Sixth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideY === 0 ) {
		throw new RangeError( format( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideY ) );
	}
	iscm = isColumnMajor( order );
	if ( iscm ) {
		vala = M;
	} else {
		vala = N;
	}
	if ( LDA < max( 1, vala ) ) {
		throw new RangeError( format( 'invalid argument. Tenth argument must be greater than or equal to max(1,%d). Value: `%d`.', vala, LDA ) );
	}
	// Check if we can early return...
	if ( M === 0 || N === 0 || alpha === 0.0 ) {
		return A;
	}
	ox = stride2offset( M, strideX );
	oy = stride2offset( N, strideY );
	if ( iscm ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
	}
	return base( M, N, alpha, x, strideX, ox, y, strideY, oy, A, sa1, sa2, 0 );
}


// EXPORTS //

module.exports = dger;
