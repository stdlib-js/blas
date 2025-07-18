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
var rxp = require( './fixtures/row_major_xp.json' );
var rxn = require( './fixtures/row_major_xn.json' );
var roa = require( './fixtures/row_major_oa.json' );
var rox = require( './fixtures/row_major_ox.json' );
var rsa1sa2 = require( './fixtures/row_major_sa1_sa2.json' );
var rsa1nsa2 = require( './fixtures/row_major_sa1n_sa2.json' );
var rsa1sa2n = require( './fixtures/row_major_sa1_sa2n.json' );
var rsa1nsa2n = require( './fixtures/row_major_sa1n_sa2n.json' );
var rcap = require( './fixtures/row_major_complex_access_pattern.json' );

var cu = require( './fixtures/column_major_u.json' );
var cl = require( './fixtures/column_major_l.json' );
var cxp = require( './fixtures/column_major_xp.json' );
var cxn = require( './fixtures/column_major_xn.json' );
var coa = require( './fixtures/column_major_oa.json' );
var cox = require( './fixtures/column_major_ox.json' );
var csa1sa2 = require( './fixtures/column_major_sa1_sa2.json' );
var csa1nsa2 = require( './fixtures/column_major_sa1n_sa2.json' );
var csa1sa2n = require( './fixtures/column_major_sa1_sa2n.json' );
var csa1nsa2n = require( './fixtures/column_major_sa1n_sa2n.json' );
var ccap = require( './fixtures/column_major_complex_access_pattern.json' );


// VARIABLES //

var dsyr = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dsyr instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsyr, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dsyr.length, 10, 'returns expected value' );
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
			dsyr( value, data.N, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
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
			dsyr( data.uplo, value, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', opts, function test( t ) {
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
			dsyr( data.uplo, data.N, data.alpha, new Float64Array( data.x ), value, data.offsetX, new Float64Array( data.A ), data.strideA1, data.strideA2, data.offsetA );
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
			dsyr( data.uplo, data.N, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.A ), value, data.strideA2, data.offsetA );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument', opts, function test( t ) {
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
			dsyr( data.uplo, data.N, data.alpha, new Float64Array( data.x ), data.strideX, data.offsetX, new Float64Array( data.A ), data.strideA1, value, data.offsetA );
		};
	}
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, upper)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = ru;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, upper)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cu;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (row-major, lower)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs the symmetric rank 1 operation `A = α*x*x^T + A` (column-major, lower)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input matrix `A`', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;

	data = ru;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );

	t.end();
});

tape( 'if `N` is zero or the scalar constant is zero, the function returns the input matrix `A` unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A );

	out = dsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = dsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
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

	data = cl;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A );

	out = dsyr( data.uplo, 0, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	out = dsyr( data.uplo, data.N, 0.0, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( a, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1sa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rsa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides for both dimensions of `A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = csa1nsa2n;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = roa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `A` offset (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = coa;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rxp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` stride (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cxp;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
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

	data = rxn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
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

	data = cxn;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` offset (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = rox;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an `x` offset (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;

	data = cox;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
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

	data = rcap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
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

	data = ccap;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );

	expected = new Float64Array( data.A_out );

	out = dsyr( data.uplo, data.N, data.alpha, x, data.strideX, data.offsetX, a, data.strideA1, data.strideA2, data.offsetA );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
