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

#include "stdlib/blas/base/zswap.h"
#include "stdlib/blas/base/shared.h"

/**
* Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param X        first input array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second input array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
*/
void API_SUFFIX(c_zswap_ndarray)( const CBLAS_INT N, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	double *x = (double *)X;
	double *y = (double *)Y;
	CBLAS_INT ix;
	CBLAS_INT iy;
	CBLAS_INT sx;
	CBLAS_INT sy;
	CBLAS_INT i;
	double tmp;

	if ( N <= 0 ) {
		return;
	}
	sx = strideX * 2;
	ix = offsetX * 2;
	sy = strideY * 2;
	iy = offsetY * 2;
	for ( i = 0; i < N; i++ ) {
		tmp = x[ ix ];
		x[ ix ] = y[ iy ];
		y[ iy ] = tmp;

		tmp = x[ ix+1 ];
		x[ ix+1 ] = y[ iy+1 ];
		y[ iy+1 ] = tmp;

		ix += sx;
		iy += sy;
	}
	return;
}
