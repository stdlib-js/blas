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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Returns the last index of a search element in a one-dimensional ndarray.
*
* @param arrays - array-like object containing a one-dimensional input ndarray, a zero-dimensional ndarray containing the search element, and a zero-dimensional ndarray containing the index from which to begin searching
* @returns index
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
* var glastIndexOf = require( '@stdlib/blas/ext/base/ndarray/glast-index-of' );
*
* var xbuf = [ 1.0, 2.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'generic'
* });
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = glastIndexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/
declare function glastIndexOf<T = unknown>( arrays: [ typedndarray<T>, typedndarray<T>, typedndarray<number> ] ): number;


// EXPORTS //

export = glastIndexOf;
