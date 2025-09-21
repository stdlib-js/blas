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

var dtypes = require( '@stdlib/ndarray/dtypes' );
var gfindIndex = require( './../../../ext/base/ndarray/gfind-index' );
var factory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-by-factory' );


// VARIABLES //

var idtypes = dtypes( 'all' );
var odtypes = dtypes( 'integer_index_and_generic' );
var policies = {
	'output': 'integer_index_and_generic',
	'casting': 'none'
};
var table = {
	'default': gfindIndex
};


// MAIN //

/**
* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
*
* @private
* @name findIndex
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @param {*} [options.dtype] - output ndarray data type
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
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
* var sh = [ 6 ];
*
* // Define the array strides:
* var sx = [ 1 ];
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
* var idx = out.get();
* // returns 1
*/
var findIndex = factory( table, [ idtypes ], odtypes, policies );


// EXPORTS //

module.exports = findIndex;
