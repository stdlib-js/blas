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
var min = require( '@stdlib/math/base/special/fast/min' );
var without = require( '@stdlib/array/base/without' );
var numel = require( '@stdlib/ndarray/base/numel' );
var normalizeIndex = require( '@stdlib/ndarray/base/normalize-index' );
var maybeBroadcastArrays = require( '@stdlib/ndarray/base/maybe-broadcast-arrays' );
var ndarraylike2ndarray = require( '@stdlib/ndarray/base/ndarraylike2ndarray' );
var nditerStacks = require( '@stdlib/ndarray/iter/stacks' );
var empty = require( '@stdlib/ndarray/empty' );
var base = require( './../../base/sdot' ).ndarray;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Computes the dot product of two single-precision floating-point vectors.
*
* @param {ndarrayLike} x - first input array
* @param {ndarrayLike} y - second input array
* @param {NegativeInteger} [dim=-1] - dimension for which to compute the dot product
* @throws {TypeError} first argument must be a ndarray containing single-precision floating-point numbers
* @throws {TypeError} first argument must have at least one dimension
* @throws {TypeError} second argument must be a ndarray containing single-precision floating-point numbers
* @throws {TypeError} second argument must have at least one dimension
* @throws {TypeError} third argument must be a negative integer
* @throws {Error} input arrays must be broadcast compatible
* @throws {RangeError} the size of the contracted dimension must be the same for both input arrays
* @throws {RangeError} third argument is out-of-bounds
* @returns {ndarray} ndarray containing the dot product
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* var z = sdot( x, y );
* // returns <ndarray>
*
* var v = z.get();
* // returns -5.0
*/
function sdot( x, y ) {
	var dim;
	var xsh;
	var ysh;
	var osh;
	var xit;
	var yit;
	var out;
	var tmp;
	var xc;
	var yc;
	var vx;
	var vy;
	var dm;
	var S;
	var v;
	var i;

	if ( !isFloat32ndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.', x ) );
	}
	if ( !isFloat32ndarrayLike( y ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.', y ) );
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
	// Validate that the dimension argument is a negative integer...
	if ( arguments.length > 2 ) {
		dim = arguments[ 2 ];
		if ( !isNegativeInteger( dim ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a negative integer. Value: `%s`.', dim ) );
		}
	} else {
		dim = -1;
	}
	// Validate that a provided dimension index is within bounds **before** broadcasting...
	dm = min( xsh.length, ysh.length ) - 1;
	dim = normalizeIndex( dim, dm );
	if ( dim === -1 ) {
		throw new RangeError( format( 'invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.', -dm, -1, arguments[ 2 ] ) );
	}
	// Validate that the contracted dimension size is the same for both input arrays...
	S = xsh[ dim ];
	if ( ysh[ dim ] !== S ) {
		throw new RangeError( format( 'invalid argument. The size of the contracted dimension must be the same for both input ndarrays. Dim(%s,%d) = %d. Dim(%s,%d) = %d.', 'x', dim, S, 'y', dim, ysh[ dim ] ) );
	}
	// Broadcast the input arrays to a common shape....
	try {
		tmp = maybeBroadcastArrays( [ xc, yc ] );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		throw new Error( format( 'invalid arguments. Input ndarrays must be broadcast compatible. Shape(%s) = (%s). Shape(%s) = (%s).', 'x', xsh.join( ',' ), 'y', ysh.join( ',' ) ) );
	}
	xc = tmp[ 0 ];
	yc = tmp[ 1 ];

	// Resolve the output array shape by excluding the contracted dimension:
	osh = without( xc.shape, dim );

	// Allocate an empty output array:
	out = empty( osh, {
		'dtype': xc.dtype,
		'order': xc.order
	});

	// If we are only provided one-dimensional input arrays, we can skip iterating over stacks...
	if ( osh.length === 0 ) {
		v = base( S, xc.data, xc.strides[0], xc.offset, yc.data, yc.strides[0], yc.offset ); // eslint-disable-line max-len
		out.iset( v );
		return out;
	}
	// Create iterators for iterating over stacks of vectors:
	xit = nditerStacks( xc, [ dim ] );
	yit = nditerStacks( yc, [ dim ] );

	// Compute the dot product for each pair of vectors...
	for ( i = 0; i < numel( osh ); i++ ) {
		vx = xit.next().value;
		vy = yit.next().value;
		v = base( S, vx.data, vx.strides[0], vx.offset, vy.data, vy.strides[0], vy.offset ); // eslint-disable-line max-len
		out.iset( i, v );
	}
	return out;
}


// EXPORTS //

module.exports = sdot;
