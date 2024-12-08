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

'use strict';

// MODULES //

var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var layouts = require( './../../../../base/layouts' );


// MAIN //

/**
* Tests whether an input value is a BLAS memory layout.
*
* @name isLayout
* @type {Function}
* @param {*} v - value to test
* @returns {boolean} boolean indicating whether an input value is a memory layout
*
* @example
* var bool = isLayout( 'row-major' );
* // returns true
*
* bool = isLayout( 'column-major' );
* // returns true
*
* bool = isLayout( 'foo' );
* // returns false
*/
var isLayout = contains( layouts() );


// EXPORTS //

module.exports = isLayout;
