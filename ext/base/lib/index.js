/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* @name capx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/capx}
*/
setReadOnly( ns, 'capx', require( './../../../ext/base/capx' ) );

/**
* @name caxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/caxpb}
*/
setReadOnly( ns, 'caxpb', require( './../../../ext/base/caxpb' ) );

/**
* @name caxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/caxpby}
*/
setReadOnly( ns, 'caxpby', require( './../../../ext/base/caxpby' ) );

/**
* @name cdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cdiff}
*/
setReadOnly( ns, 'cdiff', require( './../../../ext/base/cdiff' ) );

/**
* @name cfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cfill}
*/
setReadOnly( ns, 'cfill', require( './../../../ext/base/cfill' ) );

/**
* @name cindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cindex-of}
*/
setReadOnly( ns, 'cindexOf', require( './../../../ext/base/cindex-of' ) );

/**
* @name cindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cindex-of-column}
*/
setReadOnly( ns, 'cindexOfColumn', require( './../../../ext/base/cindex-of-column' ) );

/**
* @name cindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cindex-of-row}
*/
setReadOnly( ns, 'cindexOfRow', require( './../../../ext/base/cindex-of-row' ) );

/**
* @name clastIndexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/clast-index-of-row}
*/
setReadOnly( ns, 'clastIndexOfRow', require( './../../../ext/base/clast-index-of-row' ) );

/**
* @name coneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cone-to}
*/
setReadOnly( ns, 'coneTo', require( './../../../ext/base/cone-to' ) );

/**
* @name csum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/csum}
*/
setReadOnly( ns, 'csum', require( './../../../ext/base/csum' ) );

/**
* @name csumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/csumkbn}
*/
setReadOnly( ns, 'csumkbn', require( './../../../ext/base/csumkbn' ) );

/**
* @name cunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cunitspace}
*/
setReadOnly( ns, 'cunitspace', require( './../../../ext/base/cunitspace' ) );

/**
* @name cwapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cwapx}
*/
setReadOnly( ns, 'cwapx', require( './../../../ext/base/cwapx' ) );

/**
* @name cwhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cwhere}
*/
setReadOnly( ns, 'cwhere', require( './../../../ext/base/cwhere' ) );

/**
* @name cwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cwxsa}
*/
setReadOnly( ns, 'cwxsa', require( './../../../ext/base/cwxsa' ) );

/**
* @name cxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cxpy}
*/
setReadOnly( ns, 'cxpy', require( './../../../ext/base/cxpy' ) );

/**
* @name cxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cxsa}
*/
setReadOnly( ns, 'cxsa', require( './../../../ext/base/cxsa' ) );

/**
* @name cxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/cxsy}
*/
setReadOnly( ns, 'cxsy', require( './../../../ext/base/cxsy' ) );

/**
* @name czeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/czero-to}
*/
setReadOnly( ns, 'czeroTo', require( './../../../ext/base/czero-to' ) );

/**
* @name dany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dany}
*/
setReadOnly( ns, 'dany', require( './../../../ext/base/dany' ) );

/**
* @name dapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapx}
*/
setReadOnly( ns, 'dapx', require( './../../../ext/base/dapx' ) );

/**
* @name dapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsum}
*/
setReadOnly( ns, 'dapxsum', require( './../../../ext/base/dapxsum' ) );

/**
* @name dapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumkbn}
*/
setReadOnly( ns, 'dapxsumkbn', require( './../../../ext/base/dapxsumkbn' ) );

/**
* @name dapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumkbn2}
*/
setReadOnly( ns, 'dapxsumkbn2', require( './../../../ext/base/dapxsumkbn2' ) );

/**
* @name dapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumors}
*/
setReadOnly( ns, 'dapxsumors', require( './../../../ext/base/dapxsumors' ) );

/**
* @name dapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dapxsumpw}
*/
setReadOnly( ns, 'dapxsumpw', require( './../../../ext/base/dapxsumpw' ) );

/**
* @name dasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dasumpw}
*/
setReadOnly( ns, 'dasumpw', require( './../../../ext/base/dasumpw' ) );

/**
* @name daxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/daxpb}
*/
setReadOnly( ns, 'daxpb', require( './../../../ext/base/daxpb' ) );

/**
* @name daxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/daxpby}
*/
setReadOnly( ns, 'daxpby', require( './../../../ext/base/daxpby' ) );

/**
* @name dcartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcartesian-power}
*/
setReadOnly( ns, 'dcartesianPower', require( './../../../ext/base/dcartesian-power' ) );

/**
* @name dcartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcartesian-product}
*/
setReadOnly( ns, 'dcartesianProduct', require( './../../../ext/base/dcartesian-product' ) );

/**
* @name dcartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcartesian-square}
*/
setReadOnly( ns, 'dcartesianSquare', require( './../../../ext/base/dcartesian-square' ) );

/**
* @name dcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcircshift}
*/
setReadOnly( ns, 'dcircshift', require( './../../../ext/base/dcircshift' ) );

/**
* @name dcuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcuany}
*/
setReadOnly( ns, 'dcuany', require( './../../../ext/base/dcuany' ) );

/**
* @name dcuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcuevery}
*/
setReadOnly( ns, 'dcuevery', require( './../../../ext/base/dcuevery' ) );

/**
* @name dcunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcunone}
*/
setReadOnly( ns, 'dcunone', require( './../../../ext/base/dcunone' ) );

