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
* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @param {string} order - storage layout
* @param {string} uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied
* @param {NonNegativeInteger} N - number of elements along each dimension of `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} AP - packed form of a symmetric matrix `A`
* @param {NonNegativeInteger} offsetAP - starting `AP` index
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {number} beta - scalar constant
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @throws {TypeError} first argument must be a valid order
* @throws {TypeError} second argument must specify whether the lower or upper triangular matrix is supplied
* @throws {RangeError} third argument must be a nonnegative integer
* @throws {RangeError} eighth argument must be non-zero
* @throws {RangeError} twelfth argument must be non-zero
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );
*
* dspmv( 'column-major', 'lower', 3, 1.0, AP, 0, x, 1, 0, 1.0, y, 1, 0 );
* // y => <Float64Array>[ ~7.0, ~12.0, ~15.0 ]
*/
function dspmv( order, uplo, N, alpha, AP, offsetAP, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
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
		throw new RangeError( format( 'invalid argument. Eighth argument must be non-zero. Value: `%d`.', strideX ) );
	}
	if ( strideY === 0 ) {
		throw new RangeError( format( 'invalid argument. Twelfth argument must be non-zero. Value: `%d`.', strideY ) );
	}
	return base( order, uplo, N, alpha, AP, offsetAP, x, strideX, offsetX, beta, y, strideY, offsetY ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dspmv;
