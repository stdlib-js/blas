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

# dcabs1

> Compute the sum of the [absolute values][absolute-value] of the real part and imaginary components of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

<section class="usage">

## Usage

```javascript
var dcabs1 = require( '@stdlib/blas/base/dcabs1' );
```

#### dcabs1( z )

Computes the sum of the [absolute values][absolute-value] of the real part and imaginary components of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var y = dcabs1( new Complex128( 5.0, -3.0 ) );
// returns 8.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var dcabs1 = require( '@stdlib/blas/base/dcabs1' );

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex128( discreteUniform( -5, 5 ), discreteUniform( -5, 5 ) );
    console.log( 'dcabs1(%s) = %d', z.toString(), dcabs1( z ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/base/dcabs1.h"
```

#### c_dcabs1( z )

Computes the sum of the [absolute values][absolute-value] of the real and imaginary components of a double-precision [complex][@stdlib/complex/float64/ctor] floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"

const stdlib_complex128_t c = stdlib_complex128( 5.0, -3.0 );

double y = c_dcabs1( c );
// returns 8.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` complex number.

```c
double c_dcabs1( const stdlib_complex128_t z );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/base/dcabs1.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.0 ),
        stdlib_complex128( -3.14, -1.0 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = c_dcabs1( x[ i ] );
        printf( "f(%lf + %lf) = %lf\n", stdlib_complex128_real( x[ i ] ), stdlib_complex128_imag( x[ i ] ), y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

</section>

<!-- /.links -->
