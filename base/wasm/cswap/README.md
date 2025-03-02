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

# cswap

> Interchange two complex single-precision floating-point vectors.

<section class="usage">

## Usage

```javascript
var cswap = require( '@stdlib/blas/base/wasm/cswap' );
```

#### cswap.main( N, x, strideX, y, strideY )

Interchanges two complex single-precision floating-point vectors.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cswap.main( x.length, x, 1, y, 1 );

var z = y.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 2.0

z = x.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are interchanged with values from `y`. For example, to interchange every other value in `x` with the first `N` elements of `y` in reverse order,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cswap.main( 2, x, -2, y, 1 );

var z = y.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 5.0

var im = imagf( z );
// returns 6.0

z = x.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
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

// Interchange every other value from `x1` into `y1` in reverse order...
cswap.main( 2, x1, -2, y1, 1 );

var z = y0.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 8.0

z = x0.get( 1 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
```

#### cswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges two complex single-precision floating-point vectors using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cswap.ndarray( x.length, x, 1, 0, y, 1, 0 );

var z = y.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns 1.0

var im = imagf( z );
// returns 2.0

z = x.get( 0 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to interchange every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

cswap.ndarray( 2, x, 2, 1, y, -1, y.length-1 );

var z = y.get( y.length-1 );
// returns <Complex64>

var re = realf( z );
// returns 3.0

var im = imagf( z );
// returns 4.0

z = x.get( x.length-1 );
// returns <Complex64>

re = realf( z );
// returns 0.0

im = imagf( z );
// returns 0.0
```

* * *

### Module

#### cswap.Module( memory )

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
var mod = new cswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### cswap.Module.prototype.main( N, xp, sx, yp, sy )

Interchanges two complex single-precision floating-point vectors.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cswap = require( '@stdlib/blas/base/wasm/cswap' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var xptr = 0;
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
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( reinterpretComplex64( viewX, 0 ) );
// => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

console.log( reinterpretComplex64( viewY, 0 ) );
// => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: first input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: second input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.

#### cswap.Module.prototype.ndarray( N, xp, sx, ox, yp, sy, oy )

Interchanges two complex single-precision floating-point vectors using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cswap = require( '@stdlib/blas/base/wasm/cswap' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cswap.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var xptr = 0;
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
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( reinterpretComplex64( viewX, 0 ) );
// => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

console.log( reinterpretComplex64( viewY, 0 ) );
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

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `cswap` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/cswap`][@stdlib/blas/base/cswap]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/cswap`][@stdlib/blas/base/cswap]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `cswap()` corresponds to the [BLAS][blas] level 1 function [`cswap`][cswap].

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
var cswap = require( '@stdlib/blas/base/wasm/cswap' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );

var ybuf = zeros( N*2, 'float32' );
var y = new Complex64Array( ybuf.buffer );

// Perform computation:
cswap.ndarray( N, x, 1, 0, y, -1, N-1 );

// Print the results:
console.log( reinterpretComplex64( x, 0 ) );
// => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]

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

[cswap]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas/tree/main/base/cswap

</section>

<!-- /.links -->
