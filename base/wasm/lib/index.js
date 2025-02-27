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
* @name ccopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ccopy}
*/
setReadOnly( ns, 'ccopy', require( './../../../base/ccopy' ) );

/**
* @name cscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cscal}
*/
setReadOnly( ns, 'cscal', require( './../../../base/cscal' ) );

/**
* @name csrot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/csrot}
*/
setReadOnly( ns, 'csrot', require( './../../../base/csrot' ) );

/**
* @name cswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cswap}
*/
setReadOnly( ns, 'cswap', require( './../../../base/cswap' ) );

/**
* @name dasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dasum}
*/
setReadOnly( ns, 'dasum', require( './../../../base/dasum' ) );

/**
* @name daxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/daxpy}
*/
setReadOnly( ns, 'daxpy', require( './../../../base/daxpy' ) );

/**
* @name dcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcopy}
*/
setReadOnly( ns, 'dcopy', require( './../../../base/dcopy' ) );

/**
* @name ddot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ddot}
*/
setReadOnly( ns, 'ddot', require( './../../../base/ddot' ) );

/**
* @name dnrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dnrm2}
*/
setReadOnly( ns, 'dnrm2', require( './../../../base/dnrm2' ) );

/**
* @name drot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drot}
*/
setReadOnly( ns, 'drot', require( './../../../base/drot' ) );

/**
* @name drotm
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotm}
*/
setReadOnly( ns, 'drotm', require( './../../../base/drotm' ) );

/**
* @name dscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dscal}
*/
setReadOnly( ns, 'dscal', require( './../../../base/dscal' ) );

/**
* @name dswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
setReadOnly( ns, 'dswap', require( './../../../base/dswap' ) );

/**
* @name idamax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/idamax}
*/
setReadOnly( ns, 'idamax', require( './../../../base/idamax' ) );

/**
* @name isamax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/isamax}
*/
setReadOnly( ns, 'isamax', require( './../../../base/isamax' ) );

/**
* @name sasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sasum}
*/
setReadOnly( ns, 'sasum', require( './../../../base/sasum' ) );

/**
* @name saxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/saxpy}
*/
setReadOnly( ns, 'saxpy', require( './../../../base/saxpy' ) );

/**
* @name scopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scopy}
*/
setReadOnly( ns, 'scopy', require( './../../../base/scopy' ) );

/**
* @name sdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sdot}
*/
setReadOnly( ns, 'sdot', require( './../../../base/sdot' ) );

/**
* @name snrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/snrm2}
*/
setReadOnly( ns, 'snrm2', require( './../../../base/snrm2' ) );

/**
* @name srot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srot}
*/
setReadOnly( ns, 'srot', require( './../../../base/srot' ) );

/**
* @name sscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sscal}
*/
setReadOnly( ns, 'sscal', require( './../../../base/sscal' ) );

/**
* @name zcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zcopy}
*/
setReadOnly( ns, 'zcopy', require( './../../../base/zcopy' ) );

/**
* @name zdrot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zdrot}
*/
setReadOnly( ns, 'zdrot', require( './../../../base/zdrot' ) );

/**
* @name zswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zswap}
*/
setReadOnly( ns, 'zswap', require( './../../../base/zswap' ) );


// EXPORTS //

module.exports = ns;
