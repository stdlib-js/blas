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

# zswap

> Interchange two complex double-precision floating-point vectors.

<section class="intro">

This BLAS level 1 routine interchanges complex double-precision floating-point vectors `x` and `y`. The operation is performed in-place, with `x` being overwritten with the values from `y`, and `y` being overwritten with the values from `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zswap = require( '@stdlib/blas/base/zswap' );
```

#### zswap( N, x, strideX, y, strideY )

Interchanges two complex double-precision floating-point vectors.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap( x.length, x, 1, y, 1 );
// x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
// y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` are interchanged with values from `y`. For example, to interchange in reverse order every other value in `x` into the first `N` elements of `y`,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap( 2, x, -2, y, 1 );
// x => <Complex128Array>[ 0.0, 0.0, 3.0, 4.0, 0.0, 0.0, 7.0, 8.0 ]
// y => <Complex128Array>[ 5.0, 6.0, 1.0, 2.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

// Initial arrays...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

// Interchange in reverse order every other value from `x1` into `y1`...
zswap( 2, x1, -2, y1, 1 );
// x0 => <Complex128Array>[ 1.0, 2.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0 ]
// y0 => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ]
```

#### zswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
// x => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
// y => <Complex128Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to interchange every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`, and so on,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zswap.ndarray( 2, x, 2, 1, y, -1, y.length-1 );
// x => <Complex128Array>[ 1.0, 2.0, 0.0, 0.0, 5.0, 6.0, 0.0, 0.0 ]
// y => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, 7.0, 8.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `zswap()` corresponds to the [BLAS][blas] level 1 function [`zswap`][zswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zswap = require( '@stdlib/blas/base/zswap' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var x = filledarrayBy( 10, 'complex128', rand );
console.log( x.get( 0 ).toString() );

var y = filledarrayBy( 10, 'complex128', rand );
console.log( y.get( 0 ).toString() );

// Swap elements in `x` into `y` starting from the end of `y`:
zswap( x.length, x, 1, y, -1 );
console.log( x.get( x.length-1 ).toString() );
console.log( y.get( y.length-1 ).toString() );
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
#include "stdlib/blas/base/zswap.h"
```

#### c_zswap( N, \*X, strideX, \*Y, strideY )

Interchanges two complex double-precision floating-point vectors.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 5.0, 6.0, 7.0, 8.0 };

c_zswap( 2, (void *)x, 1, (void *)y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.

```c
void c_zswap( const CBLAS_INT N, void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY );
```

#### c_zswap_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

Interchanges two complex double-precision floating-point vectors using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 5.0, 6.0, 7.0, 8.0 };

c_zswap_ndarray( 2, (void *)x, 1, 0, (void *)y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void c_zswap_ndarray( const CBLAS_INT N, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/base/zswap.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = -1;

    // Swap elements:
    c_zswap( N, (void *)x, strideX, (void *)y, strideY );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %lf + %lfj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
        printf( "y[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
    }

    // Swap elements using alternative indexing semantics:
    c_zswap_ndarray( N, (void *)x, -strideX, N-1, (void *)y, strideY, N-1 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "x[ %i ] = %lf + %lfj\n", i, x[ i*2 ], x[ (i*2)+1 ] );
        printf( "y[ %i ] = %lf + %lfj\n", i, y[ i*2 ], y[ (i*2)+1 ] );
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

[zswap]: https://netlib.org/lapack/explore-html-3.6.1/d2/df9/group__complex16__blas__level1_ga13a187010a0cae1fef2820072404e857.html#ga13a187010a0cae1fef2820072404e857

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
