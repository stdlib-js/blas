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
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dsapxsum = tryRequire( resolve( __dirname, './../lib/dsapxsum.native.js' ) );
var opts = {
	'skip': ( dsapxsum instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsapxsum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( dsapxsum.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsapxsum( value, 5.0, new Float32Array( 10 ), 1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsapxsum( 10, value, new Float32Array( 10 ), 1 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsapxsum( 10, 5.0, value, 1 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsapxsum( 10, 5.0, new Float32Array( 10 ), value );
		};
	}
});

tape( 'the function adds a constant and calculates the sum of all strided array elements', opts, function test( t ) {
	var x;
	var v;
	var i;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, 0.0, -3.0, 3.0 ] );
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( v, 48.0, 'returns expected value' );

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( v, 33.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, -4.0 ] );
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Float32Array( [ NaN, 4.0 ] );
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0e38, 1.0, -1.0e38 ] );
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( v, 20.0, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = dsapxsum( x.length, 5.0, x, 1 );
	t.strictEqual( v, 500500.0 + (5.0*1e3), 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dsapxsum( 0, 5.0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = dsapxsum( -1, 5.0, x, 1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element plus a constant', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dsapxsum( 1, 5.0, x, 1 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	v = dsapxsum( 4, 5.0, x, 2 );

	t.strictEqual( v, 25.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var x;
	var v;
	var i;

	x = new Float32Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = dsapxsum( 4, 5.0, x, -2 );

	t.strictEqual( v, 25.0, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = dsapxsum( x.length, 5.0, x, -1 );
	t.strictEqual( v, 500500.0 + (5.0*1e3), 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first element plus a constant repeated N times', opts, function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dsapxsum( x.length, 5.0, x, 0 );
	t.strictEqual( v, x.length * (x[0]+5.0), 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = dsapxsum( 4, 5.0, x1, 2 );
	t.strictEqual( v, 25.0, 'returns expected value' );

	t.end();
});
