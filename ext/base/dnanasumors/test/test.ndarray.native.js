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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dnanasumors = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dnanasumors instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnanasumors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( dnanasumors.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the sum of absolute values (ignoring NaN values)', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0, 0.0, -3.0, 3.0 ] ); // eslint-disable-line max-len
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 21.0, 'returns expected value' );

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0 ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 15.0, 'returns expected value' );

	x = new Float64Array( [ -4.0, NaN, -4.0 ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 8.0, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float64Array( [ 4.0 ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	x = new Float64Array( [ 1.0, 1.0e100, 1.0, -1.0e100 ] );
	v = dnanasumors( x.length, x, 1, 0 );
	t.strictEqual( v, 2.0e100, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanasumors( 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = dnanasumors( -1, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanasumors( 1, x, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array([
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
	]);

	v = dnanasumors( 5, x, 2, 0 );

	t.strictEqual( v, 9.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array([
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
	]);

	v = dnanasumors( 5, x, -2, 8 );

	t.strictEqual( v, 9.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the sum of the first element repeated N times', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanasumors( x.length, x, 0, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0` and the first indexed element is `NaN`, the function returns `0`', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ NaN, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnanasumors( x.length, x, 0, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);

	v = dnanasumors( 5, x, 2, 1 );
	t.strictEqual( v, 9.0, 'returns expected value' );

	t.end();
});
