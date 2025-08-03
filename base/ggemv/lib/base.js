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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var gfill = require( './../../../ext/base/gfill' ).ndarray;
var gscal = require( './../../../base/gscal' ).ndarray;
var accessors = require( './accessors.js' );


// FUNCTIONS //

/**
* Tests whether a provided string indicates to transpose a matrix.
*
* @private
* @param {string} str - input string
* @returns {boolean} boolean indicating whether to transpose a matrix
*
* @example
* var bool = isTransposed( 'transpose' );
* // returns true
*
* @example
* var bool = isTransposed( 'conjugate-transpose' );
* // returns true
*
* @example
* var bool = isTransposed( 'no-transpose' );
* // returns false
*/
function isTransposed( str ) { // TODO: consider moving to a separate helper utility package
	return ( str !== 'no-transpose' );
}


// MAIN //

/**
* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @private
* @param {string} trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {NumericArray} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {NumericArray} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {number} beta - scalar constant
* @param {NumericArray} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NumericArray} `y`
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var x = [ 1.0, 1.0, 1.0 ];
* var y = [ 1.0, 1.0 ];
*
* ggemv( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
* // y => [ 7.0, 16.0 ]
*/
function ggemv( trans, M, N, alpha, A, strideA1, strideA2, offsetA, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
	var isrm;
	var xlen;
	var ylen;
	var tmp;
	var da0;
	var da1;
	var ix;
	var iy;
	var ia;
	var i1;
	var i0;
	var oa;
	var ox;
	var oy;

	// Note on variable naming convention: da#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	ox = arraylike2object( x );
	oy = arraylike2object( y );
	oa = arraylike2object( A );
	if ( ox.accessorProtocol || oy.accessorProtocol || oa.accessorProtocol ) {
		accessors( trans, M, N, alpha, oa, strideA1, strideA2, offsetA, ox, strideX, offsetX, beta, oy, strideY, offsetY );
		return y;
	}
	isrm = isRowMajor( [ strideA1, strideA2 ] );
	if ( isTransposed( trans ) ) {
		xlen = M;
		ylen = N;
	} else {
		xlen = N;
		ylen = M;
	}
	// y = beta*y
	if ( beta === 0.0 ) {
		gfill( ylen, 0.0, y, strideY, offsetY );
	} else if ( beta !== 1.0 ) {
		gscal( ylen, beta, y, strideY, offsetY );
	}
	if ( alpha === 0.0 ) {
		return y;
	}
	// Form: y = α*A*x + y
	if (
		( !isrm && !isTransposed( trans ) ) ||
		( isrm && isTransposed( trans ) )
	) {
		if ( isrm ) {
			// For row-major matrices, the last dimension has the fastest changing index...
			da0 = strideA2;                     // offset increment for innermost loop
			da1 = strideA1 - ( ylen*strideA2 ); // offset increment for outermost loop
		} else { // isColMajor
			// For column-major matrices, the first dimension has the fastest changing index...
			da0 = strideA1;                     // offset increment for innermost loop
			da1 = strideA2 - ( ylen*strideA1 ); // offset increment for outermost loop
		}
		ia = offsetA;
		ix = offsetX;
		for ( i1 = 0; i1 < xlen; i1++ ) {
			tmp = alpha * x[ ix ];
			if ( tmp === 0.0 ) {
				ia += da0 * ylen;
			} else {
				iy = offsetY;
				for ( i0 = 0; i0 < ylen; i0++ ) {
					y[ iy ] += A[ ia ] * tmp;
					iy += strideY;
					ia += da0;
				}
			}
			ix += strideX;
			ia += da1;
		}
		return y;
	}
	// Form: y = α*A^T*x + y

	// ( !isrm && isTransposed( trans ) ) || ( isrm && !isTransposed( trans ) )
	if ( isrm ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		da0 = strideA2;                     // offset increment for innermost loop
		da1 = strideA1 - ( xlen*strideA2 ); // offset increment for outermost loop
	} else { // isColMajor
		// For column-major matrices, the first dimension has the fastest changing index...
		da0 = strideA1;                     // offset increment for innermost loop
		da1 = strideA2 - ( xlen*strideA1 ); // offset increment for outermost loop
	}
	ia = offsetA;
	iy = offsetY;
	for ( i1 = 0; i1 < ylen; i1++ ) {
		tmp = 0.0;
		ix = offsetX;
		for ( i0 = 0; i0 < xlen; i0++ ) {
			tmp += A[ ia ] * x[ ix ];
			ix += strideX;
			ia += da0;
		}
		y[ iy ] += alpha * tmp;
		iy += strideY;
		ia += da1;
	}
	return y;
}


// EXPORTS //

module.exports = ggemv;
