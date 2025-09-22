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
var gsorthp = require( './../../../ext/base/ndarray/gsorthp' );
var dsorthp = require( './../../../ext/base/ndarray/dsorthp' );
var ssorthp = require( './../../../ext/base/ndarray/ssorthp' );
var factory = require( '@stdlib/ndarray/base/nullary-strided1d-dispatch-factory' );


// VARIABLES //

var idtypes0 = dtypes( 'real_and_generic' ); // input ndarray
var idtypes1 = dtypes( 'real_and_generic' ); // sortOrder ndarray
var odtypes = dtypes( 'real_and_generic' );
var table = {
	'types': [
		'float64', // input/output
		'float32'  // input/output
	],
	'fcns': [
		dsorthp,
		ssorthp
	],
	'default': gsorthp
};
var options = {
	'strictTraversalOrder': true
};


// MAIN //

/**
* Sorts an input ndarray along one or more ndarray dimensions using heapsort.
*
* @private
* @name sorthp
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {ndarray} sortOrder - ndarray containing the sort order
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} second argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Create an ndarray containing the sort order:
* var sortOrder = scalar2ndarray( 1.0, {
*     'dtype': 'float64'
* });
*
* // Perform operation:
* var out = sorthp( x, sortOrder );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*/
var sorthp = factory( table, [ idtypes0, idtypes1 ], odtypes, options );


// EXPORTS //

module.exports = sorthp;
