<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# gger

> Perform the rank 1 operation `A = α*x*y^T + A`.

<section class="usage">

## Usage

```javascript
var gger = require( '@stdlib/blas/base/gger' );
```

#### gger( order, M, N, α, x, sx, y, sy, A, lda )

Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var x = [ 1.0, 1.0 ];
var y = [ 1.0, 1.0, 1.0 ];

gger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
// A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **x**: an `M` element input array.
-   **sx**: stride length for `x`.
-   **y**: an `N` element input array.
-   **sy**: stride length for `y`.
-   **A**: input matrix stored in linear memory.
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to iterate over every other element in `x` and `y`,

```javascript
var A = [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
var x = [ 1.0, 0.0, 1.0, 0.0 ];
var y = [ 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ];

gger( 'column-major', 2, 3, 1.0, x, 2, y, 2, A, 2 );
// A => [ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float64Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var A = new Float64Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

gger( 'column-major', 2, 3, 1.0, x1, -1, y1, -1, A, 2 );
// A => <Float64Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

#### gger.ndarray( M, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the rank 1 operation `A = α*x*y^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var x = [ 1.0, 1.0 ];
var y = [ 1.0, 1.0, 1.0 ];

gger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = [ 0.0, 0.0, 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
var x = [ 0.0, 1.0, 0.0, 1.0, 0.0 ];
var y = [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ];

gger.ndarray( 2, 3, 1.0, x, 2, 1, y, 2, 1, A, 1, 2, 2 );
// A => [ 0.0, 0.0, 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `gger()` corresponds to the [BLAS][blas] level 2 function [`dger`][dger] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dger`][@stdlib/blas/base/dger], [`sger`][@stdlib/blas/base/sger], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gger = require( '@stdlib/blas/base/gger' );

var opts = {
    'dtype': 'generic'
};

var M = 3;
var N = 5;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( M, 0, 255, opts );
var y = discreteUniform( N, 0, 255, opts );

gger( 'row-major', M, N, 1.0, x, 1, y, 1, A, N );
console.log( A );

gger.ndarray( M, N, 1.0, x, 1, 0, y, 1, 0, A, 1, M, 0 );
console.log( A );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[dger]: https://www.netlib.org/lapack/explore-html-3.6.1/d7/d15/group__double__blas__level2_ga458222e01b4d348e9b52b9343d52f828.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/dger]: https://github.com/stdlib-js/blas/tree/main/base/dger

[@stdlib/blas/base/sger]: https://github.com/stdlib-js/blas/tree/main/base/sger

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
