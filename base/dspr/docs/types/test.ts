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

import dspr = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 'row-major', 'upper', 10, 1.0, x, 1, A ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 10, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( true, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( false, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( null, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( void 0, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( [], 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( {}, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
	dspr( ( x: number ): number => x, 'upper', 10, 1.0, x, 1, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 'row-major', 10, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', true, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', false, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', null, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', void 0, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', [ '1' ], 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', {}, 10, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', ( x: number ): number => x, 10, 1.0, x, 1, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 'row-major', 'upper', '10', 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', true, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', false, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', null, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', void 0, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', [], 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', {}, 1.0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', ( x: number ): number => x, 1.0, x, 1, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 'row-major', 'upper', 10, '10', x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, true, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, false, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, null, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, void 0, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, [], x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, {}, x, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, ( x: number ): number => x, x, 1, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const A = new Float64Array( 55 );

	dspr( 'row-major', 'upper', 10, 1.0, 10, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, '10', 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, true, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, false, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, null, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, void 0, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, [ '1' ], 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, {}, 1, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 1, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr( 'row-major', 'upper', 10, 1.0, x, '10', A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, true, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, false, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, null, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, void 0, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, [], A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, {}, A ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, ( x: number ): number => x, A ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dspr( 'row-major', 'upper', 10, 1.0, x, 1, 10 ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, '10' ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, true ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, false ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, null ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, void 0 ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, [ '1' ] ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, {} ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr(); // $ExpectError
	dspr( 'row-major' ); // $ExpectError
	dspr( 'row-major', 'upper' ); // $ExpectError
	dspr( 'row-major', 'upper', 10 ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1 ); // $ExpectError
	dspr( 'row-major', 'upper', 10, 1.0, x, 1, A, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 10, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( true, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( false, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( null, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( void 0, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( [], 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( {}, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( ( x: number ): number => x, 'upper', 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 10, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', true, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', false, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', null, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', void 0, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', [ '1' ], 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', {}, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', ( x: number ): number => x, 10, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', '10', 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', true, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', false, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', null, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', void 0, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', [], 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', {}, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', ( x: number ): number => x, 1.0, x, 1, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, '10', x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, true, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, false, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, null, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, void 0, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, [], x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, {}, x, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, ( x: number ): number => x, x, 1, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, 10, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, '10', 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, true, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, false, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, null, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, void 0, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, [ '1' ], 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, {}, 1, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, ( x: number ): number => x, 1, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, '10', 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, true, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, false, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, null, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, void 0, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, [], 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, {}, 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, ( x: number ): number => x, 0, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, '10', A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, true, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, false, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, null, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, void 0, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, [], A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, {}, A, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, ( x: number ): number => x, A, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, void 0, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, '10', 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, true, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, false, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, null, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, void 0, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, [], 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, {}, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, '10' ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, true ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, false ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, null ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, void 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, [] ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, {} ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const A = new Float64Array( 55 );

	dspr.ndarray(); // $ExpectError
	dspr.ndarray( 'row-major' ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper' ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1 ); // $ExpectError
	dspr.ndarray( 'row-major', 'upper', 10, 1.0, x, 1, 0, A, 1, 0, 10 ); // $ExpectError
}
