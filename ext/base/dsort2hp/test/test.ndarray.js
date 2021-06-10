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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var dcopy = require( '@stdlib/blas/base/dcopy' );
var num2str = require( './fixtures/num2str.js' );
var dsort2hp = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsort2hp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dsort2hp.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0 ] );
	expectedY = new Float64Array( [ 5.0, 7.0, 3.0, 1.0, 0.0, 2.0, 4.0, 6.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ] );
	expectedY = new Float64Array( [ 6.0, 2.0, 4.0, 0.0, 1.0, 3.0, 5.0, 7.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0, NaN, NaN ] );
	expectedY = new Float64Array( [ 6.0, 9.0, 4.0, 1.0, 0.0, 2.0, 5.0, 7.0, 3.0, 8.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ NaN, NaN, 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ] );
	expectedY = new Float64Array( [ 3.0, 8.0, 7.0, 2.0, 5.0, 0.0, 1.0, 4.0, 6.0, 9.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -0.0, -0.0, 0.0, 0.0 ] );
	expectedY = new Float64Array( [ 1.0, 3.0, 0.0, 2.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ 0.0, 0.0, -0.0, -0.0 ] );
	expectedY = new Float64Array( [ 0.0, 2.0, 1.0, 3.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order; special cases)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN ] );
	expectedY = new Float64Array( [ 2.0, 1.0, 3.0, 4.0, 0.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN ] );
	expectedY = new Float64Array( [ 1.0, 0.0, 2.0, 3.0, 4.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN, NaN ] );
	expectedY = new Float64Array( [ 2.0, 1.0, 3.0, 4.0, 0.0, 5.0 ] );

	dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order; special cases)', function test( t ) {
	var expectedX;
	var expectedY;
	var xc;
	var x;
	var y;
	var v;
	var i;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 0.0, 3.0, 4.0, 1.0, 2.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 4.0, 2.0, 3.0, 0.0, 1.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	xc = dcopy( x.length, x, 1, new Float64Array( x.length ), 1 );

	expectedX = new Float64Array( [ NaN, NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 0.0, 5.0, 3.0, 4.0, 1.0, 2.0 ] );

	dsort2hp( x.length, -1.0, x, 1, 0, y, 1, 0 );
	for ( i = 0; i < expectedX.length; i++ ) {
		v = expectedX[ i ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( x[ i ], v, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+v+'.' );
		}
		// Account for unstable sort...
		v = xc[ expectedY[i] ];
		if ( isnan( v ) ) {
			t.strictEqual( isnan( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		} else if ( isNegativeZero( v ) ) {
			t.strictEqual( isNegativeZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+num2str( v )+'.' );
		} else if ( isPositiveZero( v ) ) {
			t.strictEqual( isPositiveZero( xc[ y[i] ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( xc[ y[i] ] )+'. expected: '+v+'.' );
		} else {
			t.strictEqual( xc[ y[i] ], v, 'returns expected value. index: '+i+'. actual: '+xc[ y[i] ]+'. expected: '+v+'.' );
		}
	}
	t.end();
});

tape( 'the function returns a reference to the first input array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	out = dsort2hp( x.length, 1.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.notEqual( out, y, 'different reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves `x` and `y` unchanged', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	expectedX = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expectedY = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	dsort2hp( 0, 1.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	dsort2hp( -4, 1.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function leaves `x` and `y` unchanged', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	expectedX = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expectedY = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	dsort2hp( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying strides (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
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
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	]);
	expectedX = new Float64Array([
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	]);
	expectedY = new Float64Array([
		2.0, // 0
		1.0,
		0.0, // 1
		3.0,
		4.0  // 2
	]);

	dsort2hp( 3, 1.0, x, 2, 0, y, 2, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying strides (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
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
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	]);
	expectedX = new Float64Array([
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	]);
	expectedY = new Float64Array([
		4.0, // 0
		1.0,
		0.0, // 1
		3.0,
		2.0  // 2
	]);

	dsort2hp( 3, -1.0, x, 2, 0, y, 2, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	]);
	expectedX = new Float64Array([
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	]);
	expectedY = new Float64Array([
		0.0, // 2
		3.0,
		4.0, // 1
		1.0,
		2.0  // 0
	]);

	dsort2hp( 3, 1.0, x, -2, x.length-1, y, -2, y.length-1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	]);
	expectedX = new Float64Array([
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	]);
	expectedY = new Float64Array([
		2.0, // 2
		3.0,
		4.0, // 1
		1.0,
		0.0  // 0
	]);

	dsort2hp( 3, -1.0, x, -2, x.length-1, y, -2, y.length-1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying offsets (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);
	y = new Float64Array([
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	expectedX = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);
	expectedY = new Float64Array([
		0.0,
		5.0, // 0
		2.0,
		3.0, // 1
		4.0,
		1.0  // 2
	]);

	dsort2hp( 3, 1.0, x, 2, 1, y, 2, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying offsets (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);
	y = new Float64Array([
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	expectedX = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);
	expectedY = new Float64Array([
		0.0,
		5.0, // 0
		2.0,
		3.0, // 1
		4.0,
		1.0  // 2
	]);

	dsort2hp( 3, -1.0, x, 2, 1, y, 2, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		-4.0, // 2
		3.0,
		-2.0, // 1
		5.0,
		-6.0  // 0
	]);
	y = new Float64Array([
		0.0, // 0
		1.0, // 1
		2.0, // 2
		3.0,
		4.0,
		5.0
	]);
	expectedX = new Float64Array([
		1.0,
		-2.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 0
	]);
	expectedY = new Float64Array([
		0.0, // 0
		2.0, // 1
		1.0, // 2
		3.0,
		4.0,
		5.0
	]);

	dsort2hp( 3, 1.0, x, -2, x.length-1, y, 1, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		-2.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 0
	]);
	y = new Float64Array([
		0.0, // 0
		1.0, // 1
		2.0, // 2
		3.0,
		4.0,
		5.0
	]);
	expectedX = new Float64Array([
		1.0,
		-6.0, // 2
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 0
	]);
	expectedY = new Float64Array([
		2.0, // 0
		1.0, // 1
		0.0, // 2
		3.0,
		4.0,
		5.0
	]);

	dsort2hp( 3, -1.0, x, -2, x.length-1, y, 1, 0 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});
