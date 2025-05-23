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

> Applies a plane rotation.

<section class="usage">

## Usage

```javascript
var csrot = require( '@stdlib/blas/base/csrot' );
```

#### csrot( N, cx, strideX, cy, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.
-   **cy**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `cy`.

The `N` and stride parameters determine how values from `cx` and `cy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot( 2, cx, 2, cy, 2, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2,  0.0, 0.0, -3.0, ~-3.6,  0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

// Initial arrays...
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

csrot( 2, cx1, -2, cy1, 1, 0.8, 0.6 );
// cx0 => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// cy0 => <Complex64Array>[ 0.0, 0.0,  0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### csrot.ndarray( N, cx, strideX, offsetX, cy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
// cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.
-   **offsetY**: starting index for `cy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

csrot.ndarray( 2, cx, 2, 1, cy, 2, 1, 0.8, 0.6 );
// cx => <Complex64Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// cy => <Complex64Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `cx` and `cy` unchanged.
-   `csrot()` corresponds to the [BLAS][blas] level 1 function [`csrot`][csrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var ccopy = require( '@stdlib/blas/base/ccopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var csrot = require( '@stdlib/blas/base/csrot' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var cx = filledarrayBy( 10, 'complex64', rand );
var cxc = ccopy( cx.length, cx, 1, zeros( cx.length, 'complex64' ), 1 );

var cy = filledarrayBy( 10, 'complex64', rand );
var cyc = ccopy( cy.length, cy, 1, zeros( cy.length, 'complex64' ), 1 );

// Apply a plane rotation:
csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', cxc, cyc, cx, cy );
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
#include "stdlib/blas/base/csrot.h"
```

#### c_csrot( N, \*X, strideX, \*Y, strideY, c, s )

Applies a plane rotation.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f }; // interleaved real and imaginary components
float y[] = { 5.0f, 6.0f, 7.0f, 8.0f };

c_csrot( 2, (void *)x, 1, (void *)y, 1, 0.8f, 0.6f );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **CX**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **CY**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.
-   **c**: `[in] float` cosine of the angle of rotation.
-   **s**: `[in] float` sine of the angle of rotation.

```c
void c_csrot( const CBLAS_INT N, void *CX, const CBLAS_INT strideX, void *CY, const CBLAS_INT strideY, const float c, const float s );
```

#### c_csrot_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f }; // interleaved real and imaginary components
float y[] = { 5.0f, 6.0f, 7.0f, 8.0f };

c_csrot_ndarray( 2, (void *)x, 1, 0, (void *)y, 1, 0, 0.8f, 0.6f );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **CX**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `CX`.
-   **CY**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `CY`.
-   **c**: `[in] float` cosine of the angle of rotation.
-   **s**: `[in] float` sine of the angle of rotation.

```c
void c_csrot_ndarray( const CBLAS_INT N, void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *CY, const CBLAS_INT strideY, const CBLAS_INT offsetY, const float c, const float s );
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
#include "stdlib/blas/base/csrot.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    float y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = -1;

    // Copy elements:
    c_csrot( N, (void *)x, strideX, (void *)y, strideY, 0.8f, 0.6f );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
        printf( "y[ %i ] = %f + %fj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }
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

[csrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

</section>

<!-- /.links -->
