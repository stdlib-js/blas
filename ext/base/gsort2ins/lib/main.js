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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Simultaneously sorts two strided arrays based on the sort order of the first array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {NumericArray} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NumericArray} y - second input array
* @param {integer} strideY - stride length for `y`
* @returns {NumericArray} `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2ins( x.length, 1.0, x, 1, y, 1 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
function gsort2ins( N, order, x, strideX, y, strideY ) {
	return ndarray( N, order, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gsort2ins;
