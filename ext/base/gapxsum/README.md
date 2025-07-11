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

# gapxsum

> Add a scalar constant to each strided array element and compute the sum.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gapxsum = require( '@stdlib/blas/ext/base/gapxsum' );
```

#### gapxsum( N, alpha, x, strideX )

Adds a scalar constant to each strided array element and computes the sum.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = gapxsum( x.length, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element:

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];

var v = gapxsum( 4, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = gapxsum( 4, 5.0, x1, 2 );
// returns 25.0
```

#### gapxsum.ndarray( N, alpha, x, strideX, offsetX )

Adds a scalar constant to each strided array element and computes the sum using alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];

var v = gapxsum.ndarray( x.length, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access every other element starting from the second element:

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];

var v = gapxsum.ndarray( 4, 5.0, x, 2, 1 );
// returns 25.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dapxsum`][@stdlib/blas/ext/base/dapxsum], [`sapxsum`][@stdlib/blas/ext/base/sapxsum], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gapxsum = require( '@stdlib/blas/ext/base/gapxsum' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

var v = gapxsum( x.length, 5.0, x, 1 );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dapxsum`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapxsumpw`][@stdlib/blas/ext/base/gapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsum`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sapxsum`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element and compute the sum.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsum

[@stdlib/blas/ext/base/gapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumpw

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsum

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsum

<!-- </related-links> -->

</section>

<!-- /.links -->
