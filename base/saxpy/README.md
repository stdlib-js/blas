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

# saxpy

> Multiply a vector `x` by a constant `alpha` and add the result to `y`.

<section class="usage">

## Usage

```javascript
var saxpy = require( '@stdlib/blas/base/saxpy' );
```

#### saxpy( N, alpha, x, strideX, y, strideY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

saxpy( x.length, alpha, x, 1, y, 1 );
// y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: `numeric` constant.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to multiply every other value in `x` by `alpha` and add the result to the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var alpha = 5.0;

saxpy( 3, alpha, x, 2, y, -1 );
// y => <Float32Array>[ 26.0, 16.0, 6.0, 1.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

saxpy( 3, 5.0, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

#### saxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

saxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to multiply every other value in `x` by a constant `alpha` starting from the second value and add to the last `N` elements in `y` where `x[i] -> y[n]`, `x[i+2] -> y[n-1]`,...,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var alpha = 5.0;

saxpy.ndarray( 3, alpha, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `saxpy()` corresponds to the [BLAS][blas] level 1 function [`saxpy`][saxpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var saxpy = require( '@stdlib/blas/base/saxpy' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 10, 0, 100, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 10, opts );
console.log( y );

saxpy.ndarray( x.length, 5.0, x, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/daxpy`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector x by a constant and add the result to y.</span>
-   <span class="package-name">[`@stdlib/blas/base/gaxpy`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply x by a constant and add the result to y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[saxpy]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas/tree/main/base/gaxpy

<!-- </related-links> -->

</section>

<!-- /.links -->
