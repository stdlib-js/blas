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

# ssyr

> Perform the symmetric rank 1 operation `A = α*x*x^T + A`.

<section class="usage">

## Usage

```javascript
var ssyr = require( '@stdlib/blas/base/ssyr' );
```

#### ssyr( order, uplo, N, α, x, sx, A, LDA )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
// A => <Float32Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **sx**: stride length for `x`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

ssyr( 'row-major', 'upper', 3, 1.0, x, -1, A, 3 );
// A => <Float32Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 3.0, 2.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ssyr( 'row-major', 'upper', 3, 1.0, x1, -1, A, 3 );
// A => <Float32Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

#### ssyr.ndarray( uplo, N, α, x, sx, ox, A, sa1, sa2, oa )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

ssyr.ndarray( 'upper', 3, 1.0, x, -2, 4, A, 3, 1, 0 );
// A => <Float32Array>[ 26.0, 17.0, 8.0, 2.0, 10.0, 5.0, 3.0, 2.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `ssyr()` corresponds to the [BLAS][blas] level 2 function [`ssyr`][blas-ssyr].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ones = require( '@stdlib/array/ones' );
var ssyr = require( '@stdlib/blas/base/ssyr' );

var opts = {
    'dtype': 'float32'
};

var N = 3;

// Create N-by-N symmetric matrices:
var A1 = ones( N*N, opts.dtype );
var A2 = ones( N*N, opts.dtype );

// Create a random vector:
var x = discreteUniform( N, -10.0, 10.0, opts );

ssyr( 'row-major', 'upper', 3, 1.0, x, 1, A1, 3 );
console.log( A1 );

ssyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A2, 3, 1, 0 );
console.log( A2 );
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
#include "stdlib/blas/base/ssyr.h"
```

#### c_ssyr( layout, uplo, N, alpha, \*X, sx, \*A, LDA )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[] = { 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 };
const float x[] = { 1.0, 2.0, 3.0 };

c_ssyr( CblasColMajor, CblasUpper, 3, 1.0, x, 1, A, 3 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` input array.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **A**: `[inout] float*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

```c
void c_ssyr( const CBLAS_LAYOUT layout, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, float *A, const CBLAS_INT LDA )
```

#### c_ssyr_ndarray( uplo, N, alpha, \*X, sx, ox, \*A, sa1, sa2, oa )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[] = { 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 };
const float x[] = { 1.0, 2.0, 3.0 };

c_ssyr_ndarray( CblasUpper, 3, 1.0, x, 1, 0, A, 3, 1, 0 );
```

The function accepts the following arguments:

-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` input array.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **ox**: `[in] CBLAS_INT` starting index for `X`.
-   **A**: `[inout] float*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.

```c
void c_ssyr_ndarray( const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA )
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
#include "stdlib/blas/base/ssyr.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define 3x3 symmetric matrices stored in row-major layout:
    float A1[ 3*3 ] = {
        1.0f, 2.0f, 3.0f,
        2.0f, 1.0f, 2.0f,
        3.0f, 2.0f, 1.0f
    };

    float A2[ 3*3 ] = {
        1.0f, 2.0f, 3.0f,
        2.0f, 1.0f, 2.0f,
        3.0f, 2.0f, 1.0f
    };

    // Define a vector:
    const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };

    // Specify the number of elements along each dimension of `A1` and `A2`:
    const int N = 3;

    // Perform the symmetric rank 1 operation `A = α*x*x^T + A`:
    c_ssyr( CblasColMajor, CblasUpper, N, 1.0f, x, 1, A1, N );

    // Print the result:
    for ( int i = 0; i < N*N; i++ ) {
        printf( "A1[ %i ] = %f\n", i, A1[ i ] );
    }

    // Perform the symmetric rank 1 operation `A = α*x*x^T + A` using alternative indexing semantics:
    c_ssyr_ndarray( CblasUpper, N, 1.0, x, 1, 0, A2, N, 1, 0 );

    // Print the result:
    for ( int i = 0; i < N*N; i++ ) {
        printf( "A2[ %i ] = %f\n", i, A[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[blas-ssyr]: https://www.netlib.org/lapack/explore-html-3.6.1/d6/d30/group__single__blas__level2_ga7b8a99048765ed2bf7c1e770bff0b622.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
