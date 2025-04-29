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

# sdsdot

> Compute the dot product of two single-precision floating-point vectors with extended accumulation.

<section class="usage">

## Usage

```javascript
var sdsdot = require( '@stdlib/blas/base/wasm/sdsdot' );
```

#### sdsdot.main( N, scalar, x, strideX, y, strideY )

Computes the dot product of two single-precision floating-point vectors with extended accumulation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = sdsdot.main( x.length, 0.0, x, 1, y, 1 );
// returns -5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **scalar**: scalar constant to add to dot product.
-   **x**: first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to calculate the dot product of every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var z = sdsdot.main( 3, 0.0, x, 2, y, -1 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var z = sdsdot.main( 3, 0.0, x1, -2, y1, 1 );
// returns 128.0
```

#### sdsdot.ndarray( N, scalar, x, strideX, offsetX, y, strideY, offsetY )

Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// returns -5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the dot product of every other value in `x` starting from the second value with the last 3 elements in `y` in reverse order

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var z = sdsdot.ndarray( 3, 0.0, x, 2, 1, y, -1, y.length-1 );
// returns 128.0
```

* * *

### Module

#### sdsdot.Module( memory )

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
var mod = new sdsdot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### sdsdot.Module.prototype.main( N, scalar, xp, sx, yp, sy )

Computes the dot product of two single-precision floating-point vectors with extended accumulation.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new sdsdot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing two vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );

// Perform computation:
var z = mod.main( N, 0.0, xptr, 1, yptr, 1 );

console.log( z );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **scalar**: scalar constant to add to dot product.
-   **xp**: first input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: second input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.

#### sdsdot.Module.prototype.ndarray( N, scalar, xp, sx, ox, yp, sy, oy )

Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new sdsdot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing two vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );

// Perform computation:
var z = mod.ndarray( N, 0.0, xptr, 1, 0, yptr, 1, 0 );

console.log( z );
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `main` and `ndarray` methods return `0.0`.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `sdsdot` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/sdsdot`][@stdlib/blas/base/sdsdot]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/sdsdot`][@stdlib/blas/base/sdsdot]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `sdsdot()` corresponds to the [BLAS][blas] level 1 function [`sdsdot`][sdsdot].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sdsdot = require( '@stdlib/blas/base/wasm/sdsdot' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, -1, y.length-1 );
console.log( z );
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

[sdsdot]: https://www.netlib.org/lapack/explore-html-3.6.1/df/d28/group__single__blas__level1_gaddc89585ced76065053abffb322c5a22.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas/tree/main/base/sdsdot

</section>

<!-- /.links -->
