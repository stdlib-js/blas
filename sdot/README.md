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

# sdot

> Calculate the dot product of two single-precision floating-point vectors.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

```math
\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@03fff24f5a7ba807a292f08cfef75ed0748e40de/lib/node_modules/@stdlib/blas/sdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sdot = require( '@stdlib/blas/sdot' );
```

#### sdot( x, y )

Calculates the dot product of vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );

var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

var z = sdot( x, y );
// returns -5.0
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.

If provided empty vectors, the function returns `0.0`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );

var x = array( new Float32Array() );
var y = array( new Float32Array() );

var z = sdot( x, y );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sdot()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sdot`][@stdlib/blas/base/sdot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );
var sdot = require( '@stdlib/blas/sdot' );

var x = array( new Float32Array( 10 ) );
var y = array( new Float32Array( 10 ) );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( i, rand1() );
    y.set( i, rand2() );
}
console.log( x.toString() );
console.log( y.toString() );

var z = sdot( x, y );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/sdot`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/ddot`][@stdlib/blas/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gdot`][@stdlib/blas/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas/tree/main/base/sdot

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas/tree/main/ddot

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas/tree/main/gdot

<!-- </related-links> -->

</section>

<!-- /.links -->
