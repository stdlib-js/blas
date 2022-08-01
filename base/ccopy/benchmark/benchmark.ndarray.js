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

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random/base/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Float32Array = require( '@stdlib/array/float32' );
var pkg = require( './../package.json' ).name;
var ccopy = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var viewY;
	var x;
	var y;
	var i;

	x = new Complex64Array( len );
	y = new Complex64Array( len );
	for ( i = 0; i < len; i++ ) {
		x.set( [ (randu()*10000.0)-5000.0, (randu()*10000.0)-5000.0 ], i );
	}
	viewY = new Float32Array( y.buffer, y.byteOffset, y.length*2 );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		for ( i = 0; i < len; i++ ) {
			y.set( [ 0.0, 0.0 ], i );
		}
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			ccopy( x.length, x, 1, 0, y, 1, 0 );
			if ( isnan( viewY[ i%(len*2) ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( viewY[ i%(len*2) ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+':ndarray:len='+len, f );
	}
}

main();
