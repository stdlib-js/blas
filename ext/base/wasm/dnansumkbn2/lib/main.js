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

var Routine = require( './routine.js' );


// MAIN //

/**
* WebAssembly routine to compute the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
*
* @name dnansumkbn2
* @type {Routine}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dnansumkbn2 = require( '@stdlib/blas/ext/base/wasm/dnansumkbn2' );
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
*
* // Perform operation:
* var v = dnansumkbn2.main( 4, x, 1 );
* // returns 1.0
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dnansumkbn2 = require( '@stdlib/blas/ext/base/wasm/dnansumkbn2' );
*
* // Define a strided array:
* var x = new Float64Array( [ 2.0, 1.0, -2.0, NaN, -2.0, 2.0, 3.0, 4.0 ] );
*
* // Perform operation:
* var v = dnansumkbn2.ndarray( 4, x, 2, 1 );
* // returns 7.0
*/
var dnansumkbn2 = new Routine();
dnansumkbn2.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = dnansumkbn2;
