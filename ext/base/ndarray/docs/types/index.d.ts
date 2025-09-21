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

import csum = require( './../../../../../ext/base/ndarray/csum' );
import dcusum = require( './../../../../../ext/base/ndarray/dcusum' );
import dindexOf = require( './../../../../../ext/base/ndarray/dindex-of' );
import dlastIndexOf = require( './../../../../../ext/base/ndarray/dlast-index-of' );
import dsorthp = require( './../../../../../ext/base/ndarray/dsorthp' );
import dsum = require( './../../../../../ext/base/ndarray/dsum' );
import gcusum = require( './../../../../../ext/base/ndarray/gcusum' );
import gfindIndex = require( './../../../../../ext/base/ndarray/gfind-index' );
import gfindLastIndex = require( './../../../../../ext/base/ndarray/gfind-last-index' );
import gindexOf = require( './../../../../../ext/base/ndarray/gindex-of' );
import glastIndexOf = require( './../../../../../ext/base/ndarray/glast-index-of' );
import gsorthp = require( './../../../../../ext/base/ndarray/gsorthp' );
import gsum = require( './../../../../../ext/base/ndarray/gsum' );
import scusum = require( './../../../../../ext/base/ndarray/scusum' );
import sindexOf = require( './../../../../../ext/base/ndarray/sindex-of' );
import slastIndexOf = require( './../../../../../ext/base/ndarray/slast-index-of' );
import ssorthp = require( './../../../../../ext/base/ndarray/ssorthp' );
import ssum = require( './../../../../../ext/base/ndarray/ssum' );
import zsum = require( './../../../../../ext/base/ndarray/zsum' );

/**
* Interface describing the `ndarray` namespace.
*/
interface Namespace {
	/**
	* Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns sum
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Complex64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'complex64', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.csum( [ x ] );
	* // returns <Complex64>[ 5.0, 5.0 ]
	*/
	csum: typeof csum;

	/**
	* Computes the cumulative sum of a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the initial sum
	* @returns output ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new ndarray( 'float64', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var initial = scalar2ndarray( 0.0, 'float64', 'row-major' );
	*
	* var v = ns.dcusum( [ x, y, initial ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 4.0, 8.0, 10.0 ]
	*/
	dcusum: typeof dcusum;

	/**
	* Returns the first index of a search element in a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'float64'
	* });
	*
	* var fromIndex = scalar2ndarray( 0, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.dindexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	dindexOf: typeof dindexOf;

	/**
	* Returns the last index of a search element in a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = new Float64Array( [ 1.0, 2.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'float64'
	* });
	*
	* var fromIndex = scalar2ndarray( 3, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.dlastIndexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	dlastIndexOf: typeof dlastIndexOf;

	/**
	* Sorts a one-dimensional double-precision floating-point ndarray using heapsort.
	*
	* ## Notes
	*
	* -   When the sort order is less than zero, the input ndarray is sorted in **decreasing** order. When the sort order is greater than zero, the input ndarray is sorted in **increasing** order. When the sort order is equal to zero, the input ndarray is left unchanged.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the sort order
	* @returns input ndarray
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ord = scalar2ndarray( 1.0, {
	*    'dtype': 'generic'
	* });
	*
	* var out = ns.dsorthp( [ x, ord ] );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	dsorthp: typeof dsorthp;

	/**
	* Computes the sum of all elements in a one-dimensional double-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.dsum( [ x ] );
	* // returns 10.0
	*/
	dsum: typeof dsum;

	/**
	* Computes the cumulative sum of a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the initial sum
	* @returns output ndarray
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
	* var getData = require( '@stdlib/ndarray/data-buffer' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var x = new ndarray( 'complex128', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new ndarray( 'complex128', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var initial = scalar2ndarray( new Complex128( 0.0, 0.0 ), 'complex128', 'row-major' );
	*
	* var v = ns.gcusum( [ x, y, initial ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = getData( y );
	* // returns <Complex128Array>[ 1.0, 2.0, 4.0, 6.0 ]
	*/
	gcusum: typeof gcusum;

	/**
	* Returns the index of the first element in a one-dimensional ndarray which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
	*
	* @param arrays - array-like object containing an input ndarray
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns index
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* function clbk( v ) {
	*     return v % 2.0 === 0.0;
	* }
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.gfindIndex( [ x ], clbk );
	* // returns 2
	*/
	gfindIndex: typeof gfindIndex;

