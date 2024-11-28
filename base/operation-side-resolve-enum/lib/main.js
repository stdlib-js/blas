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

var enum2str = require( './../../../base/operation-side-enum2str' );
var str2enum = require( './../../../base/operation-side-str2enum' );


// MAIN //

/**
* Returns the enumeration constant associated with a supported BLAS operation side value.
*
* ## Notes
*
* -   Downstream consumers of this function should **not** rely on specific integer values (e.g., `LEFT == 0`). Instead, the function should be used in an opaque manner.
*
* @param {*} operation - operation value
* @returns {(integer|null)} enumeration constant or null
*
* @example
* var v = resolve( 'right' );
* // returns <number>
*/
function resolve( operation ) {
	var t = ( typeof operation );
	if ( t === 'number' ) {
		return ( enum2str( operation ) ) ? operation : null;
	}
	if ( t === 'string' ) {
		return str2enum( operation );
	}
	return null;
}


// EXPORTS //

module.exports = resolve;
