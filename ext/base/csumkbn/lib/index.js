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

/**
* Compute the sum of single-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas/ext/base/csumkbn
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var csumkbn = require( '@stdlib/blas/ext/base/csumkbn' );
*
* var x = new Complex64Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = csumkbn( x.length, x, 1 );
* // returns <Complex64>[ 3.0, 1.0 ]
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var csumkbn = require( '@stdlib/blas/ext/base/csumkbn' );
*
* var x = new Complex64Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = csumkbn.ndarray( x.length, x, 2, 0 );
* // returns <Complex64>[ 3.0, 1.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var csumkbn;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	csumkbn = main;
} else {
	csumkbn = tmp;
}


// EXPORTS //

module.exports = csumkbn;

// exports: { "ndarray": "csumkbn.ndarray" }
