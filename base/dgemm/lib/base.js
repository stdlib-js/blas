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

/* eslint-disable max-len, max-params */

'use strict';

// MODULES //

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );
var ddot = require( './../../../base/ddot' ).ndarray;
var blockSize = require( '@stdlib/ndarray/base/unary-tiling-block-size' );


// VARIABLES //

var bsize = blockSize( 'float64', 'float64' ); // TODO: consider using a larger block size


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

/**
* Fills a matrix with zeros.
*
* @private
* @param {NonNegativeInteger} M - number of rows
* @param {NonNegativeInteger} N - number of columns
* @param {Float64Array} X - matrix to fill
* @param {integer} strideX1 - stride of the first dimension of `X`
* @param {integer} strideX2 - stride of the second dimension of `X`
* @param {NonNegativeInteger} offsetX - starting index for `X`
* @returns {Float64Array} input matrix
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zeros( 2, 3, X, 3, 1, 0 );
* // X => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* zeros( 2, 3, X, 1, 2, 0 );
* // X => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*/
function zeros( M, N, X, strideX1, strideX2, offsetX ) { // TODO: consider moving to a separate package
	var dx0;
	var dx1;
	var S0;
	var S1;
	var i0;
	var i1;
	var ix;

	if ( isRowMajor( [ strideX1, strideX2 ] ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		dx0 = strideX2;                   // offset increment for innermost loop
		dx1 = strideX1 - ( S0*strideX2 ); // offset increment for outermost loop
	} else { // column-major
		// For column-major matrices, the first dimension has the fastest changing index...
		S0 = M;
		S1 = N;
		dx0 = strideX1;                   // offset increment for innermost loop
		dx1 = strideX2 - ( S0*strideX1 ); // offset increment for outermost loop
	}
	ix = offsetX;
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			X[ ix ] = 0.0;
			ix += dx0;
		}
		ix += dx1;
	}
	return X;
}

/**
* Scales each element in a matrix by a scalar `β`.
*
* @private
* @param {NonNegativeInteger} M - number of rows
* @param {NonNegativeInteger} N - number of columns
* @param {number} beta - scalar
* @param {Float64Array} X - matrix to fill
* @param {integer} strideX1 - stride of the first dimension of `X`
* @param {integer} strideX2 - stride of the second dimension of `X`
* @param {NonNegativeInteger} offsetX - starting index for `X`
* @returns {Float64Array} input matrix
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* scal( 2, 3, 5.0, X, 3, 1, 0 );
* // X => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0, 30.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* scal( 2, 3, 5.0, X, 1, 2, 0 );
* // X => <Float64Array>[ 5.0, 10.0, 15.0, 20.0, 25.0, 30.0 ]
*/
function scal( M, N, beta, X, strideX1, strideX2, offsetX ) { // TODO: consider moving to a separate package
	var dx0;
	var dx1;
	var S0;
	var S1;
	var i0;
	var i1;
	var ix;

	if ( isRowMajor( [ strideX1, strideX2 ] ) ) {
		// For row-major matrices, the last dimension has the fastest changing index...
		S0 = N;
		S1 = M;
		dx0 = strideX2;                   // offset increment for innermost loop
		dx1 = strideX1 - ( S0*strideX2 ); // offset increment for outermost loop
	} else { // column-major
		// For column-major matrices, the first dimension has the fastest changing index...
		S0 = M;
		S1 = N;
		dx0 = strideX1;                   // offset increment for innermost loop
		dx1 = strideX2 - ( S0*strideX1 ); // offset increment for outermost loop
	}
	ix = offsetX;
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			X[ ix ] *= beta;
			ix += dx0;
		}
		ix += dx1;
	}
	return X;
}

