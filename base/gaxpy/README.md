<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# gaxpy

> Multiply `x` by a constant `alpha` and add the result to `y`.

<section class="usage">

## Usage

```javascript
var gaxpy = require( '@stdlib/blas/base/gaxpy' );
```

#### gaxpy( N, alpha, x, strideX, y, strideY )

Multiplies `x` by a constant `alpha` and adds the result to `y`.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
var alpha = 5.0;

gaxpy( x.length, alpha, x, 1, y, 1 );
// y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: `numeric` constant.
-   **x**: first input array.
-   **strideX**: index increment for `x`.
-   **y**: second input array.
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to multiply every other value in `x` by `alpha` and add the result to the first `N` elements of `y` in reverse order,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ];

gaxpy( 3, 5.0, x, 2, y, -1 );
// y => [ 26.0, 16.0, 6.0, 1.0, 1.0, 1.0 ]
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

gaxpy( 3, 5.0, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

#### gaxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Multiplies `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
var alpha = 5.0;

gaxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
// y => [ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to multiply every other value in `x` by a constant `alpha` starting from the second value and add to the last `N` elements in `y` where `x[i] -> y[n]`, `x[i+2] -> y[n-1]`,...,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

gaxpy.ndarray( 3, 5.0, x, 2, 1, y, -1, y.length-1 );
// y => [ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `gaxpy()` corresponds to the [BLAS][blas] level 1 function [`daxpy`][daxpy] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`daxpy`][@stdlib/blas/base/daxpy], [`saxpy`][@stdlib/blas/base/saxpy], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gaxpy = require( '@stdlib/blas/base/gaxpy' );

var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

gaxpy.ndarray( x.length, 5.0, x, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/daxpy`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>
-   <span class="package-name">[`@stdlib/blas/base/saxpy`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[daxpy]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas/tree/main/base/saxpy

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
