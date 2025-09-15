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

var isLayout = require( './../../../../base/assert/is-layout' );
var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major-string' );
var isColumnMajor = require( '@stdlib/ndarray/base/assert/is-column-major-string' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var max = require( '@stdlib/math/base/special/fast/max' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Returns the index of the first row in an input matrix which has the same elements as a provided search vector.
*
* ## Notes
*
* -   If the function is provided an empty matrix or if the function is unable to find a search vector, the function returns `-1` (i.e., an invalid index).
*
* @param {string} order - storage layout
* @param {PositiveInteger} M - number of rows in `A`
* @param {PositiveInteger} N - number of columns in `A`
* @param {Collection} A - input matrix
* @param {integer} LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
* @param {Collection} x - search vector
* @param {integer} strideX - stride length for `x`
* @throws {TypeError} first argument must be a valid order
* @throws {RangeError} fifth argument must be greater than or equal to max(1,N)
* @returns {integer} row index
*
* @example
* var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ]; // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 0.0, 0.0 ] ]
* var x = [ 3.0, 4.0 ];
*
* var out = gindexOfRow( 'row-major', 3, 2, A, 2, x, 1 );
* // returns 1
*/
function gindexOfRow( order, M, N, A, LDA, x, strideX ) {
	var sa1;
	var sa2;
	var s;
	if ( !isLayout( order ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a valid order. Value: `%s`.', order ) );
	}
	if ( isRowMajor( order ) ) {
		s = N;
	} else {
		s = M;
	}
	if ( LDA < max( 1, s ) ) {
		throw new RangeError( format( 'invalid argument. Fifth argument must be greater than or equal to max(1,%d). Value: `%d`.', s, LDA ) );
	}
	if ( isColumnMajor( order ) ) {
		sa1 = 1;
		sa2 = LDA;
	} else { // order === 'row-major'
		sa1 = LDA;
		sa2 = 1;
	}
	return base( M, N, A, sa1, sa2, 0, x, strideX, stride2offset( N, strideX ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gindexOfRow;
