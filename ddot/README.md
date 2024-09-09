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

# ddot

> Calculate the dot product of two double-precision floating-point vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d0afc603cdda35b11d5bd1633dd4dddb0d59e117/lib/node_modules/@stdlib/blas/ddot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ddot = require( '@stdlib/blas/ddot' );
```

#### ddot( x, y\[, dim] )

Calculates the dot product of two double-precision floating-point vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var array = require( '@stdlib/ndarray/array' );

var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

var z = ddot( x, y );
// returns <ndarray>

var v = z.get();
// returns -5.0
```

The function has the following parameters:

-   **x**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float64`. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with `y`.
-   **y**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float64`. Must be [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with `x`.
-   **dim**: dimension for which to compute the dot product. Must be a negative integer. Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`. Default: `-1`.

If provided at least one input [`ndarray`][@stdlib/ndarray/ctor] having more than one dimension, the input [`ndarrays`][@stdlib/ndarray/ctor] are [broadcasted][@stdlib/ndarray/base/broadcast-shapes] to a common shape. For multi-dimensional input [`ndarrays`][@stdlib/ndarray/ctor], the function performs batched computation, such that the function computes the dot product for each pair of vectors in `x` and `y` according to the specified dimension index.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'shape': [ 2, 3 ]
};
var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 3.0 ] ), opts );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 2.0 ] ), opts );

var z = ddot( x, y );
// returns <ndarray>

var v1 = z.get( 0 );
// returns 23.0

var v2 = z.get( 1 );
// returns -22.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The size of the contracted dimension must be the same for both input [`ndarrays`][@stdlib/ndarray/ctor].
-   The function resolves the dimension index for which to compute the dot product **before** broadcasting.
-   Negative indices are resolved relative to the last [`ndarray`][@stdlib/ndarray/ctor] dimension, with the last dimension corresponding to `-1`.
-   The output [`ndarray`][@stdlib/ndarray/ctor] has the same data type as the input [`ndarrays`][@stdlib/ndarray/ctor] and has a shape which is determined by broadcasting and excludes the contracted dimension.
-   If provided empty vectors, the dot product is `0`.
-   `ddot()` provides a higher-level interface to the [BLAS][blas] level 1 function [`ddot`][@stdlib/blas/base/ddot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var ddot = require( '@stdlib/blas/ddot' );

var opts = {
    'dtype': 'float64'
};

var x = array( discreteUniform( 10, 0, 100, opts ), {
    'shape': [ 5, 2 ]
});
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 10, 0, 10, opts ), {
    'shape': x.shape
});
console.log( ndarray2array( y ) );

var z = ddot( x, y, -1 );
console.log( ndarray2array( z ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/ddot`][@stdlib/blas/base/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gdot`][@stdlib/blas/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/sdot`][@stdlib/blas/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas/tree/main/base/ddot

<!-- <related-links> -->

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas/tree/main/gdot

[@stdlib/blas/sdot]: https://github.com/stdlib-js/blas/tree/main/sdot

<!-- </related-links> -->

</section>

<!-- /.links -->
