/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

/**
* Interface describing `dsortins`.
*/
interface Routine {
	/**
	* Sorts a double-precision floating-point strided array using insertion sort.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* dsortins( x.length, 1, x, 1 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	( N: number, order: number, x: Float64Array, strideX: number ): Float64Array;

	/**
	* Sorts a double-precision floating-point strided array using insertion sort and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param order - sort order
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns `x`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
	*
	* dsortins.ndarray( x.length, 1, x, 1, 0 );
	* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
	*/
	ndarray( N: number, order: number, x: Float64Array, strideX: number, offsetX: number ): Float64Array;
}

/**
* Sorts a double-precision floating-point strided array using insertion sort.
*
* @param N - number of indexed elements
* @param order - sort order
* @param x - input array
* @param strideX - stride length
* @returns `x`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* dsortins( x.length, 1, x, 1 );
* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
*
* dsortins.ndarray( x.length, 1, x, 1, 0 );
* // x => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]
*/
declare var dsortins: Routine;


// EXPORTS //

export = dsortins;
