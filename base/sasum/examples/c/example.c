/**
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

#include "stdlib/blas/base/sasum.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

	// Specify the number of elements:
	const int N = 8;

	// Specify a stride:
	const int stride = 1;

	// Compute the sum of absolute values:
	float sum = c_sasum( N, x, stride );

	// Print the result:
	printf( "sum: %f\n", sum );

	// Compute the sum of absolute values:
	sum = c_sasum_ndarray( N, x, -stride, N-1 );

	// Print the result:
	printf( "sum: %f\n", sum );
}
