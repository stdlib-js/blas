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

# gnannsumpw

> Calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gnannsumpw = require( '@stdlib/blas/ext/base/gnannsumpw' );
```

#### gnannsumpw( N, x, strideX, out, strideOut )

Computes the sum of strided array elements, ignoring `NaN` values and using pairwise summation.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var out = [ 0.0, 0 ];

var v = gnannsumpw( x.length, x, 1, out, 1 );
// returns [ 1.0, 3 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input array.
-   **strideX**: stride length for `x`.
-   **out**: output array whose first element is the sum and whose second element is the number of non-NaN elements.
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements are accessed at runtime. For example, to compute the sum of every other element in the strided array:

```javascript
var x = [ 1.0, 2.0, NaN, -7.0, NaN, 3.0, 4.0, 2.0 ];
var out = [ 0.0, 0 ];

var v = gnannsumpw( 4, x, 2, out, 1 );
// returns [ 5.0, 2 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out0 = new Float64Array( 4 );
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var v = gnannsumpw( 4, x1, 2, out1, 1 );
// returns <Float64Array>[ 5.0, 4 ]
```

#### gnannsumpw.ndarray( N, x, strideX, offsetX, out, strideOut, offsetOut )

Computes the sum of strided array elements, ignoring `NaN` values and using pairwise summation and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var out = [ 0.0, 0 ];

var v = gnannsumpw.ndarray( x.length, x, 1, 0, out, 1, 0 );
// returns [ 1.0, 3 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the sum of every other element starting from the second element:

```javascript
var x = [ 2.0, 1.0, NaN, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var out = [ 0.0, 0.0, 0.0, 0.0 ];

var v = gnannsumpw.ndarray( 4, x, 2, 1, out, 2, 1 );
// returns [ 0.0, 5.0, 0.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return a sum equal to `0.0`.
-   In general, pairwise summation is more numerically stable than ordinary recursive summation (i.e., "simple" summation), with slightly worse performance. While not the most numerically stable summation technique (e.g., compensated summation techniques such as the Kahan–Babuška-Neumaier algorithm are generally more numerically stable), pairwise summation strikes a reasonable balance between numerical stability and performance. If either numerical stability or performance is more desirable for your use case, consider alternative summation techniques.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dnannsumpw`][@stdlib/blas/ext/base/dnannsumpw], [`snannsumpw`][@stdlib/blas/ext/base/snannsumpw], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var gnannsumpw = require( '@stdlib/blas/ext/base/gnannsumpw' );

function rand() {
    if ( bernoulli( 0.5 ) < 1 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var x = filledarrayBy( 10, 'generic', rand );
console.log( x );

var out = [ 0.0, 0 ];
gnannsumpw( x.length, x, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/blas/ext/base/dnannsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumpw

[@stdlib/blas/ext/base/snannsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/snannsumpw

</section>

<!-- /.links -->