/**
* Performs matrix multiplication using a naive algorithm which is cache-optimal when `A` is row-major and `B` is column-major.
*
* @private
* @param {NonNegativeInteger} M - number of rows in the matrix `op(A)` and in the matrix `C`
* @param {NonNegativeInteger} N - number of columns in the matrix `op(B)` and in the matrix `C`
* @param {NonNegativeInteger} K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
* @param {number} alpha - scalar constant
* @param {Float64Array} A - first matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - second matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @param {Float64Array} C - third matrix
* @param {integer} strideC1 - stride of the first dimension of `C`
* @param {integer} strideC2 - stride of the second dimension of `C`
* @param {NonNegativeInteger} offsetC - starting index for `C`
* @returns {Float64Array} `C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* naive( 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, C, 2, 1, 0 );
* // C => <Float64Array>[ 2.0, 5.0, 6.0, 11.0 ]
*/
function naive( M, N, K, alpha, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB, C, strideC1, strideC2, offsetC ) {
	var da0;
	var db0;
	var dc0;
	var dc1;
	var S0;
	var S1;
	var i0;
	var i1;
	var ia;
	var ib;
	var ic;

	// Note on variable naming convention: S#, da#, db#, dc#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	S0 = N;
	S1 = M;
	da0 = strideA2;
	db0 = strideB1;
	dc0 = strideC2;                   // offset increment for innermost loop
	dc1 = strideC1 - ( S0*strideC2 ); // offset increment for outermost loop

	ic = offsetC;
	for ( i1 = 0; i1 < S1; i1++ ) {
		ia = offsetA + ( i1*strideA1 );
		for ( i0 = 0; i0 < S0; i0++ ) {
			ib = offsetB + ( i0*strideB2 );
			C[ ic ] += alpha * ddot( K, A, da0, ia, B, db0, ib );
			ic += dc0;
		}
		ic += dc1;
	}
	return C;
}

/**
* Performs matrix multiplication using loop tiling.
*
* @private
* @param {NonNegativeInteger} M - number of rows in the matrix `op(A)` and in the matrix `C`
* @param {NonNegativeInteger} N - number of columns in the matrix `op(B)` and in the matrix `C`
* @param {NonNegativeInteger} K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
* @param {number} alpha - scalar constant
* @param {Float64Array} A - first matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - second matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @param {Float64Array} C - third matrix
* @param {integer} strideC1 - stride of the first dimension of `C`
* @param {integer} strideC2 - stride of the second dimension of `C`
* @param {NonNegativeInteger} offsetC - starting index for `C`
* @returns {Float64Array} `C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* blocked( 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, C, 2, 1, 0 );
* // C => <Float64Array>[ 2.0, 5.0, 6.0, 11.0 ]
*/
function blocked( M, N, K, alpha, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB, C, strideC1, strideC2, offsetC ) {
	var da0;
	var db0;
	var dc0;
	var dc1;
	var oa1;
	var ob0;
	var oc0;
	var oc1;
	var S0;
	var S1;
	var s0;
	var s1;
	var sk;
	var i0;
	var i1;
	var j0;
	var j1;
	var ia;
	var ib;
	var ic;
	var oa;
	var ob;
	var k;

	// Note on variable naming convention: S#, da#, db#, dc#, i#, j# where # corresponds to the loop number, with `0` being the innermost loop...

	S0 = N;
	S1 = M;

	// Define increments for the innermost loop:
	da0 = strideA2;
	db0 = strideB1;
	dc0 = strideC2;

	// Iterate over blocks...
	for ( j1 = S1; j1 > 0; ) {
		if ( j1 < bsize ) {
			s1 = j1;
			j1 = 0;
		} else {
			s1 = bsize;
			j1 -= bsize;
		}
		oa1 = offsetA + ( j1*strideA1 );
		oc1 = offsetC + ( j1*strideC1 );
		for ( j0 = S0; j0 > 0; ) {
			if ( j0 < bsize ) {
				s0 = j0;
				j0 = 0;
			} else {
				s0 = bsize;
				j0 -= bsize;
			}
			ob0 = offsetB + ( j0*strideB2 );
			oc0 = oc1 + ( j0*strideC2 );      // index offset for `C` for the current block
			dc1 = strideC1 - ( s0*strideC2 ); // loop offset increment for `C`
			for ( k = K; k > 0; ) {
				if ( k < bsize ) {
					sk = k;
					k = 0;
				} else {
					sk = bsize;
					k -= bsize;
				}
				oa = oa1 + ( k*strideA2 );
				ob = ob0 + ( k*strideB1 );
				ic = oc0;
				for ( i1 = 0; i1 < s1; i1++ ) {
					ia = oa + ( i1*strideA1 );
					for ( i0 = 0; i0 < s0; i0++ ) {
						ib = ob + ( i0*strideB2 );
						C[ ic ] += alpha * ddot( sk, A, da0, ia, B, db0, ib );
						ic += dc0;
					}
					ic += dc1;
				}
			}
		}
	}
	return C;
}


// MAIN //

