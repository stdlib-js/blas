/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Compute the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.
*
* @module @stdlib/blas/ext/base/sdssumpw
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdssumpw = require( '@stdlib/blas/ext/base/sdssumpw' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = sdssumpw( 4, x, 1 );
* // returns 1.0
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sdssumpw = require( '@stdlib/blas/ext/base/sdssumpw' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = sdssumpw.ndarray( 4, x, 2, 1 );
* // returns 5.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var sdssumpw;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sdssumpw = main;
} else {
	sdssumpw = tmp;
}


// EXPORTS //

module.exports = sdssumpw;

// exports: { "ndarray": "sdssumpw.ndarray" }
