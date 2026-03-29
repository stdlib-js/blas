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
* @name csumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/csumkbn}
*/
setReadOnly( ns, 'csumkbn', require( './../../../../ext/base/ndarray/csumkbn' ) );

/**
* @name dcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcircshift}
*/
setReadOnly( ns, 'dcircshift', require( './../../../../ext/base/ndarray/dcircshift' ) );

/**
* @name dcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusum}
*/
setReadOnly( ns, 'dcusum', require( './../../../../ext/base/ndarray/dcusum' ) );

/**
* @name dcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumkbn}
*/
setReadOnly( ns, 'dcusumkbn', require( './../../../../ext/base/ndarray/dcusumkbn' ) );

/**
* @name dcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumkbn2}
*/
setReadOnly( ns, 'dcusumkbn2', require( './../../../../ext/base/ndarray/dcusumkbn2' ) );

/**
* @name dcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumors}
*/
setReadOnly( ns, 'dcusumors', require( './../../../../ext/base/ndarray/dcusumors' ) );

/**
* @name dcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dcusumpw}
*/
setReadOnly( ns, 'dcusumpw', require( './../../../../ext/base/ndarray/dcusumpw' ) );

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
* @name dnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansum}
*/
setReadOnly( ns, 'dnansum', require( './../../../../ext/base/ndarray/dnansum' ) );

/**
* @name dnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumkbn}
*/
setReadOnly( ns, 'dnansumkbn', require( './../../../../ext/base/ndarray/dnansumkbn' ) );

/**
* @name dnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumkbn2}
*/
setReadOnly( ns, 'dnansumkbn2', require( './../../../../ext/base/ndarray/dnansumkbn2' ) );

/**
* @name dnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumors}
*/
setReadOnly( ns, 'dnansumors', require( './../../../../ext/base/ndarray/dnansumors' ) );

/**
* @name dnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dnansumpw}
*/
setReadOnly( ns, 'dnansumpw', require( './../../../../ext/base/ndarray/dnansumpw' ) );

/**
* @name dsorthp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsorthp}
*/
setReadOnly( ns, 'dsorthp', require( './../../../../ext/base/ndarray/dsorthp' ) );

/**
* @name dsortins
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsortins}
*/
setReadOnly( ns, 'dsortins', require( './../../../../ext/base/ndarray/dsortins' ) );

/**
* @name dsortsh
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsortsh}
*/
setReadOnly( ns, 'dsortsh', require( './../../../../ext/base/ndarray/dsortsh' ) );

/**
* @name dsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsum}
*/
setReadOnly( ns, 'dsum', require( './../../../../ext/base/ndarray/dsum' ) );

/**
* @name dsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumkbn}
*/
setReadOnly( ns, 'dsumkbn', require( './../../../../ext/base/ndarray/dsumkbn' ) );

/**
* @name dsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumkbn2}
*/
setReadOnly( ns, 'dsumkbn2', require( './../../../../ext/base/ndarray/dsumkbn2' ) );

/**
* @name dsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumors}
*/
setReadOnly( ns, 'dsumors', require( './../../../../ext/base/ndarray/dsumors' ) );

/**
* @name dsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/dsumpw}
*/
setReadOnly( ns, 'dsumpw', require( './../../../../ext/base/ndarray/dsumpw' ) );

/**
* @name gcircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcircshift}
*/
setReadOnly( ns, 'gcircshift', require( './../../../../ext/base/ndarray/gcircshift' ) );

/**
* @name gcusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusum}
*/
setReadOnly( ns, 'gcusum', require( './../../../../ext/base/ndarray/gcusum' ) );

/**
* @name gcusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumkbn}
*/
setReadOnly( ns, 'gcusumkbn', require( './../../../../ext/base/ndarray/gcusumkbn' ) );

/**
* @name gcusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumkbn2}
*/
setReadOnly( ns, 'gcusumkbn2', require( './../../../../ext/base/ndarray/gcusumkbn2' ) );

/**
* @name gcusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumors}
*/
setReadOnly( ns, 'gcusumors', require( './../../../../ext/base/ndarray/gcusumors' ) );

/**
* @name gcusumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gcusumpw}
*/
setReadOnly( ns, 'gcusumpw', require( './../../../../ext/base/ndarray/gcusumpw' ) );

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
* @name gjoin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gjoin}
*/
setReadOnly( ns, 'gjoin', require( './../../../../ext/base/ndarray/gjoin' ) );

