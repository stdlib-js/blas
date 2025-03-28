/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gdot = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gdot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gdot.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the dot product of arrays `x` and `y`', function test( t ) {
	var dot;
	var x;
	var y;

	x = [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ];
	y = [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ];

	dot = gdot( x.length, x, 1, y, 1 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	// Short datasets:
	x = [ 3.0, -4.0, 1.0 ];
	y = [ 1.0, -2.0, 3.0 ];

	dot = gdot( x.length, x, 1, y, 1 );
	t.strictEqual( dot, 14.0, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the dot product of arrays `x` and `y` (accessors)', function test( t ) {
	var dot;
	var x;
	var y;

	x = [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ];
	y = [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ];

	dot = gdot( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	// Short datasets:
	x = [ 3.0, -4.0, 1.0 ];
	y = [ 1.0, -2.0, 3.0 ];

	dot = gdot( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.strictEqual( dot, 14.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', function test( t ) {
	var dot;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 1.0, -2.0, 3.0 ];

	dot = gdot( 0, x, 1, y, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = gdot( -4, x, 1, y, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	];

	dot = gdot( 3, x, 2, y, 1 );
	t.strictEqual( dot, -12.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	];

	dot = gdot( 3, toAccessorArray( x ), 2, toAccessorArray( y ), 1 );
	t.strictEqual( dot, -12.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	];
	y = [
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	];

	dot = gdot( 3, x, 1, y, 2 );
	t.strictEqual( dot, 45.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	];
	y = [
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	];

	dot = gdot( 3, toAccessorArray( x ), 1, toAccessorArray( y ), 2 );
	t.strictEqual( dot, 45.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];

	dot = gdot( 3, x, -2, y, -1 );
	t.strictEqual( dot, 67.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];

	dot = gdot( 3, toAccessorArray( x ), -2, toAccessorArray( y ), -1 );
	t.strictEqual( dot, 67.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];

	dot = gdot( 3, x, 2, y, -1 );
	t.strictEqual( dot, 59.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var dot;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];

	dot = gdot( 3, toAccessorArray( x ), 2, toAccessorArray( y ), -1 );
	t.strictEqual( dot, 59.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var dot;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	dot = gdot( 3, x1, 2, y1, 1 );
	t.strictEqual( dot, 124.0, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently calculates the dot product', function test( t ) {
	var expected;
	var dot;
	var x;
	var y;
	var i;

	expected = 0.0;
	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < 100; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - 1;
		expected += x[ i ] * y[ i ];
	}
	dot = gdot( x.length, x, 1, y, 1 );
	t.strictEqual( dot, expected, 'returns expected value' );

	expected = 0.0;
	x = new Float64Array( 240 );
	y = new Float64Array( x.length );
	for ( i = 0; i < 240; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - 1;
		expected += x[ i ] * y[ i ];
	}
	dot = gdot( x.length, x, 1, y, 1 );
	t.strictEqual( dot, expected, 'returns expected value' );

	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently calculates the dot product (accessors)', function test( t ) {
	var expected;
	var dot;
	var x;
	var y;
	var i;

	expected = 0.0;
	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < 100; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - 1;
		expected += x[ i ] * y[ i ];
	}
	dot = gdot( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.strictEqual( dot, expected, 'returns expected value' );

	expected = 0.0;
	x = new Float64Array( 240 );
	y = new Float64Array( x.length );
	for ( i = 0; i < 240; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - 1;
		expected += x[ i ] * y[ i ];
	}
	dot = gdot( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.strictEqual( dot, expected, 'returns expected value' );

	t.end();
});
