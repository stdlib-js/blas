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

# dnrm2

> Calculate the L2-norm of a double-precision floating-point vector.

<section class="intro">

The [L2-norm][l2-norm] is defined as

<!-- <equation class="equation" label="eq:l2_norm" align="center" raw="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" alt="L2-norm definition."> -->

<div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" data-equation="eq:l2_norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@f766d7eeb56ff14cbceeeeef03d7f7b88c467515/lib/node_modules/@stdlib/blas/base/dnrm2/docs/img/equation_l2_norm.svg" alt="L2-norm definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnrm2 = require( '@stdlib/blas/base/dnrm2' );
```

#### dnrm2( N, x, stride )

Computes the [L2-norm][l2-norm] of a double-precision floating-point vector `x`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var z = dnrm2( 3, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the [L2-norm][l2-norm] of every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var z = dnrm2( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var z = dnrm2( 4, x1, 2 );
// returns 5.0
```

If `N` is less than or equal to `0`, the function returns `0`.

#### dnrm2.ndarray( N, x, stride, offset )

Computes the [L2-norm][l2-norm] of a double-precision floating-point vector using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var z = dnrm2.ndarray( 3, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the [L2-norm][l2-norm] for every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var z = dnrm2.ndarray( 4, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `dnrm2()` corresponds to the [BLAS][blas] level 1 function [`dnrm2`][dnrm2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dnrm2 = require( '@stdlib/blas/base/dnrm2' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

var out = dnrm2( x.length, x, 1 );
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
#include "stdlib/blas/base/dnrm2.h"
```

#### c_dnrm2( N, \*X, stride )

Computes the L2-norm of a double-precision floating-point vector.

```c
const double x[] = { 1.0, -2.0, 2.0 };

double v = c_dnrm2( 3, x, 1 );
// returns 3.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.

```c
double c_dnrm2( const CBLAS_INT N, const double *X, const CBLAS_INT stride );
```

#### c_dnrm2_ndarray( N, \*X, stride, offset )

Computes the L2-norm of a double-precision floating-point vector using alternative indexing semantics.

```c
const double x[] = { 1.0, -2.0, 2.0 };

double v = c_dnrm2_ndarray( 3, x, -1, 2 );
// returns 3.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.
-   **offset**: `[in] CBLAS_INT` starting index for `X`.

```c
double c_dnrm2_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT stride, const CBLAS_INT offset );
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
#include "stdlib/blas/base/dnrm2.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Compute the L2-norm:
    double l2 = c_dnrm2( N, x, strideX );

    // Print the result:
    printf( "L2-norm: %lf\n", l2 );

    // Compute the L2-norm:
    l2 = c_dnrm2_ndarray( N, x, -strideX, N-1 );

    // Print the result:
    printf( "L2-norm: %lf\n", l2 );
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

-   <span class="package-name">[`@stdlib/blas/base/gnrm2`][@stdlib/blas/base/gnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a vector.</span>
-   <span class="package-name">[`@stdlib/blas/base/snrm2`][@stdlib/blas/base/snrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a single-precision floating-point vector.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[l2-norm]: https://en.wikipedia.org/wiki/Euclidean_distance

[blas]: http://www.netlib.org/blas

[dnrm2]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas/tree/main/base/gnrm2

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas/tree/main/base/snrm2

<!-- </related-links> -->

</section>

<!-- /.links -->
