/**
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

#include "stdlib/blas/base/dasum.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/strided/base/stride2offset.h"

/**
* Computes the sum of absolute values.
*
* @param N       number of indexed elements
* @param X       input array
* @param stride  stride length
* @return        sum
*/
double API_SUFFIX(c_dasum)( const CBLAS_INT N, const double *X, const CBLAS_INT stride ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, stride );
	return API_SUFFIX(c_dasum_ndarray)( N, X, stride, ox );
}
