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

# dnancusumkbn

> Calculate the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dnancusumkbn = require( '@stdlib/blas/ext/base/dnancusumkbn' );
```

#### dnancusumkbn( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN ] );
var y = new Float64Array( x.length );

dnancusumkbn( x.length, 0.0, x, 1, y, 1 );
// y => <Float64Array>[ 1.0, -1.0, -1.0 ]

x = new Float64Array( [ 1.0, -2.0, NaN ] );
y = new Float64Array( x.length );

dnancusumkbn( x.length, 10.0, x, 1, y, 1 );
// y => <Float64Array>[ 11.0, 9.0, 9.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, NaN, NaN ] );
var y = new Float64Array( x.length );

var v = dnancusumkbn( 4, 0.0, x, 2, y, 1 );
// y => <Float64Array>[ 1.0, 3.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, NaN, NaN ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dnancusumkbn( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 1.0, 0.0 ]
```

#### dnancusumkbn.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, NaN ] );
var y = new Float64Array( x.length );

dnancusumkbn.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 1.0, -1.0, -1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the cumulative sum of every other element in the strided input array starting from the second element and to store in the last `N` elements of the strided output array starting from the last element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, NaN, NaN ] );
var y = new Float64Array( x.length );

dnancusumkbn.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var zeros = require( '@stdlib/array/zeros' );
var dnancusumkbn = require( '@stdlib/blas/ext/base/dnancusumkbn' );

function rand() {
    if ( bernoulli( 0.7 ) > 0 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var y = zeros( 10, 'float64' );
console.log( y );

dnancusumkbn( x.length, 0.0, x, 1, y, -1 );
console.log( y );
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
#include "stdlib/blas/ext/base/dnancusumkbn.h"
```

#### stdlib_strided_dnancusumkbn( N, sum, \*X, strideX, \*Y, strideY )

Computes the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };
double y[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dnancusumkbn( 4, 0.0, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] double` initial sum.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_dnancusumkbn( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_dnancusumkbn_ndarray( N, sum, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!-- lint enable maximum-heading-length -->

Computes the cumulative sum of double-precision floating-point strided array elements ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0 };
double y[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dnancusumkbn_ndarray( 4, 0.0, x, 1, 0, y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] double` initial sum.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[out] double*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_dnancusumkbn_ndarray( const CBLAS_INT N, const double sum, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/ext/base/dnancusumkbn.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0/0.0, 0.0/0.0 };
    double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 2;
    const int strideY = -2;

    // Compute the cumulative sum:
    stdlib_strided_dnancusumkbn( N, 0.0, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "y[ %d ] = %lf\n", i, y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

</section>

<!-- /.links -->
