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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var ones = require( '@stdlib/array/ones' );
var filled = require( '@stdlib/array/filled' );
var sscal = require( './../../../base/sscal' );
var sgemm = require( './../lib/ndarray.js' );


// FIXTURES //

var cacbccntantb = require( './fixtures/ca_cb_cc_nta_ntb.json' );
var cacbccntatb = require( './fixtures/ca_cb_cc_nta_tb.json' );
var cacbcctantb = require( './fixtures/ca_cb_cc_ta_ntb.json' );
var cacbcctatb = require( './fixtures/ca_cb_cc_ta_tb.json' );
var cacbrcntantb = require( './fixtures/ca_cb_rc_nta_ntb.json' );
var cacbrcntatb = require( './fixtures/ca_cb_rc_nta_tb.json' );
var cacbrctantb = require( './fixtures/ca_cb_rc_ta_ntb.json' );
var cacbrctatb = require( './fixtures/ca_cb_rc_ta_tb.json' );
var carbccntantb = require( './fixtures/ca_rb_cc_nta_ntb.json' );
var carbccntatb = require( './fixtures/ca_rb_cc_nta_tb.json' );
var carbcctantb = require( './fixtures/ca_rb_cc_ta_ntb.json' );
var carbcctatb = require( './fixtures/ca_rb_cc_ta_tb.json' );
var carbrcntantb = require( './fixtures/ca_rb_rc_nta_ntb.json' );
var carbrcntatb = require( './fixtures/ca_rb_rc_nta_tb.json' );
var carbrctantb = require( './fixtures/ca_rb_rc_ta_ntb.json' );
var carbrctatb = require( './fixtures/ca_rb_rc_ta_tb.json' );

var racbccntantb = require( './fixtures/ra_cb_cc_nta_ntb.json' );
var racbccntatb = require( './fixtures/ra_cb_cc_nta_tb.json' );
var racbcctantb = require( './fixtures/ra_cb_cc_ta_ntb.json' );
var racbcctatb = require( './fixtures/ra_cb_cc_ta_tb.json' );
var racbrcntantb = require( './fixtures/ra_cb_rc_nta_ntb.json' );
var racbrcntatb = require( './fixtures/ra_cb_rc_nta_tb.json' );
var racbrctantb = require( './fixtures/ra_cb_rc_ta_ntb.json' );
var racbrctatb = require( './fixtures/ra_cb_rc_ta_tb.json' );
var rarbccntantb = require( './fixtures/ra_rb_cc_nta_ntb.json' );
var rarbccntatb = require( './fixtures/ra_rb_cc_nta_tb.json' );
var rarbcctantb = require( './fixtures/ra_rb_cc_ta_ntb.json' );
var rarbcctatb = require( './fixtures/ra_rb_cc_ta_tb.json' );
var rarbrcntantb = require( './fixtures/ra_rb_rc_nta_ntb.json' );
var rarbrcntatb = require( './fixtures/ra_rb_rc_nta_tb.json' );
var rarbrctantb = require( './fixtures/ra_rb_rc_ta_ntb.json' );
var rarbrctatb = require( './fixtures/ra_rb_rc_ta_tb.json' );

