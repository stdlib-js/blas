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

# gsyr

> Perform the symmetric rank 1 operation `A = α*x*x^T + A`.

<section class="usage">

## Usage

```javascript
var gsyr = require( '@stdlib/blas/base/gsyr' );
```

#### gsyr( order, uplo, N, α, x, sx, A, LDA )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
var x = [ 1.0, 2.0, 3.0 ];

gsyr( 'row-major', 'upper', 3, 1.0, x, 1, A, 3 );
// A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: input array.
-   **sx**: stride length for `x`.
-   **A**: input matrix stored in linear memory.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
var x = [ 3.0, 2.0, 1.0 ];

gsyr( 'row-major', 'upper', 3, 1.0, x, -1, A, 3 );
// A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 3.0, 2.0, 1.0 ] );
var A = new Float64Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

gsyr( 'row-major', 'upper', 3, 1.0, x1, -1, A, 3 );
// A => <Float64Array>[ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

#### gsyr.ndarray( uplo, N, α, x, sx, ox, A, sa1, sa2, oa )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix.

```javascript
var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
var x = [ 1.0, 2.0, 3.0 ];

gsyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A, 3, 1, 0 );
// A => [ 2.0, 4.0, 6.0, 2.0, 5.0, 8.0, 3.0, 2.0, 10.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var A = [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ];
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];

gsyr.ndarray( 'upper', 3, 1.0, x, -2, 4, A, 3, 1, 0 );
// A => [ 26.0, 17.0, 8.0, 2.0, 10.0, 5.0, 3.0, 2.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `gsyr()` corresponds to the [BLAS][blas] level 2 function [`dsyr`][dsyr] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dsyr`][@stdlib/blas/base/dsyr], [`ssyr`][@stdlib/blas/base/ssyr], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ones = require( '@stdlib/array/ones' );
var gsyr = require( '@stdlib/blas/base/gsyr' );

var opts = {
    'dtype': 'generic'
};

var N = 3;

// Create N-by-N symmetric matrices:
var A1 = ones( N*N, opts.dtype );
var A2 = ones( N*N, opts.dtype );

// Create a random vector:
var x = discreteUniform( N, -10.0, 10.0, opts );

gsyr( 'row-major', 'upper', 3, 1.0, x, 1, A1, 3 );
console.log( A1 );

gsyr.ndarray( 'upper', 3, 1.0, x, 1, 0, A2, 3, 1, 0 );
console.log( A2 );
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

[dsyr]: https://www.netlib.org/lapack/explore-html/dc/d82/group__her_ga07f0e3f8592107877f12a554a41c7413.html#ga07f0e3f8592107877f12a554a41c7413

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/dsyr]: https://github.com/stdlib-js/blas/tree/main/base/dsyr

[@stdlib/blas/base/ssyr]: https://github.com/stdlib-js/blas/tree/main/base/ssyr

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor


</section>

<!-- /.links -->
