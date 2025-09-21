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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var dtypes = require( '@stdlib/ndarray/dtypes' );
var gcusum = require( './../../../ext/base/ndarray/gcusum' );
var dcusum = require( './../../../ext/base/ndarray/dcusum' );
var scusum = require( './../../../ext/base/ndarray/scusum' );
var factory = require( '@stdlib/ndarray/base/unary-strided1d-dispatch-factory' );


// VARIABLES //

var idtypes0 = dtypes( 'numeric_and_generic' ); // input ndarray
var idtypes1 = dtypes( 'numeric_and_generic' ); // initial values ndarray
var odtypes = dtypes( 'numeric_and_generic' );
var policies = {
	'output': 'accumulation',
	'casting': 'none' // NOTE: in this case, we know that, at least for `gcusum`, all scalar accumulation happens in double-precision, so casting an `int8` array to, e.g., `int32` is not necessary. Were we ever to implement specialized kernels beyond floating-point, we may need to revisit depending on the precision of the underlying accumulators.
};
var table = {
	'types': [
		'float64', 'float64', // input, output
		'float32', 'float32'  // input, output

		// FIXME: add specialized support for `ccusum` and `zcusum` once the corresponding packages are implemented
	],
	'fcns': [
		dcusum,
		scusum
	],
	'default': gcusum
};
var options = {
	'strictTraversalOrder': true
};


// MAIN //

/**
* Computes the cumulative sum along one or more ndarray dimensions.
*
* @private
* @name cusum
* @type {Function}
* @param {ndarray} x - input ndarray
* @param {ndarray} initial - ndarray containing initial values
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @param {*} [options.dtype] - output ndarray data type
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
* // Create an ndarray containing an initial value:
* var initial = scalar2ndarray( 0.0, {
*     'dtype': 'float64'
* });
*
* // Perform operation:
* var out = cusum( x, initial );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ [ 1.0, 3.0 ] ], [ [ 0.0, 4.0 ] ], [ [ -1.0, 5.0 ] ] ]
*/
var cusum = factory( table, [ idtypes0, idtypes1 ], odtypes, policies, options ); // eslint-disable-line max-len


// EXPORTS //

module.exports = cusum;
