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

# cfill

> Fill a single-precision complex floating-point strided array with a specified scalar constant.

<section class="usage">

## Usage

```javascript
var cfill = require( '@stdlib/blas/ext/base/cfill' );
```

#### cfill( N, alpha, x, strideX )

Fills a single-precision complex floating-point strided array `x` with a specified scalar constant `alpha`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill( x.length, alpha, x, 1 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Complex64Array`][@stdlib/array/complex64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill( 2, alpha, x, 2 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0

y = x.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 3.0

im = imagf( y );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

// Create the underlying floating-point array:
var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Initial array:
var x0 = new Complex64Array( arr );

// Create an offset view:
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Define a scalar constant:
var alpha = new Complex64( 10.0, 10.0 );

// Fill every other element:
cfill( 2, alpha, x1, 2 );

var y = x0.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 1.0

var im = imagf( y );
// returns 2.0

y = x0.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0
```

#### cfill.ndarray( N, alpha, x, strideX, offsetX )

Fills a single-precision complex floating-point strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill.ndarray( x.length, alpha, x, 1, 0 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 10.0

var im = imagf( y );
// returns 10.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last two elements of the strided array:

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var arr = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Complex64Array( arr );

var alpha = new Complex64( 10.0, 10.0 );

cfill.ndarray( 2, alpha, x, 1, x.length-2 );

var y = x.get( 0 );
// returns <Complex64>

var re = realf( y );
// returns 1.0

var im = imagf( y );
// returns 2.0

y = x.get( 1 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0

y = x.get( 2 );
// returns <Complex64>

re = realf( y );
// returns 10.0

im = imagf( y );
// returns 10.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cfill = require( '@stdlib/blas/ext/base/cfill' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float32'
});
var x = new Complex64Array( xbuf.buffer );
var alpha = new Complex64( 10.0, 10.0 );

cfill( x.length, alpha, x, 1 );
console.log( x.get( 0 ).toString() );
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
#include "stdlib/blas/ext/base/cfill.h"
```

#### stdlib_strided_cfill( N, alpha, \*X, strideX )

Fills a single-precision complex floating-point strided array `X` with a specified scalar constant `alpha`.

```c
#include "stdlib/complex/float32/ctor.h"

float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

stdlib_strided_cfill( 2, alpha, (stdlib_complex64_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex64_t` scalar constant.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
void stdlib_strided_cfill( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_cfill_ndarray( N, alpha, \*X, strideX, offsetX )

Fills a single-precision complex floating-point strided array `X` with a specified scalar constant `alpha` using alternative indexing semantics.

```c
#include "stdlib/complex/float32/ctor.h"

float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

stdlib_strided_cfill_ndarray( 4, alpha, (stdlib_complex64_t *x), 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex64_t` scalar constant.
-   **X**: `[out] stdlib_complex64_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void stdlib_strided_cfill_ndarray( const CBLAS_INT N, const stdlib_complex64_t alpha, stdlib_complex64_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/cfill.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array of interleaved real and imaginary components:
    float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Create a complex scalar:
    const stdlib_complex64_t alpha = stdlib_complex64( 2.0f, 2.0f );

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify a stride:
    const int strideX = 1;

    // Fill the array:
    stdlib_strided_cfill( N, alpha, (stdlib_complex64_t *)x, strideX );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %f + %fj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
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

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
