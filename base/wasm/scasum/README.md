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

# scasum

> Compute the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.

<section class="usage">

## Usage

```javascript
var scasum = require( '@stdlib/blas/base/wasm/scasum' );
```

#### scasum.main( N, x, strideX )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ] );

var sum = scasum.main( x.length, x, 1 );
// returns 19.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to compute the sum of every other value,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = scasum.main( 2, x, 2 );
// returns 7.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

// Initial array:
var x0 = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, 8.0 ] );

// Create a typed array view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var sum = scasum.main( 2, x1, 2 );
// returns 22.0
```

#### scasum.ndarray( N, x, strideX, offsetX )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = scasum.ndarray( x.length, x, 1, 0 );
// returns 19.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to compute the sum of the last three elements,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = scasum.ndarray( 3, x, 1, x.length-3 );
// returns 16.0
```

* * *

### Module

#### scasum.Module( memory )

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
var mod = new scasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### scasum.Module.prototype.main( N, xp, sx )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new scasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 4;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var sum = mod.main( N, xptr, 1 );
// returns 10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.

#### scasum.Module.prototype.ndarray( N, xp, sx, ox )

Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new scasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 4;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var sum = mod.ndarray( N, xptr, 1, 0 );
// returns 10.0
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `main` and `ndarray` methods return `0.0`.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `scasum` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/scasum`][@stdlib/blas/base/scasum]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/scasum`][@stdlib/blas/base/scasum]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `scasum()` corresponds to the [BLAS][blas] level 1 function [`scasum`][scasum].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scasum = require( '@stdlib/blas/base/wasm/scasum' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex64', rand );
console.log( x.toString() );

var out = scasum.ndarray( x.length, x, 1, 0 );
console.log( out );
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

[scasum]: https://www.netlib.org/lapack/explore-html-3.6.1/df/d28/group__single__blas__level1_gadd7d12f994e4868ca9998b054707d934.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/scasum]: https://github.com/stdlib-js/blas/tree/main/base/scasum

</section>

<!-- /.links -->
