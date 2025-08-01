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

/* eslint-disable node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm/memory' );
var Complex128Array = require( '@stdlib/array/complex128' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
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

tape( 'a module instance has a `main` method which calculates the L2-norm of a vector', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Complex128Array( [ 3.0, -4.0, -6.0, 8.0, 0.0, 3.0 ] ) );

	nrm2 = mod.main( 3, xp, 1 );
	t.strictEqual( nrm2, sqrt( 134.0 ), 'returns expected value' );

	// Short datasets:
	xp = 0;

	mod.write( xp, new Complex128Array( [ -4.0, 0.0 ] ) );

	nrm2 = mod.main( 1, xp, 1 );
	t.strictEqual( nrm2, 4.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `stride` parameter', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		2.0,
		2.0,
		-7.0, // 1
		-2.0, // 1
		3.0,
		3.0,
		4.0,  // 2
		2.0   // 2
	]));

	nrm2 = mod.main( 3, xp, 2 );
	t.strictEqual( nrm2, sqrt( 78.0 ), 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a negative `stride` parameter', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Complex128Array([
		-7.0, // 2
		-2.0, // 2
		2.0,
		3.0,
		4.0,  // 1
		2.0   // 1
	]));

	nrm2 = mod.main( 2, xp, -2 );
	t.strictEqual( nrm2, sqrt( 73.0 ), 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which returns `0`', function test( t ) {
	var nrm2;
	var mem;
	var mod;
	var xp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;

	mod.write( xp, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ) );

	nrm2 = mod.main( -1, xp, 1 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	nrm2 = mod.main( 0, xp, 1 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	t.end();
});
