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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var pow = require( '@stdlib/math/base/special/pow' );
var floor = require( '@stdlib/math/base/special/floor' );
var Float32Array = require( '@stdlib/array/float32' );
var scopy = require( '@stdlib/blas/base/scopy' );
var pkg = require( './../package.json' ).name;
var ssorthp = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Create a benchmark function.
*
* @private
* @param {PositiveInteger} iter - number of iterations
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( iter, len ) {
	var randi;
	var tmp;
	var M;
	var x;
	var v;
	var i;
	var j;

	randi = discreteUniform( 1, 10 );
	M = floor( len*0.333 );

	x = [];
	for ( i = 0; i < iter; i++ ) {
		tmp = new Float32Array( len );
		v = randi();
		for ( j = 0; j < len; j++ ) {
			if ( j % M === 0 ) {
				v += randi();
			}
			tmp[ j ] = v;
		}
		x.push( tmp );
	}
	return benchmark;

	function benchmark( b ) {
		var xc;
		var y;
		var i;

		xc = x.slice();
		for ( i = 0; i < iter; i++ ) {
			xc[ i ] = scopy( len, x[ i ], 1, new Float32Array( len ), 1 );
		}
		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			y = ssorthp( len, 1, xc[ i ], 1, 0 );
			if ( isnanf( y[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnanf( y[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

function main() {
	var opts;
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 5; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		opts = {
			'iterations': 1e7 / len
		};
		f = createBenchmark( opts.iterations, len );
		bench( pkg+'::sorted,few_uniques:ndarray:len='+len, opts, f );
	}
}

main();
