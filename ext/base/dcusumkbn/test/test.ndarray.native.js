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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dcusumkbn = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dcusumkbn instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcusumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( dcusumkbn.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the cumulative sum', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( x.length );

	dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );
	expected = new Float64Array([
		1.0,
		3.0,
		6.0,
		10.0,
		15.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( x.length );

	dcusumkbn( x.length, 10.0, x, 1, 0, y, 1, 0 );
	expected = new Float64Array([
		11.0,
		13.0,
		16.0,
		20.0,
		25.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	y = new Float64Array( x.length );
	dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );

	for ( i = 0; i < y.length; i++ ) {
		t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
	}

	x = new Float64Array( [ 1.0, NaN, 3.0, NaN ] );
	y = new Float64Array( x.length );
	dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );

	expected = new Float64Array([
		1.0,
		NaN,
		NaN,
		NaN
	]);
	for ( i = 0; i < y.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( y[ i ] ), true, 'returns expected value. i: ' + i );
		} else {
			t.strictEqual( y[ i ], expected[ i ], true, 'returns expected value. i: ' + i );
		}
	}

	x = new Float64Array( [ 1.0, 1.0e100, 1.0, -1.0e100 ] );
	y = new Float64Array( x.length );
	dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );

	expected = new Float64Array([
		1.0,
		1.0e100,
		1.0e100,
		2.0
	]);
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( 1e3 );
	y = new Float64Array( x.length );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i + 1;
		if ( i === 0 ) {
			expected[ i ] += x[ i ];
		} else {
			expected[ i ] += expected[ i-1 ] + x[ i ];
		}
	}
	dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function preserves the sign of zero', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ -0.0, -0.0, -0.0, 0.0, 1.0 ] );
	y = new Float64Array( x.length );

	dcusumkbn( x.length, -0.0, x, 1, 0, y, 1, 0 );
	expected = new Float64Array([
		-0.0,
		-0.0,
		-0.0,
		0.0,
		1.0
	]);
	t.strictEqual( isSameFloat64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = dcusumkbn( x.length, 0.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	dcusumkbn( -1, 0.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	dcusumkbn( 0, 0.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);

	dcusumkbn( 3, 0.0, x, 2, 0, y, 1, 0 );

	expected = new Float64Array( [ 1.0, 4.0, 9.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);

	dcusumkbn( 3, 0.0, x, 1, 0, y, 2, 0 );

	expected = new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 6.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);

	dcusumkbn( 3, 0.0, x, -2, x.length-1, y, -1, 2 );

	expected = new Float64Array( [ 9.0, 8.0, 5.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0, // 3
		0.0,
		0.0,
		0.0,
		0.0
	]);

	dcusumkbn( 4, 0.0, x, 2, 1, y, 1, 0 );

	expected = new Float64Array( [ 1.0, -1.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		1.0,  // 1
		2.0,  // 2
		-2.0, // 3
		-2.0,
		2.0,
		3.0,
		4.0
	]);
	y = new Float64Array([
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0  // 3
	]);

	dcusumkbn( 4, 0.0, x, 1, 0, y, 2, 1 );

	expected = new Float64Array( [ 0.0, 2.0, 0.0, 3.0, 0.0, 5.0, 0.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);

	dcusumkbn( 3, 0.0, x, 2, 0, y, -1, 2 );

	expected = new Float64Array( [ 9.0, 4.0, 1.0, 0.0, 0.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});
