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

var str2enum = require( './../../../base/matrix-orientation-str2enum' );
var resolve = require( './../lib' );

var v = resolve( str2enum( 'rows' ) );
console.log( v );
// => 'rows'

v = resolve( str2enum( 'columns' ) );
console.log( v );
// => 'columns'
