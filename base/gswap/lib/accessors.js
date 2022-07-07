/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Interchanges vectors `x` and `y`.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Function} x.get - getter
* @param {Function} x.set - setter
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array array
* @param {Function} y.get - getter
* @param {Function} y.set - setter
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Object} `y`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32' );
* var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
*
* function setter( data, idx, value ) {
*     data.set( value, idx );
* }
*
* function getter( data, idx ) {
*     return data.get( idx );
* }
*
* var x = {
*     'data': new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] ),
*     'setter': setter,
*     'getter': getter
* };
*
* var y = {
*     'data': new Complex64Array( [ 5.0, 6.0, 7.0, 8.0 ] ),
*     'setter': setter,
*     'getter': getter
* };
*
* gswap( x.data.length, x, 1, 0, y, 1, 0 );
*
* var viewX = reinterpret64( x.data, 0 );
* // viewX => <Float32Array>[ 5.0, 6.0, 7.0, 8.0 ]
*
* var viewY = reinterpret64( y.data, 0 );
* // viewY => <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
function gswap( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var set;
	var get;
	var tmp;
	var ix;
	var iy;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache a reference to the element accessors:
	get = x.getter;
	set = y.setter;

	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		tmp = get( xbuf, ix );
		set( xbuf, ix, get( ybuf, iy ) );
		set( ybuf, iy, tmp );
		ix += strideX;
		iy += strideY;
	}
	return x;
}


// EXPORTS //

module.exports = gswap;
