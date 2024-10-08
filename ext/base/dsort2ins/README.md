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

# dsort2ins

> Simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.

<section class="usage">

## Usage

```javascript
var dsort2ins = require( '@stdlib/blas/ext/base/dsort2ins' );
```

#### dsort2ins( N, order, x, strideX, y, strideY )

Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array `x` using insertion sort.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

dsort2ins( x.length, 1.0, x, 1, y, 1 );

console.log( x );
// => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array `x` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `x` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: `x` index increment.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: `y` index increment.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to sort every other element

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

dsort2ins( 2, -1.0, x, 2, y, 2 );

console.log( x );
// => <Float64Array>[ 3.0, -2.0, 1.0, -4.0 ]

console.log( y );
// => <Float64Array>[ 2.0, 1.0, 0.0, 3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sort every other element...
dsort2ins( 2, -1.0, x1, 2, y1, 2 );

console.log( x0 );
// => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]

console.log( y0 );
// => <Float64Array>[ 0.0, 3.0, 2.0, 1.0 ]
```

#### dsort2ins.ndarray( N, order, x, strideX, offsetX, y, strideY, offsetY )

Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array `x` using insertion sort and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

dsort2ins.ndarray( x.length, 1.0, x, 1, 0, y, 1, 0 );

console.log( x );
// => <Float64Array>[ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => <Float64Array>[ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: `x` starting index.
-   **offsetY**: `y` starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

dsort2ins.ndarray( 3, 1.0, x, 1, x.length-3, y, 1, y.length-3 );

console.log( x );
// => <Float64Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]

console.log( y );
// => <Float64Array>[ 0.0, 1.0, 2.0, 5.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions leave `x` and `y` unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided arrays are sorted **in-place** (i.e., the input strided arrays are **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var Float64Array = require( '@stdlib/array/float64' );
var dsort2ins = require( '@stdlib/blas/ext/base/dsort2ins' );

var rand;
var sign;
var i;

var x = new Float64Array( 10 );
var y = new Float64Array( 10 ); // index array
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
    y[ i ] = i;
}
console.log( x );
console.log( y );

dsort2ins( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsortins`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsort2ins`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssort2ins`][@stdlib/blas/ext/base/ssort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsortins

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2ins

[@stdlib/blas/ext/base/ssort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2ins

<!-- </related-links> -->

</section>

<!-- /.links -->
