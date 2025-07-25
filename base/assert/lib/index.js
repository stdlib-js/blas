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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name isDiagonalType
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-diagonal-type}
*/
setReadOnly( ns, 'isDiagonalType', require( './../../../base/assert/is-diagonal-type' ) );

/**
* @name isLayout
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-layout}
*/
setReadOnly( ns, 'isLayout', require( './../../../base/assert/is-layout' ) );

/**
* @name isMatrixOrientation
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-matrix-orientation}
*/
setReadOnly( ns, 'isMatrixOrientation', require( './../../../base/assert/is-matrix-orientation' ) );

/**
* @name isMatrixTriangle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-matrix-triangle}
*/
setReadOnly( ns, 'isMatrixTriangle', require( './../../../base/assert/is-matrix-triangle' ) );

/**
* @name isOperationSide
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-operation-side}
*/
setReadOnly( ns, 'isOperationSide', require( './../../../base/assert/is-operation-side' ) );

/**
* @name isTransposeOperation
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/assert/is-transpose-operation}
*/
setReadOnly( ns, 'isTransposeOperation', require( './../../../base/assert/is-transpose-operation' ) );


// EXPORTS //

module.exports = ns;
