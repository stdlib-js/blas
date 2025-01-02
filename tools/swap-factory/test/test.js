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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var Int16Array = require( '@stdlib/array/int16' );
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var dcopy = require( './../../../base/dcopy' ).ndarray;
var dswap = require( './../../../base/dswap' ).ndarray;
var factory = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, 'float64' );
		};
	}
});

tape( 'the function throws an error if provided an invalid second argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
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
			factory( dswap, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	t.strictEqual( typeof factory( dswap, 'float64' ), 'function', 'returns expected value' );
	t.end();
});

tape( 'the returned function has an arity of 2', function test( t ) {
	var swap = factory( dswap, 'float64' );
	t.strictEqual( swap.length, 2, 'has expected arity' );
	t.end();
});

tape( 'the returned function throws an error if provided a first argument which is not a non-zero-dimensional ndarray having a supported data type', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( value, y );
		};
	}
});

tape( 'the returned function throws an error if provided a first argument which is not a non-zero-dimensional ndarray having a supported data type (dimension)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( value, y, -1 );
		};
	}
});

tape( 'the returned function throws an error if provided a first argument which is a read-only ndarray', function test( t ) {
	var values;
	var opts;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	opts = {
		'readonly': true
	};

	values = [
		array( new Float64Array( 10 ), opts ),
		array( new Float64Array( 5 ), opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float64Array( value.length ) );

		return function badValue() {
			swap( value, y );
		};
	}
});

tape( 'the returned function throws an error if provided a second argument which is not a non-zero-dimensional ndarray having a supported data type', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( x, value );
		};
	}
});

tape( 'the returned function throws an error if provided a second argument which is not a non-zero-dimensional ndarray having a supported data type (dimension)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Int16Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( x, value, -1 );
		};
	}
});

tape( 'the returned function throws an error if provided a second argument which is a read-only ndarray', function test( t ) {
	var values;
	var opts;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	opts = {
		'readonly': true
	};

	values = [
		array( new Float64Array( 10 ), opts ),
		array( new Float64Array( 5 ), opts )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( value.length ) );

		return function badValue() {
			swap( x, value );
		};
	}
});

tape( 'the returned function throws an error if provided a third argument which is not a negative integer (vectors)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		'5',
		0,
		5,
		NaN,
		-3.14,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( x, y, value );
		};
	}
});

tape( 'the returned function throws an error if provided a third argument which is not a negative integer (multi-dimensional arrays)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		'5',
		0,
		5,
		NaN,
		-3.14,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var opts = {
			'shape': [ 2, 5 ]
		};
		var x = array( new Float64Array( 10 ), opts );
		var y = array( new Float64Array( 10 ), opts );

		return function badValue() {
			swap( x, y, value );
		};
	}
});

tape( 'the returned function throws an error if provided a third argument which is out-of-bounds (vectors)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		-2,
		-3,
		-4,
		-5
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			swap( x, y, value );
		};
	}
});

tape( 'the returned function throws an error if provided a third argument which is out-of-bounds (multi-dimensional arrays)', function test( t ) {
	var values;
	var swap;
	var i;

	swap = factory( dswap, 'float64' );

	values = [
		-3,
		-4,
		-5,
		-10
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var opts = {
			'shape': [ 2, 5 ]
		};
		var x = array( new Float64Array( 10 ), opts );
		var y = array( new Float64Array( 10 ), opts );

		return function badValue() {
			swap( x, y, value );
		};
	}
});

tape( 'the returned function throws an error if provided arrays having different shapes (vectors)', function test( t ) {
	var swap = factory( dswap, 'float64' );

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float64Array( 10 ) );
		var y = array( new Float64Array( 100 ) );
		swap( x, y );
	}
});

