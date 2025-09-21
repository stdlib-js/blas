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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var ndims = require( '@stdlib/ndarray/ndims' );
var format = require( '@stdlib/string/format' );
var base = require( './base.js' );


// MAIN //

/**
* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
*
* @param {ndarrayLike} x - input ndarray
* @param {Options} [options] - function options
* @param {integer} [options.dim=-1] - dimension over which to perform operation
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {*} [options.dtype] - output ndarray data type
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension index must not exceed input ndarray bounds
* @throws {RangeError} first argument must have at least one dimension
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* // Create a data buffer:
* var xbuf = [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ];
*
* // Define the shape of the input array:
* var sh = [ 2, 3 ];
*
* // Define the array strides:
* var sx = [ 3, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'generic', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = findIndex( x, isEven );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ 1, 0 ]
*/
function findIndex( x ) {
	var hasOptions;
	var options;
	var nargs;
	var opts;
	var ctx;
	var cb;

	nargs = arguments.length;
	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	// Initialize an options object:
	opts = {
		'dims': [ -1 ], // default behavior is to perform a reduction over the last dimension
		'keepdims': false
	};

	// Initialize a flag indicating whether an `options` argument was provided:
	hasOptions = false;

	// Case: findIndex( x, clbk )
	if ( nargs <= 2 ) {
		cb = arguments[ 1 ];
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', cb ) );
		}
	}
	// Case: findIndex( x, ???, ??? )
	else if ( nargs === 3 ) {
		// Case: findIndex( x, clbk, thisArg )
		if ( isFunction( arguments[ 1 ] ) ) {
			cb = arguments[ 1 ];
			ctx = arguments[ 2 ];
		}
		// Case: findIndex( x, options, clbk )
		else {
			options = arguments[ 1 ];
			cb = arguments[ 2 ];
			if ( !isFunction( cb ) ) {
				throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', cb ) );
			}
			hasOptions = true;
		}
	}
	// Case: findIndex( x, options, clbk, thisArg )
	else {
		options = arguments[ 1 ];
		cb = arguments[ 2 ];
		ctx = arguments[ 3 ];
		if ( !isFunction( cb ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', cb ) );
		}
		hasOptions = true;
	}
	if ( hasOptions ) {
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		// Resolve provided options...
		if ( hasOwnProp( options, 'dim' ) ) {
			opts.dims[ 0 ] = options.dim;
		}
		if ( hasOwnProp( options, 'keepdims' ) ) {
			opts.keepdims = options.keepdims;
		}
		if ( hasOwnProp( options, 'dtype' ) ) {
			opts.dtype = options.dtype;
		}
	}
	if ( ndims( x ) < 1 ) {
		throw new RangeError( 'invalid argument. First argument must have at least one dimension.' );
	}
	return base( x, opts, cb, ctx );
}


// EXPORTS //

module.exports = findIndex;
