/**
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
* @name dapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsum}
*/
setReadOnly( ns, 'dapxsum', require( './../../../../ext/base/dapxsum' ) );

/**
* @name dapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumkbn}
*/
setReadOnly( ns, 'dapxsumkbn', require( './../../../../ext/base/dapxsumkbn' ) );

/**
* @name dapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumors}
*/
setReadOnly( ns, 'dapxsumors', require( './../../../../ext/base/dapxsumors' ) );

/**
* @name dapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumpw}
*/
setReadOnly( ns, 'dapxsumpw', require( './../../../../ext/base/dapxsumpw' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( './../../../../ext/base/dnansumpw' ) );


// EXPORTS //

module.exports = ns;
