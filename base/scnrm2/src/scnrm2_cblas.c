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

#include "stdlib/blas/base/scnrm2.h"
#include "stdlib/blas/base/scnrm2_cblas.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/strided/base/min_view_buffer_index.h"

/**
* Computes the L2-norm of a complex single-precision floating-point vector.
*
* @param N         number of indexed elements
* @param X         input array
* @param strideX   X stride length
*/
float API_SUFFIX(c_scnrm2)( const CBLAS_INT N, const void *X, const CBLAS_INT strideX ) {
	return API_SUFFIX(cblas_scnrm2)( N, X, strideX );
}

/**
* Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
*
* @param N         number of indexed elements
* @param X         input array
* @param strideX   X stride length
* @param offsetX   starting index for X
*/
float API_SUFFIX(c_scnrm2_ndarray)( const CBLAS_INT N, const void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX ) {
	stdlib_complex64_t *x = (stdlib_complex64_t *)X;
	x += stdlib_strided_min_view_buffer_index( N, strideX, offsetX );
	return API_SUFFIX(cblas_scnrm2)( N, (void *)x, strideX );
}
