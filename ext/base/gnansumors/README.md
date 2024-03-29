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

# gnansumors

> Calculate the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gnansumors = require( '@stdlib/blas/ext/base/gnansumors' );
```

#### gnansumors( N, x, stride )

Computes the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = gnansumors( N, x, 1 );
// returns 1.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to compute the sum of every other element in `x`,

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0, NaN, NaN ];
var N = floor( x.length / 2 );

var v = gnansumors( N, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = gnansumors( N, x1, 2 );
// returns 5.0
```

#### gnansumors.ndarray( N, x, stride, offset )

Computes the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, NaN, 2.0 ];
var N = x.length;

var v = gnansumors.ndarray( N, x, 1, 0 );
// returns 1.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to calculate the sum of every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ];
var N = floor( x.length / 2 );

var v = gnansumors.ndarray( N, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation is acceptable; in all other cases, exercise due caution.
-   Depending on the environment, the typed versions ([`dnansumors`][@stdlib/blas/ext/base/dnansumors], [`snansumors`][@stdlib/blas/ext/base/snansumors], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var gnansumors = require( '@stdlib/blas/ext/base/gnansumors' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    if ( randu() < 0.2 ) {
        x[ i ] = NaN;
    } else {
        x[ i ] = round( randu()*100.0 );
    }
}
console.log( x );

var v = gnansumors( x.length, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dnansumors`][@stdlib/blas/ext/base/dnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansum`][@stdlib/blas/ext/base/gnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansumkbn2`][@stdlib/blas/ext/base/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gnansumpw`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring NaN values and using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsumors`][@stdlib/blas/ext/base/gsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/snansumors`][@stdlib/blas/ext/base/snansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring NaN values and using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumors

[@stdlib/blas/ext/base/gnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansum

[@stdlib/blas/ext/base/gnansumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumkbn2

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumpw

[@stdlib/blas/ext/base/gsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumors

[@stdlib/blas/ext/base/snansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumors

<!-- </related-links> -->

</section>

<!-- /.links -->
