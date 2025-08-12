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

# ggemm

> Perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.

<section class="usage">

## Usage

```javascript
var ggemm = require( '@stdlib/blas/base/ggemm' );
```

#### ggemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )

Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0 ];
var B = [ 1.0, 1.0, 0.0, 1.0 ];
var C = [ 1.0, 2.0, 3.0, 4.0 ];

ggemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
// C => [ 2.0, 5.0, 6.0, 11.0 ]
```

The function has the following parameters:

-   **ord**: storage layout.
-   **ta**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **tb**: specifies whether `B` should be transposed, conjugate-transposed, or not transposed.
-   **M**: number of rows in the matrix `op(A)` and in the matrix `C`.
-   **N**: number of columns in the matrix `op(B)` and in the matrix `C`.
-   **K**: number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`.
-   **α**: scalar constant.
-   **A**: first input matrix stored in linear memory.
-   **lda**: stride of the first dimension of `A` (leading dimension of `A`).
-   **B**: second input matrix stored in linear memory.
-   **ldb**: stride of the first dimension of `B` (leading dimension of `B`).
-   **β**: scalar constant
-   **C**: third input matrix stored in linear memory.
-   **ldc**: stride of the first dimension of `C` (leading dimension of `C`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to perform matrix multiplication of two subarrays

```javascript
var A = [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ];
var B = [ 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0 ];
var C = [ 1.0, 2.0, 3.0, 4.0 ];

ggemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 4, B, 4, 1.0, C, 2 );
// C => [ 2.0, 5.0, 6.0, 11.0 ]
```

<!-- lint disable maximum-heading-length -->

#### ggemm.ndarray( ta, tb, M, N, K, α, A, sa1, sa2, oa, B, sb1, sb2, ob, β, C, sc1, sc2, oc )

Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C`, using alternative indexing semantics and where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0 ];
var B = [ 1.0, 1.0, 0.0, 1.0 ];
var C = [ 1.0, 2.0, 3.0, 4.0 ];

ggemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
// C => [ 2.0, 5.0, 6.0, 11.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.
-   **sc1**: stride of the first dimension of `C`.
-   **sc2**: stride of the second dimension of `C`.
-   **oc**: starting index for `C`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var A = [ 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ];
var B = [ 0.0, 1.0, 0.0, 1.0, 1.0 ];
var C = [ 0.0, 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ];

ggemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 1, 2, 2, B, 1, 2, 1, 1.0, C, 1, 2, 3 );
// C => [ 0.0, 0.0, 0.0, 2.0, 6.0, 5.0, 11.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `ggemm()` corresponds to the [BLAS][blas] level 3 function [`dgemm`][dgemm] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dgemm`][@stdlib/blas/base/dgemm], [`sgemm`][@stdlib/blas/base/sgemm], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ggemm = require( '@stdlib/blas/base/ggemm' );

var opts = {
    'dtype': 'generic'
};

var M = 3;
var N = 4;
var K = 2;

var A = discreteUniform( M*K, 0, 10, opts ); // 3x2
var B = discreteUniform( K*N, 0, 10, opts ); // 2x4
var C = discreteUniform( M*N, 0, 10, opts ); // 3x4

ggemm( 'row-major', 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, B, N, 1.0, C, N );
console.log( C );

ggemm.ndarray( 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, 1, 0, B, N, 1, 0, 1.0, C, N, 1, 0 );
console.log( C );
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

[dgemm]: https://www.netlib.org/lapack/explore-html/dd/d09/group__gemm_ga1e899f8453bcbfde78e91a86a2dab984.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/dgemm]: https://github.com/stdlib-js/blas/tree/main/base/dgemm

[@stdlib/blas/base/sgemm]: https://github.com/stdlib-js/blas/tree/main/base/sgemm

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
