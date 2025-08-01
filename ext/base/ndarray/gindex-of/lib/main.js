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
var strided = require( './../../../../../ext/base/gindex-of' ).ndarray;
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );


// MAIN //

/**
* Returns the first index of a search element in a one-dimensional ndarray.
*
* @param {ArrayLikeObject<Object>} arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
* @returns {integer} index
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
*
* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'generic'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = gindexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/
function gindexOf( arrays ) {
	var searchElement;
	var fromIndex;
	var stride;
	var offset;
	var idx;
	var N;
	var x;

	x = arrays[ 0 ];
	N = numelDimension( x, 0 );
	searchElement = ndarraylike2scalar( arrays[ 1 ] );
	fromIndex = ndarraylike2scalar( arrays[ 2 ] );

	if ( fromIndex < 0 ) {
		fromIndex += N;
		if ( fromIndex < 0 ) {
			fromIndex = 0;
		}
	} else if ( fromIndex >= N ) {
		return -1;
	}
	N -= fromIndex;
	stride = getStride( x, 0 );
	offset = getOffset( x ) + ( stride*fromIndex );

	idx = strided( N, searchElement, getData( x ), stride, offset );
	if ( idx >= 0 ) {
		idx += fromIndex;
	}
	return idx;
}


// EXPORTS //

module.exports = gindexOf;
