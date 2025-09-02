
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
var strided = require( './../../../../../ext/base/dlast-index-of' ).ndarray;
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );


// MAIN //

/**
* Returns the last index of a search element in a one-dimensional double-precision floating-point ndarray.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
* @returns {integer} index
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var xbuf = new Float64Array( [ 1.0, 2.0, 4.0, 2.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'float64'
* });
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = dlastIndexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/
function dlastIndexOf( arrays ) {
	var searchElement;
	var fromIndex;
	var N;
	var x;

	x = arrays[ 0 ];
	N = numelDimension( x, 0 );
	searchElement = ndarraylike2scalar( arrays[ 1 ] );
	fromIndex = ndarraylike2scalar( arrays[ 2 ] );

	if ( fromIndex < 0 ) {
		fromIndex += N;
		if ( fromIndex < 0 ) {
			return -1;
		}
	} else if ( fromIndex >= N ) {
		fromIndex = N - 1;
	}
	return strided( fromIndex+1, searchElement, getData( x ), getStride( x, 0 ), getOffset( x ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = dlastIndexOf;
