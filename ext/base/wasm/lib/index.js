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
* @name dapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dapx}
*/
setReadOnly( ns, 'dapx', require( './../../../../ext/base/wasm/dapx' ) );

/**
* @name dapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dapxsum}
*/
setReadOnly( ns, 'dapxsum', require( './../../../../ext/base/wasm/dapxsum' ) );

/**
* @name dapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dapxsumkbn}
*/
setReadOnly( ns, 'dapxsumkbn', require( './../../../../ext/base/wasm/dapxsumkbn' ) );

/**
* @name dapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dapxsumors}
*/
setReadOnly( ns, 'dapxsumors', require( './../../../../ext/base/wasm/dapxsumors' ) );

/**
* @name dapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dapxsumpw}
*/
setReadOnly( ns, 'dapxsumpw', require( './../../../../ext/base/wasm/dapxsumpw' ) );

/**
* @name dasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dasumpw}
*/
setReadOnly( ns, 'dasumpw', require( './../../../../ext/base/wasm/dasumpw' ) );

/**
* @name dnanasumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dnanasumors}
*/
setReadOnly( ns, 'dnanasumors', require( './../../../../ext/base/wasm/dnanasumors' ) );

/**
* @name dnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dnansumkbn2}
*/
setReadOnly( ns, 'dnansumkbn2', require( './../../../../ext/base/wasm/dnansumkbn2' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( './../../../../ext/base/wasm/dnansumpw' ) );

/**
* @name sapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/wasm/sapxsumkbn}
*/
setReadOnly( ns, 'sapxsumkbn', require( './../../../../ext/base/wasm/sapxsumkbn' ) );


// EXPORTS //

module.exports = ns;
