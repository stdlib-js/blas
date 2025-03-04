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

import dapxsumkbn = require( './../../../../../ext/base/dapxsumkbn' );

/**
* Interface describing the `wasm` namespace.
*/
interface Namespace {
	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumkbn: typeof dapxsumkbn;
}

/**
* Extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
