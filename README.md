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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library basic linear algebra subprograms (BLAS).

<section class="installation">

## Installation

```bash
npm install @stdlib/blas
```

</section>

<section class="usage">

## Usage

```javascript
var blas = require( '@stdlib/blas' );
```

#### blas

Standard library basic linear algebra subprograms (BLAS).

```javascript
var o = blas;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`base`][@stdlib/blas/base]</span><span class="delimiter">: </span><span class="description">standard library base reference basic linear algebra subprograms (BLAS).</span>
-   <span class="signature">[`ddot( x, y )`][@stdlib/blas/ddot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two double-precision floating-point vectors.</span>
-   <span class="signature">[`dswap( x, y )`][@stdlib/blas/dswap]</span><span class="delimiter">: </span><span class="description">interchange two double-precision floating-point vectors.</span>
-   <span class="signature">[`ext`][@stdlib/blas/ext]</span><span class="delimiter">: </span><span class="description">standard library extended basic linear algebra subprograms (BLAS).</span>
-   <span class="signature">[`gdot( x, y )`][@stdlib/blas/gdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two vectors.</span>
-   <span class="signature">[`gswap( x, y )`][@stdlib/blas/gswap]</span><span class="delimiter">: </span><span class="description">interchange two vectors.</span>
-   <span class="signature">[`sdot( x, y )`][@stdlib/blas/sdot]</span><span class="delimiter">: </span><span class="description">calculate the dot product of two single-precision floating-point vectors.</span>
-   <span class="signature">[`sswap( x, y )`][@stdlib/blas/sswap]</span><span class="delimiter">: </span><span class="description">interchange two single-precision floating-point vectors.</span>

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
var blas = require( '@stdlib/blas' );

console.log( objectKeys( blas ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas

[test-image]: https://github.com/stdlib-js/blas/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas/main/LICENSE

<!-- <toc-links> -->

[@stdlib/blas/base]: https://github.com/stdlib-js/blas/tree/main/base

[@stdlib/blas/ddot]: https://github.com/stdlib-js/blas/tree/main/ddot

[@stdlib/blas/dswap]: https://github.com/stdlib-js/blas/tree/main/dswap

[@stdlib/blas/ext]: https://github.com/stdlib-js/blas/tree/main/ext

[@stdlib/blas/gdot]: https://github.com/stdlib-js/blas/tree/main/gdot

[@stdlib/blas/gswap]: https://github.com/stdlib-js/blas/tree/main/gswap

[@stdlib/blas/sdot]: https://github.com/stdlib-js/blas/tree/main/sdot

[@stdlib/blas/sswap]: https://github.com/stdlib-js/blas/tree/main/sswap

<!-- </toc-links> -->

</section>

<!-- /.links -->
