/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import dasum = require( './../../../../base/dasum' );

/**
* Interface describing the namespace.
*/
interface Namespace {
	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	dasum: typeof dasum;
}

/**
* Basic linear algebra subprograms (BLAS) compiled to WebAssembly.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
