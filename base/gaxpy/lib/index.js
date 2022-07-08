/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* BLAS level 1 routine to multiply `x` and a constant and add the result to `y`.
*
* @module @stdlib/blas/base/gaxpy
*
* @example
* var gaxpy = require( '@stdlib/blas/base/gaxpy' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
* var alpha = 5.0;
*
* gaxpy( x.length, alpha, x, 1, y, 1 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*
*
* @example
* var gaxpy = require( '@stdlib/blas/base/gaxpy' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
* var alpha = 5.0;
*
* gaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var gaxpy = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( gaxpy, 'ndarray', ndarray );


// EXPORTS //

module.exports = gaxpy;
