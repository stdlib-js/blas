<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# snrm2

> Calculate the L2-norm of a single-precision floating-point vector.

<section class="intro">

The [L2-norm][l2-norm] is defined as

<!-- <equation class="equation" label="eq:l2_norm" align="center raw="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" alt="L2-norm definition."> -->

<div class="equation" align="center" data-raw-text="\|\mathbf{x}\|_2 = \sqrt{x_0^2 + x_1^2 + \ldots + x_{N-1}^2}" data-equation="eq:l2_norm">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@247c6b352fc1002f11ba3e7ed389f067380a8a87/lib/node_modules/@stdlib/blas/base/snrm2/docs/img/equation_l2_norm.svg" alt="L2-norm definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var snrm2 = require( '@stdlib/blas/base/snrm2' );
```

#### snrm2( N, x, stride )

Computes the [L2-norm][l2-norm] of a single-precision floating-point vector `x`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var z = snrm2( x.length, x, 1 );
// returns 3.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment for `x`.

The `N` and `stride` parameters determine which elements in the strided array are accessed at runtime. For example, to compute the [L2-norm][l2-norm] of every other element in `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );

var z = snrm2( 4, x, 2 );
// returns 5.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x0 = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var z = snrm2( 4, x1, 2 );
// returns 5.0
```

If either `N` or `stride` is less than or equal to `0`, the function returns `0`.

#### snrm2.ndarray( N, x, stride, offset )

Computes the [L2-norm][l2-norm] of a single-precision floating-point vector using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );

var z = snrm2.ndarray( x.length, x, 1, 0 );
// returns 3.0
```

The function has the following additional parameters:

-   **offset**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to calculate the [L2-norm][l2-norm] for every other value in `x` starting from the second value

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );

var z = snrm2.ndarray( 4, x, 2, 1 );
// returns 5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.
-   `snrm2()` corresponds to the [BLAS][blas] level 1 function [`snrm2`][snrm2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var snrm2 = require( '@stdlib/blas/base/snrm2' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var out = snrm2( x.length, x, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dnrm2`][@stdlib/blas/base/dnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a double-precision floating-point vector.</span>
-   <span class="package-name">[`@stdlib/blas/base/gnrm2`][@stdlib/blas/base/gnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a vector.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[l2-norm]: https://en.wikipedia.org/wiki/Euclidean_distance

[blas]: http://www.netlib.org/blas

[snrm2]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas/tree/main/base/dnrm2

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas/tree/main/base/gnrm2

<!-- </related-links> -->

</section>

<!-- /.links -->
