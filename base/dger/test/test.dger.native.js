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


// VARIABLES //

var dger = tryRequire( resolve( __dirname, './../lib/dger.native.js' ) );
var opts = {
	'skip': ( dger instanceof Error )
};


// FIXTURES //

var cm = require( './fixtures/column_major.json' );
var cxpyp = require( './fixtures/column_major_xpyp.json' );
var cxnyp = require( './fixtures/column_major_xnyp.json' );
var cxpyn = require( './fixtures/column_major_xpyn.json' );
var cxnyn = require( './fixtures/column_major_xnyn.json' );
var cx0 = require( './fixtures/column_major_x_zeros.json' );
var cy0 = require( './fixtures/column_major_y_zeros.json' );

var rm = require( './fixtures/row_major.json' );
var rxpyp = require( './fixtures/row_major_xpyp.json' );
var rxnyp = require( './fixtures/row_major_xnyp.json' );
var rxpyn = require( './fixtures/row_major_xpyn.json' );
var rxnyn = require( './fixtures/row_major_xnyn.json' );
var rx0 = require( './fixtures/row_major_x_zeros.json' );
var ry0 = require( './fixtures/row_major_y_zeros.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dger.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			dger( value, data.M, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			dger( data.order, value, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid third argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

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
			dger( data.order, data.M, value, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dger( data.order, data.M, data.N, data.alpha, new Float64Array( data.x ), value, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dger( data.order, data.M, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), value, new Float64Array( data.A ), data.LDA );
		};
	}
});

tape( 'the function throws an error if provided an invalid tenth argument', opts, function test( t ) {
	var values;
	var data;
	var i;

	data = rm;

	values = [
		-3,
		-2,
		-1,
		0,
		1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dger( data.order, data.M, data.N, data.alpha, new Float64Array( data.x ), data.strideX, new Float64Array( data.y ), data.strideY, new Float64Array( data.A ), value );
		};
	}
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function the rank 1 operation `A = α*x*y^T + A` (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (row-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input matrix (column-major)', opts, function test( t ) {
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = dger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if either `M` or `N` is `0`, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.order, 0, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	out = dger( data.order, data.M, 0, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = rm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `α` is `0.0`, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cm;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A );

	out = dger( data.order, data.M, data.N, 0.0, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `x` contains only zeros, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (row-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = ry0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'if `y` contains only zeros, the function returns the input matrix unchanged (column-major)', opts, function test( t ) {
	var expected;
	var data;
	var out;
	var a;
	var x;
	var y;

	data = cy0;

	a = new Float64Array( data.A );
	x = new Float64Array( data.x );
	y = new Float64Array( data.y );

	expected = new Float64Array( data.A_out );

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (row-major)', opts, function test( t ) {
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying `x` and `y` strides (column-major)', opts, function test( t ) {
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
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

	out = dger( data.order, data.M, data.N, data.alpha, x, data.strideX, y, data.strideY, a, data.lda );
	t.strictEqual( out, a, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
