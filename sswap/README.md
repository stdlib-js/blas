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

# sswap

> Interchange two single-precision floating-point vectors.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sswap = require( '@stdlib/blas/sswap' );
```

#### sswap( x, y )

Interchanges two single-precision floating-point vectors `x` and `y`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );

var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );

sswap( x, y );

var xbuf = x.data;
// returns <Float32Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]

var ybuf = y.data;
// returns <Float32Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
```

The function has the following parameters:

-   **x**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.
-   **y**: a 1-dimensional [`ndarray`][@stdlib/ndarray/array] whose underlying data type is `float32`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sswap`][@stdlib/blas/base/sswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );
var sswap = require( '@stdlib/blas/sswap' );

var x = array( new Float32Array( 10 ) );
var y = array( new Float32Array( 10 ) );

var rand1 = discreteUniform.factory( 0, 100 );
var rand2 = discreteUniform.factory( 0, 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x.set( i, rand1() );
    y.set( i, rand2() );
}
console.log( x.data );
console.log( y.data );

sswap( x, y );
console.log( x.data );
console.log( y.data );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/sswap`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/dswap`][@stdlib/blas/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="package-name">[`@stdlib/blas/gswap`][@stdlib/blas/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array

<!-- <related-links> -->

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas/tree/main/base/sswap

[@stdlib/blas/dswap]: https://github.com/stdlib-js/blas/tree/main/dswap

[@stdlib/blas/gswap]: https://github.com/stdlib-js/blas/tree/main/gswap

<!-- </related-links> -->

</section>

<!-- /.links -->
