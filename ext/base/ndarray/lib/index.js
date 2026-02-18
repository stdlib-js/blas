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
* @name csum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/csum}
*/
setReadOnly( ns, 'csum', require( './../../../../ext/base/ndarray/csum' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusum}
*/
setReadOnly( ns, 'dcusum', require( './../../../../ext/base/ndarray/dcusum' ) );

/**
* @name dindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dindex-of}
*/
setReadOnly( ns, 'dindexOf', require( './../../../../ext/base/ndarray/dindex-of' ) );

/**
* @name dlastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlast-index-of}
*/
setReadOnly( ns, 'dlastIndexOf', require( './../../../../ext/base/ndarray/dlast-index-of' ) );

/**
* @name dlinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dlinspace}
*/
setReadOnly( ns, 'dlinspace', require( './../../../../ext/base/ndarray/dlinspace' ) );

/**
* @name dsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsorthp}
*/
setReadOnly( ns, 'dsorthp', require( './../../../../ext/base/ndarray/dsorthp' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsum}
*/
setReadOnly( ns, 'dsum', require( './../../../../ext/base/ndarray/dsum' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusum}
*/
setReadOnly( ns, 'gcusum', require( './../../../../ext/base/ndarray/gcusum' ) );

/**
* @name gfindIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfind-index}
*/
setReadOnly( ns, 'gfindIndex', require( './../../../../ext/base/ndarray/gfind-index' ) );

/**
* @name gfindLastIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gfind-last-index}
*/
setReadOnly( ns, 'gfindLastIndex', require( './../../../../ext/base/ndarray/gfind-last-index' ) );

/**
* @name gindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gindex-of}
*/
setReadOnly( ns, 'gindexOf', require( './../../../../ext/base/ndarray/gindex-of' ) );

/**
* @name glastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glast-index-of}
*/
setReadOnly( ns, 'glastIndexOf', require( './../../../../ext/base/ndarray/glast-index-of' ) );

/**
* @name glinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/glinspace}
*/
setReadOnly( ns, 'glinspace', require( './../../../../ext/base/ndarray/glinspace' ) );

/**
* @name gsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsorthp}
*/
setReadOnly( ns, 'gsorthp', require( './../../../../ext/base/ndarray/gsorthp' ) );

/**
* @name gsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsum}
*/
setReadOnly( ns, 'gsum', require( './../../../../ext/base/ndarray/gsum' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusum}
*/
setReadOnly( ns, 'scusum', require( './../../../../ext/base/ndarray/scusum' ) );

/**
* @name sindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/sindex-of}
*/
setReadOnly( ns, 'sindexOf', require( './../../../../ext/base/ndarray/sindex-of' ) );

/**
* @name slastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/slast-index-of}
*/
setReadOnly( ns, 'slastIndexOf', require( './../../../../ext/base/ndarray/slast-index-of' ) );

/**
* @name slinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/slinspace}
*/
setReadOnly( ns, 'slinspace', require( './../../../../ext/base/ndarray/slinspace' ) );

/**
* @name ssorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssorthp}
*/
setReadOnly( ns, 'ssorthp', require( './../../../../ext/base/ndarray/ssorthp' ) );

/**
* @name ssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssum}
*/
setReadOnly( ns, 'ssum', require( './../../../../ext/base/ndarray/ssum' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsum}
*/
setReadOnly( ns, 'zsum', require( './../../../../ext/base/ndarray/zsum' ) );


// EXPORTS //

module.exports = ns;
