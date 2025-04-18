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

# srotm

> Apply a modified Givens plane rotation.

<section class="usage">

## Usage

```javascript
var srotm = require( '@stdlib/blas/base/wasm/srotm' );
```

#### srotm.main( N, x, strideX, y, strideY, param )

Applies a modified Givens plane rotation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.main( 2, x, 2, y, 1, param );
// x => <Float32Array>[ ~-17.0, 2.0, ~-18.0, 4.0, 5.0 ]
// y => <Float32Array>[ ~8.0, ~13.0, 8.0, 9.0, 10.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.
-   **param**: parameters for the modified Givens transformation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a modified Givens plane rotation to every other element,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.main( 3, x, 2, y, 2, param );
// x => <Float32Array>[ ~-20.0, 2.0, ~-24.0, 4.0, ~-28.0, 6.0 ]
// y => <Float32Array>[ ~9.0, 8.0, ~15.0, 10.0, ~21.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y0 = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 1.0, 0.0, 2.0, 3.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

srotm.main( 2, x1, 1, y1, 1, param );
// x0 => <Float32Array>[ 1.0, ~9.0, ~10.0, 4.0, 5.0 ]
// y0 => <Float32Array>[ 6.0, 7.0, 8.0, ~-2.0, ~-3.0 ]
```

#### srotm.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, param )

Applies a modified Givens plane rotation using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.ndarray( 2, x, 1, 0, y, 2, 1, param );
// x => <Float32Array>[ ~-20.0, ~-25.0, 3.0, 4.0, 5.0 ]
// y => <Float32Array>[ 6.0, ~9.0, 8.0, ~13.0, 10.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a modified Givens plane rotation to every other element starting from the second element,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.ndarray( 3, x, 2, 1, y, 2, 1, param );
// x => <Float32Array>[ 1.0, ~-22.0, 3.0, ~-26.0, 5.0, ~-30.0 ]
// y => <Float32Array>[ 7.0, ~12.0, 9.0, ~18.0, 11.0, ~24.0 ]
```

* * *

### Module

#### srotm.Module( memory )

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
var mod = new srotm.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### srotm.Module.prototype.main( N, xp, sx, yp, sy, pp )

Applies a modified Givens plane rotation.

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
var mod = new srotm.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing three vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );
var pptr = 2 * N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );
mod.write( pptr, ones( 5, dtype ) );

// Perform computation:
mod.main( N, xptr, 1, yptr, 1, pptr );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( viewX );
// => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]

console.log( viewY );
// => <Float32Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.
-   **yp**: input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sy**: index increment for `y`.
-   **pp**: parameter [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).

#### srotm.Module.prototype.ndarray( N, xp, sx, ox, yp, sy, oy, pp )

Applies a modified Givens plane rotation using alternative indexing semantics.

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
var mod = new srotm.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing three vectors:
var xptr = 0;
var yptr = N * bytesPerElement( dtype );
var pptr = 2 * N * bytesPerElement( dtype );

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );
mod.write( yptr, ones( N, dtype ) );
mod.write( pptr, ones( 5, dtype ) );

// Perform computation:
mod.ndarray( N, xptr, 1, 0, yptr, 1, 0, pptr );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( xptr, viewX );
mod.read( yptr, viewY );

console.log( viewX );
// => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]

console.log( viewY );
// => <Float32Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `x` and `y` are left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `srotm` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/srotm`][@stdlib/blas/base/srotm]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/srotm`][@stdlib/blas/base/srotm]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `srotm()` corresponds to the [BLAS][blas] level 1 function [`srotm`][srotm].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var srotm = require( '@stdlib/blas/base/wasm/srotm' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

var param = new Float32Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

srotm.ndarray( x.length, x, 1, 0, y, -1, y.length-1, param );
console.log( y );
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

[srotm]: https://netlib.org/lapack/explore-html//dc/d23/group__rotm_ga9b95e7fbcee2aab54d571e3986484808.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/srotm]: https://github.com/stdlib-js/blas/tree/main/base/srotm

</section>

<!-- /.links -->
