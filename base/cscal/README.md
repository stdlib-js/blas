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

> Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.

<section class="usage">

## Usage

```javascript
var cscal = require( '@stdlib/blas/base/cscal' );
```

#### cscal( N, alpha, x, strideX )

Scales values from `x` by `alpha`.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex64( 2.0, 0.0 );

cscal( 3, alpha, x, 1 );
// x => <Complex64Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex64`][@stdlib/complex/float32/ctor] constant.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine how values from `x` are scaled by `alpha`. For example, to scale every other value in `x` by `alpha`,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex64( 2.0, 0.0 );

cscal( 2, alpha, x, 2 );
// x => <Complex64Array>[ 2.0, 4.0, 3.0, 4.0, 10.0, 12.0, 7.0, 8.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Initial array:
var x0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var alpha = new Complex64( 2.0, 2.0 );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `x1` by `alpha`...
cscal( 3, alpha, x1, 1 );
// x0 => <Complex64Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### cscal.ndarray( N, alpha, x, strideX, offsetX )

Scales values from `x` by `alpha` using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

cscal.ndarray( 3, alpha, x, 1, 0 );
// x => <Complex64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex64( 2.0, 2.0 );

cscal.ndarray( 2, alpha, x, 2, 1 );
// x => <Complex64Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `strideX <= 0`, both functions return `x` unchanged.
-   `cscal()` corresponds to the [BLAS][blas] level 1 function [`cscal`][cscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cscal = require( '@stdlib/blas/base/cscal' );

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex64', rand );
console.log( x.toString() );

var alpha = new Complex64( 2.0, 2.0 );
console.log( alpha.toString() );

// Scale elements from `x` by `alpha`:
cscal( x.length, alpha, x, 1 );
console.log( x.get( x.length-1 ).toString() );
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
#include "stdlib/blas/base/cscal.h"
```

#### c_cscal( N, alpha, \*X, strideX )

Scales values from `X` by `alpha`.

```c
#include "stdlib/complex/float32/ctor.h"

float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

c_cscal( 4, alpha, (void *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex64_t` scalar constant.
-   **X**: `[inout] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
void c_cscal( const CBLAS_INT N, const stdlib_complex64_t alpha, void *X, const CBLAS_INT strideX );
```

#### c_cscal_ndarray( N, alpha, \*X, strideX, offsetX )

Scales values from `X` by `alpha` using alternative indexing semantics.

```c
#include "stdlib/complex/float32/ctor.h"

float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

c_cscal( 4, alpha, (void *)x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex64_t` scalar constant.
-   **X**: `[inout] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void c_cscal_ndarray( const CBLAS_INT N, const stdlib_complex64_t alpha, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/base/cscal.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Create a complex scalar:
    const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

    // Specify the number of elements:
    const int N = 4;

    // Specify stride length:
    const int strideX = 1;

    // Scale the elements of the array:
    c_cscal( N, alpha, (void *)x, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
    }

    // Scale the elements of the array:
    c_cscal_ndarray( N, alpha, (void *)x, -strideX, 3 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
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

[cscal]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

</section>

<!-- /.links -->