/**
* Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.
*
* @private
* @param {string} transA - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
* @param {string} transB - specifies whether `B` should be transposed, conjugate-transposed, or not transposed
* @param {NonNegativeInteger} M - number of rows in the matrix `op(A)` and in the matrix `C`
* @param {NonNegativeInteger} N - number of columns in the matrix `op(B)` and in the matrix `C`
* @param {NonNegativeInteger} K - number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`
* @param {number} alpha - scalar constant
* @param {Float64Array} A - first matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float64Array} B - second matrix
* @param {integer} strideB1 - stride of the first dimension of `B`
* @param {integer} strideB2 - stride of the second dimension of `B`
* @param {NonNegativeInteger} offsetB - starting index for `B`
* @param {number} beta - scalar constant
* @param {Float64Array} C - third matrix
* @param {integer} strideC1 - stride of the first dimension of `C`
* @param {integer} strideC2 - stride of the second dimension of `C`
* @param {NonNegativeInteger} offsetC - starting index for `C`
* @returns {Float64Array} `C`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var B = new Float64Array( [ 1.0, 1.0, 0.0, 1.0 ] );
* var C = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* dgemm( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
* // C => <Float64Array>[ 2.0, 5.0, 6.0, 11.0 ]
*/
function dgemm( transA, transB, M, N, K, alpha, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB, beta, C, strideC1, strideC2, offsetC ) {
	var isrma;
	var isrmb;
	var sa1;
	var sa2;
	var sb1;
	var sb2;

	if ( M === 0 || N === 0 || ( ( beta === 1.0 ) && ( ( alpha === 0.0 ) || ( K === 0 ) ) ) ) {
		return C;
	}
	// Form: C = β⋅C
	if ( beta === 0.0 ) {
		C = zeros( M, N, C, strideC1, strideC2, offsetC );
	} else if ( beta !== 1.0 ) {
		C = scal( M, N, beta, C, strideC1, strideC2, offsetC );
	}
	// Check whether we can early return...
	if ( alpha === 0.0 ) {
		return C;
	}
	// Determine the memory layouts of `A` and `B`...
	isrma = isRowMajor( [ strideA1, strideA2 ] );
	isrmb = isRowMajor( [ strideB1, strideB2 ] );

	// Check whether we can avoid loop tiling and simply use the "naive" (cache-optimal) algorithm for performing matrix multiplication...
	if ( isrma ) { // orderA === 'row-major'
		if ( !isTransposed( transA ) ) {
			if ( !isrmb && !isTransposed( transB ) ) { // orderB === 'column-major'
				// Form: C = α⋅A⋅B + C
				return naive( M, N, K, alpha, A, strideA1, strideA2, offsetA, B, strideB1, strideB2, offsetB, C, strideC1, strideC2, offsetC );
			}
			if ( isrmb && isTransposed( transB ) ) { // orderB === 'row-major'
				// Form: C = α⋅A⋅B^T + C
				return naive( M, N, K, alpha, A, strideA1, strideA2, offsetA, B, strideB2, strideB1, offsetB, C, strideC1, strideC2, offsetC );
			}
		}
	} else if ( isTransposed( transA ) ) { // orderA === 'column-major'
		if ( isrmb && isTransposed( transB ) ) { // orderB === 'row-major'
			// Form: C = α⋅A^T⋅B^T + C
			return naive( M, N, K, alpha, A, strideA2, strideA1, offsetA, B, strideB2, strideB1, offsetB, C, strideC1, strideC2, offsetC );
		}
		if ( !isrmb && !isTransposed( transB ) ) { // orderB === 'column-major'
			// Form: C = α⋅A^T⋅B + C
			return naive( M, N, K, alpha, A, strideA2, strideA1, offsetA, B, strideB1, strideB2, offsetB, C, strideC1, strideC2, offsetC );
		}
	}
	// Swap strides to perform transposes...
	if ( isTransposed( transA ) ) {
		sa1 = strideA2;
		sa2 = strideA1;
	} else {
		sa1 = strideA1;
		sa2 = strideA2;
	}
	if ( isTransposed( transB ) ) {
		sb1 = strideB2;
		sb2 = strideB1;
	} else {
		sb1 = strideB1;
		sb2 = strideB2;
	}
	// Perform loop tiling to promote cache locality:
	return blocked( M, N, K, alpha, A, sa1, sa2, offsetA, B, sb1, sb2, offsetB, C, strideC1, strideC2, offsetC );
}


// EXPORTS //

module.exports = dgemm;
