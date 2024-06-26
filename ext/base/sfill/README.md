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

# sfill

> Fill a single-precision floating-point strided array with a specified scalar constant.

<section class="usage">

## Usage

```javascript
var sfill = require( '@stdlib/blas/ext/base/sfill' );
```

#### sfill( N, alpha, x, stride )

Fills a single-precision floating-point strided array `x` with a specified scalar constant `alpha`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sfill( x.length, 5.0, x, 1 );
// x => <Float32Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **stride**: index increment.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to fill every other element

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sfill( 4, 5.0, x, 2 );
// x => <Float32Array>[ 5.0, 1.0, 5.0, -5.0, 5.0, 0.0, 5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial array...
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Fill every other element...
sfill( 3, 5.0, x1, 2 );
// x0 => <Float32Array>[ 1.0, 5.0, 3.0, 5.0, 5.0, 5.0 ]
```

#### sfill.ndarray( N, alpha, x, stride, offset )

Fills a single-precision floating-point strided array `x` with a specified scalar constant `alpha` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

sfill.ndarray( x.length, 5.0, x, 1, 0 );
// x => <Float32Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

sfill.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => <Float32Array>[ 1.0, -2.0, 3.0, 5.0, 5.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return the strided array unchanged.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var sfill = require( '@stdlib/blas/ext/base/sfill' );

var rand = discreteUniform( -100, 100 );

var x = filledarrayBy( 10, 'float32', rand );
console.log( x );

sfill( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/dfill`][@stdlib/blas/ext/base/dfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/gfill`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/dfill

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/gfill

<!-- </related-links> -->

</section>

<!-- /.links -->
