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

tape( 'a module instance has a `main` method which computes the sum of absolute values', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );

	y = mod.main( 5, xp, 1 );
	t.strictEqual( y, 15.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		1.0, // 0
		2.0,
		-3.0, // 1
		4.0,
		-5.0  // 2
	]));
	N = 3;

	y = mod.main( N, xp, 2 );
	t.strictEqual( y, 9.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which returns `0.0`', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );

	y = mod.main( -1, xp, 1 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = mod.main( 0, xp, 1 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var mem;
	var mod;
	var xp;
	var y;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]));
	N = 3;

	y = mod.main( N, xp, -2 );
	t.strictEqual( y, 9.0, 'returns expected value' );

	t.end();
});
