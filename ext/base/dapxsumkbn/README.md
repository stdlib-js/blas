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

# dapxsumkbn

> Add a constant to each double-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dapxsumkbn = require( '@stdlib/blas/ext/base/dapxsumkbn' );
```

#### dapxsumkbn( N, alpha, x, stride )

Adds a constant to each double-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dapxsumkbn( 3, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **stride**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to access every other element in `x`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = dapxsumkbn( 4, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = dapxsumkbn( 4, 5.0, x1, 2 );
// returns 25.0
```

#### dapxsumkbn.ndarray( N, alpha, x, stride, offset )

Adds a constant to each double-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );

var v = dapxsumkbn.ndarray( 3, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access every other value in `x` starting from the second value

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = dapxsumkbn.ndarray( 4, 5.0, x, 2, 1 );
// returns 25.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dapxsumkbn = require( '@stdlib/blas/ext/base/dapxsumkbn' );

var x = filledarrayBy( 10, 'float64', discreteUniform( 0, 100 ) );
console.log( x );

var v = dapxsumkbn( x.length, 5.0, x, 1 );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dapxsum`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">adds a constant to each double-precision floating-point strided array element and computes the sum.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/dsumkbn`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapxsumkbn`][@stdlib/blas/ext/base/gapxsumkbn]</span><span class="delimiter">: </span><span class="description">adds a constant to each strided array element and computes the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sapxsumkbn`][@stdlib/blas/ext/base/sapxsumkbn]</span><span class="delimiter">: </span><span class="description">adds a constant to each single-precision floating-point strided array element and computes the sum using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsum

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumkbn

[@stdlib/blas/ext/base/gapxsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumkbn

[@stdlib/blas/ext/base/sapxsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumkbn

<!-- </related-links> -->

</section>

<!-- /.links -->