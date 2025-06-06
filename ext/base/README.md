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

> Base (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/blas/ext/base' );
```

#### ns

Namespace for "base" (i.e., lower-level) extensions to basic linear algebra subprograms (BLAS).

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/cfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision complex floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`csum( N, x, strideX )`][@stdlib/blas/ext/base/csum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision complex floating-point strided array elements.</span>
-   <span class="signature">[`csumkbn( N, x, strideX )`][@stdlib/blas/ext/base/csumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a double-precision floating-point strided array.</span>
-   <span class="signature">[`dapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`dapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`dapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each double-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`dasumpw( N, x, strideX )`][@stdlib/blas/ext/base/dasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`dcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`dfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`dnanasum( N, x, strideX )`][@stdlib/blas/ext/base/dnanasum]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnanasumors( N, x, strideX )`][@stdlib/blas/ext/base/dnanasumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnannsum( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumkbn2( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnannsumpw( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`dnansum( N, x, strideX )`][@stdlib/blas/ext/base/dnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`dnansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/dnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/dnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dnansumors( N, x, strideX )`][@stdlib/blas/ext/base/dnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`dnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/dnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`drev( N, x, strideX )`][@stdlib/blas/ext/base/drev]</span><span class="delimiter">: </span><span class="description">reverse a double-precision floating-point strided array in-place.</span>
-   <span class="signature">[`dsapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dsapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element, and compute the sum using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/dsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a constant to each single-precision floating-point strided array element, and compute the sum using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsnannsumors( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/dsnannsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansum( N, x, strideX )`][@stdlib/blas/ext/base/dsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumors( N, x, strideX )`][@stdlib/blas/ext/base/dsnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using ordinary recursive summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/dsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values, using pairwise summation with extended accumulation, and returning an extended precision result.</span>
-   <span class="signature">[`dsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`dsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`dsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/dsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`dsorthp( N, order, x, strideX )`][@stdlib/blas/ext/base/dsorthp]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`dsortins( N, order, x, strideX )`][@stdlib/blas/ext/base/dsortins]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`dsortsh( N, order, x, stride )`][@stdlib/blas/ext/base/dsortsh]</span><span class="delimiter">: </span><span class="description">sort a double-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`dssum( N, x, strideX )`][@stdlib/blas/ext/base/dssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumors( N, x, strideX )`][@stdlib/blas/ext/base/dssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dssumpw( N, x, strideX )`][@stdlib/blas/ext/base/dssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation and returning an extended precision result.</span>
-   <span class="signature">[`dsum( N, x, strideX )`][@stdlib/blas/ext/base/dsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements.</span>
-   <span class="signature">[`dsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/dsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/dsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`dsumors( N, x, strideX )`][@stdlib/blas/ext/base/dsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`dsumpw( N, x, strideX )`][@stdlib/blas/ext/base/dsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`gapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a strided array.</span>
-   <span class="signature">[`gapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum.</span>
-   <span class="signature">[`gapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`gapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`gasumpw( N, x, strideX )`][@stdlib/blas/ext/base/gasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gcusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements.</span>
-   <span class="signature">[`gcusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gcusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gcusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gcusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`gfillBy( N, x, strideX, clbk[, thisArg] )`][@stdlib/blas/ext/base/gfill-by]</span><span class="delimiter">: </span><span class="description">fill a strided array according to a provided callback function.</span>
-   <span class="signature">[`gfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/gfill]</span><span class="delimiter">: </span><span class="description">fill a strided array with a specified scalar constant.</span>
-   <span class="signature">[`gnannsumkbn( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gnannsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnannsumpw( N, x, strideX, out, strideOut )`][@stdlib/blas/ext/base/gnannsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`gnansum( N, x, strideX )`][@stdlib/blas/ext/base/gnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`gnansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/gnansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/gnansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gnansumors( N, x, strideX )`][@stdlib/blas/ext/base/gnansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`gnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/gnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`grev( N, x, strideX )`][@stdlib/blas/ext/base/grev]</span><span class="delimiter">: </span><span class="description">reverse a strided array in-place.</span>
-   <span class="signature">[`gsort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`gsort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`gsort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/gsort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`gsorthp( N, order, x, strideX )`][@stdlib/blas/ext/base/gsorthp]</span><span class="delimiter">: </span><span class="description">sort a strided array using heapsort.</span>
-   <span class="signature">[`gsortins( N, order, x, strideX )`][@stdlib/blas/ext/base/gsortins]</span><span class="delimiter">: </span><span class="description">sort a strided array using insertion sort.</span>
-   <span class="signature">[`gsortsh( N, order, x, strideX )`][@stdlib/blas/ext/base/gsortsh]</span><span class="delimiter">: </span><span class="description">sort a strided array using Shellsort.</span>
-   <span class="signature">[`gsum( N, x, strideX )`][@stdlib/blas/ext/base/gsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements.</span>
-   <span class="signature">[`gsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/gsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/gsumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`gsumors( N, x, strideX )`][@stdlib/blas/ext/base/gsumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`gsumpw( N, x, strideX )`][@stdlib/blas/ext/base/gsumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of strided array elements using pairwise summation.</span>
-   <span class="signature">[`ndarray`][@stdlib/blas/ext/base/ndarray]</span><span class="delimiter">: </span><span class="description">base ndarray extended BLAS functions.</span>
-   <span class="signature">[`sapx( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapx]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each element in a single-precision floating-point strided array.</span>
-   <span class="signature">[`sapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum.</span>
-   <span class="signature">[`sapxsumkbn( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumkbn]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumkbn2( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumkbn2]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`sapxsumors( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumors]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using ordinary recursive summation.</span>
-   <span class="signature">[`sapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using pairwise summation.</span>
-   <span class="signature">[`sasumpw( N, x, strideX )`][@stdlib/blas/ext/base/sasumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of absolute values (_L1_ norm) of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`scusum( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusum]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`scusumkbn( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumkbn2( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`scusumors( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumors]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`scusumpw( N, sum, x, strideX, y, strideY )`][@stdlib/blas/ext/base/scusumpw]</span><span class="delimiter">: </span><span class="description">calculate the cumulative sum of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`sdsapxsum( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sdsapxsum]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using extended accumulation.</span>
-   <span class="signature">[`sdsapxsumpw( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sdsapxsumpw]</span><span class="delimiter">: </span><span class="description">add a scalar constant to each single-precision floating-point strided array element and compute the sum using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdsnansum( N, x, strideX )`][@stdlib/blas/ext/base/sdsnansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using extended accumulation.</span>
-   <span class="signature">[`sdsnansumpw( N, x, strideX )`][@stdlib/blas/ext/base/sdsnansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sdssum( N, x, strideX )`][@stdlib/blas/ext/base/sdssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using extended accumulation.</span>
-   <span class="signature">[`sdssumpw( N, x, strideX )`][@stdlib/blas/ext/base/sdssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation with extended accumulation.</span>
-   <span class="signature">[`sfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/sfill]</span><span class="delimiter">: </span><span class="description">fill a single-precision floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`snansum( N, x, strideX )`][@stdlib/blas/ext/base/snansum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values.</span>
-   <span class="signature">[`snansumkbn( N, x, strideX )`][@stdlib/blas/ext/base/snansumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/snansumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`snansumors( N, x, strideX )`][@stdlib/blas/ext/base/snansumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`snansumpw( N, x, strideX )`][@stdlib/blas/ext/base/snansumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements, ignoring `NaN` values and using pairwise summation.</span>
-   <span class="signature">[`srev( N, x, strideX )`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>
-   <span class="signature">[`ssort2hp( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2hp]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using heapsort.</span>
-   <span class="signature">[`ssort2ins( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2ins]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using insertion sort.</span>
-   <span class="signature">[`ssort2sh( N, order, x, strideX, y, strideY )`][@stdlib/blas/ext/base/ssort2sh]</span><span class="delimiter">: </span><span class="description">simultaneously sort two single-precision floating-point strided arrays based on the sort order of the first array using Shellsort.</span>
-   <span class="signature">[`ssorthp( N, order, x, stride )`][@stdlib/blas/ext/base/ssorthp]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using heapsort.</span>
-   <span class="signature">[`ssortins( N, order, x, stride )`][@stdlib/blas/ext/base/ssortins]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using insertion sort.</span>
-   <span class="signature">[`ssortsh( N, order, x, stride )`][@stdlib/blas/ext/base/ssortsh]</span><span class="delimiter">: </span><span class="description">sort a single-precision floating-point strided array using Shellsort.</span>
-   <span class="signature">[`ssum( N, x, strideX )`][@stdlib/blas/ext/base/ssum]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements.</span>
-   <span class="signature">[`ssumkbn( N, x, strideX )`][@stdlib/blas/ext/base/ssumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumkbn2( N, x, strideX )`][@stdlib/blas/ext/base/ssumkbn2]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`ssumors( N, x, strideX )`][@stdlib/blas/ext/base/ssumors]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using ordinary recursive summation.</span>
-   <span class="signature">[`ssumpw( N, x, strideX )`][@stdlib/blas/ext/base/ssumpw]</span><span class="delimiter">: </span><span class="description">calculate the sum of single-precision floating-point strided array elements using pairwise summation.</span>
-   <span class="signature">[`wasm`][@stdlib/blas/ext/base/wasm]</span><span class="delimiter">: </span><span class="description">extensions to basic linear algebra subprograms (BLAS) compiled to WebAssembly.</span>
-   <span class="signature">[`zfill( N, alpha, x, strideX )`][@stdlib/blas/ext/base/zfill]</span><span class="delimiter">: </span><span class="description">fill a double-precision complex floating-point strided array with a specified scalar constant.</span>
-   <span class="signature">[`zsum( N, x, strideX )`][@stdlib/blas/ext/base/zsum]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision complex floating-point strided array elements.</span>
-   <span class="signature">[`zsumkbn( N, x, strideX )`][@stdlib/blas/ext/base/zsumkbn]</span><span class="delimiter">: </span><span class="description">calculate the sum of double-precision complex floating-point strided array elements using an improved Kahan–Babuška algorithm.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/blas/ext/base' );

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

[@stdlib/blas/ext/base/cfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/cfill

[@stdlib/blas/ext/base/csum]: https://github.com/stdlib-js/blas/tree/main/ext/base/csum

[@stdlib/blas/ext/base/csumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/csumkbn

[@stdlib/blas/ext/base/dapx]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapx

[@stdlib/blas/ext/base/dapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsum

[@stdlib/blas/ext/base/dapxsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumkbn

[@stdlib/blas/ext/base/dapxsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumkbn2

[@stdlib/blas/ext/base/dapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumors

[@stdlib/blas/ext/base/dapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dapxsumpw

[@stdlib/blas/ext/base/dasumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dasumpw

[@stdlib/blas/ext/base/dcusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusum

[@stdlib/blas/ext/base/dcusumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumkbn

[@stdlib/blas/ext/base/dcusumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumkbn2

[@stdlib/blas/ext/base/dcusumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumors

[@stdlib/blas/ext/base/dcusumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dcusumpw

[@stdlib/blas/ext/base/dfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/dfill

[@stdlib/blas/ext/base/dnanasum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnanasum

[@stdlib/blas/ext/base/dnanasumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnanasumors

[@stdlib/blas/ext/base/dnannsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsum

[@stdlib/blas/ext/base/dnannsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumkbn

[@stdlib/blas/ext/base/dnannsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumkbn2

[@stdlib/blas/ext/base/dnannsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumors

[@stdlib/blas/ext/base/dnannsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnannsumpw

[@stdlib/blas/ext/base/dnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansum

[@stdlib/blas/ext/base/dnansumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumkbn

[@stdlib/blas/ext/base/dnansumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumkbn2

[@stdlib/blas/ext/base/dnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumors

[@stdlib/blas/ext/base/dnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dnansumpw

[@stdlib/blas/ext/base/drev]: https://github.com/stdlib-js/blas/tree/main/ext/base/drev

[@stdlib/blas/ext/base/dsapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsapxsum

[@stdlib/blas/ext/base/dsapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsapxsumpw

[@stdlib/blas/ext/base/dsnannsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsnannsumors

[@stdlib/blas/ext/base/dsnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsnansum

[@stdlib/blas/ext/base/dsnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsnansumors

[@stdlib/blas/ext/base/dsnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsnansumpw

[@stdlib/blas/ext/base/dsort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsort2hp

[@stdlib/blas/ext/base/dsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsort2ins

[@stdlib/blas/ext/base/dsort2sh]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsort2sh

[@stdlib/blas/ext/base/dsorthp]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsorthp

[@stdlib/blas/ext/base/dsortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsortins

[@stdlib/blas/ext/base/dsortsh]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsortsh

[@stdlib/blas/ext/base/dssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dssum

[@stdlib/blas/ext/base/dssumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dssumors

[@stdlib/blas/ext/base/dssumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dssumpw

[@stdlib/blas/ext/base/dsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsum

[@stdlib/blas/ext/base/dsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumkbn

[@stdlib/blas/ext/base/dsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumkbn2

[@stdlib/blas/ext/base/dsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumors

[@stdlib/blas/ext/base/dsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/dsumpw

[@stdlib/blas/ext/base/gapx]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapx

[@stdlib/blas/ext/base/gapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsum

[@stdlib/blas/ext/base/gapxsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumkbn

[@stdlib/blas/ext/base/gapxsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumkbn2

[@stdlib/blas/ext/base/gapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumors

[@stdlib/blas/ext/base/gapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gapxsumpw

[@stdlib/blas/ext/base/gasumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gasumpw

[@stdlib/blas/ext/base/gcusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusum

[@stdlib/blas/ext/base/gcusumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumkbn

[@stdlib/blas/ext/base/gcusumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumkbn2

[@stdlib/blas/ext/base/gcusumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumors

[@stdlib/blas/ext/base/gcusumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gcusumpw

[@stdlib/blas/ext/base/gfill-by]: https://github.com/stdlib-js/blas/tree/main/ext/base/gfill-by

[@stdlib/blas/ext/base/gfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/gfill

[@stdlib/blas/ext/base/gnannsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnannsumkbn

[@stdlib/blas/ext/base/gnannsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnannsumpw

[@stdlib/blas/ext/base/gnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansum

[@stdlib/blas/ext/base/gnansumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumkbn

[@stdlib/blas/ext/base/gnansumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumkbn2

[@stdlib/blas/ext/base/gnansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumors

[@stdlib/blas/ext/base/gnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gnansumpw

[@stdlib/blas/ext/base/grev]: https://github.com/stdlib-js/blas/tree/main/ext/base/grev

[@stdlib/blas/ext/base/gsort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2hp

[@stdlib/blas/ext/base/gsort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2ins

[@stdlib/blas/ext/base/gsort2sh]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsort2sh

[@stdlib/blas/ext/base/gsorthp]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsorthp

[@stdlib/blas/ext/base/gsortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsortins

[@stdlib/blas/ext/base/gsortsh]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsortsh

[@stdlib/blas/ext/base/gsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsum

[@stdlib/blas/ext/base/gsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumkbn

[@stdlib/blas/ext/base/gsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumkbn2

[@stdlib/blas/ext/base/gsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumors

[@stdlib/blas/ext/base/gsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/gsumpw

[@stdlib/blas/ext/base/ndarray]: https://github.com/stdlib-js/blas/tree/main/ext/base/ndarray

[@stdlib/blas/ext/base/sapx]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapx

[@stdlib/blas/ext/base/sapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsum

[@stdlib/blas/ext/base/sapxsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumkbn

[@stdlib/blas/ext/base/sapxsumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumkbn2

[@stdlib/blas/ext/base/sapxsumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumors

[@stdlib/blas/ext/base/sapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/sapxsumpw

[@stdlib/blas/ext/base/sasumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/sasumpw

[@stdlib/blas/ext/base/scusum]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusum

[@stdlib/blas/ext/base/scusumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumkbn

[@stdlib/blas/ext/base/scusumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumkbn2

[@stdlib/blas/ext/base/scusumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumors

[@stdlib/blas/ext/base/scusumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/scusumpw

[@stdlib/blas/ext/base/sdsapxsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdsapxsum

[@stdlib/blas/ext/base/sdsapxsumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdsapxsumpw

[@stdlib/blas/ext/base/sdsnansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdsnansum

[@stdlib/blas/ext/base/sdsnansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdsnansumpw

[@stdlib/blas/ext/base/sdssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdssum

[@stdlib/blas/ext/base/sdssumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/sdssumpw

[@stdlib/blas/ext/base/sfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/sfill

[@stdlib/blas/ext/base/snansum]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansum

[@stdlib/blas/ext/base/snansumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumkbn

[@stdlib/blas/ext/base/snansumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumkbn2

[@stdlib/blas/ext/base/snansumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumors

[@stdlib/blas/ext/base/snansumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/snansumpw

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas/tree/main/ext/base/srev

[@stdlib/blas/ext/base/ssort2hp]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2hp

[@stdlib/blas/ext/base/ssort2ins]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2ins

[@stdlib/blas/ext/base/ssort2sh]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssort2sh

[@stdlib/blas/ext/base/ssorthp]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssorthp

[@stdlib/blas/ext/base/ssortins]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssortins

[@stdlib/blas/ext/base/ssortsh]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssortsh

[@stdlib/blas/ext/base/ssum]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssum

[@stdlib/blas/ext/base/ssumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumkbn

[@stdlib/blas/ext/base/ssumkbn2]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumkbn2

[@stdlib/blas/ext/base/ssumors]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumors

[@stdlib/blas/ext/base/ssumpw]: https://github.com/stdlib-js/blas/tree/main/ext/base/ssumpw

[@stdlib/blas/ext/base/wasm]: https://github.com/stdlib-js/blas/tree/main/ext/base/wasm

[@stdlib/blas/ext/base/zfill]: https://github.com/stdlib-js/blas/tree/main/ext/base/zfill

[@stdlib/blas/ext/base/zsum]: https://github.com/stdlib-js/blas/tree/main/ext/base/zsum

[@stdlib/blas/ext/base/zsumkbn]: https://github.com/stdlib-js/blas/tree/main/ext/base/zsumkbn

<!-- </toc-links> -->

</section>

<!-- /.links -->
