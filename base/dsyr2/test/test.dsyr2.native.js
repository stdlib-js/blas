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

/* eslint-disable max-len */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var ru = require( './fixtures/row_major_u.json' );
var rl = require( './fixtures/row_major_l.json' );
var rx0 = require( './fixtures/row_major_x0.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );

var cu = require( './fixtures/column_major_u.json' );
var cl = require( './fixtures/column_major_l.json' );
var cx0 = require( './fixtures/column_major_x0.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );


// VARIABLES //

var dsyr2 = tryRequire( resolve( __dirname, './../lib/dsyr2.native.js' ) );
var opts = {
	'skip': ( dsyr2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsyr2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dsyr2.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( value, data.uplo, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( data.order, value, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( data.order, data.uplo, value, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( data.order, data.uplo, data.N, data.alpha, new Float64Array( data.x ), value, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( data.order, data.uplo, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), value, new Float64Array( data.A ), data.lda );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = ru;

	values = [
		2,
		1,
		0,
		-1,
		-2,
		-3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dsyr2( data.order, data.uplo, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), value );
		};
	}
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (row-major, upper)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ru;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (column-major, upper)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (row-major, lower)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (column-major, lower)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (row-major, zero-vector)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rx0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` (column-major, zero-vector)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cx0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input matrix `A`', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ru;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dsyr2( data.order, data.uplo, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = dsyr2( data.order, data.uplo, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dsyr2( data.order, data.uplo, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = dsyr2( data.order, data.uplo, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying strides (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying strides (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `x` stride (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxpyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative `y` stride (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxpyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rxnyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cxnyn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dsyr2( data.order, data.uplo, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
