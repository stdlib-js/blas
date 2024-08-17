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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ndims = require( '@stdlib/ndarray/ndims' );
var shape = require( '@stdlib/ndarray/shape' );
var ddot = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ddot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 2', function test( t ) {
	t.strictEqual( ddot.length, 2, 'has expected arity' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a non-zero-dimensional ndarray containing double-precision floating-point numbers', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Float32Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			ddot( value, y );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a non-zero-dimensional ndarray containing double-precision floating-point numbers (dimension)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Float32Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var y = array( new Float64Array( 10 ) );

		return function badValue() {
			ddot( value, y, -1 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a non-zero-dimensional ndarray containing double-precision floating-point numbers', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Float32Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );

		return function badValue() {
			ddot( x, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a non-zero-dimensional ndarray containing double-precision floating-point numbers (dimension)', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		zeros( [], {
			'dtype': 'float64'
		}),
		array( new Float32Array( 10 ) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		var x = array( new Float64Array( 10 ) );

		return function badValue() {
			ddot( x, value, -1 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a negative integer (vectors)', function test( t ) {
	var values;
	var i;

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
			ddot( x, y, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a negative integer (multi-dimensional arrays)', function test( t ) {
	var values;
	var i;

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
			ddot( x, y, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is out-of-bounds (vectors)', function test( t ) {
	var values;
	var i;

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
			ddot( x, y, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is out-of-bounds (multi-dimensional arrays)', function test( t ) {
	var values;
	var i;

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
			ddot( x, y, value );
		};
	}
});

tape( 'the function throws an error if provided arrays having an unequal contracted dimension (vectors)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float64Array( 10 ) );
		var y = array( new Float64Array( 100 ) );
		ddot( x, y );
	}
});

tape( 'the function throws an error if provided arrays having an unequal contracted dimension (multi-dimensional)', function test( t ) {
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float64Array( 100 ), {
			'shape': [ 25, 4 ]
		});
		var y = array( new Float64Array( 100 ), {
			'shape': [ 50, 2 ]
		});
		ddot( x, y, -1 );
	}
});

tape( 'the function throws an error if provided broadcast-incompatible input arrays', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var x = array( new Float64Array( 100 ), {
			'shape': [ 5, 10, 2 ]
		});
		var y = array( new Float64Array( 100 ), {
			'shape': [ 50, 1, 2 ]
		});
		ddot( x, y, -1 );
	}
});

tape( 'the function calculates the dot product of vectors `x` and `y`', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	x = array( x );
	y = array( y );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), -17.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports operating on stacks of vectors (default)', function test( t ) {
	var opts;
	var dot;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [ 4 ], 'returns expected value' );
	t.strictEqual( dot.get( 0 ), 20.0, 'returns expected value' );
	t.strictEqual( dot.get( 1 ), -17.0, 'returns expected value' );
	t.strictEqual( dot.get( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( dot.get( 3 ), -28.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports operating on stacks of vectors (dim=-1)', function test( t ) {
	var opts;
	var dot;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	dot = ddot( x, y, -1 );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [ 4 ], 'returns expected value' );
	t.strictEqual( dot.get( 0 ), 20.0, 'returns expected value' );
	t.strictEqual( dot.get( 1 ), -17.0, 'returns expected value' );
	t.strictEqual( dot.get( 2 ), 8.0, 'returns expected value' );
	t.strictEqual( dot.get( 3 ), -28.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports operating on stacks of vectors (dim=-2)', function test( t ) {
	var opts;
	var dot;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	opts = {
		'shape': [ 2, 4 ]
	};
	x = array( x, opts );
	y = array( y, opts );

	dot = ddot( x, y, -2 );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [ 4 ], 'returns expected value' );
	t.strictEqual( dot.get( 0 ), 0.0, 'returns expected value' );
	t.strictEqual( dot.get( 1 ), 28.0, 'returns expected value' );
	t.strictEqual( dot.get( 2 ), -7.0, 'returns expected value' );
	t.strictEqual( dot.get( 3 ), -38.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports broadcasting', function test( t ) {
	var opts;
	var dot;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0 ] );

	opts = {
		'shape': [ 4, 2 ]
	};
	x = array( x, opts );

	opts = {
		'shape': [ 1, 2 ]
	};
	y = array( y, opts );

	dot = ddot( x, y, -1 );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [ 4 ], 'returns expected value' );
	t.strictEqual( dot.get( 0 ), 20.0, 'returns expected value' );
	t.strictEqual( dot.get( 1 ), 24.0, 'returns expected value' );
	t.strictEqual( dot.get( 2 ), 10.0, 'returns expected value' );
	t.strictEqual( dot.get( 3 ), 26.0, 'returns expected value' );

	t.end();
});

tape( 'if provided empty vectors, the dot product is `0`', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array();
	y = new Float64Array();

	x = array( x );
	y = array( y );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a strided vector for the first argument', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,  // 1
		-3.0  // 2
	]);

	x = ndarray( 'float64', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 1 ], 0, 'row-major' );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), -12.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a strided vector for the second argument', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0, // 1
		-5.0  // 2
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	x = ndarray( 'float64', x, [ 3 ], [ 1 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 2 ], 0, 'row-major' );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), 45.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var dot;
	var x;
	var y;

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

	x = ndarray( 'float64', x, [ 3 ], [ -2 ], x.length-1, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), 67.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0  // 0
	]);

	x = ndarray( 'float64', x, [ 3 ], [ 2 ], 0, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ -1 ], y.length-1, 'row-major' );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), 59.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports strided vectors having offsets', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float64Array([
		0.0,
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		0.0,
		0.0,
		8.0,  // 0
		2.0,  // 1
		-3.0  // 2
	]);

	x = ndarray( 'float64', x, [ 3 ], [ 2 ], 1, 'row-major' );
	y = ndarray( 'float64', y, [ 3 ], [ 1 ], 2, 'row-major' );

	dot = ddot( x, y );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), -12.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports underlying data buffers with view offsets', function test( t ) {
	var dot;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	x1 = ndarray( 'float64', x1, [ 3 ], [ 2 ], 0, 'row-major' );
	y1 = ndarray( 'float64', y1, [ 3 ], [ 1 ], 0, 'row-major' );

	dot = ddot( x1, y1 );

	t.strictEqual( dot instanceof ndarray, true, 'returns expected value' );
	t.strictEqual( ndims( dot ), ndims( x1 )-1, 'returns expected value' );
	t.deepEqual( shape( dot ), [], 'returns expected value' );
	t.strictEqual( dot.get(), 124.0, 'returns expected value' );

	t.end();
});
