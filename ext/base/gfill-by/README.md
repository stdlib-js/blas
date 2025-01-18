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

# gfillBy

> Fill a strided array according to a provided callback function.

<section class="usage">

## Usage

```javascript
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
```

#### gfillBy( N, x, strideX, clbk\[, thisArg] )

Fills a strided array according to a provided callback function.

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy( x.length, x, 1, fill );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input array.
-   **strideX**: stride length.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The callback function is provided the following arguments:

-   **value**: current array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: the input array.

To set the callback execution context, provide a `thisArg`.

```javascript
function fill( v, i ) {
    this.count += 1;
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var context = {
    'count': 0
};

gfillBy( x.length, x, 1, fill, context );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]

var cnt = context.count;
// returns 8
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element:

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy( 4, x, 2, fill );
// x => [ 0.0, 1.0, 3.0, -5.0, 8.0, 0.0, -3.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill( v, i ) {
    return v * i;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
gfillBy( 3, x1, 2, fill );
// x0 => <Float64Array>[ 1.0, 0.0, 3.0, -4.0, 5.0, -12.0 ]
```

#### gfillBy.ndarray( N, x, strideX, offsetX, clbk\[, thisArg] )

Fills a strided array according to a provided callback function and using alternative indexing semantics.

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gfillBy.ndarray( x.length, x, 1, 0, fill );
// x => [ 0.0, 1.0, 6.0, -15.0, 16.0, 0.0, -6.0, -21.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
function fill( v, i ) {
    return v * i;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gfillBy.ndarray( 3, x, 1, x.length-3, fill );
// x => [ 1.0, -2.0, 3.0, 0.0, 5.0, -12.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
-   When filling a strided array with a scalar constant, prefer using [`dfill`][@stdlib/blas/ext/base/dfill], [`sfill`][@stdlib/blas/ext/base/sfill], and/or [`gfill`][@stdlib/blas/ext/base/gfill], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var Float64Array = require( '@stdlib/array/float64' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );

var x = new Float64Array( 10 );
console.log( x );

gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/dfill

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/sfill

<!-- <related-links> -->

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/gfill

<!-- </related-links> -->

</section>

<!-- /.links -->
