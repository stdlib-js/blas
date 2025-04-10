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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Simultaneously sorts two strided arrays based on the sort order of the first array using insertion sort.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {NumericArray} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NumericArray} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2ins( x.length, 1.0, x, 1, 0, y, 1, 0 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
function gsort2ins( N, order, x, strideX, offsetX, y, strideY, offsetY ) {
	var flg;
	var ix;
	var jx;
	var fx;
	var lx;
	var iy;
	var jy;
	var fy;
	var ly;
	var vx;
	var vy;
	var ux;
	var ox;
	var oy;
	var i;

	if ( N <= 0 || order === 0.0 ) {
		return x;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, order, ox, strideX, offsetX, oy, strideY, offsetY );
		return x;
	}
	// For a positive stride, sorting in decreasing order is equivalent to providing a negative stride and sorting in increasing order, and, for a negative stride, sorting in decreasing order is equivalent to providing a positive stride and sorting in increasing order...
	if ( order < 0.0 ) {
		strideX *= -1;
		strideY *= -1;
		offsetX -= (N-1) * strideX;
		offsetY -= (N-1) * strideY;
	}
	fx = offsetX;              // first index
	lx = fx + ((N-1)*strideX); // last index
	ix = fx + strideX;

	fy = offsetY;              // first index
	ly = fy + ((N-1)*strideY); // last index
	iy = fy + strideY;

	if ( strideX < 0 ) {
		// Traverse the strided array from right-to-left...

		// Sort in increasing order...
		for ( i = 1; i < N; i++ ) {
			vx = x[ ix ];
			vy = y[ iy ];

			// Sort `NaN` values to the end (i.e., the left)...
			if ( isnan( vx ) ) {
				jx = ix;
				jy = iy;

				// Shift all values (including NaNs) to the left of the current element to the right...
				while ( jx > lx ) {
					x[ jx ] = x[ jx+strideX ];
					y[ jy ] = y[ jy+strideY ];
					jx += strideX;
					jy += strideY;
				}
				x[ lx ] = vx;
				y[ ly ] = vy;
			} else {
				flg = isNegativeZero( vx );
				jx = ix - strideX;
				jy = iy - strideY;

				// Shift all larger values to the right of the current element to the left...
				while ( jx <= fx ) {
					ux = x[ jx ];
					if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
						// Note: positive zeros (and NaNs (e.g., when last element is NaN)) are sorted to the left
						break;
					}
					x[ jx+strideX ] = ux;
					y[ jy+strideY ] = y[ jy ];
					jx -= strideX;
					jy -= strideY;
				}
				x[ jx+strideX ] = vx;
				y[ jy+strideY ] = vy;
				ix += strideX;
				iy += strideY;
			}
		}
		return x;
	}
	// Traverse the strided array from left-to-right...

	// Sort in increasing order...
	for ( i = 1; i < N; i++ ) {
		vx = x[ ix ];
		vy = y[ iy ];

		// Sort `NaN` values to the end...
		if ( isnan( vx ) ) {
			jx = ix;
			jy = iy;

			// Shift all values (including NaNs) to the right of the current element to the left...
			while ( jx < lx ) {
				x[ jx ] = x[ jx+strideX ];
				y[ jy ] = y[ jy+strideY ];
				jx += strideX;
				jy += strideY;
			}
			x[ lx ] = vx;
			y[ ly ] = vy;
		} else {
			flg = isNegativeZero( vx );
			jx = ix - strideX;
			jy = iy - strideY;

			// Shift all larger values to the left of the current element to the right...
			while ( jx >= fx ) {
				ux = x[ jx ];
				if ( ux <= vx && !(flg && ux === vx && isNegativeZero( ux ) === false) ) { // eslint-disable-line max-len
					// Note: positive zeros (and NaNs (e.g., when first element is NaN)) are sorted to the right
					break;
				}
				x[ jx+strideX ] = ux;
				y[ jy+strideY ] = y[ jy ];
				jx -= strideX;
				jy -= strideY;
			}
			x[ jx+strideX ] = vx;
			y[ jy+strideY ] = vy;
			ix += strideX;
			iy += strideY;
		}
	}
	return x;
}


// EXPORTS //

module.exports = gsort2ins;