var carbcctantbsa1sa2 = require( './fixtures/ca_rb_cc_ta_ntb_sa1_sa2.json' );
var carbcctantbsa1nsa2 = require( './fixtures/ca_rb_cc_ta_ntb_sa1n_sa2.json' );
var carbcctantbsa1sa2n = require( './fixtures/ca_rb_cc_ta_ntb_sa1_sa2n.json' );
var carbcctantbsa1nsa2n = require( './fixtures/ca_rb_cc_ta_ntb_sa1n_sa2n.json' );
var rarbcctantbsb1sb2 = require( './fixtures/ra_rb_cc_ta_ntb_sb1_sb2.json' );
var rarbcctantbsb1nsb2 = require( './fixtures/ra_rb_cc_ta_ntb_sb1n_sb2.json' );
var rarbcctantbsb1sb2n = require( './fixtures/ra_rb_cc_ta_ntb_sb1_sb2n.json' );
var rarbcctantbsb1nsb2n = require( './fixtures/ra_rb_cc_ta_ntb_sb1n_sb2n.json' );
var racbrcntatbsc1sc2 = require( './fixtures/ra_cb_rc_nta_tb_sc1_sc2.json' );
var racbrcntatbsc1nsc2 = require( './fixtures/ra_cb_rc_nta_tb_sc1n_sc2.json' );
var racbrcntatbsc1sc2n = require( './fixtures/ra_cb_rc_nta_tb_sc1_sc2n.json' );
var racbrcntatbsc1nsc2n = require( './fixtures/ra_cb_rc_nta_tb_sc1n_sc2n.json' );
var rarbrcntantboa = require( './fixtures/ra_rb_rc_nta_ntb_oa.json' );
var rarbrcntantbob = require( './fixtures/ra_rb_rc_nta_ntb_ob.json' );
var rarbrcntantboc = require( './fixtures/ra_rb_rc_nta_ntb_oc.json' );
var cap = require( './fixtures/ra_rb_rc_nta_ntb_complex_access_pattern.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sgemm, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 19', function test( t ) {
	t.strictEqual( sgemm.length, 19, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

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
			sgemm( value, data.transB, data.M, data.N, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

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
			sgemm( data.transA, value, data.M, data.N, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

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
			sgemm( data.transA, data.transB, value, data.N, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

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
			sgemm( data.transA, data.transB, data.M, value, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

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
			sgemm( data.transA, data.transB, data.M, data.N, value, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventeenth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), value, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighteenth argument', function test( t ) {
	var values;
	var data;
	var i;

	data = rarbrcntantb;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, new Float32Array( data.A ), data.strideA1, data.strideA2, data.offsetA, new Float32Array( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, new Float32Array( data.C ), data.strideC1, value, data.offsetC );
		};
	}
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbccntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbcctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbccntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbcctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrcntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrcntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbccntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbccntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrcntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrcntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbccntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbcctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbccntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbcctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbccntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbccntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, no-transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, transpose, no-transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, no-transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, transpose, transpose)', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix', function test( t ) {
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C );

	out = sgemm( data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = sgemm( data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = sgemm( data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( c.length );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 0.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = sscal( c.length, 10.0, new Float32Array( c ), 1 );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 10.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1sa2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1nsa2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1sa2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `A`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1nsa2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `A`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantboa;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `B`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1sb2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `B`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1nsb2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `B`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1sb2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `B`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1nsb2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `B`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantbob;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `C`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1sc2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `C`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1nsc2;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `C`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1sc2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `C`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1nsc2n;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `C`', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantboc;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cap;

	a = new Float32Array( data.A );
	b = new Float32Array( data.B );
	c = new Float32Array( data.C );

	expected = new Float32Array( data.C_out );

	out = sgemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports computation over large arrays (row-major, row-major, row-major)', function test( t ) {
	var expected;
	var out;
	var N;
	var a;
	var b;
	var c;

	N = 100;

	a = ones( N*N, 'float32' );
	b = ones( a.length, 'float32' );
	c = new Float32Array( a.length );

	expected = filled( N, a.length, 'float32' );

	out = sgemm( 'no-transpose', 'no-transpose', N, N, N, 1.0, a, N, 1, 0, b, N, 1, 0, 1.0, c, N, 1, 0 );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports computation over large arrays (column-major, column-major, column-major)', function test( t ) {
	var expected;
	var out;
	var N;
	var a;
	var b;
	var c;

	N = 100;

	a = ones( N*N, 'float32' );
	b = ones( a.length, 'float32' );
	c = new Float32Array( a.length );

	expected = filled( N, a.length, 'float32' );

	out = sgemm( 'no-transpose', 'no-transpose', N, N, N, 1.0, a, 1, N, 0, b, 1, N, 0, 1.0, c, 1, N, 0 );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
