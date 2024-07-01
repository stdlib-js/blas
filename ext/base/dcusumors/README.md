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

# dcusumors

> Calculate the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dcusumors = require( '@stdlib/blas/ext/base/dcusumors' );
```

#### dcusumors( N, sum, x, strideX, y, strideY )

Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcusumors( x.length, 0.0, x, 1, y, 1 );
// y => <Float64Array>[ 1.0, -1.0, 1.0 ]

x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
y = new Float64Array( x.length );

dcusumors( x.length, 10.0, x, 1, y, 1 );
// y => <Float64Array>[ 11.0, 9.0, 11.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **sum**: initial sum.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the cumulative sum of every other element in the strided input array,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( x.length );

var v = dcusumors( 4, 0.0, x, 2, y, 1 );
// y => <Float64Array>[ 1.0, 3.0, 1.0, 5.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( x0.length );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dcusumors( 4, 0.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 4.0, 6.0, 4.0, 5.0, 0.0 ]
```

#### dcusumors.ndarray( N, sum, x, strideX, offsetX, y, strideY, offsetY )

Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( x.length );

dcusumors.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 1.0, -1.0, 1.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, `offsetX` and `offsetY` parameters support indexing semantics based on a starting indices. For example, to calculate the cumulative sum of every other value in the strided input array starting from the second value and to store in the last `N` elements of the strided output array starting from the last element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y = new Float64Array( x.length );

dcusumors.ndarray( 4, 0.0, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 5.0, 1.0, -1.0, 1.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   Ordinary recursive summation (i.e., a "simple" sum) is performant, but can incur significant numerical error. If performance is paramount and error tolerated, using ordinary recursive summation is acceptable; in all other cases, exercise due caution.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Float64Array = require( '@stdlib/array/float64' );
var dcusumors = require( '@stdlib/blas/ext/base/dcusumors' );

var x = filledarrayBy( 10, 'float64', discreteUniform( 0, 100 ) );
var y = new Float64Array( x.length );

console.log( x );
console.log( y );

dcusumors( x.length, 0.0, x, 1, y, -1 );
console.log( y );
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

-   <span class="package-name">[`@stdlib/blas/ext/base/dcusum`][@stdlib/blas/ext/base/dcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gcusumors`][@stdlib/blas/ext/base/gcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using ordinary recursive summation.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/scusumors`][@stdlib/blas/ext/base/scusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusum

[@stdlib/blas/ext/base/gcusumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumors

[@stdlib/blas/ext/base/scusumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumors

<!-- </related-links> -->

</section>

<!-- /.links -->