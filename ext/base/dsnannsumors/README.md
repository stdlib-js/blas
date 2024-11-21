<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# dsnannsumors

> Calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dsnannsumors = require( '@stdlib/blas/ext/base/dsnannsumors' );
```

#### dsnannsumors( N, x, strideX, out, strideOut )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dsnannsumors( x.length, x, 1, out, 1 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] whose first element is the sum and whose second element is the number of non-NaN elements.
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float32Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dsnannsumors( 4, x, 2, out, 1 );
// returns <Float64Array>[ 5.0, 2 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var v = dsnannsumors( 4, x1, 2, out1, 1 );
// returns <Float64Array>[ 5.0, 4 ]
```

#### dsnannsumors.ndarray( N, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation and alternative indexing semantics, and returning an extended precision result.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float32Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dsnannsumors.ndarray( x.length, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float32Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );

var v = dsnannsumors.ndarray( 4, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 5.0, 0.0, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a sum equal to `0.0`.
-   Accumulated intermediate values are stored as double-precision floating-point numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var dsnannsumors = require( '@stdlib/blas/ext/base/dsnannsumors' );

function rand() {
    if ( bernoulli( 0.5 ) < 0.2 ) {
        return NaN;
    }
    return discreteUniform( 0, 100 );
}

var x = filledarrayBy( 10, 'float32', rand );
console.log( x );

var out = new Float64Array( 2 );
dsnannsumors( x.length, x, 1, out, 1 );
console.log( out );
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
#include "stdlib/blas/ext/base/dsnannsumors.h"
```

#### stdlib_strided_dsnannsumors( N, \*X, strideX, \*n )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, 2.0f };
CBLAS_INT n = 0;

double v = stdlib_strided_dsnannsumors( 4, x, 1, &n );
// returns 1.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **n**: `[out] CBLAS_INT*` pointer for storing the number of non-NaN elements.

```c
double stdlib_strided_dsnannsumors( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, CBLAS_INT *n );
```

#### stdlib_strided_dsnannsumors_ndarray( N, \*X, strideX, offsetX, \*n )

Computes the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation and alternative indexing semantics, and returning an extended precision result.

```c
const float x[] = { 1.0f, -2.0f, 0.0f/0.0f, 2.0f };
CBLAS_INT n = 0;

double v = stdlib_strided_dsnannsumors_ndarray( 4, x, 1, 0, &n );
// returns 1.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **n**: `[out] CBLAS_INT*` pointer for storing the number of non-NaN elements.

```c
double stdlib_strided_dsnannsumors_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n );
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
#include "stdlib/blas/ext/base/dsnannsumors.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f, 0.0f/0.0f, 0.0f/0.0f };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 2;

    // Initialize a variable for storing the number of non-NaN elements:
    CBLAS_INT n = 0;

    // Compute the sum:
    double v = stdlib_strided_dsnannsumors( N, x, strideX, &n );

    // Print the result:
    printf( "sum: %lf\n", v );
    printf( "n: %"CBLAS_IFMT"\n", n );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumors`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsnansumors`][@stdlib/blas/ext/base/dsnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dssumors`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumors

[@stdlib/blas/ext/base/dsnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsnansumors

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dssumors

<!-- </related-links> -->

</section>

<!-- /.links -->
