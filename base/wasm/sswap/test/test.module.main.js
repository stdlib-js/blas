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
var Float32Array = require( '@stdlib/array/float32' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 5', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 5, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which interchanges vectors `x` and `y`', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] ) );

	xe = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	mod.main( 5, xp, 1, yp, 1 );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	// Short datasets:
	xp = 0;
	yp = 16;

	mod.write( xp, new Float32Array( [ 1.0, 2.0 ] ) );
	mod.write( yp, new Float32Array( [ 1.0, 1.0 ] ) );

	mod.main( 2, xp, 1, yp, 1 );

	xe = new Float32Array( [ 1.0, 1.0 ] );
	ye = new Float32Array( [ 1.0, 2.0 ] );

	actualX = new Float32Array( 2 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 2 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]));
	mod.write( yp, new Float32Array([
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	]));
	N = 3;

	mod.main( N, xp, 2, yp, 1 );

	xe = new Float32Array( [ 1.0, 2.0, 1.0, 4.0, 1.0 ] );
	ye = new Float32Array( [ 1.0, 3.0, 5.0, 1.0, 1.0 ] );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` stride', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]));
	mod.write( yp, new Float32Array([
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	]));
	N = 3;

	mod.main( N, xp, 1, yp, 2 );

	xe = new Float32Array( [ 1.0, 1.0, 1.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 1.0, 1.0, 2.0, 1.0, 3.0 ] );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which returns a pointer to the second input array', function test( t ) {
	var out;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	out = mod.main( 5, xp, 1, yp, 1 );

	t.strictEqual( out, yp, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which leaves the vectors unchanged', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	xe = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	mod.main( -1, xp, 1, yp, 1 );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	mod.main( 0, xp, 1, yp, 1 );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]));
	mod.write( yp, new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]));
	N = 3;

	mod.main( N, xp, -2, yp, -1 );

	xe = new Float32Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 3.0, 5.0, 9.0, 10.0 ] );

	actualX = new Float32Array( 5 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 5 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports complex access patterns', function test( t ) {
	var actualX;
	var actualY;
	var mem;
	var mod;
	var xe;
	var ye;
	var xp;
	var yp;
	var N;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 48;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]));
	mod.write( 48, new Float32Array([
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	]));
	N = 3;

	mod.main( N, xp, 2, yp, -1 );

	xe = new Float32Array( [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ] );
	ye = new Float32Array( [ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ] );

	actualX = new Float32Array( 6 );
	mod.read( xp, actualX );

	actualY = new Float32Array( 6 );
	mod.read( yp, actualY );

	t.deepEqual( actualX, xe, 'returns expected value' );
	t.deepEqual( actualY, ye, 'returns expected value' );

	t.end();
});
