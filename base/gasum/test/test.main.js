/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gasum = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gasum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( gasum.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sum of absolute values', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	y = gasum( x.length, x, 1 );

	t.strictEqual( y, 15.0, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sum of absolute values (accessors)', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	y = gasum( x.length, toAccessorArray( x ), 1 );

	t.strictEqual( y, 15.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a stride parameter', function test( t ) {
	var x;
	var y;

	x = [
		1.0,  // 0
		-2.0,
		3.0,  // 1
		-4.0,
		5.0   // 2
	];

	y = gasum( 3, x, 2 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a stride parameter (accessors)', function test( t ) {
	var x;
	var y;

	x = [
		1.0,  // 0
		-2.0,
		3.0,  // 1
		-4.0,
		5.0   // 2
	];
	y = gasum( 3, toAccessorArray( x ), 2 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];

	y = gasum( 0, x, 1 );

	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a stride parameter equal to `0` the function returns the sum of the first element repeated `N` times', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	y = gasum( x.length, x, 0 );

	t.strictEqual( y, 5.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a stride parameter equal to `0` the function returns the sum of the first element repeated `N` times (accessors)', function test( t ) {
	var x;
	var y;

	x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	y = gasum( x.length, x, 0 );

	t.strictEqual( y, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a negative stride', function test( t ) {
	var x;
	var y;

	x = [
		1.0,  // 2
		-2.0,
		3.0,  // 1
		-4.0,
		5.0   // 0
	];

	y = gasum( 3, x, -2 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a negative stride (accessors)', function test( t ) {
	var x;
	var y;

	x = [
		1.0,  // 2
		-2.0,
		3.0,  // 1
		-4.0,
		5.0   // 0
	];

	y = gasum( 3, toAccessorArray( x ), -2 );

	t.strictEqual( y, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var x1;
	var y;

	// Initial array...
	x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

	// Create an offset view...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	y = gasum( 3, x1, 2 );

	t.strictEqual( y, 12.0, 'returns expected value' );
	t.end();
});

tape( 'if the stride equals `1`, the function efficiently sums the absolute values', function test( t ) {
	var sign;
	var x;
	var y;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i+1);
	}

	y = gasum( x.length, x, 1 );

	// Compare to closed-form formula:
	t.strictEqual( y, x.length*(x.length+1)/2, 'returns expected value' );

	x = new Array( 240 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i+1);
	}

	y = gasum( x.length, x, 1 );

	// Compare to closed-form formula:
	t.strictEqual( y, x.length*(x.length+1)/2, 'returns expected value' );

	t.end();
});

tape( 'if the stride equals `1`, the function efficiently sums the absolute values (accessors)', function test( t ) {
	var sign;
	var x;
	var y;
	var i;

	x = new Array( 100 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i+1);
	}

	y = gasum( x.length, toAccessorArray( x ), 1 );

	// Compare to closed-form formula:
	t.strictEqual( y, x.length*(x.length+1)/2, 'returns expected value' );

	x = new Array( 240 );
	for ( i = 0; i < x.length; i++ ) {
		sign = randu();
		if ( sign < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		x[ i ] = sign * (i+1);
	}

	y = gasum( x.length, toAccessorArray( x ), 1 );

	// Compare to closed-form formula:
	t.strictEqual( y, x.length*(x.length+1)/2, 'returns expected value' );

	t.end();
});
