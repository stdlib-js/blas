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
* @name caxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/caxpy}
*/
setReadOnly( blas, 'caxpy', require( './../../base/caxpy' ) );

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
* @name csrot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/csrot}
*/
setReadOnly( blas, 'csrot', require( './../../base/csrot' ) );

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
* @name diagonalTypeEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-enum2str}
*/
setReadOnly( blas, 'diagonalTypeEnum2Str', require( './../../base/diagonal-type-enum2str' ) );

/**
* @name diagonalTypeResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-resolve-enum}
*/
setReadOnly( blas, 'diagonalTypeResolveEnum', require( './../../base/diagonal-type-resolve-enum' ) );

/**
* @name diagonalTypeResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-resolve-str}
*/
setReadOnly( blas, 'diagonalTypeResolveStr', require( './../../base/diagonal-type-resolve-str' ) );

/**
* @name diagonalTypeStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/diagonal-type-str2enum}
*/
setReadOnly( blas, 'diagonalTypeStr2Enum', require( './../../base/diagonal-type-str2enum' ) );

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
* @name drot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drot}
*/
setReadOnly( blas, 'drot', require( './../../base/drot' ) );

/**
* @name drotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotg}
*/
setReadOnly( blas, 'drotg', require( './../../base/drotg' ) );

/**
* @name drotm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/drotm}
*/
setReadOnly( blas, 'drotm', require( './../../base/drotm' ) );

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
* @name dspmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dspmv}
*/
setReadOnly( blas, 'dspmv', require( './../../base/dspmv' ) );

/**
* @name dswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
setReadOnly( blas, 'dswap', require( './../../base/dswap' ) );

/**
* @name dsymv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsymv}
*/
setReadOnly( blas, 'dsymv', require( './../../base/dsymv' ) );

/**
* @name dsyr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsyr}
*/
setReadOnly( blas, 'dsyr', require( './../../base/dsyr' ) );

/**
* @name dsyr2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dsyr2}
*/
setReadOnly( blas, 'dsyr2', require( './../../base/dsyr2' ) );

/**
* @name dtrmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dtrmv}
*/
setReadOnly( blas, 'dtrmv', require( './../../base/dtrmv' ) );

/**
* @name dznrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dznrm2}
*/
setReadOnly( blas, 'dznrm2', require( './../../base/dznrm2' ) );

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
* @name matrixTriangleEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-enum2str}
*/
setReadOnly( blas, 'matrixTriangleEnum2Str', require( './../../base/matrix-triangle-enum2str' ) );

/**
* @name matrixTriangleResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-resolve-enum}
*/
setReadOnly( blas, 'matrixTriangleResolveEnum', require( './../../base/matrix-triangle-resolve-enum' ) );

/**
* @name matrixTriangleResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-resolve-str}
*/
setReadOnly( blas, 'matrixTriangleResolveStr', require( './../../base/matrix-triangle-resolve-str' ) );

/**
* @name matrixTriangleStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangle-str2enum}
*/
setReadOnly( blas, 'matrixTriangleStr2Enum', require( './../../base/matrix-triangle-str2enum' ) );

/**
* @name matrixTriangles
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/matrix-triangles}
*/
setReadOnly( blas, 'matrixTriangles', require( './../../base/matrix-triangles' ) );

/**
* @name operationSideEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-enum2str}
*/
setReadOnly( blas, 'operationSideEnum2Str', require( './../../base/operation-side-enum2str' ) );

/**
* @name operationSideResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-resolve-enum}
*/
setReadOnly( blas, 'operationSideResolveEnum', require( './../../base/operation-side-resolve-enum' ) );

/**
* @name operationSideResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-resolve-str}
*/
setReadOnly( blas, 'operationSideResolveStr', require( './../../base/operation-side-resolve-str' ) );

/**
* @name operationSideStr2Enum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/operation-side-str2enum}
*/
setReadOnly( blas, 'operationSideStr2Enum', require( './../../base/operation-side-str2enum' ) );

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
* @name scasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scasum}
*/
setReadOnly( blas, 'scasum', require( './../../base/scasum' ) );

/**
* @name scnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/scnrm2}
*/
setReadOnly( blas, 'scnrm2', require( './../../base/scnrm2' ) );

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
* @name sgemv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sgemv}
*/
setReadOnly( blas, 'sgemv', require( './../../base/sgemv' ) );

/**
* @name snrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/snrm2}
*/
setReadOnly( blas, 'snrm2', require( './../../base/snrm2' ) );

/**
* @name srot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srot}
*/
setReadOnly( blas, 'srot', require( './../../base/srot' ) );

/**
* @name srotg
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotg}
*/
setReadOnly( blas, 'srotg', require( './../../base/srotg' ) );

/**
* @name srotm
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/srotm}
*/
setReadOnly( blas, 'srotm', require( './../../base/srotm' ) );

/**
* @name sscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sscal}
*/
setReadOnly( blas, 'sscal', require( './../../base/sscal' ) );

/**
* @name sspmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sspmv}
*/
setReadOnly( blas, 'sspmv', require( './../../base/sspmv' ) );

/**
* @name sswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/sswap}
*/
setReadOnly( blas, 'sswap', require( './../../base/sswap' ) );

/**
* @name ssymv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssymv}
*/
setReadOnly( blas, 'ssymv', require( './../../base/ssymv' ) );

/**
* @name ssyr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssyr}
*/
setReadOnly( blas, 'ssyr', require( './../../base/ssyr' ) );

/**
* @name ssyr2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ssyr2}
*/
setReadOnly( blas, 'ssyr2', require( './../../base/ssyr2' ) );

/**
* @name strmv
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/strmv}
*/
setReadOnly( blas, 'strmv', require( './../../base/strmv' ) );

/**
* @name transposeOperationEnum2Str
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-enum2str}
*/
setReadOnly( blas, 'transposeOperationEnum2Str', require( './../../base/transpose-operation-enum2str' ) );

/**
* @name transposeOperationResolveEnum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-resolve-enum}
*/
setReadOnly( blas, 'transposeOperationResolveEnum', require( './../../base/transpose-operation-resolve-enum' ) );

/**
* @name transposeOperationResolveStr
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/transpose-operation-resolve-str}
*/
setReadOnly( blas, 'transposeOperationResolveStr', require( './../../base/transpose-operation-resolve-str' ) );

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
* @name zaxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zaxpy}
*/
setReadOnly( blas, 'zaxpy', require( './../../base/zaxpy' ) );

/**
* @name zcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zcopy}
*/
setReadOnly( blas, 'zcopy', require( './../../base/zcopy' ) );

/**
* @name zdrot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zdrot}
*/
setReadOnly( blas, 'zdrot', require( './../../base/zdrot' ) );

/**
* @name zscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/zscal}
*/
setReadOnly( blas, 'zscal', require( './../../base/zscal' ) );

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
