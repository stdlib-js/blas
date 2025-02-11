<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# dswap

> Interchange two double-precision floating-point vectors.

<section class="usage">

## Usage

```javascript
var dswap = require( '@stdlib/blas/base/dswap' );
```

#### dswap( N, x, strideX, y, strideY )

Interchanges vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

dswap( x.length, x, 1, y, 1 );
// x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float64Array`][mdn-float64array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float64Array`][mdn-float64array].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to swap in reverse order every other value in `x` with the first `N` elements of `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

dswap( 3, x, -2, y, 1 );
// x => <Float64Array>[ 9.0, 2.0, 8.0, 4.0, 7.0, 6.0 ]
// y => <Float64Array>[ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ]
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

// Swap in reverse order every other value from `x1` with `y1`...
dswap( 3, x1, -2, y1, 1 );
// x0 => <Float64Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

#### dswap.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Interchanges vectors `x` and `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

dswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
// x => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
// y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to swap every other value in `x` starting from the second value with the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

dswap.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// x => <Float64Array>[ 1.0, 12.0, 3.0, 11.0, 5.0, 10.0 ]
// y => <Float64Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `dswap()` corresponds to the [BLAS][blas] level 1 function [`dswap`][dswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dswap = require( '@stdlib/blas/base/dswap' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

// Swap elements in `x` and `y` starting from the end of `y`:
dswap( x.length, x, 1, y, -1 );
console.log( x );
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
#include "stdlib/blas/base/dswap.h"
```

#### c_dswap( N, \*X, strideX, \*Y, strideY )

Interchanges two double-precision floating-point vectors.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };
double y[] = { 6.0, 7.0, 8.0, 9.0, 10.0 };

c_dswap( 5, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[inout] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.

```c
void c_dswap( const CBLAS_INT N, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY );
```

#### c_dswap_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY )

Interchanges two double-precision floating-point vectors using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };
double y[] = { 6.0, 7.0, 8.0, 9.0, 10.0 };

c_dswap_ndarray( 3, x, 1, 2, y, 1, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] double*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
void c_dswap_ndarray( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/base/dswap.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify stride lengths:
    const int strideX = 2;
    const int strideY = -2;

    // Interchange elements:
    c_dswap( N, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
        printf( "y[ %i ] = %lf\n", i, y[ i ] );
    }

    // Interchange elements:
    c_dswap_ndarray( N, x, strideX, 0, y, strideY, 6 );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %lf\n", i, x[ i ] );
        printf( "y[ %i ] = %lf\n", i, y[ i ] );
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

-   <span class="package-name">[`@stdlib/blas/base/dcopy`][@stdlib/blas/base/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from x into y.</span>
-   <span class="package-name">[`@stdlib/blas/base/gswap`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/sswap`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/dswap`][@stdlib/blas/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[dswap]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas/tree/main/base/dcopy

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas/tree/main/base/gswap

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas/tree/main/base/sswap

[@stdlib/blas/dswap]: https://github.com/stdlib-js/blas/tree/main/dswap

<!-- </related-links> -->

</section>

<!-- /.links -->
