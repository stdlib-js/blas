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

# ssumpw

> Calculate the sum of single-precision floating-point strided array elements using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ssumpw = require( '@stdlib/blas/ext/base/ssumpw' );
```

#### ssumpw( N, x, strideX )

Computes the sum of single-precision floating-point strided array elements using pairwise summation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = ssumpw( x.length, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = ssumpw( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = ssumpw( 4, x1, 2 );
// returns 5.0
```

#### ssumpw.ndarray( N, x, strideX, offsetX )

Computes the sum of single-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = ssumpw.ndarray( x.length, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = ssumpw.ndarray( 4, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var ssumpw = require( '@stdlib/blas/ext/base/ssumpw' );

var x = filledarrayBy( 10, 'float32', discreteUniform( 0, 100 ) );
console.log( x );

var v = ssumpw( x.length, x, 1 );
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
#include "stdlib/blas/ext/base/ssumpw.h"
```

#### stdlib_strided_ssumpw( N, \*X, strideX )

Computes the sum of single-precision floating-point strided array elements using pairwise summation.

```c
const float x[] = { 1.0f, -2.0f, 2.0f };

float v = stdlib_strided_ssumpw( 3, x, 1 );
// returns 1.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
float stdlib_strided_ssumpw( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_ssumpw_ndarray( N, \*X, strideX, offsetX )

Computes the sum of single-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 2.0f };

float v = stdlib_strided_ssumpw_ndarray( 3, x, 1, 0 );
// returns 1.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
float stdlib_strided_ssumpw_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/ssumpw.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the sum:
    float v = stdlib_strided_ssumpw( N, x, strideX );

    // Print the result:
    printf( "sum: %f\n", v );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsumpw`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsumpw`][@stdlib/blas/ext/base/gsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/snansumpw`][@stdlib/blas/ext/base/snansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssum`][@stdlib/blas/ext/base/ssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssumkbn2`][@stdlib/blas/ext/base/ssumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssumors`][@stdlib/blas/ext/base/ssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumpw

[@stdlib/blas/ext/base/gsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumpw

[@stdlib/blas/ext/base/snansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumpw

[@stdlib/blas/ext/base/ssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssum

[@stdlib/blas/ext/base/ssumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumkbn2

[@stdlib/blas/ext/base/ssumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumors

<!-- </related-links> -->

</section>

<!-- /.links -->
