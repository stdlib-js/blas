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

# zdscal

> Scale a double-precision complex floating-point vector by a double-precision floating-point constant.

<section class="usage">

## Usage

```javascript
var zdscal = require( '@stdlib/blas/base/zdscal' );
```

#### zdscal( N, da, zx, strideZX )

Scales a double-precision complex floating-point vector by a double-precision floating-point constant.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

zdscal( 3, 2.0, zx, 1 );
// zx => <Complex128Array>[ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **da**: scalar constant.
-   **zx**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideZX**: stride length for `zx`.

The `N` and stride parameters determine which elements in `zx` are scaled by `da`. For example, to scale every other element in `zx` by `da`,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zdscal( 2, 2.0, zx, 2 );
// zx => <Complex128Array>[ 2.0, 4.0, 3.0, 4.0, 10.0, 12.0, 7.0, 8.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

// Initial array:
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

// Create an offset view:
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every element in `zx1`:
zdscal( 3, 2.0, zx1, 1 );
// zx0 => <Complex128Array>[ 1.0, 2.0, 6.0, 8.0, 10.0, 12.0, 14.0, 16.0 ]
```

#### zdscal.ndarray( N, da, zx, strideZX, offsetZX )

Scales a double-precision complex floating-point vector by a double-precision floating-point constant using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

zdscal.ndarray( 3, 2.0, zx, 1, 0 );
// zx => <Complex128Array>[ 2.0, 4.0, 6.0, 8.0, 10.0, 12.0 ]
```

The function has the following additional parameters:

-   **offsetZX**: starting index for `zx`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to scale every other element in the input strided array starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

zdscal.ndarray( 2, 2.0, zx, 2, 1 );
// zx => <Complex128Array>[ 1.0, 2.0, 6.0, 8.0, 5.0, 6.0, 14.0, 16.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `zx` unchanged.
-   `zdscal()` corresponds to the [BLAS][blas] level 1 function [`zdscal`][zdscal].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zdscal = require( '@stdlib/blas/base/zdscal' );

function rand() {
    return new Complex128( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

var zx = filledarrayBy( 10, 'complex128', rand );
console.log( zx.toString() );

zdscal( zx.length, 2.0, zx, 1 );
console.log( zx.toString() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[blas]: http://www.netlib.org/blas

[zdscal]: https://www.netlib.org/lapack/explore-html/d2/de8/group__scal_ga40d50a435a5fcf16cf41fa80d746819f.html#ga40d50a435a5fcf16cf41fa80d746819f

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

</section>

<!-- /.links -->
