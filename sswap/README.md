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

#### sswap( x, y\[, dim] )

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

-   **x**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float32`. Must have the same shape as `y`.
-   **y**: a non-zero-dimensional [`ndarray`][@stdlib/ndarray/ctor] whose underlying data type is `float32`. Must have the same shape as `x`.
-   **dim**: dimension along which to interchange vectors. Must be a negative integer. Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`. Default: `-1`.

For multi-dimensional input [`ndarrays`][@stdlib/ndarray/ctor], the function performs batched computation, such that the function interchanges each pair of vectors in `x` and `y` according to the specified dimension index.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var array = require( '@stdlib/ndarray/array' );

var opts = {
    'shape': [ 2, 3 ]
};
var x = array( new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 3.0 ] ), opts );
var y = array( new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 2.0 ] ), opts );

var v1 = x.get( 0, 0 );
// returns 4.0

var v2 = y.get( 0, 0 );
// returns 2.0

sswap( x, y );

v1 = x.get( 0, 0 );
// returns 2.0

v2 = y.get( 0, 0 );
// returns 4.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both input [`ndarrays`][@stdlib/ndarray/ctor] must have the same shape.
-   Negative indices are resolved relative to the last [`ndarray`][@stdlib/ndarray/ctor] dimension, with the last dimension corresponding to `-1`.
-   For multi-dimensional [`ndarrays`][@stdlib/ndarray/ctor], batched computation effectively means swapping all of `x` with all of `y`; however, the choice of `dim` will significantly affect performance. For best performance, specify a `dim` which best aligns with the [memory layout][@stdlib/ndarray/orders] of provided [`ndarrays`][@stdlib/ndarray/ctor]. 
-   `sswap()` provides a higher-level interface to the [BLAS][blas] level 1 function [`sswap`][@stdlib/blas/base/sswap].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );
var sswap = require( '@stdlib/blas/sswap' );

var opts = {
    'dtype': 'float32'
};

var x = array( discreteUniform( 10, 0, 100, opts ), {
    'shape': [ 5, 2 ]
});
console.log( ndarray2array( x ) );

var y = array( discreteUniform( 10, 0, 10, opts ), {
    'shape': x.shape
});
console.log( ndarray2array( y ) );

sswap( x, y );
console.log( ndarray2array( x ) );
console.log( ndarray2array( y ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas/tree/main/base/sswap

</section>

<!-- /.links -->
