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

import dapxsum = require( './../../../../../ext/base/dapxsum' );
import dapxsumkbn = require( './../../../../../ext/base/dapxsumkbn' );
import dapxsumpw = require( './../../../../../ext/base/dapxsumpw' );
import dnansumpw = require( './../../../../../ext/base/dnansumpw' );

/**
* Interface describing the `wasm` namespace.
*/
interface Namespace {
	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum.
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
	* var v = ns.dapxsum( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsum.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsum: typeof dapxsum;

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

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using pairwise summation.
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
	* var v = ns.dapxsumpw( x.length, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = ns.dapxsumpw.ndarray( x.length, 5.0, x, 1, 0 );
	* // returns 16.0
	*/
	dapxsumpw: typeof dapxsumpw;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumpw( x.length, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
	*
	* var v = ns.dnansumpw.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	dnansumpw: typeof dnansumpw;
}

/**
* Extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
