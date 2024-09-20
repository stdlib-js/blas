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

var isFloat32ndarrayLike = require( '@stdlib/assert/is-float32ndarray-like' );
var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' ).isPrimitive;
var isReadOnly = require( '@stdlib/ndarray/base/assert/is-read-only' );
var hasEqualValues = require( '@stdlib/array/base/assert/has-equal-values-indexed' );
var min = require( '@stdlib/math/base/special/fast/min' );
var without = require( '@stdlib/array/base/without' );
var ndarraylike2ndarray = require( '@stdlib/ndarray/base/ndarraylike2ndarray' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var nditerStacks = require( '@stdlib/ndarray/iter/stacks' );
var numel = require( '@stdlib/ndarray/base/numel' );
var base = require( './../../base/sswap' ).ndarray;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Interchanges two single-precision floating-point vectors.
*
* @param {ndarrayLike} x - first input array
* @param {ndarrayLike} y - second input array
* @param {NegativeInteger} [dim=-1] - dimension along which to interchange elements
* @throws {TypeError} first argument must be a ndarray containing single-precision floating-point numbers
* @throws {TypeError} first argument must have at least one dimension
* @throws {TypeError} second argument must be a ndarray containing single-precision floating-point numbers
* @throws {TypeError} second argument must have at least one dimension
* @throws {Error} both input arrays must have the same shape
* @throws {RangeError} third argument is out-of-bounds
* @throws {Error} cannot write to read-only array
* @returns {ndarrayLike} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* sswap( x, y );
*
* var xbuf = x.data;
* // returns <Float32Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
*
* var ybuf = y.data;
* // returns <Float32Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
*/
function sswap( x, y ) {
	var dim;
	var xsh;
	var ysh;
	var xit;
	var yit;
	var xc;
	var yc;
	var vx;
	var vy;
	var dm;
	var S;
	var N;
	var i;
	if ( !isFloat32ndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.', x ) );
	}
	if ( !isFloat32ndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.', y ) );
	}
	if ( isReadOnly( x ) || isReadOnly( y ) ) {
		throw new Error( 'invalid argument. Cannot write to read-only array.' );
	}
	// Convert the input arrays to "base" ndarrays:
	xc = ndarraylike2ndarray( x );
	yc = ndarraylike2ndarray( y );

	// Resolve the input array shapes:
	xsh = xc.shape;
	ysh = yc.shape;

	// Validate that we've been provided non-zero-dimensional arrays...
	if ( xsh.length < 1 ) {
		throw new TypeError( format( 'invalid argument. First argument must have at least one dimension.' ) );
	}
	if ( ysh.length < 1 ) {
		throw new TypeError( format( 'invalid argument. Second argument must have at least one dimension.' ) );
	}
	// Validate that the arrays have the same shape...
	if ( !hasEqualValues( xsh, ysh ) ) {
		throw new Error( 'invalid arguments. The first and second arguments must have the same shape.' );
	}
	// Validate that the dimension argument is a negative integer...
	if ( arguments.length > 2 ) {
		dim = arguments[ 2 ];
		if ( !isNegativeInteger( dim ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a negative integer. Value: `%s`.', dim ) );
		}
	} else {
		dim = -1;
	}
	// Validate that a provided dimension index is within bounds...
	dm = min( xsh.length, ysh.length ) - 1;
	dim = normalizeIndex( dim, dm );
	if ( dim === -1 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.', -dm, -1, arguments[ 2 ] ) );
	}
	// Resolve the size of the interchange dimension:
	S = xsh[ dim ];

	// If we are only provided one-dimensional input arrays, we can skip iterating over stacks...
	if ( xsh.length === 1 ) {
		base( S, xc.data, xc.strides[0], xc.offset, yc.data, yc.strides[0], yc.offset ); // eslint-disable-line max-len
		return y;
	}
	// Resolve the number of stacks:
	N = numel( without( xsh, dim ) );

	// Create iterators for iterating over stacks of vectors:
	xit = nditerStacks( xc, [ dim ] );
	yit = nditerStacks( yc, [ dim ] );

	// Interchange each pair of vectors...
	for ( i = 0; i < N; i++ ) {
		vx = xit.next().value;
		vy = yit.next().value;
		base( S, vx.data, vx.strides[0], vx.offset, vy.data, vy.strides[0], vy.offset ); // eslint-disable-line max-len
	}
	return y;
}


// EXPORTS //

module.exports = sswap;
