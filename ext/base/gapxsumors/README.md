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

# gapxsumors

> Add a constant to each strided array element and compute the sum using ordinary recursive summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gapxsumors = require( '@stdlib/blas/ext/base/gapxsumors' );
```

#### gapxsumors( N, alpha, x, stride )

Adds a constant to each strided array element and computes the sum using ordinary recursive summation.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = gapxsumors( N, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to access every other element in `x`,

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var N = floor( x.length / 2 );

var v = gapxsumors( N, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

var v = gapxsumors( N, 5.0, x1, 2 );
// returns 25.0
```

#### gapxsumors.ndarray( N, alpha, x, stride, offset )

Adds a constant to each strided array element and computes the sum using ordinary recursive summation and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var N = x.length;

var v = gapxsumors.ndarray( N, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access every other value in `x` starting from the second value

```javascript
var floor = require( '@stdlib/math/base/special/floor' );

var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var N = floor( x.length / 2 );

var v = gapxsumors.ndarray( N, 5.0, x, 2, 1 );
// returns 25.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation is acceptable; in all other cases, exercise due caution.
-   Depending on the environment, the typed versions ([`dapxsumors`][@stdlib/blas/ext/base/dapxsumors], [`sapxsumors`][@stdlib/blas/ext/base/sapxsumors], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float64Array = require( '@stdlib/array/float64' );
var gapxsumors = require( '@stdlib/blas/ext/base/gapxsumors' );

var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
}
console.log( x );

var v = gapxsumors( x.length, 5.0, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dapxsumors`][@stdlib/blas/ext/base/dapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapxsum`][@stdlib/blas/ext/base/gapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each strided array element and compute the sum.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsumors`][@stdlib/blas/ext/base/gsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sapxsumors`][@stdlib/blas/ext/base/sapxsumors]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumors

[@stdlib/blas/ext/base/gapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsum

[@stdlib/blas/ext/base/gsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumors

[@stdlib/blas/ext/base/sapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumors

<!-- </related-links> -->

</section>

<!-- /.links -->
