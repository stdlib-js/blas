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

import assert = require( './../../../base/assert' );
import caxpy = require( './../../../base/caxpy' );
import ccopy = require( './../../../base/ccopy' );
import cscal = require( './../../../base/cscal' );
import csrot = require( './../../../base/csrot' );
import cswap = require( './../../../base/cswap' );
import dasum = require( './../../../base/dasum' );
import daxpy = require( './../../../base/daxpy' );
import dcabs1 = require( './../../../base/dcabs1' );
import dcopy = require( './../../../base/dcopy' );
import ddot = require( './../../../base/ddot' );
import diagonalTypeEnum2Str = require( './../../../base/diagonal-type-enum2str' );
import diagonalTypeResolveEnum = require( './../../../base/diagonal-type-resolve-enum' );
import diagonalTypeResolveStr = require( './../../../base/diagonal-type-resolve-str' );
import diagonalTypeStr2Enum = require( './../../../base/diagonal-type-str2enum' );
import diagonalTypes = require( './../../../base/diagonal-types' );
import dnrm2 = require( './../../../base/dnrm2' );
import drot = require( './../../../base/drot' );
import drotg = require( './../../../base/drotg' );
import drotm = require( './../../../base/drotm' );
import dscal = require( './../../../base/dscal' );
import dsdot = require( './../../../base/dsdot' );
import dspmv = require( './../../../base/dspmv' );
import dswap = require( './../../../base/dswap' );
import dsymv = require( './../../../base/dsymv' );
import dsyr = require( './../../../base/dsyr' );
import dsyr2 = require( './../../../base/dsyr2' );
import dtrmv = require( './../../../base/dtrmv' );
import dznrm2 = require( './../../../base/dznrm2' );
import gasum = require( './../../../base/gasum' );
import gaxpy = require( './../../../base/gaxpy' );
import gcopy = require( './../../../base/gcopy' );
import gdot = require( './../../../base/gdot' );
import gnrm2 = require( './../../../base/gnrm2' );
import gscal = require( './../../../base/gscal' );
import gswap = require( './../../../base/gswap' );
import idamax = require( './../../../base/idamax' );
import isamax = require( './../../../base/isamax' );
import layoutEnum2Str = require( './../../../base/layout-enum2str' );
import layoutResolveEnum = require( './../../../base/layout-resolve-enum' );
import layoutResolveStr = require( './../../../base/layout-resolve-str' );
import layoutStr2Enum = require( './../../../base/layout-str2enum' );
import layouts = require( './../../../base/layouts' );
import matrixTriangleEnum2Str = require( './../../../base/matrix-triangle-enum2str' );
import matrixTriangleResolveEnum = require( './../../../base/matrix-triangle-resolve-enum' );
import matrixTriangleResolveStr = require( './../../../base/matrix-triangle-resolve-str' );
import matrixTriangleStr2Enum = require( './../../../base/matrix-triangle-str2enum' );
import matrixTriangles = require( './../../../base/matrix-triangles' );
import operationSideEnum2Str = require( './../../../base/operation-side-enum2str' );
import operationSideResolveEnum = require( './../../../base/operation-side-resolve-enum' );
import operationSideResolveStr = require( './../../../base/operation-side-resolve-str' );
import operationSideStr2Enum = require( './../../../base/operation-side-str2enum' );
import operationSides = require( './../../../base/operation-sides' );
import sasum = require( './../../../base/sasum' );
import saxpy = require( './../../../base/saxpy' );
import scabs1 = require( './../../../base/scabs1' );
import scasum = require( './../../../base/scasum' );
import scnrm2 = require( './../../../base/scnrm2' );
import scopy = require( './../../../base/scopy' );
import sdot = require( './../../../base/sdot' );
import sdsdot = require( './../../../base/sdsdot' );
import sgemv = require( './../../../base/sgemv' );
import snrm2 = require( './../../../base/snrm2' );
import srot = require( './../../../base/srot' );
import srotg = require( './../../../base/srotg' );
import srotm = require( './../../../base/srotm' );
import sscal = require( './../../../base/sscal' );
import sspmv = require( './../../../base/sspmv' );
import sswap = require( './../../../base/sswap' );
import ssymv = require( './../../../base/ssymv' );
import ssyr = require( './../../../base/ssyr' );
import ssyr2 = require( './../../../base/ssyr2' );
import strmv = require( './../../../base/strmv' );
import transposeOperationEnum2Str = require( './../../../base/transpose-operation-enum2str' );
import transposeOperationResolveEnum = require( './../../../base/transpose-operation-resolve-enum' );
import transposeOperationResolveStr = require( './../../../base/transpose-operation-resolve-str' );
import transposeOperationStr2Enum = require( './../../../base/transpose-operation-str2enum' );
import transposeOperations = require( './../../../base/transpose-operations' );
import zaxpy = require( './../../../base/zaxpy' );
import zcopy = require( './../../../base/zcopy' );
import zdrot = require( './../../../base/zdrot' );
import zscal = require( './../../../base/zscal' );
import zswap = require( './../../../base/zswap' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Base BLAS assertion utilities.
	*/
	assert: typeof assert;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant and adds the result to a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param ca - scalar constant
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @returns second input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.caxpy( 2, ca, cx, 2, cy, 2 );
	* // cy => <Complex64Array>[ -1.0, 7.0, 1.0, 1.0, -1.0, 23.0, 1.0, 1.0 ]
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var ca = new Complex64( 2.0, 2.0 );
	*
	* ns.caxpy.ndarray( 3, ca, cx, 1, 1, cy, 1, 1 );
	* // cy => <Complex64Array>[ 1.0, 1.0, -1.0, 15.0, -1.0, 23.0, -1.0, 31.0 ]
	*/
	caxpy: typeof caxpy;

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
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
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
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
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
	* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point number.
	*
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var v = ns.dcabs1( new Complex128( 5.0, -3.0 ) );
	* // returns 8.0
	*/
	dcabs1: typeof dcabs1;

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
	* Returns the BLAS diagonal type string associated with a BLAS diagonal type enumeration constant.
	*
	* @param value - enumeration constant
	* @returns diagonal type string
	*
	* @example
	* var str2enum = require( './../../../base/diagonal-type-str2enum' );
	*
	* var v = str2enum( 'unit' );
	* // returns <number>
	*
	* var s = ns.diagonalTypeEnum2Str( v );
	* // returns 'unit'
	*/
	diagonalTypeEnum2Str: typeof diagonalTypeEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS diagonal type value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UNIT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - diagonal type value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.diagonalTypeResolveEnum( 'non-unit' );
	* // returns <number>
	*/
	diagonalTypeResolveEnum: typeof diagonalTypeResolveEnum;

	/**
	* Returns the diagonal type string associated with a BLAS diagonal type value.
	*
	* @param value - diagonal type value
	* @returns diagonal type string
	*
	* @example
	* var str2enum = require( './../../../base/diagonal-type-str2enum' );
	*
	* var v = ns.diagonalTypeResolveStr( str2enum( 'unit' ) );
	* // returns 'unit'
	*/
	diagonalTypeResolveStr: typeof diagonalTypeResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS diagonal type.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UNIT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param diagonal - diagonal type
	* @returns enumeration constant
	*
	* @example
	* var v = ns.diagonalTypeStr2Enum( 'unit' );
	* // returns <number>
	*/
	diagonalTypeStr2Enum: typeof diagonalTypeStr2Enum;

	/**
	* Returns a list of diagonal element types.
	*
	* @returns list of diagonal element types
	*
	* @example
	* var list = ns.diagonalTypes();
	* // e.g., returns [ 'non-unit', 'unit' ]
	*/
	diagonalTypes: typeof diagonalTypes;

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
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is being supplied
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param AP - packed form of a symmetric matrix `A`
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.dspmv( 'column-major', 'lower', 3, 1.0, AP, x, 1, 1.0, y, -1 );
	* // y => <Float64Array>[ 15.0, 12.0, 7.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.dspmv.ndarray( 'column-major', 'lower', 3, 1.0, AP, 0, x, 1, 0, 1.0, y, -1, 2 );
	* // y => <Float64Array>[ 15.0, 12.0, 7.0 ]
	*/
	dspmv: typeof dspmv;

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
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is to be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsymv( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 1.0, y, 2 );
	* // y => <Float64Array>[ 3.0, 2.0, 11.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsymv.ndarray( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 0, 1.0, y, 2, 0 );
	* // y => <Float64Array>[ 3.0, 2.0, 11.0 ]
	*/
	dsymv: typeof dsymv;

	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsyr( 'column-major', 'lower', 3, 2.0, x, 1, A, 3 );
	* // y => <Float64Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsyr.ndarray( 'lower', 3, 2.0, x, 1, 0, A, 3, 1, 0 );
	* // y => <Float64Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
	*/
	dsyr: typeof dsyr;

	/**
	* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 1.0, 0.0, 3.0, 2.0, 1.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsyr2( 'column-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
	* // A => <Float64Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.dsyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 1, 3, 0 );
	* // A => <Float64Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
	*/
	dsyr2: typeof dsyr2;

	/**
	* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether `A` is an upper or lower triangular matrix
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param diag - specifies whether `A` has a unit diagonal
	* @param N - number of elements along each dimension in the matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - input vector
	* @param strideX - `x` stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.dtrmv( 'row-major', 'lower', 'no-transpose', 'non-unit', 3, A, 3, x, 1 );
	* // x => <Float64Array>[ 1.0, 5.0, 15.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var A = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.dtrmv.ndarray( 'lower', 'no-transpose', 'non-unit', 3, A, 3, 1, 0, x, 1, 0 );
	* // x => <Float64Array>[ 1.0, 5.0, 15.0 ]
	*/
	dtrmv: typeof dtrmv;

	/**
	* Computes the L2-norm of a complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param zx - input array
	* @param strideX - stride length for `zx`
	* @returns L2-norm
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 3.0, -4.0, 0.0, 0.0, 5.0, -6.0 ] );
	*
	* var norm = ns.dznrm2( 2, zx, 2 );
	* // returns ~9.3
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	*
	* var x = new Complex128Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
	*
	* var norm = ns.dznrm2.ndarray( 2, zx, 1, 1 );
	* // returns ~9.3
	*/
	dznrm2: typeof dznrm2;

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
	* Returns the BLAS memory layout string associated with a BLAS memory layout enumeration constant.
	*
	* @param layout - enumeration constant
	* @returns layout string
	*
	* @example
	* var str2enum = require( './../../../base/layout-str2enum' );
	*
	* var v = str2enum( 'row-major' );
	* // returns <number>
	*
	* var s = ns.layoutEnum2Str( v );
	* // returns 'row-major'
	*/
	layoutEnum2Str: typeof layoutEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS memory layout value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROW_MAJOR == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param layout - layout value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.layoutResolveEnum( 'row-major' );
	* // returns <number>
	*/
	layoutResolveEnum: typeof layoutResolveEnum;

	/**
	* Returns the layout string associated with a BLAS memory layout value.
	*
	* @param layout - layout value
	* @returns layout string
	*
	* @example
	* var str2enum = require( './../../../base/layout-str2enum' );
	*
	* var v = ns.layoutResolveStr( str2enum( 'row-major' ) );
	* // returns 'row-major'
	*/
	layoutResolveStr: typeof layoutResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS memory layout string.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `ROW_MAJOR == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param layout - memory layout string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.layoutStr2Enum( 'row-major' );
	* // returns <number>
	*/
	layoutStr2Enum: typeof layoutStr2Enum;

	/**
	* Returns a list of memory layouts.
	*
	* @returns list of memory layouts
	*
	* @example
	* var list = ns.layouts();
	* // e.g., returns [ 'row-major', 'column-major' ]
	*/
	layouts: typeof layouts;

	/**
	* Returns the BLAS matrix triangle string associated with a BLAS matrix triangle enumeration constant.
	*
	* @param value - enumeration constant
	* @returns matrix triangle string
	*
	* @example
	* var str2enum = require( './../../../base/matrix-triangle-str2enum' );
	*
	* var v = str2enum( 'upper' );
	* // returns <number>
	*
	* var s = ns.matrixTriangleEnum2Str( v );
	* // returns 'upper'
	*/
	matrixTriangleEnum2Str: typeof matrixTriangleEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS matrix triangle value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UPPER == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - matrix triangle value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.matrixTriangleResolveEnum( 'lower' );
	* // returns <number>
	*/
	matrixTriangleResolveEnum: typeof matrixTriangleResolveEnum;

	/**
	* Returns the matrix triangle string associated with a BLAS matrix triangle value.
	*
	* @param value - matrix triangle value
	* @returns matrix triangle string
	*
	* @example
	* var str2enum = require( './../../../base/matrix-triangle-str2enum' );
	*
	* var v = ns.matrixTriangleResolveStr( str2enum( 'upper' ) );
	* // returns 'upper'
	*/
	matrixTriangleResolveStr: typeof matrixTriangleResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS matrix triangle.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `UPPER == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param value - matrix triangle string
	* @returns enumeration constant
	*
	* @example
	* var v = ns.matrixTriangleStr2Enum( 'upper' );
	* // returns <number>
	*/
	matrixTriangleStr2Enum: typeof matrixTriangleStr2Enum;

	/**
	* Returns a list of matrix triangles.
	*
	* @returns list of matrix triangles
	*
	* @example
	* var list = ns.matrixTriangles();
	* // e.g., returns [ 'upper', 'lower' ]
	*/
	matrixTriangles: typeof matrixTriangles;

	/**
	* Returns the BLAS operation side string associated with a BLAS operation side enumeration constant.
	*
	* @param operation - enumeration constant
	* @returns operation string
	*
	* @example
	* var str2enum = require( './../../../base/operation-side-str2enum' );
	*
	* var v = str2enum( 'left' );
	* // returns <number>
	*
	* var s = ns.operationSideEnum2Str( v );
	* // returns 'left'
	*/
	operationSideEnum2Str: typeof operationSideEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS operation side value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `LEFT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.operationSideResolveEnum( 'right' );
	* // returns <number>
	*/
	operationSideResolveEnum: typeof operationSideResolveEnum;

	/**
	* Returns the operation side string associated with a BLAS operation side value.
	*
	* @param operation - operation value
	* @returns operation side string
	*
	* @example
	* var str2enum = require( './../../../base/operation-side-str2enum' );
	*
	* var v = ns.operationSideResolveStr( str2enum( 'left' ) );
	* // returns 'left'
	*/
	operationSideResolveStr: typeof operationSideResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS operation side.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `LEFT == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation side
	* @returns enumeration constant
	*
	* @example
	* var v = ns.operationSideStr2Enum( 'left' );
	* // returns <number>
	*/
	operationSideStr2Enum: typeof operationSideStr2Enum;

	/**
	* Returns a list of operation sides.
	*
	* @returns list of operation sides
	*
	* @example
	* var list = ns.operationSides();
	* // e.g., returns [ 'left', 'right' ]
	*/
	operationSides: typeof operationSides;

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
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number.
	*
	* @param c - complex number
	* @returns result
	*
	* @example
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	*
	* var v = ns.scabs1( new Complex64( 5.0, -3.0 ) );
	* // returns 8.0
	*/
	scabs1: typeof scabs1;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - `cx` stride length
	* @returns out
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
	*
	* var out = ns.scasum( 4, cx, 2 );
	* // returns ~1.6
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
	*
	* var out = ns.scasum.ndarray( 4, cx, 2, 0 );
	* // returns ~1.6
	*/
	scasum: typeof scasum;

	/**
	* Computes the L2-norm of a complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param cx - input array
	* @param strideX - stride length for `cx`
	* @returns L2-norm
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
	*
	* var norm = ns.scnrm2( 4, cx, 2 );
	* // returns ~0.8
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var cx = new Complex64Array( [ 0.3, 0.1, 5.0, 8.0, 0.5, 0.0, 6.0, 9.0, 0.0, 0.5, 8.0, 3.0, 0.0, 0.2, 9.0, 4.0 ] );
	*
	* var norm = ns.scnrm2.ndarray( 4, cx, 2, 0 );
	* // returns ~0.8
	*/
	scnrm2: typeof scnrm2;

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
	* Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.
	*
	* @param order - storage layout
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param M - number of rows in the matrix `A`
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input vector
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input vector
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.sgemv( 'row-major', 'no-transpose', 3, 3, 1.0, A, 3, x, -1, 1.0, y, -1 );
	* // y => <Float32Array>[ 25.0, 16.0, 7.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.sgemv.ndarray( 'no-transpose', 3, 3, 1.0, A, 3, 1, 0, x, -1, 2, 1.0, y, -1, 2 );
	* // y => <Float32Array>[ 25.0, 16.0, 7.0 ]
	*/
	sgemv: typeof sgemv;

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
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* ns.srotm( 2, x, 2, y, 1, param );
	* // x => <Float32Array>[ ~-17.0, 2.0, ~-18.0, 4.0, 5.0 ]
	* // y => <Float32Array>[ ~8.0, ~13.0, 8.0, 9.0, 10.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	* var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* ns.srotm.ndarray( 2, x, 1, 0, y, 2, 1, param );
	* // x => <Float32Array>[ ~-20.0, ~-25.0, 3.0, 4.0, 5.0 ]
	* // y => <Float32Array>[ 6.0, ~9.0, 8.0, ~13.0, 10.0 ]
	*/
	srotm: typeof srotm;

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
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is being supplied
	* @param N - number of columns in the matrix `A`
	* @param alpha - scalar constant
	* @param AP - packed form of a symmetric matrix `A`
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.sspmv( 'column-major', 'lower', 3, 1.0, AP, x, 1, 1.0, y, -1 );
	* // y => <Float32Array>[ 15.0, 12.0, 7.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.sspmv.ndarray( 'column-major', 'lower', 3, 1.0, AP, x, 1, 0, 1.0, y, -1, 2 );
	* // y => <Float32Array>[ 15.0, 12.0, 7.0 ]
	*/
	sspmv: typeof sspmv;

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

	/**
	* Performs the matrix-vector operation `y = alpha*A*x + beta*y` where `alpha` and `beta` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` is to be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param beta - scalar constant
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns `y`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssymv( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 1.0, y, 2 );
	* // y => <Float32Array>[ 3.0, 2.0, 11.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssymv.ndarray( 'row-major', 'upper', 3, 2.0, A, 3, x, 1, 0, 1.0, y, 2, 0 );
	* // y => <Float32Array>[ 3.0, 2.0, 11.0 ]
	*/
	ssymv: typeof ssymv;

	/**
	* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - input vector
	* @param strideX - `x` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssyr( 'column-major', 'lower', 3, 2.0, x, 1, A, 3 );
	* // y => <Float32Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssyr.ndarray( 'lower', 3, 2.0, x, 1, 0, A, 3, 1, 0 );
	* // y => <Float32Array>[ 3.0, 5.0, 7.0, 0.0, 10.0, 14.0, 0.0, 0.0, 21.0 ]
	*/
	ssyr: typeof ssyr;

	/**
	* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
	* @param N - number of elements along each dimension in the matrix `A`
	* @param alpha - scalar constant
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param A - matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @returns `A`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 1.0, 0.0, 3.0, 2.0, 1.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssyr2( 'column-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
	* // A => <Float32Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 1.0, 1.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0 ] );
	* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	* var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	*
	* ns.ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 1, 3, 0 );
	* // A => <Float32Array>[ 3.0, 0.0, 0.0, 6.0, 9.0, 0.0, 9.0, 14.0, 19.0 ]
	*/
	ssyr2: typeof ssyr2;

	/**
	* Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.
	*
	* @param order - storage layout
	* @param uplo - specifies whether `A` is an upper or lower triangular matrix
	* @param trans - specifies whether `A` should be transposed, conjugate-transposed, or not transposed
	* @param diag - specifies whether `A` has a unit diagonal
	* @param N - number of elements along each dimension in the matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param x - input vector
	* @param strideX - `x` stride length
	* @returns `x`
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.strmv( 'row-major', 'lower', 'no-transpose', 'non-unit', 3, A, 3, x, 1 );
	* // x => <Float32Array>[ 1.0, 5.0, 15.0 ]
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	*
	* var A = new Float32Array( [ 1.0, 0.0, 0.0, 2.0, 3.0, 0.0, 4.0, 5.0, 6.0 ] );
	* var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
	*
	* ns.strmv.ndarray( 'lower', 'no-transpose', 'non-unit', 3, A, 3, 1, 0, x, 1, 0 );
	* // x => <Float32Array>[ 1.0, 5.0, 15.0 ]
	*/
	strmv: typeof strmv;

	/**
	* Returns the BLAS transpose operation string associated with a BLAS transpose operation enumeration constant.
	*
	* @param operation - enumeration constant
	* @returns operation string
	*
	* @example
	* var str2enum = require( './../../../base/transpose-operation-str2enum' );
	*
	* var v = str2enum( 'transpose' );
	* // returns <number>
	*
	* var s = ns.transposeOperationEnum2Str( v );
	* // returns 'transpose'
	*/
	transposeOperationEnum2Str: typeof transposeOperationEnum2Str;

	/**
	* Returns the enumeration constant associated with a BLAS transpose operation value.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `TRANSPOSE == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - operation value
	* @returns enumeration constant
	*
	* @example
	* var v = ns.transposeOperationResolveEnum( 'conjugate-transpose' );
	* // returns <number>
	*/
	transposeOperationResolveEnum: typeof transposeOperationResolveEnum;

	/**
	* Returns the transpose operation string associated with a BLAS transpose operation value.
	*
	* @param operation - operation value
	* @returns transpose operation string
	*
	* @example
	* var str2enum = require( './../../../base/transpose-operation-str2enum' );
	*
	* var v = ns.transposeOperationResolveStr( str2enum( 'transpose' ) );
	* // returns 'transpose'
	*/
	transposeOperationResolveStr: typeof transposeOperationResolveStr;

	/**
	* Returns the enumeration constant associated with a BLAS transpose operation.
	*
	* ## Notes
	*
	* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `TRANSPOSE == 0`). Instead, the function should be used in an opaque manner.
	*
	* @param operation - transpose operation
	* @returns enumeration constant
	*
	* @example
	* var v = ns.transposeOperationStr2Enum( 'transpose' );
	* // returns <number>
	*/
	transposeOperationStr2Enum: typeof transposeOperationStr2Enum;

	/**
	* Returns a list of transpose operations.
	*
	* @returns list of transpose operations
	*
	* @example
	* var list = ns.transposeOperations();
	* // e.g., returns [ 'no-transpose', 'transpose', 'conjugate-transpose' ]
	*/
	transposeOperations: typeof transposeOperations;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant and adds the result to a double-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param za - scalar constant
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @returns second input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* ns.zaxpy( 2, za, zx, 2, zy, 2 );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -1.0
	*
	* var im = imag( z );
	* // returns 7.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* ns.zaxpy.ndarray( 3, za, zx, 1, 1, zy, 1, 1 );
	*
	* var z = zy.get( 3 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -1.0
	*
	* var im = imag( z );
	* // returns 31.0
	*/
	zaxpy: typeof zaxpy;

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
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zcopy( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
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
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zdrot( 2, zx, 2, zy, 1, 0.8, 0.6 );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -0.6
	*
	* var im = imag( z );
	* // returns -1.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 0.8
	*
	* im = imag( z );
	* // returns 1.6
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* ns.zdrot.ndarray( 2, zx, 2, 0, zy, 1, 0, 0.8, 0.6 );
	*
	* var z = zy.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -0.6
	*
	* var im = imag( z );
	* // returns -1.2
	*
	* z = zx.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 0.8
	*
	* im = imag( z );
	* // returns 1.6
	*/
	zdrot: typeof zdrot;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param za - scalar constant
	* @param zx - input array
	* @param strideX - `zx` stride length
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* ns.zscal( 3, za, zx, 1 );
	*
	* var z = zx.get( 1 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -2.0
	*
	* var im = imag( z );
	* // returns 14.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var za = new Complex128( 2.0, 2.0 );
	*
	* ns.zscal.ndarray( 2, za, zx, 1, 1 );
	*
	* var z = zx.get( 1 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns -2.0
	*
	* var im = imag( z );
	* // returns 14.0
	*/
	zscal: typeof zscal;

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
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zswap( x.length, x, 1, y, 1 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	*
	* ns.zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	*
	* var z = y.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 2.0
	*
	* z = x.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 7.0
	*
	* im = imag( z );
	* // returns 8.0
	*/
	zswap: typeof zswap;
}

/**
* Base (i.e., lower-level) basic linear algebra subprograms (BLAS).
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
