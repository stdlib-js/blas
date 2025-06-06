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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of double-precision complex floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex128} sum
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = zsum( x.length, x, 1, 0 );
* // returns <Complex128>[ 3.0, 1.0 ]
*/
function zsum( N, x, strideX, offsetX ) {
	var o = addon.ndarray( N, reinterpret( x, 0 ), strideX, offsetX );
	return new Complex128( o.re, o.im );
}


// EXPORTS //

module.exports = zsum;
