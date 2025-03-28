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

# zfill

> Fill a double-precision complex floating-point strided array with a specified scalar constant.

<section class="usage">

## Usage

```javascript
var zfill = require( '@stdlib/blas/ext/base/zfill' );
```

#### zfill( N, alpha, x, strideX )

Fills a double-precision complex floating-point strided array `x` with a specified scalar constant `alpha`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex128Array( arr );

var alpha = new Complex128( 10.0, 10.0 );

zfill( x.length, alpha, x, 1 );

var y = x.get( 0 );
// returns <Complex128>

var re = real( y );
// returns 10.0

var im = imag( y );
// returns 10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex128Array( arr );

var alpha = new Complex128( 10.0, 10.0 );

zfill( 2, alpha, x, 2 );

var y = x.get( 0 );
// returns <Complex128>

var re = real( y );
// returns 10.0

var im = imag( y );
// returns 10.0

y = x.get( 1 );
// returns <Complex128>

re = real( y );
// returns 3.0

im = imag( y );
// returns 4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

// Create the underlying floating-point array:
var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Initial array:
var x0 = new Complex128Array( arr );

// Create an offset view:
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Define a scalar constant:
var alpha = new Complex128( 10.0, 10.0 );

// Fill every other element:
zfill( 2, alpha, x1, 2 );

var y = x0.get( 0 );
// returns <Complex128>

var re = real( y );
// returns 1.0

var im = imag( y );
// returns 2.0

y = x0.get( 1 );
// returns <Complex128>

re = real( y );
// returns 10.0

im = imag( y );
// returns 10.0
```

#### zfill.ndarray( N, alpha, x, strideX, offsetX )

Fills a double-precision complex floating-point strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var x = new Complex128Array( arr );

var alpha = new Complex128( 10.0, 10.0 );

zfill.ndarray( x.length, alpha, x, 1, 0 );

var y = x.get( 0 );
// returns <Complex128>

var re = real( y );
// returns 10.0

var im = imag( y );
// returns 10.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last two elements of the strided array

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var arr = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Complex128Array( arr );

var alpha = new Complex128( 10.0, 10.0 );

zfill.ndarray( 2, alpha, x, 1, x.length-2 );

var y = x.get( 0 );
// returns <Complex128>

var re = real( y );
// returns 1.0

var im = imag( y );
// returns 2.0

y = x.get( 1 );
// returns <Complex128>

re = real( y );
// returns 10.0

im = imag( y );
// returns 10.0

y = x.get( 2 );
// returns <Complex128>

re = real( y );
// returns 10.0

im = imag( y );
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex128Array = require( '@stdlib/array/complex128' );
var zfill = require( '@stdlib/blas/ext/base/zfill' );

var xbuf = discreteUniform( 20, -100, 100, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
var alpha = new Complex128( 10.0, 10.0 );

zfill( x.length, alpha, x, 1 );
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
#include "stdlib/blas/ext/base/zfill.h"
```

#### stdlib_strided_zfill( N, alpha, \*X, strideX )

Fills a double-precision complex floating-point strided array `X` with a specified scalar constant `alpha`.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

stdlib_strided_zfill( 2, alpha, (stdlib_complex128_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[out] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
void stdlib_strided_zfill( const CBLAS_INT N, const stdlib_complex128_t alpha, stdlib_complex128_t *X, const CBLAS_INT strideX );
```

#### stdlib_strided_zfill_ndarray( N, alpha, \*X, strideX, offsetX )

Fills a double-precision complex floating-point strided array `X` with a specified scalar constant `alpha` using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };
const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

stdlib_strided_zfill_ndarray( 4, alpha, (stdlib_complex128_t *x), 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] stdlib_complex128_t` scalar constant.
-   **X**: `[out] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void stdlib_strided_zfill_ndarray( const CBLAS_INT N, const stdlib_complex128_t alpha, stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/blas/ext/base/zfill.h"
#include <stdio.h>

int main() {
    // Create a strided array of interleaved real and imaginary components:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };

    // Create a scalar constant:
    const stdlib_complex128_t alpha = stdlib_complex128( 2.0, 2.0 );

    // Specify the number of elements:
    const int N = 4;

    // Specify a stride:
    const int strideX = 1;

    // Fill the array:
    stdlib_strided_zfill( N, alpha, (stdlib_complex128_t *)x, strideX );

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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
