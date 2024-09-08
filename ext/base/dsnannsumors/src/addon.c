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

#include "stdlib/blas/ext/base/dsnannsumors.h"
#include "stdlib/napi/export.h"
#include "stdlib/napi/argv.h"
#include "stdlib/napi/argv_int64.h"
#include "stdlib/napi/argv_strided_float32array.h"
#include "stdlib/napi/argv_strided_float64array.h"
#include <node_api.h>
#include <assert.h>

/**
* Receives JavaScript callback invocation data.
*
* @private
* @param env    environment under which the function is invoked
* @param info   callback data
* @return       Node-API value
*/
static napi_value addon( napi_env env, napi_callback_info info ) {
	STDLIB_NAPI_ARGV( env, info, argv, argc, 5 );
	STDLIB_NAPI_ARGV_INT64( env, N, argv, 0 );
	STDLIB_NAPI_ARGV_INT64( env, strideX, argv, 2 );
	STDLIB_NAPI_ARGV_INT64( env, strideOut, argv, 4 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT32ARRAY( env, X, N, strideX, argv, 1 );
	STDLIB_NAPI_ARGV_STRIDED_FLOAT64ARRAY( env, Out, 2, strideOut, argv, 3 );

	int64_t io;
	if ( strideOut < 0 ) {
		io = -strideOut;
	} else {
		io = 0;
	}

	double *out = Out;
	int64_t n;
	out[ io ] = stdlib_strided_dsnannsumors( N, X, strideX, &n );
	out[ io + strideOut ] = (double)n;

	return NULL;
}

STDLIB_NAPI_MODULE_EXPORT_FCN( addon )