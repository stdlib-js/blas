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

# scnrm2

> Compute the L2-norm of a complex single-precision floating-point vector.

<section class="usage">

## Usage

```javascript
var scnrm2 = require( '@stdlib/blas/base/scnrm2' );
```

#### scnrm2( N, x, strideX )

Computes the L2-norm of a complex single-precision floating-point vector.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = scnrm2( 4, x, 1 );
// returns ~0.8
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to traverse every other value,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var norm = scnrm2( 2, x, 2 );
// returns ~4.6
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

// Initial array:
var x0 = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the L2-norm:
var norm = scnrm2( 2, x1, 1 );
// returns ~9.3
```

#### scnrm2.ndarray( N, x, strideX, offset )

Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2 ] );

var norm = scnrm2.ndarray( 4, x, 1, 0 );
// returns ~0.8
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to start from the second index,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var norm = scnrm2.ndarray( 2, x, 1, 1 );
// returns ~9.3
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `scnrm2()` corresponds to the [BLAS][blas] level 1 function [`scnrm2`][scnrm2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scnrm2 = require( '@stdlib/blas/base/scnrm2' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex64', rand );
console.log( x.toString() );

// Compute the L2-norm:
var norm = scnrm2( x.length, x, 1 );
console.log( norm );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/scnrm2.h"
```

#### c_scnrm2( N, \*X, strideX )

Computes the L2-norm of a complex single-precision floating-point vector.

```c
const float X[] = { 0.3f, 0.1f, 0.5f, 0.0f, 0.0f, 0.5f, 0.0f, 0.2f };

float norm = c_scnrm2( 4, (void *)X, 1 );
// returns 0.8f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
float c_scnrm2( const CBLAS_INT N, const void *X, const CBLAS_INT strideX );
```

#### c_scnrm2_ndarray( N, \*X, strideX, offsetX )

Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.

```c
const float X[] = { 0.3f, 0.1f, 0.5f, 0.0f, 0.0f, 0.5f, 0.0f, 0.2f };

float norm = c_scnrm2_ndarray( 4, (void *)X, 1, 0 );
// returns 0.8f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float c_scnrm2_ndarray( const CBLAS_INT N, const void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/scnrm2.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    const float X[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride length:
    const int strideX = 1;

    // Compute the L2-norm:
    float norm = c_scnrm2( N, (void *)X, strideX );

    // Print the result:
    printf( "L2-norm: %f\n", norm );

    // Compute the L2-norm using alternative indexing semantics:
    norm = c_scnrm2_ndarray( N, (void *)X, -strideX, N-1 );

    // Print the result:
    printf( "L2-norm: %f\n", norm );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[scnrm2]: https://www.netlib.org/lapack/explore-html/d1/d2a/group__nrm2_gaee5779d5d216a7cd8cf83488fb6bb175.html#gaee5779d5d216a7cd8cf83488fb6bb175

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
