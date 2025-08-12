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
var Float64Array = require( '@stdlib/array/float64' );
var ones = require( '@stdlib/array/ones' );
var filled = require( '@stdlib/array/filled' );
var gscal = require( './../../../base/gscal' );
var gfill = require( './../../../ext/base/gfill' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var copy = require( '@stdlib/array/base/copy' );
var ggemm = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof ggemm, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 19', function test( t ) {
	t.strictEqual( ggemm.length, 19, 'returns expected value' );
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
			ggemm( value, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid first argument (accessors)', function test( t ) {
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
			ggemm( value, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, data.strideC2, data.offsetC );
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
			ggemm( data.transA, value, data.M, data.N, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument (accessors)', function test( t ) {
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
			ggemm( data.transA, value, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, data.strideC2, data.offsetC );
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
			ggemm( data.transA, data.transB, value, data.N, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument (accessors)', function test( t ) {
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
			ggemm( data.transA, data.transB, value, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, data.strideC2, data.offsetC );
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
			ggemm( data.transA, data.transB, data.M, value, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid fourth argument (accessors)', function test( t ) {
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
			ggemm( data.transA, data.transB, data.M, value, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, data.strideC2, data.offsetC );
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
			ggemm( data.transA, data.transB, data.M, data.N, value, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid fifth argument (accessors)', function test( t ) {
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
			ggemm( data.transA, data.transB, data.M, data.N, value, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, data.strideC2, data.offsetC );
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
			ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, value, data.strideC2, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid seventeenth argument (accessors)', function test( t ) {
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
			ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), value, data.strideC2, data.offsetC );
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
			ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, data.A, data.strideA1, data.strideA2, data.offsetA, data.B, data.strideB1, data.strideB2, data.offsetB, data.beta, data.C, data.strideC1, value, data.offsetC );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighteenth argument (accessors)', function test( t ) {
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
			ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, toAccessorArray( data.A ), data.strideA1, data.strideA2, data.offsetA, toAccessorArray( data.B ), data.strideB1, data.strideB2, data.offsetB, data.beta, toAccessorArray( data.C ), data.strideC1, value, data.offsetC );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbccntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbcctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbccntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, column_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbcctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrcntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrcntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, column_major, row_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cacbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbccntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbccntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, column_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrcntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrcntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (column_major, row_major, row_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbccntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbcctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbccntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, column_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbcctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, column_major, row_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbccntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbccntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, column_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, no-transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, transpose, no-transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, no-transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` (row_major, row_major, row_major, transpose, transpose) (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix', function test( t ) {
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantb;

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the third input matrix (accessors)', function test( t ) {
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the third input matrix unchanged (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.transA, data.transB, 0, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.transA, data.transB, data.M, 0, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = ggemm( data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` or `K` is `0` and `β` is `1`, the function returns the third input matrix unchanged (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

	out = ggemm( data.transA, data.transB, data.M, data.N, 0, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 1.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 0.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is `0`, the function returns the third input matrix filled with zeros (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = copy( c );
	gfill( c.length, 0.0, expected, 1 );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 0.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );

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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 10.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0` and `β` is neither `0` nor `1`, the function returns the third input matrix scaled by `β` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrctatb;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = gscal( c.length, 10.0, c, 1 );

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, 0.0, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, 10.0, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( c, expected, 'returns expected value' );

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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `A` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1sa2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `A` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1nsa2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `A` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1sa2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `A` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = carbcctantbsa1nsa2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `A` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantboa;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `B` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1sb2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `B` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1nsb2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `B` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1sb2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `B` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbcctantbsb1nsb2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `B` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantbob;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the strides of the first and second dimensions of `C` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1sc2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the first dimension of `C` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1nsc2;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride for the second dimension of `C` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1sc2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides for `C` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = racbrcntatbsc1nsc2n;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset parameter for `C` (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = rarbrcntantboc;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = copy( data.A );
	b = copy( data.B );
	c = copy( data.C );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var expected;
	var cbuf;
	var data;
	var out;
	var a;
	var b;
	var c;

	data = cap;

	a = toAccessorArray( copy( data.A ) );
	b = toAccessorArray( copy( data.B ) );
	cbuf = copy( data.C );
	c = toAccessorArray( cbuf );

	expected = data.C_out;

	out = ggemm( data.transA, data.transB, data.M, data.N, data.K, data.alpha, a, data.strideA1, data.strideA2, data.offsetA, b, data.strideB1, data.strideB2, data.offsetB, data.beta, c, data.strideC1, data.strideC2, data.offsetC );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( cbuf, expected, 'returns expected value' );
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

	a = ones( N*N, 'float64' );
	b = ones( a.length, 'float64' );
	c = new Float64Array( a.length );

	expected = filled( N, a.length, 'float64' );

	out = ggemm( 'no-transpose', 'no-transpose', N, N, N, 1.0, a, N, 1, 0, b, N, 1, 0, 1.0, c, N, 1, 0 );
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

	a = ones( N*N, 'float64' );
	b = ones( a.length, 'float64' );
	c = new Float64Array( a.length );

	expected = filled( N, a.length, 'float64' );

	out = ggemm( 'no-transpose', 'no-transpose', N, N, N, 1.0, a, 1, N, 0, b, 1, N, 0, 1.0, c, 1, N, 0 );
	t.strictEqual( out, c, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
