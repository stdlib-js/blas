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

# dnannsumpw

> Calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnannsumpw = require( '@stdlib/blas/ext/base/dnannsumpw' );
```

#### dnannsumpw( N, x, strideX, out, strideOut )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dnannsumpw( x.length, x, 1, out, 1 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **out**: output [`Float64Array`][@stdlib/array/float64] whose first element is the sum and whose second element is the number of non-NaN elements.
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements are accessed at runtime. For example, to compute the sum of every other element in the strided array:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ] );
var out = new Float64Array( 2 );

var v = dnannsumpw( 4, x, 2, out, 1 );
// returns <Float64Array>[ 5.0, 2 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var v = dnannsumpw( 4, x1, 2, out1, 1 );
// returns <Float64Array>[ 5.0, 4 ]
```

#### dnannsumpw.ndarray( N, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
var out = new Float64Array( 2 );

var v = dnannsumpw.ndarray( x.length, x, 1, 0, out, 1, 0 );
// returns <Float64Array>[ 1.0, 3 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( 4 );

var v = dnannsumpw.ndarray( 4, x, 2, 1, out, 2, 1 );
// returns <Float64Array>[ 0.0, 5.0, 0.0, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a sum equal to `0.0`.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Float64Array = require( '@stdlib/array/float64' );
var dnannsumpw = require( '@stdlib/blas/ext/base/dnannsumpw' );

function rand() {
    if ( bernoulli( 0.5 ) < 1 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var out = new Float64Array( 2 );
dnannsumpw( x.length, x, 1, out, 1 );
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
#include "stdlib/blas/ext/base/dnannsumpw.h"
```

#### stdlib_strided_dnannsumpw( N, \*X, strideX, \*n )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.

```c
#include "stdlib/blas/base/shared.h"

const double x[] = { 1.0, 2.0, 0.0/0.0, 4.0 };
CBLAS_INT n = 0;

double v = stdlib_strided_dnannsumpw( 4, x, 1, &n );
// returns 7.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **n**: `[out] CBLAS_INT*` pointer for storing the number of non-NaN elements.

```c
double stdlib_strided_dnannsumpw( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, CBLAS_INT *n );
```

#### stdlib_strided_dnannsumpw_ndarray( N, \*X, strideX, offsetX, \*n )

Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.

```c
#include "stdlib/blas/base/shared.h"

const double x[] = { 1.0, 2.0, 0.0/0.0, 4.0 };
CBLAS_INT n = 0;

double v = stdlib_strided_dnannsumpw_ndarray( 4, x, 1, 0, &n );
// returns 7.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.
-   **n**: `[out] CBLAS_INT*` pointer for storing the number of non-NaN elements.

```c
double stdlib_strided_dnannsumpw_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, CBLAS_INT *n );
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
#include "stdlib/blas/ext/base/dnannsumpw.h"
#include "stdlib/blase/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 0.0/0.0, 0.0/0.0 };

    // Specify the number of elements:
    const int N = 5;

    // Specify the stride length:
    const int strideX = 2;

    // Initialize a variable for storing the number of non-NaN elements:
    CBLAS_INT n = 0;

    // Compute the sum:
    double v = stdlib_strided_dnannsumpw( N, x, strideX, &n );

    // Print the result:
    printf( "sum: %lf\n", v );
    printf( "n: %"CBLAS_IFMT"\n", n );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsum`][@stdlib/blas/ext/base/dnannsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumkbn`][@stdlib/blas/ext/base/dnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumkbn2`][@stdlib/blas/ext/base/dnannsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dnannsumors`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsumpw`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnannsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsum

[@stdlib/blas/ext/base/dnannsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumkbn

[@stdlib/blas/ext/base/dnannsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumkbn2

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumors

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumpw

<!-- </related-links> -->

</section>

<!-- /.links -->
