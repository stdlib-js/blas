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

# gfindIndex

> Return the index of the first element which passes a test implemented by a predicate function.

<section class="usage">

## Usage

```javascript
var gfindIndex = require( '@stdlib/blas/ext/base/gfind-index' );
```

#### gfindIndex( N, x, strideX, clbk\[, thisArg] )

Returns the index of the first element which passes a test implemented by a predicate function.

```javascript
function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = [ 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var idx = gfindIndex( x.length, x, 1, isEven );
// returns 3
```

If no element passes a test implemented by a predicate function, the function returns `-1`.

```javascript
function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = [ 1.0, 3.0, 5.0, 7.0, 9.0 ];

var idx = gfindIndex( x.length, x, 1, isEven );
// returns -1
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
function isEven( v ) {
    this.count += 1;
    return v % 2.0 === 0.0;
}

var x = [ 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var ctx = {
    'count': 0
};

var idx = gfindIndex( x.length, x, 1, isEven, ctx );
// returns 3

var count = ctx.count;
// returns 4
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to test every other element:

```javascript
function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = [ 1.0, 3.0, -5.0, 0.0, 4.0, -1.0, -3.0 ];

var idx = gfindIndex( 4, x, 2, isEven );
// returns 2
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

// Initial array:
var x0 = new Float64Array( [ 1.0, 3.0, 4.0, -5.0, 7.0, 6.0 ] );

// Create an offset view:
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var idx = gfindIndex( 3, x1, 2, isEven );
// returns 2
```

#### gfindIndex.ndarray( N, x, strideX, offsetX, clbk\[, thisArg] )

Returns the index of the first element which passes a test implemented by a predicate function using alternative indexing semantics.

```javascript
function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = [ 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var idx = gfindIndex.ndarray( x.length, x, 1, 0, isEven );
// returns 3
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = [ 1.0, -2.0, -4.0, 5.0, -7.0, 6.0 ];

var idx = gfindIndex.ndarray( 3, x, 1, x.length-3, isEven );
// returns 2
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `-1`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gfindIndex = require( '@stdlib/blas/ext/base/gfind-index' );

function isEven( v ) {
    return v % 2.0 === 0.0;
}

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'generic'
});
console.log( x );

var idx = gfindIndex( x.length, x, 1, isEven );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

</section>

<!-- /.links -->
