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

# dfill

> Fill a double-precision floating-point strided array with a specified scalar constant.

<section class="usage">

## Usage

```javascript
var dfill = require( '@stdlib/blas/ext/base/dfill' );
```

#### dfill( N, alpha, x, strideX )

Fills a double-precision floating-point strided array with a specified scalar constant.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dfill( x.length, 5.0, x, 1 );
// x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dfill( 4, 5.0, x, 2 );
// x => <Float64Array>[ 5.0, 1.0, 5.0, -5.0, 5.0, 0.0, 5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
dfill( 3, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 5.0, 3.0, 5.0, 5.0, 5.0 ]
```

#### dfill.ndarray( N, alpha, x, strideX, offsetX )

Fills a double-precision floating-point strided array with a specified scalar constant using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

dfill.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float64Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

dfill.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, 5.0, 5.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dfill = require( '@stdlib/blas/ext/base/dfill' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

dfill( x.length, 5.0, x, 1 );
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
#include "stdlib/blas/ext/base/dfill.h"
```

#### stdlib_strided_dfill( N, alpha, \*X, strideX )

Fills a double-precision floating-point strided array with a specified scalar constant.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

stdlib_strided_dfill( 4, 5.0, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[out] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
void stdlib_strided_dfill( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_dfill_ndarray( N, alpha, \*X, strideX, offsetX )

Fills a double-precision floating-point strided array with a specified scalar constant using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

stdlib_strided_dfill_ndarray( 4, 5.0, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[out] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
void stdlib_strided_dfill_ndarray( const CBLAS_INT N, const double alpha, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/dfill.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Fill the array:
    stdlib_strided_dfill( N, 5.0, x, strideX );

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

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sfill`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/gfill

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/sfill

<!-- </related-links> -->

</section>

<!-- /.links -->
