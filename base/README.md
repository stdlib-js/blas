<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# BLAS

> Base (i.e., lower-level) basic linear algebra subprograms (BLAS).

<section class="usage">

## Usage

```javascript
var blas = require( '@stdlib/blas/base' );
```

#### blas

Namespace for "base" (i.e., lower-level) basic linear algebra subprograms (BLAS).

```javascript
var o = blas;
// returns {...}
```

### BLAS Level 1

<!-- <toc pattern="+(*amax|*asum|*axpy|*copy|*dot*|*imax1|*nrm2|*rot*|*scal|*sum1|*swap)"> -->

<div class="namespace-toc">

-   <span class="signature">[`ccopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/ccopy]</span><span class="delimiter">: </span><span class="description">copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.</span>
-   <span class="signature">[`cscal( N, ca, cx, strideX )`][@stdlib/blas/base/cscal]</span><span class="delimiter">: </span><span class="description">scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.</span>
-   <span class="signature">[`cswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/cswap]</span><span class="delimiter">: </span><span class="description">interchange two complex single-precision floating-point vectors.</span>
-   <span class="signature">[`dasum( N, x, stride )`][@stdlib/blas/base/dasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`daxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`dcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`ddot( N, x, strideX, y, strideY )`][@stdlib/blas/base/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="signature">[`dnrm2( N, x, stride )`][@stdlib/blas/base/dnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a double-precision floating-point vector.</span>
-   <span class="signature">[`drotg( a, b )`][@stdlib/blas/base/drotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`dscal( N, alpha, x, stride )`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`dsdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/dsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product with extended accumulation and result of two single-precision floating-point vectors.</span>
-   <span class="signature">[`dswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="signature">[`gasum( N, x, stride )`][@stdlib/blas/base/gasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`gaxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`gcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/gcopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`gdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="signature">[`gnrm2( N, x, stride )`][@stdlib/blas/base/gnrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a vector.</span>
-   <span class="signature">[`gscal( N, alpha, x, stride )`][@stdlib/blas/base/gscal]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`gswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="signature">[`sasum( N, x, stride )`][@stdlib/blas/base/sasum]</span><span class="delimiter">: </span><span class="description">compute the sum of absolute values (_L1_ norm).</span>
-   <span class="signature">[`saxpy( N, alpha, x, strideX, y, strideY )`][@stdlib/blas/base/saxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant `alpha` and add the result to `y`.</span>
-   <span class="signature">[`scopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/scopy]</span><span class="delimiter">: </span><span class="description">copy values from `x` into `y`.</span>
-   <span class="signature">[`sdot( N, x, strideX, y, strideY )`][@stdlib/blas/base/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="signature">[`sdsdot( N, scalar, x, strideX, y, strideY )`][@stdlib/blas/base/sdsdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors with extended accumulation.</span>
-   <span class="signature">[`snrm2( N, x, stride )`][@stdlib/blas/base/snrm2]</span><span class="delimiter">: </span><span class="description">calculate the L2-norm of a single-precision floating-point vector.</span>
-   <span class="signature">[`srotg( a, b )`][@stdlib/blas/base/srotg]</span><span class="delimiter">: </span><span class="description">construct a Givens plane rotation.</span>
-   <span class="signature">[`sscal( N, alpha, x, stride )`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector `x` by a constant `alpha`.</span>
-   <span class="signature">[`sswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>
-   <span class="signature">[`zcopy( N, x, strideX, y, strideY )`][@stdlib/blas/base/zcopy]</span><span class="delimiter">: </span><span class="description">copy values from one complex double-precision floating-point vector to another complex double-precision floating-point vector.</span>
-   <span class="signature">[`zswap( N, x, strideX, y, strideY )`][@stdlib/blas/base/zswap]</span><span class="delimiter">: </span><span class="description">interchange two complex double-precision floating-point vectors.</span>

</div>

<!-- </toc> -->

### BLAS Level 2

<!-- <toc pattern="+(*gemv|*ger|*hemv|*symv|*her*|*syr*|*trmv|*trsv|*pmv|*hpmv|*spmv|*hpr*|*spr*|*tmpv|*tpsv|*gbmv|*hbmv|*sbmv|*tbmv|*tbsv)"> -->

<!-- </toc> -->

### BLAS Level 3

<!-- <toc pattern="+(*gemm|*hemm|*symm|*herk|*syrk|*her2k|*syr2k|*trmm|*trsm)"> -->

<!-- </toc> -->

### Scalar Operations

<!-- <toc pattern="+(*abs1)"> -->

<!-- </toc> -->

### Auxiliary BLAS

<!-- <toc pattern="+(*lsame|*xerbla)"> -->

<!-- </toc> -->

### Utilities

<!-- <toc pattern="+(*assert|*diagonal*|*layout*|*matrix*|*operation*|*transpose*)"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var blas = require( '@stdlib/blas/base' );

console.log( objectKeys( blas ) );
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

[@stdlib/blas/base/ccopy]: https://github.com/stdlib-js/blas/tree/main/base/ccopy

[@stdlib/blas/base/cscal]: https://github.com/stdlib-js/blas/tree/main/base/cscal

[@stdlib/blas/base/cswap]: https://github.com/stdlib-js/blas/tree/main/base/cswap

[@stdlib/blas/base/dasum]: https://github.com/stdlib-js/blas/tree/main/base/dasum

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas/tree/main/base/daxpy

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas/tree/main/base/dcopy

[@stdlib/blas/base/ddot]: https://github.com/stdlib-js/blas/tree/main/base/ddot

[@stdlib/blas/base/dnrm2]: https://github.com/stdlib-js/blas/tree/main/base/dnrm2

[@stdlib/blas/base/drotg]: https://github.com/stdlib-js/blas/tree/main/base/drotg

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas/tree/main/base/dscal

[@stdlib/blas/base/dsdot]: https://github.com/stdlib-js/blas/tree/main/base/dsdot

[@stdlib/blas/base/dswap]: https://github.com/stdlib-js/blas/tree/main/base/dswap

[@stdlib/blas/base/gasum]: https://github.com/stdlib-js/blas/tree/main/base/gasum

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas/tree/main/base/gaxpy

[@stdlib/blas/base/gcopy]: https://github.com/stdlib-js/blas/tree/main/base/gcopy

[@stdlib/blas/base/gdot]: https://github.com/stdlib-js/blas/tree/main/base/gdot

[@stdlib/blas/base/gnrm2]: https://github.com/stdlib-js/blas/tree/main/base/gnrm2

[@stdlib/blas/base/gscal]: https://github.com/stdlib-js/blas/tree/main/base/gscal

[@stdlib/blas/base/gswap]: https://github.com/stdlib-js/blas/tree/main/base/gswap

[@stdlib/blas/base/sasum]: https://github.com/stdlib-js/blas/tree/main/base/sasum

[@stdlib/blas/base/saxpy]: https://github.com/stdlib-js/blas/tree/main/base/saxpy

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas/tree/main/base/scopy

[@stdlib/blas/base/sdot]: https://github.com/stdlib-js/blas/tree/main/base/sdot

[@stdlib/blas/base/sdsdot]: https://github.com/stdlib-js/blas/tree/main/base/sdsdot

[@stdlib/blas/base/snrm2]: https://github.com/stdlib-js/blas/tree/main/base/snrm2

[@stdlib/blas/base/srotg]: https://github.com/stdlib-js/blas/tree/main/base/srotg

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas/tree/main/base/sscal

[@stdlib/blas/base/sswap]: https://github.com/stdlib-js/blas/tree/main/base/sswap

[@stdlib/blas/base/zcopy]: https://github.com/stdlib-js/blas/tree/main/base/zcopy

[@stdlib/blas/base/zswap]: https://github.com/stdlib-js/blas/tree/main/base/zswap

<!-- </toc-links> -->

</section>

<!-- /.links -->
