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

# zscal

> Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.

<section class="usage">

## Usage

```javascript
var zscal = require( '@stdlib/blas/base/zscal' );
```

#### zscal( N, alpha, x, strideX )

Scales values from `x` by `alpha`.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = new Complex128( 2.0, 0.0 );

zscal( 3, alpha, x, 1 );
// x => <Complex128Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar [`Complex128`][@stdlib/complex/float64/ctor] constant.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.

The `N` and stride parameters determine how values from `x` are scaled by `alpha`. For example, to scale every other value in `x` by `alpha`,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex128( 2.0, 0.0 );

zscal( 2, alpha, x, 2 );
// x => <Complex128Array>[ 2.0, 4.0, 3.0, 4.0, 10.0, 12.0, 7.0, 8.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

// Initial array:
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Define a scalar constant:
var alpha = new Complex128( 2.0, 2.0 );

// Create an offset view:
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scales every other value from `x1` by `alpha`...
zscal( 3, alpha, x1, 1 );
// x0 => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0 ]
```

#### zscal.ndarray( N, alpha, x, strideX, offsetX )

Scales values from `x` by `alpha` using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zscal.ndarray( 3, alpha, x, 1, 0 );
// x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other value in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var alpha = new Complex128( 2.0, 2.0 );

zscal.ndarray( 2, alpha, x, 2, 1 );
// x => <Complex128Array>[ 1.0, 2.0, -2.0, 14.0, 5.0, 6.0, -2.0, 30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `zscal()` corresponds to the [BLAS][blas] level 1 function [`zscal`][zscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zscal = require( '@stdlib/blas/base/zscal' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex128', rand );
console.log( x.toString() );

var alpha = new Complex128( 2.0, 2.0 );
console.log( alpha.toString() );

// Scales elements from `x` by `alpha`:
zscal( x.length, alpha, x, 1 );
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
#include "stdlib/blas/base/zscal.h"
```

#### c_zscal( N, alpha, \*X, strideX )

Scales values from `X` by `alpha`.

```c
#include "stdlib/complex/float64/ctor.h"

double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

c_zscal( 4, alpha, (void *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[inout] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
void c_zscal( const CBLAS_INT N, const stdlib_complex128_t alpha, void *X, const CBLAS_INT strideX );
```

#### c_zscal_ndarray( N, alpha, \*X, strideX, offsetX )

Scales values from `X` by `alpha` using alternative indexing semantics.

```c
#include "stdlib/complex/float64/ctor.h"

double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

c_zscal_ndarray( 4, alpha, (void *)x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[inout] void*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void c_zscal_ndarray( const CBLAS_INT N, const stdlib_complex128_t alpha, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/base/zscal.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Create a complex scalar:
    const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

    // Specify the number of elements:
    const int N = 4;

    // Specify stride length:
    const int strideX = 1;

    // Scale the elements of the array:
    c_zscal( N, alpha, (void *)x, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %lf + %lfj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
    }

    // Scale the elements of the array using alternative indexing semantics:
    c_zscal_ndarray( N, alpha, (void *)x, -strideX, N-1 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %lf + %lfj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
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

[zscal]: https://netlib.org/lapack/explore-html-3.6.1/d2/df9/group__complex16__blas__level1_gaceea1208dcd46b6e5468fbfb53b9281b.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

</section>

<!-- /.links -->
