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

# scnrm2

> Calculate the L2-norm of a complex single-precision floating-point vector.

<section class="usage">

## Usage

```javascript
var scnrm2 = require( '@stdlib/blas/base/wasm/scnrm2' );
```

#### scnrm2.main( N, x, strideX )

Calculates the L2-norm of a complex single-precision floating-point vector.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

var z = scnrm2.main( 3, x, 1 );
// returns ~9.54
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to compute the L2-norm of every other element in `x`,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var z = scnrm2.main( 2, x, 2 );
// returns ~4.24
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

// Initial array:
var x0 = new Complex64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, -2.0, 2.0, 3.0 ] );

// Create a typed array view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var z = scnrm2.main( 2, x1, 2 );
// returns ~4.58
```

#### scnrm2.ndarray( N, x, strideX, offsetX )

Calculates the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

var z = scnrm2.ndarray( 3, x, 1, 0 );
// returns ~9.54
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the L2-norm for every other value in `x` starting from the second value,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 2.0, 1.0, 2.0, 2.0, -2.0, -2.0, 2.0, 3.0 ] );

var z = scnrm2.ndarray( 2, x, 2, 1 );
// returns ~4.58
```

* * *

### Module

#### scnrm2.Module( memory )

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
var mod = new scnrm2.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### scnrm2.Module.prototype.main( N, xp, sx )

Computes the L2-norm of a complex single-precision floating-point vector.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var Complex64Array = require( '@stdlib/array/complex64' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new scnrm2.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Perform computation:
var out = mod.main( N, xptr, 1 );
// returns ~19.62
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.

#### scnrm2.Module.prototype.ndarray( N, xp, sx, ox )

Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var Complex64Array = require( '@stdlib/array/complex64' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new scnrm2.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Perform computation:
var out = mod.ndarray( N, xptr, 1, 0 );
// returns ~19.62
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `main` and `ndarray` methods return `0.0`.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `scnrm2` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/scnrm2`][@stdlib/blas/base/scnrm2]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/scnrm2`][@stdlib/blas/base/scnrm2]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `scnrm2()` corresponds to the [BLAS][blas] level 1 function [`scnrm2`][scnrm2].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var oneTo = require( '@stdlib/array/one-to' );
var Complex64Array = require( '@stdlib/array/complex64' );
var scnrm2 = require( '@stdlib/blas/base/wasm/scnrm2' );

function main() {
    var xbuf;
    var out;
    var x;
    var N;

    // Specify a vector length:
    N = 5;

    // Create an input array:
    xbuf = oneTo( N*2, 'float32' );
    x = new Complex64Array( xbuf.buffer );

    // Perform computation:
    out = scnrm2.ndarray( N, x, 1, 0 );

    // Print the result:
    console.log( out );
}
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

[scnrm2]: https://www.netlib.org/lapack/explore-html/d1/d2a/group__nrm2_gab5393665c8f0e7d5de9bd1dd2ff0d9d0.html#gab5393665c8f0e7d5de9bd1dd2ff0d9d0

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/scnrm2]: https://github.com/stdlib-js/blas/tree/main/base/scnrm2

</section>

<!-- /.links -->