	/**
	* Returns the index of the last element in a one-dimensional ndarray which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If no element passes a test implemented by a predicate function, the function returns `-1`.
	*
	* @param arrays - array-like object containing an input ndarray
	* @param clbk - predicate function
	* @param thisArg - predicate execution context
	* @returns index
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* function clbk( v ) {
	*     return v % 2.0 === 0.0;
	* }
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.gfindLastIndex( [ x ], clbk );
	* // returns 3
	*/
	gfindLastIndex: typeof gfindLastIndex;

	/**
	* Returns the first index of a search element in a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = [ 1.0, 3.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'generic'
	* });
	*
	* var fromIndex = scalar2ndarray( 0, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.gindexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	gindexOf: typeof gindexOf;

	/**
	* Returns the last index of a search element in a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = [ 1.0, 2.0, 4.0, 2.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'generic'
	* });
	*
	* var fromIndex = scalar2ndarray( 3, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.glastIndexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	glastIndexOf: typeof glastIndexOf;

	/**
	* Sorts a one-dimensional ndarray using heapsort.
	*
	* ## Notes
	*
	* -   When the sort order is less than zero, the input ndarray is sorted in **decreasing** order. When the sort order is greater than zero, the input ndarray is sorted in **increasing** order. When the sort order is equal to zero, the input ndarray is left unchanged.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the sort order
	* @returns input ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = [ 1.0, -2.0, 3.0, -4.0 ];
	* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ord = scalar2ndarray( 1.0, {
	*    'dtype': 'generic'
	* });
	*
	* var out = ns.gsorthp( [ x, ord ] );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	gsorthp: typeof gsorthp;

	/**
	* Computes the sum of all elements in a one-dimensional ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns sum
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var x = new ndarray( 'complex128', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.gsum( [ x ] );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns 4.0
	*
	* var im = imag( v );
	* // returns 6.0
	*/
	gsum: typeof gsum;

	/**
	* Computes the cumulative sum of a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray, an output ndarray, and ndarray containing the initial sum
	* @returns output ndarray
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ybuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	* var y = new ndarray( 'float32', ybuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var initial = scalar2ndarray( 0.0, 'float32', 'row-major' );
	*
	* var v = ns.scusum( [ x, y, initial ] );
	* // returns <ndarray>
	*
	* var bool = ( v === y );
	* // returns true
	*
	* var arr = ndarray2array( v );
	* // returns [ 1.0, 4.0, 8.0, 10.0 ]
	*/
	scusum: typeof scusum;

	/**
	* Returns the first index of a search element in a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'float32'
	* });
	*
	* var fromIndex = scalar2ndarray( 0, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.sindexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	sindexOf: typeof sindexOf;

	/**
	* Returns the last index of a search element in a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
	* @returns index
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	*
	* var xbuf = new Float32Array( [ 1.0, 2.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var searchElement = scalar2ndarray( 2.0, {
	*     'dtype': 'float32'
	* });
	*
	* var fromIndex = scalar2ndarray( 3, {
	*     'dtype': 'generic'
	* });
	*
	* var v = ns.slastIndexOf( [ x, searchElement, fromIndex ] );
	* // returns 3
	*/
	slastIndexOf: typeof slastIndexOf;

	/**
	* Sorts a one-dimensional single-precision floating-point ndarray using heapsort.
	*
	* ## Notes
	*
	* -   When the sort order is less than zero, the input ndarray is sorted in **decreasing** order. When the sort order is greater than zero, the input ndarray is sorted in **increasing** order. When the sort order is equal to zero, the input ndarray is left unchanged.
	*
	* @param arrays - array-like object containing a one-dimensional input ndarray and a zero-dimensional ndarray specifying the sort order
	* @returns input ndarray
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
	* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var ord = scalar2ndarray( 1.0, {
	*    'dtype': 'generic'
	* });
	*
	* var out = ns.ssorthp( [ x, ord ] );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( out );
	* // returns [ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ssorthp: typeof ssorthp;

	/**
	* Computes the sum of all elements in a one-dimensional single-precision floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns sum
	*
	* @example
	* var Float32Array = require( '@stdlib/array/float32' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Float32Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'float32', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.ssum( [ x ] );
	* // returns 10.0
	*/
	ssum: typeof ssum;

	/**
	* Computes the sum of all elements in a one-dimensional double-precision complex floating-point ndarray.
	*
	* @param arrays - array-like object containing an input ndarray
	* @returns sum
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var ndarray = require( '@stdlib/ndarray/base/ctor' );
	*
	* var xbuf = new Complex128Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	* var x = new ndarray( 'complex128', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
	*
	* var v = ns.zsum( [ x ] );
	* // returns <Complex128>[ 5.0, 5.0 ]
	*/
	zsum: typeof zsum;
}

/**
* Base ndarray extended BLAS functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
