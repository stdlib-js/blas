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

#include "stdlib/blas/ext/base/dnansumors.h"
#include "stdlib/math/base/assert/is_nan.h"
#include <stdint.h>

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        output value
*/
double stdlib_strided_dnansumors( const int64_t N, const double *X, const int64_t stride ) {
	double sum;
	int64_t ix;
	int64_t i;

	sum = 0.0;
	if ( N <= 0 ) {
		return sum;
	}
	if ( N == 1 || stride == 0 ) {
		if ( stdlib_base_is_nan( X[ 0 ] ) ) {
			return sum;
		}
		return X[ 0 ];
	}
	if ( stride < 0 ) {
		ix = (1-N) * stride;
	} else {
		ix = 0;
	}
	for ( i = 0; i < N; i++ ) {
		if ( !stdlib_base_is_nan( X[ ix ] ) ) {
			sum += X[ ix ];
		}
		ix += stride;
	}
	return sum;
}
