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

#include "stdlib/blas/base/dsyr2.h"
#include "stdlib/blas/base/dsyr2_cblas.h"
#include "stdlib/blas/base/shared.h"

/**
* Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.
*
* @param layout   storage layout
* @param uplo     specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced
* @param N        number of elements along each dimension of `A`
* @param alpha    scalar constant
* @param x        first input vector
* @param strideX  `X` stride length
* @param y        second input vector
* @param strideY  `Y` stride length
* @param A        input matrix
* @param LDA      stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
*/
void API_SUFFIX(c_dsyr2)( const CBLAS_LAYOUT layout, const CBLAS_UPLO uplo, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *A, const CBLAS_INT LDA ) {
	API_SUFFIX(cblas_dsyr2)( layout, uplo, N, alpha, X, strideX, Y, strideY, A, LDA );
}
