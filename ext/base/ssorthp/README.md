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

# ssorthp

> Sort a single-precision floating-point strided array using heapsort.

<section class="usage">

## Usage

```javascript
var ssorthp = require( '@stdlib/blas/ext/base/ssorthp' );
```

#### ssorthp( N, order, x, stride )

Sorts a single-precision floating-point strided array using heapsort.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );

ssorthp( x.length, 1.0, x, 1 );
// x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **order**: sort order. If `order < 0.0`, the input strided array is sorted in **decreasing** order. If `order > 0.0`, the input strided array is sorted in **increasing** order. If `order == 0.0`, the input strided array is left unchanged.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to sort every other element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );

ssorthp( 2, -1.0, x, 2 );
// x => <Float32Array>[ 3.0, -2.0, 1.0, -4.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

// Sort every other element...
ssorthp( 2, -1.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### ssorthp.ndarray( N, order, x, stride, offset )

Sorts a single-precision floating-point strided array using heapsort and alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0 ] );

ssorthp.ndarray( x.length, 1.0, x, 1, 0 );
// x => <Float32Array>[ -4.0, -2.0, 1.0, 3.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

ssorthp.ndarray( 3, 1.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, -6.0, -4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `order == 0.0`, both functions return the strided array unchanged.
-   The algorithm distinguishes between `-0` and `+0`. When sorted in increasing order, `-0` is sorted before `+0`. When sorted in decreasing order, `-0` is sorted after `+0`.
-   The algorithm sorts `NaN` values to the end. When sorted in increasing order, `NaN` values are sorted last. When sorted in decreasing order, `NaN` values are sorted first.
-   The algorithm has space complexity `O(1)` and time complexity `O(N log2 N)`.
-   The algorithm is **unstable**, meaning that the algorithm may change the order of strided array elements which are equal or equivalent (e.g., `NaN` values).
-   The input strided array is sorted **in-place** (i.e., the input strided array is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var ssorthp = require( '@stdlib/blas/ext/base/ssorthp' );

var rand = discreteUniform( -100, 100 );
var x = filledarrayBy( 10, 'float32', rand );

console.log( x );

ssorthp( x.length, -1.0, x, -1 );
console.log( x );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284][@williams:1964a].
-   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103][@floyd:1964a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dsorthp`][@stdlib/blas/ext/base/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using heapsort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gsorthp`][@stdlib/blas/ext/base/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a strided array using heapsort.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/ssort2hp`][@stdlib/blas/ext/base/ssort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@williams:1964a]: https://doi.org/10.1145/512274.512284

[@floyd:1964a]: https://doi.org/10.1145/355588.365103

<!-- <related-links> -->

[@stdlib/blas/ext/base/dsorthp]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsorthp

[@stdlib/blas/ext/base/gsorthp]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsorthp

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2hp

<!-- </related-links> -->

</section>

<!-- /.links -->
