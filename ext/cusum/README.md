<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# cusum

> Compute the cumulative sum along one or more [ndarray][@stdlib/ndarray/ctor] dimensions.

<section class="usage">

## Usage

```javascript
var cusum = require( '@stdlib/blas/ext/cusum' );
```

#### cusum( x\[, initial]\[, options] )

Computes the cumulative sum along one or more [ndarray][@stdlib/ndarray/ctor] dimensions.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = cusum( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -1.0, 1.0, -2.0 ]
```

The function has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a numeric or "generic" [data type][@stdlib/ndarray/dtypes].
-   **initial**: initial value for the cumulative sum (_optional_). May be either a scalar value or an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] which [promotes][@stdlib/ndarray/promotion-rules] to the data type of the input [ndarray][@stdlib/ndarray/ctor]. If provided a scalar value, the value is cast to the data type of the input [ndarray][@stdlib/ndarray/ctor]. If provided an [ndarray][@stdlib/ndarray/ctor], the value must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the complement of the shape defined by `options.dims`. For example, given the input shape `[2, 3, 4]` and `options.dims=[0]`, an [ndarray][@stdlib/ndarray/ctor] initial value must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the shape `[3, 4]`. Similarly, when performing the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor], an [ndarray][@stdlib/ndarray/ctor] initial value must be a zero-dimensional [ndarray][@stdlib/ndarray/ctor]. By default, the initial value is the additive identity (i.e., zero).
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform operation. If not provided, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].
-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be a numeric or "generic" [data type][@stdlib/ndarray/dtypes].

By default, the function uses the additive identity when computing the cumulative sum. To begin summing from a different value, provide an `initial` argument.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = cusum( x, 10.0 );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 9.0, 11.0, 8.0 ]
```

By default, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor]. To perform the operation over specific dimensions, provide a `dims` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
var x = new ndarray( 'generic', xbuf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var y = cusum( x, {
    'dims': [ 0 ]
});
// returns <ndarray>

var v = ndarray2array( y );
// returns [ [ -1.0, 2.0 ], [ -4.0, 6.0 ] ]

y = cusum( x, {
    'dims': [ 1 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -1.0, 1.0 ], [ -3.0, 1.0 ] ]

y = cusum( x, {
    'dims': [ 0, 1 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -1.0, 1.0 ], [ -2.0, 2.0 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var y = cusum( x, {
    'dtype': 'float64'
});
// returns <ndarray>

var dt = dtype( y );
// returns 'float64'
```

#### cusum.assign( x\[, initial], out\[, options] )

Computes the cumulative sum along one or more [ndarray][@stdlib/ndarray/ctor] dimensions and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );

var xbuf = [ -1.0, 2.0, -3.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

var ybuf = [ 0.0, 0.0, 0.0 ];
var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );

var out = cusum.assign( x, y );
// returns <ndarray>

var v = ndarray2array( out );
// returns [ -1.0, 1.0, -2.0 ]

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a numeric or generic [data type][@stdlib/ndarray/dtypes].
-   **initial**: initial value for the cumulative sum (_optional_). May be either a scalar value or an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] which [promotes][@stdlib/ndarray/promotion-rules] to the data type of the input [ndarray][@stdlib/ndarray/ctor]. If provided a scalar value, the value is cast to the data type of the input [ndarray][@stdlib/ndarray/ctor]. If provided an [ndarray][@stdlib/ndarray/ctor], the value must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the complement of the shape defined by `options.dims`. For example, given the input shape `[2, 3, 4]` and `options.dims=[0]`, an [ndarray][@stdlib/ndarray/ctor] initial value must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the shape `[3, 4]`. Similarly, when performing the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor], an [ndarray][@stdlib/ndarray/ctor] initial value must be a zero-dimensional [ndarray][@stdlib/ndarray/ctor]. By default, the initial value is the additive identity (i.e., zero).
-   **out**: output [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dims**: list of dimensions over which to perform operation. If not provided, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions iterate over [ndarray][@stdlib/ndarray/ctor] elements according to the memory layout of the input [ndarray][@stdlib/ndarray/ctor]. Accordingly, performance degradation is possible when operating over multiple dimensions of a large non-contiguous multi-dimensional input [ndarray][@stdlib/ndarray/ctor]. In such scenarios, one may want to copy an input [ndarray][@stdlib/ndarray/ctor] to contiguous memory before computing the cumulative sum.
-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, in order to avoid issues arising from integer overflow, the function must return an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] amenable to accumulation. This means that, for integer data types having small value ranges (e.g., `int8`, `uint8`, etc), the main function returns an [ndarray][@stdlib/ndarray/ctor] having at least a 32-bit integer data type. By default, if an input [ndarray][@stdlib/ndarray/ctor] has a floating-point data type, the main function returns an [ndarray][@stdlib/ndarray/ctor] having the same data type. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtype = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var cusum = require( '@stdlib/blas/ext/cusum' );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, 0, 20, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cusum( x, 100.0, {
    'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = dtype( y );
console.log( dt );

// Print the results:
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

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
