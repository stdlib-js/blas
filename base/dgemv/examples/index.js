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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dgemv = require( './../lib' );

var opts = {
	'dtype': 'float64'
};

var M = 3;
var N = 3;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( N, 0, 255, opts );
var y = discreteUniform( M, 0, 255, opts );

dgemv( 'row-major', 'no-transpose', M, N, 1.0, A, N, x, 1, 1.0, y, 1 );
console.log( y );

dgemv.ndarray( 'no-transpose', M, N, 1.0, A, N, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
console.log( y );
