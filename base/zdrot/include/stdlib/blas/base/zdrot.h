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

/**
* Header file containing function declarations for the C interface to the BLAS Level 1 routine `zdrot`.
*/
#ifndef ZDROT_H
#define ZDROT_H

#include "stdlib/blas/base/shared.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Applies a plane rotation.
*/
void API_SUFFIX(c_zdrot)( const CBLAS_INT N, void *ZX, const CBLAS_INT strideX, void *ZY, const CBLAS_INT strideY, const double c, const double s );

/**
* Applies a plane rotation using alternative indexing semantics.
*/
void API_SUFFIX(c_zdrot_ndarray)( const CBLAS_INT N, void *ZX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *ZY, const CBLAS_INT strideY, const CBLAS_INT offsetY, const double c, const double s );

#ifdef __cplusplus
}
#endif

#endif // !ZDROT_H
