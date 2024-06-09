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

// MODULES //

var enum2str = require( './../../../base/layout-enum2str' );
var str2enum = require( './../../../base/layout-str2enum' );


// MAIN //

/**
* Returns the layout string associated with a supported BLAS memory layout value.
*
* @param {*} layout - layout value
* @returns {(string|null)} layout string or null
*
* @example
* var str2enum = require( '@stdlib/blas/base/layout-str2enum' );
*
* var v = resolve( str2enum( 'row-major' ) );
* // returns 'row-major'
*/
function resolve( layout ) {
	var t = ( typeof layout );
	if ( t === 'string' ) {
		return ( str2enum( layout ) === null ) ? null : layout;
	}
	if ( t === 'number' ) {
		return enum2str( layout );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
