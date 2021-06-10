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
var floor = require( '@stdlib/math/base/special/floor' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var scopy = require( '@stdlib/blas/base/scopy' );
var cswap = require( './../lib/cswap.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cswap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( cswap.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function swaps elements in `x` and `y`', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	xe = scopy( viewY.length, viewY, 1, new Float32Array( viewY.length ), 1 );
	ye = scopy( viewX.length, viewX, 1, new Float32Array( viewY.length ), 1 );

	cswap( x.length, x, 1, y, 1 );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.notEqual( y, x, 'different references' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	cswap( N, x, 2, y, 1 );

	xe = new Float32Array( [ 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);
	N = 2;

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	cswap( N, x, 1, y, 2 );

	xe = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 5.0, 6.0, 7.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = cswap( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns both vectors unchanged', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	xe = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	ye = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	cswap( -1, x, 1, y, 1 );
	t.deepEqual( viewX, xe, 'returns `x` unchanged' );
	t.deepEqual( viewY, ye, 'returns `y` unchanged' );

	cswap( 0, x, 1, y, 1 );
	t.deepEqual( viewX, xe, 'returns `x` unchanged' );
	t.deepEqual( viewY, ye, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 2
		2.0, // 2
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	cswap( N, x, -2, y, -1 );

	xe = new Float32Array( [ 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 5.0, 6.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Complex64Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex64Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);
	N = 2;

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	cswap( N, x, 2, y, -1 );

	xe = new Float32Array( [ 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0 ] );
	ye = new Float32Array( [ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var viewX;
	var viewY;
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;
	var N;

	// Initial arrays...
	x0 = new Complex64Array([
		1.0,
		2.0,
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0, // 1
		8.0  // 1
	]);
	y0 = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	N = floor( x0.length / 2 );

	viewX = new Float32Array( x0.buffer );
	viewY = new Float32Array( y0.buffer );

	cswap( N, x1, -2, y1, 1 );

	xe = new Float32Array( [ 1.0, 2.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0 ] );
	ye = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ] );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently swaps elements in `x` and `y`', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;
	var i;

	x = new Complex64Array( 100 );
	y = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x.set( [ i, i ], i );
	}

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	xe = scopy( viewY.length, viewY, 1, new Float32Array( viewY.length ), 1 );
	ye = scopy( viewX.length, viewX, 1, new Float32Array( viewY.length ), 1 );

	cswap( x.length, x, 1, y, 1 );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );

	x = new Complex64Array( 120 );
	y = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x.set( [ i*2, i*2 ], i );
	}

	viewX = new Float32Array( x.buffer );
	viewY = new Float32Array( y.buffer );

	xe = scopy( viewY.length, viewY, 1, new Float32Array( viewY.length ), 1 );
	ye = scopy( viewX.length, viewX, 1, new Float32Array( viewY.length ), 1 );

	cswap( x.length, x, 1, y, 1 );

	t.deepEqual( viewX, xe, 'deep equal' );
	t.deepEqual( viewY, ye, 'deep equal' );

	t.end();
});
