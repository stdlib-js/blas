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

# Base

> Base ndarray extended BLAS functions.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/blas/ext/base/ndarray' );
```

#### ns

Namespace containing base ndarray extended BLAS functions.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following APIs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`csum( arrays )`][@stdlib/blas/ext/base/ndarray/csum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.</span>
-   <span class="signature">[`dcusum( arrays )`][@stdlib/blas/ext/base/ndarray/dcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`dsum( arrays )`][@stdlib/blas/ext/base/ndarray/dsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision floating-point ndarray.</span>
-   <span class="signature">[`gcusum( arrays )`][@stdlib/blas/ext/base/ndarray/gcusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional ndarray.</span>
-   <span class="signature">[`gsum( arrays )`][@stdlib/blas/ext/base/ndarray/gsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional ndarray.</span>
-   <span class="signature">[`scusum( arrays )`][@stdlib/blas/ext/base/ndarray/scusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum of a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`ssum( arrays )`][@stdlib/blas/ext/base/ndarray/ssum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional single-precision floating-point ndarray.</span>
-   <span class="signature">[`zsum( arrays )`][@stdlib/blas/ext/base/ndarray/zsum]</span><span class="delimiter">: </span><span class="description">compute the sum of all elements in a one-dimensional double-precision complex floating-point ndarray.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/blas/ext/base/ndarray' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/blas/ext/base/ndarray/csum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/csum

[@stdlib/blas/ext/base/ndarray/dcusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/dcusum

[@stdlib/blas/ext/base/ndarray/dsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/dsum

[@stdlib/blas/ext/base/ndarray/gcusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/gcusum

[@stdlib/blas/ext/base/ndarray/gsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/gsum

[@stdlib/blas/ext/base/ndarray/scusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/scusum

[@stdlib/blas/ext/base/ndarray/ssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/ssum

[@stdlib/blas/ext/base/ndarray/zsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray/zsum

<!-- </toc-links> -->

</section>

<!-- /.links -->
