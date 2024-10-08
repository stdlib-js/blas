<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# sasum

> Compute the sum of [absolute values][@stdlib/math/base/special/abs] ([_L1_ norm][l1norm]).

<section class="intro">

The [_L1_ norm][l1norm] is defined as

<!-- <equation class="equation" label="eq:l1norm" align="center" raw="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" alt="L1 norm definition."> -->

```math
\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert
```

<!-- <div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_1 = \sum_{i=0}^{n-1} \vert x_i \vert" data-equation="eq:l1norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@c403cb0cbb15d9b7b453e3cea34ca2379500ddd4/lib/node_modules/@stdlib/blas/base/sasum/docs/img/equation_l1norm.svg" alt="L1 norm definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sasum = require( '@stdlib/blas/base/sasum' );
```

#### sasum( N, x, stride )

Computes the sum of [absolute values][@stdlib/math/base/special/abs].

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = sasum( x.length, x, 1 );
// returns 19.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are used to compute the sum. For example, to sum every other value,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = sasum( 4, x, 2 );
// returns 10.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array:
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sum every other value:
var sum = sasum( 3, x1, 2 );
// returns 12.0
```

If either `N` is less than or equal to `0`, the function returns `0`.

#### sasum.ndarray( N, x, stride, offset )

Computes the sum of [absolute values][@stdlib/math/base/special/abs] using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var sum = sasum.ndarray( x.length, x, 1, 0 );
// returns 19.0
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the `offset` parameter supports indexing semantics based on a starting index. For example, to sum the last three elements,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

var sum = sasum.ndarray( 3, x, 1, x.length-3 );
// returns 15.0

// Using a negative stride to sum from the last element:
sum = sasum.ndarray( 3, x, -1, x.length-1 );
// returns 15.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0`.
-   `sasum()` corresponds to the [BLAS][blas] level 1 function [`sasum`][sasum].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sasum = require( '@stdlib/blas/base/sasum' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

var out = sasum( x.length, x, 1 );
console.log( out );
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
#include "stdlib/blas/base/sasum.h"
```

#### c_sasum( N, \*X, stride )

Computes the sum of [absolute values][@stdlib/math/base/special/abs].

```c
const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

float sum = c_sasum( 8, x, 1 );
// returns 36.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.

```c
float c_sasum( const CBLAS_INT N, const float *X, const CBLAS_INT stride );
```

#### c_sasum_ndarray( N, \*X, stride, offset )

Computes the sum of [absolute values][@stdlib/math/base/special/abs] using alternative indexing semantics.

```c
const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

float sum = c_sasum_ndarray( 8, x, -1, 7 );
// returns 36.0f
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **stride**: `[in] CBLAS_INT` index increment for `X`.
-   **offset**: `[in] CBLAS_INT` starting index for `X`.

```c
float c_sasum_ndarray( const CBLAS_INT N, const float *X, const CBLAS_INT stride, const CBLAS_INT offset );
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
#include "stdlib/blas/base/sasum.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of elements:
    const int N = 8;

    // Specify a stride:
    const int stride = 1;

    // Compute the sum of absolute values:
    float sum = c_sasum( N, x, stride );

    // Print the result:
    printf( "sum: %f\n", sum );

    // Compute the sum of absolute values:
    sum = c_sasum_ndarray( N, x, -stride, N-1 );

    // Print the result:
    printf( "sum: %f\n", sum );
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

-   <span class="package-name">[`@stdlib/blas/base/dasum`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>
-   <span class="package-name">[`@stdlib/blas/base/gasum`][@stdlib/blas/base/gasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (L1 norm).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[sasum]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[l1norm]: https://en.wikipedia.org/wiki/Norm_%28mathematics%29

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs

<!-- <related-links> -->

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas/tree/main/base/dasum

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas/tree/main/base/gasum

<!-- </related-links> -->

</section>

<!-- /.links -->
