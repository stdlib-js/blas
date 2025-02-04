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

# sapx

> Add a scalar constant to each element in a single-precision floating-point strided array.

<section class="usage">

## Usage

```javascript
var sapx = require( '@stdlib/blas/ext/base/sapx' );
```

#### sapx( N, alpha, x, strideX )

Adds a scalar constant to each element in a single-precision floating-point strided array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sapx( x.length, 5.0, x, 1 );
// x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to add a constant to every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sapx( 4, 5.0, x, 2 );
// x => <Float32Array>[ 3.0, 1.0, 8.0, -5.0, 9.0, 0.0, 4.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array...
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Add a constant to every other element...
sapx( 3, 5.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, 3.0, 3.0, 1.0, 5.0, -1.0 ]
```

#### sapx.ndarray( N, alpha, x, strideX, offsetX )

Adds a scalar constant to each element in a single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sapx.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float32Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

sapx.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the input array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sapx = require( '@stdlib/blas/ext/base/sapx' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

sapx( x.length, 5.0, x, 1 );
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
#include "stdlib/blas/ext/base/sapx.h"
```

#### stdlib_strided_sapx( N, alpha, \*X, strideX )

Adds a scalar constant to each element in a single-precision floating-point strided array.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

stdlib_strided_sapx( 4, 5.0f, x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[inout] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
void stdlib_strided_sapx( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_sapx_ndarray( N, alpha, \*X, strideX, offsetX )

Adds a scalar constant to each element in a single-precision floating-point strided array using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

stdlib_strided_sapx_ndarray( 4, 5.0f, x, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[inout] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
void stdlib_strided_sapx_ndarray( const CBLAS_INT N, const float alpha, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
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
#include "stdlib/blas/ext/base/sapx.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Add a constant to each element:
    stdlib_strided_sapx( N, 5.0f, x, strideX );

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

-   <span class="package-name">[`@stdlib/blas/ext/base/dapx`][@stdlib/blas/ext/base/dapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapx`][@stdlib/blas/ext/base/gapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapx]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapx

[@stdlib/blas/ext/base/gapx]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapx

<!-- </related-links> -->

</section>

<!-- /.links -->
