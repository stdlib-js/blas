/**
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

#include "stdlib/blas/ext/base/slast_index_of.h"
#include <stdio.h>

int main( void ) {
	// Create a strided array:
	const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

	// Specify the number of indexed elements:
	const int N = 8;

	// Specify a stride:
	const int strideX = 1;

	// Perform a search:
	int idx = stdlib_strided_slast_index_of( N, 3.0f, x, strideX );

	// Print the result:
	printf( "index value: %d\n", idx );
}
