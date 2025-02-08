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

/* eslint-disable node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm/memory' );
var Float64Array = require( '@stdlib/array/float64' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 3', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 3, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which finds the index of the element with the maximum absolute value', function test( t ) {
	var idx;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] ) );

	idx = mod.main( 5, xp, 1 );
	t.strictEqual( idx, 4, 'returns expected value' );

	// Short datasets:
	xp = 0;

	mod.write( xp, new Float64Array( [ -1.0, -2.0 ] ) );

	idx = mod.main( 2, xp, 1 );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var idx;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		0.1,  // 1
		4.0,
		-0.3, // 2
		6.0,
		-0.5, // 3
		7.0,
		-0.1, // 4
		3.0
	]));

	idx = mod.main( 4, xp, 2 );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a negative `stride` parameter', function test( t ) {
	var idx;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] ) );

	idx = mod.main( 6, xp, -1 );
	t.strictEqual( idx, 2, 'returns expected value' );

	mod.write( xp, new Float64Array( [ 3.0, 999.9, 999.9, -4.0, 999.9, 999.9, 1.0, 999.9, 999.9, 15.0, 999.9, 999.9, 4.0, 999.9, 999.9, 3.0 ] ) ); // eslint-disable-line max-len

	idx = mod.main( 6, xp, -3 );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than `1`, a module instance has a `main` method which returns `-1`', function test( t ) {
	var idx;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );

	idx = mod.main( -1, xp, 1 );
	t.strictEqual( idx, -1, 'returns expected value' );

	idx = mod.main( 0, xp, 1 );
	t.strictEqual( idx, -1, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, a module instance has a `main` method which returns `0`', function test( t ) {
	var idx;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0 ] ) );

	idx = mod.main( 1, xp, 1 );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});
