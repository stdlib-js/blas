/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* @namespace blas
*/
var blas = {};

/**
* @name assert
* @memberof blas
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/base/assert}
*/
setReadOnly( blas, 'assert', require( './../../base/assert' ) );

/**
* @name ccopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ccopy}
*/
setReadOnly( blas, 'ccopy', require( './../../base/ccopy' ) );

/**
* @name cscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cscal}
*/
setReadOnly( blas, 'cscal', require( './../../base/cscal' ) );

/**
* @name cswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/cswap}
*/
setReadOnly( blas, 'cswap', require( './../../base/cswap' ) );

/**
* @name dasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dasum}
*/
setReadOnly( blas, 'dasum', require( './../../base/dasum' ) );

/**
* @name daxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/daxpy}
*/
setReadOnly( blas, 'daxpy', require( './../../base/daxpy' ) );

/**
* @name dcabs1
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcabs1}
*/
setReadOnly( blas, 'dcabs1', require( './../../base/dcabs1' ) );

/**
* @name dcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcopy}
*/
setReadOnly( blas, 'dcopy', require( './../../base/dcopy' ) );

/**
* @name ddot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ddot}
*/
setReadOnly( blas, 'ddot', require( './../../base/ddot' ) );

/**
* @name diagonalTypes
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-types}
*/
setReadOnly( blas, 'diagonalTypes', require( './../../base/diagonal-types' ) );

/**
* @name dnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dnrm2}
*/
setReadOnly( blas, 'dnrm2', require( './../../base/dnrm2' ) );

/**
* @name drotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotg}
*/
setReadOnly( blas, 'drotg', require( './../../base/drotg' ) );

/**
* @name dscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dscal}
*/
setReadOnly( blas, 'dscal', require( './../../base/dscal' ) );

/**
* @name dsdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsdot}
*/
setReadOnly( blas, 'dsdot', require( './../../base/dsdot' ) );

/**
* @name dswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
setReadOnly( blas, 'dswap', require( './../../base/dswap' ) );

/**
* @name gasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gasum}
*/
setReadOnly( blas, 'gasum', require( './../../base/gasum' ) );

/**
* @name gaxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gaxpy}
*/
setReadOnly( blas, 'gaxpy', require( './../../base/gaxpy' ) );

/**
* @name gcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gcopy}
*/
setReadOnly( blas, 'gcopy', require( './../../base/gcopy' ) );

/**
* @name gdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gdot}
*/
setReadOnly( blas, 'gdot', require( './../../base/gdot' ) );

/**
* @name gnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gnrm2}
*/
setReadOnly( blas, 'gnrm2', require( './../../base/gnrm2' ) );

/**
* @name gscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gscal}
*/
setReadOnly( blas, 'gscal', require( './../../base/gscal' ) );

/**
* @name gswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/gswap}
*/
setReadOnly( blas, 'gswap', require( './../../base/gswap' ) );

/**
* @name idamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/idamax}
*/
setReadOnly( blas, 'idamax', require( './../../base/idamax' ) );

/**
* @name isamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/isamax}
*/
setReadOnly( blas, 'isamax', require( './../../base/isamax' ) );

/**
* @name layoutEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-enum2str}
*/
setReadOnly( blas, 'layoutEnum2Str', require( './../../base/layout-enum2str' ) );

/**
* @name layoutResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-resolve-enum}
*/
setReadOnly( blas, 'layoutResolveEnum', require( './../../base/layout-resolve-enum' ) );

/**
* @name layoutResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-resolve-str}
*/
setReadOnly( blas, 'layoutResolveStr', require( './../../base/layout-resolve-str' ) );

/**
* @name layoutStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layout-str2enum}
*/
setReadOnly( blas, 'layoutStr2Enum', require( './../../base/layout-str2enum' ) );

/**
* @name layouts
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/layouts}
*/
setReadOnly( blas, 'layouts', require( './../../base/layouts' ) );

/**
* @name matrixTriangles
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangles}
*/
setReadOnly( blas, 'matrixTriangles', require( './../../base/matrix-triangles' ) );

/**
* @name operationSides
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-sides}
*/
setReadOnly( blas, 'operationSides', require( './../../base/operation-sides' ) );

/**
* @name sasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sasum}
*/
setReadOnly( blas, 'sasum', require( './../../base/sasum' ) );

/**
* @name saxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/saxpy}
*/
setReadOnly( blas, 'saxpy', require( './../../base/saxpy' ) );

/**
* @name scabs1
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scabs1}
*/
setReadOnly( blas, 'scabs1', require( './../../base/scabs1' ) );

/**
* @name scopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scopy}
*/
setReadOnly( blas, 'scopy', require( './../../base/scopy' ) );

/**
* @name sdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sdot}
*/
setReadOnly( blas, 'sdot', require( './../../base/sdot' ) );

/**
* @name sdsdot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sdsdot}
*/
setReadOnly( blas, 'sdsdot', require( './../../base/sdsdot' ) );

/**
* @name snrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/snrm2}
*/
setReadOnly( blas, 'snrm2', require( './../../base/snrm2' ) );

/**
* @name srotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotg}
*/
setReadOnly( blas, 'srotg', require( './../../base/srotg' ) );

/**
* @name sscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sscal}
*/
setReadOnly( blas, 'sscal', require( './../../base/sscal' ) );

/**
* @name sswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sswap}
*/
setReadOnly( blas, 'sswap', require( './../../base/sswap' ) );

/**
* @name transposeOperationEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-enum2str}
*/
setReadOnly( blas, 'transposeOperationEnum2Str', require( './../../base/transpose-operation-enum2str' ) );

/**
* @name transposeOperationStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-str2enum}
*/
setReadOnly( blas, 'transposeOperationStr2Enum', require( './../../base/transpose-operation-str2enum' ) );

/**
* @name transposeOperations
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operations}
*/
setReadOnly( blas, 'transposeOperations', require( './../../base/transpose-operations' ) );

/**
* @name zcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zcopy}
*/
setReadOnly( blas, 'zcopy', require( './../../base/zcopy' ) );

/**
* @name zswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zswap}
*/
setReadOnly( blas, 'zswap', require( './../../base/zswap' ) );


// EXPORTS //

module.exports = blas;
