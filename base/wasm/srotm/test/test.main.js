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
var Float32Array = require( '@stdlib/array/float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var srotm = require( './../lib' );


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {Collection} actual - actual values
* @param {Collection} expected - expected values
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;
	var i;

	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		if ( actual[ i ] === expected[ i ] ) {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		} else {
			delta = abs( actual[ i ] - expected[ i ] );
			tol = rtol * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. actual: '+actual[ i ]+'. expected: '+expected[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
}


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof srotm, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 6', function test( t ) {
	t.strictEqual( srotm.main.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function applies a modified Givens plane rotation (sx=1, sy=1)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, 2.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, 2.8, -1.4, -1.3, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.7, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.7, -0.7, 2.3, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srotm.main( N[ i ], x, 1, y, 1, param );
		isApprox( t, x, xe[ i ], 5.0 );
		isApprox( t, y, ye[ i ], 5.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a modified Givens plane rotation (sx=2, sy=-2)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];
	param = new Float32Array( [ 1.0, 5.0, 2.0, 0.0, -4.0 ] );

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 3.5, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 3.3, 0.1, -2.0, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 3.8, 0.1, -3.1, 0.8, 4.8, -0.3, -1.5 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ -2.6, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ -1.5, -0.9, -1.8, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ -1.6, -0.9, -2.1, 0.7, 2.9, 0.2, -3.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srotm.main( N[ i ], x, 2, y, -2, param );
		isApprox( t, x, xe[ i ], 10.0 );
		isApprox( t, y, ye[ i ], 10.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a modified Givens plane rotation (sx=-2, sy=1)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 3.3, 0.1, -2.0, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -1.5, 0.1, -1.4, 0.8, 3.6, -0.3, -1.9 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ -0.5, 0.3, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ -0.3, 0.9, -0.7, 1.9, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srotm.main( N[ i ], x, -2, y, 1, param );
		isApprox( t, x, xe[ i ], 10.0 );
		isApprox( t, y, ye[ i ], 10.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a plane rotation (sx=-1, sy=-2)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, -0.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.9, 0.5, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srotm.main( N[ i ], x, -1, y, -2, param );
		isApprox( t, x, xe[ i ], 4.0 );
		isApprox( t, y, ye[ i ], 4.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the `main` method applies a plane rotation', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	param = new Float32Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 3, x, 2, y, 2, param );

	xe = new Float32Array([
		-18.0, // 0
		2.0,
		-24.0, // 1
		4.0,
		-30.0  // 2
	]);
	ye = new Float32Array([
		2.0, // 0
		7.0,
		6.0, // 1
		9.0,
		10.0 // 2
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0,
		9.0, // 1
		10.0
	]);
	param = new Float32Array( [ 1.0, 0.0, 2.0, 3.0, 0.0 ] );

	srotm.main( 2, x, 3, y, 3, param );

	xe = new Float32Array([
		6.0, // 0
		2.0,
		3.0,
		9.0, // 1
		5.0
	]);
	ye = new Float32Array([
		-1.0, // 0
		7.0,
		8.0,
		-4.0, // 1
		10.0
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, 2, y, 1, param );

	xe = new Float32Array([
		-17.0, // 0
		2.0,
		-18.0, // 1
		4.0,
		5.0
	]);
	ye = new Float32Array([
		8.0,  // 0
		13.0, // 1
		8.0,
		9.0,
		10.0
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);
	param = new Float32Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, 3, y, 1, param );

	xe = new Float32Array([
		-18.0, // 0
		2.0,
		3.0,
		-21.0, // 1
		5.0
	]);
	ye = new Float32Array([
		2.0, // 0
		8.0, // 1
		8.0,
		9.0,
		10.0
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `main` method supports a negative `x` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 1
		2.0,
		3.0, // 0
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);
	param = new Float32Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, -2, y, 1, param );

	xe = new Float32Array([
		-21.0, // 1
		2.0,
		-18.0, // 0
		4.0,
		5.0
	]);
	ye = new Float32Array([
		6.0,  // 0
		2.0, // 1
		8.0,
		9.0,
		10.0
	]);

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	param = new Float32Array( [ 1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 3, x, -2, y, 1, param );

	xe = new Float32Array([
		8.0, // 2
		2.0,
		7.0, // 1
		4.0,
		6.0  // 0
	]);
	ye = new Float32Array([
		-5.0, // 0
		-3.0, // 1
		-1.0, // 2
		9.0,
		10.0
	]);

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	t.end();
});

tape( 'the `main` method supports a `y` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 3, x, 1, y, 2, param );

	xe = new Float32Array([
		-17.0, // 0
		-22.0, // 1
		-27.0, // 2
		4.0,
		5.0
	]);
	ye = new Float32Array([
		8.0,  // 0
		7.0,
		12.0, // 1
		9.0,
		16.0  // 2
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0,
		9.0, // 1
		10.0
	]);
	param = new Float32Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, 1, y, 3, param );

	xe = new Float32Array([
		-18.0, // 0
		-27.0, // 1
		3.0,
		4.0,
		5.0
	]);
	ye = new Float32Array([
		2.0, // 0
		7.0,
		8.0,
		4.0, // 1
		10.0
	]);

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `main` method supports a negative `y` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 1
		7.0,
		8.0, // 0
		9.0,
		10.0
	]);
	param = new Float32Array( [ 1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, 1, y, -2, param );

	xe = new Float32Array([
		8.0, // 0
		6.0, // 1
		3.0,
		4.0,
		5.0
	]);
	ye = new Float32Array([
		-2.0, // 1
		7.0,
		-1.0, // 0
		9.0,
		10.0
	]);

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0,
		8.0, // 1
		9.0,
		10.0 // 0
	]);
	param = new Float32Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 3, x, 1, y, -2, param );

	xe = new Float32Array([
		-30.0, // 0
		-24.0, // 1
		-18.0, // 2
		4.0,
		5.0
	]);
	ye = new Float32Array([
		6.0, // 2
		7.0,
		4.0, // 1
		9.0,
		2.0  // 0
	]);

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	t.end();
});

tape( 'the `main` method returns a reference to the second input array', function test( t ) {
	var param;
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	out = srotm.main( x.length, x, 1, y, 1, param );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method leaves both input arrays unchanged', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	xe = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	srotm.main( -1, x, 1, y, 1, param );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	srotm.main( 0, x, 1, y, 1, param );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		0.6, // 1
		0.1, // 0
		-0.5,
		0.8,
		0.9,
		-0.3,
		-0.4
	]);
	y = new Float32Array([
		0.5,  // 1
		-0.9,
		0.3,  // 0
		0.7,
		-0.6,
		0.2,
		0.8
	]);
	param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	srotm.main( 2, x, -1, y, -2, param );

	xe = new Float32Array( [ -0.9, -0.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	ye = new Float32Array( [ 1.7, -0.9, 0.5, 0.7, -0.6, 0.2, 0.8 ] );

	isApprox( t, x, xe, 5.0 );
	isApprox( t, y, ye, 5.0 );

	t.end();
});
