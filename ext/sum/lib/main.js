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
var gsum = require( './../../../ext/base/ndarray/gsum' );
var dsum = require( './../../../ext/base/ndarray/dsum' );
var ssum = require( './../../../ext/base/ndarray/ssum' );
var csum = require( './../../../ext/base/ndarray/csum' );
var zsum = require( './../../../ext/base/ndarray/zsum' );
var factory = require( '@stdlib/ndarray/base/unary-reduce-strided1d-dispatch-factory' );


// VARIABLES //

var idtypes = dtypes( 'numeric_and_generic' );
var odtypes = dtypes( 'numeric_and_generic' );
var policies = {
	'output': 'accumulation',
	'casting': 'none' // NOTE: in this case, we know that, at least for `gsum`, all scalar accumulation happens in double-precision, so casting an `int8` array to, e.g., `int32` is not necessary. Were we ever to implement specialized kernels beyond floating-point, we may need to revisit depending on the precision of the underlying accumulators.
};
var table = {
	'types': [
		'float64',    // input
		'float32',    // input
		'complex128', // input
		'complex64'   // input
	],
	'fcns': [
		dsum,
		ssum,
		zsum,
		csum
	],
	'default': gsum
};


// MAIN //

/**
* Computes the sum along one or more ndarray dimensions.
*
* @name sum
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform a reduction
* @param {boolean} [options.keepdims=false] - boolean indicating whether the reduced dimensions should be included in the returned ndarray as singleton dimensions
* @param {string} [options.dtype] - output ndarray data type
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 0.0, 2.0, 3.0, 0.0, 0.0, 6.0, 7.0, 0.0, 0.0, 10.0, 11.0, 0.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 4, 4, 1 ];
*
* // Define the index offset:
* var ox = 1;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform reduction:
* var out = sum( x );
* // returns <ndarray>
*
* var v = out.get();
* // returns 39.0
*/
var sum = factory( table, [ idtypes ], odtypes, policies );


// EXPORTS //

module.exports = sum;
