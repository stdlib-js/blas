<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# ddot

> Calculate the dot product of two double-precision floating-point vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@929657146427564b61e3e6bdda76949ebe2ce923/lib/node_modules/@stdlib/blas/base/ddot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ddot = require( '@stdlib/blas/base/ddot' );
```

#### ddot( N, x, strideX, y, strideY )

Calculates the dot product of vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = ddot( x.length, x, 1, y, 1 );
// returns -5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.

The `N` and strides parameters determine which elements in the strided arrays are accessed at runtime. For example, to calculate the dot product of every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var z = ddot( 3, x, 2, y, -1 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var z = ddot( 3, x1, -2, y1, 1 );
// returns 128.0
```

#### ddot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Calculates the dot product of `x` and `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = ddot.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns -5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the dot product of every other value in `x` starting from the second value with the last 3 elements in `y` in reverse order

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var z = ddot.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// returns 128.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `ddot()` corresponds to the [BLAS][blas] level 1 function [`ddot`][ddot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ddot = require( '@stdlib/blas/base/ddot' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

var out = ddot.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
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
#include "stdlib/blas/base/ddot.h"
```

#### c_ddot( N, \*X, strideX, \*Y, strideY )

Computes the dot product of two double-precision floating-point vectors.

```c
const double x[] = { 4.0, 2.0, -3.0, 5.0, -1.0 };
const double y[] = { 2.0, 6.0, -1.0, -4.0, 8.0 };

double v = c_ddot( 5, x, 1, y, 1 );
// returns -5.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.

```c
double c_ddot( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY );
```

#### c_ddot_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

Computes the dot product of two double-precision floating-point vectors using alternative indexing semantics.

```c
const double x[] = { 4.0, 2.0, -3.0, 5.0, -1.0 };
const double y[] = { 2.0, 6.0, -1.0, -4.0, 8.0 };

double v = c_ddot_ndarray( 5, x, -1, 4, y, -1, 4 );
// returns -5.0
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
double c_ddot_ndarray( const CBLAS_INT N, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/base/ddot.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };
    const double y[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify strides:
    const int strideX = 1;
    const int strideY = -1;

    // Compute the dot product:
    double d = c_ddot( N, x, strideX, y, strideY );

    // Print the result:
    printf( "dot product: %lf\n", d );

    // Compute the dot product:
    d = c_ddot_ndarray( N, x, strideX, 0, y, strideY, N-1 );

    // Print the result:
    printf( "dot product: %lf\n", d );
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

-   <span class="package-name">[`@stdlib/blas/base/dsdot`][@stdlib/blas/base/dsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product with extended accumulation and result of two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/gdot`][@stdlib/blas/base/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/sdot`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/sdsdot`][@stdlib/blas/base/sdsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors with extended accumulation.</span>
-   <span class="package-name">[`@stdlib/blas/ddot`][@stdlib/blas/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[ddot]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas/tree/main/base/dsdot

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas/tree/main/base/gdot

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas/tree/main/base/sdot

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas/tree/main/base/sdsdot

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas/tree/main/ddot

<!-- </related-links> -->

</section>

<!-- /.links -->
