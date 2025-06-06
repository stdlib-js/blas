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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var gnannsumpw = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gnannsumpw, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gnannsumpw.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the sum of strided array elements (ignoring NaN values)', function test( t ) {
	var expected;
	var out;
	var x;
	var v;
	var i;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0, 0.0, -3.0, 3.0, NaN ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 3.0, 9 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0, NaN ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 3.0, 6 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ -4.0, NaN, -4.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ -8.0, 2 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ NaN, 4.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 4.0, 1 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ NaN, NaN ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0, 'returns expected value' );

	x = [ NaN ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0, 'returns expected value' );

	x = [ 4.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 4.0, 1 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ 1.0, 1.0e100, 1.0, -1.0e100 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 0.0, 4 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [];
	for ( i = 0; i < 1e3; i++ ) {
		x.push( 2.0 );
	}

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 1, out, 1 );

	expected = [ 2000.0, 1000 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns a sum equal to `0.0`', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( 0, x, 1, out, 1 );

	expected = [ 0.0, 0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	out = [ 0.0, 0 ];
	v = gnannsumpw( -1, x, 1, out, 1 );

	expected = [ 0.0, 0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a sum equal to the first element', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( 1, x, 1, out, 1 );

	expected = [ 1.0, 1 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gnannsumpw( 5, x, 2, out, 2 );

	expected = [ 5.0, 0.0, 4.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative `stride` parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gnannsumpw( 5, x, -2, out, -2 );

	expected = [ 4.0, 0.0, 5.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the sum of the first element repeated N times', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0 ];
	v = gnannsumpw( x.length, x, 0, out, 1 );

	expected = [ 5.0, 5 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected0;
	var expected1;
	var out0;
	var out1;
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		NaN,  // 4
		NaN
	]);
	out0 = new Float64Array( 4 );

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at the 3rd element

	v = gnannsumpw( 5, x1, 2, out1, 1 );

	expected0 = new Float64Array( [ 0.0, 0.0, 5.0, 4.0 ] );
	expected1 = new Float64Array( [ 5.0, 4.0 ] );

	t.deepEqual( out0, expected0, 'returns expected value' );
	t.deepEqual( v, expected1, 'returns expected value' );

	t.end();
});
