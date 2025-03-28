<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# dasum

> Compute the sum of [absolute values][@stdlib/math/base/special/abs] ([_L1_ norm][l1norm]).

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

```math
\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c403cb0cbb15d9b7b453e3cea34ca2379500ddd4/lib/node_modules/@stdlib/blas/base/dasum/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dasum = require( '@stdlib/blas/base/dasum' );
```

#### dasum( N, x, stride )

Computes the sum of [absolute values][@stdlib/math/base/special/abs].

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = dasum( x.length, x, 1 );
// returns 19.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][mdn-float64array].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are used to compute the sum. For example, to sum every other value,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = dasum( 4, x, 2 );
// returns 10.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sum every other value...
var sum = dasum( 3, x1, 2 );
// returns 12.0
```

If `N` is less than or equal to `0`, the function returns `0`.

#### dasum.ndarray( N, x, stride, offset )

Computes the sum of [absolute values][@stdlib/math/base/special/abs] using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = dasum.ndarray( x.length, x, 1, 0 );
// returns 19.0
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to sum the last three elements,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var sum = dasum.ndarray( 3, x, 1, x.length-3 );
// returns 15.0

// Using a negative stride to sum from the last element:
sum = dasum.ndarray( 3, x, -1, x.length-1 );
// returns 15.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, the sum is `0`.
-   `dasum()` corresponds to the [BLAS][blas] level 1 function [`dasum`][dasum].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dasum = require( '@stdlib/blas/base/dasum' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

var out = dasum( x.length, x, 1 );
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
#include "stdlib/blas/base/dasum.h"
```

#### c_dasum( N, \*X, stride )

Computes the sum of absolute values.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = c_dasum( 4, x, 1 );
// returns 10.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.

```c
double c_dasum( const CBLAS_INT N, const double *X, const CBLAS_INT stride );
```

#### c_dasum_ndarray( N, \*X, stride, offset )

Computes the sum of absolute values using alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = c_dasum_ndarray( 4, x, -1, 3 );
// returns 10.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.
-   **offset**: `[in] CBLAS_INT` starting index for `X`.

```c
double c_dasum_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT stride, const CBLAS_INT offset );
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
#include "stdlib/blas/base/dasum.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Compute the sum of absolute values:
    double sum = c_dasum( N, x, strideX );

    // Print the result:
    printf( "sum: %lf\n", sum );

    // Compute the sum of absolute values:
    sum = c_dasum_ndarray( N, x, -strideX, N-1 );

    // Print the result:
    printf( "sum: %lf\n", sum );
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

-   <span class="package-name">[`@stdlib/blas/base/daxpy`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>
-   <span class="package-name">[`@stdlib/blas/base/gasum`][@stdlib/blas/base/gasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas/base/sasum`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsum`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[dasum]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[l1norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas/tree/main/base/gasum

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas/tree/main/base/sasum

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsum

<!-- </related-links> -->

</section>

<!-- /.links -->
