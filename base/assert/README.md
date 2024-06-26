<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Assert

> Base BLAS assertion utilities.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/blas/base/assert' );
```

#### ns

Base BLAS assertion utilities.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`isDiagonalType( value )`][@stdlib/blas/base/assert/is-diagonal-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a BLAS diagonal type.</span>
-   <span class="signature">[`isLayout( value )`][@stdlib/blas/base/assert/is-layout]</span><span class="delimiter">: </span><span class="description">test if an input value is a BLAS memory layout.</span>
-   <span class="signature">[`isMatrixTriangle( value )`][@stdlib/blas/base/assert/is-matrix-triangle]</span><span class="delimiter">: </span><span class="description">test if an input value is a BLAS matrix triangle.</span>
-   <span class="signature">[`isOperationSide( value )`][@stdlib/blas/base/assert/is-operation-side]</span><span class="delimiter">: </span><span class="description">test if an input value is a BLAS operation side.</span>
-   <span class="signature">[`isTransposeOperation( value )`][@stdlib/blas/base/assert/is-transpose-operation]</span><span class="delimiter">: </span><span class="description">test if an input value is a BLAS transpose operation.</span>

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
var ns = require( '@stdlib/blas/base/assert' );

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

[@stdlib/blas/base/assert/is-diagonal-type]: https://github.com/stdlib-js/blas/tree/main/base/assert/is-diagonal-type

[@stdlib/blas/base/assert/is-layout]: https://github.com/stdlib-js/blas/tree/main/base/assert/is-layout

[@stdlib/blas/base/assert/is-matrix-triangle]: https://github.com/stdlib-js/blas/tree/main/base/assert/is-matrix-triangle

[@stdlib/blas/base/assert/is-operation-side]: https://github.com/stdlib-js/blas/tree/main/base/assert/is-operation-side

[@stdlib/blas/base/assert/is-transpose-operation]: https://github.com/stdlib-js/blas/tree/main/base/assert/is-transpose-operation

<!-- </toc-links> -->

</section>

<!-- /.links -->
