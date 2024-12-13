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

# caxpy

> Scale a single-precision complex floating-point vector by a single-precision complex floating-point constant and add the result to a single-precision complex floating-point vector.

<section class="usage">

## Usage

```javascript
var caxpy = require( '@stdlib/blas/base/caxpy' );
```

#### caxpy( N, ca, cx, strideX, cy, strideY )

Scales values from `cx` by `ca` and adds the result to `cy`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var ca = new Complex64( 2.0, 2.0 );

caxpy( 3, ca, cx, 1, cy, 1 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns -1.0

var im = imagf( z );
// returns 7.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **ca**: scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **cx**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `cx`.
-   **cy**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideY**: index increment for `cy`.

The `N` and stride parameters determine how values from `cx` are scaled by `ca` and added to `cy`. For example, to scale every other value in `cx` by `ca` and add the result to every other value of `cy`,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var ca = new Complex64( 2.0, 2.0 );

caxpy( 2, ca, cx, 2, cy, 2 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns -1.0

var im = imagf( z );
// returns 7.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Initial arrays...
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy0 = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

// Define a scalar constant:
var ca = new Complex64( 2.0, 2.0 );

// Create offset views...
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Scales values of `cx0` by `ca` starting from second index and add the result to `cy0` starting from third index...
caxpy( 2, ca, cx1, 1, cy1, 1 );

var z = cy0.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns -1.0

var im = imagf( z );
// returns 15.0
```

#### caxpy.ndarray( N, ca, cx, strideX, offsetX, cy, strideY, offsetY )

Scales values from `cx` by `ca` and adds the result to `cy` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var ca = new Complex64( 2.0, 2.0 );

caxpy.ndarray( 3, ca, cx, 1, 0, cy, 1, 0 );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns -1.0

var im = imagf( z );
// returns 7.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `cx`.
-   **offsetY**: starting index for `cy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to scale values in the first input strided array starting from the second element and add the result to the second input array starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var ca = new Complex64( 2.0, 2.0 );

caxpy.ndarray( 3, ca, cx, 1, 1, cy, 1, 1 );

var z = cy.get( 3 );
// returns <Complex64>

var re = realf( z );
// returns -1.0

var im = imagf( z );
// returns 31.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `cy` unchanged.
-   `caxpy()` corresponds to the [BLAS][blas] level 1 function [`caxpy`][caxpy].

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
var caxpy = require( '@stdlib/blas/base/caxpy' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var cx = filledarrayBy( 10, 'complex64', rand );
var cy = filledarrayBy( 10, 'complex64', rand );
var cyc = ccopy( cy.length, cy, 1, zeros( cy.length, 'complex64' ), 1 );

var ca = new Complex64( 2.0, 2.0 );

// Scale values from `cx` by `ca` and add the result to `cy`:
caxpy( cx.length, ca, cx, 1, cy, 1 );

// Print the results:
logEach( '(%s)*(%s) + (%s) = %s', ca, cx, cyc, cy );
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
#include "stdlib/blas/base/caxpy.h"
```

#### c_caxpy( N, ca, \*CX, strideX, \*CY, strideY )

Scales values from `cx` by `ca` and adds the result to `cy`.

```c
#include "stdlib/complex/float32/ctor.h"

float cx[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
float cy[] = { -1.0f, -2.0f, -3.0f, -4.0f, -5.0f, -6.0f, -7.0f, -8.0f };
const stdlib_complex64_t ca = stdlib_complex64( 2.0f, 2.0f );

c_caxpy( 4, ca, (void *)cx, 1, (void *)cy, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **ca**: `[in] stdlib_complex64_t` scalar constant.
-   **CX**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **CY**: `[inout] void*` output array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.

```c
void c_caxpy( const CBLAS_INT N, const stdlib_complex64_t ca, const void *CX, const CBLAS_INT strideX, void *CY, const CBLAS_INT strideY );
```

#### c_caxpy_ndarray( N, ca, \*CX, strideX, offsetX, \*CY, strideY, offsetY )

Scales values from `cx` by `ca` and adds the result to `cy` using alternative indexing semantics.

```c
#include "stdlib/complex/float32/ctor.h"

float cx[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
float cy[] = { -1.0f, -2.0f, -3.0f, -4.0f, -5.0f, -6.0f, -7.0f, -8.0f }
const stdlib_complex64_t ca = stdlib_complex64( 2.0f, 2.0f );

c_caxpy_ndarray( 4, ca, (void *)cx, 1, 0, (void *)cy, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **ca**: `[in] stdlib_complex64_t` scalar constant.
-   **CX**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `CX`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `CX`.
-   **CY**: `[inout] void*` output array.
-   **strideY**: `[in] CBLAS_INT` index increment for `CY`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `CY`.

```c
void c_caxpy_ndarray( const CBLAS_INT N, const stdlib_complex64_t ca, const void *CX, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *CY, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/base/caxpy.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays of interleaved real and imaginary components...
    float cx[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    float cy[] = { -1.0f, -2.0f, -3.0f, -4.0f, -5.0f, -6.0f, -7.0f, -8.0f };

    // Create a complex scalar:
    const stdlib_complex64_t ca = stdlib_complex64( 2.0f, 2.0f );

    // Specify the number of elements:
    const int N = 4;

    // Specify strides...
    const int strideX = 1;
    const int strideY = 1;

    // Scale values from `cx` by `ca` and adds the result to `cy`:
    c_caxpy( N, ca, (void *)cx, strideX, (void *)cy, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "cy[ %i ] = %f + %fj\n", i, cy[ i*2 ], cy[ (i*2)+1 ] );
    }

    // Scales values from `cx` by `ca` and adds the result to `cy` using alternative indexing semantics:
    c_caxpy_ndarray( N, ca, (void *)cx, -strideX, 3, (void *)cy, -strideY, 3 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "cy[ %i ] = %f + %fj\n", i, cy[ i*2 ], cy[ (i*2)+1 ] );
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

[caxpy]: https://www.netlib.org/lapack/explore-html/d5/d4b/group__axpy_ga0b7bac1f4d42514074a48f14f5f9caa0.html#ga0b7bac1f4d42514074a48f14f5f9caa0

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

</section>

<!-- /.links -->
