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

# scusumkbn2

> Calculate the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var scusumkbn2 = require( '@stdlib/blas/ext/base/scusumkbn2' );
```

#### scusumkbn2( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( x.length );

scusumkbn2( x.length, 0.0, x, 1, y, 1 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]

x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
y = new Float32Array( x.length );

scusumkbn2( x.length, 10.0, x, 1, y, 1 );
// y => <Float32Array>[ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float32Array( x.length );

var v = scusumkbn2( 4, 0.0, x, 2, y, 1 );
// y => <Float32Array>[ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float32Array( x0.length );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

scusumkbn2( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0, 0.0 ]
```

#### scusumkbn2.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float32Array( 3 );

scusumkbn2.ndarray( 3, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, offset parameters support indexing semantics based on a starting indices. For example, to calculate the cumulative sum of every other value in `x` starting from the second value and to store in the last `N` elements of `y` starting from the last element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float32Array( x.length );

scusumkbn2.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var scusumkbn2 = require( '@stdlib/blas/ext/base/scusumkbn2' );

var x = filledarrayBy( 10, 'float32', discreteUniform( 0, 100 ) );

console.log( x );

var y = filledarrayBy( x.length, 'float32', discreteUniform( 0, 10 ) );

console.log( y );

scusumkbn2( x.length, 0.0, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Klein, Andreas. 2005. "A Generalized Kahan-Babuška-Summation-Algorithm." _Computing_ 76 (3): 279–93. doi:[10.1007/s00607-005-0139-x][@klein:2005a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dcusumkbn2`][@stdlib/blas/ext/base/dcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gcusumkbn2`][@stdlib/blas/ext/base/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/scusum`][@stdlib/blas/ext/base/scusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/scusumkbn`][@stdlib/blas/ext/base/scusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@klein:2005a]: https://doi.org/10.1007/s00607-005-0139-x

<!-- <related-links> -->

[@stdlib/blas/ext/base/dcusumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumkbn2

[@stdlib/blas/ext/base/gcusumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumkbn2

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusum

[@stdlib/blas/ext/base/scusumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumkbn

<!-- </related-links> -->

</section>

<!-- /.links -->
