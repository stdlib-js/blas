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

/**
* Interface describing `drotm`.
*/
interface Routine {
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
	* var x = new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	* var y = new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* drotm( 4, x, -1, y, -2, param );
	* // x => <Float64Array>[ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ]
	* // y => <Float64Array>[ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ]
	*/
	( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number, param: Float64Array ): Float64Array;

	/**
	* Applies a modified Givens plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param param - parameters for the modified Givens transformation
	* @returns `y`
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var drotm = require( './../../../../base/drotm' );
	*
	* var x = new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	* var y = new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] );
	* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
	*
	* drotm.ndarray( 4, x, -1, 3, y, -2, 6, param );
	* // x => <Float64Array>[ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ]
	* // y => <Float64Array>[ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number, param: Float64Array ): Float64Array;
}

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
* drotm( 2, x, 2, y, 1, param );
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
* drotm.ndarray( 2, x, 1, 0, y, 2, 1, param );
* // x => <Float64Array>[ ~-20.0, ~-25.0, 3.0, 4.0, 5.0 ]
* // y => <Float64Array>[ 6.0, ~9.0, 8.0, ~13.0, 10.0 ]
*/
declare var drotm: Routine;


// EXPORTS //

export = drotm;
