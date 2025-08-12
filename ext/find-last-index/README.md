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

# findLastIndex

> Return the index of the last element along an [ndarray][@stdlib/ndarray/ctor] dimension which passes a test implemented by a predicate function.

<section class="usage">

## Usage

```javascript
var findLastIndex = require( '@stdlib/blas/ext/find-last-index' );
```

#### findLastIndex( x\[, options], clbk\[, thisArg] )

Returns the index of the last element along an [ndarray][@stdlib/ndarray/ctor] dimension which passes a test implemented by a predicate function.

```javascript
var array = require( '@stdlib/ndarray/array' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

// Create an input ndarray:
var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
// returns <ndarray>

// Perform operation:
var out = findLastIndex( x, isEven );
// returns <ndarray>

var idx = out.get();
// returns 5
```

The function has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have at least one dimension.
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

The invoked callback is provided three arguments:

-   **value**: current array element.
-   **idx**: current array element index.
-   **array**: input ndarray.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array = require( '@stdlib/ndarray/array' );

function isEven( v ) {
    this.count += 1;
    return v % 2.0 === 0.0;
}

var x = array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

var ctx = {
    'count': 0
};
var out = findLastIndex( x, isEven, ctx );
// returns <ndarray>

var idx = out.get();
// returns 5

var count = ctx.count;
// returns 1
```

The function accepts the following options:

-   **dtype**: output ndarray [data type][@stdlib/ndarray/dtypes]. Must be an integer index or generic [data type][@stdlib/ndarray/dtypes].
-   **dim**: dimension over which to perform operation. If provided a negative integer, the dimension along which to perform the operation is determined by counting backward from the last dimension (where `-1` refers to the last dimension). Default: `-1`.
-   **keepdims**: boolean indicating whether the reduced dimensions should be included in the returned [ndarray][@stdlib/ndarray/ctor] as singleton dimensions. Default: `false`.

If no element along an [ndarray][@stdlib/ndarray/ctor] dimension passes a test implemented by the predicate function, the corresponding element in the returned [ndarray][@stdlib/ndarray/ctor] is `-1`.

```javascript
var array = require( '@stdlib/ndarray/array' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

// Create an input ndarray:
var x = array( [ 1.0, 3.0, 5.0, 7.0 ] );
// returns <ndarray>

// Perform operation:
var out = findLastIndex( x, isEven );
// returns <ndarray>

var idx = out.get();
// returns -1
```

By default, the function performs the operation over elements in the last dimension. To perform the operation over a different dimension, provide a `dim` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var array = require( '@stdlib/ndarray/array' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = array( [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ] );

var opts = {
    'dim': 0
};

var out = findLastIndex( x, opts, isEven );
// returns <ndarray>

var idx = ndarray2array( out );
// returns [ -1, 1 ]
```

By default, the function excludes reduced dimensions from the output [ndarray][@stdlib/ndarray/ctor]. To include the reduced dimensions as singleton dimensions, set the `keepdims` option to `true`.

```javascript
var array = require( '@stdlib/ndarray/array' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = array( [ [ -1.0, 2.0 ], [ -3.0, 4.0 ] ] );

var opts = {
    'dim': 0,
    'keepdims': true
};

var out = findLastIndex( x, opts, isEven );
// returns <ndarray>

var idx = ndarray2array( out );
// returns [ [ -1, 1 ] ]
```

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dtype = require( '@stdlib/ndarray/dtype' );
var array = require( '@stdlib/ndarray/array' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = array( [ 1.0, 2.0, 3.0, 4.0 ] );

var opts = {
    'dtype': 'generic'
};

var idx = findLastIndex( x, opts, isEven );
// returns <ndarray>

var dt = dtype( idx );
// returns 'generic'
```

#### findLastIndex.assign( x, out\[, options], clbk\[, thisArg] )

Returns the index of the last element along an [ndarray][@stdlib/ndarray/ctor] dimension which passes a test implemented by a predicate function and assigns results to a provided output [ndarray][@stdlib/ndarray/ctor].

```javascript
var array = require( '@stdlib/ndarray/array' );
var zeros = require( '@stdlib/ndarray/zeros' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y = zeros( [], {
    'dtype': 'int32'
});

var out = findLastIndex.assign( x, y, isEven );
// returns <ndarray>

var idx = out.get();
// returns 3

var bool = ( out === y );
// returns true
```

The method has the following parameters:

-   **x**: input [ndarray][@stdlib/ndarray/ctor]. Must have at least one dimension.
-   **out**: output [ndarray][@stdlib/ndarray/ctor].
-   **options**: function options (_optional_).
-   **clbk**: callback function.
-   **thisArg**: callback execution context (_optional_).

The method accepts the following options:

-   **dim**: dimension over which to perform operation. If provided a negative integer, the dimension along which to perform the operation is determined by counting backward from the last dimension (where `-1` refers to the last dimension). Default: `-1`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A provided callback function should return a boolean.
-   Setting the `keepdims` option to `true` can be useful when wanting to ensure that the output [ndarray][@stdlib/ndarray/ctor] is [broadcast-compatible][@stdlib/ndarray/base/broadcast-shapes] with ndarrays having the same shape as the input [ndarray][@stdlib/ndarray/ctor].
-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having an integer index or "generic" [data type][@stdlib/ndarray/dtypes]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var findLastIndex = require( '@stdlib/blas/ext/find-last-index' );

// Define a callback function:
function isEven( v ) {
    return v % 2.0 === 0.0;
}

// Generate an array of random numbers:
var xbuf = discreteUniform( 10, 0, 20, {
    'dtype': 'generic'
});

// Wrap in an ndarray:
var x = new ndarray( 'generic', xbuf, [ 5, 2 ], [ 2, 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var opts = {
    'dim': 0
};

// Perform operation:
var idx = findLastIndex( x, opts, isEven );

// Print the results:
console.log( ndarray2array( idx ) );
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

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/ndarray-output-dtype-policies

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
