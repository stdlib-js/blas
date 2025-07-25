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
* BLAS level 2 routine to perform the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.
*
* @module @stdlib/blas/base/gger
*
* @example
* var gger = require( '@stdlib/blas/base/gger' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*
* @example
* var gger = require( '@stdlib/blas/base/gger' );
*
* var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var x = [ 1.0, 1.0 ];
* var y = [ 1.0, 1.0, 1.0 ];
*
* gger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
* // A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;

// exports: { "ndarray": "main.ndarray" }
