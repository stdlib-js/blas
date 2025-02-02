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

# gnansumkbn

> Calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gnansumkbn = require( '@stdlib/blas/ext/base/gnansumkbn' );
```

#### gnansumkbn( N, x, strideX )

Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = gnansumkbn( x.length, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to compute the sum of every other element:

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];

var v = gnansumkbn( 5, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = gnansumkbn( 4, x1, 2 );
// returns 5.0
```

#### gnansumkbn.ndarray( N, x, strideX, offsetX )

Computes the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];

var v = gnansumkbn.ndarray( x.length, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other element starting from the second element:

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];

var v = gnansumkbn.ndarray( 5, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor])
-   Depending on the environment, the typed versions ([`dnansumkbn`][@stdlib/blas/ext/base/dnansumkbn], [`snansumkbn`][@stdlib/blas/ext/base/snansumkbn], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var gnansumkbn = require( '@stdlib/blas/ext/base/gnansumkbn' );

function rand() {
    if ( bernoulli( 0.7 ) > 0 ) {
        return discreteUniform( 0, 100 );
    }
    return NaN;
}

var x = filledarrayBy( 10, 'float64', rand );
console.log( x );

var v = gnansumkbn( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnansumkbn`][@stdlib/blas/ext/base/dnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansum`][@stdlib/blas/ext/base/gnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansumkbn2`][@stdlib/blas/ext/base/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansumors`][@stdlib/blas/ext/base/gnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansumpw`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsumkbn`][@stdlib/blas/ext/base/gsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/snansumkbn`][@stdlib/blas/ext/base/snansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

[@stdlib/blas/ext/base/dnansumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumkbn

[@stdlib/blas/ext/base/snansumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumkbn

<!-- <related-links> -->

[@stdlib/blas/ext/base/gnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansum

[@stdlib/blas/ext/base/gnansumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumkbn2

[@stdlib/blas/ext/base/gnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumors

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumpw

[@stdlib/blas/ext/base/gsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumkbn

<!-- </related-links> -->

</section>

<!-- /.links -->
