/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import swapFactory = require( './../../../tools/swap-factory' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Returns a function which interchanges two vectors.
	*
	* @param base - "base" function which interchanges two vectors
	* @param dtype - array data type
	* @returns function wrapper
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var array = require( '@stdlib/ndarray/array' );
	* var dswap = require( './../../../base/dswap' ).ndarray;
	*
	* var swap = ns.swapFactory( dswap, 'float64' );
	*
	* var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
	* var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
	*
	* swap( x, y );
	*
	* var xbuf = x.data;
	* // returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
	*
	* var ybuf = y.data;
	* // returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
	*/
	swapFactory: typeof swapFactory;
}

/**
* BLAS tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
