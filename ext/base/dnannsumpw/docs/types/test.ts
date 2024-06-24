/*
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

import dnannsumpw = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw( x.length, x, 1, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw( '10', x, 1, out, 1 ); // $ExpectError
	dnannsumpw( true, x, 1, out, 1 ); // $ExpectError
	dnannsumpw( false, x, 1, out, 1 ); // $ExpectError
	dnannsumpw( null, x, 1, out, 1 ); // $ExpectError
	dnannsumpw( undefined, x, 1, out, 1 ); // $ExpectError
	dnannsumpw( [], x, 1, out, 1 ); // $ExpectError
	dnannsumpw( {}, x, 1, out, 1 ); // $ExpectError
	dnannsumpw( ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw( x.length, 10, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, '10', 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, true, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, false, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, null, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, undefined, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, [ '1' ], 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, {}, 1, out, 1 ); // $ExpectError
	dnannsumpw( x.length, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw( x.length, x, '10', out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, true, out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, false, out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, null, out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, undefined, out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, [], out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, {}, out, 1 ); // $ExpectError
	dnannsumpw( x.length, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnannsumpw( x.length, x, 1, 10, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, '10', 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, true, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, false, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, null, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, undefined, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, [ '1' ], 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, {}, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw( x.length, x, 1, out, '10' ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, true ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, false ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, null ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, undefined ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, [] ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, {} ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw(); // $ExpectError
	dnannsumpw( x.length ); // $ExpectError
	dnannsumpw( x.length, x ); // $ExpectError
	dnannsumpw( x.length, x, 1 ); // $ExpectError
	dnannsumpw( x.length, x, 1, out ); // $ExpectError
	dnannsumpw( x.length, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( true, x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( false, x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( null, x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( [], x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, 10, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, true, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, false, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, null, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, [ '1' ], 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, x, '10', 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, true, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, false, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, null, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, undefined, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, [], 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, {}, 0, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, x, 1, '10', out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, true, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, false, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, null, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, undefined, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, [], out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, {}, out, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnannsumpw.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, x, 1, 0, out, '10', 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, true, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, false, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, null, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, undefined, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, [], 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, {}, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, '10' ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, true ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, false ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, null ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, undefined ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, [] ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, {} ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 2 );

	dnannsumpw.ndarray(); // $ExpectError
	dnannsumpw.ndarray( x.length ); // $ExpectError
	dnannsumpw.ndarray( x.length, x ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1 ); // $ExpectError
	dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}