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

import ccopy = require( './../../../../base/ccopy' );
import cscal = require( './../../../../base/cscal' );
import csrot = require( './../../../../base/csrot' );
import cswap = require( './../../../../base/cswap' );
import dasum = require( './../../../../base/dasum' );
import daxpy = require( './../../../../base/daxpy' );
import dcopy = require( './../../../../base/dcopy' );
import ddot = require( './../../../../base/ddot' );
import dnrm2 = require( './../../../../base/dnrm2' );
import drot = require( './../../../../base/drot' );
import drotm = require( './../../../../base/drotm' );
import dscal = require( './../../../../base/dscal' );
import dswap = require( './../../../../base/dswap' );
import idamax = require( './../../../../base/idamax' );
import isamax = require( './../../../../base/isamax' );
import sasum = require( './../../../../base/sasum' );
import saxpy = require( './../../../../base/saxpy' );
import scopy = require( './../../../../base/scopy' );
import sdot = require( './../../../../base/sdot' );
import snrm2 = require( './../../../../base/snrm2' );
import srot = require( './../../../../base/srot' );
import sscal = require( './../../../../base/sscal' );
import zcopy = require( './../../../../base/zcopy' );
import zdrot = require( './../../../../base/zdrot' );
import zswap = require( './../../../../base/zswap' );

/**
* Interface describing the `wasm` namespace.
*/
interface Namespace {
	/**
	* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ccopy( x.length, x, 1, y, 1 );
	* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	ccopy: typeof ccopy;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param ca - scalar constant
	* @param cx - input array
	* @param strideX - `cx` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.cscal( 3, ca, cx, 1 );
	* // cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.cscal.ndarray( 3, ca, cx, 1, 0 );
	* // cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*/
	cscal: typeof cscal;

	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.csrot( 2, cx, 2, cy, 1, 0.8, 0.6 );
	* // cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
	* // cy => <Complex64Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.csrot.ndarray( 2, cx, 2, 0, cy, 1, 0, 0.8, 0.6 );
	* // cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
	* // cy => <Complex64Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
	*/
	csrot: typeof csrot;

	/**
	* Interchanges two complex single-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.cswap( x.length, x, 1, y, 1 );
	* // x => <Complex64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Complex64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	cswap: typeof cswap;

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

	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.daxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	daxpy: typeof daxpy;

	/**
	* Copies values from `x` into `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dcopy( x.length, x, 1, y, 1 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dcopy: typeof dcopy;

	/**
	* Computes the dot product of `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.ddot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.ddot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	ddot: typeof ddot;

	/**
	* Computes the L2-norm of a double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.dnrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.dnrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	dnrm2: typeof dnrm2;

	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.drot( x.length, x, 1, y, 1, 0.8, 0.6 );
	* // x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
	* // y => <Float64Array>[ ~4.2, 4.4, ~4.6, ~4.8, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.drot.ndarray( 3, x, 2, 1, y, 2, 1, 0.8, 0.6 );
	* // x => <Float64Array>[ 1.0, 6.4, 3.0, 9.2, 5.0, 12.0 ]
	* // y => <Float64Array>[ 7.0, 5.2, 9.0, 5.6, 11.0, ~6.0 ]
	*/
	drot: typeof drot;

	/**
	* Applies a modified Givens plane rotation.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param param - parameters for the modified Givens transformation
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* ns.drotm( 2, x, 2, y, 1, param );
	* // x => <Float64Array>[ ~-17.0, 2.0, ~-18.0, 4.0, 5.0 ]
	* // y => <Float64Array>[ ~8.0, ~13.0, 8.0, 9.0, 10.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* ns.drotm.ndarray( 2, x, 1, 0, y, 2, 1, param );
	* // x => <Float64Array>[ ~-20.0, ~-25.0, 3.0, 4.0, 5.0 ]
	* // y => <Float64Array>[ 6.0, ~9.0, 8.0, ~13.0, 10.0 ]
	*/
	drotm: typeof drotm;

	/**
	* Multiplies a double-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - index increment
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dscal( x.length, 5.0, x, 1 );
	* // x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.dscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	dscal: typeof dscal;

	/**
	* Interchanges two double-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dswap( x.length, x, 1, y, 1 );
	* // x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.dswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	dswap: typeof dswap;

	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns index value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.idamax( 4, x, 2 );
	* // returns 2
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.idamax.ndarray( x.length, x, 1, 0 );
	* // returns 3
	*/
	idamax: typeof idamax;

	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns index value
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.isamax( 4, x, 2 );
	* // returns 2
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* var idx = ns.isamax.ndarray( x.length, x, 1, 0 );
	* // returns 3
	*/
	isamax: typeof isamax;

	/**
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	sasum: typeof sasum;

	/**
	* Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.saxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* ns.saxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	saxpy: typeof saxpy;

	/**
	* Copies values from `x` into `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.scopy( x.length, x, 1, y, 1 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.scopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	scopy: typeof scopy;

	/**
	* Computes the dot product of `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	sdot: typeof sdot;

	/**
	* Computes the L2-norm of a single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.snrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var z = ns.snrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	snrm2: typeof snrm2;

	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.srot( 3, x, 2, y, 2, 0.8, 0.6 );
	* // x => <Float32Array>[ 5.0, 2.0, ~7.8, 4.0, ~10.6, 6.0 ]
	* // y => <Float32Array>[ 5.0, 8.0, ~5.4, 10.0, ~5.8, 12.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.srot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
	* // x => <Float32Array>[ 1.0, ~5.8, ~7.2, ~8.6, 10.0 ]
	* // y => <Float32Array>[ 6.0, ~4.4, ~4.6, ~4.8, 5.0 ]
	*/
	srot: typeof srot;

	/**
	* Multiplies a single-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - index increment
	* @returns input array
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sscal( x.length, 5.0, x, 1 );
	* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
	*
	* ns.sscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	sscal: typeof sscal;

	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zcopy( x.length, x, 1, y, 1 );
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	zcopy: typeof zcopy;

	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zdrot( 2, zx, 2, zy, 1, 0.8, 0.6 );
	* // zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
	* // zy => <Complex128Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zdrot.ndarray( 2, zx, 2, 0, zy, 1, 0, 0.8, 0.6 );
	* // zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
	* // zy => <Complex128Array>[ ~-0.6, ~-1.2, -3.0, ~-3.6, 0.0, 0.0, 0.0, 0.0 ]
	*/
	zdrot: typeof zdrot;

	/**
	* Interchanges two complex double-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zswap( x.length, x, 1, y, 1 );
	* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	* // y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	zswap: typeof zswap;
}

/**
* Basic linear algebra subprograms (BLAS) compiled to WebAssembly.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
