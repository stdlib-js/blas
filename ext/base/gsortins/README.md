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

# gsortins

> Sort a strided array using insertion sort.

<section class="usage">

## Usage

```javascript
var gsortins = require( '@stdlib/blas/ext/base/gsortins' );
```

#### gsortins( N, order, x, strideX )

Sorts a strided array using insertion sort.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];

gsortins( x.length, 1.0, x, 1 );
// x => [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to sort every other element:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];

gsortins( 2, -1.0, x, 2 );
// x => [ 3.0, -2.0, 1.0, -4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Sort every other element...
gsortins( 2, -1.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### gsortins.ndarray( N, order, x, strideX, offsetX )

Sorts a strided array using insertion sort and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];

gsortins.ndarray( x.length, 1.0, x, 1, 0 );
// x => [ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gsortins.ndarray( 3, 1.0, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions return `x` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm is **stable**, meaning that the algorithm does **not** change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided array is sorted **in-place** (i.e., the input strided array is **mutated**).
-   Depending on the environment, the typed versions ([`dsortins`][@stdlib/blas/ext/base/dsortins], [`ssortins`][@stdlib/blas/ext/base/ssortins], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gsortins = require( '@stdlib/blas/ext/base/gsortins' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );

gsortins( x.length, -1.0, x, -1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsortins`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsort2ins`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssortins`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsortins

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2ins

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssortins

<!-- </related-links> -->

</section>

<!-- /.links -->
