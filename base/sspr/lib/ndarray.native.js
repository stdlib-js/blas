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

var resolveOrder = require( './../../../base/layout-resolve-enum' );
var resolveUplo = require( './../../../base/matrix-triangle-resolve-enum' );
var addon = require( './../src/addon.node' );

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
	addon.ndarray( resolveOrder( order ), resolveUplo( uplo ), N, alpha, x, strideX, offsetX, AP, strideAP, offsetAP ); // eslint-disable-line max-len
	return AP;
}


// EXPORTS //

module.exports = sspr;
