/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';
import { Complex128Array } from '@stdlib/types/array';

/**
* Interface defining a module constructor which is both "newable" and "callable".
*/
interface ModuleConstructor {
	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zcopy.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( yptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( yptr, view );
	*
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
	*/
	new( mem: Memory ): Module; // newable

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = zcopy.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( yptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( yptr, view );
	*
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `zcopy` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param yptr - output array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @returns output array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zcopy.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( yptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( yptr, view );
	*
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
	*/
	main( N: number, xptr: number, strideX: number, yptr: number, strideY: number ): number;

	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param yptr - output array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns output array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zcopy.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( yptr, y );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, xptr, 1, 0, yptr, 1, 0 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( yptr, view );
	*
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number, yptr: number, strideY: number, offsetY: number ): number;
}

/**
* Interface describing `zcopy`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - output array
	* @param strideY - `y` stride length
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* zcopy.main( x.length, x, 1, y, 1 );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns -1.0
	*
	* var im = imag( v );
	* // returns -2.0
	*/
	main( N: number, x: Complex128Array, strideX: number, y: Complex128Array, strideY: number ): Complex128Array;

	/**
	* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - output array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns output array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var x = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* zcopy.ndarray( x.length, x, -1, 2, y, 1, 0 );
	*
	* var v = y.get( 0 );
	* // returns <Complex64>
	*
	* var re = real( v );
	* // returns -5.0
	*
	* var im = imag( v );
	* // returns -6.0
	*/
	ndarray( N: number, x: Complex128Array, strideX: number, offsetX: number, y: Complex128Array, strideY: number, offsetY: number ): Complex128Array;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zcopy.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( yptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( yptr, view );
	*
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Copies values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - output array
* @param strideY - `y` stride length
* @returns output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Perform operation:
* zcopy.main( x.length, x, -1, y, 1 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 5.0
*
* var im = imag( v );
* // returns 6.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
*
* // Perform operation:
* zcopy.ndarray( x.length, x, 1, 0, y, -1, 2 );
*
* var v = y.get( 2 );
* // returns <Complex64>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*/
declare var zcopy: Routine;


// EXPORTS //

export = zcopy;
