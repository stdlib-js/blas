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

# ssum

> Calculate the sum of single-precision floating-point strided array elements.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ssum = require( '@stdlib/blas/ext/base/ssum' );
```

#### ssum( N, x, strideX )

Computes the sum of single-precision floating-point strided array elements.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = ssum( x.length, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = ssum( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = ssum( 4, x1, 2 );
// returns 5.0
```

#### ssum.ndarray( N, x, strideX, offsetX )

Computes the sum of single-precision floating-point strided array elements using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var v = ssum.ndarray( x.length, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other element starting from the second element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = ssum.ndarray( 4, x, 2, 1 );
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
var ssum = require( '@stdlib/blas/ext/base/ssum' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var v = ssum( x.length, x, 1 );
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
#include "stdlib/blas/ext/base/ssum.h"
```

#### stdlib_strided_ssum( N, \*X, strideX )

Computes the sum of single-precision floating-point strided array elements.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

float v = stdlib_strided_ssum( 4, x, 1 );
// returns 10.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
float stdlib_strided_ssum( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_ssum_ndarray( N, \*X, strideX, offsetX )

Computes the sum of single-precision floating-point strided array elements using alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

float v = stdlib_strided_ssum_ndarray( 4, x, 1, 0 );
// returns 10.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
float stdlib_strided_ssum_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/ssum.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of elements:
    const int N = 4;

    // Specify the stride length:
    const int strideX = 2;

    // Compute the sum:
    float v = stdlib_strided_ssum( N, x, strideX );

    // Print the result:
    printf( "Sum: %f\n", v );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dsum`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/stats/base/smean`][@stdlib/stats/base/smean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of a single-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/snansum`][@stdlib/blas/ext/base/snansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsum`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsum

[@stdlib/stats/base/smean]: https://github.com/stdlib-js/stats-base-smean

[@stdlib/blas/ext/base/snansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansum

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsum

<!-- </related-links> -->

</section>

<!-- /.links -->
