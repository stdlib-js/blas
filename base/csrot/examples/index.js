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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var ccopy = require( './../../../base/ccopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var csrot = require( './../lib' );

function rand() {
	return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var x = filledarrayBy( 10, 'complex64', rand );
var xc = ccopy( x.length, x, 1, zeros( x.length, 'complex64' ), 1 );

var y = filledarrayBy( 10, 'complex64', rand );
var yc = ccopy( y.length, y, 1, zeros( y.length, 'complex64' ), 1 );

// Apply a plane rotation:
csrot( x.length, x, 1, y, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', xc, yc, x, y );
