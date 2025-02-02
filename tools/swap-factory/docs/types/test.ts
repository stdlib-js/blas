/*
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

/* eslint-disable @typescript-eslint/unbound-method */

import dswap = require( './../../../../base/dswap' );
import zeros = require( '@stdlib/ndarray/zeros' );
import factory = require( './index' );


// TESTS //

// The function returns a function...
{
	factory( dswap.ndarray, 'float64' ); // $ExpectType SwapFunction
}

// The compiler throws an error if the function is provided a first argument which is not a valid function...
{
	factory( 10, 'float64' ); // $ExpectError
	factory( '10', 'float64' ); // $ExpectError
	factory( true, 'float64' ); // $ExpectError
	factory( false, 'float64' ); // $ExpectError
	factory( null, 'float64' ); // $ExpectError
	factory( undefined, 'float64' ); // $ExpectError
	factory( {}, 'float64' ); // $ExpectError
	factory( [], 'float64' ); // $ExpectError
	factory( ( x: number ): number => x, 'float64' ); // $ExpectError
}

// The function returns a function which returns an ndarray...
{
	const swap = factory( dswap.ndarray, 'float64' );

	swap( zeros( [ 10 ], { 'dtype': 'float64' } ), zeros( [ 10 ], { 'dtype': 'float64' } ) ); // $ExpectType ndarray
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray...
{
	const swap = factory( dswap.ndarray, 'float64' );

	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	swap( 10, y ); // $ExpectError
	swap( '10', y ); // $ExpectError
	swap( true, y ); // $ExpectError
	swap( false, y ); // $ExpectError
	swap( null, y ); // $ExpectError
	swap( undefined, y ); // $ExpectError
	swap( {}, y ); // $ExpectError
	swap( [], y ); // $ExpectError
	swap( ( x: number ): number => x, y ); // $ExpectError

	swap( 10, y, -1 ); // $ExpectError
	swap( '10', y, -1 ); // $ExpectError
	swap( true, y, -1 ); // $ExpectError
	swap( false, y, -1 ); // $ExpectError
	swap( null, y, -1 ); // $ExpectError
	swap( undefined, y, -1 ); // $ExpectError
	swap( {}, y, -1 ); // $ExpectError
	swap( [], y, -1 ); // $ExpectError
	swap( ( x: number ): number => x, y, -1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray...
{
	const swap = factory( dswap.ndarray, 'float64' );

	const x = zeros( [ 10 ], { 'dtype': 'float64' } );

	swap( x, 10 ); // $ExpectError
	swap( x, '10' ); // $ExpectError
	swap( x, true ); // $ExpectError
	swap( x, false ); // $ExpectError
	swap( x, null ); // $ExpectError
	swap( x, undefined ); // $ExpectError
	swap( x, {} ); // $ExpectError
	swap( x, [] ); // $ExpectError
	swap( x, ( x: number ): number => x ); // $ExpectError

	swap( x, 10, -1 ); // $ExpectError
	swap( x, '10', -1 ); // $ExpectError
	swap( x, true, -1 ); // $ExpectError
	swap( x, false, -1 ); // $ExpectError
	swap( x, null, -1 ); // $ExpectError
	swap( x, undefined, -1 ); // $ExpectError
	swap( x, {}, -1 ); // $ExpectError
	swap( x, [], -1 ); // $ExpectError
	swap( x, ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not a number...
{
	const swap = factory( dswap.ndarray, 'float64' );

	const x = zeros( [ 10 ], { 'dtype': 'float64' } );
	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	swap( x, y, '10' ); // $ExpectError
	swap( x, y, true ); // $ExpectError
	swap( x, y, false ); // $ExpectError
	swap( x, y, null ); // $ExpectError
	swap( x, y, {} ); // $ExpectError
	swap( x, y, [] ); // $ExpectError
	swap( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const swap = factory( dswap.ndarray, 'float64' );

	const x = zeros( [ 10 ], { 'dtype': 'float64' } );
	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	swap(); // $ExpectError
	swap( x ); // $ExpectError
	swap( x, y, -1, {} ); // $ExpectError
}
