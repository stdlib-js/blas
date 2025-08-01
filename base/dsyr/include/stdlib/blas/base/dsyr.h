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

/**
* Header file containing function declarations for the C interface to the BLAS Level 2 routine `dsyr`.
*/
#ifndef STDLIB_BLAS_BASE_DSYR_H
#define STDLIB_BLAS_BASE_DSYR_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*/
void API_SUFFIX(c_dsyr)( const CBLAS_LAYOUT layout, const CBLAS_UPLO uplo, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, double *A, const CBLAS_INT LDA );

/**
* Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.
*/
void API_SUFFIX(c_dsyr_ndarray)( const CBLAS_UPLO uplo, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_DSYR_H
