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

# zdrot

> Apply a plane rotation.

<section class="usage">

## Usage

```javascript
var zdrot = require( '@stdlib/blas/base/zdrot' );
```

#### zdrot( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot( x.length, x, 1, y, 1, 0.8, 0.6 );
// x => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// y => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine how values from `x` and `y` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot( 2, x, 2, y, 2, 0.8, 0.6 );
// x => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// y => <Complex128Array>[ ~-0.6, ~-1.2, 0.0, 0.0, -3.0, ~-3.6, 0.0, 0.0 ]
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

zdrot( 2, x1, -2, y1, 1, 0.8, 0.6 );
// x0 => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// y0 => <Complex128Array>[ 0.0, 0.0, 0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### zdrot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6 );
// x => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// y => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( 2, x, 2, 1, y, 2, 1, 0.8, 0.6 );
// x => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// y => <Complex128Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `zdrot()` corresponds to the [BLAS][blas] level 1 function [`zdrot`][zdrot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zcopy = require( '@stdlib/blas/base/zcopy' );
var zeros = require( '@stdlib/array/zeros' );
var logEach = require( '@stdlib/console/log-each' );
var zdrot = require( '@stdlib/blas/base/zdrot' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var x = filledarrayBy( 10, 'complex128', rand );
var xc = zcopy( x.length, x, 1, zeros( x.length, 'complex128' ), 1 );

var y = filledarrayBy( 10, 'complex128', rand );
var yc = zcopy( y.length, y, 1, zeros( y.length, 'complex128' ), 1 );

// Apply a plane rotation:
zdrot( x.length, x, 1, y, 1, 0.8, 0.6 );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', xc, yc, x, y );
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
#include "stdlib/blas/base/zdrot.h"
```

#### c_zdrot( N, \*X, strideX, \*Y, strideY, c, s )

Applies a plane rotation.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 5.0, 6.0, 7.0, 8.0 };

c_zdrot( 2, (void *)x, 1, (void *)y, 1, 0.8, 0.6 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **c**: `[in] double` cosine of the angle of rotation.
-   **s**: `[in] double` sine of the angle of rotation.

```c
void c_zdrot( const CBLAS_INT N, void *X, const CBLAS_INT strideX, void *Y, const CBLAS_INT strideY, const double c, const double s );
```

#### c_zdrot_ndarray( N, \*X, strideX, offsetX, \*Y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 }; // interleaved real and imaginary components
double y[] = { 5.0, 6.0, 7.0, 8.0 };

c_zdrot_ndarray( 2, (void *)x, 1, 0, (void *)y, 1, 0, 0.8, 0.6 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] void*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] void*` second input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.
-   **c**: `[in] double` cosine of the angle of rotation.
-   **s**: `[in] double` sine of the angle of rotation.

```c
void c_zdrot_ndarray( const CBLAS_INT N, void *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, void *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, const double c, const double s );
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
#include "stdlib/blas/base/zdrot.h"
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

    // Copy elements:
    c_zdrot( N, (void *)x, strideX, (void *)y, strideY, 0.8, 0.6 );

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

[zdrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
