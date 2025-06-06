/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { complex64ndarray } from '@stdlib/types/ndarray';
import { Complex64 } from '@stdlib/types/complex';

/**
* Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.
*
* @param arrays - array-like object containing an input ndarray
* @returns sum
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
*
* var xbuf = new Complex64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
* var x = new ndarray( 'complex64', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );
*
* var v = csum( [ x ] );
* // returns <Complex64>[ 5.0, 5.0 ]
*/
declare function csum( arrays: [ complex64ndarray ] ): Complex64;


// EXPORTS //

export = csum;
