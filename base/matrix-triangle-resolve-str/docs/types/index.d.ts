/*
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

// TypeScript Version: 4.1

/**
* Returns the matrix triangle string associated with a BLAS matrix triangle value.
*
* @param value - matrix triangle value
* @returns matrix triangle string
*
* @example
* var str2enum = require( '@stdlib/blas/base/matrix-triangle-str2enum' );
*
* var v = resolve( str2enum( 'upper' ) );
* // returns 'upper'
*/
declare function resolve( value: any ): string | null;


// EXPORTS //

export = resolve;
