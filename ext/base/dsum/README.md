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

# dsum

> Calculate the sum of double-precision floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dsum = require( '@stdlib/blas/ext/base/dsum' );
```

#### dsum( N, x, strideX )

Computes the sum of double-precision floating-point strided array elements.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dsum( x.length, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = dsum( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dsum( 4, x1, 2 );
// returns 5.0
```

#### dsum.ndarray( N, x, strideX, offsetX )

Computes the sum of double-precision floating-point strided array elements using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dsum.ndarray( x.length, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dsum.ndarray( 4, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dsum = require( '@stdlib/blas/ext/base/dsum' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

var v = dsum( x.length, x, 1 );
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
#include "stdlib/blas/ext/base/dsum.h"
```

#### stdlib_strided_dsum( N, \*X, strideX )

Computes the sum of double-precision floating-point strided array elements.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = stdlib_strided_dsum( 4, x, 1 );
// returns 10.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dsum( const CBLAS_INT N, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dsum_ndarray( N, \*X, strideX, offsetX )

Computes the sum of double-precision floating-point strided array elements using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = stdlib_strided_dsum_ndarray( 4, x, 1, 0 );
// returns 10.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dsum_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/dsum.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the sum:
    double v = stdlib_strided_dsum( N, x, strideX );

    // Print the result:
    printf( "sum: %lf\n", v );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dasum`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/stats/strided/dmean`][@stdlib/stats/strided/dmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnansum`][@stdlib/blas/ext/base/dnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssum`][@stdlib/blas/ext/base/ssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsum`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas/tree/main/base/dasum

[@stdlib/stats/strided/dmean]: https://github.com/stdlib-js/stats-strided-dmean

[@stdlib/blas/ext/base/dnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansum

[@stdlib/blas/ext/base/ssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssum

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsum

<!-- </related-links> -->

</section>

<!-- /.links -->
