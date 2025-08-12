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

var tape = require( 'tape' );
var gscal = require( './../../../base/gscal' );
var gfill = require( './../../../ext/base/gfill' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var copy = require( '@stdlib/array/base/copy' );
var ggemm = require( './../lib/main.js' );


// FIXTURES //

var cntantb = require( './fixtures/column_major_nta_ntb.json' );
var ctantb = require( './fixtures/column_major_ta_ntb.json' );
var cntatb = require( './fixtures/column_major_nta_tb.json' );
var ctatb = require( './fixtures/column_major_ta_tb.json' );

var rntantb = require( './fixtures/row_major_nta_ntb.json' );
var rtantb = require( './fixtures/row_major_ta_ntb.json' );
var rntatb = require( './fixtures/row_major_nta_tb.json' );
var rtatb = require( './fixtures/row_major_ta_tb.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ggemm, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 14', function test( t ) {
	t.strictEqual( ggemm.length, 14, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( value, data.transA, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( value, data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, value, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, value, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, value, data.M, data.N, data.K, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, value, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, value, data.N, data.K, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, value, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, value, data.K, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, value, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, value, data.alpha, data.A, data.lda, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, value, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, data.A, value, data.B, data.ldb, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid ninth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), value, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid eleventh argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

	values = [
		3,
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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.lda, data.B, value, data.beta, data.C, data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid eleventh argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

	values = [
		3,
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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), value, data.beta, toAccessorArray( data.C ), data.ldc );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourteenth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

	values = [
		3,
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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourteenth argument (accessors)', function test( t ) {
	var values;
	var data;
	var i;

	data = rntantb;

	values = [
		3,
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
			ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.lda, toAccessorArray( data.B ), data.ldb, data.beta, toAccessorArray( data.C ), value );
		};
	}
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rntantb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cntantb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtantb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctantb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rntatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cntatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row-major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column-major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix (row-major)', function test( t ) {
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix (row-major) (accessors)', function test( t ) {
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix (column-major)', function test( t ) {
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix (column-major) (accessors)', function test( t ) {
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.lda, b, data.ldb, data.beta, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged (row-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged (column-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.lda, b, data.ldb, 1.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 0.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros (row-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = copy( data.B );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 0.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 0.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros (column-major) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = copy( data.B );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 0.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β` (row-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 10.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β` (row-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rtatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	c = toAccessorArray( copy( data.C ) );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 10.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( c, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β` (column-major)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 10.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β` (column-major) (accessors)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = ctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	c = toAccessorArray( copy( data.C ) );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.order, data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.lda, b, data.ldb, 10.0, c, data.ldc );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( c, expected, 'returns expected value' );

	t.end();
});
