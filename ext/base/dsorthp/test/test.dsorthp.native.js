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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var dcopy = require( './../../../../base/dcopy' );
var tryRequire = require( '@stdlib/utils/try-require' );
var ascending = require( './fixtures/ascending.js' );
var num2str = require( './fixtures/num2str.js' );


// VARIABLES //

var dsorthp = tryRequire( resolve( __dirname, './../lib/dsorthp.native.js' ) );
var opts = {
	'skip': ( dsorthp instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsorthp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( dsorthp.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array (increasing order)', opts, function test( t ) {
	var expected;
	var x;
	var i;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = (randu()*20.0) - 10.0;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order)', opts, function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = (randu()*20.0) - 10.0;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (increasing order)', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x[ i ] = v;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (decreasing order)', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		if ( randu() < 0.2 ) {
			v = NaN;
		} else {
			v = (randu()*20.0) - 10.0;
		}
		x[ i ] = v;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order)', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x[ i ] = v;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order)', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;
	var j;

	x = new Float64Array( 1e2 );
	for ( i = 0; i < x.length; i++ ) {
		if ( randu() < 0.5 ) {
			v = -0.0;
		} else {
			v = 0.0;
		}
		x[ i ] = v;
	}

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order; special cases)', opts, function test( t ) {
	var expected;
	var x;
	var i;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, 1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[i]+'.' );
		} else if ( isNegativeZero( expected[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[i] )+'.' );
		} else if ( isPositiveZero( expected[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ i ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[i]+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order; special cases)', opts, function test( t ) {
	var expected;
	var x;
	var i;
	var j;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );

	// Note: we assume that the built-in sort returns a correctly sorted result
	expected = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );
	expected.sort( ascending );

	dsorthp( x.length, -1.0, x, 1 );
	for ( i = 0; i < expected.length; i++ ) {
		j = expected.length - i - 1;
		if ( isnan( expected[ j ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expected[j]+'.' );
		} else if ( isNegativeZero( expected[ j ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expected[j] )+'.' );
		} else if ( isPositiveZero( expected[ j ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expected[j]+'.' );
		} else {
			t.strictEqual( x[ i ], expected[ j ], 'returns expected value. index: '+i+' actual: '+x[i]+'. expected: '+expected[j]+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = dsorthp( x.length, 1.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 3.0, -4.0, 1.0 ] );

	dsorthp( 0, 1.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	dsorthp( -4, 1.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );

	dsorthp( x.length, 0.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride (increasing order)', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float64Array([
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	]);

	dsorthp( 3, 1.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (decreasing order)', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float64Array([
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	]);

	dsorthp( 3, -1.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (increasing order)', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float64Array([
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	]);

	dsorthp( 3, 1.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (decreasing order)', opts, function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float64Array([
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	]);

	dsorthp( 3, -1.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (increasing order)', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	dsorthp( 3, 1.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (decreasing order)', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	dsorthp( 3, -1.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
