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

# isamax

> Find the index of the first element having the maximum absolute value.

<section class="usage">

## Usage

```javascript
var isamax = require( '@stdlib/blas/base/isamax' );
```

#### isamax( N, x, strideX )

Finds the index of the first element having the maximum absolute value.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var idx = isamax( x.length, x, 1 );
// returns 3
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.

The `N` and `strideX` parameters determine which elements in `x` are accessed at runtime. For example, to traverse every other value,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var idx = isamax( 4, x, 2 );
// returns 2
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Find index of element having the maximum absolute value:
var idx = isamax( 3, x1, 2 );
// returns 2
```

#### isamax.ndarray( N, x, strideX, offset )

Finds the index of the first element having the maximum absolute value using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var idx = isamax.ndarray( x.length, x, 1, 0 );
// returns 3
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to start from the second index,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var idx = isamax.ndarray( 5, x, 1, 1 );
// returns 4
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N < 1`, both functions return `-1`.
-   `isamax()` corresponds to the [BLAS][blas] level 1 function [`isamax`][isamax].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isamax = require( '@stdlib/blas/base/isamax' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

var idx = isamax( x.length, x, 1 );
console.log( idx );
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
#include "stdlib/blas/base/isamax.h"
```

#### c_isamax( N, \*X, strideX )

Finds the index of the first element having the maximum absolute value.

```c
const float x[] = { 4.0f, 2.0f, -3.0f, 5.0f, -1.0f };

int idx = c_isamax( 5, x, 1 );
// returns 3
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.

```c
CBLAS_INT c_isamax( const CBLAS_INT N, const float *X, const CBLAS_INT strideX );
```

#### c_isamax_ndarray( N, \*X, strideX, offsetX )

Finds the index of the first element having the maximum absolute value using alternative indexing semantics.

```c
const float x[] = { 4.0f, 2.0f, -3.0f, 5.0f, -1.0f };

int idx = c_isamax_ndarray( 5, x, 1, 0 );
// returns 3
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.

```c
CBLAS_INT c_isamax_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/base/isamax.h"
#include <stdio.h>

int main( void ) {
    // Create strided array:
    const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of elements:
    const int N = 8;

    // Specify stride:
    const int strideX = 1;

    // Compute the index of the maximum absolute value:
    int idx = c_isamax( N, x, strideX );

    // Print the result:
    printf( "index value: %d\n", idx );

    // Compute the index of the maximum absolute value:
    idx = c_isamax_ndarray( N, x, -strideX, N-1 );

    // Print the result:
    printf( "index value: %d\n", idx );
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

[isamax]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
