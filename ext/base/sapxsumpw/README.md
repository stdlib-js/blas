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

# sapxsumpw

> Add a constant to each single-precision floating-point strided array element and compute the sum using pairwise summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sapxsumpw = require( '@stdlib/blas/ext/base/sapxsumpw' );
```

#### sapxsumpw( N, alpha, x, stride )

Adds a constant to each single-precision floating-point strided array element and computes the sum using pairwise summation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = sapxsumpw( N, 5.0, x, 1 );
// returns 16.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var v = sapxsumpw( 4, 5.0, x, 2 );
// returns 25.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = sapxsumpw( 4, 5.0, x1, 2 );
// returns 25.0
```

#### sapxsumpw.ndarray( N, alpha, x, stride, offset )

Adds a constant to each single-precision floating-point strided array element and computes the sum using pairwise summation and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var N = x.length;

var v = sapxsumpw.ndarray( N, 5.0, x, 1, 0 );
// returns 16.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var v = sapxsumpw.ndarray( 4, 5.0, x, 2, 1 );
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
var sapxsumpw = require( '@stdlib/blas/ext/base/sapxsumpw' );

var x = filledarrayBy( 10, 'float32', discreteUniform( 0, 100 ) );

console.log( x );

var v = sapxsumpw( x.length, 5.0, x, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Higham, Nicholas J. 1993. "The Accuracy of Floating Point Summation." _SIAM Journal on Scientific Computing_ 14 (4): 783–99. doi:[10.1137/0914050][@higham:1993a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dapxsumpw`][@stdlib/blas/ext/base/dapxsumpw]</span><span class="delimiter">: </span><span class="description">adds a constant to each double-precision floating-point strided array element and computes the sum using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gapxsumpw`][@stdlib/blas/ext/base/gapxsumpw]</span><span class="delimiter">: </span><span class="description">adds a constant to each strided array element and computes the sum using pairwise summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/sapxsum`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">adds a constant to each single-precision floating-point strided array element and computes the sum.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssumpw`][@stdlib/blas/ext/base/ssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@higham:1993a]: https://doi.org/10.1137/0914050

<!-- <related-links> -->

[@stdlib/blas/ext/base/dapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumpw

[@stdlib/blas/ext/base/gapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumpw

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsum

[@stdlib/blas/ext/base/ssumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumpw

<!-- </related-links> -->

</section>

<!-- /.links -->