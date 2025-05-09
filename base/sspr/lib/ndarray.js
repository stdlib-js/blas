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

var isLayout = require( './../../../base/assert/is-layout' );
var isMatrixTriangle = require( './../../../base/assert/is-matrix-triangle' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar
* @param {Float32Array} x - input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} AP - packed form of a symmetric matrix `A`
* @param {integer} strideAP - `AP` stride length
* @param {NonNegativeInteger} offsetAP - starting index for `AP`
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether the lower or upper triangular matrix is supplied
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} sixth argument must be non-zero
* @throws {RangeError} ninth argument must be non-zero
* @returns {Float32Array} `AP`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* sspr( 'row-major', 'upper', 3, 1.0, x, 1, 0, AP, 1, 0 );
* // AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*/
function sspr( order, uplo, N, alpha, x, strideX, offsetX, AP, strideAP, offsetAP ) { // eslint-disable-line max-len
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( !isMatrixTriangle( uplo ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must specify whether the lower or upper triangular matrix is supplied. Value: `%s`.', uplo ) );
	}
	if ( N < 0 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a nonnegative integer. Value: `%d`.', N ) );
	}
	if ( strideX === 0 ) {
		throw new RangeError( format( 'invalid argument. Sixth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideAP === 0 ) {
		throw new RangeError( format( 'invalid argument. Ninth argument must be non-zero. Value: `%d`.', strideAP ) );
	}
	if ( N === 0 || alpha === 0.0 ) {
		return AP;
	}
	return base( order, uplo, N, alpha, x, strideX, offsetX, AP, strideAP, offsetAP ); // eslint disable-line max-len
}


// EXPORTS //

module.exports = sspr;
