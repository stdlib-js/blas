/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* @name caxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/caxpy}
*/
setReadOnly( ns, 'caxpy', require( './../../../base/ndarray/caxpy' ) );

/**
* @name ccopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/ccopy}
*/
setReadOnly( ns, 'ccopy', require( './../../../base/ndarray/ccopy' ) );

/**
* @name cgemv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/cgemv}
*/
setReadOnly( ns, 'cgemv', require( './../../../base/ndarray/cgemv' ) );

/**
* @name cscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/cscal}
*/
setReadOnly( ns, 'cscal', require( './../../../base/ndarray/cscal' ) );

/**
* @name csscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/csscal}
*/
setReadOnly( ns, 'csscal', require( './../../../base/ndarray/csscal' ) );

/**
* @name cswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/cswap}
*/
setReadOnly( ns, 'cswap', require( './../../../base/ndarray/cswap' ) );

/**
* @name dasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dasum}
*/
setReadOnly( ns, 'dasum', require( './../../../base/ndarray/dasum' ) );

/**
* @name daxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/daxpy}
*/
setReadOnly( ns, 'daxpy', require( './../../../base/ndarray/daxpy' ) );

/**
* @name dcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dcopy}
*/
setReadOnly( ns, 'dcopy', require( './../../../base/ndarray/dcopy' ) );

/**
* @name ddot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/ddot}
*/
setReadOnly( ns, 'ddot', require( './../../../base/ndarray/ddot' ) );

/**
* @name dger
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dger}
*/
setReadOnly( ns, 'dger', require( './../../../base/ndarray/dger' ) );

/**
* @name dnrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dnrm2}
*/
setReadOnly( ns, 'dnrm2', require( './../../../base/ndarray/dnrm2' ) );

/**
* @name dscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dscal}
*/
setReadOnly( ns, 'dscal', require( './../../../base/ndarray/dscal' ) );

/**
* @name dsdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dsdot}
*/
setReadOnly( ns, 'dsdot', require( './../../../base/ndarray/dsdot' ) );

/**
* @name dswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dswap}
*/
setReadOnly( ns, 'dswap', require( './../../../base/ndarray/dswap' ) );

/**
* @name dzasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dzasum}
*/
setReadOnly( ns, 'dzasum', require( './../../../base/ndarray/dzasum' ) );

/**
* @name dznrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/dznrm2}
*/
setReadOnly( ns, 'dznrm2', require( './../../../base/ndarray/dznrm2' ) );

/**
* @name gasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gasum}
*/
setReadOnly( ns, 'gasum', require( './../../../base/ndarray/gasum' ) );

/**
* @name gaxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gaxpy}
*/
setReadOnly( ns, 'gaxpy', require( './../../../base/ndarray/gaxpy' ) );

/**
* @name gcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gcopy}
*/
setReadOnly( ns, 'gcopy', require( './../../../base/ndarray/gcopy' ) );

/**
* @name gdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gdot}
*/
setReadOnly( ns, 'gdot', require( './../../../base/ndarray/gdot' ) );

/**
* @name ggemv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/ggemv}
*/
setReadOnly( ns, 'ggemv', require( './../../../base/ndarray/ggemv' ) );

/**
* @name gnrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gnrm2}
*/
setReadOnly( ns, 'gnrm2', require( './../../../base/ndarray/gnrm2' ) );

/**
* @name gscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gscal}
*/
setReadOnly( ns, 'gscal', require( './../../../base/ndarray/gscal' ) );

/**
* @name gswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/gswap}
*/
setReadOnly( ns, 'gswap', require( './../../../base/ndarray/gswap' ) );

/**
* @name idamax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/idamax}
*/
setReadOnly( ns, 'idamax', require( './../../../base/ndarray/idamax' ) );

/**
* @name igamax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/igamax}
*/
setReadOnly( ns, 'igamax', require( './../../../base/ndarray/igamax' ) );

/**
* @name isamax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/isamax}
*/
setReadOnly( ns, 'isamax', require( './../../../base/ndarray/isamax' ) );

/**
* @name sasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sasum}
*/
setReadOnly( ns, 'sasum', require( './../../../base/ndarray/sasum' ) );

/**
* @name saxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/saxpy}
*/
setReadOnly( ns, 'saxpy', require( './../../../base/ndarray/saxpy' ) );

/**
* @name scasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/scasum}
*/
setReadOnly( ns, 'scasum', require( './../../../base/ndarray/scasum' ) );

/**
* @name scnrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/scnrm2}
*/
setReadOnly( ns, 'scnrm2', require( './../../../base/ndarray/scnrm2' ) );

/**
* @name scopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/scopy}
*/
setReadOnly( ns, 'scopy', require( './../../../base/ndarray/scopy' ) );

/**
* @name sdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sdot}
*/
setReadOnly( ns, 'sdot', require( './../../../base/ndarray/sdot' ) );

/**
* @name sdsdot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sdsdot}
*/
setReadOnly( ns, 'sdsdot', require( './../../../base/ndarray/sdsdot' ) );

/**
* @name snrm2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/snrm2}
*/
setReadOnly( ns, 'snrm2', require( './../../../base/ndarray/snrm2' ) );

/**
* @name sscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sscal}
*/
setReadOnly( ns, 'sscal', require( './../../../base/ndarray/sscal' ) );

/**
* @name sswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/sswap}
*/
setReadOnly( ns, 'sswap', require( './../../../base/ndarray/sswap' ) );

/**
* @name zaxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zaxpy}
*/
setReadOnly( ns, 'zaxpy', require( './../../../base/ndarray/zaxpy' ) );

/**
* @name zcopy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zcopy}
*/
setReadOnly( ns, 'zcopy', require( './../../../base/ndarray/zcopy' ) );

/**
* @name zdscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zdscal}
*/
setReadOnly( ns, 'zdscal', require( './../../../base/ndarray/zdscal' ) );

/**
* @name zscal
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zscal}
*/
setReadOnly( ns, 'zscal', require( './../../../base/ndarray/zscal' ) );

/**
* @name zswap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ndarray/zswap}
*/
setReadOnly( ns, 'zswap', require( './../../../base/ndarray/zswap' ) );


// EXPORTS //

module.exports = ns;
