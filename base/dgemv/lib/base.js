/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var dfill = require( './../../../ext/base/dfill' ).ndarray;
var dscal = require( './../../../base/dscal' ).ndarray;


// MAIN //

/**
* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
*
* @private
* @param {string} trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {NonNegativeInteger} M - number of rows in the matrix `A`
* @param {NonNegativeInteger} N - number of columns in the matrix `A`
* @param {number} alpha - scalar constant
* @param {Float64Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} x - first input vector
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {number} beta - scalar constant
* @param {Float64Array} y - second input vector
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
* var y = new Float64Array( [ 1.0, 1.0 ] );
*
* dgemv( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
* // y => <Float64Array>[ 7.0, 16.0 ]
*/
function dgemv( trans, M, N, alpha, A, strideA1, strideA2, offsetA, x, strideX, offsetX, beta, y, strideY, offsetY ) { // eslint-disable-line max-params, max-len
	var isrm;
	var xlen;
	var ylen;
	var tmp;
	var ix1;
	var iy1;
	var sa0;
	var sa1;
	var i1;
	var i0;
	var oa;

	// Note on variable naming convention: sa#, ix#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	isrm = isRowMajor( [ strideA1, strideA2 ] );
	if ( isrm ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		sa0 = strideA2; // stride for innermost loop
		sa1 = strideA1; // stride for outermost loop
	} else { // isColMajor
		// For column-major matrices, the first dimension has the fastest changing index...
		sa0 = strideA1; // stride for innermost loop
		sa1 = strideA2; // stride for outermost loop
	}
	if ( trans === 'no-transpose' ) {
		xlen = N;
		ylen = M;
	} else {
		xlen = M;
		ylen = N;
	}
	// y = beta*y
	if ( beta !== 1.0 ) {
		if ( beta === 0.0 ) {
			dfill( ylen, 0.0, y, strideY, offsetY );
		} else {
			dscal( ylen, beta, y, strideY, offsetY );
		}
	}
	if ( alpha === 0.0 ) {
		return y;
	}
	// Form: y = α*A*x + y
	if (
		( !isrm && trans === 'no-transpose' ) ||
		( isrm && trans !== 'no-transpose' )
	) {
		ix1 = offsetX;
		for ( i1 = 0; i1 < xlen; i1++ ) {
			tmp = alpha * x[ ix1 ];
			oa = offsetA + (sa1*i1);
			iy1 = offsetY;
			for ( i0 = 0; i0 < ylen; i0++ ) {
				y[ iy1 ] += A[ oa+(sa0*i0) ] * tmp;
				iy1 += strideY;
			}
			ix1 += strideX;
		}
		return y;
	}
	// Form: y = α*A^T*x + y

	// ( !isrm && trans !== 'no-transpose' ) || ( isrm && trans === 'no-transpose' )
	iy1 = offsetY;
	for ( i1 = 0; i1 < ylen; i1++ ) {
		tmp = 0.0;
		ix1 = offsetX;
		oa = offsetA + (sa1*i1);
		for ( i0 = 0; i0 < xlen; i0++ ) {
			tmp += A[ oa+(sa0*i0) ] * x[ ix1 ];
			ix1 += strideX;
		}
		y[ iy1 ] += alpha * tmp;
		iy1 += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = dgemv;
