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

# zdrot

> Apply a plane rotation.

<section class="usage">

## Usage

```javascript
var zdrot = require( '@stdlib/blas/base/wasm/zdrot' );
```

#### zdrot.main( N, zx, strideX, zy, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.
-   **zy**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `zy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.main( 2, zx, 2, zy, 2, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2,  0.0, 0.0, -3.0, ~-3.6,  0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

// Initial arrays...
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zdrot.main( 2, zx1, -2, zy1, 1, 0.8, 0.6 );
// zx0 => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// zy0 => <Complex128Array>[ 0.0, 0.0,  0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### zdrot.ndarray( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.
-   **offsetY**: starting index for `zy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( 2, zx, 2, 1, zy, 2, 1, 0.8, 0.6 );
// zx => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// zy => <Complex128Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

* * *

### Module

#### zdrot.Module( memory )

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
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### zdrot.Module.prototype.main( N, zxp, sx, zyp, sy, c, s )

Applies a plane rotation.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zdrot = require( '@stdlib/blas/base/wasm/zdrot' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing the input vectors:
var zxptr = 0;
var zyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );
mod.write( zxptr, zx );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );
mod.write( zyptr, zy );

// Perform computation:
mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( zxptr, viewX );
mod.read( zyptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zxp**: first input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sx**: index increment for `zx`.
-   **zyp**: second input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sy**: index increment for `zy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

#### zdrot.Module.prototype.ndarray( N, zxp, sx, ox, zyp, sy, oy, c, s )

Applies a plane rotation using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zdrot = require( '@stdlib/blas/base/wasm/zdrot' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var zxptr = 0;
var zyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );
mod.write( zxptr, zx );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );
mod.write( zyptr, zy );

// Perform computation:
mod.ndarray( N, zxptr, 1, 0, zyptr, 1, 0, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( zxptr, viewX );
mod.read( zyptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `zx`.
-   **oy**: starting index for `zy`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `zx` and `zy` are left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `zdrot` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/zdrot`][@stdlib/blas/base/zdrot]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/zdrot`][@stdlib/blas/base/zdrot]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `zdrot()` corresponds to the [BLAS][blas] level 1 function [`zdrot`][zdrot].

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
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var zdrot = require( '@stdlib/blas/base/wasm/zdrot' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );

// Perform computation:
zdrot.ndarray( N, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );

// Print the results:
console.log( reinterpretComplex128( zx, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( zy, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
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

[zdrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/zdrot]: https://github.com/stdlib-js/blas/tree/main/base/zdrot

</section>

<!-- /.links -->
