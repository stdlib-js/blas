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

/// <reference types="@stdlib/types"/>

import { NumericArray } from '@stdlib/types/array';

/**
* Interface describing `gsumors`.
*/
interface Routine {
	/**
	* Computes the sum of strided array elements using ordinary recursive summation.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = gsumors( x.length, x, 1 );
	* // returns 1.0
	*/
	( N: number, x: NumericArray, stride: number ): number;

	/**
	* Computes the sum of strided array elements using ordinary recursive summation and alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param stride - stride length
	* @param offset - starting index
	* @returns sum
	*
	* @example
	* var x = [ 1.0, -2.0, 2.0 ];
	*
	* var v = gsumors.ndarray( x.length, x, 1, 0 );
	* // returns 1.0
	*/
	ndarray( N: number, x: NumericArray, stride: number, offset: number ): number;
}

/**
* Computes the sum of strided array elements using ordinary recursion summation.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - stride length
* @returns sum
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = gsumors( x.length, x, 1 );
* // returns 1.0
*
* @example
* var x = [ 1.0, -2.0, 2.0 ];
*
* var v = gsumors.ndarray( x.length, x, 1, 0 );
* // returns 1.0
*/
declare var gsumors: Routine;


// EXPORTS //

export = gsumors;
