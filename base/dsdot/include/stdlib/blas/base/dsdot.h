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
* Header file containing function declarations for the C interface to the BLAS Level 1 routine `c_dsdot`.
*/
#ifndef STDLIB_BLAS_BASE_DSDOT_H
#define STDLIB_BLAS_BASE_DSDOT_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation and result.
*/
double API_SUFFIX(c_dsdot)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY );

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation and result and using alternative indexing semantics.
*/
double API_SUFFIX(c_dsdot_ndarray)( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_DSDOT_H