/**
* @name gjoinBetween
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gjoin-between}
*/
setReadOnly( ns, 'gjoinBetween', require( './../../../../ext/base/ndarray/gjoin-between' ) );

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
* @name gnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansum}
*/
setReadOnly( ns, 'gnansum', require( './../../../../ext/base/ndarray/gnansum' ) );

/**
* @name gnansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumkbn}
*/
setReadOnly( ns, 'gnansumkbn', require( './../../../../ext/base/ndarray/gnansumkbn' ) );

/**
* @name gnansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumkbn2}
*/
setReadOnly( ns, 'gnansumkbn2', require( './../../../../ext/base/ndarray/gnansumkbn2' ) );

/**
* @name gnansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumors}
*/
setReadOnly( ns, 'gnansumors', require( './../../../../ext/base/ndarray/gnansumors' ) );

/**
* @name gnansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gnansumpw}
*/
setReadOnly( ns, 'gnansumpw', require( './../../../../ext/base/ndarray/gnansumpw' ) );

/**
* @name gsort
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsort}
*/
setReadOnly( ns, 'gsort', require( './../../../../ext/base/ndarray/gsort' ) );

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
* @name gsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumkbn}
*/
setReadOnly( ns, 'gsumkbn', require( './../../../../ext/base/ndarray/gsumkbn' ) );

/**
* @name gsumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumkbn2}
*/
setReadOnly( ns, 'gsumkbn2', require( './../../../../ext/base/ndarray/gsumkbn2' ) );

/**
* @name gsumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumors}
*/
setReadOnly( ns, 'gsumors', require( './../../../../ext/base/ndarray/gsumors' ) );

/**
* @name gsumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/gsumpw}
*/
setReadOnly( ns, 'gsumpw', require( './../../../../ext/base/ndarray/gsumpw' ) );

/**
* @name scircshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scircshift}
*/
setReadOnly( ns, 'scircshift', require( './../../../../ext/base/ndarray/scircshift' ) );

/**
* @name scusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusum}
*/
setReadOnly( ns, 'scusum', require( './../../../../ext/base/ndarray/scusum' ) );

/**
* @name scusumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumkbn}
*/
setReadOnly( ns, 'scusumkbn', require( './../../../../ext/base/ndarray/scusumkbn' ) );

/**
* @name scusumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumkbn2}
*/
setReadOnly( ns, 'scusumkbn2', require( './../../../../ext/base/ndarray/scusumkbn2' ) );

/**
* @name scusumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/scusumors}
*/
setReadOnly( ns, 'scusumors', require( './../../../../ext/base/ndarray/scusumors' ) );

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
* @name snansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansum}
*/
setReadOnly( ns, 'snansum', require( './../../../../ext/base/ndarray/snansum' ) );

/**
* @name snansumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumkbn}
*/
setReadOnly( ns, 'snansumkbn', require( './../../../../ext/base/ndarray/snansumkbn' ) );

/**
* @name snansumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumkbn2}
*/
setReadOnly( ns, 'snansumkbn2', require( './../../../../ext/base/ndarray/snansumkbn2' ) );

/**
* @name snansumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumors}
*/
setReadOnly( ns, 'snansumors', require( './../../../../ext/base/ndarray/snansumors' ) );

/**
* @name snansumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/snansumpw}
*/
setReadOnly( ns, 'snansumpw', require( './../../../../ext/base/ndarray/snansumpw' ) );

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
* @name ssumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumkbn}
*/
setReadOnly( ns, 'ssumkbn', require( './../../../../ext/base/ndarray/ssumkbn' ) );

/**
* @name ssumkbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumkbn2}
*/
setReadOnly( ns, 'ssumkbn2', require( './../../../../ext/base/ndarray/ssumkbn2' ) );

/**
* @name ssumors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumors}
*/
setReadOnly( ns, 'ssumors', require( './../../../../ext/base/ndarray/ssumors' ) );

/**
* @name ssumpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/ssumpw}
*/
setReadOnly( ns, 'ssumpw', require( './../../../../ext/base/ndarray/ssumpw' ) );

/**
* @name zsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsum}
*/
setReadOnly( ns, 'zsum', require( './../../../../ext/base/ndarray/zsum' ) );

/**
* @name zsumkbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/ext/base/ndarray/zsumkbn}
*/
setReadOnly( ns, 'zsumkbn', require( './../../../../ext/base/ndarray/zsumkbn' ) );


// EXPORTS //

module.exports = ns;
