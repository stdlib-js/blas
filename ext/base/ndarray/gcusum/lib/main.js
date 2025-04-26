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

var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var strided = require( './../../../../../ext/base/gcusum' ).ndarray;


// MAIN //

/**
* Computes the cumulative sum of a one-dimensional ndarray.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing an input ndarray, an output ndarray, and an ndarray containing the initial sum
* @returns {number} sum
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 0.0, 0.0, 0.0, 0.0 ];
* var y = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var initial = scalar2ndarray( 0.0, 'generic', 'row-major' );
*
* var v = gcusum( [ x, y, initial ] );
* // returns <ndarray>
*
* var bool = ( v === y );
* // returns true
*
* var arr = ndarray2array( v );
* // returns [ 1.0, 4.0, 8.0, 10.0 ]
*/
function gcusum( arrays ) {
	var x = arrays[ 0 ];
	var y = arrays[ 1 ];
	var s = arrays[ 2 ];
	var v = getData( s )[ getOffset( s ) ];
	strided( numelDimension( x, 0 ), v, getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = gcusum;
