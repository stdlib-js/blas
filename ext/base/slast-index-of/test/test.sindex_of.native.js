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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var slastIndexOf = tryRequire( resolve( __dirname, './../lib/slast_index_of.native.js' ) );
var opts = {
	'skip': ( slastIndexOf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slastIndexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element', opts, function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = slastIndexOf( x.length, 1.0, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = slastIndexOf( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = slastIndexOf( x.length, 3.0, x, 1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = slastIndexOf( x.length, 4.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = slastIndexOf( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = slastIndexOf( x.length, 2.0, x, -1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = slastIndexOf( x.length, 3.0, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = slastIndexOf( x.length, 4.0, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided `N` parameter is less than or equal to zero', opts, function test( t ) {
	var actual;

	actual = slastIndexOf( 0, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = slastIndexOf( -1, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', opts, function test( t ) {
	var actual;

	actual = slastIndexOf( 1, NaN, new Float32Array( [ NaN ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
