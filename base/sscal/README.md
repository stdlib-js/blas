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

# sscal

> Multiply a single-precision floating-point vector `x` by a constant `alpha`.

<section class="usage">

## Usage

```javascript
var sscal = require( '@stdlib/blas/base/sscal' );
```

#### sscal( N, alpha, x, stride )

Multiplies a single-precision floating-point vector `x` by a constant `alpha`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal( x.length, 5.0, x, 1 );
// x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to multiply every other value by a constant

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal( 4, 5.0, x, 2 );
// x => <Float32Array>[ -10.0, 1.0, 15.0, -5.0, 20.0, 0.0, -5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every other value:
sscal( 3, 5.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, -10.0, 3.0, -20.0, 5.0, -30.0 ]
```

If either `N` or `stride` is less than or equal to `0`, the function returns `x` unchanged.

#### sscal.ndarray( N, alpha, x, stride, offset )

Multiplies a single-precision floating-point vector `x` by a constant `alpha` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sscal.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float32Array>[ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to multiply the last three elements of `x` by a constant

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

sscal.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `sscal()` corresponds to the [BLAS][blas] level 1 function [`sscal`][sscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sscal = require( '@stdlib/blas/base/sscal' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

sscal( x.length, 5.0, x, 1 );
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
#include "stdlib/blas/base/sscal.h"
```

#### c_sscal( N, alpha, \*X, stride )

Multiplies each element of a single-precision floating-point vector by a constant.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

c_sscal( 4, 5.0f, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[inout] float*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.

```c
void c_sscal( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT stride );
```

#### c_sscal_ndarray( N, alpha, \*X, stride, offset )

Multiplies each element of a single-precision floating-point vector by a constant using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

c_sscal_ndarray( 4, 5.0f, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[inout] float*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.
-   **offset**: `[in] CBLAS_INT` starting index for `X`.

```c
void c_sscal_ndarray( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT stride, const CBLAS_INT offset );
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
#include "stdlib/blas/base/sscal.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int stride = 1;

    // Scale the vector:
    c_sscal( N, 5.0f, x, stride );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %f\n", i, x[ i ] );
    }

    // Scale the vector using alternative indexing semantics:
    c_sscal_ndarray( N, 5.0f, x, -stride, N-1 );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %f\n", i, x[ i ] );
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
-   <span class="package-name">[`@stdlib/blas/base/dscal`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas/base/gscal`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector by a scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/base/saxpy`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[sscal]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas/tree/main/base/dscal

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas/tree/main/base/gscal

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas/tree/main/base/saxpy

<!-- </related-links> -->

</section>

<!-- /.links -->
