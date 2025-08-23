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

# zaxpy

> Scale a double-precision complex floating-point vector by a double-precision complex floating-point constant and add the result to a double-precision complex floating-point vector.

<section class="usage">

## Usage

```javascript
var zaxpy = require( '@stdlib/blas/base/zaxpy' );
```

#### zaxpy( N, alpha, x, strideX, y, strideY )

Scales values from `x` by `alpha` and adds the result to `y`.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zaxpy( 3, alpha, x, 1, y, 1 );
// y => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **x**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine how elements from `x` are scaled by `alpha` and added to `y`. For example, to scale every other element in `x` by `alpha` and add the result to every other element of `y`,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zaxpy( 2, alpha, x, 2, y, 2 );
// y => <Complex128Array>[ -1.0, 7.0, 1.0, 1.0, -1.0, 23.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Perform operation:
zaxpy( 2, alpha, x1, 1, y1, 1 );
// y0 => <Complex128Array>[ 1.0, 1.0, 1.0, 1.0, -1.0, 15.0, -1.0, 23.0 ]
```

#### zaxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Scales values from `x` by `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zaxpy.ndarray( 3, alpha, x, 1, 0, y, 1, 0 );
// y => <Complex128Array>[ -1.0, 7.0, -1.0, 15.0, -1.0, 23.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to scale elements in the first input strided array starting from the second element and add the result to the second input array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zaxpy.ndarray( 3, alpha, x, 1, 1, y, 1, 1 );
// y => <Complex128Array>[ 1.0, 1.0, -1.0, 15.0, -1.0, 23.0, -1.0, 31.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `zaxpy()` corresponds to the [BLAS][blas] level 1 function [`zaxpy`][zaxpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zcopy = require( '@stdlib/blas/base/zcopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var zaxpy = require( '@stdlib/blas/base/zaxpy' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex128', rand );
var y = filledarrayBy( 10, 'complex128', rand );
var yc1 = zcopy( y.length, y, 1, zeros( y.length, 'complex128' ), 1 );

var alpha = new Complex128( 2.0, 2.0 );

// Perform operation:
zaxpy( x.length, alpha, x, 1, yc1, 1 );

// Print the results:
logEach( '(%s)*(%s) + (%s) = %s', alpha, x, y, yc1 );

var yc2 = zcopy( y.length, y, 1, zeros( y.length, 'complex128' ), 1 );

// Perform operation using alternative indexing semantics:
zaxpy.ndarray( x.length, alpha, x, 1, 0, yc2, 1, 0 );

// Print the results:
logEach( '(%s)*(%s) + (%s) = %s', alpha, x, y, yc2 );
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
#include "stdlib/blas/base/zaxpy.h"
```

#### c_zaxpy( N, alpha, \*X, strideX, \*Y, strideY )

Scales values from `X` by `alpha` and adds the result to `Y`.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
double y[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

c_zaxpy( 4, alpha, (void *)x, 1, (void *)y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[inout] void*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void c_zaxpy( const CBLAS_INT N, const stdlib_complex128_t alpha, const void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY );
```

#### c_zaxpy_ndarray( N, alpha, \*X, strideX, offsetX, \*Y, strideY, offsetY )

Scales values from `X` by `alpha` and adds the result to `Y` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
double y[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

c_zaxpy_ndarray( 4, alpha, (void *)x, 1, 0, (void *)y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[in] void*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] void*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void c_zaxpy_ndarray( const CBLAS_INT N, const stdlib_complex128_t alpha, const void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/base/zaxpy.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double y[] = { 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };

    // Create a complex scalar:
    const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = 1;

    // Perform operation:
    c_zaxpy( N, alpha, (void *)x, strideX, (void *)y, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "zaxpy[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }

    // Perform operation using alternative indexing semantics:
    c_zaxpy_ndarray( N, alpha, (void *)x, strideX, 0, (void *)y, strideY, 0 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "zaxpy[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
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

[zaxpy]: https://www.netlib.org/lapack/explore-html/d5/d4b/group__axpy_gaf603daa00d5c723d0e409d9b2d011bf4.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

</section>

<!-- /.links -->
