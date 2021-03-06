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

# gswap

> Interchange two vectors.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var gswap = require( '@stdlib/blas/gswap' );
```

#### gswap( x, y )

Interchanges two vectors `x` and `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var array = require( '@stdlib/ndarray/array' );

var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

gswap( x, y );

var xbuf = x.data;
// returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] or an array-like object.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `gswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`gswap`][@stdlib/blas/base/gswap].
-   In general, for best performance, especially for large vectors, provide 1-dimensional [`ndarrays`][@stdlib/ndarray/array] whose underlying data type is either `float64` or `float32`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var gswap = require( '@stdlib/blas/gswap' );

var rand1 = discreteUniform( 0, 100 );
var x = filledarrayBy( 10, 'generic', rand1 );
console.log( x );

var rand2 = discreteUniform( 0, 10 );
var y = filledarrayBy( 10, 'generic', rand2 );
console.log( y );

gswap( x, y );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/gswap`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="package-name">[`@stdlib/blas/dswap`][@stdlib/blas/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/sswap`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas/tree/main/base/gswap

[@stdlib/blas/dswap]: https://github.com/stdlib-js/blas/tree/main/dswap

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas/tree/main/sswap

<!-- </related-links> -->

</section>

<!-- /.links -->
