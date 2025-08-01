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
* Return the last index of a specified search element in a double-precision floating-point strided array.
*
* @module @stdlib/blas/ext/base/dlast-index-of
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlastIndexOf = require( '@stdlib/blas/ext/base/dlast-index-of' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );
*
* var idx = dlastIndexOf( x.length, 3.0, x, 1 );
* // returns 7
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var dlastIndexOf = require( '@stdlib/blas/ext/base/dlast-index-of' );
*
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );
*
* var idx = dlastIndexOf.ndarray( x.length, 3.0, x, 1, 0 );
* // returns 7
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var main = require( './main.js' );


// MAIN //

var dlastIndexOf;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dlastIndexOf = main;
} else {
	dlastIndexOf = tmp;
}


// EXPORTS //

module.exports = dlastIndexOf;

// exports: { "ndarray": "dlastIndexOf.ndarray" }
