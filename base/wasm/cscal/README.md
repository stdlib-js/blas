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

# cscal

> Scale a single-precision complex floating-point vector by a single-precision complex floating-point constant.

<section class="usage">

## Usage

```javascript
var cscal = require( '@stdlib/blas/base/wasm/cscal' );
```

#### cscal.main( N, ca, cx, strideX )

Scales values from `cx` by `ca`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Perform operation:
cscal.main( cx.length, ca, cx, 1 );
// cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **ca**: scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **cx**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to scale every other value in `cx` by `ca`,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Perform operation:
cscal.main( 2, ca, cx, 2 );
// cx => <Complex64Array>[ -2.0, 6.0, 3.0, 4.0, -2.0, 22.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Initial array:
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Create an offset view:
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `cx1` by `ca`...
cscal.main( 3, ca, cx1, 1 );
// cx0 => <Complex64Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### cscal.ndarray( N, ca, cx, strideX, offsetX )

Scales values from `cx` by `ca` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Define a strided array:
var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Perform operation:
cscal.ndarray( cx.length, ca, cx, 1, 0 );
// cx => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var ca = new Complex64( 2.0, 2.0 );

cscal.ndarray( 2, ca, cx, 2, 1 );
// cx => <Complex64Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

* * *

### Module

#### cscal.Module( memory )

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
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### cscal.Module.prototype.main( N, cap, cxp, sx )

Scales values from `cx` by `ca`.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cscal = require( '@stdlib/blas/base/wasm/cscal' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.main( N, zptr, xptr, 1 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cap**: pointer (i.e., byte offset) to a scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **cxp**: input [`Complex64Array`][@stdlib/array/complex64] pointer (i.e., byte offset).
-   **sx**: index increment for `cx`.

#### cscal.Module.prototype.ndarray( N, cap, cxp, sx, ox )

Scales values from `cx` by `ca`  using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var ones = require( '@stdlib/array/ones' );
var zeros = require( '@stdlib/array/zeros' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cscal = require( '@stdlib/blas/base/wasm/cscal' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new cscal.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex64';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Define a pointer for storing a complex number:
var zptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );
mod.write( xptr, x );

// Write a complex number to module memory:
mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );

// Perform computation:
mod.ndarray( N, zptr, xptr, 1, 0 );

// Read out the results:
var view = zeros( N, dtype );
mod.read( xptr, view );

console.log( reinterpretComplex64( view, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `cx` is left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `cscal` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/cscal`][@stdlib/blas/base/cscal]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/cscal`][@stdlib/blas/base/cscal]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `cscal()` corresponds to the [BLAS][blas] level 1 function [`cscal`][cscal].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var oneTo = require( '@stdlib/array/one-to' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Complex64Array = require( '@stdlib/array/complex64' );
var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
var cscal = require( '@stdlib/blas/base/wasm/cscal' );

// Specify a vector length:
var N = 5;

// Create an input array:
var xbuf = oneTo( N*2, 'float32' );
var x = new Complex64Array( xbuf.buffer );

// Create a complex number:
var z = new Complex64( 2.0, 2.0 );

// Perform computation:
cscal.ndarray( N, z, x, 1, 0 );

// Print the results:
console.log( reinterpretComplex64( x, 0 ) );
// => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
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

[cscal]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/cscal]: https://github.com/stdlib-js/blas/tree/main/base/cscal

</section>

<!-- /.links -->
