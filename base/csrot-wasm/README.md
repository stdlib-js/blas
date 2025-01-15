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

# csrot

> Apply a plane rotation.

<section class="usage">

## Usage

```javascript
var csrot = require( '@stdlib/blas/base/csrot-wasm' );
```

#### csrot.main( N, cx, strideX, cy, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-0.6

var im = imagf( z );
// returns ~-1.2

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~0.8

im = imagf( z );
// returns ~1.6
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.
-   **cy**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `cy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.main( 2, cx, 2, cy, 2, 0.8, 0.6 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-0.6

var im = imagf( z );
// returns ~-1.2

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~0.8

im = imagf( z );
// returns ~1.6
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Initial arrays...
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

csrot.main( 2, cx1, -2, cy1, 1, 0.8, 0.6 );

var z = cy0.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns ~-4.2

var im = imagf( z );
// returns ~-4.8

z = cx0.get( 3 );
// returns <Complex64>

re = realf( z );
// returns ~5.6

im = imagf( z );
// returns ~6.4
```

#### csrot.ndarray( N, cx, strideX, offsetX, cy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-0.6

var im = imagf( z );
// returns ~-1.2

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~0.8

im = imagf( z );
// returns ~1.6
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.
-   **offsetY**: starting index for `cy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( 2, cx, 2, 1, cy, 2, 1, 0.8, 0.6 );

var z = cy.get( 3 );
// returns <Complex64>

var re = realf( z );
// returns ~-4.2

var im = imagf( z );
// returns ~-4.8

z = cx.get( 1 );
// returns <Complex64>

re = realf( z );
// returns ~2.4

im = imagf( z );
// returns ~3.2
```

* * *

### Module

#### csrot.Module( memory )

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
var mod = new csrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### csrot.Module.prototype.main( N, cxp, sx, cyp, sy, c, s )

Applies a plane rotation.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var csrot = require( '@stdlib/blas/base/csrot-wasm' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new csrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing the input vectors:
var cxptr = 0;
var cyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var cx = new Complex64Array( xbuf.buffer );
mod.write( cxptr, cx );

var ybuf = ones( N*2, 'float32' );
var cy = new Complex64Array( ybuf.buffer );
mod.write( cyptr, cy );

// Perform computation:
mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( cxptr, viewX );
mod.read( cyptr, viewY );

console.log( reinterpretComplex64( viewX, 0 ) );
// => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex64( viewY, 0 ) );
// => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cxp**: first input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `cx`.
-   **cyp**: second input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sy**: index increment for `cy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

#### csrot.Module.prototype.ndarray( N, cxp, sx, ox, cyp, sy, oy, c, s )

Applies a plane rotation using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var csrot = require( '@stdlib/blas/base/csrot-wasm' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new csrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var cxptr = 0;
var cyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var cx = new Complex64Array( xbuf.buffer );
mod.write( cxptr, cx );

var ybuf = ones( N*2, 'float32' );
var cy = new Complex64Array( ybuf.buffer );
mod.write( cyptr, cy );

// Perform computation:
mod.ndarray( N, cxptr, 1, 0, cyptr, 1, 0, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( cxptr, viewX );
mod.read( cyptr, viewY );

console.log( reinterpretComplex64( viewX, 0 ) );
// => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex64( viewY, 0 ) );
// => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `cx`.
-   **oy**: starting index for `cy`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `cx` and `cy` are left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `csrot` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/csrot`][@stdlib/blas/base/csrot]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/csrot`][@stdlib/blas/base/csrot]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `csrot()` corresponds to the [BLAS][blas] level 1 function [`csrot`][csrot].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var csrot = require( '@stdlib/blas/base/csrot-wasm' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float32' );
var cx = new Complex64Array( xbuf.buffer );

var ybuf = ones( N*2, 'float32' );
var cy = new Complex64Array( ybuf.buffer );

// Perform computation:
csrot.ndarray( N, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );

// Print the results:
console.log( reinterpretComplex64( cx, 0 ) );
// => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex64( cy, 0 ) );
// => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
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

[csrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/csrot]: https://github.com/stdlib-js/blas/tree/main/base/csrot

</section>

<!-- /.links -->
