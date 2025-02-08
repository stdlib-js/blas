<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ccopy

> Copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.

<section class="usage">

## Usage

```javascript
var ccopy = require( '@stdlib/blas/base/wasm/ccopy' );
```

#### ccopy.main( N, x, strideX, y, strideY )

Copies values from `x` into `y`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Define strided arrays...
var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Perform operation:
ccopy.main( x.length, x, 1, y, 1 );

var v = y.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns 1.0

var im = imagf( v );
// returns 2.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are copied into `y`. For example, to copy every other value in `x` into the first `N` elements of `y` in reverse order,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ccopy.main( 2, x, -2, y, 1 );

var v = y.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns 5.0

var im = imagf( v );
// returns 6.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Initial arrays...
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Copy every other value from `x1` into `y1` in reverse order...
ccopy.main( 2, x1, -2, y1, 1 );

var z = y0.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 8.0
```

#### ccopy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Copies values from `x` into `y` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );

var v = y.get( 0 );
// returns <Complex64>

var re = realf( v );
// returns 1.0

var im = imagf( v );
// returns 2.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to copy every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ccopy.ndarray( 2, x, 2, 1, y, -1, y.length-1 );

var z = y.get( y.length-1 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0
```

* * *

### Module

#### ccopy.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new ccopy.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### ccopy.Module.prototype.main( N, xp, sx, yp, sy )

Copies values from `x` into `y` .

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var ccopy = require( '@stdlib/blas/base/wasm/ccopy' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new ccopy.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer (i.e., byte offset) for storing the output vector:
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

var ybuf = zeros( N*2, 'float32' );
var y = new Complex64Array( ybuf.buffer );
mod.write( yptr, y );

// Perform computation:
mod.main( N, xptr, 1, yptr, 1 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( yptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: output [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.

#### ccopy.Module.prototype.ndarray( N, xp, sx, ox, yp, sy, oy )

Copies values from `x` into `y`  using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var ccopy = require( '@stdlib/blas/base/wasm/ccopy' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new ccopy.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer (i.e., byte offset) for storing the output vector:
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

var ybuf = zeros( N*2, 'float32' );
var y = new Complex64Array( ybuf.buffer );
mod.write( yptr, y );

// Perform computation:
mod.ndarray( N, xptr, 1, 0, yptr, 1, 0 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( yptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `ccopy` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/ccopy`][@stdlib/blas/base/ccopy]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/ccopy`][@stdlib/blas/base/ccopy]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `ccopy()` corresponds to the [BLAS][blas] level 1 function [`ccopy`][ccopy].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var ccopy = require( '@stdlib/blas/base/wasm/ccopy' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );

var ybuf = zeros( N*2, 'float32' );
var y = new Complex64Array( ybuf.buffer );

// Perform computation:
ccopy.ndarray( N, x, 1, 0, y, -1, N-1 );

// Print the results:
console.log( reinterpretComplex64( y, 0 ) );
// => <Float32Array>[ 9.0, 10.0, 7.0, 8.0, 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[ccopy]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas/tree/main/base/ccopy

</section>

<!-- /.links -->
