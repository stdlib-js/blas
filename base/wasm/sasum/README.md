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

# sasum

> Compute the sum of absolute values.

<section class="usage">

## Usage

```javascript
var sasum = require( '@stdlib/blas/base/wasm/sasum' );
```

#### sasum.main( N, x, strideX )

Computes the sum of absolute values.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

var sum = sasum.main( x.length, x, 1 );
// returns 15.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the input strided array are accessed at runtime. For example, to compute the sum of every other value,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = sasum.main( 4, x, 2 );
// returns 10.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create a typed array view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var sum = sasum.main( 3, x1, 2 );
// returns 12.0
```

#### sasum.ndarray( N, x, strideX, offsetX )

Computes the sum of absolute values using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = sasum.ndarray( x.length, x, 1, 0 );
// returns 19.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to compute the sum of last three elements,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var sum = sasum.ndarray( 3, x, 1, x.length-3 );
// returns 15.0

// Using a negative stride to sum from the last element:
sum = sasum.ndarray( 3, x, -1, x.length-1 );
// returns 15.0
```

* * *

### Module

#### sasum.Module( memory )

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
var mod = new sasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### sasum.Module.prototype.main( N, xp, sx )

Computes the sum of absolute values.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new sasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var sum = mod.main( N, xptr, 1 );
// returns 15.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **xp**: input [`Float32Array`][@stdlib/array/float32] pointer (i.e., byte offset).
-   **sx**: index increment for `x`.

#### sasum.Module.prototype.ndarray( N, xp, sx, ox )

Computes the sum of absolute values using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm/memory' );
var oneTo = require( '@stdlib/array/one-to' );
var zeros = require( '@stdlib/array/zeros' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new sasum.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'float32';

// Specify a vector length:
var N = 5;

// Define a pointer (i.e., byte offset) for storing the input vector:
var xptr = 0;

// Write vector values to module memory:
mod.write( xptr, oneTo( N, dtype ) );

// Perform computation:
var sum = mod.ndarray( N, xptr, 1, 0 );
// returns 15.0
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `main` and `ndarray` methods return `0.0`.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `sasum` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas/base/sasum`][@stdlib/blas/base/sasum]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/sasum`][@stdlib/blas/base/sasum]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `sasum()` corresponds to the [BLAS][blas] level 1 function [`sasum`][sasum].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sasum = require( '@stdlib/blas/base/wasm/sasum' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var sum = sasum.ndarray( x.length, x, 1, 0 );
console.log( sum );
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

[sasum]: https://www.netlib.org/lapack/explore-html/d5/d72/group__asum_ga5fb1932fad7d47868a711867e4f2c804.html#ga5fb1932fad7d47868a711867e4f2c804

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas/tree/main/base/sasum

</section>

<!-- /.links -->