/**
* @name dcusome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusome}
*/
setReadOnly( ns, 'dcusome', require( './../../../ext/base/dcusome' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusum}
*/
setReadOnly( ns, 'dcusum', require( './../../../ext/base/dcusum' ) );

/**
* @name dcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumkbn}
*/
setReadOnly( ns, 'dcusumkbn', require( './../../../ext/base/dcusumkbn' ) );

/**
* @name dcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumkbn2}
*/
setReadOnly( ns, 'dcusumkbn2', require( './../../../ext/base/dcusumkbn2' ) );

/**
* @name dcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumors}
*/
setReadOnly( ns, 'dcusumors', require( './../../../ext/base/dcusumors' ) );

/**
* @name dcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dcusumpw}
*/
setReadOnly( ns, 'dcusumpw', require( './../../../ext/base/dcusumpw' ) );

/**
* @name ddiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ddiff}
*/
setReadOnly( ns, 'ddiff', require( './../../../ext/base/ddiff' ) );

/**
* @name dediff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dediff}
*/
setReadOnly( ns, 'dediff', require( './../../../ext/base/dediff' ) );

/**
* @name dfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dfill}
*/
setReadOnly( ns, 'dfill', require( './../../../ext/base/dfill' ) );

/**
* @name dfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dfill-nan}
*/
setReadOnly( ns, 'dfillNaN', require( './../../../ext/base/dfill-nan' ) );

/**
* @name dindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of}
*/
setReadOnly( ns, 'dindexOf', require( './../../../ext/base/dindex-of' ) );

/**
* @name dindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of-column}
*/
setReadOnly( ns, 'dindexOfColumn', require( './../../../ext/base/dindex-of-column' ) );

/**
* @name dindexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of-falsy}
*/
setReadOnly( ns, 'dindexOfFalsy', require( './../../../ext/base/dindex-of-falsy' ) );

/**
* @name dindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of-row}
*/
setReadOnly( ns, 'dindexOfRow', require( './../../../ext/base/dindex-of-row' ) );

/**
* @name dindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dindex-of-truthy}
*/
setReadOnly( ns, 'dindexOfTruthy', require( './../../../ext/base/dindex-of-truthy' ) );

/**
* @name dlastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlast-index-of}
*/
setReadOnly( ns, 'dlastIndexOf', require( './../../../ext/base/dlast-index-of' ) );

/**
* @name dlastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlast-index-of-falsy}
*/
setReadOnly( ns, 'dlastIndexOfFalsy', require( './../../../ext/base/dlast-index-of-falsy' ) );

/**
* @name dlastIndexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlast-index-of-row}
*/
setReadOnly( ns, 'dlastIndexOfRow', require( './../../../ext/base/dlast-index-of-row' ) );

/**
* @name dlastIndexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlast-index-of-truthy}
*/
setReadOnly( ns, 'dlastIndexOfTruthy', require( './../../../ext/base/dlast-index-of-truthy' ) );

/**
* @name dlinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlinspace}
*/
setReadOnly( ns, 'dlinspace', require( './../../../ext/base/dlinspace' ) );

/**
* @name dlogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dlogspace}
*/
setReadOnly( ns, 'dlogspace', require( './../../../ext/base/dlogspace' ) );

/**
* @name dminheapSiftDown
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dminheap-sift-down}
*/
setReadOnly( ns, 'dminheapSiftDown', require( './../../../ext/base/dminheap-sift-down' ) );

/**
* @name dmskrev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dmskrev}
*/
setReadOnly( ns, 'dmskrev', require( './../../../ext/base/dmskrev' ) );

/**
* @name dnanasum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnanasum}
*/
setReadOnly( ns, 'dnanasum', require( './../../../ext/base/dnanasum' ) );

/**
* @name dnanasumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnanasumors}
*/
setReadOnly( ns, 'dnanasumors', require( './../../../ext/base/dnanasumors' ) );

/**
* @name dnancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnancount}
*/
setReadOnly( ns, 'dnancount', require( './../../../ext/base/dnancount' ) );

/**
* @name dnancusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnancusumkbn}
*/
setReadOnly( ns, 'dnancusumkbn', require( './../../../ext/base/dnancusumkbn' ) );

/**
* @name dnannsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsum}
*/
setReadOnly( ns, 'dnannsum', require( './../../../ext/base/dnannsum' ) );

/**
* @name dnannsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumkbn}
*/
setReadOnly( ns, 'dnannsumkbn', require( './../../../ext/base/dnannsumkbn' ) );

/**
* @name dnannsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumkbn2}
*/
setReadOnly( ns, 'dnannsumkbn2', require( './../../../ext/base/dnannsumkbn2' ) );

/**
* @name dnannsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumors}
*/
setReadOnly( ns, 'dnannsumors', require( './../../../ext/base/dnannsumors' ) );

/**
* @name dnannsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnannsumpw}
*/
setReadOnly( ns, 'dnannsumpw', require( './../../../ext/base/dnannsumpw' ) );

/**
* @name dnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansum}
*/
setReadOnly( ns, 'dnansum', require( './../../../ext/base/dnansum' ) );

/**
* @name dnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumkbn}
*/
setReadOnly( ns, 'dnansumkbn', require( './../../../ext/base/dnansumkbn' ) );

/**
* @name dnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumkbn2}
*/
setReadOnly( ns, 'dnansumkbn2', require( './../../../ext/base/dnansumkbn2' ) );

/**
* @name dnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumors}
*/
setReadOnly( ns, 'dnansumors', require( './../../../ext/base/dnansumors' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( './../../../ext/base/dnansumpw' ) );

/**
* @name dnone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dnone}
*/
setReadOnly( ns, 'dnone', require( './../../../ext/base/dnone' ) );

/**
* @name doneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/done-to}
*/
setReadOnly( ns, 'doneTo', require( './../../../ext/base/done-to' ) );

/**
* @name dones
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dones}
*/
setReadOnly( ns, 'dones', require( './../../../ext/base/dones' ) );

/**
* @name drev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drev}
*/
setReadOnly( ns, 'drev', require( './../../../ext/base/drev' ) );

/**
* @name drrss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drrss}
*/
setReadOnly( ns, 'drrss', require( './../../../ext/base/drrss' ) );

/**
* @name drss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drss}
*/
setReadOnly( ns, 'drss', require( './../../../ext/base/drss' ) );

/**
* @name drssbl
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drssbl}
*/
setReadOnly( ns, 'drssbl', require( './../../../ext/base/drssbl' ) );

/**
* @name drsskbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/drsskbn}
*/
setReadOnly( ns, 'drsskbn', require( './../../../ext/base/drsskbn' ) );

/**
* @name dsapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsapxsum}
*/
setReadOnly( ns, 'dsapxsum', require( './../../../ext/base/dsapxsum' ) );

/**
* @name dsapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsapxsumpw}
*/
setReadOnly( ns, 'dsapxsumpw', require( './../../../ext/base/dsapxsumpw' ) );

/**
* @name dsnannsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnannsumors}
*/
setReadOnly( ns, 'dsnannsumors', require( './../../../ext/base/dsnannsumors' ) );

/**
* @name dsnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansum}
*/
setReadOnly( ns, 'dsnansum', require( './../../../ext/base/dsnansum' ) );

/**
* @name dsnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansumors}
*/
setReadOnly( ns, 'dsnansumors', require( './../../../ext/base/dsnansumors' ) );

/**
* @name dsnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsnansumpw}
*/
setReadOnly( ns, 'dsnansumpw', require( './../../../ext/base/dsnansumpw' ) );

/**
* @name dsome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsome}
*/
setReadOnly( ns, 'dsome', require( './../../../ext/base/dsome' ) );

/**
* @name dsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort}
*/
setReadOnly( ns, 'dsort', require( './../../../ext/base/dsort' ) );

/**
* @name dsort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2hp}
*/
setReadOnly( ns, 'dsort2hp', require( './../../../ext/base/dsort2hp' ) );

/**
* @name dsort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2ins}
*/
setReadOnly( ns, 'dsort2ins', require( './../../../ext/base/dsort2ins' ) );

/**
* @name dsort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsort2sh}
*/
setReadOnly( ns, 'dsort2sh', require( './../../../ext/base/dsort2sh' ) );

/**
* @name dsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsorthp}
*/
setReadOnly( ns, 'dsorthp', require( './../../../ext/base/dsorthp' ) );

/**
* @name dsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsortins}
*/
setReadOnly( ns, 'dsortins', require( './../../../ext/base/dsortins' ) );

/**
* @name dsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsortsh}
*/
setReadOnly( ns, 'dsortsh', require( './../../../ext/base/dsortsh' ) );

/**
* @name dssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssum}
*/
setReadOnly( ns, 'dssum', require( './../../../ext/base/dssum' ) );

/**
* @name dssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssumors}
*/
setReadOnly( ns, 'dssumors', require( './../../../ext/base/dssumors' ) );

/**
* @name dssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dssumpw}
*/
setReadOnly( ns, 'dssumpw', require( './../../../ext/base/dssumpw' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsum}
*/
setReadOnly( ns, 'dsum', require( './../../../ext/base/dsum' ) );

/**
* @name dsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumkbn}
*/
setReadOnly( ns, 'dsumkbn', require( './../../../ext/base/dsumkbn' ) );

/**
* @name dsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumkbn2}
*/
setReadOnly( ns, 'dsumkbn2', require( './../../../ext/base/dsumkbn2' ) );

/**
* @name dsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumors}
*/
setReadOnly( ns, 'dsumors', require( './../../../ext/base/dsumors' ) );

/**
* @name dsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dsumpw}
*/
setReadOnly( ns, 'dsumpw', require( './../../../ext/base/dsumpw' ) );

/**
* @name dunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dunitspace}
*/
setReadOnly( ns, 'dunitspace', require( './../../../ext/base/dunitspace' ) );

/**
* @name dvander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dvander}
*/
setReadOnly( ns, 'dvander', require( './../../../ext/base/dvander' ) );

/**
* @name dwapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dwapx}
*/
setReadOnly( ns, 'dwapx', require( './../../../ext/base/dwapx' ) );

/**
* @name dwhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dwhere}
*/
setReadOnly( ns, 'dwhere', require( './../../../ext/base/dwhere' ) );

/**
* @name dwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dwxsa}
*/
setReadOnly( ns, 'dwxsa', require( './../../../ext/base/dwxsa' ) );

/**
* @name dxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dxmy}
*/
setReadOnly( ns, 'dxmy', require( './../../../ext/base/dxmy' ) );

/**
* @name dxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dxpy}
*/
setReadOnly( ns, 'dxpy', require( './../../../ext/base/dxpy' ) );

/**
* @name dxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dxsa}
*/
setReadOnly( ns, 'dxsa', require( './../../../ext/base/dxsa' ) );

/**
* @name dxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dxsy}
*/
setReadOnly( ns, 'dxsy', require( './../../../ext/base/dxsy' ) );

/**
* @name dzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dzero-to}
*/
setReadOnly( ns, 'dzeroTo', require( './../../../ext/base/dzero-to' ) );

/**
* @name dzeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/dzeros}
*/
setReadOnly( ns, 'dzeros', require( './../../../ext/base/dzeros' ) );

/**
* @name gany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gany}
*/
setReadOnly( ns, 'gany', require( './../../../ext/base/gany' ) );

/**
* @name gapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapx}
*/
setReadOnly( ns, 'gapx', require( './../../../ext/base/gapx' ) );

/**
* @name gapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsum}
*/
setReadOnly( ns, 'gapxsum', require( './../../../ext/base/gapxsum' ) );

/**
* @name gapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumkbn}
*/
setReadOnly( ns, 'gapxsumkbn', require( './../../../ext/base/gapxsumkbn' ) );

/**
* @name gapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumkbn2}
*/
setReadOnly( ns, 'gapxsumkbn2', require( './../../../ext/base/gapxsumkbn2' ) );

/**
* @name gapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumors}
*/
setReadOnly( ns, 'gapxsumors', require( './../../../ext/base/gapxsumors' ) );

/**
* @name gapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gapxsumpw}
*/
setReadOnly( ns, 'gapxsumpw', require( './../../../ext/base/gapxsumpw' ) );

/**
* @name gasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gasumpw}
*/
setReadOnly( ns, 'gasumpw', require( './../../../ext/base/gasumpw' ) );

/**
* @name gaxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gaxpb}
*/
setReadOnly( ns, 'gaxpb', require( './../../../ext/base/gaxpb' ) );

/**
* @name gaxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gaxpby}
*/
setReadOnly( ns, 'gaxpby', require( './../../../ext/base/gaxpby' ) );

/**
* @name gcartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcartesian-power}
*/
setReadOnly( ns, 'gcartesianPower', require( './../../../ext/base/gcartesian-power' ) );

/**
* @name gcartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcartesian-product}
*/
setReadOnly( ns, 'gcartesianProduct', require( './../../../ext/base/gcartesian-product' ) );

/**
* @name gcartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcartesian-square}
*/
setReadOnly( ns, 'gcartesianSquare', require( './../../../ext/base/gcartesian-square' ) );

/**
* @name gcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcircshift}
*/
setReadOnly( ns, 'gcircshift', require( './../../../ext/base/gcircshift' ) );

/**
* @name gconjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gconjoin}
*/
setReadOnly( ns, 'gconjoin', require( './../../../ext/base/gconjoin' ) );

/**
* @name gcuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcuany}
*/
setReadOnly( ns, 'gcuany', require( './../../../ext/base/gcuany' ) );

/**
* @name gcuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcuevery}
*/
setReadOnly( ns, 'gcuevery', require( './../../../ext/base/gcuevery' ) );

/**
* @name gcunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcunone}
*/
setReadOnly( ns, 'gcunone', require( './../../../ext/base/gcunone' ) );

/**
* @name gcusome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusome}
*/
setReadOnly( ns, 'gcusome', require( './../../../ext/base/gcusome' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusum}
*/
setReadOnly( ns, 'gcusum', require( './../../../ext/base/gcusum' ) );

/**
* @name gcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumkbn}
*/
setReadOnly( ns, 'gcusumkbn', require( './../../../ext/base/gcusumkbn' ) );

/**
* @name gcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumkbn2}
*/
setReadOnly( ns, 'gcusumkbn2', require( './../../../ext/base/gcusumkbn2' ) );

/**
* @name gcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumors}
*/
setReadOnly( ns, 'gcusumors', require( './../../../ext/base/gcusumors' ) );

/**
* @name gcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gcusumpw}
*/
setReadOnly( ns, 'gcusumpw', require( './../../../ext/base/gcusumpw' ) );

/**
* @name gdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gdiff}
*/
setReadOnly( ns, 'gdiff', require( './../../../ext/base/gdiff' ) );

/**
* @name gediff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gediff}
*/
setReadOnly( ns, 'gediff', require( './../../../ext/base/gediff' ) );

/**
* @name gevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gevery}
*/
setReadOnly( ns, 'gevery', require( './../../../ext/base/gevery' ) );

/**
* @name gfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill}
*/
setReadOnly( ns, 'gfill', require( './../../../ext/base/gfill' ) );

/**
* @name gfillBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill-by}
*/
setReadOnly( ns, 'gfillBy', require( './../../../ext/base/gfill-by' ) );

/**
* @name gfillEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill-equal}
*/
setReadOnly( ns, 'gfillEqual', require( './../../../ext/base/gfill-equal' ) );

/**
* @name gfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfill-nan}
*/
setReadOnly( ns, 'gfillNaN', require( './../../../ext/base/gfill-nan' ) );

/**
* @name gfindIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfind-index}
*/
setReadOnly( ns, 'gfindIndex', require( './../../../ext/base/gfind-index' ) );

/**
* @name gfindLastIndex
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfind-last-index}
*/
setReadOnly( ns, 'gfindLastIndex', require( './../../../ext/base/gfind-last-index' ) );

/**
* @name gfirstIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfirst-index-equal}
*/
setReadOnly( ns, 'gfirstIndexEqual', require( './../../../ext/base/gfirst-index-equal' ) );

/**
* @name gfirstIndexNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gfirst-index-not-equal}
*/
setReadOnly( ns, 'gfirstIndexNotEqual', require( './../../../ext/base/gfirst-index-not-equal' ) );

/**
* @name gindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of}
*/
setReadOnly( ns, 'gindexOf', require( './../../../ext/base/gindex-of' ) );

/**
* @name gindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-column}
*/
setReadOnly( ns, 'gindexOfColumn', require( './../../../ext/base/gindex-of-column' ) );

/**
* @name gindexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-falsy}
*/
setReadOnly( ns, 'gindexOfFalsy', require( './../../../ext/base/gindex-of-falsy' ) );

/**
* @name gindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-row}
*/
setReadOnly( ns, 'gindexOfRow', require( './../../../ext/base/gindex-of-row' ) );

/**
* @name gindexOfSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-same-value}
*/
setReadOnly( ns, 'gindexOfSameValue', require( './../../../ext/base/gindex-of-same-value' ) );

/**
* @name gindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gindex-of-truthy}
*/
setReadOnly( ns, 'gindexOfTruthy', require( './../../../ext/base/gindex-of-truthy' ) );

/**
* @name gjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gjoin}
*/
setReadOnly( ns, 'gjoin', require( './../../../ext/base/gjoin' ) );

/**
* @name gjoinBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gjoin-between}
*/
setReadOnly( ns, 'gjoinBetween', require( './../../../ext/base/gjoin-between' ) );

/**
* @name glastIndexEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-equal}
*/
setReadOnly( ns, 'glastIndexEqual', require( './../../../ext/base/glast-index-equal' ) );

/**
* @name glastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-of}
*/
setReadOnly( ns, 'glastIndexOf', require( './../../../ext/base/glast-index-of' ) );

/**
* @name glastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-of-falsy}
*/
setReadOnly( ns, 'glastIndexOfFalsy', require( './../../../ext/base/glast-index-of-falsy' ) );

/**
* @name glastIndexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-of-row}
*/
setReadOnly( ns, 'glastIndexOfRow', require( './../../../ext/base/glast-index-of-row' ) );

/**
* @name glastIndexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glast-index-of-truthy}
*/
setReadOnly( ns, 'glastIndexOfTruthy', require( './../../../ext/base/glast-index-of-truthy' ) );

/**
* @name glinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glinspace}
*/
setReadOnly( ns, 'glinspace', require( './../../../ext/base/glinspace' ) );

/**
* @name glogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/glogspace}
*/
setReadOnly( ns, 'glogspace', require( './../../../ext/base/glogspace' ) );

/**
* @name gminheapSiftDown
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gminheap-sift-down}
*/
setReadOnly( ns, 'gminheapSiftDown', require( './../../../ext/base/gminheap-sift-down' ) );

/**
* @name gminheapify
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gminheapify}
*/
setReadOnly( ns, 'gminheapify', require( './../../../ext/base/gminheapify' ) );

/**
* @name gmskrev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gmskrev}
*/
setReadOnly( ns, 'gmskrev', require( './../../../ext/base/gmskrev' ) );

/**
* @name gnancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnancount}
*/
setReadOnly( ns, 'gnancount', require( './../../../ext/base/gnancount' ) );

/**
* @name gnannsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnannsumkbn}
*/
setReadOnly( ns, 'gnannsumkbn', require( './../../../ext/base/gnannsumkbn' ) );

/**
* @name gnannsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnannsumpw}
*/
setReadOnly( ns, 'gnannsumpw', require( './../../../ext/base/gnannsumpw' ) );

/**
* @name gnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansum}
*/
setReadOnly( ns, 'gnansum', require( './../../../ext/base/gnansum' ) );

/**
* @name gnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumkbn}
*/
setReadOnly( ns, 'gnansumkbn', require( './../../../ext/base/gnansumkbn' ) );

/**
* @name gnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumkbn2}
*/
setReadOnly( ns, 'gnansumkbn2', require( './../../../ext/base/gnansumkbn2' ) );

/**
* @name gnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumors}
*/
setReadOnly( ns, 'gnansumors', require( './../../../ext/base/gnansumors' ) );

/**
* @name gnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnansumpw}
*/
setReadOnly( ns, 'gnansumpw', require( './../../../ext/base/gnansumpw' ) );

/**
* @name gnone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gnone}
*/
setReadOnly( ns, 'gnone', require( './../../../ext/base/gnone' ) );

/**
* @name goneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gone-to}
*/
setReadOnly( ns, 'goneTo', require( './../../../ext/base/gone-to' ) );

/**
* @name greplicate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/greplicate}
*/
setReadOnly( ns, 'greplicate', require( './../../../ext/base/greplicate' ) );

/**
* @name grev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/grev}
*/
setReadOnly( ns, 'grev', require( './../../../ext/base/grev' ) );

/**
* @name gsome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsome}
*/
setReadOnly( ns, 'gsome', require( './../../../ext/base/gsome' ) );

/**
* @name gsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort}
*/
setReadOnly( ns, 'gsort', require( './../../../ext/base/gsort' ) );

/**
* @name gsort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2hp}
*/
setReadOnly( ns, 'gsort2hp', require( './../../../ext/base/gsort2hp' ) );

/**
* @name gsort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2ins}
*/
setReadOnly( ns, 'gsort2ins', require( './../../../ext/base/gsort2ins' ) );

/**
* @name gsort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsort2sh}
*/
setReadOnly( ns, 'gsort2sh', require( './../../../ext/base/gsort2sh' ) );

/**
* @name gsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsorthp}
*/
setReadOnly( ns, 'gsorthp', require( './../../../ext/base/gsorthp' ) );

/**
* @name gsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsortins}
*/
setReadOnly( ns, 'gsortins', require( './../../../ext/base/gsortins' ) );

/**
* @name gsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsortsh}
*/
setReadOnly( ns, 'gsortsh', require( './../../../ext/base/gsortsh' ) );

/**
* @name gsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsum}
*/
setReadOnly( ns, 'gsum', require( './../../../ext/base/gsum' ) );

/**
* @name gsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumkbn}
*/
setReadOnly( ns, 'gsumkbn', require( './../../../ext/base/gsumkbn' ) );

/**
* @name gsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumkbn2}
*/
setReadOnly( ns, 'gsumkbn2', require( './../../../ext/base/gsumkbn2' ) );

/**
* @name gsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumors}
*/
setReadOnly( ns, 'gsumors', require( './../../../ext/base/gsumors' ) );

/**
* @name gsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gsumpw}
*/
setReadOnly( ns, 'gsumpw', require( './../../../ext/base/gsumpw' ) );

/**
* @name gunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gunitspace}
*/
setReadOnly( ns, 'gunitspace', require( './../../../ext/base/gunitspace' ) );

/**
* @name gvander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gvander}
*/
setReadOnly( ns, 'gvander', require( './../../../ext/base/gvander' ) );

/**
* @name gwapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwapx}
*/
setReadOnly( ns, 'gwapx', require( './../../../ext/base/gwapx' ) );

/**
* @name gwax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwax}
*/
setReadOnly( ns, 'gwax', require( './../../../ext/base/gwax' ) );

/**
* @name gwaxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwaxpb}
*/
setReadOnly( ns, 'gwaxpb', require( './../../../ext/base/gwaxpb' ) );

/**
* @name gwhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwhere}
*/
setReadOnly( ns, 'gwhere', require( './../../../ext/base/gwhere' ) );

/**
* @name gwxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwxpy}
*/
setReadOnly( ns, 'gwxpy', require( './../../../ext/base/gwxpy' ) );

/**
* @name gwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwxsa}
*/
setReadOnly( ns, 'gwxsa', require( './../../../ext/base/gwxsa' ) );

/**
* @name gwxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gwxsy}
*/
setReadOnly( ns, 'gwxsy', require( './../../../ext/base/gwxsy' ) );

/**
* @name gxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gxmy}
*/
setReadOnly( ns, 'gxmy', require( './../../../ext/base/gxmy' ) );

/**
* @name gxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gxpy}
*/
setReadOnly( ns, 'gxpy', require( './../../../ext/base/gxpy' ) );

/**
* @name gxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gxsa}
*/
setReadOnly( ns, 'gxsa', require( './../../../ext/base/gxsa' ) );

/**
* @name gxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gxsy}
*/
setReadOnly( ns, 'gxsy', require( './../../../ext/base/gxsy' ) );

/**
* @name gzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/gzero-to}
*/
setReadOnly( ns, 'gzeroTo', require( './../../../ext/base/gzero-to' ) );

/**
* @name ndarray
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/ext/base/ndarray}
*/
setReadOnly( ns, 'ndarray', require( './../../../ext/base/ndarray' ) );

/**
* @name sany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sany}
*/
setReadOnly( ns, 'sany', require( './../../../ext/base/sany' ) );

/**
* @name sapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapx}
*/
setReadOnly( ns, 'sapx', require( './../../../ext/base/sapx' ) );

/**
* @name sapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsum}
*/
setReadOnly( ns, 'sapxsum', require( './../../../ext/base/sapxsum' ) );

/**
* @name sapxsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumkbn}
*/
setReadOnly( ns, 'sapxsumkbn', require( './../../../ext/base/sapxsumkbn' ) );

/**
* @name sapxsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumkbn2}
*/
setReadOnly( ns, 'sapxsumkbn2', require( './../../../ext/base/sapxsumkbn2' ) );

/**
* @name sapxsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumors}
*/
setReadOnly( ns, 'sapxsumors', require( './../../../ext/base/sapxsumors' ) );

/**
* @name sapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sapxsumpw}
*/
setReadOnly( ns, 'sapxsumpw', require( './../../../ext/base/sapxsumpw' ) );

/**
* @name sasumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sasumpw}
*/
setReadOnly( ns, 'sasumpw', require( './../../../ext/base/sasumpw' ) );

/**
* @name saxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/saxpb}
*/
setReadOnly( ns, 'saxpb', require( './../../../ext/base/saxpb' ) );

/**
* @name saxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/saxpby}
*/
setReadOnly( ns, 'saxpby', require( './../../../ext/base/saxpby' ) );

/**
* @name scartesianPower
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scartesian-power}
*/
setReadOnly( ns, 'scartesianPower', require( './../../../ext/base/scartesian-power' ) );

/**
* @name scartesianProduct
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scartesian-product}
*/
setReadOnly( ns, 'scartesianProduct', require( './../../../ext/base/scartesian-product' ) );

/**
* @name scartesianSquare
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scartesian-square}
*/
setReadOnly( ns, 'scartesianSquare', require( './../../../ext/base/scartesian-square' ) );

/**
* @name scircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scircshift}
*/
setReadOnly( ns, 'scircshift', require( './../../../ext/base/scircshift' ) );

/**
* @name scuany
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scuany}
*/
setReadOnly( ns, 'scuany', require( './../../../ext/base/scuany' ) );

/**
* @name scuevery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scuevery}
*/
setReadOnly( ns, 'scuevery', require( './../../../ext/base/scuevery' ) );

/**
* @name scunone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scunone}
*/
setReadOnly( ns, 'scunone', require( './../../../ext/base/scunone' ) );

/**
* @name scusome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusome}
*/
setReadOnly( ns, 'scusome', require( './../../../ext/base/scusome' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusum}
*/
setReadOnly( ns, 'scusum', require( './../../../ext/base/scusum' ) );

/**
* @name scusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumkbn}
*/
setReadOnly( ns, 'scusumkbn', require( './../../../ext/base/scusumkbn' ) );

/**
* @name scusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumkbn2}
*/
setReadOnly( ns, 'scusumkbn2', require( './../../../ext/base/scusumkbn2' ) );

/**
* @name scusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumors}
*/
setReadOnly( ns, 'scusumors', require( './../../../ext/base/scusumors' ) );

/**
* @name scusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/scusumpw}
*/
setReadOnly( ns, 'scusumpw', require( './../../../ext/base/scusumpw' ) );

/**
* @name sdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdiff}
*/
setReadOnly( ns, 'sdiff', require( './../../../ext/base/sdiff' ) );

/**
* @name sdsapxsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsapxsum}
*/
setReadOnly( ns, 'sdsapxsum', require( './../../../ext/base/sdsapxsum' ) );

/**
* @name sdsapxsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsapxsumpw}
*/
setReadOnly( ns, 'sdsapxsumpw', require( './../../../ext/base/sdsapxsumpw' ) );

/**
* @name sdsnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsnansum}
*/
setReadOnly( ns, 'sdsnansum', require( './../../../ext/base/sdsnansum' ) );

/**
* @name sdsnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdsnansumpw}
*/
setReadOnly( ns, 'sdsnansumpw', require( './../../../ext/base/sdsnansumpw' ) );

/**
* @name sdssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdssum}
*/
setReadOnly( ns, 'sdssum', require( './../../../ext/base/sdssum' ) );

/**
* @name sdssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sdssumpw}
*/
setReadOnly( ns, 'sdssumpw', require( './../../../ext/base/sdssumpw' ) );

/**
* @name sediff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sediff}
*/
setReadOnly( ns, 'sediff', require( './../../../ext/base/sediff' ) );

/**
* @name sfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sfill}
*/
setReadOnly( ns, 'sfill', require( './../../../ext/base/sfill' ) );

/**
* @name sfillNaN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sfill-nan}
*/
setReadOnly( ns, 'sfillNaN', require( './../../../ext/base/sfill-nan' ) );

/**
* @name sindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of}
*/
setReadOnly( ns, 'sindexOf', require( './../../../ext/base/sindex-of' ) );

/**
* @name sindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of-column}
*/
setReadOnly( ns, 'sindexOfColumn', require( './../../../ext/base/sindex-of-column' ) );

/**
* @name sindexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of-falsy}
*/
setReadOnly( ns, 'sindexOfFalsy', require( './../../../ext/base/sindex-of-falsy' ) );

/**
* @name sindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of-row}
*/
setReadOnly( ns, 'sindexOfRow', require( './../../../ext/base/sindex-of-row' ) );

/**
* @name sindexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sindex-of-truthy}
*/
setReadOnly( ns, 'sindexOfTruthy', require( './../../../ext/base/sindex-of-truthy' ) );

/**
* @name slastIndexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slast-index-of}
*/
setReadOnly( ns, 'slastIndexOf', require( './../../../ext/base/slast-index-of' ) );

/**
* @name slastIndexOfFalsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slast-index-of-falsy}
*/
setReadOnly( ns, 'slastIndexOfFalsy', require( './../../../ext/base/slast-index-of-falsy' ) );

/**
* @name slastIndexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slast-index-of-row}
*/
setReadOnly( ns, 'slastIndexOfRow', require( './../../../ext/base/slast-index-of-row' ) );

/**
* @name slastIndexOfTruthy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slast-index-of-truthy}
*/
setReadOnly( ns, 'slastIndexOfTruthy', require( './../../../ext/base/slast-index-of-truthy' ) );

/**
* @name slinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slinspace}
*/
setReadOnly( ns, 'slinspace', require( './../../../ext/base/slinspace' ) );

/**
* @name slogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/slogspace}
*/
setReadOnly( ns, 'slogspace', require( './../../../ext/base/slogspace' ) );

/**
* @name sminheapSiftDown
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sminheap-sift-down}
*/
setReadOnly( ns, 'sminheapSiftDown', require( './../../../ext/base/sminheap-sift-down' ) );

/**
* @name smskrev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/smskrev}
*/
setReadOnly( ns, 'smskrev', require( './../../../ext/base/smskrev' ) );

/**
* @name snancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snancount}
*/
setReadOnly( ns, 'snancount', require( './../../../ext/base/snancount' ) );

/**
* @name snansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansum}
*/
setReadOnly( ns, 'snansum', require( './../../../ext/base/snansum' ) );

/**
* @name snansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumkbn}
*/
setReadOnly( ns, 'snansumkbn', require( './../../../ext/base/snansumkbn' ) );

/**
* @name snansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumkbn2}
*/
setReadOnly( ns, 'snansumkbn2', require( './../../../ext/base/snansumkbn2' ) );

/**
* @name snansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumors}
*/
setReadOnly( ns, 'snansumors', require( './../../../ext/base/snansumors' ) );

/**
* @name snansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snansumpw}
*/
setReadOnly( ns, 'snansumpw', require( './../../../ext/base/snansumpw' ) );

/**
* @name snone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/snone}
*/
setReadOnly( ns, 'snone', require( './../../../ext/base/snone' ) );

/**
* @name soneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sone-to}
*/
setReadOnly( ns, 'soneTo', require( './../../../ext/base/sone-to' ) );

/**
* @name sones
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sones}
*/
setReadOnly( ns, 'sones', require( './../../../ext/base/sones' ) );

/**
* @name srev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/srev}
*/
setReadOnly( ns, 'srev', require( './../../../ext/base/srev' ) );

/**
* @name ssome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssome}
*/
setReadOnly( ns, 'ssome', require( './../../../ext/base/ssome' ) );

/**
* @name ssort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort}
*/
setReadOnly( ns, 'ssort', require( './../../../ext/base/ssort' ) );

/**
* @name ssort2hp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2hp}
*/
setReadOnly( ns, 'ssort2hp', require( './../../../ext/base/ssort2hp' ) );

/**
* @name ssort2ins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2ins}
*/
setReadOnly( ns, 'ssort2ins', require( './../../../ext/base/ssort2ins' ) );

/**
* @name ssort2sh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssort2sh}
*/
setReadOnly( ns, 'ssort2sh', require( './../../../ext/base/ssort2sh' ) );

/**
* @name ssorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssorthp}
*/
setReadOnly( ns, 'ssorthp', require( './../../../ext/base/ssorthp' ) );

/**
* @name ssortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssortins}
*/
setReadOnly( ns, 'ssortins', require( './../../../ext/base/ssortins' ) );

/**
* @name ssortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssortsh}
*/
setReadOnly( ns, 'ssortsh', require( './../../../ext/base/ssortsh' ) );

/**
* @name ssum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssum}
*/
setReadOnly( ns, 'ssum', require( './../../../ext/base/ssum' ) );

/**
* @name ssumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumkbn}
*/
setReadOnly( ns, 'ssumkbn', require( './../../../ext/base/ssumkbn' ) );

/**
* @name ssumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumkbn2}
*/
setReadOnly( ns, 'ssumkbn2', require( './../../../ext/base/ssumkbn2' ) );

/**
* @name ssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumors}
*/
setReadOnly( ns, 'ssumors', require( './../../../ext/base/ssumors' ) );

/**
* @name ssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ssumpw}
*/
setReadOnly( ns, 'ssumpw', require( './../../../ext/base/ssumpw' ) );

/**
* @name sunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sunitspace}
*/
setReadOnly( ns, 'sunitspace', require( './../../../ext/base/sunitspace' ) );

/**
* @name svander
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/svander}
*/
setReadOnly( ns, 'svander', require( './../../../ext/base/svander' ) );

/**
* @name swapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/swapx}
*/
setReadOnly( ns, 'swapx', require( './../../../ext/base/swapx' ) );

/**
* @name swhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/swhere}
*/
setReadOnly( ns, 'swhere', require( './../../../ext/base/swhere' ) );

/**
* @name swxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/swxsa}
*/
setReadOnly( ns, 'swxsa', require( './../../../ext/base/swxsa' ) );

/**
* @name sxmy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sxmy}
*/
setReadOnly( ns, 'sxmy', require( './../../../ext/base/sxmy' ) );

/**
* @name sxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sxpy}
*/
setReadOnly( ns, 'sxpy', require( './../../../ext/base/sxpy' ) );

/**
* @name sxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sxsa}
*/
setReadOnly( ns, 'sxsa', require( './../../../ext/base/sxsa' ) );

/**
* @name sxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/sxsy}
*/
setReadOnly( ns, 'sxsy', require( './../../../ext/base/sxsy' ) );

/**
* @name szeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/szero-to}
*/
setReadOnly( ns, 'szeroTo', require( './../../../ext/base/szero-to' ) );

/**
* @name szeros
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/szeros}
*/
setReadOnly( ns, 'szeros', require( './../../../ext/base/szeros' ) );

/**
* @name wasm
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/blas/ext/base/wasm}
*/
setReadOnly( ns, 'wasm', require( './../../../ext/base/wasm' ) );

/**
* @name zapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zapx}
*/
setReadOnly( ns, 'zapx', require( './../../../ext/base/zapx' ) );

/**
* @name zaxpb
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zaxpb}
*/
setReadOnly( ns, 'zaxpb', require( './../../../ext/base/zaxpb' ) );

/**
* @name zaxpby
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zaxpby}
*/
setReadOnly( ns, 'zaxpby', require( './../../../ext/base/zaxpby' ) );

/**
* @name zdiff
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zdiff}
*/
setReadOnly( ns, 'zdiff', require( './../../../ext/base/zdiff' ) );

/**
* @name zfill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zfill}
*/
setReadOnly( ns, 'zfill', require( './../../../ext/base/zfill' ) );

/**
* @name zindexOf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zindex-of}
*/
setReadOnly( ns, 'zindexOf', require( './../../../ext/base/zindex-of' ) );

/**
* @name zindexOfColumn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zindex-of-column}
*/
setReadOnly( ns, 'zindexOfColumn', require( './../../../ext/base/zindex-of-column' ) );

/**
* @name zindexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zindex-of-row}
*/
setReadOnly( ns, 'zindexOfRow', require( './../../../ext/base/zindex-of-row' ) );

/**
* @name zlastIndexOfRow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zlast-index-of-row}
*/
setReadOnly( ns, 'zlastIndexOfRow', require( './../../../ext/base/zlast-index-of-row' ) );

/**
* @name znancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/znancount}
*/
setReadOnly( ns, 'znancount', require( './../../../ext/base/znancount' ) );

/**
* @name zoneTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zone-to}
*/
setReadOnly( ns, 'zoneTo', require( './../../../ext/base/zone-to' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zsum}
*/
setReadOnly( ns, 'zsum', require( './../../../ext/base/zsum' ) );

/**
* @name zsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zsumkbn}
*/
setReadOnly( ns, 'zsumkbn', require( './../../../ext/base/zsumkbn' ) );

/**
* @name zunitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zunitspace}
*/
setReadOnly( ns, 'zunitspace', require( './../../../ext/base/zunitspace' ) );

/**
* @name zwapx
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zwapx}
*/
setReadOnly( ns, 'zwapx', require( './../../../ext/base/zwapx' ) );

/**
* @name zwhere
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zwhere}
*/
setReadOnly( ns, 'zwhere', require( './../../../ext/base/zwhere' ) );

/**
* @name zwxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zwxsa}
*/
setReadOnly( ns, 'zwxsa', require( './../../../ext/base/zwxsa' ) );

/**
* @name zxpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zxpy}
*/
setReadOnly( ns, 'zxpy', require( './../../../ext/base/zxpy' ) );

/**
* @name zxsa
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zxsa}
*/
setReadOnly( ns, 'zxsa', require( './../../../ext/base/zxsa' ) );

/**
* @name zxsy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zxsy}
*/
setReadOnly( ns, 'zxsy', require( './../../../ext/base/zxsy' ) );

/**
* @name zzeroTo
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/zzero-to}
*/
setReadOnly( ns, 'zzeroTo', require( './../../../ext/base/zzero-to' ) );


// EXPORTS //

module.exports = ns;
