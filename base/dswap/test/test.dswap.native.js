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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var floor = require( '@stdlib/math/base/special/floor' );
var Float64Array = require( '@stdlib/array/float64' );
var dcopy = require( './../../../base/dcopy' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dswap = tryRequire( resolve( __dirname, './../lib/dswap.native.js' ) );
var opts = {
	'skip': ( dswap instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dswap, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( dswap.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function interchanges vectors `x` and `y`', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 6.0, 7.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, ye, 1 );

	dswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'deep equal' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'deep equal' );
	t.notEqual( y, ye, 'different references' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, ye, 1 );

	dswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'deep equal' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'deep equal' );
	t.notEqual( y, ye, 'different references' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	N = 3;

	dswap( N, x, 2, y, 1 );

	xe = new Float64Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float64Array( [ 1.0, 3.0, 5.0, 9.0, 10.0 ] );

	t.deepEqual( x, xe, 'deep equal' );
	t.deepEqual( y, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	N = 3;

	dswap( N, x, 1, y, 2 );

	xe = new Float64Array( [ 6.0, 8.0, 10.0, 4.0, 5.0 ] );
	ye = new Float64Array( [ 1.0, 7.0, 2.0, 9.0, 3.0 ] );

	t.deepEqual( x, xe, 'deep equal' );
	t.deepEqual( y, ye, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the second input array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = dswap( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves both input arrays unchanged', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	xe = new Float64Array( x.length );
	dcopy( x.length, x, 1, xe, 1 );

	ye = new Float64Array( y.length );
	dcopy( y.length, y, 1, ye, 1 );

	dswap( -1, x, 1, y, 1 );
	t.deepEqual( x, xe, 'leaves `x` unchanged' );
	t.deepEqual( y, ye, 'leaves `y` unchanged' );

	dswap( 0, x, 1, y, 1 );
	t.deepEqual( x, xe, 'leaves `x` unchanged' );
	t.deepEqual( y, ye, 'leaves `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);
	N = 3;

	dswap( N, x, -2, y, -1 );

	xe = new Float64Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float64Array( [ 1.0, 3.0, 5.0, 9.0, 10.0 ] );

	t.deepEqual( x, xe, 'deep equal' );
	t.deepEqual( y, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	]);
	N = 3;

	dswap( N, x, 2, y, -1 );

	xe = new Float64Array( [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ] );
	ye = new Float64Array( [ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ] );

	t.deepEqual( x, xe, 'deep equal' );
	t.deepEqual( y, ye, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = floor( x0.length / 2 );

	dswap( N, x1, -2, y1, 1 );

	xe = new Float64Array( [ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ] );
	ye = new Float64Array( [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ] );

	t.deepEqual( x0, xe, 'deep equal' );
	t.deepEqual( y0, ye, 'deep equal' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently swaps elements', opts, function test( t ) {
	var xe;
	var ye;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
	}
	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, ye, 1 );

	dswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'deep equal' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'deep equal' );
	t.notEqual( y, ye, 'different references' );

	x = new Float64Array( 120 );
	y = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i*2;
		y[ i ] = x.length - i;
	}
	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, xe, 1 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, ye, 1 );

	dswap( x.length, x, 1, y, 1 );

	t.deepEqual( x, xe, 'deep equal' );
	t.notEqual( x, xe, 'different references' );

	t.deepEqual( y, ye, 'deep equal' );
	t.notEqual( y, ye, 'different references' );

	t.end();
});
