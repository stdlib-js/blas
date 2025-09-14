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

# gindexOfRow

> Return the index of the first row in a input matrix which has the same elements as a provided search vector.

<section class="usage">

## Usage

```javascript
var gindexOfRow = require( '@stdlib/blas/ext/base/gindex-of-row' );
```

#### gindexOfRow( order, M, N, A, LDA, x, strideX )

Returns the index of the first row in a input matrix which has the same elements as a provided search vector.

```javascript
/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ];

var x = [ 3.0, 4.0 ];
var out = gindexOfRow( 'row-major', 3, 2, A, 2, x, 1 );
// returns 1
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix as a linear array.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: search vector.
-   **strideX**: stride length of `x`.

If the function is unable to find a matching row, the function returns `-1`.

```javascript
var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ];

var x = [ -3.0, -4.0 ];
var out = gindexOfRow( 'row-major', 3, 2, A, 2, x, 1 );
// returns -1
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays:
var A0 = new Float64Array( [ 9999.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );
var x0 = new Float64Array( [ 9999.0, 3.0, 4.0 ] );

// Create offset views:
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out = gindexOfRow( 'row-major', 3, 2, A1, 2, x1, 1 );
// returns 1
```

#### gindexOfRow.ndarray( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX )

Returns the index of the first row in a input matrix which has the same elements as a provided search vector using alternative indexing semantics.

```javascript
/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ];

var x = [ 3.0, 4.0 ];
var out = gindexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0 );
// returns 1
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix as a linear array.
-   **strideA1**: stride of the first dimension of `A`.
-   **strideA2**: stride of the second dimension of `A`.
-   **offsetA**: starting index for `A`.
-   **x**: search vector.
-   **strideX**: stride length of `x`.
-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, offset parameters support indexing semantics based on starting indices. For example,

```javascript
/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = [ 9999.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ];

var x = [ 9999.0, 3.0, 4.0 ];
var out = gindexOfRow.ndarray( 3, 2, A, 2, 1, 1, x, 1, 1 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When searching for a matching row, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var gindexOfRow = require( '@stdlib/blas/ext/base/gindex-of-row' );

var shape = [ 3, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 0.0, 0.0 ];
console.log( ndarray2array( A, shape, strides, 0, order ) );

var x = [ 4.0, 5.0, 6.0 ];
console.log( x );

var out = gindexOfRow( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ], x, 1, 0 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
