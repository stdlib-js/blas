/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var sapxsumkbn = require( './../../../../ext/base/sapxsumkbn' ).ndarray;


// MAIN //

/**
* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} sum
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = sapxsum( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/
function sapxsum( N, alpha, x, strideX, offsetX ) {
	return sapxsumkbn( N, alpha, x, strideX, offsetX );
}


// EXPORTS //

module.exports = sapxsum;
