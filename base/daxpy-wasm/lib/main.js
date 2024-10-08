/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* WebAssembly module to multiply a vector `x` by a constant and add the result to `y`.
*
* @name daxpy
* @type {Routine}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* daxpy.main( x.length, 5.0, x, 1, y, 1 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
var daxpy = new Routine();
daxpy.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = daxpy;
