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

# dscal

> Multiply a double-precision floating-point vector `x` by a constant `alpha`.

<section class="usage">

## Usage

```javascript
var dscal = require( '@stdlib/blas/base/dscal' );
```

#### dscal( N, alpha, x, stride )

Multiplies a double-precision floating-point vector `x` by a constant `alpha`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dscal( x.length, 5.0, x, 1 );
// x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to multiply every other value by a constant

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dscal( 4, 5.0, x, 2 );
// x => <Float64Array>[ -10.0, 1.0, 15.0, -5.0, 20.0, 0.0, -5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every other value...
dscal( 3, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, -10.0, 3.0, -20.0, 5.0, -30.0 ]
```

If `N` is less than or equal to `0`, the function returns `x` unchanged.

#### dscal.ndarray( N, alpha, x, stride, offset )

Multiplies a double-precision floating-point vector `x` by a constant `alpha` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dscal.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float64Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to multiply the last three elements of `x` by a constant

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

dscal.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `dscal()` corresponds to the [BLAS][blas] level 1 function [`dscal`][dscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dscal = require( '@stdlib/blas/base/dscal' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

dscal( x.length, 5.0, x, 1 );
console.log( x );
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
#include "stdlib/blas/base/dscal.h"
```

#### c_dscal( N, alpha, \*X, stride )

Multiplies each element of a double-precision floating-point vector by a constant.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

c_dscal( 4, 5.0, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[inout] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.

```c
void c_dscal( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT stride );
```

#### c_dscal_ndarray( N, alpha, \*X, stride, offset )

Multiplies each element of a double-precision floating-point vector by a constant using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

c_dscal_ndarray( 4, 5.0, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[inout] double*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.
-   **offset**: `[in] CBLAS_INT` starting index for `X`.

```c
void c_dscal_ndarray( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT stride, const CBLAS_INT offset );
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
#include "stdlib/blas/base/dscal.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int stride = 1;

    // Scale the vector:
    c_dscal( N, 5.0, x, stride );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
    }

    // Scale the vector:
    c_dscal_ndarray( N, 5.0, x, -stride, N-1 );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
    }
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
-   <span class="package-name">[`@stdlib/blas/base/gscal`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector by a scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/base/sscal`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas/base/saxpy`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[dscal]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas/tree/main/base/gscal

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas/tree/main/base/sscal

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas/tree/main/base/saxpy

<!-- </related-links> -->

</section>

<!-- /.links -->
