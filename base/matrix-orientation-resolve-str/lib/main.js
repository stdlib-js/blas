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

// MODULES //

var enum2str = require( './../../../base/matrix-orientation-enum2str' );
var str2enum = require( './../../../base/matrix-orientation-str2enum' );


// MAIN //

/**
* Returns the matrix orientation string associated with a supported matrix orientation value.
*
* @param {*} value - matrix orientation value
* @returns {(string|null)} matrix orientation string or null
*
* @example
* var str2enum = require( '@stdlib/blas/base/matrix-orientation-str2enum' );
*
* var v = resolve( str2enum( 'rows' ) );
* // returns 'rows'
*/
function resolve( value ) {
	var t = ( typeof value );
	if ( t === 'string' ) {
		return ( str2enum( value ) === null ) ? null : value;
	}
	if ( t === 'number' ) {
		return enum2str( value );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
