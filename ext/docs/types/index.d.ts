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

import base = require( './../../../ext/base' );
import cusum = require( './../../../ext/cusum' );
import findIndex = require( './../../../ext/find-index' );
import findLastIndex = require( './../../../ext/find-last-index' );
import indexOf = require( './../../../ext/index-of' );
import sum = require( './../../../ext/sum' );

/**
* Interface describing the `ext` namespace.
*/
interface Namespace {
	/**
	* Extended base (i.e., lower-level) basic linear algebra subroutines (BLAS).
	*/
	base: typeof base;

	/**
	* Computes the cumulative sum along one or more ndarray dimensions.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = ns.cusum( x );
	* // returns <ndarray>
	*
	* var arr = ndarray2array( y );
	* // returns [ -1.0, 1.0, -2.0 ]
	*
	* @example
	* var ndarray2array = require( '@stdlib/ndarray/to-array' );
	* var zerosLike = require( '@stdlib/ndarray/zeros-like' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	* var y = zerosLike( x );
	*
	* var out = ns.cusum.assign( x, y );
	* // returns <ndarray>
	*
	* var bool = ( out === y );
	* // returns true
	*
	* var arr = ndarray2array( out );
	* // returns [ -1.0, 1.0, -2.0 ]
	*/
	cusum: typeof cusum;

	/**
	* Returns the index of the first element along an ndarray dimension which passes a test implemented by a predicate function.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param clbk - predicate function
	* @param thisArg - predicate function execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] )
	*
	* var y = ns.findIndex( x, clbk );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 1
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] )
	* var y = zeros( [] );
	*
	* var out = ns.findIndex.assign( x, y, clbk );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 1
	*
	* var bool = ( out === y );
	* // returns true
	*/
	findIndex: typeof findIndex;

	/**
	* Returns the index of the last element along an ndarray dimension which passes a test implemented by a predicate function and assigns results to a provided output ndarray.
	*
	* ## Notes
	*
	* -   If no element along an ndarray dimension passes a test implemented by the predicate function, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param options - function options
	* @param clbk - predicate function
	* @param thisArg - Predicate execution context
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] )
	*
	* var y = ns.findLastIndex( x, clbk );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns 1
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* function clbk( value ) {
	*     return value % 2.0 === 0.0;
	* }
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] )
	* var y = zeros( [] );
	*
	* var out = ns.findLastIndex.assign( x, y, clbk );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns 1
	*
	* var bool = ( out === y );
	* // returns true
	*/
	findLastIndex: typeof findLastIndex;

	/**
	* Returns the first index of a specified search element along an ndarray dimension.
	*
	* ## Notes
	*
	* -   When searching for a search element, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.
	* -   If unable to find a search element along an ndarray dimension, the corresponding element in the returned ndarray is `-1`.
	*
	* @param x - input ndarray
	* @param searchElement - search element
	* @param fromIndex - index from which to begin searching
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = ns.indexOf( x, 2.0 );
	* // returns <ndarray>
	*
	* var idx = y.get();
	* // returns 1
	*
	* @example
	* var zeros = require( '@stdlib/ndarray/zeros' );
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	* var y = zeros( x, {
	*     'dtype': 'int32'
	* } );
	*
	* var out = ns.indexOf.assign( x, 2.0, y );
	* // returns <ndarray>
	*
	* var bool = ( out === y );
	* // returns true
	*
	* var idx = out.get();
	* // returns 1
	*/
	indexOf: typeof indexOf;

	/**
	* Computes the sum along one or more ndarray dimensions.
	*
	* @param x - input ndarray
	* @param options - function options
	* @returns output ndarray
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	*
	* var y = ns.sum( x );
	* // returns <ndarray>
	*
	* var v = y.get();
	* // returns -2.0
	*
	* @example
	* var array = require( '@stdlib/ndarray/array' );
	* var zeros = require( '@stdlib/ndarray/zeros' );
	*
	* var x = array( [ -1.0, 2.0, -3.0 ] );
	* var y = zeros( [] );
	*
	* var out = ns.sum.assign( x, y );
	* // returns <ndarray>
	*
	* var v = out.get();
	* // returns -2.0
	*
	* var bool = ( out === y );
	* // returns true
	*/
	sum: typeof sum;
}

/**
* Extended BLAS.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
