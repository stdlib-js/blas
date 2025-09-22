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

# sorthp

> Sort an input [ndarray][@stdlib/ndarray/ctor] along one or more [ndarray][@stdlib/ndarray/ctor] dimensions using heapsort.

<section class="usage">

## Usage

```javascript
var sorthp = require( '@stdlib/blas/ext/sorthp' );
```

#### sorthp( x\[, sortOrder]\[, options] )

Sorts an input [ndarray][@stdlib/ndarray/ctor] along one or more [ndarray][@stdlib/ndarray/ctor] dimensions using heapsort.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

var y = sorthp( x );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -3.0, -1.0, 2.0 ]

var bool = ( x === y );
// returns true
```

The function has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have a real-valued or "generic" [data type][@stdlib/ndarray/dtypes].
-   **sortOrder**: sort order (_optional_). May be either a scalar value, string, or an [ndarray][@stdlib/ndarray/ctor] having a real-valued or "generic" [data type][@stdlib/ndarray/dtypes]. If provided an [ndarray][@stdlib/ndarray/ctor], the value must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the complement of the shape defined by `options.dims`. For example, given the input shape `[2, 3, 4]` and `options.dims=[0]`, an [ndarray][@stdlib/ndarray/ctor] sort order must have a shape which is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with the shape `[3, 4]`. Similarly, when performing the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor], an [ndarray][@stdlib/ndarray/ctor] sort order must be a zero-dimensional [ndarray][@stdlib/ndarray/ctor]. By default, the sort order is `1` (i.e., increasing order).
-   **options**: function options (_optional_).

The function accepts the following options:

-   **dims**: list of dimensions over which to perform operation. If not provided, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor].

By default, the function sorts elements in increasing order. To sort in a different order, provide a `sortOrder` argument.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

var y = sorthp( x, -1.0 );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ 2.0, -1.0, -3.0 ]
```

In addition to numeric values, one can specify the sort order via one of the following string literals: `'ascending'`, `'asc'`, `'descending'`, or `'desc'`. The first two literals indicate to sort in ascending (i.e., increasing) order. The last two literals indicate to sort in descending (i.e., decreasing) order.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0 ] );

// Sort in ascending order:
var y = sorthp( x, 'asc' );
// returns <ndarray>

var arr = ndarray2array( y );
// returns [ -3.0, -1.0, 2.0 ]

// Sort in descending order:
y = sorthp( x, 'descending' );
// returns <ndarray>

arr = ndarray2array( y );
// returns [ 2.0, -1.0, -3.0 ]
```

By default, the function performs the operation over all elements in a provided input [ndarray][@stdlib/ndarray/ctor]. To perform the operation over specific dimensions, provide a `dims` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

var x = array( [ -1.0, 2.0, -3.0, 4.0 ], {
    'shape': [ 2, 2 ],
    'order': 'row-major'
});

var v = ndarray2array( x );
// returns [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ]

var y = sorthp( x, {
    'dims': [ 0 ]
});
// returns <ndarray>

v = ndarray2array( y );
// returns [ [ -3.0, 2.0 ], [ -1.0, 4.0 ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input [ndarray][@stdlib/ndarray/ctor] is sorted **in-place** (i.e., the input [ndarray][@stdlib/ndarray/ctor] is **mutated**).
-   If `sortOrder < 0.0` or is either `'desc'` or `'descending'`, the input [ndarray][@stdlib/ndarray/ctor] is sorted in **decreasing** order. If `sortOrder > 0.0` or is either `'asc'` or `'ascending'`, the input [ndarray][@stdlib/ndarray/ctor] is sorted in **increasing** order. If `sortOrder == 0.0`, the input [ndarray][@stdlib/ndarray/ctor] is left unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
-   The algorithm is **unstable**, meaning that the algorithm may change the order of [ndarray][@stdlib/ndarray/ctor] elements which are equal or equivalent (e.g., `NaN` values).
-   The function iterates over [ndarray][@stdlib/ndarray/ctor] elements according to the memory layout of the input [ndarray][@stdlib/ndarray/ctor]. Accordingly, performance degradation is possible when operating over multiple dimensions of a large non-contiguous multi-dimensional input [ndarray][@stdlib/ndarray/ctor]. In such scenarios, one may want to copy an input [ndarray][@stdlib/ndarray/ctor] to contiguous memory before sorting.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var sorthp = require( '@stdlib/blas/ext/sorthp' );

// Generate an array of random numbers:
var xbuf = discreteUniform( 25, -20, 20, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 5 ], [ 5, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

// Perform operation:
sorthp( x, {
    'dims': [ 0 ]
});

// Print the results:
console.log( ndarray2array( x ) );
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

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