tape( 'the returned function throws an error if provided arrays having different shapes (multi-dimensional)', function test( t ) {
	var swap = factory( dswap, 'float64' );

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float64Array( 100 ), {
			'shape': [ 25, 4 ]
		});
		var y = array( new Float64Array( 100 ), {
			'shape': [ 50, 2 ]
		});
		swap( x, y, -1 );
	}
});

tape( 'the returned function interchanges vectors `x` and `y`', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, 0, xe, 1, 0 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, 0, ye, 1, 0 );

	x = array( x );
	y = array( y );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports operating on stacks of vectors (default)', function test( t ) {
	var swap;
	var opts;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, 0, xe, 1, 0 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, 0, ye, 1, 0 );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports operating on stacks of vectors (dim=-1)', function test( t ) {
	var swap;
	var opts;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, 0, xe, 1, 0 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, 0, ye, 1, 0 );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	swap( x, y, -1 );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports operating on stacks of vectors (dim=-2)', function test( t ) {
	var swap;
	var opts;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	xe = new Float64Array( y.length );
	dcopy( y.length, y, 1, 0, xe, 1, 0 );

	ye = new Float64Array( x.length );
	dcopy( x.length, x, 1, 0, ye, 1, 0 );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	swap( x, y, -2 );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports a strided vector for the first argument', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0  // 2
	]);

	xe = new Float64Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float64Array( [ 1.0, 3.0, 5.0 ] );

	x = ndarray( 'float64', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 1 ], 0, 'row-major' );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports a strided vector for the second argument', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);

	xe = new Float64Array( [ 6.0, 8.0, 10.0 ] );
	ye = new Float64Array( [ 1.0, 7.0, 2.0, 9.0, 3.0 ] );

	x = ndarray( 'float64', x, [ 3 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 2 ], 0, 'row-major' );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports negative strides', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0  // 0
	]);

	xe = new Float64Array( [ 6.0, 2.0, 7.0, 4.0, 8.0 ] );
	ye = new Float64Array( [ 1.0, 3.0, 5.0 ] );

	x = ndarray( 'float64', x, [ 3 ], [ -2 ], x.length-1, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports complex access patterns', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		7.0, // 2
		8.0, // 1
		9.0  // 0
	]);

	xe = new Float64Array( [ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ] );
	ye = new Float64Array( [ 5.0, 3.0, 1.0 ] );

	x = ndarray( 'float64', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports strided vectors having offsets', function test( t ) {
	var swap;
	var xe;
	var ye;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	xe = new Float64Array( [ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ] );
	ye = new Float64Array( [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ] );

	x = ndarray( 'float64', x, [ 3 ], [ -2 ], x.length-1, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 1 ], 3, 'row-major' );

	swap( x, y );

	t.deepEqual( x.data, xe, 'returns expected value' );
	t.notEqual( x.data, xe, 'returns expected value' );

	t.deepEqual( y.data, ye, 'returns expected value' );
	t.notEqual( y.data, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports underlying data buffers with view offsets', function test( t ) {
	var swap;
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;

	swap = factory( dswap, 'float64' );

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	xe = new Float64Array( [ 1.0, 10.0, 3.0, 11.0, 5.0, 12.0 ] );
	ye = new Float64Array( [ 7.0, 8.0, 9.0, 2.0, 4.0, 6.0 ] );

	x1 = ndarray( 'float64', x1, [ 3 ], [ 2 ], 0, 'row-major' );
	y1 = ndarray( 'float64', y1, [ 3 ], [ 1 ], 0, 'row-major' );

	swap( x1, y1 );

	t.deepEqual( x0, xe, 'returns expected value' );
	t.notEqual( x0, xe, 'returns expected value' );

	t.deepEqual( y0, ye, 'returns expected value' );
	t.notEqual( y0, ye, 'returns expected value' );

	t.end();
});

tape( 'the returned function returns a reference to the second input array', function test( t ) {
	var swap;
	var out;
	var x;
	var y;

	swap = factory( dswap, 'float64' );

	x = array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	y = array( new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	out = swap( x, y );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});
