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

/**
 * Compute the dot product of two single-precision floating-point vectors with extended accumulation and result.
 *
 * @see <a href="http://www.netlib.org/lapack/expolore-html/df/d28/group__single__blas__level1.html">dsdot</a>
 */
#include "stdlib/blas/base/dsdot.h"
#include "stdlib/blas/base/dsdot_fortran.h"

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation and result.
*
* @param N        number of indexed elements
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         the dot product
*/
double c_dsdot( const int N, const float *X, const int strideX, const float *Y, const int strideY ) {
	double dot;
	dsdotsub( &N, X, &strideX, Y, &strideY, &dot );
	return dot;
}
