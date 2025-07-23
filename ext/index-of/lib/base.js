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
var gindexOf = require( './../../../ext/base/ndarray/gindex-of' );
var dindexOf = require( './../../../ext/base/ndarray/dindex-of' );
var sindexOf = require( './../../../ext/base/ndarray/sindex-of' );
var factory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );


// VARIABLES //

var idtypes0 = dtypes( 'all' ); // input ndarray
var idtypes1 = dtypes( 'all' ); // search element ndarray
var idtypes2 = dtypes( 'integer_index_and_generic' ); // from index ndarray
var odtypes = dtypes( 'integer_index_and_generic' );
var policies = {
	'output': 'integer_index_and_generic',
	'casting': 'none'
};
var table = {
	'types': [
		'float64',
		'float32'

		// FIXME: add specialized support for `cindexOf` and `zindexOf` once the corresponding packages are implemented
	],
	'fcns': [
		dindexOf,
		sindexOf
	],
	'default': gindexOf
};


// MAIN //

/**
* Returns the first index of a specified search element along an ndarray dimension.
*
* @private
* @name indexOf
* @type {Function}
* @param {ndarrayLike} x - input ndarray
* @param {ndarrayLike} searchElement - search element
* @param {ndarrayLike} fromIndex - indices from which to begin searching
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be either an ndarray-like object
* @throws {TypeError} third argument must be either an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
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
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Create a search element ndarray:
* var searchElement = scalar2ndarray( 4.0, {
*     'dtype': 'float64'
* })
*
* // Create a from index ndarray:
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'int32'
* })
*
* // Perform operation:
* var out = indexOf( x, searchElement, fromIndex );
* // returns <ndarray>
*
* var idx = out.get();
* // returns 3
*/
var indexOf = factory( table, [ idtypes0, idtypes1, idtypes2 ], odtypes, policies ); // eslint-disable-line max-len


// EXPORTS //

module.exports = indexOf;
