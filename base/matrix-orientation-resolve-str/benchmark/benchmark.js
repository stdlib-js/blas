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

var bench = require( '@stdlib/bench' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var str2enum = require( './../../../base/matrix-orientation-str2enum' );
var pkg = require( './../package.json' ).name;
var resolve = require( './../lib' );


// MAIN //

bench( pkg+'::string', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		'rows',
		'columns'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::integer', function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		str2enum( 'rows' ),
		str2enum( 'columns' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = resolve( values[ i%values.length ] );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
