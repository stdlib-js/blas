/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import ccopy = require( './../../../base/ccopy' );
import cswap = require( './../../../base/cswap' );
import dasum = require( './../../../base/dasum' );
import daxpy = require( './../../../base/daxpy' );
import dcopy = require( './../../../base/dcopy' );
import ddot = require( './../../../base/ddot' );
import dnrm2 = require( './../../../base/dnrm2' );
import drotg = require( './../../../base/drotg' );
import dscal = require( './../../../base/dscal' );
import dsdot = require( './../../../base/dsdot' );
import dswap = require( './../../../base/dswap' );
import gasum = require( './../../../base/gasum' );
import gaxpy = require( './../../../base/gaxpy' );
import gcopy = require( './../../../base/gcopy' );
import gdot = require( './../../../base/gdot' );
import gnrm2 = require( './../../../base/gnrm2' );
import gscal = require( './../../../base/gscal' );
import gswap = require( './../../../base/gswap' );
import sasum = require( './../../../base/sasum' );
import saxpy = require( './../../../base/saxpy' );
import scopy = require( './../../../base/scopy' );
import sdot = require( './../../../base/sdot' );
import sdsdot = require( './../../../base/sdsdot' );
import snrm2 = require( './../../../base/snrm2' );
import srotg = require( './../../../base/srotg' );
import sscal = require( './../../../base/sscal' );
import sswap = require( './../../../base/sswap' );

/**
* Interface describing the `base` namespace.
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
	* var realf = require( '@stdlib/complex/realf' );
	* var imagf = require( '@stdlib/complex/imagf' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.ccopy( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/realf' );
	* var imagf = require( '@stdlib/complex/imagf' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*/
	ccopy: typeof ccopy;

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
	* var realf = require( '@stdlib/complex/realf' );
	* var imagf = require( '@stdlib/complex/imagf' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.cswap( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns 7.0
	*
	* im = imagf( z );
	* // returns 8.0
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/realf' );
	* var imagf = require( '@stdlib/complex/imagf' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 1.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns 7.0
	*
	* im = imagf( z );
	* // returns 8.0
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
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @returns output array
	*
	* @example
	* var out = ns.drotg( 0.0, 2.0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var out = new Float64Array( 4 );
	* var y = ns.drotg.assign( 0.0, 2.0, out, 1, 0 );
	* // returns <Float64Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	drotg: typeof drotg;

	/**
	* Multiplies a double-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
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
	* Computes the dot product of `x` and `y` with extended accumulation and result.
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
	* var z = ns.dsdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.dsdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	dsdot: typeof dsdot;

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
	* Computes the sum of the absolute values.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum of absolute values
	*
	* @example
	* var x = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gasum( x.length, x, 1 );
	* // returns 15.0
	*
	* @example
	* var x = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gasum.ndarray( x.length, x, 1, 0 );
	* // returns 21.0
	*/
	gasum: typeof gasum;

	/**
	* Multiplies `x` by a constant `alpha` and adds the result to `y`.
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
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ns.gaxpy( x.length, 5.0, x, 1, y, 1 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	*
	* ns.gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 );
	* // y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
	*/
	gaxpy: typeof gaxpy;

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
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gcopy( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	gcopy: typeof gcopy;

	/**
	* Computes the dot product of two vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
	* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gdot( x.length, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
	* var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
	*
	* var z = ns.gdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	gdot: typeof gdot;

	/**
	* Computes the L2-norm of a vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns L2-norm
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var z = ns.gnrm2( x.length, x, 1 );
	* // returns 3.0
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var z = ns.gnrm2.ndarray( x.length, x, 1, 0 );
	* // returns 3.0
	*/
	gnrm2: typeof gnrm2;

	/**
	* Multiplies a vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
	* @returns input array
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gscal( x.length, 5.0, x, 1 );
	* // x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*
	* @example
	* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	*
	* ns.gscal.ndarray( x.length, 5.0, x, 1, 0 );
	* // x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
	*/
	gscal: typeof gscal;

	/**
	* Interchanges vectors `x` and `y`.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gswap( x.length, x, 1, y, 1 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* ns.gswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => [ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	gswap: typeof gswap;

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
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant added to dot product
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
	* var z = ns.sdsdot( x.length, 0.0, x, 1, y, 1 );
	* // returns -5.0
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
	* var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );
	*
	* var z = ns.sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // returns -5.0
	*/
	sdsdot: typeof sdsdot;

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
	* Constructs a Givens plane rotation.
	*
	* @param a - rotational elimination parameter
	* @param b - rotational elimination parameter
	* @returns output array
	*
	* @example
	* var out = ns.srotg( 0.0, 2.0 );
	* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var out = new Float32Array( 4 );
	* var y = ns.srotg.assign( 0.0, 2.0, out, 1, 0 );
	* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
	*
	* var bool = ( y === out );
	* // returns true
	*/
	srotg: typeof srotg;

	/**
	* Multiplies a single-precision floating-point vector `x` by a constant `alpha`.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param stride - stride length
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
	* Interchanges two single-precision floating-point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.sswap( x.length, x, 1, y, 1 );
	* // x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	*
	* ns.sswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Float32Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
	* // y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	sswap: typeof sswap;
}

/**
* Base (i.e., lower-level) basic linear algebra subprograms (BLAS).
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
