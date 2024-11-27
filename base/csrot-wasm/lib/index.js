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

/**
* WebAssembly routine to apply a plane rotation.
*
* @module @stdlib/blas/base/csrot-wasm
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var csrot = require( '@stdlib/blas/base/csrot-wasm' );
*
* // Define strided arrays...
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var cy = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 5.0
*
* var im = imagf( v );
* // returns ~6.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns 5.0
*
* im = imagf( v );
* // returns ~5.2
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var csrot = require( '@stdlib/blas/base/csrot-wasm' );
*
* // Define strided arrays...
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var cy = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 5.0
*
* var im = imagf( v );
* // returns ~6.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns 5.0
*
* im = imagf( v );
* // returns ~5.2
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
* var csrot = require( '@stdlib/blas/base/csrot-wasm' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new csrot.Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* mod.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var cxptr = 0;
* var cyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var cx = new Complex64Array( xbuf.buffer );
* mod.write( cxptr, cx );
*
* var ybuf = ones( N*2, 'float32' );
* var cy = new Complex64Array( ybuf.buffer );
* mod.write( cyptr, cy );
*
* // Perform computation:
* mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* mod.read( cxptr, viewX );
* mod.read( cyptr, viewY );
*
* console.log( reinterpretComplex64( viewY, 0 ) );
* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex64( viewX, 0 ) );
* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var Module = require( './module.js' );


// MAIN //

setReadOnly( main, 'Module', Module );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }