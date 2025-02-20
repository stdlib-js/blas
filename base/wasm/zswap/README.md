<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# zswap

> Interchange two complex double-precision floating-point vectors.

<section class="usage">

## Usage

```javascript
var zswap = require( '@stdlib/blas/base/wasm/zswap' );
```

#### zswap.main( N, x, strideX, y, strideY )

Interchanges two complex double-precision floating-point vectors.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.main( x.length, x, 1, y, 1 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0

z = x.get( 0 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are interchanged with values from `y`. For example, to interchange every other value in `x` with the first `N` elements of `y` in reverse order,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.main( 2, x, -2, y, 1 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 5.0

var im = imag( z );
// returns 6.0

z = x.get( 0 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Interchange every other value from `x1` into `y1` in reverse order...
zswap.main( 2, x1, -2, y1, 1 );

var z = y0.get( 2 );
// returns <Complex128>

var re = real( z );
// returns 7.0

var im = imag( z );
// returns 8.0

z = x0.get( 1 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

#### zswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );

var z = y.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 1.0

var im = imag( z );
// returns 2.0

z = x.get( 0 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to interchange every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.ndarray( 2, x, 2, 1, y, -1, y.length-1 );

var z = y.get( y.length-1 );
// returns <Complex128>

var re = real( z );
// returns 3.0

var im = imag( z );
// returns 4.0

z = x.get( x.length-1 );
// returns <Complex128>

re = real( z );
// returns 0.0

im = imag( z );
// returns 0.0
```

* * *

### Module

#### zswap.Module( memory )

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
var mod = new zswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### zswap.Module.prototype.main( N, xp, sx, yp, sy )

Interchanges two complex double-precision floating-point vectors.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zswap = require( '@stdlib/blas/base/wasm/zswap' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );
mod.write( xptr, x );

var ybuf = zeros( N*2, 'float64' );
var y = new Complex128Array( ybuf.buffer );
mod.write( yptr, y );

// Perform computation:
mod.main( N, xptr, 1, yptr, 1 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: first input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: second input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.

#### zswap.Module.prototype.ndarray( N, xp, sx, ox, yp, sy, oy )

Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zswap = require( '@stdlib/blas/base/wasm/zswap' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );
mod.write( xptr, x );

var ybuf = zeros( N*2, 'float64' );
var y = new Complex128Array( ybuf.buffer );
mod.write( yptr, y );

// Perform computation:
mod.ndarray( N, xptr, 1, 0, yptr, 1, 0 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `zswap` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/zswap`][@stdlib/blas/base/zswap]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/zswap`][@stdlib/blas/base/zswap]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `zswap()` corresponds to the [BLAS][blas] level 1 function [`zswap`][zswap].

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
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zswap = require( '@stdlib/blas/base/wasm/zswap' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float64' );
var x = new Complex128Array( xbuf.buffer );

var ybuf = zeros( N*2, 'float64' );
var y = new Complex128Array( ybuf.buffer );

// Perform computation:
zswap.ndarray( N, x, 1, 0, y, -1, N-1 );

// Print the results:
console.log( reinterpretComplex128( x, 0 ) );
// => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

console.log( reinterpretComplex128( y, 0 ) );
// => <Float64Array>[ 9.0, 10.0, 7.0, 8.0, 5.0, 6.0, 3.0, 4.0, 1.0, 2.0 ]
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

[zswap]: https://www.netlib.org/lapack/explore-html/d7/d51/group__swap_ga8e324819e4cd92b6fde3ae40c83a5cb3.html#ga8e324819e4cd92b6fde3ae40c83a5cb3

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/zswap]: https://github.com/stdlib-js/blas/tree/main/base/zswap

</section>

<!-- /.links -->
