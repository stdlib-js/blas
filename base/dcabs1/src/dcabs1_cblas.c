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

#include "stdlib/blas/base/dcabs1.h"
#include "stdlib/blas/base/dcabs1_cblas.h"
#include "stdlib/complex/float64/ctor.h"

/**
* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point number.
*
* @param z       complex number
* @return        result
*/
double c_dcabs1( const stdlib_complex128_t z ) {
	return cblas_dcabs1( z );
}
