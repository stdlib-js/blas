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
* WebAssembly module to calculate the L2-norm of a complex single-precision floating-point vector.
*
* @name scnrm2
* @type {Routine}
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* var out = scnrm2.main( x.length, x, 1 );
* // returns ~9.54
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* var out = scnrm2.ndarray( x.length, x, 1, 0 );
* // returns ~9.54
*/
var scnrm2 = new Routine();
scnrm2.initializeSync(); // eslint-disable-line node/no-sync


// EXPORTS //

module.exports = scnrm2;
