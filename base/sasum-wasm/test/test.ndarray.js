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

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var sasum = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sasum, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( sasum.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `main` method computes the sum of absolute values', function test( t ) {
	var x;
	var y;

	x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0 ] );
	y = sasum.ndarray( x.length, x, 1, 0 );

	t.strictEqual( y, 15.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,  // 1
		-2.0,
		3.0,  // 2
		-4.0,
		5.0   // 3
	]);
	N = 3;

	y = sasum.ndarray( N, x, 2, 0 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports an `x` offset', function test( t ) {
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,
		-2.0,
		3.0,  // 1
		-4.0, // 2
		5.0   // 3
	]);
	N = 3;

	y = sasum.ndarray( N, x, 1, 2 );

	t.strictEqual( y, 12.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns `0.0`', function test( t ) {
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	y = sasum.ndarray( -1, x, 1, 0 );
	t.deepEqual( y, 0.0, 'returns expected value' );

	y = sasum.ndarray( 0, x, 1, 0 );
	t.deepEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports negative strides', function test( t ) {
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,  // 2
		-2.0,
		3.0,  // 1
		-4.0,
		5.0
	]);
	N = 2;

	y = sasum.ndarray( N, x, -2, 2 );

	t.strictEqual( y, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,
		-2.0, // 2
		3.0,
		-4.0, // 1
		5.0
	]);
	N = 2;

	y = sasum.ndarray( N, x, -2, 3 );

	t.strictEqual( y, 6.0, 'returns expected value' );
	t.end();
});
