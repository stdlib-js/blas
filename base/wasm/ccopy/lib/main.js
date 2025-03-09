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
* WebAssembly module to copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
*
* @name ccopy
* @type {Routine}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.main( x.length, x, 1, y, 1 );
* // y => <Complex64Array>[ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.ndarray( x.length, x, 1, 0, y, -1, 2 );
* // y => <Complex64Array>[ -5.0, -6.0, -3.0, -4.0, -1.0, -2.0 ]
*/
var ccopy = new Routine();
ccopy.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = ccopy;
