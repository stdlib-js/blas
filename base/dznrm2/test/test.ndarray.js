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
var Complex128Array = require( '@stdlib/array/complex128' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var dznrm2 = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof dznrm2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dznrm2.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function computes the L2-norm', function test( t ) {
	var expected;
	var actual;
	var zx;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0
	]);
	expected = 0.8;

	actual = dznrm2( 4, zx, 1, 0 );
	isApprox( t, actual, expected, 2.0 );

	zx = new Complex128Array([
		0.1,  // 1
		0.1,  // 1
		-0.6, // 2
		0.1,  // 2
		0.1,  // 3
		-0.3, // 3
		7.0,
		8.0
	]);
	expected = 0.7;

	actual = dznrm2( 3, zx, 1, 0 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var expected;
	var actual;
	var zx;

	zx = new Complex128Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = dznrm2( 0, zx, 1, 0 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var actual;
	var zx;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		5.0,
		8.0,
		0.5, // 2
		0.0, // 2
		6.0,
		9.0,
		0.0, // 3
		0.5, // 3
		8.0,
		3.0,
		0.0, // 4
		0.2, // 4
		9.0,
		4.0
	]);
	expected = 0.8;

	actual = dznrm2( 4, zx, 2, 0 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var actual;
	var zx;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		5.0,
		8.0,
		0.5, // 2
		0.0, // 2
		6.0,
		9.0,
		0.0, // 3
		0.5, // 3
		8.0,
		3.0,
		0.0, // 4
		0.2, // 4
		9.0,
		4.0
	]);
	expected = 0.8;

	actual = dznrm2( 4, zx, -2, 6 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var actual;
	var zx;

	zx = new Complex128Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0, // 2
		7.0, // 3
		8.0, // 3
		9.0,
		10.0
	]);
	expected = 14.1;

	actual = dznrm2( 3, zx, 1, 1 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});
