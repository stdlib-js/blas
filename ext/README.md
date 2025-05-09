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

# Extended BLAS

> Extended basic linear algebra subprograms (BLAS).

<section class="usage">

## Usage

```javascript
var extblas = require( '@stdlib/blas/ext' );
```

#### extblas

Namespace for extended basic linear algebra subprograms (BLAS).

```javascript
var o = extblas;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/blas/ext/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).</span>
-   <span class="signature">[`cusum( x[, initial][, options] )`][@stdlib/blas/ext/cusum]</span><span class="delimiter">: </span><span class="description">compute the cumulative sum along one or more ndarray dimensions.</span>
-   <span class="signature">[`sum( x[, options] )`][@stdlib/blas/ext/sum]</span><span class="delimiter">: </span><span class="description">compute the sum along one or more ndarray dimensions.</span>

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
var ns = require( '@stdlib/blas/ext' );

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

[@stdlib/blas/ext/base]: https://github.com/stdlib-js/blas/tree/main/ext/base

[@stdlib/blas/ext/cusum]: https://github.com/stdlib-js/blas/tree/main/ext/cusum

[@stdlib/blas/ext/sum]: https://github.com/stdlib-js/blas/tree/main/ext/sum

<!-- </toc-links> -->

</section>

<!-- /.links -->
