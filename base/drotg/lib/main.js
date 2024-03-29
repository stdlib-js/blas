/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var fcn = require( './assign.js' );


// MAIN //

/**
* Constructs a Givens plane rotation.
*
* @param {number} a - rotational elimination parameter
* @param {number} b - rotational elimination parameter
* @returns {Float64Array} output array
*
* @example
* var out = drotg( 0.0, 2.0 );
* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
*/
function drotg( a, b ) {
	var out = new Float64Array( 4 );
	return fcn( a, b, out, 1, 0 );
}


// EXPORTS //

module.exports = drotg;
