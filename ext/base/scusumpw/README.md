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

# scusumpw

> Calculate the cumulative sum of single-precision floating-point strided array elements using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scusumpw = require( '@stdlib/blas/ext/base/scusumpw' );
```

#### scusumpw( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scusumpw( x.length, 0.0, x, 1, y, 1 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]

x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
y = new Float32Array( x.length );

scusumpw( x.length, 10.0, x, 1, y, 1 );
// y => <Float32Array>[ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float32Array( x.length );

var v = scusumpw( 4, 0.0, x, 2, y, 1 );
// y => <Float32Array>[ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( x0.length );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

scusumpw( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0, 0.0 ]
```

#### scusumpw.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scusumpw.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the cumulative sum of every other element starting from the second element and to store in the last `N` elements of `y` starting from the last element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( x.length );

scusumpw.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var scusumpw = require( '@stdlib/blas/ext/base/scusumpw' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var y = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( y );

scusumpw( x.length, 0.0, x, 1, y, -1 );
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
#include "stdlib/blas/ext/base/scusumpw.h"
```

#### stdlib_strided_scusumpw( N, sum, \*X, strideX, \*Y, strideY )

Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float y[] = { 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_scusumpw( 4, 0.0f, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] float` initial sum.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void stdlib_strided_scusumpw( const CBLAS_INT N, const float sum, const float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_scusumpw_ndarray( N, sum, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!-- lint enable maximum-heading-length -->

Computes the cumulative sum of single-precision floating-point strided array elements using pairwise summation and alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float y[] = { 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_scusumpw_ndarray( 4, 0.0f, x, 1, 0, y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **sum**: `[in] float` initial sum.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void stdlib_strided_scusumpw_ndarray( const CBLAS_INT N, const float sum, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/ext/base/scusumpw.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
    float y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 2;
    const int strideY = -2;

    // Compute the cumulative sum:
    stdlib_strided_scusumpw( N, 0.0f, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "y[ %d ] = %f\n", i, y[ i ] );
    }
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dcusumpw`][@stdlib/blas/ext/base/dcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gcusumpw`][@stdlib/blas/ext/base/gcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/scusum`][@stdlib/blas/ext/base/scusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dcusumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumpw

[@stdlib/blas/ext/base/gcusumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumpw

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusum

<!-- </related-links> -->

</section>

<!-- /.links -->
