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

# csum

> Calculate the sum of single-precision complex floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var csum = require( '@stdlib/blas/ext/base/csum' );
```

#### csum( N, x, strideX )

Computes the sum of single-precision complex floating-point strided array elements.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, -2.0, 2.0, 3.0 ] );

var v = csum( x.length, x, 1 );
// returns <Complex64>[ 3.0, 1.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = csum( 2, x, 2 );
// returns <Complex64>[ -1.0, 5.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x0 = new Complex64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = csum( 2, x1, 2 );
// returns <Complex64>[ 5.0, 2.0 ]
```

#### csum.ndarray( N, x, strideX, offsetX )

Computes the sum of single-precision complex floating-point strided array elements using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 1.0, -2.0, 2.0, 3.0 ] );

var v = csum.ndarray( 2, x, 1, 0 );
// returns <Complex64>[ 3.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var x = new Complex64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = csum.ndarray( 2, x, 2, 1 );
// returns <Complex64>[ 5.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0 + 0.0i`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Array = require( '@stdlib/array/complex64' );
var csum = require( '@stdlib/blas/ext/base/csum' );

var xbuf = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( xbuf );

var x = new Complex64Array( xbuf );
var v = csum( x.length, x, 1 );
console.log( v );
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
#include "stdlib/blas/ext/base/csum.h"
```

#### stdlib_strided_csum( N, \*X, strideX )

Computes the sum of single-precision complex floating-point strided array elements.

```c
#include "stdlib/complex/float32/ctor.h"

const stdlib_complex64_t x[] = {
    stdlib_complex64( 1.0f, 2.0f ),
    stdlib_complex64( 3.0f, 4.0f )
};

stdlib_complex64_t v = stdlib_strided_csum( 2, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
stdlib_complex64_t stdlib_strided_csum( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_csum_ndarray( N, \*X, strideX, offsetX )

Computes the sum of single-precision complex floating-point strided array elements using alternative indexing semantics.

```c
#include "stdlib/complex/float32/ctor.h"

const stdlib_complex64_t x[] = {
    stdlib_complex64( 1.0f, 2.0f ),
    stdlib_complex64( 3.0f, 4.0f )
};

stdlib_complex64_t v = stdlib_strided_csum_ndarray( 2, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
stdlib_complex64_t stdlib_strided_csum_ndarray( const CBLAS_INT N, const stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/csum.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 1.0f, 2.0f ),
        stdlib_complex64( 3.0f, 4.0f ),
        stdlib_complex64( 5.0f, 6.0f ),
        stdlib_complex64( 7.0f, 8.0f )
    };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 1;

    // Compute the sum:
    stdlib_complex64_t v = stdlib_strided_csum( N, x, strideX );

    // Print the result:
    printf( "sum: %f + %fi\n", stdlib_complex64_real( v ), stdlib_complex64_imag( v ) );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
