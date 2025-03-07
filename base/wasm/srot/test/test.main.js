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
var scopy = require( './../../../../base/scopy' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var srot = require( './../lib' );


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

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof srot.main, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( srot.main.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function applies a plane rotation (sx=1, sy=1)', function test( t ) {
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

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, -0.46, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, -0.46, -0.22, 1.06, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.78, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.78, 0.54, 0.08, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srot.main( N[ i ], x, 1, y, 1, 0.8, 0.6 );
		isApprox( t, x, xe[ i ], 6.0 );
		isApprox( t, y, ye[ i ], 6.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a plane rotation (sx=2, sy=-2)', function test( t ) {
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

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.66, 0.1, -0.1, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.96, 0.1, -0.76, 0.8, 0.9, -0.3, -0.02 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.7, -0.9, -0.12, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.64, -0.9, -0.3, 0.7, -0.18, 0.2, 0.28 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srot.main( N[ i ], x, 2, y, -2, 0.8, 0.6 );
		isApprox( t, x, xe[ i ], 20.0 );
		isApprox( t, y, ye[ i ], 20.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a plane rotation (sx=-2, sy=1)', function test( t ) {
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

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ -0.06, 0.1, -0.1, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.9, 0.1, -0.22, 0.8, 0.18, -0.3, -0.02 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.7, -1.08, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.64, -1.26, 0.54, 0.2, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srot.main( N[ i ], x, -2, y, 1, 0.8, 0.6 );
		isApprox( t, x, xe[ i ], 20.0 );
		isApprox( t, y, ye[ i ], 20.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function applies a plane rotation (sx=-1, sy=-2)', function test( t ) {
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

	xe = [
		new Float32Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.26, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float32Array( [ 0.78, 0.26, -0.76, 1.12, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float32Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.18, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float32Array( [ 0.04, -0.9, 0.18, 0.7, -0.18, 0.2, 0.16 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float32Array( xbuf );
		y = new Float32Array( ybuf );
		out = srot.main( N[ i ], x, -1, y, -2, 0.8, 0.6 );
		isApprox( t, x, xe[ i ], 4.0 );
		isApprox( t, y, ye[ i ], 4.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
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

	srot.main( 2, x, 2, y, 1, 0.8, 0.6 );

	xe = new Float32Array( [ 4.4, 2.0, 6.6, 4.0, 5.0 ] );
	ye = new Float32Array( [ 4.2, 3.8, 8.0, 9.0, 10.0 ] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
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
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);

	srot.main( 3, x, 1, y, 2, 0.0, -1.0 );

	xe = new Float32Array( [ -1.0, -3.0, -5.0, 4.0, 5.0 ] );
	ye = new Float32Array( [ 1.0, 2.0, 2.0, 4.0, 3.0 ] );

	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the second input array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = srot.main( x.length, x, 1, y, 1, 1, 0 );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves both input arrays unchanged', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	xe = new Float32Array( x.length );
	scopy( x.length, x, 1, xe, 1 );

	ye = new Float32Array( y.length );
	scopy( y.length, y, 1, ye, 1 );

	srot.main( -1, x, 1, y, 1, 0.8, 0.6 );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	srot.main( 0, x, 1, y, 1, 0.8, 0.6 );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var xe;
	var ye;
	var x;
	var y;

	x = new Float32Array([
		0.6,  // 3
		0.1,
		-0.5, // 2
		0.8,
		0.9,  // 1
		-0.3,
		-0.4  // 0
	]);
	y = new Float32Array([
		0.5,  // 0
		-0.9, // 1
		0.3,  // 2
		0.7,  // 3
		-0.6,
		0.2,
		0.8
	]);

	srot.main( 4, x, -2, y, 1, 0.8, 0.6 );

	xe = new Float32Array( [ 0.9, 0.1, -0.22, 0.8, 0.18, -0.3, -0.02 ] );
	ye = new Float32Array( [ 0.64, -1.26, 0.54, 0.2, -0.6, 0.2, 0.8 ] );

	isApprox( t, x, xe, 20.0 );
	isApprox( t, y, ye, 20.0 );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
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

	srot.main( 2, x, -1, y, -2, 0.8, 0.6 );

	xe = new Float32Array( [ 0.78, 0.26, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	ye = new Float32Array( [ 0.04, -0.9, 0.18, 0.7, -0.6, 0.2, 0.8 ] );

	isApprox( t, x, xe, 5.0 );
	isApprox( t, y, ye, 5.0 );

	t.end();
});
