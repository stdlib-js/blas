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

# gdot

> Calculate the dot product of two vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6cf4829ce9c06ba9fa207a2ea3b395266f86a259/lib/node_modules/@stdlib/blas/base/gdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gdot = require( '@stdlib/blas/base/gdot' );
```

#### gdot( N, x, strideX, y, strideY )

Calculates the dot product of vectors `x` and `y`.

```javascript
var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];

var z = gdot( x.length, x, 1, y, 1 );
// returns -5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to calculate the dot product of every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ];

var z = gdot( 3, x, 2, y, -1 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var z = gdot( 3, x1, -2, y1, 1 );
// returns 128.0
```

#### gdot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Calculates the dot product of `x` and `y` using alternative indexing semantics.

```javascript
var x = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
var y = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];

var z = gdot.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns -5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the dot product of every other value in `x` starting from the second value with the last 3 elements in `y` in reverse order

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

var z = gdot.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// returns 128.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` both functions return `0.0`.
-   `gdot()` corresponds to the [BLAS][blas] level 1 function [`ddot`][ddot] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`ddot`][@stdlib/blas/base/ddot], [`sdot`][@stdlib/blas/base/sdot], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gdot = require( '@stdlib/blas/base/gdot' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

var out = gdot.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/ddot`][@stdlib/blas/base/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/base/sdot`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gdot`][@stdlib/blas/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[ddot]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas/tree/main/base/ddot

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas/tree/main/base/sdot

<!-- <related-links> -->

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas/tree/main/gdot

<!-- </related-links> -->

</section>

<!-- /.links -->
