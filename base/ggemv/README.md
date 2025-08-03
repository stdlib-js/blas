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

# ggemv

> Perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.

<section class="usage">

## Usage

```javascript
var ggemv = require( '@stdlib/blas/base/ggemv' );
```

#### ggemv( order, trans, M, N, α, A, LDA, x, sx, β, y, sy )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var x = [ 1.0, 1.0, 1.0 ];
var y = [ 1.0, 1.0 ];

ggemv( 'row-major', 'no-transpose', 2, 3, 1.0, A, 3, x, 1, 1.0, y, 1 );
// y => [ 7.0, 16.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **trans**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **A**: input matrix stored in linear memory.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: first input vector.
-   **sx**: stride length for `x`.
-   **β**: scalar constant.
-   **y**: second input vector.
-   **sy**: stride length for `y`.

The stride parameters determine how operations are performed. For example, to iterate over every other element in `x` and `y`,

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0 ];
var x = [ 1.0, 0.0, 1.0, 0.0 ];
var y = [ 1.0, 0.0, 1.0, 0.0 ];

ggemv( 'row-major', 'no-transpose', 2, 2, 1.0, A, 2, x, 2, 1.0, y, 2 );
// y => [ 4.0, 0.0, 8.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float64Array( [ 0.0, 1.0, 1.0 ] );
var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ggemv( 'row-major', 'no-transpose', 2, 2, 1.0, A, 2, x1, -1, 1.0, y1, -1 );
// y0 => <Float64Array>[ 0.0, 8.0, 4.0 ]
```

#### ggemv.ndarray( trans, M, N, α, A, sa1, sa2, oa, x, sx, ox, β, y, sy, oy )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, using alternative indexing semantics and where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var x = [ 1.0, 1.0, 1.0 ];
var y = [ 1.0, 1.0 ];

ggemv.ndarray( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
// y => [ 7.0, 16.0 ]
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

var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var x = [ 0.0, 1.0, 2.0, 3.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0 ];

ggemv.ndarray( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 1, 1.0, y, -2, 2 );
// y => [ 39.0, 8.0, 23.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `ggemv()` corresponds to the [BLAS][blas] level 2 function [`dgemv`][dgemv] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dgemv`][@stdlib/blas/base/dgemv], [`sgemv`][@stdlib/blas/base/sgemv], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ggemv = require( '@stdlib/blas/base/ggemv' );

var opts = {
    'dtype': 'generic'
};

var M = 3;
var N = 3;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( N, 0, 255, opts );
var y = discreteUniform( M, 0, 255, opts );

ggemv( 'row-major', 'no-transpose', M, N, 1.0, A, N, x, 1, 1.0, y, 1 );
console.log( y );

ggemv.ndarray( 'no-transpose', M, N, 1.0, A, N, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
console.log( y );
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

[dgemv]: https://netlib.org/lapack/explore-html-3.6.1/d7/d15/group__double__blas__level2_gadd421a107a488d524859b4a64c1901a9.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/dgemv]: https://github.com/stdlib-js/blas/tree/main/base/dgemv

[@stdlib/blas/base/sgemv]: https://github.com/stdlib-js/blas/tree/main/base/sgemv

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
