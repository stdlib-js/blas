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

import dapx = require( './../../../../../ext/base/wasm/dapx' );
import dapxsum = require( './../../../../../ext/base/wasm/dapxsum' );
import dapxsumkbn = require( './../../../../../ext/base/wasm/dapxsumkbn' );
import dapxsumors = require( './../../../../../ext/base/wasm/dapxsumors' );
import dapxsumpw = require( './../../../../../ext/base/wasm/dapxsumpw' );
import dasumpw = require( './../../../../../ext/base/wasm/dasumpw' );
import dnanasumors = require( './../../../../../ext/base/wasm/dnanasumors' );
import dnansumkbn2 = require( './../../../../../ext/base/wasm/dnansumkbn2' );
import dnansumpw = require( './../../../../../ext/base/wasm/dnansumpw' );
import sapxsumkbn = require( './../../../../../ext/base/wasm/sapxsumkbn' );

/**
* Interface describing the `wasm` namespace.
*/
interface Namespace {
	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* ns.dapx.main( 3, 5.0, x, 1 );
	* // x => Float64Array[ 6.0, 3.0, 7.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* ns.dapx.ndarray( 4, 5.0, x, 2, 1 );
	* // x => Float64Array[ 7.0, 6.0, 7.0, 3.0, 3.0, 7.0, 8.0, 9.0 ]
	*/
	dapx: typeof dapx;

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
	* var out = ns.dapxsum.main( 3, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dapxsum.ndarray( 4, 5.0, x, 2, 1 );
	* // returns 25.0
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
	* var out = ns.dapxsumkbn.main( 3, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dapxsumkbn.ndarray( 4, 5.0, x, 2, 1 );
	* // returns 25.0
	*/
	dapxsumkbn: typeof dapxsumkbn;

	/**
	* Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation.
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
	* var out = ns.dapxsumors.main( 3, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dapxsumors.ndarray( 4, 5.0, x, 2, 1 );
	* // returns 25.0
	*/
	dapxsumors: typeof dapxsumors;

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
	* var out = ns.dapxsumpw.main( 3, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dapxsumpw.ndarray( 4, 5.0, x, 2, 1 );
	* // returns 25.0
	*/
	dapxsumpw: typeof dapxsumpw;

	/**
	* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements using pairwise summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var out = ns.dasumpw.main( 3, x, 1 );
	* // returns 5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dasumpw.ndarray( 4, x, 2, 1 );
	* // returns 9.0
	*/
	dasumpw: typeof dasumpw;

	/**
	* Computes the sum of absolute values (L1 norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
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
	* var out = ns.dnanasumors.main( 4, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dnanasumors.ndarray( 4, x, 2, 1 );
	* // returns 5.0
	*/
	dnanasumors: typeof dnanasumors;

	/**
	* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
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
	* var out = ns.dnansumkbn2.main( 4, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, -2.0, NaN, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dnansumkbn2.ndarray( 4, x, 2, 1 );
	* // returns 7.0
	*/
	dnansumkbn2: typeof dnansumkbn2;

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
	* var out = ns.dnansumpw.main( 4, x, 1 );
	* // returns 1.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.dnansumpw.ndarray( 4, x, 2, 1 );
	* // returns 5.0
	*/
	dnansumpw: typeof dnansumpw;

	/**
	* Adds a scalar constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var out = ns.sapxsumkbn.main( 3, 5.0, x, 1 );
	* // returns 16.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* var out = ns.sapxsumkbn.ndarray( 4, 5.0, x, 2, 1 );
	* // returns 25.0
	*/
	sapxsumkbn: typeof sapxsumkbn;
}

/**
* Extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
