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

# dapxsumors

> Add a scalar constant to each double-precision floating-point strided array element and compute the sum using ordinary recursive summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dapxsumors = require( '@stdlib/blas/ext/base/dapxsumors' );
```

#### dapxsumors( N, alpha, x, strideX )

Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dapxsumors( x.length, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = dapxsumors( 4, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dapxsumors( 4, 5.0, x1, 2 );
// returns 25.0
```

#### dapxsumors.ndarray( N, alpha, x, strideX, offsetX )

Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dapxsumors.ndarray( x.length, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access every other element starting from the second element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dapxsumors.ndarray( 4, 5.0, x, 2, 1 );
// returns 25.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation is acceptable; in all other cases, exercise due caution.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dapxsumors = require( '@stdlib/blas/ext/base/dapxsumors' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

var v = dapxsumors( x.length, 5.0, x, 1 );
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
#include "stdlib/blas/ext/base/dapxsumors.h"
```

#### stdlib_strided_dapxsumors( N, alpha, \*X, strideX )

Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = stdlib_strided_dapxsumors( 4, 5.0, x, 1 );
// returns 30.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_dapxsumors( const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dapxsumors_ndarray( N, alpha, \*X, strideX, offsetX )

Adds a scalar constant to each double-precision floating-point strided array element and computes the sum using ordinary recursive summation and alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };

double v = stdlib_strided_dapxsumors_ndarray( 4, 5.0, x, 1, 0 );
// returns 30.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
double stdlib_strided_dapxsumors_ndarray( const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/dapxsumors.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Compute the sum:
    double v = stdlib_strided_dapxsumors( N, 5.0, x, strideX );

    // Print the result:
    printf( "Sum: %lf\n", v );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dapxsum`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsumors`][@stdlib/blas/ext/base/dsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapxsumors`][@stdlib/blas/ext/base/gapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sapxsumors`][@stdlib/blas/ext/base/sapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsum

[@stdlib/blas/ext/base/dsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumors

[@stdlib/blas/ext/base/gapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumors

[@stdlib/blas/ext/base/sapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumors

<!-- </related-links> -->

</section>

<!-- /.links -->
