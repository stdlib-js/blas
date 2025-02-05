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

// MAIN //

/**
* Computes the cumulative sum of strided array elements using ordinary recursive summation.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} sum - initial sum
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - output array object
* @param {Collection} y.data - output array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcusumors( 4, 0.0, arraylike2object( toAccessorArray( x ) ), 2, 1, arraylike2object( toAccessorArray( y ) ), 1, 0 );
* // y => [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function gcusumors( N, sum, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var xget;
	var yset;
	var ix;
	var iy;
	var i;

	// Cache reference to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache reference to the element accessors:
	xget = x.accessors[ 0 ];
	yset = y.accessors[ 1 ];

	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		sum += xget( xbuf, ix );
		yset( ybuf, iy, sum );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = gcusumors;
