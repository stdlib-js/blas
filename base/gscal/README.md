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

# gscal

> Multiply a vector by a scalar constant.

<section class="usage">

## Usage

```javascript
var gscal = require( '@stdlib/blas/base/gscal' );
```

#### gscal( N, alpha, x, stride )

Multiplies a vector by a scalar constant.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal( x.length, 5.0, x, 1 );
// x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to multiply every other value by a scalar constant:

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal( 4, 5.0, x, 2 );
// x => [ -10.0, 1.0, 15.0, -5.0, 20.0, 0.0, -5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every other value:
gscal( 3, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, -10.0, 3.0, -20.0, 5.0, -30.0 ]
```

If either `N` or `stride` is less than or equal to `0`, the function returns `x` unchanged.

#### gscal.ndarray( N, alpha, x, stride, offset )

Multiplies a vector by a scalar constant using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal.ndarray( x.length, 5.0, x, 1, 0 );
// x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to multiply the last three elements:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gscal.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `gscal()` corresponds to the [BLAS][blas] level 1 function [`dscal`][dscal] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dscal`][@stdlib/blas/base/dscal], [`sscal`][@stdlib/blas/base/sscal], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gscal = require( '@stdlib/blas/base/gscal' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

gscal( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dscal`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas/base/gaxpy`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>
-   <span class="package-name">[`@stdlib/blas/base/sscal`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector by a constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[dscal]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas/tree/main/base/dscal

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas/tree/main/base/sscal

<!-- <related-links> -->

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas/tree/main/base/gaxpy

<!-- </related-links> -->

</section>

<!-- /.links -->
