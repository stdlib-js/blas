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

# drev

> Reverse a double-precision floating-point strided array in-place.

<section class="usage">

## Usage

```javascript
var drev = require( '@stdlib/blas/ext/base/drev' );
```

#### drev( N, x, strideX )

Reverses a double-precision floating-point strided array `x` in-place.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev( x.length, x, 1 );
// x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to reverse every other element:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev( 4, x, 2 );
// x => <Float64Array>[ -1.0, 1.0, 4.0, -5.0, 3.0, 0.0, -2.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Reverse every other element...
drev( 3, x1, 2 );
// x0 => <Float64Array>[ 1.0, -6.0, 3.0, -4.0, 5.0, -2.0 ]
```

#### drev.ndarray( N, x, strideX, offsetX )

Reverses a double-precision floating-point strided array `x` in-place using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

drev.ndarray( x.length, x, 1, 0 );
// x => <Float64Array>[ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array:

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

drev.ndarray( 3, x, 1, x.length-3 );
// x => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.
-   Where possible, one should "reverse" a strided array by negating its stride, which is an `O(1)` operation, in contrast to performing an in-place reversal, which is `O(N)`. However, in certain circumstances, this is not tenable, particularly when interfacing with libraries which assume and/or expect a specific memory layout (e.g., strided array elements arranged in memory in ascending order). In general, when working with strided arrays, only perform an in-place reversal when strictly necessary.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var drev = require( '@stdlib/blas/ext/base/drev' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

drev( x.length, x, 1 );
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
#include "stdlib/blas/ext/base/drev.h"
```

#### stdlib_strided_drev( N, \*X, strideX )

Reverses a double-precision floating-point strided array `X` in-place.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

stdlib_strided_drev( 4, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.

```c
double stdlib_strided_drev( const CBLAS_INT N, double *X, const CBLAS_INT strideX );
```

#### stdlib_strided_drev_ndarray( N, \*X, strideX, offsetX )

Reverses a double-precision floating-point strided array `X` in-place using alternative indexing semantics.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0 };

stdlib_strided_drev_ndarray( 4, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] double*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
void stdlib_strided_drev_ndarray( const CBLAS_INT N, double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/drev.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    double x[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Reverse the array:
    stdlib_strided_drev( N, x, strideX );

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

-   <span class="package-name">[`@stdlib/blas/ext/base/grev`][@stdlib/blas/ext/base/grev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/srev`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/grev]: https://github.com/stdlib-js/blas/tree/main/ext/base/grev

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas/tree/main/ext/base/srev

<!-- </related-links> -->

</section>

<!-- /.links -->
