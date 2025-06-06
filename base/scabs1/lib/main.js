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

var f32 = require( '@stdlib/number/float64/base/to-float32' );
var absf = require( '@stdlib/math/base/special/absf' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );


// MAIN //

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number.
*
* @param {Complex64} c - complex number
* @returns {number} result
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var v = scabs1( new Complex64( 5.0, -3.0 ) );
* // returns 8.0
*/
function scabs1( c ) {
	return f32( absf( realf( c ) ) + absf( imagf( c ) ) );
}


// EXPORTS //

module.exports = scabs1;
