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

# ssort2ins

> Simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.

<section class="usage">

## Usage

```javascript
var ssort2ins = require( '@stdlib/blas/ext/base/ssort2ins' );
```

#### ssort2ins( N, order, x, strideX, y, strideY )

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins( x.length, 1.0, x, 1, y, 1 );

console.log( x );
// => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array `x` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `x` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **x**: first input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to sort every other element:

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins( 2, -1.0, x, 2, y, 2 );

console.log( x );
// => <Float32Array>[ 3.0, -2.0, 1.0, -4.0 ]

console.log( y );
// => <Float32Array>[ 2.0, 1.0, 0.0, 3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sort every other element...
ssort2ins( 2, -1.0, x1, 2, y1, 2 );

console.log( x0 );
// => <Float32Array>[ 1.0, 4.0, 3.0, 2.0 ]

console.log( y0 );
// => <Float32Array>[ 0.0, 3.0, 2.0, 1.0 ]
```

#### ssort2ins.ndarray( N, order, x, strideX, offsetX, y, strideY, offsetY )

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array the strided array using insertion sort and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );

ssort2ins.ndarray( x.length, 1.0, x, 1, 0, y, 1, 0 );

console.log( x );
// => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float32Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

ssort2ins.ndarray( 3, 1.0, x, 1, x.length-3, y, 1, y.length-3 );

console.log( x );
// => <Float32Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]

console.log( y );
// => <Float32Array>[ 0.0, 1.0, 2.0, 5.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions leave `x` and `y` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided arrays are sorted **in-place** (i.e., the input strided arrays are **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ssort2ins = require( '@stdlib/blas/ext/base/ssort2ins' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
var y = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});

console.log( x );
console.log( y );

ssort2ins( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

* * *

<!-- C interface documentation. -->

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
#include "stdlib/blas/ext/base/ssort2ins.h"
```

#### stdlib_strided_ssort2ins( N, order, \*X, strideX, \*Y, strideY )

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.

```c
float x[] = { 1.0f, -2.0f, 3.0f, -4.0f };
float y[] = { 0.0f, 1.0f, 2.0f, 3.0f };

stdlib_strided_ssort2ins( 4, 1.0f, x, 1, y, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **order**: `[in] float` sort order. If `order < 0.0`, the input strided array `X` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `X` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **X**: `[inout] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[inout] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
stdlib_strided_ssort2ins( const CBLAS_INT N, const float order, float *X, const CBLAS_INT strideX, float *Y, const CBLAS_INT strideY );
```

<!--lint disable maximum-heading-length-->

#### stdlib_strided_ssort2ins_ndarray( N, order, \*X, strideX, offsetX, \*Y, strideY, offsetY )

<!--lint enable maximum-heading-length-->

Simultaneously sorts two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort and alternative indexing semantics.

```c
float x[] = { 1.0f, -2.0f, 3.0f, -4.0f };
float y[] = { 0.0f, 1.0f, 2.0f, 3.0f };

stdlib_strided_ssort2ins_ndarray( 4, 1.0f, x, 1, 0, y, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **order**: `[in] float` sort order. If `order < 0.0`, the input strided array `X` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `X` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **X**: `[inout] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[inout] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **offsetY**: `[in] CBLAS_INT` starting index for `Y`.

```c
stdlib_strided_ssort2ins_ndarray( const CBLAS_INT N, const float order, float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY );
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
#include "stdlib/blas/ext/base/ssort2ins.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };
    float y[] = { 0.0f, 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f };

    // Specify the number of elements:
    int N = 8;

    // Specify the strides:
    int strideX = 1;
    int strideY = 1;

    // Sort the arrays:
    stdlib_strided_ssort2ins( N, 1.0f, x, strideX, y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "x[ %i ] = %f\n", i, x[ i ] );
        printf( "y[ %i ] = %f\n", i, y[ i ] );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dsort2ins`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsort2ins`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssortins`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsort2ins

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2ins

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssortins

<!-- </related-links> -->

</section>

<!-- /.links -->
