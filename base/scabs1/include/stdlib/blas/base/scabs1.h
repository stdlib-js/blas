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
* Header file containing function declarations for the C interface to the  Level 1 routine `scabs1`.
*/
#ifndef STDLIB_BLAS_BASE_SCABS1_H
#define STDLIB_BLAS_BASE_SCABS1_H

#include "stdlib/complex/float32/ctor.h"

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point number.
*/
float c_scabs1( const stdlib_complex64_t c );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_BLAS_BASE_SCABS1_H

