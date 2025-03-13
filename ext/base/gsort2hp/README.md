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

# gsort2hp

> Simultaneously sort two strided arrays based on the sort order of the first array using heapsort.

<section class="usage">

## Usage

```javascript
var gsort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
```

#### gsort2hp( N, order, x, strideX, y, strideY )

Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];
var y = [ 0.0, 1.0, 2.0, 3.0 ];

gsort2hp( x.length, 1.0, x, 1, y, 1 );

console.log( x );
// => [ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => [ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array `x` is sorted in **decreasing** order. If `order > 0.0`, the input strided array `x` is sorted in **increasing** order. If `order == 0.0`, the input strided arrays are left unchanged.
-   **x**: first input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to sort every other element:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];
var y = [ 0.0, 1.0, 2.0, 3.0 ];

gsort2hp( 2, -1.0, x, 2, y, 2 );

console.log( x );
// => [ 3.0, -2.0, 1.0, -4.0 ]

console.log( y );
// => [ 2.0, 1.0, 0.0, 3.0 ]
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
gsort2hp( 2, -1.0, x1, 2, y1, 2 );

console.log( x0 );
// => <Float64Array>[ 1.0, 4.0, 3.0, 2.0 ]

console.log( y0 );
// => <Float64Array>[ 0.0, 3.0, 2.0, 1.0 ]
```

#### gsort2hp.ndarray( N, order, x, strideX, offsetX, y, strideY, offsetY )

Simultaneously sorts two strided arrays based on the sort order of the first array using heapsort and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0 ];
var y = [ 0.0, 1.0, 2.0, 3.0 ];

gsort2hp.ndarray( x.length, 1.0, x, 1, 0, y, 1, 0 );

console.log( x );
// => [ -4.0, -2.0, 1.0, 3.0 ]

console.log( y );
// => [ 3.0, 1.0, 0.0, 2.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to access only the last three elements:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];
var y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

gsort2hp.ndarray( 3, 1.0, x, 1, x.length-3, y, 1, y.length-3 );

console.log( x );
// => [ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]

console.log( y );
// => [ 0.0, 1.0, 2.0, 5.0, 3.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions leave `x` and `y` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor])
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and worst case time complexity `O(N^2)`.
-   The algorithm is efficient for **small** strided arrays (typically `N <= 20`) and is particularly efficient for sorting strided arrays which are already substantially sorted.
-   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
-   The algorithm is **unstable**, meaning that the algorithm may change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   Depending on the environment, the typed versions ([`dsort2hp`][@stdlib/blas/ext/base/dsort2hp], [`ssort2hp`][@stdlib/blas/ext/base/ssort2hp], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gsort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
var y = discreteUniform( 10, -100, 100, {
    'dtype': 'float64'
});
console.log( x );
console.log( y );

gsort2hp( x.length, -1.0, x, -1, y, -1 );
console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284][@williams:1964a].
-   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103][@floyd:1964a].

</section>

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/blas/ext/base/dsort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsort2hp

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2hp

[@williams:1964a]: https://doi.org/10.1145/512274.512284

[@floyd:1964a]: https://doi.org/10.1145/355588.365103

</section>

<!-- /.links -->
