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
* Add a scalar constant to each strided array element and compute the sum using pairwise summation.
*
* @module @stdlib/blas/ext/base/gapxsumpw
*
* @example
* var gapxsumpw = require( '@stdlib/blas/ext/base/gapxsumpw' );
*
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = gapxsumpw( x.length, 5.0, x, 1 );
* // returns 16.0
*
* @example
* var gapxsumpw = require( '@stdlib/blas/ext/base/gapxsumpw' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = gapxsumpw.ndarray( 4, 5.0, x, 2, 1 );
* // returns 25.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
