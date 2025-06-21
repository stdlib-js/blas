# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-21)

<section class="features">

### Features

-   [`cb8489a`](https://github.com/stdlib-js/stdlib/commit/cb8489a1e33cc21eba3dd883e6ada2b2e2ce82db) - add support for accessor arrays `blas/base/gaxpy` [(#7244)](https://github.com/stdlib-js/stdlib/pull/7244)
-   [`d74a508`](https://github.com/stdlib-js/stdlib/commit/d74a5082a8ffcb0a7c1e8be569f5e6f03b34af49) - add `csscal` to namespace
-   [`5e7c277`](https://github.com/stdlib-js/stdlib/commit/5e7c2775daca2981424380301394025c5893646b) - add `blas/base/csscal` [(#6513)](https://github.com/stdlib-js/stdlib/pull/6513)
-   [`a11b832`](https://github.com/stdlib-js/stdlib/commit/a11b832b9c10879eedf7b86dc83772d6abef7931) - add `csum` to namespace
-   [`28b0465`](https://github.com/stdlib-js/stdlib/commit/28b046502e53a887c1eb70f712b223a60d4c7833) - add `blas/ext/base/ndarray/csum`
-   [`e30c3ba`](https://github.com/stdlib-js/stdlib/commit/e30c3baa0ea634ee95dfb857b56bc3b8eb57e3f3) - add `zsum` to namespace
-   [`d1c43bf`](https://github.com/stdlib-js/stdlib/commit/d1c43bf928d136b64bce740e38fae1e23d482c23) - add `blas/ext/base/ndarray/zsum`
-   [`22f1408`](https://github.com/stdlib-js/stdlib/commit/22f140863e59a9e1a2f89a6912a0c520a7fc7956) - add `csum` to namespace
-   [`10ccb4a`](https://github.com/stdlib-js/stdlib/commit/10ccb4a44321d0caf5602042c78b49232de2b1dc) - add `blas/ext/base/csum`
-   [`4f9ada3`](https://github.com/stdlib-js/stdlib/commit/4f9ada3914fe2a20811614089c1d2ce8bc6a15f0) - add `csumkbn` to namespace
-   [`c682e65`](https://github.com/stdlib-js/stdlib/commit/c682e653f19695066709857256c8c50cfbb24ac0) - add `blas/ext/base/csumkbn`
-   [`ef876c4`](https://github.com/stdlib-js/stdlib/commit/ef876c4aa3c97ce2fb042a0d48c852a448775fad) - add `zsum` to namespace
-   [`c76305e`](https://github.com/stdlib-js/stdlib/commit/c76305ee9931b510e2aec54ec1da3997845d40f4) - add `blas/ext/base/zsum`
-   [`e030bba`](https://github.com/stdlib-js/stdlib/commit/e030bba632158023584c3e28c080fdf289d15014) - add `gnannsumpw` to namespace
-   [`cbd656d`](https://github.com/stdlib-js/stdlib/commit/cbd656db90d14e150baa2a23deb44cb645ef2298) - add `blas/ext/base/gnannsumpw`
-   [`7324255`](https://github.com/stdlib-js/stdlib/commit/7324255304f2fdb5afddd9166579122fcdc2aa2a) - add `zsumkbn` to namespace
-   [`6b320d7`](https://github.com/stdlib-js/stdlib/commit/6b320d701480d7467d131f161f87b38d2849f5e8) - add `blas/ext/base/zsumkbn`
-   [`f750524`](https://github.com/stdlib-js/stdlib/commit/f75052497fb09596b3708ecaafa31948b0c499f0) - add `blas/ext/base/dnancusumkbn` [(#5822)](https://github.com/stdlib-js/stdlib/pull/5822)
-   [`47043f4`](https://github.com/stdlib-js/stdlib/commit/47043f4dd5b22794abc28364824a19e1712a8dc7) - add `blas/ext/base/wasm/dapx` [(#5643)](https://github.com/stdlib-js/stdlib/pull/5643)
-   [`09ffc2c`](https://github.com/stdlib-js/stdlib/commit/09ffc2c08be90669defcaaa19a50b53a6d7473f8) - add `stats/strided/wasm/dmeanors` [(#5832)](https://github.com/stdlib-js/stdlib/pull/5832)
-   [`bd0050a`](https://github.com/stdlib-js/stdlib/commit/bd0050a6aaec1ca4cdc1a4491f45084da84f5bf7) - add `blas/ext/base/wasm/dnanasumors` [(#6110)](https://github.com/stdlib-js/stdlib/pull/6110)
-   [`5731206`](https://github.com/stdlib-js/stdlib/commit/5731206687fc0584469a369adb69dd44b26277ed) - add `blas/ext/base/wasm/sapxsumkbn` [(#5764)](https://github.com/stdlib-js/stdlib/pull/5764)
-   [`6570841`](https://github.com/stdlib-js/stdlib/commit/65708419e4449c1cc7628ef2b22739383c40a24e) - add `blas/base/wasm/sdsdot` [(#6768)](https://github.com/stdlib-js/stdlib/pull/6768)
-   [`5bf5fef`](https://github.com/stdlib-js/stdlib/commit/5bf5fef7f910bc7ca08b3689daed5160f674fa8e) - add `cusum` to namespace
-   [`0024458`](https://github.com/stdlib-js/stdlib/commit/002445886a8f8e74dbbdabeff31ab45cece00096) - add `blas/ext/cusum`
-   [`fd5533d`](https://github.com/stdlib-js/stdlib/commit/fd5533da37b425b752f061378bff51fbe8695c56) - add `sum` to namespace
-   [`8844c7b`](https://github.com/stdlib-js/stdlib/commit/8844c7b41c82acfa59305a97a26ffd6caa4ea06d) - add `blas/ext/sum`
-   [`0dd7923`](https://github.com/stdlib-js/stdlib/commit/0dd7923fb188e73cb3d60f54fb97195e4cf15ea9) - add `gcusum` to namespace
-   [`fb346ab`](https://github.com/stdlib-js/stdlib/commit/fb346abc3e0cced9b159bcf2d518d43cac185884) - add `blas/ext/base/ndarray/gcusum`
-   [`1741923`](https://github.com/stdlib-js/stdlib/commit/174192300a3db8664030bb40aeffa3670b3ae882) - add `scusum` to namespace
-   [`53c2fb7`](https://github.com/stdlib-js/stdlib/commit/53c2fb7060c4b448beca4b97af60c5dcf520ddd9) - add `blas/ext/base/ndarray/scusum`
-   [`2fbc157`](https://github.com/stdlib-js/stdlib/commit/2fbc1578542e92814c457251d0206b51d67bd62f) - add `dcusum` to namespace
-   [`76d6a22`](https://github.com/stdlib-js/stdlib/commit/76d6a22937ba4198bba07ec6acb095277c781464) - add `blas/ext/base/ndarray/dcusum`
-   [`9284bd7`](https://github.com/stdlib-js/stdlib/commit/9284bd7fc74b1aea7556be0d1c98196a3eff2649) - add `cfill` and `zfill` to namespace
-   [`b86b7d5`](https://github.com/stdlib-js/stdlib/commit/b86b7d5988cd3f2a083355b6a91a748dca9e509b) - add `ndarray` to namespace
-   [`e5b3cfd`](https://github.com/stdlib-js/stdlib/commit/e5b3cfdc9a4dab44eacc47cf4e911e417ec0c8ce) - add `blas/ext/base/ndarray` namespace
-   [`6fe1a39`](https://github.com/stdlib-js/stdlib/commit/6fe1a3926c7d1336c4243e43453465f9062adb22) - add `blas/ext/base/ndarray/gsum`
-   [`11e8887`](https://github.com/stdlib-js/stdlib/commit/11e8887b165ddca1755aa5e8d3f91d8c1945142e) - add `blas/ext/base/ndarray/ssum`
-   [`69cda50`](https://github.com/stdlib-js/stdlib/commit/69cda50da9866bf95098683d1314f0abdfa1f6bd) - add `blas/ext/base/ndarray/dsum`
-   [`dae553b`](https://github.com/stdlib-js/stdlib/commit/dae553bfe3c1f0d651b07eda1b36e87a516df7ef) - add `blas/base/wasm/dsdot` [(#6751)](https://github.com/stdlib-js/stdlib/pull/6751)
-   [`d7c6f8e`](https://github.com/stdlib-js/stdlib/commit/d7c6f8e4a21779f8f4e54dac4a045b8ea8dbd497) - add `blas/base/wasm/sswap` [(#6582)](https://github.com/stdlib-js/stdlib/pull/6582)
-   [`d2aa857`](https://github.com/stdlib-js/stdlib/commit/d2aa857a823eed13a409c724c4d19fa876ad2742) - add `blas/ext/base/wasm/dasumpw` [(#5549)](https://github.com/stdlib-js/stdlib/pull/5549)
-   [`3da41b7`](https://github.com/stdlib-js/stdlib/commit/3da41b7ccb754f5ffa7f4f9fc61799d570871a19) - update namespace TypeScript declarations [(#6058)](https://github.com/stdlib-js/stdlib/pull/6058)
-   [`9c0f393`](https://github.com/stdlib-js/stdlib/commit/9c0f393248f4a8276991ea447dea41402f58cefc) - add `dapxsumors` to namespace
-   [`b2a770a`](https://github.com/stdlib-js/stdlib/commit/b2a770ac79d4b276e73184802ee0cf31956bf52c) - add `blas/ext/base/wasm/dapxsumors` [(#5644)](https://github.com/stdlib-js/stdlib/pull/5644)
-   [`87abb74`](https://github.com/stdlib-js/stdlib/commit/87abb743fe577742c81ce1be6b5b8477da33b5f2) - update namespace TypeScript declarations [(#6008)](https://github.com/stdlib-js/stdlib/pull/6008)
-   [`5738d4d`](https://github.com/stdlib-js/stdlib/commit/5738d4d9acc9b1d68f33968e76c4ede936f2216f) - add `dapxsum`, `dapxsumpw`, and `dnansumpw` to namespace
-   [`654827d`](https://github.com/stdlib-js/stdlib/commit/654827df5358f2c70fde0259fbbcbfb607076119) - add `blas/ext/base/wasm/dapxsum` [(#5634)](https://github.com/stdlib-js/stdlib/pull/5634)
-   [`e0e2ab2`](https://github.com/stdlib-js/stdlib/commit/e0e2ab2955fd340371c0989c5a7a2f96991ba232) - add `blas/ext/base/wasm/dnansumpw` [(#5968)](https://github.com/stdlib-js/stdlib/pull/5968)
-   [`6716e62`](https://github.com/stdlib-js/stdlib/commit/6716e624585aaba0041ae183089cb2b92851f366) - update namespace TypeScript declarations [(#5938)](https://github.com/stdlib-js/stdlib/pull/5938)
-   [`f572d78`](https://github.com/stdlib-js/stdlib/commit/f572d7875370c83107013a400f32d1ec3f473acb) - add accessor array support to `blas/base/gnrm2` [(#5778)](https://github.com/stdlib-js/stdlib/pull/5778)
-   [`460cd8f`](https://github.com/stdlib-js/stdlib/commit/460cd8f7b479efb7350a3b638be912b7e1bd5a7b) - add `srotm` to namespace
-   [`8dc3f35`](https://github.com/stdlib-js/stdlib/commit/8dc3f35a39fdf2d24f7a9a80ed9e5d905d5cf10b) - add `blas/base/wasm/srotm` [(#https://github.com/stodlib-js/stdlib/pull/5824)](https://github.com/stdlib-js/stdlib/pull/https://github.com/stodlib-js/stdlib/pull/5824)
-   [`24ba370`](https://github.com/stdlib-js/stdlib/commit/24ba370b3ae9e9bc4aa0160f7d0e3879e62d2153) - add accessor array support to `blas/base/gdot`  [(#5878)](https://github.com/stdlib-js/stdlib/pull/5878)
-   [`b0d1c0e`](https://github.com/stdlib-js/stdlib/commit/b0d1c0ee0ff6fa05c8d5019939990d3fbdf08537) - add `blas/ext/base/wasm/dapxsumpw` [(#5642)](https://github.com/stdlib-js/stdlib/pull/5642)
-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799) - update namespace TypeScript declarations [(#5511)](https://github.com/stdlib-js/stdlib/pull/5511)
-   [`57184e0`](https://github.com/stdlib-js/stdlib/commit/57184e03168cf78b9daeee492995a7ea2670d463) - add accessor array support to `blas/base/gasum` [(#5439)](https://github.com/stdlib-js/stdlib/pull/5439)
-   [`3b48bb5`](https://github.com/stdlib-js/stdlib/commit/3b48bb5eb47d5a8559d8d7e82f7639ee59d90d21) - add accessor array support to `blas/base/gscal` [(#5418)](https://github.com/stdlib-js/stdlib/pull/5418)
-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce) - update namespace TypeScript declarations [(#5385)](https://github.com/stdlib-js/stdlib/pull/5385)
-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364)
-   [`2a23671`](https://github.com/stdlib-js/stdlib/commit/2a23671ce88a4b3fbfcf48b5edb8b73105463bdf) - add various level 1 and level 2 routines to namespace
-   [`c1ac93f`](https://github.com/stdlib-js/stdlib/commit/c1ac93f393ce6fc122e388e2554d01b149b6fbc0) - add `wasm` to namespace
-   [`40f5bae`](https://github.com/stdlib-js/stdlib/commit/40f5bae95d708401dbea4c37b2c220381638c4a0) - add `wasm` to namespace
-   [`a8b94d7`](https://github.com/stdlib-js/stdlib/commit/a8b94d7ea281eb5ac4477eaca40fdb38195ab2b3) - add `blas/ext/base/wasm` namespace
-   [`5306dac`](https://github.com/stdlib-js/stdlib/commit/5306dac507668082336473811c64b04dc3b765ef) - add `blas/base/wasm` namespace
-   [`46b98f4`](https://github.com/stdlib-js/stdlib/commit/46b98f4f6cc171d07810b3f756ff7c36e60ac8ed) - add `blas/ext/base/wasm/dapxsumkbn`
-   [`99dc0fd`](https://github.com/stdlib-js/stdlib/commit/99dc0fd7d91a666b047c316ccfef58df5605e3ca) - add `blas/base/wasm/zdrot` [(#5293)](https://github.com/stdlib-js/stdlib/pull/5293)
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254)
-   [`c86e76e`](https://github.com/stdlib-js/stdlib/commit/c86e76e8c9ab907aedfccfbd74ca3ad39ff75a3e) - add C `ndarray` implementation for `blas/base/zscal` [(#4864)](https://github.com/stdlib-js/stdlib/pull/4864)
-   [`402bd40`](https://github.com/stdlib-js/stdlib/commit/402bd405359fba77de13d0136fbf3d1fb956e0ec) - add `blas/base/wasm/sscal` [(#5224)](https://github.com/stdlib-js/stdlib/pull/5224)
-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95) - update namespace TypeScript declarations [(#5243)](https://github.com/stdlib-js/stdlib/pull/5243)
-   [`8d34c0c`](https://github.com/stdlib-js/stdlib/commit/8d34c0c773e51c464e10e67dd9ccef4f95a00f2b) - add C implementation for `blas/base/sspr` [(#4491)](https://github.com/stdlib-js/stdlib/pull/4491)
-   [`5dde14b`](https://github.com/stdlib-js/stdlib/commit/5dde14b31ea6a661b88b7ba637e0e7a2fce272a4) - update namespace TypeScript declarations [(#5182)](https://github.com/stdlib-js/stdlib/pull/5182)
-   [`8357863`](https://github.com/stdlib-js/stdlib/commit/8357863b87da1554b4e249fb03e712dec8a58ee0) - add C ndarray API and refactor `blas/ext/base/ssort2ins` [(#5114)](https://github.com/stdlib-js/stdlib/pull/5114)
-   [`d226d10`](https://github.com/stdlib-js/stdlib/commit/d226d10e5119e4480721039ce892da8ae874e468) - add accessor arrays support and refactor `blas/ext/base/gsortins` [(#5120)](https://github.com/stdlib-js/stdlib/pull/5120)
-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a) - update namespace TypeScript declarations [(#5130)](https://github.com/stdlib-js/stdlib/pull/5130)
-   [`152dfd2`](https://github.com/stdlib-js/stdlib/commit/152dfd2a9f6f420dee659694435c9e44f3095601) - add accessor arrays support to `blas/ext/base/gsum` [(#5134)](https://github.com/stdlib-js/stdlib/pull/5134)
-   [`ece4002`](https://github.com/stdlib-js/stdlib/commit/ece40025e9afce7032cd1072c1d1a8b856726564) - add accessor arrays support and refactor `blas/ext/base/gsortsh` [(#5122)](https://github.com/stdlib-js/stdlib/pull/5122)
-   [`112b7ef`](https://github.com/stdlib-js/stdlib/commit/112b7ef36a44bc8b27ad757cc3099d2595aa8aaa) - add accessor arrays support and refactor `blas/ext/base/gsorthp` [(#5117)](https://github.com/stdlib-js/stdlib/pull/5117)
-   [`8ad374c`](https://github.com/stdlib-js/stdlib/commit/8ad374c4cdc7ee450a404f4f766ec772a0aa5af5) - add accessor arrays support and refactor `blas/ext/base/gsort2sh` [(#5113)](https://github.com/stdlib-js/stdlib/pull/5113)
-   [`7d5e0aa`](https://github.com/stdlib-js/stdlib/commit/7d5e0aab1f348b4b4ed7e039c6e3745442f479e1) - add accessor arrays support and refactor `blas/ext/base/gsort2ins` [(#5089)](https://github.com/stdlib-js/stdlib/pull/5089)
-   [`20f7173`](https://github.com/stdlib-js/stdlib/commit/20f71735fc68e3e501e5fc13fddbaf19900d0ebf) - add accessor arrays support and refactor `blas/ext/base/gsort2hp` [(#4660)](https://github.com/stdlib-js/stdlib/pull/4660)
-   [`924f85a`](https://github.com/stdlib-js/stdlib/commit/924f85ad57aec54ede64c9db9ee96459befa2c00) - add C implementation for `blas/base/ssyr` [(#2877)](https://github.com/stdlib-js/stdlib/pull/2877)
-   [`cd30ae4`](https://github.com/stdlib-js/stdlib/commit/cd30ae4e94a3874a3850eb5ddec63d9360e20413) - add `blas/base/wasm/isamax` [(#3984)](https://github.com/stdlib-js/stdlib/pull/3984)
-   [`e28cc73`](https://github.com/stdlib-js/stdlib/commit/e28cc73ce4cae0a780006c8256ca58f901b18624) - add `blas/base/wasm/zcopy` [(#3982)](https://github.com/stdlib-js/stdlib/pull/3982)
-   [`5cdd9f7`](https://github.com/stdlib-js/stdlib/commit/5cdd9f7f4b631411afcf489dbfdeb7088f1392ed) - add `blas/base/wasm/zswap` [(#4011)](https://github.com/stdlib-js/stdlib/pull/4011)
-   [`bc81929`](https://github.com/stdlib-js/stdlib/commit/bc81929038bd6393df0e76e5ad6097e2528ab967) - add `blas/base/wasm/srot`
-   [`fa44243`](https://github.com/stdlib-js/stdlib/commit/fa4424301c6f9d417367e79843195855c291b5be) - add `blas/base/wasm/snrm2`
-   [`8649400`](https://github.com/stdlib-js/stdlib/commit/864940039f6e118f031f949f7ed619e668f97034) - add `blas/base/wasm/sdot`
-   [`56a4fc3`](https://github.com/stdlib-js/stdlib/commit/56a4fc3e28da41971a00a95653c9f249e47f5d13) - add `blas/base/wasm/scopy`
-   [`f19927d`](https://github.com/stdlib-js/stdlib/commit/f19927d6d375ea5ecdab52e52a5d3f92d8f63911) - add `blas/base/wasm/saxpy`
-   [`2fc9bf4`](https://github.com/stdlib-js/stdlib/commit/2fc9bf49fe6a935260e86d3b249e78e8c9662758) - add `blas/base/wasm/sasum`
-   [`caf2c7e`](https://github.com/stdlib-js/stdlib/commit/caf2c7e956b6edf338ed9e59a295f8f776b26230) - add `blas/base/wasm/idamax`
-   [`35ad7f0`](https://github.com/stdlib-js/stdlib/commit/35ad7f0af7ec928461e62eb10d85a0730819af7b) - add `blas/base/wasm/dswap`
-   [`8fa1f9d`](https://github.com/stdlib-js/stdlib/commit/8fa1f9d0967e01c2de08e8b2f6bae1091a2e941f) - add `blas/base/wasm/dscal`
-   [`a519986`](https://github.com/stdlib-js/stdlib/commit/a519986026f8c8da8c4cd8ef8934356dcbf02cce) - add `blas/base/wasm/drotm`
-   [`8270aa6`](https://github.com/stdlib-js/stdlib/commit/8270aa6937b42072ab4208e8cede7bd00f197e88) - add `blas/base/wasm/drot`
-   [`18fef5f`](https://github.com/stdlib-js/stdlib/commit/18fef5faebcfe1acf92daf059c29ddfd64f94901) - add `blas/base/wasm/dnrm2`
-   [`b5468db`](https://github.com/stdlib-js/stdlib/commit/b5468dbd07d253621eddcb8a25363eab748d210a) - add `blas/base/wasm/ddot`
-   [`dbb0165`](https://github.com/stdlib-js/stdlib/commit/dbb0165c27aba9f90d96e37af93776a7a410e471) - add `blas/base/wasm/dcopy`
-   [`f1d4e1d`](https://github.com/stdlib-js/stdlib/commit/f1d4e1d7dabeaa6db42630707dad76923dfe755c) - add `blas/base/wasm/daxpy`
-   [`0d61df4`](https://github.com/stdlib-js/stdlib/commit/0d61df43906121de7569bfc943b8c90a280f2b04) - add `blas/base/wasm/dasum`
-   [`f067e80`](https://github.com/stdlib-js/stdlib/commit/f067e80ba5ee58232b73600e7fdfe46529d34f99) - add `blas/base/wasm/cswap`
-   [`4de4aff`](https://github.com/stdlib-js/stdlib/commit/4de4affbc7b2b1c84606700dc9b5d96bd2b57c9d) - add `blas/base/wasm/csrot`
-   [`c18d344`](https://github.com/stdlib-js/stdlib/commit/c18d344951dc88690929a82ef47f5b3838f93a92) - add `blas/base/wasm/cscal`
-   [`ab1d701`](https://github.com/stdlib-js/stdlib/commit/ab1d701a59615ae48b61ff4444ff6c6ac006950b) - add `blas/base/wasm/ccopy`
-   [`e242eb1`](https://github.com/stdlib-js/stdlib/commit/e242eb1e35da321f0e124a65f1c5e74e9be51dfe) - add accessor arrays support to `blas/ext/base/gnansum` [(#5066)](https://github.com/stdlib-js/stdlib/pull/5066)
-   [`e5a8c65`](https://github.com/stdlib-js/stdlib/commit/e5a8c6593a68bdf3d385fbb4c1d75ba4309bad5d) - add accessor arrays support to `blas/ext/base/gcusum` [(#5065)](https://github.com/stdlib-js/stdlib/pull/5065)
-   [`9da9e46`](https://github.com/stdlib-js/stdlib/commit/9da9e464d924bae935b701593e8c7a8cc4377f5c) - add accessor arrays support to `blas/ext/base/gnannsumkbn` [(#5023)](https://github.com/stdlib-js/stdlib/pull/5023)
-   [`6c90e8f`](https://github.com/stdlib-js/stdlib/commit/6c90e8fa6ad8f6bf254e6479d1a3ece17b5e92da) - add accessor arrays support to `blas/ext/base/gcusumpw` [(#5012)](https://github.com/stdlib-js/stdlib/pull/5012)
-   [`1dd8adf`](https://github.com/stdlib-js/stdlib/commit/1dd8adfd104b90f0b87cd76ce0addbbd6f723aba) - add accessor arrays support to `blas/ext/base/gcusumkbn2` [(#5009)](https://github.com/stdlib-js/stdlib/pull/5009)
-   [`8310c1f`](https://github.com/stdlib-js/stdlib/commit/8310c1f4054d2ff0ee8b05f1c77b1d3c846a1012) - add accessor arrays support to `blas/ext/base/gcusumors` [(#5010)](https://github.com/stdlib-js/stdlib/pull/5010)
-   [`a6ba17c`](https://github.com/stdlib-js/stdlib/commit/a6ba17cee3a41741a04312d78ddde029470bf338) - add C ndarray API and refactor `blas/ext/base/dsorthp` [(#5018)](https://github.com/stdlib-js/stdlib/pull/5018)
-   [`d924c8d`](https://github.com/stdlib-js/stdlib/commit/d924c8d2c48611f1c90312877e39bf3e8df063c2) - add C ndarray API and refactor `blas/ext/base/dsortins` [(#5028)](https://github.com/stdlib-js/stdlib/pull/5028)
-   [`6516030`](https://github.com/stdlib-js/stdlib/commit/65160305dccd83c8fbf6f9e011e9f9a13c2c0cf8) - add C `ndarray` API and refactor `blas/ext/base/snansum` [(#4872)](https://github.com/stdlib-js/stdlib/pull/4872)
-   [`a660827`](https://github.com/stdlib-js/stdlib/commit/a660827c0f4b24c28029a8231783c9c7a679f714) - add accessor arrays support to `blas/ext/base/gapxsumkbn2` [(#4928)](https://github.com/stdlib-js/stdlib/pull/4928)
-   [`5052523`](https://github.com/stdlib-js/stdlib/commit/5052523f838ba96e29282588584cfa02ed83ff8d) - add accessor arrays support `blas/ext/base/gapxsumpw` [(#4932)](https://github.com/stdlib-js/stdlib/pull/4932)
-   [`419a872`](https://github.com/stdlib-js/stdlib/commit/419a872327435d5d3549cf6de16d1e9766a98e80) - add accessor arrays support to `blas/ext/base/gapxsumors` [(#4930)](https://github.com/stdlib-js/stdlib/pull/4930)
-   [`c879523`](https://github.com/stdlib-js/stdlib/commit/c87952362d00ce9a096b9d9c6dc0a3e92411856a) - add accessor arrays support to `blas/ext/base/gapxsum` [(#4927)](https://github.com/stdlib-js/stdlib/pull/4927)
-   [`f78899e`](https://github.com/stdlib-js/stdlib/commit/f78899eb1aa02dd8364a544c99743b1c18c2c484) - add accessor arrays support to `blas/ext/base/gnansumpw` [(#5037)](https://github.com/stdlib-js/stdlib/pull/5037)
-   [`6af5789`](https://github.com/stdlib-js/stdlib/commit/6af5789d1be31cb3c5be066d742f3bd924ca705d) - add accessor arrays support to `blas/ext/base/gapx` [(#4926)](https://github.com/stdlib-js/stdlib/pull/4926)
-   [`97f01ab`](https://github.com/stdlib-js/stdlib/commit/97f01ab3c49115bb526ccdb88bbe8fd07770f17a) - add accessor arrays support to `blas/ext/base/gsumkbn2` [(#4960)](https://github.com/stdlib-js/stdlib/pull/4960)
-   [`9ce3d01`](https://github.com/stdlib-js/stdlib/commit/9ce3d0115c15027d2d971f8ea22950aa5b6774c5) - add accessor arrays support to `blas/ext/base/gnansumors` [(#5036)](https://github.com/stdlib-js/stdlib/pull/5036)
-   [`6f8898d`](https://github.com/stdlib-js/stdlib/commit/6f8898dbad41926bd7d03efc778e3a9a23742220) - add accessor arrays support to `blas/ext/base/gnansumkbn2` [(#5034)](https://github.com/stdlib-js/stdlib/pull/5034)
-   [`2e66bec`](https://github.com/stdlib-js/stdlib/commit/2e66becd6ee0876f1ee00c55506a369bec2d7f7a) - add accessor arrays support to `blas/ext/base/gnansumkbn` [(#5032)](https://github.com/stdlib-js/stdlib/pull/5032)
-   [`feb71c7`](https://github.com/stdlib-js/stdlib/commit/feb71c7f3eb1875c1f654b8c8a791fe1ea9a0bb8) - add C `ndarray` API and refactor `blas/ext/base/sdsapxsum` [(#4885)](https://github.com/stdlib-js/stdlib/pull/4885)
-   [`e85fab1`](https://github.com/stdlib-js/stdlib/commit/e85fab1411db8fc69df853740872de2f1387237c) - add C `ndarray` API and refactor `blas/ext/base/sdssum` [(#4873)](https://github.com/stdlib-js/stdlib/pull/4873)
-   [`291d653`](https://github.com/stdlib-js/stdlib/commit/291d653c5f5dfb48cb4c65db6a352c19965a38b6) - add C `ndarray` API and refactor `blas/ext/base/ssum` [(#4871)](https://github.com/stdlib-js/stdlib/pull/4871)
-   [`9c66f54`](https://github.com/stdlib-js/stdlib/commit/9c66f540e94405d3f8a3c97677274012b0478174) - add C `ndarray` API and refactor `blas/ext/base/ssumkbn2` [(#4870)](https://github.com/stdlib-js/stdlib/pull/4870)
-   [`2f8eeb1`](https://github.com/stdlib-js/stdlib/commit/2f8eeb11a7228465d62f83caeb36177ed5bf11fa) - add C `ndarray` API and refactor `blas/ext/base/sdsnansum` [(#4882)](https://github.com/stdlib-js/stdlib/pull/4882)
-   [`4bbd4bd`](https://github.com/stdlib-js/stdlib/commit/4bbd4bdc49ac6d5df7904c3e47810a455b1912bd) - add accessor arrays support to `blas/ext/base/gcusumkbn` [(#4959)](https://github.com/stdlib-js/stdlib/pull/4959)
-   [`f3cc847`](https://github.com/stdlib-js/stdlib/commit/f3cc847524d28e24a95c04a5c0328f5a09a167c5) - add accessor arrays support to `blas/ext/base/gasumpw` [(#4958)](https://github.com/stdlib-js/stdlib/pull/4958)
-   [`14f3f1a`](https://github.com/stdlib-js/stdlib/commit/14f3f1af0988577680efc92522bb9a45a2cbd46b) - update namespace TypeScript declarations
-   [`3f3edff`](https://github.com/stdlib-js/stdlib/commit/3f3edffe817993b5668fd72c81e8c677bc895d14) - add support for accessor arrays in `blas/ext/base/gsumkbn` [(#4923)](https://github.com/stdlib-js/stdlib/pull/4923)
-   [`906a39e`](https://github.com/stdlib-js/stdlib/commit/906a39eec07e9c9550f6ab43197e1f75922fd920) - add accessor arrays support to `blas/ext/base/gapxsumkbn` [(#4888)](https://github.com/stdlib-js/stdlib/pull/4888)
-   [`06f12ee`](https://github.com/stdlib-js/stdlib/commit/06f12ee398117751359df854c9edf9e6074e1b5c) - add support for accessor arrays in `blas/ext/base/gsumpw` [(#4859)](https://github.com/stdlib-js/stdlib/pull/4859)
-   [`1e28982`](https://github.com/stdlib-js/stdlib/commit/1e28982e44845cb8a7bc45c05fac896a5d28d18d) - add C `ndarray` API and refactor `blas/ext/base/ssumkbn` [(#4851)](https://github.com/stdlib-js/stdlib/pull/4851)
-   [`0112c32`](https://github.com/stdlib-js/stdlib/commit/0112c32c3b97b681d32915a72d5dc4b5a3f7be31) - add C `ndarray` API and refactor `blas/ext/sdsnansumpw` [(#4821)](https://github.com/stdlib-js/stdlib/pull/4821)
-   [`a0fed4b`](https://github.com/stdlib-js/stdlib/commit/a0fed4bc22ae6098d4366f1d43fb4ed263f4c235) - add C `ndarray` API and refactor `blas/ext/base/sdssumpw` [(#4823)](https://github.com/stdlib-js/stdlib/pull/4823)
-   [`b358161`](https://github.com/stdlib-js/stdlib/commit/b35816126979042a3a33446b8ab64d6ff0e8c68a) - add C `ndarray` API and refactor `blas/ext/base/snansumkbn` [(#4834)](https://github.com/stdlib-js/stdlib/pull/4834)
-   [`edcbd07`](https://github.com/stdlib-js/stdlib/commit/edcbd07c090a97f6aaacd7e42c288e7685716994) - add C `ndarray` API and refactor `blas/ext/base/sdsapxsumpw` [(#4815)](https://github.com/stdlib-js/stdlib/pull/4815)
-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856)
-   [`8bef034`](https://github.com/stdlib-js/stdlib/commit/8bef0343d2b8fc61121bafa7224320804b9e5932) - add C `ndarray` API and refactor `blas/ext/base/snansumkbn2` [(#4846)](https://github.com/stdlib-js/stdlib/pull/4846)
-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5) - add C `ndarray` API and refactor `blas/ext/base/srev` [(#4848)](https://github.com/stdlib-js/stdlib/pull/4848)
-   [`8e8437c`](https://github.com/stdlib-js/stdlib/commit/8e8437c92781ac1873dc5df96daae1ef17a2ce1f) - update namespace TypeScript declarations [(#4843)](https://github.com/stdlib-js/stdlib/pull/4843)
-   [`6560077`](https://github.com/stdlib-js/stdlib/commit/6560077508ae3c79fbe9ba1e2f90ec6f5e610db8) - add C `ndarray` API and refactor `blas/ext/base/scusumpw` [(#4814)](https://github.com/stdlib-js/stdlib/pull/4814)
-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696)
-   [`036fccd`](https://github.com/stdlib-js/stdlib/commit/036fccd5c53531a64ca81e8c4c0818d5f03ac411) - add C `ndarray` API and refactor `blas/ext/base/sapxsum` [(#4812)](https://github.com/stdlib-js/stdlib/pull/4812)
-   [`a1edb83`](https://github.com/stdlib-js/stdlib/commit/a1edb830ac6e7bb3297bddd7b5bcd4e34a51eee3) - add C `ndarray` API and refactor `blas/ext/base/scusumors` [(#4813)](https://github.com/stdlib-js/stdlib/pull/4813)
-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8) - update namespace TypeScript declarations [(#4809)](https://github.com/stdlib-js/stdlib/pull/4809)
-   [`4b88dd6`](https://github.com/stdlib-js/stdlib/commit/4b88dd6a4fc83d387ea60a0b129bdaf53bc8c184) - add `blas/base/zdscal` [(#4738)](https://github.com/stdlib-js/stdlib/pull/4738)
-   [`3d551c4`](https://github.com/stdlib-js/stdlib/commit/3d551c499345de88a1e897c26977cde8d5f263a9) - add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn` [(#4714)](https://github.com/stdlib-js/stdlib/pull/4714)
-   [`6641a29`](https://github.com/stdlib-js/stdlib/commit/6641a29ca92ada4779b1a55d5c681cf375eae791) - add C `ndarray` API and refactor `blas/ext/base/scusum` [(#4799)](https://github.com/stdlib-js/stdlib/pull/4799)
-   [`1fa205c`](https://github.com/stdlib-js/stdlib/commit/1fa205cc4a6002a53be6fda15006749a0e18eeec) - add support for accessor arrays
-   [`7aa7851`](https://github.com/stdlib-js/stdlib/commit/7aa785142a77891dfa757fb0981966345a3b65f9) - add C `ndarray` API and refactor `blas/ext/base/sapxsumpw` [(#4747)](https://github.com/stdlib-js/stdlib/pull/4747)
-   [`04950f3`](https://github.com/stdlib-js/stdlib/commit/04950f32082d53f9dc2fa114c3885a69c02e3246) - add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn2` [(#4730)](https://github.com/stdlib-js/stdlib/pull/4730)
-   [`aca04f8`](https://github.com/stdlib-js/stdlib/commit/aca04f8b4bd9c850d9b66a253647bac5b84c63fb) - add C `ndarray` API and refactor `blas/ext/base/scusumkbn` [(#4782)](https://github.com/stdlib-js/stdlib/pull/4782)
-   [`8582e3f`](https://github.com/stdlib-js/stdlib/commit/8582e3f3ab1f6bb233df00cafe362954fefe24de) - add C `ndarray` API and refactor `blas/ext/base/sasumpw` [(#4764)](https://github.com/stdlib-js/stdlib/pull/4764)
-   [`3ca8ed8`](https://github.com/stdlib-js/stdlib/commit/3ca8ed8f2fb388fcf6890322f6f880c30fd6094e) - add C `ndarray` API and refactor `blas/ext/base/scusumkbn2` [(#4788)](https://github.com/stdlib-js/stdlib/pull/4788)
-   [`a393090`](https://github.com/stdlib-js/stdlib/commit/a3930905a569573b8861d59e2a0b09e3f80a9831) - add C `ndarray` API and refactor `blas/ext/base/sapxsumors` [(#4746)](https://github.com/stdlib-js/stdlib/pull/4746)
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`074b9a1`](https://github.com/stdlib-js/stdlib/commit/074b9a191c77d297bab5cb51cf82a727a650fe58) - add C `ndarray` API and refactor `blas/ext/base/dsumpw` [(#4329)](https://github.com/stdlib-js/stdlib/pull/4329)
-   [`a13b924`](https://github.com/stdlib-js/stdlib/commit/a13b924cf236742b407bb6dc137eef194fdfd88f) - add C `ndarray` API and refactor `blas/ext/base/dsumors` [(#4320)](https://github.com/stdlib-js/stdlib/pull/4320)
-   [`94c28dd`](https://github.com/stdlib-js/stdlib/commit/94c28dd762780658f66507d0912e35bdcbcff573) - add C `ndarray` API and refactor `blas/ext/base/dsumkbn2` [(#4316)](https://github.com/stdlib-js/stdlib/pull/4316)
-   [`e373bc9`](https://github.com/stdlib-js/stdlib/commit/e373bc91929cd46d5ed9a520cef9bfd5dcbb04c9) - add C `ndarray` API and refactor `blas/ext/base/dsum` [(#4312)](https://github.com/stdlib-js/stdlib/pull/4312)
-   [`f78ae7b`](https://github.com/stdlib-js/stdlib/commit/f78ae7b4ed12879282a4e9c20e6c7b5baf2d6e39) - add C `ndarray` API and refactor `blas/ext/base/dssum` [(#4262)](https://github.com/stdlib-js/stdlib/pull/4262)
-   [`c351e4b`](https://github.com/stdlib-js/stdlib/commit/c351e4b399c6d5c791e46db4cdfba9ce762d9548) - add C `ndarray` API and refactor `blas/ext/base/snansumors` [(#3955)](https://github.com/stdlib-js/stdlib/pull/3955)
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916)
-   [`bcc704d`](https://github.com/stdlib-js/stdlib/commit/bcc704dd3fcb478859932dbb4909f50f3a401608) - add C `ndarray` API and refactor `blas/ext/base/dsumkbn` [(#3530)](https://github.com/stdlib-js/stdlib/pull/3530)
-   [`1f596cb`](https://github.com/stdlib-js/stdlib/commit/1f596cb9bd3a26c2a7a82ab578d460f88df8dea5) - add C `ndarray` API and refactor `blas/ext/base/ssumors` [(#3891)](https://github.com/stdlib-js/stdlib/pull/3891)
-   [`a04a9e3`](https://github.com/stdlib-js/stdlib/commit/a04a9e31780bfb285f51dba041da0c07b905a30d) - add C `ndarray` API and refactor `blas/ext/base/dssumpw` [(#3528)](https://github.com/stdlib-js/stdlib/pull/3528)
-   [`5a3d324`](https://github.com/stdlib-js/stdlib/commit/5a3d324e7e80752fad34d120df3e6c85636f20c5) - add C `ndarray` API and refactor `blas/ext/base/dssumors` [(#3396)](https://github.com/stdlib-js/stdlib/pull/3396)
-   [`b6ee443`](https://github.com/stdlib-js/stdlib/commit/b6ee443347db7dcd18b281f99a0617b3b64d86fc) - add C `ndarray` implementation for `blas/base/caxpy` [(#3456)](https://github.com/stdlib-js/stdlib/pull/3456)
-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371)
-   [`e3efb84`](https://github.com/stdlib-js/stdlib/commit/e3efb84a0ec88f76fa2a799252da98165fcd7d4d) - add C `ndarray` API and refactor `blas/ext/base/snansumpw` [(#3353)](https://github.com/stdlib-js/stdlib/pull/3353)
-   [`c83f108`](https://github.com/stdlib-js/stdlib/commit/c83f10824d14d8c0290b68a5f5bcedbdc2c52c6d) - add C `ndarray` API and refactor `blas/ext/base/ssumpw` [(#3285)](https://github.com/stdlib-js/stdlib/pull/3285)
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259)
-   [`5c40302`](https://github.com/stdlib-js/stdlib/commit/5c4030282872bb10818edea642da92bad5f6dfdc) - add C `ndarray` API and refactor `blas/ext/base/dsnansum` [(#3268)](https://github.com/stdlib-js/stdlib/pull/3268)
-   [`de75f04`](https://github.com/stdlib-js/stdlib/commit/de75f0465fdaa762112195f16f6334b121204664) - add C `ndarray` API and refactor `blas/ext/base/dsnansumpw` [(#3262)](https://github.com/stdlib-js/stdlib/pull/3262)
-   [`7809a85`](https://github.com/stdlib-js/stdlib/commit/7809a85b47556362c61182b4f08563014dcb598a) - add C `ndarray` API and refactor `blas/ext/base/dsnansumors` [(#3246)](https://github.com/stdlib-js/stdlib/pull/3246)
-   [`d649da5`](https://github.com/stdlib-js/stdlib/commit/d649da5c2f30c5cb459d6c43215ce6066f5c7483) - update namespace TypeScript declarations [(#3243)](https://github.com/stdlib-js/stdlib/pull/3243)
-   [`6ae3c11`](https://github.com/stdlib-js/stdlib/commit/6ae3c11e5494f6e5750638535b46454e3e325b6e) - add C `ndarray` API and refactor `blas/ext/base/dsapxsum` [(#3225)](https://github.com/stdlib-js/stdlib/pull/3225)
-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204)
-   [`05aab7d`](https://github.com/stdlib-js/stdlib/commit/05aab7d99007e790e05e82509b50c63db761b49a) - add `blas/base/csrot-wasm` [(#3203)](https://github.com/stdlib-js/stdlib/pull/3203)
-   [`6734e4d`](https://github.com/stdlib-js/stdlib/commit/6734e4dc3d249e2544ef1e22e2a5fd47ff3e6cd3) - add `blas/base/ccopy-wasm` [(#3163)](https://github.com/stdlib-js/stdlib/pull/3163)
-   [`ec233ec`](https://github.com/stdlib-js/stdlib/commit/ec233ec9cadd6f17a72dafa5e79b7eeee5a821eb) - add C `ndarray` API and refactor `blas/ext/base/dnannsumpw` [(#2994)](https://github.com/stdlib-js/stdlib/pull/2994)
-   [`d23d168`](https://github.com/stdlib-js/stdlib/commit/d23d16808c4c6970f8ae2c583c05261396ea9e4b) - add C `ndarray` implementation for `blas/base/sscal` [(#3030)](https://github.com/stdlib-js/stdlib/pull/3030)
-   [`493db03`](https://github.com/stdlib-js/stdlib/commit/493db039c45d831e1c61346ac50224a592583760) - add `blas/base/cswap-wasm` [(#3211)](https://github.com/stdlib-js/stdlib/pull/3211)
-   [`045a348`](https://github.com/stdlib-js/stdlib/commit/045a348d16c6bf78a9ebfb31c1c74de5536e37ea) - add C `ndarray` API and refactor `blas/ext/base/dnannsum` [(#3197)](https://github.com/stdlib-js/stdlib/pull/3197)
-   [`14021a5`](https://github.com/stdlib-js/stdlib/commit/14021a537b3f627a4ff0b3228b78d0433a6eb562) - add C `ndarray` API and refactor `blas/ext/base/dnansumpw` [(#3202)](https://github.com/stdlib-js/stdlib/pull/3202)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`f9fa434`](https://github.com/stdlib-js/stdlib/commit/f9fa434610b42939102b9f87eda61c3706a06a12) - add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn` [(#2988)](https://github.com/stdlib-js/stdlib/pull/2988)
-   [`b4c3fc8`](https://github.com/stdlib-js/stdlib/commit/b4c3fc8f5a8a1edeb82564db8b840b902ed1b5cd) - add C `ndarray` API and refactor `blas/ext/base/dsapxsumpw` [(#3083)](https://github.com/stdlib-js/stdlib/pull/3083)
-   [`14b8f08`](https://github.com/stdlib-js/stdlib/commit/14b8f08874e0a6fc2f7cc6f31d6876afb159c7e4) - add C `ndarray` implementation for `blas/base/scnrm2` [(#3133)](https://github.com/stdlib-js/stdlib/pull/3133)
-   [`d05d7b3`](https://github.com/stdlib-js/stdlib/commit/d05d7b352455ff537847cd081aafd1fb77c67c3e) - add C `ndarray` implementation for `blas/base/dznrm2` [(#3130)](https://github.com/stdlib-js/stdlib/pull/3130)
-   [`2d0ea39`](https://github.com/stdlib-js/stdlib/commit/2d0ea39cfb5e3f2c31e13520ac6bec201e7842ef) - add C `ndarray` implementation for `blas/base/csrot` [(#3067)](https://github.com/stdlib-js/stdlib/pull/3067)
-   [`7462db7`](https://github.com/stdlib-js/stdlib/commit/7462db759c64f25e883c731169e57a48067d076d) - add C `ndarray` implementation for `blas/base/zdrot` [(#3069)](https://github.com/stdlib-js/stdlib/pull/3069)
-   [`d7925a2`](https://github.com/stdlib-js/stdlib/commit/d7925a2cc0b94ebe0299ed39d2f463ecc3fd1149) - update JavaScipt implementation and add C `ndarray` implementation for `blas/base/ccopy` [(#3063)](https://github.com/stdlib-js/stdlib/pull/3063)
-   [`17b2358`](https://github.com/stdlib-js/stdlib/commit/17b23580739e33491f1287c88d3083ec989cd756) - update JavaScript implementation and add C `ndarray` implementation for `blas/base/scasum` [(#3068)](https://github.com/stdlib-js/stdlib/pull/3068)
-   [`953e73d`](https://github.com/stdlib-js/stdlib/commit/953e73d1fd1c06babf0ed16dcc94430152abf5a8) - update JavaScript implementation and add C `ndarray` implementation for `blas/base/cswap` [(#3064)](https://github.com/stdlib-js/stdlib/pull/3064)
-   [`ada1567`](https://github.com/stdlib-js/stdlib/commit/ada15676ce0be30b050d3c0fbcbf777492bb3cac) - add C `ndarray` implementation for `blas/base/zswap` [(#3080)](https://github.com/stdlib-js/stdlib/pull/3080)
-   [`75e000c`](https://github.com/stdlib-js/stdlib/commit/75e000ca99d19069677358c0c890b2748fa3074a) - add C `ndarray` implementation for `blas/base/zcopy` [(#3081)](https://github.com/stdlib-js/stdlib/pull/3081)
-   [`c442b93`](https://github.com/stdlib-js/stdlib/commit/c442b93d2ed3af2a2f50402b4b0dc87e9090f596) - add `blas/base/drotm-wasm` [(#3021)](https://github.com/stdlib-js/stdlib/pull/3021)
-   [`f0ecdad`](https://github.com/stdlib-js/stdlib/commit/f0ecdad9731cd40ae9047a87981d2688693e54dc) - add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn2` [(#2990)](https://github.com/stdlib-js/stdlib/pull/2990)
-   [`ee9a830`](https://github.com/stdlib-js/stdlib/commit/ee9a8300ba0f24dabe4b7b67ffb3bbe94f251b36) - add C `ndarray` API and refactor `blas/ext/base/drev` [(#3071)](https://github.com/stdlib-js/stdlib/pull/3071)
-   [`a341f85`](https://github.com/stdlib-js/stdlib/commit/a341f857ab541502a4e2b0b4b805c41e68e46fd6) - add C `ndarray` API and refactor `blas/ext/base/dsnannsumors` [(#3086)](https://github.com/stdlib-js/stdlib/pull/3086)
-   [`af8d471`](https://github.com/stdlib-js/stdlib/commit/af8d471a7e01113f814a78fc411c7949b69ca1f3) - add C `ndarray` API and refactor `blas/ext/base/dnannsumors` [(#2991)](https://github.com/stdlib-js/stdlib/pull/2991)
-   [`796d76a`](https://github.com/stdlib-js/stdlib/commit/796d76a43a378cd5496e4222baac2bde1658e6da) - add C `ndarray` API and refactor `blas/ext/base/dnansum` [(#3052)](https://github.com/stdlib-js/stdlib/pull/3052)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`b2e273f`](https://github.com/stdlib-js/stdlib/commit/b2e273fd7a2c7d51b21c175f87ada0efbff82381) - add missing `create-double` dependency to `sdssum` manifest
-   [`912f410`](https://github.com/stdlib-js/stdlib/commit/912f41098b5dbf1dc535e48259d60f9e1adbec90) - add missing `argv-strided-float64array` dependency to `dapxsum` manifest
-   [`18e08fc`](https://github.com/stdlib-js/stdlib/commit/18e08fc9d34c34bdc23e4ebd305d3ec5d034ef51) - use appropriate variable in error message [(#7401)](https://github.com/stdlib-js/stdlib/pull/7401)
-   [`0b4a818`](https://github.com/stdlib-js/stdlib/commit/0b4a8186131a6a245fe1d893afae19c0524dbbef) - use correct dependencies in `manifest.json` of `blas/base/zscal` [(#7121)](https://github.com/stdlib-js/stdlib/pull/7121)
-   [`aa52ed9`](https://github.com/stdlib-js/stdlib/commit/aa52ed96730b4835b3ef403b2abbcd7910e3e483) - update implementation to preserve signed zeros
-   [`b0eea3a`](https://github.com/stdlib-js/stdlib/commit/b0eea3afaee1bdd3f14826bc9a92a92e68b51d17) - update implementation to preserve signed zeros
-   [`151f3e5`](https://github.com/stdlib-js/stdlib/commit/151f3e5714bf1b13e00b72ee0c98fb65ee095ba8) - update implementation to preserve signed zeros
-   [`71cafe3`](https://github.com/stdlib-js/stdlib/commit/71cafe3750d452180ec33524aa0d2fb19322b743) - add support for complex64 and complex128
-   [`3014ce9`](https://github.com/stdlib-js/stdlib/commit/3014ce93b3fd6a8d7d26b7951d762f5100faffdf) - update return type
-   [`2acc7f0`](https://github.com/stdlib-js/stdlib/commit/2acc7f03aa6e89410deb74d99f466cc1cd400384) - update return type
-   [`15922b7`](https://github.com/stdlib-js/stdlib/commit/15922b7bcaaaa3eb81bc6fec90898f0bd52e66fc) - address indexing bug
-   [`549f1c1`](https://github.com/stdlib-js/stdlib/commit/549f1c1889b0d324eab00a142121ef26ed080592) - address indexing bug
-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - add missing checks for `N` and address failing tests stemming from refactoring
-   [`4c5e486`](https://github.com/stdlib-js/stdlib/commit/4c5e4866ffc225fb1468ef98d156b984748a3cb1) - update implementation to preserve signed zeros
-   [`95641f7`](https://github.com/stdlib-js/stdlib/commit/95641f75c1764479af76b23eac8a90101ee12f8d) - update implementation to preserve signed zeros
-   [`e20b7f5`](https://github.com/stdlib-js/stdlib/commit/e20b7f533ddf8cbc27f142011a8ed65d3229e380) - update implementation to preserve signed zeros
-   [`da339ee`](https://github.com/stdlib-js/stdlib/commit/da339ee8d7e24972cbf4a1592b9174ef617978f8) - update implementation to preserve signed zeros
-   [`67273e4`](https://github.com/stdlib-js/stdlib/commit/67273e4e5ff3e77af9db4da0cfc45c0aaeceb8d8) - update implementation to preserve signed zeros
-   [`09daf3d`](https://github.com/stdlib-js/stdlib/commit/09daf3ddceed2358405a5a3a553b295a1de71daa) - update implementation to preserve signed zeros
-   [`4f0b1ca`](https://github.com/stdlib-js/stdlib/commit/4f0b1cadad99e48ee09dfd047b858e0856fed91a) - update implementation to preserve signed zeros
-   [`8976032`](https://github.com/stdlib-js/stdlib/commit/897603210f2f6d965857ee4495014cb92b76b7c9) - update implementation to preserve signed zeros
-   [`35a1a06`](https://github.com/stdlib-js/stdlib/commit/35a1a0662a066d9c6fd5f87e5925b5c0852b7193) - update implementation to preserve signed zeros
-   [`c7725bd`](https://github.com/stdlib-js/stdlib/commit/c7725bd2c3aeb2ad5844fbe4fa0ac7f0ac88d133) - update implementation to preserve signed zeros
-   [`08611d0`](https://github.com/stdlib-js/stdlib/commit/08611d0e7ecf48ae7804081f0f5134309974313b) - update implementation to preserve signed zeros
-   [`950141e`](https://github.com/stdlib-js/stdlib/commit/950141ee601eec31ba21d377133fe8b80c153f55) - update implementation to preserve signed zeros
-   [`38a7900`](https://github.com/stdlib-js/stdlib/commit/38a7900a08f364a782e3cc6d0f712dba101983d7) - use correct return value
-   [`bf4258f`](https://github.com/stdlib-js/stdlib/commit/bf4258f3cff7b37d00386b15df156305553631ab) - update implementation to preserve signed zeros
-   [`149aa3c`](https://github.com/stdlib-js/stdlib/commit/149aa3c8f30ac20953aca48e5497d82747d29008) - use correct return value
-   [`3612259`](https://github.com/stdlib-js/stdlib/commit/3612259d5a0558d6906748993d061f501bfcdd7a) - update implementation to preserve signed zeros
-   [`bb16002`](https://github.com/stdlib-js/stdlib/commit/bb16002f4d99f329f2811799997f169a45bef61b) - address pointer increment bug
-   [`205bebc`](https://github.com/stdlib-js/stdlib/commit/205bebc114efdc0a11ef685d29a220603c436165) - address pointer increment bug
-   [`7be4df1`](https://github.com/stdlib-js/stdlib/commit/7be4df1ff62f12c957c91f1fd65f45cd800d5802) - address pointer increment bug
-   [`c72df11`](https://github.com/stdlib-js/stdlib/commit/c72df11dfc1aaa4ddea893f9f0bb41b3fd53554d) - address pointer increment bug
-   [`28855c3`](https://github.com/stdlib-js/stdlib/commit/28855c372581a6a7f175f5be6ce1c55a865b807a) - address pointer increment bug
-   [`7552a5f`](https://github.com/stdlib-js/stdlib/commit/7552a5ff3185a212d94145c41f8da66644c4943f) - address pointer increment bug
-   [`432b26d`](https://github.com/stdlib-js/stdlib/commit/432b26dbda2336b72babe8236c77fab0e066012c) - address pointer increment bug
-   [`25288d7`](https://github.com/stdlib-js/stdlib/commit/25288d7f869b2d13139e742e88601419463423fd) - update implementation to preserve signed zeros
-   [`4438919`](https://github.com/stdlib-js/stdlib/commit/443891959e78aeeb0df7bc37351784275eb52c46) - update implementation to preserve signed zeros
-   [`2306a2d`](https://github.com/stdlib-js/stdlib/commit/2306a2d56aea3e62a783c6b2adcf837d06ac3abc) - update implementation to preserve signed zeros
-   [`1bbd885`](https://github.com/stdlib-js/stdlib/commit/1bbd885b09162dac5d8989b79541c528e3827757) - update implementation to preserve signed zeros
-   [`67a91d6`](https://github.com/stdlib-js/stdlib/commit/67a91d69cc62d8c76cf2a654eb8e2f28bd408b9f) - update implementation to preserve signed zeros
-   [`3d59edd`](https://github.com/stdlib-js/stdlib/commit/3d59edde188e1359a12d967e6b77feeba4ccb6e4) - preserve sign of zero
-   [`d3451ce`](https://github.com/stdlib-js/stdlib/commit/d3451ceb42a0109140785d3928ab1242450cc61a) - update implementation to preserve signed zeros
-   [`0c7c973`](https://github.com/stdlib-js/stdlib/commit/0c7c973f23160582ef1c7b5f7295fe9b6e32e8d7) - update implementation to preserve signed zeros
-   [`00d8714`](https://github.com/stdlib-js/stdlib/commit/00d87144e980744517f6fa456aef512e3940c4fd) - update implementation to preserve signed zeros
-   [`6ef5cc8`](https://github.com/stdlib-js/stdlib/commit/6ef5cc89460281ddffad651eb0df39166aae9a31) - update implementation to preserve signed zeros
-   [`b53f15b`](https://github.com/stdlib-js/stdlib/commit/b53f15b1bd89e48e30ca1ccbb4438b1bdb04a465) - update implementation to preserve signed zeros
-   [`20cb136`](https://github.com/stdlib-js/stdlib/commit/20cb1367a6e088ab29a0018a15f2e06b802e77c5) - restrict set of allowed data types
-   [`8259ed5`](https://github.com/stdlib-js/stdlib/commit/8259ed5b9d1f003567f1534962163799c6254c88) - restrict set of allowed data types
-   [`cd6132a`](https://github.com/stdlib-js/stdlib/commit/cd6132a767338fc1726bf333c7a65ace1c37edde) - update package name
-   [`de5763c`](https://github.com/stdlib-js/stdlib/commit/de5763c0ae79e809d74237f084b066411be59f0d) - replace policy string with policy object
-   [`05e83e1`](https://github.com/stdlib-js/stdlib/commit/05e83e1582cfeef43b39227e4a5c891f9934d1c0) - resolve typo in include guard
-   [`a996667`](https://github.com/stdlib-js/stdlib/commit/a9966678dedd564a74999f2c4c5bd47c9a2b0c64) - propagate sign to the accumulated sum
-   [`ee80204`](https://github.com/stdlib-js/stdlib/commit/ee80204dfe9c9a6409ebd7873354371bbdbac32e) - propagate sign to the accumulated sum
-   [`499ac6a`](https://github.com/stdlib-js/stdlib/commit/499ac6abb988bb6e28cd350976d5fee2fd77cf90) - propagate sign to the accumulated sum
-   [`9b15f0d`](https://github.com/stdlib-js/stdlib/commit/9b15f0ddca1266c21cca68caa9c04043eac9807d) - preserve the sign of zero
-   [`b8e6c48`](https://github.com/stdlib-js/stdlib/commit/b8e6c48ca4127def37ab803eafdbdb2180bc90bb) - preserve the sign of zero
-   [`4835ebd`](https://github.com/stdlib-js/stdlib/commit/4835ebdcb112d8e6ca9d6ac9584e1e14e2e861c6) - preserve the sign of zero
-   [`4a04acc`](https://github.com/stdlib-js/stdlib/commit/4a04accd853a02a8b881c900fab0c4f47d46865d) - preserve the sign of zero
-   [`cb8907d`](https://github.com/stdlib-js/stdlib/commit/cb8907dbdb8e4670c3519555e8abc2ddddbf1d77) - preserve the sign of zero
-   [`8355a12`](https://github.com/stdlib-js/stdlib/commit/8355a12db3136d06875016a248eb6f8410672bd2) - preserve the sign of zero
-   [`43bfc6b`](https://github.com/stdlib-js/stdlib/commit/43bfc6bc1d850367f3957fdb550c40d25c6f0e62) - include value in error message
-   [`3b4fa18`](https://github.com/stdlib-js/stdlib/commit/3b4fa18ec5573c25c66e17441092bcbe4c63fe9f) - include value in error message
-   [`b6e0aca`](https://github.com/stdlib-js/stdlib/commit/b6e0aca427f23e8ec53d6c62d41e4b550bdf08c6) - add missing values in error messages in `blas/base/sgemv` [(#6722)](https://github.com/stdlib-js/stdlib/pull/6722)
-   [`dba36a2`](https://github.com/stdlib-js/stdlib/commit/dba36a22dc9997d6fc6f219f3a3c04018e637b8e) - add missing values in error messages in `blas/base/dgemv` [(#6726)](https://github.com/stdlib-js/stdlib/pull/6726)
-   [`fc1d8d5`](https://github.com/stdlib-js/stdlib/commit/fc1d8d5ed542eec3ded1b128850909ebb5f8bc51) - condition checks in `blas/base/ssyr2` [(#6543)](https://github.com/stdlib-js/stdlib/pull/6543)
-   [`e20f4e4`](https://github.com/stdlib-js/stdlib/commit/e20f4e4af09a7608b4f7ebeff0f8050295c646d9) - condition check in `blas/base/dsyr2` ndarray [(#6532)](https://github.com/stdlib-js/stdlib/pull/6532)
-   [`068bbeb`](https://github.com/stdlib-js/stdlib/commit/068bbeb48863fd10ac825a7855192c00121b90ab) - update return value and tests for `blas/ext/base/gcusumkbn` [(#5064)](https://github.com/stdlib-js/stdlib/pull/5064)
-   [`e09860d`](https://github.com/stdlib-js/stdlib/commit/e09860df82de288c68c2e90f9ac8727caba3d7fd) - update type definitions to support accessor arrays
-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732)
-   [`cc8daaf`](https://github.com/stdlib-js/stdlib/commit/cc8daaf165f6426ba2b1d7edd68ff3e8f3d74478) - update include path
-   [`2222d50`](https://github.com/stdlib-js/stdlib/commit/2222d505c97a6c4f8acf89bdb3aae6f504589e04) - update include path and refactor addon
-   [`fcedaac`](https://github.com/stdlib-js/stdlib/commit/fcedaac9fd61fd81a1aa6d522ed2c29b21465259) - update the return type and remove unnecessary branches/tests in `blas/ext/base/ssumpw` [(#3321)](https://github.com/stdlib-js/stdlib/pull/3321)
-   [`4458c49`](https://github.com/stdlib-js/stdlib/commit/4458c49e9901bdd83048c773b8cacc6361b8729b) - extract the scalar constant as a float in `blas/ext/base/dsapxsum` [(#3254)](https://github.com/stdlib-js/stdlib/pull/3254)
-   [`bff0533`](https://github.com/stdlib-js/stdlib/commit/bff0533b91d79f305e1918e0faa597ca3c98f2ca) - extract the scalar constant as a float in `blas/ext/base/dsapxsumpw` [(#3255)](https://github.com/stdlib-js/stdlib/pull/3255)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799): remove `mulf` from `math/base/ops` namespace

    -   To migrate, users should access the same symbol via the `number/float32/base` namespace.

-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce): remove `dnanmean` from `stats/base`

    -   To migrate, users should access the same symbol via the `@stdlib/stats/strided` namespace.

-   [`0864071`](https://github.com/stdlib-js/stdlib/commit/086407175aec71e2874727a7d3bad97d26289323): remove `@stdlib/blas/ext/base/dapxsumkbn-wasm`

    -   To migrate, users should update their import paths to use
        `@stdlib/blas/ext/base/wasm/dapxsumkbn`.

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95): remove `add5`

    -   To migrate, users should access the `add5` symbol via the `number/float64/base` namespace.

-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a): remove `add`, `add3`, and `add4`

    -   To migrate, users should access those symbols in the `number/float64/base` namespace.

-   [`beeca53`](https://github.com/stdlib-js/stdlib/commit/beeca539c35d8abd8bf52f2dabacafb56ef52d2d): remove `blas/base/srot-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/srot` which provides the same API and implementation.

-   [`7ff23bf`](https://github.com/stdlib-js/stdlib/commit/7ff23bf5084c883c8db90385b4986c6ac5361678): remove `blas/base/snrm2-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/snrm2` which provides the same API and implementation.

-   [`7d1efc3`](https://github.com/stdlib-js/stdlib/commit/7d1efc3234e5e97e8138775d24de6883ecc353f0): remove `blas/base/sdot-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/sdot` which provides the same API and implementation.

-   [`742eb42`](https://github.com/stdlib-js/stdlib/commit/742eb42240411f30af6d40846b1ed53cc50b3d4f): remove `blas/base/scopy-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/scopy` which provides the same API and implementation.

-   [`68d3c7c`](https://github.com/stdlib-js/stdlib/commit/68d3c7cb33337b53fec5105734d22310b8a00f8e): remove `blas/base/saxpy-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/saxpy` which provides the same API and implementation.

-   [`bf91fc5`](https://github.com/stdlib-js/stdlib/commit/bf91fc54f3c5b2d3170c075750ebef18971087b4): remove `blas/base/sasum-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/sasum` which provides the same API and implementation.

-   [`c528ea9`](https://github.com/stdlib-js/stdlib/commit/c528ea916d5b93335f1dabc3ae5c39d0a0d4a6e4): remove `blas/base/idamax-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/idamax` which provides the same API and implementation.

-   [`07ce325`](https://github.com/stdlib-js/stdlib/commit/07ce325d72471c7ae049f284d52627558f6dae51): remove `blas/base/dswap-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/dswap` which provides the same API and implementation.

-   [`6e39c79`](https://github.com/stdlib-js/stdlib/commit/6e39c79befc44701587a7e3f39fa728b93a14ec2): remove `blas/base/dscal-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/dscal` which provides the same API and implementation.

-   [`c0b7f3c`](https://github.com/stdlib-js/stdlib/commit/c0b7f3c948744b3ef7ff57cd45fcf890602222c5): remove `blas/base/drotm-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/drotm` which provides the same API and implementation.

-   [`0015bcd`](https://github.com/stdlib-js/stdlib/commit/0015bcde4419b759d390b8f8e0ca282305c70121): remove `blas/base/drot-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/drot` which provides the same API and implementation.

-   [`3c378c6`](https://github.com/stdlib-js/stdlib/commit/3c378c642fe19f5c36f97798c45d6e10f812bd2b): remove `blas/base/dnrm2-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/dnrm2` which provides the same API and implementation.

-   [`c4b589f`](https://github.com/stdlib-js/stdlib/commit/c4b589f67ea7c3543f17fc1b6828bc6f72212cdc): remove `blas/base/ddot-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/ddot` which provides the same API and implementation.

-   [`21feb97`](https://github.com/stdlib-js/stdlib/commit/21feb97bbec27eca259b929cc346e6b86bc917aa): remove `blas/base/dcopy-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/dcopy` which provides the same API and implementation.

-   [`e80da18`](https://github.com/stdlib-js/stdlib/commit/e80da183a872a3c9172bd552c9f48576ea0d43fe): remove `blas/base/daxpy-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/daxpy` which provides the same API and implementation.

-   [`28aeac5`](https://github.com/stdlib-js/stdlib/commit/28aeac57a7c34eedca3d6491ea09741ee1b9992f): remove `blas/base/dasum-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/dasum` which provides the same API and implementation.

-   [`79cdf06`](https://github.com/stdlib-js/stdlib/commit/79cdf06e44a07f896283172509f0c0a3a174d9d5): remove `blas/base/cswap-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/cswap` which provides the same API and implementation.

-   [`08a68fa`](https://github.com/stdlib-js/stdlib/commit/08a68fa2382d01b74aaf1b25a8d4235465dc2a07): remove `blas/base/csrot-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/csrot` which provides the same API and implementation.

-   [`009ba31`](https://github.com/stdlib-js/stdlib/commit/009ba31b10876362faf01f08b4f94fc3a82bbf71): remove `blas/base/cscal-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/cscal` which provides the same API and implementation.

-   [`3fc841d`](https://github.com/stdlib-js/stdlib/commit/3fc841dec353f3d7dbb5a385e8741a002223caa4): remove `blas/base/ccopy-wasm`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/blas/base/wasm/ccopy` which provides the same API and implementation.

-   [`14f3f1a`](https://github.com/stdlib-js/stdlib/commit/14f3f1af0988577680efc92522bb9a45a2cbd46b): remove `dcuminabs`

    -   To migrate, users should access `dcuminabs` in the `stats/strided/*` namespace.

-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5): rename `c_srev`

    -   To migrate, users should replace usage of `c_srev` with `stdlib_strided_srev`. The API signatures remain the same.

-   [`8e8437c`](https://github.com/stdlib-js/stdlib/commit/8e8437c92781ac1873dc5df96daae1ef17a2ce1f): remove `stats/base/dcumaxabs`

    -   To migrate, users should access `dcumaxabs` via the `stats/strided` namespace.

-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5): rename `c_sapx` to `stdlib_strided_sapx`

    -   To migrate, users should replace all instances of `c_sapx` with `stdlib_strided_sapx`.

-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8): remove `dmax`

    -   To migrate, users should access `dmax` via the `stats/strided` namespace.

-   [`02cbff3`](https://github.com/stdlib-js/stdlib/commit/02cbff35d876dcea7efd41794f414c7df5eddca4): - `c_dapx()` renamed to `stdlib_strided_dapx()`

    -   - `c_dapx_ndarray()` renamed to `stdlib_strided_dapx_ndarray()`
        All downstream usage of the old `c_dapx*` symbols must be updated to use the new symbols.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 23 issues were closed in this release:

[#318](https://github.com/stdlib-js/stdlib/issues/318), [#3046](https://github.com/stdlib-js/stdlib/issues/3046), [#3073](https://github.com/stdlib-js/stdlib/issues/3073), [#3074](https://github.com/stdlib-js/stdlib/issues/3074), [#3075](https://github.com/stdlib-js/stdlib/issues/3075), [#3186](https://github.com/stdlib-js/stdlib/issues/3186), [#3201](https://github.com/stdlib-js/stdlib/issues/3201), [#3253](https://github.com/stdlib-js/stdlib/issues/3253), [#5072](https://github.com/stdlib-js/stdlib/issues/5072), [#5073](https://github.com/stdlib-js/stdlib/issues/5073), [#5237](https://github.com/stdlib-js/stdlib/issues/5237), [#5440](https://github.com/stdlib-js/stdlib/issues/5440), [#5501](https://github.com/stdlib-js/stdlib/issues/5501), [#5504](https://github.com/stdlib-js/stdlib/issues/5504), [#5505](https://github.com/stdlib-js/stdlib/issues/5505), [#5507](https://github.com/stdlib-js/stdlib/issues/5507), [#5508](https://github.com/stdlib-js/stdlib/issues/5508), [#5509](https://github.com/stdlib-js/stdlib/issues/5509), [#5905](https://github.com/stdlib-js/stdlib/issues/5905), [#6992](https://github.com/stdlib-js/stdlib/issues/6992), [#7018](https://github.com/stdlib-js/stdlib/issues/7018), [#7032](https://github.com/stdlib-js/stdlib/issues/7032), [#7241](https://github.com/stdlib-js/stdlib/issues/7241)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`3f4be91`](https://github.com/stdlib-js/stdlib/commit/3f4be91fd9025e696b72b5159fee981f47937c7f) - **docs:** update namespace table of contents [(#7433)](https://github.com/stdlib-js/stdlib/pull/7433) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5d83a20`](https://github.com/stdlib-js/stdlib/commit/5d83a20bab1fd787ba28f19cb13c20d395398b43) - **style:** remove double empty lines in C files _(by Philipp Burckhardt)_
-   [`b2e273f`](https://github.com/stdlib-js/stdlib/commit/b2e273fd7a2c7d51b21c175f87ada0efbff82381) - **fix:** add missing `create-double` dependency to `sdssum` manifest _(by Philipp Burckhardt)_
-   [`912f410`](https://github.com/stdlib-js/stdlib/commit/912f41098b5dbf1dc535e48259d60f9e1adbec90) - **fix:** add missing `argv-strided-float64array` dependency to `dapxsum` manifest _(by Philipp Burckhardt)_
-   [`1ee2330`](https://github.com/stdlib-js/stdlib/commit/1ee23306fe818017146addffcd919821e4f6e06e) - **docs:** change variable naming in `blas/base/zdscal` [(#6790)](https://github.com/stdlib-js/stdlib/pull/6790) _(by Shabareesh Shetty)_
-   [`168de01`](https://github.com/stdlib-js/stdlib/commit/168de01f5b4706dcff0aa60b98c83c85381ddd24) - **docs:** update parameter description in `blas/base/csscal` [(#7399)](https://github.com/stdlib-js/stdlib/pull/7399) _(by Shabareesh Shetty)_
-   [`18e08fc`](https://github.com/stdlib-js/stdlib/commit/18e08fc9d34c34bdc23e4ebd305d3ec5d034ef51) - **fix:** use appropriate variable in error message [(#7401)](https://github.com/stdlib-js/stdlib/pull/7401) _(by Shabareesh Shetty)_
-   [`67e3e62`](https://github.com/stdlib-js/stdlib/commit/67e3e626914282ea5dafe86d603e446fb2679890) - **docs:** update param description in `blas/base/dtrsv` [(#7384)](https://github.com/stdlib-js/stdlib/pull/7384) _(by Aayush Khanna)_
-   [`161c07f`](https://github.com/stdlib-js/stdlib/commit/161c07f799df67fe19580ad0fbf1093d39566142) - **docs:** update copy _(by Athan Reines)_
-   [`dde0849`](https://github.com/stdlib-js/stdlib/commit/dde0849e582545d8e2a213ba1039238cdcff1ec5) - **chore:** fix C lint errors [(#7286)](https://github.com/stdlib-js/stdlib/pull/7286) _(by Pierre Forstmann, Athan Reines)_
-   [`3565318`](https://github.com/stdlib-js/stdlib/commit/3565318e3639b3e44890ed15ccd73560d3cac14c) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`bcd0411`](https://github.com/stdlib-js/stdlib/commit/bcd04112308e7d7b42de2bc04599d490e429ebc8) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`8e82087`](https://github.com/stdlib-js/stdlib/commit/8e820870a43e8b649135a6f664174efc81569de6) - **docs:** update namespace table of contents [(#7261)](https://github.com/stdlib-js/stdlib/pull/7261) _(by stdlib-bot)_
-   [`cb8489a`](https://github.com/stdlib-js/stdlib/commit/cb8489a1e33cc21eba3dd883e6ada2b2e2ce82db) - **feat:** add support for accessor arrays `blas/base/gaxpy` [(#7244)](https://github.com/stdlib-js/stdlib/pull/7244) _(by Shabareesh Shetty, Athan Reines)_
-   [`7531b27`](https://github.com/stdlib-js/stdlib/commit/7531b27b47a63c889677a4525a6791cb700a3fac) - **test:** change structure of fixtures for `blas/base/strmv` [(#7252)](https://github.com/stdlib-js/stdlib/pull/7252) _(by Shabareesh Shetty)_
-   [`a3c291e`](https://github.com/stdlib-js/stdlib/commit/a3c291efac68f24917f22d48f46d0255a4f32d02) - **docs:** change variable naming for `blas/base/scasum` [(#7193)](https://github.com/stdlib-js/stdlib/pull/7193) _(by Shabareesh Shetty, stdlib-bot)_
-   [`04c89d1`](https://github.com/stdlib-js/stdlib/commit/04c89d16aca5b3c1a38b8494a82fd1c4bef55139) - **test:** add test cases for `blas/base/dtrmv` [(#7163)](https://github.com/stdlib-js/stdlib/pull/7163) _(by Shabareesh Shetty)_
-   [`7457723`](https://github.com/stdlib-js/stdlib/commit/74577238d8a2c72ecd1011dfd54d028034c68531) - **refactor:** rename variable in `blas/ext/base/` [(#7250)](https://github.com/stdlib-js/stdlib/pull/7250) _(by Shabareesh Shetty)_
-   [`590e884`](https://github.com/stdlib-js/stdlib/commit/590e88459645372c6068872dd38fbd25748c4638) - **refactor:** rename variable in `blas/ext/base/snansumkbn2` [(#7249)](https://github.com/stdlib-js/stdlib/pull/7249) _(by Shabareesh Shetty)_
-   [`4413523`](https://github.com/stdlib-js/stdlib/commit/4413523ede7210d3a51731f9bb08aa8238330a25) - **refactor:** rename variable in `blas/ext/base/snansumkbn` [(#7248)](https://github.com/stdlib-js/stdlib/pull/7248) _(by Shabareesh Shetty)_
-   [`5653a9f`](https://github.com/stdlib-js/stdlib/commit/5653a9fe8ef8ec98cdd4968708a82b847b7d3185) - **refactor:** rename variable in `blas/ext/base/snansumpw` [(#7247)](https://github.com/stdlib-js/stdlib/pull/7247) _(by Shabareesh Shetty)_
-   [`f5c3bbb`](https://github.com/stdlib-js/stdlib/commit/f5c3bbbaf92d52e8abc2a06758f815e37aee8acb) - **refactor:** rename variable in `blas/ext/base/scusumkbn2` [(#7245)](https://github.com/stdlib-js/stdlib/pull/7245) _(by Shabareesh Shetty)_
-   [`6279e52`](https://github.com/stdlib-js/stdlib/commit/6279e527265742e1630811edb2b633f1f88b7e67) - **bench:** fix overflow _(by Athan Reines)_
-   [`09c9ceb`](https://github.com/stdlib-js/stdlib/commit/09c9ceb58c6dd23c10f1980094851983c57d693f) - **chore:** fix formatting _(by Athan Reines)_
-   [`51bf6f9`](https://github.com/stdlib-js/stdlib/commit/51bf6f9d2bb027aacecda87e02f957badbc246b0) - **bench:** fix formatting _(by Athan Reines)_
-   [`f592413`](https://github.com/stdlib-js/stdlib/commit/f592413491ad000ffa6d8d257ca0a8cd5c39942c) - **test:** add test cases for `blas/base/sgemv` [(#7125)](https://github.com/stdlib-js/stdlib/pull/7125) _(by Shabareesh Shetty, Athan Reines)_
-   [`1a34934`](https://github.com/stdlib-js/stdlib/commit/1a349345ab14ff961594d888c2130f998047f209) - **test:** add test cases for `blas/base/strsv` [(#7166)](https://github.com/stdlib-js/stdlib/pull/7166) _(by Shabareesh Shetty)_
-   [`c67ccf3`](https://github.com/stdlib-js/stdlib/commit/c67ccf3815cf568888df36136427047cb98049e9) - **test:** add test cases for `blas/base/dtrsv` [(#7165)](https://github.com/stdlib-js/stdlib/pull/7165) _(by Shabareesh Shetty)_
-   [`a6cc0ea`](https://github.com/stdlib-js/stdlib/commit/a6cc0eaad0bc431fb2c531517697992fff2e6608) - **test:** add test cases for `blas/base/strmv` [(#7164)](https://github.com/stdlib-js/stdlib/pull/7164) _(by Shabareesh Shetty)_
-   [`2e40ad9`](https://github.com/stdlib-js/stdlib/commit/2e40ad9683287aecc1a08663caf41967612f728c) - **docs:** change variable naming for `blas/base/scnrm2` [(#7176)](https://github.com/stdlib-js/stdlib/pull/7176) _(by Shabareesh Shetty)_
-   [`4427c2e`](https://github.com/stdlib-js/stdlib/commit/4427c2e66d64d52d597dddf6e531d87d6c433cc5) - **test:** change structure of fixtures for `blas/base/dtrmv` [(#7190)](https://github.com/stdlib-js/stdlib/pull/7190) _(by Shabareesh Shetty)_
-   [`5c6db32`](https://github.com/stdlib-js/stdlib/commit/5c6db32796b7e3dab9871a5e3587b3f0ce5453dc) - **refactor:** rename variable in `blas/base/srotg` [(#7209)](https://github.com/stdlib-js/stdlib/pull/7209) _(by Shabareesh Shetty)_
-   [`02183ed`](https://github.com/stdlib-js/stdlib/commit/02183ed3e98014c54c9331e6ce9797526de18122) - **refactor:** rename variable in `blas/base/saxpy` [(#7207)](https://github.com/stdlib-js/stdlib/pull/7207) _(by Shabareesh Shetty)_
-   [`847dd6f`](https://github.com/stdlib-js/stdlib/commit/847dd6ffbfbd48ccf523e0af97201280bf0022f1) - **refactor:** rename variable in `blas/base/sdsdot` [(#7208)](https://github.com/stdlib-js/stdlib/pull/7208) _(by Shabareesh Shetty)_
-   [`c3a2ca6`](https://github.com/stdlib-js/stdlib/commit/c3a2ca66a8adc663cc4e5ab5f6c7b1b529e895ca) - **refactor:** rename variable in `blas/base/sdot` [(#7210)](https://github.com/stdlib-js/stdlib/pull/7210) _(by Shabareesh Shetty)_
-   [`5fe7c52`](https://github.com/stdlib-js/stdlib/commit/5fe7c52586a8df3f3baa94f5588eadf28d209499) - **refactor:** rename variable in `blas/base/sasumpw` [(#7212)](https://github.com/stdlib-js/stdlib/pull/7212) _(by Shabareesh Shetty)_
-   [`4dd744c`](https://github.com/stdlib-js/stdlib/commit/4dd744c4f9e9b088b6ec33e7d45c4b7280c86d2d) - **refactor:** rename variable in `blas/base/scusumkbn` [(#7213)](https://github.com/stdlib-js/stdlib/pull/7213) _(by Shabareesh Shetty)_
-   [`744337a`](https://github.com/stdlib-js/stdlib/commit/744337aaebfd4a9631f17765bce57a38c5374173) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`0723bf6`](https://github.com/stdlib-js/stdlib/commit/0723bf6fcac199cdd9c4b7384adf81be918216af) - **test:** add test cases for `blas/base/dgemv` [(#7124)](https://github.com/stdlib-js/stdlib/pull/7124) _(by Shabareesh Shetty, Athan Reines)_
-   [`9a2b61d`](https://github.com/stdlib-js/stdlib/commit/9a2b61d04186d607367371e9ef345df179516692) - **docs:** update namespace table of contents [(#7187)](https://github.com/stdlib-js/stdlib/pull/7187) _(by stdlib-bot)_
-   [`4b2abf0`](https://github.com/stdlib-js/stdlib/commit/4b2abf00490c06b2627ae5f75968a9a4c005d166) - **docs:** change variable naming for `blas/base/dznrm2` [(#7174)](https://github.com/stdlib-js/stdlib/pull/7174) _(by Shabareesh Shetty, Athan Reines)_
-   [`4514170`](https://github.com/stdlib-js/stdlib/commit/4514170ad8cf99fd55fc30804fd1f1d17e11ed7f) - **docs:** update namespace table of contents [(#7162)](https://github.com/stdlib-js/stdlib/pull/7162) _(by stdlib-bot)_
-   [`d74a508`](https://github.com/stdlib-js/stdlib/commit/d74a5082a8ffcb0a7c1e8be569f5e6f03b34af49) - **feat:** add `csscal` to namespace _(by Athan Reines)_
-   [`5e7c277`](https://github.com/stdlib-js/stdlib/commit/5e7c2775daca2981424380301394025c5893646b) - **feat:** add `blas/base/csscal` [(#6513)](https://github.com/stdlib-js/stdlib/pull/6513) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`842df0c`](https://github.com/stdlib-js/stdlib/commit/842df0c167d3ff3932c7ca8471c5397b4a651c76) - **refactor:** ensure float32 emulation _(by Athan Reines)_
-   [`4d38ce8`](https://github.com/stdlib-js/stdlib/commit/4d38ce8450beef896c74e578fc03478f7e2f4a97) - **test:** update test descriptions _(by Athan Reines)_
-   [`31d29ff`](https://github.com/stdlib-js/stdlib/commit/31d29ffd623c690f040954f73f0be0516de70600) - **test:** update test descriptions _(by Athan Reines)_
-   [`ec426b1`](https://github.com/stdlib-js/stdlib/commit/ec426b1d27b6f530cd9a15dc0f95c319fda38ac7) - **test:** update test descriptions _(by Athan Reines)_
-   [`9b5fac2`](https://github.com/stdlib-js/stdlib/commit/9b5fac23e4e50e389738b2b749e1ec6922146ded) - **test:** update test descriptions _(by Athan Reines)_
-   [`4b21b5d`](https://github.com/stdlib-js/stdlib/commit/4b21b5dab671fd50cb2199f6a94518ebbd73fb3e) - **docs:** change variable naming in `blas/base/zdrot` [(#6879)](https://github.com/stdlib-js/stdlib/pull/6879) _(by Shabareesh Shetty, Athan Reines)_
-   [`ba6ded3`](https://github.com/stdlib-js/stdlib/commit/ba6ded358ecea8ad39d9b34acce83663ac83948f) - **docs:** change variable naming in `blas/base/csrot` [(#6822)](https://github.com/stdlib-js/stdlib/pull/6822) _(by Shabareesh Shetty, Athan Reines)_
-   [`f50db5b`](https://github.com/stdlib-js/stdlib/commit/f50db5b43e51607e188f38bd6fab7d0ad5098110) - **docs:** update namespace table of contents [(#7152)](https://github.com/stdlib-js/stdlib/pull/7152) _(by stdlib-bot)_
-   [`095803e`](https://github.com/stdlib-js/stdlib/commit/095803e670e9095e08daffc079c95af23c7bca98) - **docs:** change variable naming in `blas/base/zscal` [(#6880)](https://github.com/stdlib-js/stdlib/pull/6880) _(by Shabareesh Shetty)_
-   [`6a08789`](https://github.com/stdlib-js/stdlib/commit/6a08789b6476be6b9e88e17242360c83da70a8cf) - **docs:** change variable naming in `blas/base/zcopy` [(#6821)](https://github.com/stdlib-js/stdlib/pull/6821) _(by Shabareesh Shetty)_
-   [`f2f1317`](https://github.com/stdlib-js/stdlib/commit/f2f1317f36f2c931b921eac1a2f40630b588a2dd) - **docs:** change variable naming in `blas/base/ccopy` [(#6820)](https://github.com/stdlib-js/stdlib/pull/6820) _(by Shabareesh Shetty)_
-   [`942294c`](https://github.com/stdlib-js/stdlib/commit/942294c9665952160bd142c8e2e72188a568503e) - **docs:** change variable naming in `blas/base/zaxpy` [(#6815)](https://github.com/stdlib-js/stdlib/pull/6815) _(by Shabareesh Shetty)_
-   [`294bab1`](https://github.com/stdlib-js/stdlib/commit/294bab1d4a1be1c46251730463ed3730af48e5cc) - **docs:** change variable naming in `blas/base/cscal` [(#6881)](https://github.com/stdlib-js/stdlib/pull/6881) _(by Shabareesh Shetty, Athan Reines)_
-   [`8082b9b`](https://github.com/stdlib-js/stdlib/commit/8082b9b709667b420e451dde8ca3684d25ecd73d) - **docs:** change variable naming in `blas/base/caxpy` [(#6796)](https://github.com/stdlib-js/stdlib/pull/6796) _(by Shabareesh Shetty, Athan Reines)_
-   [`b1267d7`](https://github.com/stdlib-js/stdlib/commit/b1267d7dadca632cf07d2d57ffaedb0a087a2a2a) - **test:** add test cases for `blas/base/ssyr2` [(#7133)](https://github.com/stdlib-js/stdlib/pull/7133) _(by Shabareesh Shetty, Athan Reines)_
-   [`d135424`](https://github.com/stdlib-js/stdlib/commit/d135424ecc329f4c64726d2ff57ea9ac511275f6) - **test:** add test cases for `blas/base/dsyr2` [(#7132)](https://github.com/stdlib-js/stdlib/pull/7132) _(by Shabareesh Shetty, Athan Reines)_
-   [`b1a3710`](https://github.com/stdlib-js/stdlib/commit/b1a37102ff35dc3ecd007e2368922460473802d9) - **test:** add test cases for `blas/base/ssyr` [(#7131)](https://github.com/stdlib-js/stdlib/pull/7131) _(by Shabareesh Shetty, Athan Reines)_
-   [`6555228`](https://github.com/stdlib-js/stdlib/commit/65552285402918e100f9562cdef24493fc43550a) - **test:** add test cases for `blas/base/dsyr` [(#7128)](https://github.com/stdlib-js/stdlib/pull/7128) _(by Shabareesh Shetty)_
-   [`0b4a818`](https://github.com/stdlib-js/stdlib/commit/0b4a8186131a6a245fe1d893afae19c0524dbbef) - **fix:** use correct dependencies in `manifest.json` of `blas/base/zscal` [(#7121)](https://github.com/stdlib-js/stdlib/pull/7121) _(by Shabareesh Shetty)_
-   [`aa52ed9`](https://github.com/stdlib-js/stdlib/commit/aa52ed96730b4835b3ef403b2abbcd7910e3e483) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`3d169cb`](https://github.com/stdlib-js/stdlib/commit/3d169cb917480674de265c6212d1f4e96cd4a654) - **test:** add signed zero tests _(by Athan Reines)_
-   [`b0eea3a`](https://github.com/stdlib-js/stdlib/commit/b0eea3afaee1bdd3f14826bc9a92a92e68b51d17) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`151f3e5`](https://github.com/stdlib-js/stdlib/commit/151f3e5714bf1b13e00b72ee0c98fb65ee095ba8) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`9bfb869`](https://github.com/stdlib-js/stdlib/commit/9bfb8691fc945a8e38c592d0e387c84aa31d8585) - **test:** add signed zero tests _(by Athan Reines)_
-   [`f20c234`](https://github.com/stdlib-js/stdlib/commit/f20c234a4112d25281d202e8a0cf9ba223becb4c) - **docs:** update namespace table of contents [(#7092)](https://github.com/stdlib-js/stdlib/pull/7092) _(by stdlib-bot)_
-   [`71cafe3`](https://github.com/stdlib-js/stdlib/commit/71cafe3750d452180ec33524aa0d2fb19322b743) - **fix:** add support for complex64 and complex128 _(by Athan Reines)_
-   [`3014ce9`](https://github.com/stdlib-js/stdlib/commit/3014ce93b3fd6a8d7d26b7951d762f5100faffdf) - **fix:** update return type _(by Athan Reines)_
-   [`2acc7f0`](https://github.com/stdlib-js/stdlib/commit/2acc7f03aa6e89410deb74d99f466cc1cd400384) - **fix:** update return type _(by Athan Reines)_
-   [`a11b832`](https://github.com/stdlib-js/stdlib/commit/a11b832b9c10879eedf7b86dc83772d6abef7931) - **feat:** add `csum` to namespace _(by Athan Reines)_
-   [`28b0465`](https://github.com/stdlib-js/stdlib/commit/28b046502e53a887c1eb70f712b223a60d4c7833) - **feat:** add `blas/ext/base/ndarray/csum` _(by Athan Reines)_
-   [`e30c3ba`](https://github.com/stdlib-js/stdlib/commit/e30c3baa0ea634ee95dfb857b56bc3b8eb57e3f3) - **feat:** add `zsum` to namespace _(by Athan Reines)_
-   [`d1c43bf`](https://github.com/stdlib-js/stdlib/commit/d1c43bf928d136b64bce740e38fae1e23d482c23) - **feat:** add `blas/ext/base/ndarray/zsum` _(by Athan Reines)_
-   [`22f1408`](https://github.com/stdlib-js/stdlib/commit/22f140863e59a9e1a2f89a6912a0c520a7fc7956) - **feat:** add `csum` to namespace _(by Athan Reines)_
-   [`10ccb4a`](https://github.com/stdlib-js/stdlib/commit/10ccb4a44321d0caf5602042c78b49232de2b1dc) - **feat:** add `blas/ext/base/csum` _(by Athan Reines)_
-   [`84af975`](https://github.com/stdlib-js/stdlib/commit/84af975367b6d0694ffbd0a27b7da0a0c144b4fb) - **chore:** clean-up _(by Athan Reines)_
-   [`4f9ada3`](https://github.com/stdlib-js/stdlib/commit/4f9ada3914fe2a20811614089c1d2ce8bc6a15f0) - **feat:** add `csumkbn` to namespace _(by Athan Reines)_
-   [`c682e65`](https://github.com/stdlib-js/stdlib/commit/c682e653f19695066709857256c8c50cfbb24ac0) - **feat:** add `blas/ext/base/csumkbn` _(by Athan Reines)_
-   [`ef876c4`](https://github.com/stdlib-js/stdlib/commit/ef876c4aa3c97ce2fb042a0d48c852a448775fad) - **feat:** add `zsum` to namespace _(by Athan Reines)_
-   [`c76305e`](https://github.com/stdlib-js/stdlib/commit/c76305ee9931b510e2aec54ec1da3997845d40f4) - **feat:** add `blas/ext/base/zsum` _(by Athan Reines)_
-   [`12b992e`](https://github.com/stdlib-js/stdlib/commit/12b992eca7ac911aa20fe41aa4fffc9dec128c9d) - **test:** address failing test cases _(by Athan Reines)_
-   [`b729264`](https://github.com/stdlib-js/stdlib/commit/b729264841b1af47c4831a8b38ebe51882017381) - **bench:** fix package path _(by Athan Reines)_
-   [`15922b7`](https://github.com/stdlib-js/stdlib/commit/15922b7bcaaaa3eb81bc6fec90898f0bd52e66fc) - **fix:** address indexing bug _(by Athan Reines)_
-   [`c917f58`](https://github.com/stdlib-js/stdlib/commit/c917f586cbdc1ba098e933bb731ab3ad536eefe4) - **test:** address failing test case _(by Athan Reines)_
-   [`549f1c1`](https://github.com/stdlib-js/stdlib/commit/549f1c1889b0d324eab00a142121ef26ed080592) - **fix:** address indexing bug _(by Athan Reines)_
-   [`981c7ba`](https://github.com/stdlib-js/stdlib/commit/981c7baecfe6ab8ab4d973e95cd20453f90c5e28) - **fix:** add missing checks for `N` and address failing tests stemming from refactoring _(by Athan Reines)_
-   [`e030bba`](https://github.com/stdlib-js/stdlib/commit/e030bba632158023584c3e28c080fdf289d15014) - **feat:** add `gnannsumpw` to namespace _(by Athan Reines)_
-   [`4c5e486`](https://github.com/stdlib-js/stdlib/commit/4c5e4866ffc225fb1468ef98d156b984748a3cb1) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`95641f7`](https://github.com/stdlib-js/stdlib/commit/95641f75c1764479af76b23eac8a90101ee12f8d) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`e20b7f5`](https://github.com/stdlib-js/stdlib/commit/e20b7f533ddf8cbc27f142011a8ed65d3229e380) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`da339ee`](https://github.com/stdlib-js/stdlib/commit/da339ee8d7e24972cbf4a1592b9174ef617978f8) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`3e9f3a0`](https://github.com/stdlib-js/stdlib/commit/3e9f3a0bdc4c231521f39148dbff889815bae6d7) - **docs:** fix missing period _(by Athan Reines)_
-   [`cbd656d`](https://github.com/stdlib-js/stdlib/commit/cbd656db90d14e150baa2a23deb44cb645ef2298) - **feat:** add `blas/ext/base/gnannsumpw` _(by Athan Reines)_
-   [`67273e4`](https://github.com/stdlib-js/stdlib/commit/67273e4e5ff3e77af9db4da0cfc45c0aaeceb8d8) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`d7715a6`](https://github.com/stdlib-js/stdlib/commit/d7715a6d82eeb4c8baa4e7be5539b63ffc415eb0) - **docs:** update descriptions _(by Athan Reines)_
-   [`27bf735`](https://github.com/stdlib-js/stdlib/commit/27bf7353ae89319e929836dbbd49881b340a88b0) - **docs:** fix missing period _(by Athan Reines)_
-   [`09daf3d`](https://github.com/stdlib-js/stdlib/commit/09daf3ddceed2358405a5a3a553b295a1de71daa) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`4f0b1ca`](https://github.com/stdlib-js/stdlib/commit/4f0b1cadad99e48ee09dfd047b858e0856fed91a) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`8976032`](https://github.com/stdlib-js/stdlib/commit/897603210f2f6d965857ee4495014cb92b76b7c9) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`db705bb`](https://github.com/stdlib-js/stdlib/commit/db705bbd83a1c00fa758c18cd461ae6b6bdcbc94) - **bench:** fix array lengths _(by Athan Reines)_
-   [`35a1a06`](https://github.com/stdlib-js/stdlib/commit/35a1a0662a066d9c6fd5f87e5925b5c0852b7193) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`c7725bd`](https://github.com/stdlib-js/stdlib/commit/c7725bd2c3aeb2ad5844fbe4fa0ac7f0ac88d133) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`08611d0`](https://github.com/stdlib-js/stdlib/commit/08611d0e7ecf48ae7804081f0f5134309974313b) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`52b14da`](https://github.com/stdlib-js/stdlib/commit/52b14da1c02459b2c77949aa11adeb683a217b83) - **refactor:** use alias to reduce visual noise _(by Athan Reines)_
-   [`950141e`](https://github.com/stdlib-js/stdlib/commit/950141ee601eec31ba21d377133fe8b80c153f55) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`38a7900`](https://github.com/stdlib-js/stdlib/commit/38a7900a08f364a782e3cc6d0f712dba101983d7) - **fix:** use correct return value _(by Athan Reines)_
-   [`bf4258f`](https://github.com/stdlib-js/stdlib/commit/bf4258f3cff7b37d00386b15df156305553631ab) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`149aa3c`](https://github.com/stdlib-js/stdlib/commit/149aa3c8f30ac20953aca48e5497d82747d29008) - **fix:** use correct return value _(by Athan Reines)_
-   [`3612259`](https://github.com/stdlib-js/stdlib/commit/3612259d5a0558d6906748993d061f501bfcdd7a) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`bb16002`](https://github.com/stdlib-js/stdlib/commit/bb16002f4d99f329f2811799997f169a45bef61b) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`205bebc`](https://github.com/stdlib-js/stdlib/commit/205bebc114efdc0a11ef685d29a220603c436165) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`7be4df1`](https://github.com/stdlib-js/stdlib/commit/7be4df1ff62f12c957c91f1fd65f45cd800d5802) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`c72df11`](https://github.com/stdlib-js/stdlib/commit/c72df11dfc1aaa4ddea893f9f0bb41b3fd53554d) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`28855c3`](https://github.com/stdlib-js/stdlib/commit/28855c372581a6a7f175f5be6ce1c55a865b807a) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`7552a5f`](https://github.com/stdlib-js/stdlib/commit/7552a5ff3185a212d94145c41f8da66644c4943f) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`432b26d`](https://github.com/stdlib-js/stdlib/commit/432b26dbda2336b72babe8236c77fab0e066012c) - **fix:** address pointer increment bug _(by Athan Reines)_
-   [`25288d7`](https://github.com/stdlib-js/stdlib/commit/25288d7f869b2d13139e742e88601419463423fd) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`5380990`](https://github.com/stdlib-js/stdlib/commit/5380990520a26ad9ba8068416238b93c4ce524f5) - **test:** add signed zero tests _(by Athan Reines)_
-   [`4438919`](https://github.com/stdlib-js/stdlib/commit/443891959e78aeeb0df7bc37351784275eb52c46) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`bcd9ff7`](https://github.com/stdlib-js/stdlib/commit/bcd9ff7c608125780e14268a7abe557957e69f08) - **test:** use single-precision utility _(by Athan Reines)_
-   [`2306a2d`](https://github.com/stdlib-js/stdlib/commit/2306a2d56aea3e62a783c6b2adcf837d06ac3abc) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`1bbd885`](https://github.com/stdlib-js/stdlib/commit/1bbd885b09162dac5d8989b79541c528e3827757) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`67a91d6`](https://github.com/stdlib-js/stdlib/commit/67a91d69cc62d8c76cf2a654eb8e2f28bd408b9f) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`3d59edd`](https://github.com/stdlib-js/stdlib/commit/3d59edde188e1359a12d967e6b77feeba4ccb6e4) - **fix:** preserve sign of zero _(by Athan Reines)_
-   [`0ad60b9`](https://github.com/stdlib-js/stdlib/commit/0ad60b9fd690c9ca94650a9252cc23c51808d036) - **test:** add signed zero tests _(by Athan Reines)_
-   [`81c8221`](https://github.com/stdlib-js/stdlib/commit/81c8221abcaf41ef614344d9c4bd3f287ed443d0) - **test:** add signed zero tests _(by Athan Reines)_
-   [`f47e96c`](https://github.com/stdlib-js/stdlib/commit/f47e96cebf8b44bc5f2fe353d4f85550ceb0c65d) - **test:** add signed zero tests _(by Athan Reines)_
-   [`20fa8c1`](https://github.com/stdlib-js/stdlib/commit/20fa8c148eb4e0a690b77554b07c23fa8b586a91) - **test:** add signed zero tests _(by Athan Reines)_
-   [`d3451ce`](https://github.com/stdlib-js/stdlib/commit/d3451ceb42a0109140785d3928ab1242450cc61a) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`0c7c973`](https://github.com/stdlib-js/stdlib/commit/0c7c973f23160582ef1c7b5f7295fe9b6e32e8d7) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`00d8714`](https://github.com/stdlib-js/stdlib/commit/00d87144e980744517f6fa456aef512e3940c4fd) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`6ef5cc8`](https://github.com/stdlib-js/stdlib/commit/6ef5cc89460281ddffad651eb0df39166aae9a31) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`7324255`](https://github.com/stdlib-js/stdlib/commit/7324255304f2fdb5afddd9166579122fcdc2aa2a) - **feat:** add `zsumkbn` to namespace _(by Athan Reines)_
-   [`6b320d7`](https://github.com/stdlib-js/stdlib/commit/6b320d701480d7467d131f161f87b38d2849f5e8) - **feat:** add `blas/ext/base/zsumkbn` _(by Athan Reines)_
-   [`6b7978b`](https://github.com/stdlib-js/stdlib/commit/6b7978b078df5869de9f2b27c8df9c34cd7b9fd0) - **test:** add signed zero tests _(by Athan Reines)_
-   [`5c85e5e`](https://github.com/stdlib-js/stdlib/commit/5c85e5ec1dcc6f2f26d7b2d0ababcdeb7e57c2ac) - **test:** add signed zero tests _(by Athan Reines)_
-   [`22c39d6`](https://github.com/stdlib-js/stdlib/commit/22c39d621ee3e28db8f1387f205d12f7317f136f) - **test:** add signed zero tests _(by Athan Reines)_
-   [`b6754fa`](https://github.com/stdlib-js/stdlib/commit/b6754fa04cce6d974386b81683be808322904557) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`f0aaeee`](https://github.com/stdlib-js/stdlib/commit/f0aaeeec537419e4d65f3c80750e5076465a2614) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`65d7e76`](https://github.com/stdlib-js/stdlib/commit/65d7e76a73d9721698d311957f2a9b2bf77ac21f) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`584cf93`](https://github.com/stdlib-js/stdlib/commit/584cf93ae0898fa3d94f25bb6107263467cd9191) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`00842b8`](https://github.com/stdlib-js/stdlib/commit/00842b8c167ceba4518240abdf87fa36a9d50b2c) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`41c82f8`](https://github.com/stdlib-js/stdlib/commit/41c82f8d6cb191003037fa8b382cf8a7f7576471) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`6c80ac5`](https://github.com/stdlib-js/stdlib/commit/6c80ac501ff89676cc4c20ec49a017c5b9cbd12f) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`e7f9e5b`](https://github.com/stdlib-js/stdlib/commit/e7f9e5b8f6d0dcb71bb5f6348e982dbf5155a3d4) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`a6b6ace`](https://github.com/stdlib-js/stdlib/commit/a6b6aceb39764d119d56cc4fee317a5f4022dcf8) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`e6146a8`](https://github.com/stdlib-js/stdlib/commit/e6146a875edac8462f8fbc385fac4eff4a63196f) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`488c45a`](https://github.com/stdlib-js/stdlib/commit/488c45afdb40e79c209ad6c59f1acfc5b731f69c) - **test:** add signed zero tests _(by Athan Reines)_
-   [`c3a0bf7`](https://github.com/stdlib-js/stdlib/commit/c3a0bf728593d5f8d73c54065083594f867db098) - **test:** add signed zero tests _(by Athan Reines)_
-   [`23a0064`](https://github.com/stdlib-js/stdlib/commit/23a0064407117899f351404fc9e136c98d8340d2) - **test:** add signed zero tests _(by Athan Reines)_
-   [`78a7aa3`](https://github.com/stdlib-js/stdlib/commit/78a7aa3deea6a0101776c4bdd902fdab949f5bfa) - **test:** add signed zero tests _(by Athan Reines)_
-   [`b53f15b`](https://github.com/stdlib-js/stdlib/commit/b53f15b1bd89e48e30ca1ccbb4438b1bdb04a465) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`6e2c12f`](https://github.com/stdlib-js/stdlib/commit/6e2c12fe3e14fe3475b847590f1db9bcdcb94f01) - **test:** add signed zero tests _(by Athan Reines)_
-   [`d06fac1`](https://github.com/stdlib-js/stdlib/commit/d06fac10a847c53625d891e07e003fb06a0ac27f) - **test:** add signed zero tests _(by Athan Reines)_
-   [`8aa525e`](https://github.com/stdlib-js/stdlib/commit/8aa525e5406e77700b720b0df723dd4903d54984) - **refactor:** simpilfy implementation _(by Athan Reines)_
-   [`d867410`](https://github.com/stdlib-js/stdlib/commit/d8674107448b38025095f40d288464a1bea3c349) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`80a204d`](https://github.com/stdlib-js/stdlib/commit/80a204de6b9f5352e5d3f56856c9e631fac3c2f5) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`1ed8400`](https://github.com/stdlib-js/stdlib/commit/1ed8400db79e87f245a7ad7d80d942e420b82e60) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`3723b66`](https://github.com/stdlib-js/stdlib/commit/3723b660d122770a9b4862695fd5c02eb5da352b) - **chore:** fix EditorConfig lint errors [(#7001)](https://github.com/stdlib-js/stdlib/pull/7001) _(by Lalit Narayan Yadav)_
-   [`576b85b`](https://github.com/stdlib-js/stdlib/commit/576b85bb15cbf83346f8f100e48acf573ac1fcfe) - **chore:** fix C lint errors [(#7033)](https://github.com/stdlib-js/stdlib/pull/7033) _(by Uday Kakade)_
-   [`a75bd09`](https://github.com/stdlib-js/stdlib/commit/a75bd09ef2db7eb2761ebc1e776ebcfa123d7493) - **chore:** fix EditorConfig lint errors [(#7029)](https://github.com/stdlib-js/stdlib/pull/7029) _(by zhanggy)_
-   [`f750524`](https://github.com/stdlib-js/stdlib/commit/f75052497fb09596b3708ecaafa31948b0c499f0) - **feat:** add `blas/ext/base/dnancusumkbn` [(#5822)](https://github.com/stdlib-js/stdlib/pull/5822) _(by Vivek Maurya, Athan Reines, stdlib-bot)_
-   [`47043f4`](https://github.com/stdlib-js/stdlib/commit/47043f4dd5b22794abc28364824a19e1712a8dc7) - **feat:** add `blas/ext/base/wasm/dapx` [(#5643)](https://github.com/stdlib-js/stdlib/pull/5643) _(by Prashant Kumar Yadav, Athan Reines, stdlib-bot)_
-   [`44d408f`](https://github.com/stdlib-js/stdlib/commit/44d408f29e90ec7932cd46644f990c66c13b8bdb) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`cc34e03`](https://github.com/stdlib-js/stdlib/commit/cc34e0328c78ed7016921e7be6429221ce77c308) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`4c297d2`](https://github.com/stdlib-js/stdlib/commit/4c297d2fc5c4a88aa52bc3caa4b8e1f521b12f61) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`fc9c88f`](https://github.com/stdlib-js/stdlib/commit/fc9c88ff41a53e19630356e768ed4cbb1a0b7ae2) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`a776cc4`](https://github.com/stdlib-js/stdlib/commit/a776cc41c4226be534fbbfe732a9b086e97dd761) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`b67d4da`](https://github.com/stdlib-js/stdlib/commit/b67d4dac3483903ba9841a9928a0c426635df639) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`822db7a`](https://github.com/stdlib-js/stdlib/commit/822db7aaf5701519a8e4acbfdd37cccd21c14e4a) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`7fa5636`](https://github.com/stdlib-js/stdlib/commit/7fa5636178573b29101c6e9446df3b22b715690a) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`c2aba8f`](https://github.com/stdlib-js/stdlib/commit/c2aba8fce7f351b4a6f82072f26b9dcc47e94798) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`46c8d4e`](https://github.com/stdlib-js/stdlib/commit/46c8d4e6f632a8fb7942c1661e5a4e5d75d59c60) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`73df28f`](https://github.com/stdlib-js/stdlib/commit/73df28f560c71e48e82d17375dc5ef3c8364b769) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`62f4456`](https://github.com/stdlib-js/stdlib/commit/62f44566136dc483daf350847f016c63c714b530) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`dfa9446`](https://github.com/stdlib-js/stdlib/commit/dfa944638baf665a4f16321a88ffd5091b2b14fb) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`57d1395`](https://github.com/stdlib-js/stdlib/commit/57d1395e198e37c8cad32925889ba763f8ad7bd7) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`ed487e8`](https://github.com/stdlib-js/stdlib/commit/ed487e8db5c2d97407b3011aeb4acbf292c034f1) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`71fcdf5`](https://github.com/stdlib-js/stdlib/commit/71fcdf5cead762267457905a25443c287cdbaea6) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`b638337`](https://github.com/stdlib-js/stdlib/commit/b6383374787db53707fcd6c6722aec0af6cc62d5) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`cf0a752`](https://github.com/stdlib-js/stdlib/commit/cf0a7526f5cf517387cc8fccce569c3e7d3508e0) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`e0ef8c0`](https://github.com/stdlib-js/stdlib/commit/e0ef8c087391aed873416ff772da92ef34eabee8) - **docs:** update examples _(by Athan Reines)_
-   [`eece266`](https://github.com/stdlib-js/stdlib/commit/eece266922d61be79ec4a518122770d6e5a45c35) - **docs:** update examples _(by Athan Reines)_
-   [`6c79b2f`](https://github.com/stdlib-js/stdlib/commit/6c79b2f8296fbc8ac2de470e6ff7ae446102c60f) - **docs:** update note _(by Athan Reines)_
-   [`74fd8e4`](https://github.com/stdlib-js/stdlib/commit/74fd8e4917e02ca9186c9da4cfd676321ba7998f) - **docs:** update note _(by Athan Reines)_
-   [`475dc22`](https://github.com/stdlib-js/stdlib/commit/475dc227d741fcb816fc101523cc94975230e2d9) - **docs:** update note _(by Athan Reines)_
-   [`0105776`](https://github.com/stdlib-js/stdlib/commit/0105776252892d8bb6b2e26e1a7900aa12174393) - **docs:** update note _(by Athan Reines)_
-   [`20cb136`](https://github.com/stdlib-js/stdlib/commit/20cb1367a6e088ab29a0018a15f2e06b802e77c5) - **fix:** restrict set of allowed data types _(by Athan Reines)_
-   [`8259ed5`](https://github.com/stdlib-js/stdlib/commit/8259ed5b9d1f003567f1534962163799c6254c88) - **fix:** restrict set of allowed data types _(by Athan Reines)_
-   [`cd6132a`](https://github.com/stdlib-js/stdlib/commit/cd6132a767338fc1726bf333c7a65ace1c37edde) - **fix:** update package name _(by Athan Reines)_
-   [`fbb364e`](https://github.com/stdlib-js/stdlib/commit/fbb364ea4aac82c08e986f6dfe78825af7cd6cfa) - **build:** update configuration _(by Athan Reines)_
-   [`fdd8f3a`](https://github.com/stdlib-js/stdlib/commit/fdd8f3a3d04fb0aaca79cccf33707eeb43e1f97c) - **docs:** update examples for `blas/base/wasm/cswap` [(#5766)](https://github.com/stdlib-js/stdlib/pull/5766) _(by Gururaj Gurram, Athan Reines)_
-   [`8f6c511`](https://github.com/stdlib-js/stdlib/commit/8f6c511ee70428b4b262fe29547f6d25f2e7d3bd) - **docs:** remove trailing semicolons _(by Athan Reines)_
-   [`09ffc2c`](https://github.com/stdlib-js/stdlib/commit/09ffc2c08be90669defcaaa19a50b53a6d7473f8) - **feat:** add `stats/strided/wasm/dmeanors` [(#5832)](https://github.com/stdlib-js/stdlib/pull/5832) _(by Prashant Kumar Yadav, Athan Reines, stdlib-bot)_
-   [`bd0050a`](https://github.com/stdlib-js/stdlib/commit/bd0050a6aaec1ca4cdc1a4491f45084da84f5bf7) - **feat:** add `blas/ext/base/wasm/dnanasumors` [(#6110)](https://github.com/stdlib-js/stdlib/pull/6110) _(by Prashant Kumar Yadav, Athan Reines, stdlib-bot)_
-   [`5731206`](https://github.com/stdlib-js/stdlib/commit/5731206687fc0584469a369adb69dd44b26277ed) - **feat:** add `blas/ext/base/wasm/sapxsumkbn` [(#5764)](https://github.com/stdlib-js/stdlib/pull/5764) _(by Gururaj Gurram, Athan Reines)_
-   [`6570841`](https://github.com/stdlib-js/stdlib/commit/65708419e4449c1cc7628ef2b22739383c40a24e) - **feat:** add `blas/base/wasm/sdsdot` [(#6768)](https://github.com/stdlib-js/stdlib/pull/6768) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`a70718c`](https://github.com/stdlib-js/stdlib/commit/a70718ca8db6cd301910b76200a2a1496951dbc7) - **docs:** update examples for `blas/base/wasm/cswap` [(#6846)](https://github.com/stdlib-js/stdlib/pull/6846) _(by Shabareesh Shetty)_
-   [`6464a4b`](https://github.com/stdlib-js/stdlib/commit/6464a4ba00ba9579a2da77a0e2282a0f03bfdc01) - **docs:** update namespace table of contents [(#6828)](https://github.com/stdlib-js/stdlib/pull/6828) _(by stdlib-bot)_
-   [`5bf5fef`](https://github.com/stdlib-js/stdlib/commit/5bf5fef7f910bc7ca08b3689daed5160f674fa8e) - **feat:** add `cusum` to namespace _(by Athan Reines)_
-   [`0024458`](https://github.com/stdlib-js/stdlib/commit/002445886a8f8e74dbbdabeff31ab45cece00096) - **feat:** add `blas/ext/cusum` _(by Athan Reines)_
-   [`eb8260d`](https://github.com/stdlib-js/stdlib/commit/eb8260d1a9960852789d77150a8a51ac582c8a7d) - **docs:** update note _(by Athan Reines)_
-   [`e41167e`](https://github.com/stdlib-js/stdlib/commit/e41167e33fe84e229aa03e1a8ca6de6f7e6f39e7) - **refactor:** update casting policy _(by Athan Reines)_
-   [`de5763c`](https://github.com/stdlib-js/stdlib/commit/de5763c0ae79e809d74237f084b066411be59f0d) - **fix:** replace policy string with policy object _(by Athan Reines)_
-   [`b9d5fc2`](https://github.com/stdlib-js/stdlib/commit/b9d5fc27dcdc1d57f94f63be1d05276c63025c14) - **docs:** update namespace table of contents [(#6819)](https://github.com/stdlib-js/stdlib/pull/6819) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9f85b5d`](https://github.com/stdlib-js/stdlib/commit/9f85b5d90cb6fcaf052116cd06aa4a693757f0ec) - **test:** fix description _(by Philipp Burckhardt)_
-   [`05e83e1`](https://github.com/stdlib-js/stdlib/commit/05e83e1582cfeef43b39227e4a5c891f9934d1c0) - **fix:** resolve typo in include guard _(by Philipp Burckhardt)_
-   [`366925e`](https://github.com/stdlib-js/stdlib/commit/366925e14f08852288d1422041d5613c1aaddb28) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`15a7123`](https://github.com/stdlib-js/stdlib/commit/15a712368f65c35d45ee6ae2e8f573a0304fac5c) - **docs:** document exceptions in `blas/base/strsv` [(#6744)](https://github.com/stdlib-js/stdlib/pull/6744) _(by Shabareesh Shetty)_
-   [`ee26dcf`](https://github.com/stdlib-js/stdlib/commit/ee26dcf73ee8b2265231fc8b960e20d564869198) - **docs:** document exceptions in `blas/base/dtrsv` [(#6743)](https://github.com/stdlib-js/stdlib/pull/6743) _(by Shabareesh Shetty)_
-   [`8a48ebe`](https://github.com/stdlib-js/stdlib/commit/8a48ebe8c17721be56ba39a16bce3b13441fdc57) - **test:** add test cases for `blas/base/strmv` [(#6732)](https://github.com/stdlib-js/stdlib/pull/6732) _(by Shabareesh Shetty)_
-   [`9d961d3`](https://github.com/stdlib-js/stdlib/commit/9d961d3dbc8299eaa1f3fe0a5bf7c471c2907c43) - **test:** add test cases for `blas/base/dtrmv` [(#6733)](https://github.com/stdlib-js/stdlib/pull/6733) _(by Shabareesh Shetty)_
-   [`0c0e21d`](https://github.com/stdlib-js/stdlib/commit/0c0e21db7e88a8859b7db0bea76f89bbb9d1ca91) - **refactor:** avoid returning void expression _(by Athan Reines)_
-   [`4e8417c`](https://github.com/stdlib-js/stdlib/commit/4e8417ce4fc30b5ef604a588a52042d7423b9fc1) - **bench:** fix Makefile and move to subfolder _(by Athan Reines)_
-   [`d99e066`](https://github.com/stdlib-js/stdlib/commit/d99e06680eed2c42d9761dd4dfe47817a651bd92) - **bench:** fix Makefile and move to subfolder _(by Athan Reines)_
-   [`fd5533d`](https://github.com/stdlib-js/stdlib/commit/fd5533da37b425b752f061378bff51fbe8695c56) - **feat:** add `sum` to namespace _(by Athan Reines)_
-   [`8844c7b`](https://github.com/stdlib-js/stdlib/commit/8844c7b41c82acfa59305a97a26ffd6caa4ea06d) - **feat:** add `blas/ext/sum` _(by Athan Reines)_
-   [`0dd7923`](https://github.com/stdlib-js/stdlib/commit/0dd7923fb188e73cb3d60f54fb97195e4cf15ea9) - **feat:** add `gcusum` to namespace _(by Athan Reines)_
-   [`fb346ab`](https://github.com/stdlib-js/stdlib/commit/fb346abc3e0cced9b159bcf2d518d43cac185884) - **feat:** add `blas/ext/base/ndarray/gcusum` _(by Athan Reines)_
-   [`1741923`](https://github.com/stdlib-js/stdlib/commit/174192300a3db8664030bb40aeffa3670b3ae882) - **feat:** add `scusum` to namespace _(by Athan Reines)_
-   [`53c2fb7`](https://github.com/stdlib-js/stdlib/commit/53c2fb7060c4b448beca4b97af60c5dcf520ddd9) - **feat:** add `blas/ext/base/ndarray/scusum` _(by Athan Reines)_
-   [`8fda22b`](https://github.com/stdlib-js/stdlib/commit/8fda22bdb1f9df8cf7564b0e36c660037234f738) - **docs:** fix descriptions _(by Athan Reines)_
-   [`2fbc157`](https://github.com/stdlib-js/stdlib/commit/2fbc1578542e92814c457251d0206b51d67bd62f) - **feat:** add `dcusum` to namespace _(by Athan Reines)_
-   [`76d6a22`](https://github.com/stdlib-js/stdlib/commit/76d6a22937ba4198bba07ec6acb095277c781464) - **feat:** add `blas/ext/base/ndarray/dcusum` _(by Athan Reines)_
-   [`a996667`](https://github.com/stdlib-js/stdlib/commit/a9966678dedd564a74999f2c4c5bd47c9a2b0c64) - **fix:** propagate sign to the accumulated sum _(by Athan Reines)_
-   [`ee80204`](https://github.com/stdlib-js/stdlib/commit/ee80204dfe9c9a6409ebd7873354371bbdbac32e) - **fix:** propagate sign to the accumulated sum _(by Athan Reines)_
-   [`499ac6a`](https://github.com/stdlib-js/stdlib/commit/499ac6abb988bb6e28cd350976d5fee2fd77cf90) - **fix:** propagate sign to the accumulated sum _(by Athan Reines)_
-   [`9cb8df6`](https://github.com/stdlib-js/stdlib/commit/9cb8df6d6c62cb49e58261cd67a44db8b7872087) - **test:** fix missing `opts` argument _(by Athan Reines)_
-   [`3c7589f`](https://github.com/stdlib-js/stdlib/commit/3c7589f373808eba7378584076207250ec04a344) - **test:** add zeros tests _(by Athan Reines)_
-   [`9d2a4bc`](https://github.com/stdlib-js/stdlib/commit/9d2a4bc15987ad3a45b8f9b778fba9356b1a6043) - **test:** add zeros tests _(by Athan Reines)_
-   [`2c27a58`](https://github.com/stdlib-js/stdlib/commit/2c27a5806960dad88da5212d768034de3779b3fa) - **test:** add zeros tests _(by Athan Reines)_
-   [`b5fe718`](https://github.com/stdlib-js/stdlib/commit/b5fe71883c1c00246f21643e72bb30d14cead437) - **test:** add zeros tests _(by Athan Reines)_
-   [`9b15f0d`](https://github.com/stdlib-js/stdlib/commit/9b15f0ddca1266c21cca68caa9c04043eac9807d) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`b8e6c48`](https://github.com/stdlib-js/stdlib/commit/b8e6c48ca4127def37ab803eafdbdb2180bc90bb) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`b415a2c`](https://github.com/stdlib-js/stdlib/commit/b415a2ccc60bdb573aee459ffde809ec017df1c2) - **test:** add zeros tests _(by Athan Reines)_
-   [`c376ed9`](https://github.com/stdlib-js/stdlib/commit/c376ed9ecd7e1a73a2a8fd1de15134179779ccb8) - **test:** add zeros tests _(by Athan Reines)_
-   [`71be45f`](https://github.com/stdlib-js/stdlib/commit/71be45f47dd783ce955d982425c7dbae5f6c09a5) - **test:** add zeros tests _(by Athan Reines)_
-   [`be45258`](https://github.com/stdlib-js/stdlib/commit/be45258cb4b35783be2c8df04d81eafdd9c1c1ac) - **test:** add zeros tests _(by Athan Reines)_
-   [`4835ebd`](https://github.com/stdlib-js/stdlib/commit/4835ebdcb112d8e6ca9d6ac9584e1e14e2e861c6) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`4a04acc`](https://github.com/stdlib-js/stdlib/commit/4a04accd853a02a8b881c900fab0c4f47d46865d) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`1a5f29d`](https://github.com/stdlib-js/stdlib/commit/1a5f29d7d9e481f34854dcbf00339d9ab8e85057) - **test:** add zeros tests _(by Athan Reines)_
-   [`5d0823a`](https://github.com/stdlib-js/stdlib/commit/5d0823aa846bd681e9b4ce675521be1af39e5554) - **test:** add zeros tests _(by Athan Reines)_
-   [`81aeefe`](https://github.com/stdlib-js/stdlib/commit/81aeefed3885d8b238875a1d656401b7d3149d10) - **test:** add zeros tests _(by Athan Reines)_
-   [`446ce07`](https://github.com/stdlib-js/stdlib/commit/446ce073c82847d889c7b2e43e0ce3010a0767f9) - **test:** add zeros tests _(by Athan Reines)_
-   [`cb8907d`](https://github.com/stdlib-js/stdlib/commit/cb8907dbdb8e4670c3519555e8abc2ddddbf1d77) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`8355a12`](https://github.com/stdlib-js/stdlib/commit/8355a12db3136d06875016a248eb6f8410672bd2) - **fix:** preserve the sign of zero _(by Athan Reines)_
-   [`9284bd7`](https://github.com/stdlib-js/stdlib/commit/9284bd7fc74b1aea7556be0d1c98196a3eff2649) - **feat:** add `cfill` and `zfill` to namespace _(by Athan Reines)_
-   [`b86b7d5`](https://github.com/stdlib-js/stdlib/commit/b86b7d5988cd3f2a083355b6a91a748dca9e509b) - **feat:** add `ndarray` to namespace _(by Athan Reines)_
-   [`e5b3cfd`](https://github.com/stdlib-js/stdlib/commit/e5b3cfdc9a4dab44eacc47cf4e911e417ec0c8ce) - **feat:** add `blas/ext/base/ndarray` namespace _(by Athan Reines)_
-   [`6fe1a39`](https://github.com/stdlib-js/stdlib/commit/6fe1a3926c7d1336c4243e43453465f9062adb22) - **feat:** add `blas/ext/base/ndarray/gsum` _(by Athan Reines)_
-   [`11e8887`](https://github.com/stdlib-js/stdlib/commit/11e8887b165ddca1755aa5e8d3f91d8c1945142e) - **feat:** add `blas/ext/base/ndarray/ssum` _(by Athan Reines)_
-   [`23c60da`](https://github.com/stdlib-js/stdlib/commit/23c60daf037b609ab1315f45448e0ba52a89c247) - **docs:** remove spaces before periods _(by Philipp Burckhardt)_
-   [`69cda50`](https://github.com/stdlib-js/stdlib/commit/69cda50da9866bf95098683d1314f0abdfa1f6bd) - **feat:** add `blas/ext/base/ndarray/dsum` _(by Athan Reines)_
-   [`5f73301`](https://github.com/stdlib-js/stdlib/commit/5f73301a8509cc423a06b02140c4e316fd02ff49) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`074055b`](https://github.com/stdlib-js/stdlib/commit/074055b3bd0bb5982abef3cc69b4cab5f2c3942a) - **docs:** remove unused import in various examples in `blas/base/wasm` [(#6782)](https://github.com/stdlib-js/stdlib/pull/6782) _(by Shabareesh Shetty)_
-   [`330e1e6`](https://github.com/stdlib-js/stdlib/commit/330e1e6e30ce3e503ce15cc5897ec6aab5890a69) - **docs:** document exceptions in `blas/base/dgemm` [(#6745)](https://github.com/stdlib-js/stdlib/pull/6745) _(by Shabareesh Shetty)_
-   [`9b76065`](https://github.com/stdlib-js/stdlib/commit/9b76065b017415494be482c0a085afda2e526a77) - **test:** add test cases for `blas/base/dsyr` [(#6729)](https://github.com/stdlib-js/stdlib/pull/6729) _(by Shabareesh Shetty)_
-   [`b25755a`](https://github.com/stdlib-js/stdlib/commit/b25755aec061fdb02888f6e1cb400cec6aae8293) - **test:** add test cases for `blas/base/dsyr2` [(#6731)](https://github.com/stdlib-js/stdlib/pull/6731) _(by Shabareesh Shetty)_
-   [`899dd17`](https://github.com/stdlib-js/stdlib/commit/899dd17a577e2158b040bb7d9464fb8a79e38d59) - **docs:** document exceptions in `blas/base/sgemm` [(#6746)](https://github.com/stdlib-js/stdlib/pull/6746) _(by Shabareesh Shetty)_
-   [`4bf2683`](https://github.com/stdlib-js/stdlib/commit/4bf26831b85d4bd29ac6365a908302f792711d54) - **test:** add test cases for `blas/base/ssyr2` [(#6730)](https://github.com/stdlib-js/stdlib/pull/6730) _(by Shabareesh Shetty)_
-   [`dae553b`](https://github.com/stdlib-js/stdlib/commit/dae553bfe3c1f0d651b07eda1b36e87a516df7ef) - **feat:** add `blas/base/wasm/dsdot` [(#6751)](https://github.com/stdlib-js/stdlib/pull/6751) _(by Shabareesh Shetty, stdlib-bot)_
-   [`bf46e99`](https://github.com/stdlib-js/stdlib/commit/bf46e995c93ababb1eb49a635f1616697471b70a) - **style:** remove unused import [(#6781)](https://github.com/stdlib-js/stdlib/pull/6781) _(by Shabareesh Shetty)_
-   [`43bfc6b`](https://github.com/stdlib-js/stdlib/commit/43bfc6bc1d850367f3957fdb550c40d25c6f0e62) - **fix:** include value in error message _(by Athan Reines)_
-   [`3b4fa18`](https://github.com/stdlib-js/stdlib/commit/3b4fa18ec5573c25c66e17441092bcbe4c63fe9f) - **fix:** include value in error message _(by Athan Reines)_
-   [`11547d9`](https://github.com/stdlib-js/stdlib/commit/11547d91e2263d65cd490822acb17bd82f3bc4da) - **test:** add test cases for `blas/base/ssyr` [(#6727)](https://github.com/stdlib-js/stdlib/pull/6727) _(by Shabareesh Shetty)_
-   [`b6e0aca`](https://github.com/stdlib-js/stdlib/commit/b6e0aca427f23e8ec53d6c62d41e4b550bdf08c6) - **fix:** add missing values in error messages in `blas/base/sgemv` [(#6722)](https://github.com/stdlib-js/stdlib/pull/6722) _(by Shabareesh Shetty, Athan Reines)_
-   [`dba36a2`](https://github.com/stdlib-js/stdlib/commit/dba36a22dc9997d6fc6f219f3a3c04018e637b8e) - **fix:** add missing values in error messages in `blas/base/dgemv` [(#6726)](https://github.com/stdlib-js/stdlib/pull/6726) _(by Shabareesh Shetty, Athan Reines)_
-   [`0bff47f`](https://github.com/stdlib-js/stdlib/commit/0bff47f9ece2b44b42d70e0feab199bcf7f724e3) - **test:** add test cases for `blas/base/dgemm` [(#6724)](https://github.com/stdlib-js/stdlib/pull/6724) _(by Shabareesh Shetty)_
-   [`7eeda08`](https://github.com/stdlib-js/stdlib/commit/7eeda08460d0f57cd0c49fe9e78da38634c41b4a) - **test:** add test cases for `blas/base/sgemm` [(#6725)](https://github.com/stdlib-js/stdlib/pull/6725) _(by Shabareesh Shetty)_
-   [`a45c18d`](https://github.com/stdlib-js/stdlib/commit/a45c18d8a9a109cc2f4b3d69625c39ef4c909f4c) - **test:** add test cases for `blas/base/strsv` [(#6721)](https://github.com/stdlib-js/stdlib/pull/6721) _(by Shabareesh Shetty)_
-   [`d7c6f8e`](https://github.com/stdlib-js/stdlib/commit/d7c6f8e4a21779f8f4e54dac4a045b8ea8dbd497) - **feat:** add `blas/base/wasm/sswap` [(#6582)](https://github.com/stdlib-js/stdlib/pull/6582) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`c4c8949`](https://github.com/stdlib-js/stdlib/commit/c4c89491c78401962872fc128f68c3a16dc7703f) - **docs:** update examples _(by Athan Reines)_
-   [`da11963`](https://github.com/stdlib-js/stdlib/commit/da1196318bfe07b24ab957208bac00d97e8aa3bf) - **test:** add test cases for `blas/base/dtrsv` [(#6708)](https://github.com/stdlib-js/stdlib/pull/6708) _(by Shabareesh Shetty)_
-   [`0b47cf8`](https://github.com/stdlib-js/stdlib/commit/0b47cf837eea09d4fd0c004f089b38890598d135) - **test:** increase test code coverage in `blas/base/snrm2` [(#6688)](https://github.com/stdlib-js/stdlib/pull/6688) _(by Shabareesh Shetty, Athan Reines)_
-   [`b01614a`](https://github.com/stdlib-js/stdlib/commit/b01614a0b9870bdd463ce8bc20a89c1765128db2) - **test:** completes code coverage in `blas/base/dnrm2` [(#6531)](https://github.com/stdlib-js/stdlib/pull/6531) _(by Shabareesh Shetty, Athan Reines)_
-   [`58a8f55`](https://github.com/stdlib-js/stdlib/commit/58a8f55ac6713976035ec7834012ae74455aa603) - **test:** increase code coverage in `blas/base/dsyr2` [(#6546)](https://github.com/stdlib-js/stdlib/pull/6546) _(by Shabareesh Shetty, Athan Reines, stdlib-bot)_
-   [`c9e3ff1`](https://github.com/stdlib-js/stdlib/commit/c9e3ff14ed5480358d1b0a97c7eafccd8234a1e9) - **test:** increase code coverage in `blas/base/zaxpy` [(#6568)](https://github.com/stdlib-js/stdlib/pull/6568) _(by Shabareesh Shetty)_
-   [`9541650`](https://github.com/stdlib-js/stdlib/commit/9541650ee9c66a36c8e03a81036c5389383de9a3) - **test:** increase code coverage in `blas/base/ssyr2` [(#6544)](https://github.com/stdlib-js/stdlib/pull/6544) _(by Shabareesh Shetty, Athan Reines)_
-   [`fc1d8d5`](https://github.com/stdlib-js/stdlib/commit/fc1d8d5ed542eec3ded1b128850909ebb5f8bc51) - **fix:** condition checks in `blas/base/ssyr2` [(#6543)](https://github.com/stdlib-js/stdlib/pull/6543) _(by Shabareesh Shetty)_
-   [`e20f4e4`](https://github.com/stdlib-js/stdlib/commit/e20f4e4af09a7608b4f7ebeff0f8050295c646d9) - **fix:** condition check in `blas/base/dsyr2` ndarray [(#6532)](https://github.com/stdlib-js/stdlib/pull/6532) _(by Shabareesh Shetty)_
-   [`d7583fb`](https://github.com/stdlib-js/stdlib/commit/d7583fbaca5c40a68bf25d4555b60a2b211b1f6e) - **test:** increase code coverage in `blas/base/caxpy` [(#6530)](https://github.com/stdlib-js/stdlib/pull/6530) _(by Shabareesh Shetty, Athan Reines)_
-   [`c9c5acc`](https://github.com/stdlib-js/stdlib/commit/c9c5accbc966de5c699551722fb8e1bb37877740) - **docs:** update examples for `blas/base/wasm/csrot` [(#5760)](https://github.com/stdlib-js/stdlib/pull/5760) _(by Shabareesh Shetty)_
-   [`cd6e347`](https://github.com/stdlib-js/stdlib/commit/cd6e34715d7ae5217f999318d9229e95cbab6385) - **docs:** update example _(by Athan Reines)_
-   [`770c8fa`](https://github.com/stdlib-js/stdlib/commit/770c8fa6962456db2eaa37b2ba2c1c7282a663ff) - **chore:** remove empty lines _(by Athan Reines)_
-   [`6aeed5c`](https://github.com/stdlib-js/stdlib/commit/6aeed5cee4eb79fb8fc4a5a7740f73077d3503b3) - **docs:** fix parameter name [(#6515)](https://github.com/stdlib-js/stdlib/pull/6515) _(by Shabareesh Shetty)_
-   [`ea11328`](https://github.com/stdlib-js/stdlib/commit/ea113289e9129ffd1f51176afed9b5c795e1de21) - **docs:** update examples for `blas/base/wasm/cscal` [(#6495)](https://github.com/stdlib-js/stdlib/pull/6495) _(by Rupa, Athan Reines)_
-   [`9367d41`](https://github.com/stdlib-js/stdlib/commit/9367d4175b33e490bdbea8da5062fe95919f5d85) - **refactor:** update paths _(by Aayush Khanna)_
-   [`cb0d914`](https://github.com/stdlib-js/stdlib/commit/cb0d914e7d8ec63ea70f13120f26f5c444e3e420) - **refactor:** update paths _(by Aayush Khanna)_
-   [`1d8b212`](https://github.com/stdlib-js/stdlib/commit/1d8b2124adec6be1f3d639ab0b53146a7539f243) - **refactor:** update paths _(by Aayush Khanna)_
-   [`575ced1`](https://github.com/stdlib-js/stdlib/commit/575ced18983327e0b22d55b2dd5076cc45f00e9e) - **docs:** update related packages sections [(#6385)](https://github.com/stdlib-js/stdlib/pull/6385) _(by stdlib-bot)_
-   [`a6c8cab`](https://github.com/stdlib-js/stdlib/commit/a6c8cab0f0e6ba351af643c9b5c814710bac5439) - **docs:** fix examples _(by Athan Reines)_
-   [`d2aa857`](https://github.com/stdlib-js/stdlib/commit/d2aa857a823eed13a409c724c4d19fa876ad2742) - **feat:** add `blas/ext/base/wasm/dasumpw` [(#5549)](https://github.com/stdlib-js/stdlib/pull/5549) _(by Aayush Khanna, Athan Reines, stdlib-bot)_
-   [`3da41b7`](https://github.com/stdlib-js/stdlib/commit/3da41b7ccb754f5ffa7f4f9fc61799d570871a19) - **feat:** update namespace TypeScript declarations [(#6058)](https://github.com/stdlib-js/stdlib/pull/6058) _(by stdlib-bot)_
-   [`9c0f393`](https://github.com/stdlib-js/stdlib/commit/9c0f393248f4a8276991ea447dea41402f58cefc) - **feat:** add `dapxsumors` to namespace _(by Athan Reines)_
-   [`b2a770a`](https://github.com/stdlib-js/stdlib/commit/b2a770ac79d4b276e73184802ee0cf31956bf52c) - **feat:** add `blas/ext/base/wasm/dapxsumors` [(#5644)](https://github.com/stdlib-js/stdlib/pull/5644) _(by Aayush Khanna, Athan Reines)_
-   [`022fa01`](https://github.com/stdlib-js/stdlib/commit/022fa012a2b817e4a4cdaf78dfb902c549683366) - **docs:** fix example _(by Athan Reines)_
-   [`db9696d`](https://github.com/stdlib-js/stdlib/commit/db9696db44c79bfcb4cb0361d2666aab5724716f) - **docs:** update related packages sections [(#6007)](https://github.com/stdlib-js/stdlib/pull/6007) _(by stdlib-bot, Athan Reines)_
-   [`87abb74`](https://github.com/stdlib-js/stdlib/commit/87abb743fe577742c81ce1be6b5b8477da33b5f2) - **feat:** update namespace TypeScript declarations [(#6008)](https://github.com/stdlib-js/stdlib/pull/6008) _(by stdlib-bot)_
-   [`5738d4d`](https://github.com/stdlib-js/stdlib/commit/5738d4d9acc9b1d68f33968e76c4ede936f2216f) - **feat:** add `dapxsum`, `dapxsumpw`, and `dnansumpw` to namespace _(by Athan Reines)_
-   [`654827d`](https://github.com/stdlib-js/stdlib/commit/654827df5358f2c70fde0259fbbcbfb607076119) - **feat:** add `blas/ext/base/wasm/dapxsum` [(#5634)](https://github.com/stdlib-js/stdlib/pull/5634) _(by Vivek Maurya, Athan Reines, stdlib-bot)_
-   [`e0e2ab2`](https://github.com/stdlib-js/stdlib/commit/e0e2ab2955fd340371c0989c5a7a2f96991ba232) - **feat:** add `blas/ext/base/wasm/dnansumpw` [(#5968)](https://github.com/stdlib-js/stdlib/pull/5968) _(by Prashant Kumar Yadav, Athan Reines)_
-   [`acaa750`](https://github.com/stdlib-js/stdlib/commit/acaa75027d9d1136ecdcedb2465e4e8ec77f2b2f) - **docs:** fix package name _(by Athan Reines)_
-   [`49de088`](https://github.com/stdlib-js/stdlib/commit/49de088f6be300b4b48195ae836120e2c00d5546) - **docs:** fix package name _(by Athan Reines)_
-   [`13e3172`](https://github.com/stdlib-js/stdlib/commit/13e317293037a43652cbbe6f9e7ebe9b23185a75) - **docs:** fix pkg name _(by Athan Reines)_
-   [`6f4d5ce`](https://github.com/stdlib-js/stdlib/commit/6f4d5cedceae4e311e176fb3b042f188de18434e) - **docs:** fix pkg name _(by Athan Reines)_
-   [`01a2787`](https://github.com/stdlib-js/stdlib/commit/01a27876b6668ecb1fb20285913270e14ae663a0) - **docs:** update examples for `blas/base/wasm/zdrot` [(#5805)](https://github.com/stdlib-js/stdlib/pull/5805) _(by Gururaj Gurram)_
-   [`6716e62`](https://github.com/stdlib-js/stdlib/commit/6716e624585aaba0041ae183089cb2b92851f366) - **feat:** update namespace TypeScript declarations [(#5938)](https://github.com/stdlib-js/stdlib/pull/5938) _(by stdlib-bot)_
-   [`f572d78`](https://github.com/stdlib-js/stdlib/commit/f572d7875370c83107013a400f32d1ec3f473acb) - **feat:** add accessor array support to `blas/base/gnrm2` [(#5778)](https://github.com/stdlib-js/stdlib/pull/5778) _(by Muhammad Haris, Athan Reines)_
-   [`460cd8f`](https://github.com/stdlib-js/stdlib/commit/460cd8f7b479efb7350a3b638be912b7e1bd5a7b) - **feat:** add `srotm` to namespace _(by Athan Reines)_
-   [`8dc3f35`](https://github.com/stdlib-js/stdlib/commit/8dc3f35a39fdf2d24f7a9a80ed9e5d905d5cf10b) - **feat:** add `blas/base/wasm/srotm` [(#https://github.com/stodlib-js/stdlib/pull/5824)](https://github.com/stdlib-js/stdlib/pull/https://github.com/stodlib-js/stdlib/pull/5824) _(by Gururaj Gurram, Athan Reines)_
-   [`14bab15`](https://github.com/stdlib-js/stdlib/commit/14bab159393b69aa3496cb3b715ea3b68de3e3d7) - **chore:** fix tests, spacing, and comments _(by Athan Reines)_
-   [`b419e98`](https://github.com/stdlib-js/stdlib/commit/b419e9801458941ec974bd04be949735614d1432) - **bench:** suppress uninitialized variable warning [(#5918)](https://github.com/stdlib-js/stdlib/pull/5918) _(by Hemant M Mehta)_
-   [`24ba370`](https://github.com/stdlib-js/stdlib/commit/24ba370b3ae9e9bc4aa0160f7d0e3879e62d2153) - **feat:** add accessor array support to `blas/base/gdot`  [(#5878)](https://github.com/stdlib-js/stdlib/pull/5878) _(by Muhammad Haris, Athan Reines)_
-   [`bd9b313`](https://github.com/stdlib-js/stdlib/commit/bd9b313e9ccbc89f584a247d57c15388e019af2e) - **docs:** update examples for `blas/base/wasm/zswap` [(#5770)](https://github.com/stdlib-js/stdlib/pull/5770) _(by Gururaj Gurram)_
-   [`8a80a81`](https://github.com/stdlib-js/stdlib/commit/8a80a811f4c4d710106c73b6381fe0d3ed2ab901) - **build:** generalize scripts to auto-update copyright year _(by Athan Reines)_
-   [`b0d1c0e`](https://github.com/stdlib-js/stdlib/commit/b0d1c0ee0ff6fa05c8d5019939990d3fbdf08537) - **feat:** add `blas/ext/base/wasm/dapxsumpw` [(#5642)](https://github.com/stdlib-js/stdlib/pull/5642) _(by Aayush Khanna, Athan Reines, stdlib-bot)_
-   [`5003dac`](https://github.com/stdlib-js/stdlib/commit/5003dac28f25072653f9cf6d9fe8761f5898085c) - **docs:** fix line wrapping _(by Athan Reines)_
-   [`56ca4c4`](https://github.com/stdlib-js/stdlib/commit/56ca4c46231745f5c3aaf24352415306b6c5dd0c) - **docs:** fix line wrapping _(by Athan Reines)_
-   [`ca7bf2d`](https://github.com/stdlib-js/stdlib/commit/ca7bf2d42bf8785f00754c838a855cc203f095e8) - **docs:** fix line wrapping _(by Athan Reines)_
-   [`4fdea8f`](https://github.com/stdlib-js/stdlib/commit/4fdea8f772529eba17f6045c4188b1674d97b432) - **chore:** fix EditorConfig lint errors [(#5514)](https://github.com/stdlib-js/stdlib/pull/5514) _(by Justyn Shelby)_
-   [`4efada9`](https://github.com/stdlib-js/stdlib/commit/4efada90febbd19180bcba37915b0f19e918348e) - **docs:** update namespace table of contents [(#5513)](https://github.com/stdlib-js/stdlib/pull/5513) _(by stdlib-bot)_
-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799) - **feat:** update namespace TypeScript declarations [(#5511)](https://github.com/stdlib-js/stdlib/pull/5511) _(by stdlib-bot)_
-   [`8dc22d7`](https://github.com/stdlib-js/stdlib/commit/8dc22d75fe8396c5fe89418a325a174c531d95eb) - **refactor:** update `blas/base/gscal` to follow current project conventions [(#5447)](https://github.com/stdlib-js/stdlib/pull/5447) _(by Saurabh Singh, Athan Reines, Muhammad Haris, stdlib-bot)_
-   [`57184e0`](https://github.com/stdlib-js/stdlib/commit/57184e03168cf78b9daeee492995a7ea2670d463) - **feat:** add accessor array support to `blas/base/gasum` [(#5439)](https://github.com/stdlib-js/stdlib/pull/5439) _(by Muhammad Haris)_
-   [`2d26990`](https://github.com/stdlib-js/stdlib/commit/2d26990255c7d3ef2396f2d8c7ebf545e7ba41ee) - **docs:** update examples for `blas/base/wasm/zcopy` [(#5442)](https://github.com/stdlib-js/stdlib/pull/5442) _(by Gururaj Gurram)_
-   [`3b48bb5`](https://github.com/stdlib-js/stdlib/commit/3b48bb5eb47d5a8559d8d7e82f7639ee59d90d21) - **feat:** add accessor array support to `blas/base/gscal` [(#5418)](https://github.com/stdlib-js/stdlib/pull/5418) _(by Muhammad Haris, Athan Reines)_
-   [`f027bb0`](https://github.com/stdlib-js/stdlib/commit/f027bb01176eb0409c263cf3a9c4529bafccc5a9) - **docs:** update examples for `blas/base/wasm/ccopy` [(#5410)](https://github.com/stdlib-js/stdlib/pull/5410) _(by Gururaj Gurram)_
-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce) - **feat:** update namespace TypeScript declarations [(#5385)](https://github.com/stdlib-js/stdlib/pull/5385) _(by stdlib-bot)_
-   [`3ec92ae`](https://github.com/stdlib-js/stdlib/commit/3ec92aeaefd8a73587ab8a9e153e654da87c553f) - **docs:** update related packages sections [(#5401)](https://github.com/stdlib-js/stdlib/pull/5401) _(by stdlib-bot)_
-   [`bda44d4`](https://github.com/stdlib-js/stdlib/commit/bda44d4eac2da2fae254764a717df0586872cb2b) - **docs:** update examples for `blas/base/zdscal` [(#5392)](https://github.com/stdlib-js/stdlib/pull/5392) _(by Gururaj Gurram)_
-   [`f2f05d9`](https://github.com/stdlib-js/stdlib/commit/f2f05d91b9e5960b7c69a7d157a50ede9b381335) - **docs:** update related packages sections [(#5384)](https://github.com/stdlib-js/stdlib/pull/5384) _(by stdlib-bot)_
-   [`fc4a92a`](https://github.com/stdlib-js/stdlib/commit/fc4a92a4a2356e4de3026fcfcfbd6433121851a0) - **refactor:** update paths _(by Aayush Khanna)_
-   [`3772f8f`](https://github.com/stdlib-js/stdlib/commit/3772f8f53a07408b72cf4ec3e8334758f9aded0d) - **docs:** update namespace table of contents [(#5366)](https://github.com/stdlib-js/stdlib/pull/5366) _(by stdlib-bot, Philipp Burckhardt)_
-   [`9789396`](https://github.com/stdlib-js/stdlib/commit/9789396bd5111e963f4662c57c6b4159d4166946) - **feat:** update namespace TypeScript declarations [(#5364)](https://github.com/stdlib-js/stdlib/pull/5364) _(by stdlib-bot)_
-   [`2a23671`](https://github.com/stdlib-js/stdlib/commit/2a23671ce88a4b3fbfcf48b5edb8b73105463bdf) - **feat:** add various level 1 and level 2 routines to namespace _(by Athan Reines)_
-   [`c1ac93f`](https://github.com/stdlib-js/stdlib/commit/c1ac93f393ce6fc122e388e2554d01b149b6fbc0) - **feat:** add `wasm` to namespace _(by Athan Reines)_
-   [`40f5bae`](https://github.com/stdlib-js/stdlib/commit/40f5bae95d708401dbea4c37b2c220381638c4a0) - **feat:** add `wasm` to namespace _(by Athan Reines)_
-   [`2c1cc13`](https://github.com/stdlib-js/stdlib/commit/2c1cc13215c24c7b1a9d2561a65e9c3dbf8acd9a) - **docs:** fix copyright year _(by Athan Reines)_
-   [`a8b94d7`](https://github.com/stdlib-js/stdlib/commit/a8b94d7ea281eb5ac4477eaca40fdb38195ab2b3) - **feat:** add `blas/ext/base/wasm` namespace _(by Athan Reines)_
-   [`5306dac`](https://github.com/stdlib-js/stdlib/commit/5306dac507668082336473811c64b04dc3b765ef) - **feat:** add `blas/base/wasm` namespace _(by Athan Reines)_
-   [`6daebce`](https://github.com/stdlib-js/stdlib/commit/6daebceeb723392b00e87b2c6d7398b76be58b95) - **docs:** update related packages sections [(#5349)](https://github.com/stdlib-js/stdlib/pull/5349) _(by stdlib-bot)_
-   [`32d2b77`](https://github.com/stdlib-js/stdlib/commit/32d2b77dd2c991cadf726f929f992e109b61d92c) - **docs:** add missing API docs _(by Athan Reines)_
-   [`0864071`](https://github.com/stdlib-js/stdlib/commit/086407175aec71e2874727a7d3bad97d26289323) - **remove:** remove `blas/ext/base/dapxsumkbn-wasm` _(by Athan Reines)_
-   [`46b98f4`](https://github.com/stdlib-js/stdlib/commit/46b98f4f6cc171d07810b3f756ff7c36e60ac8ed) - **feat:** add `blas/ext/base/wasm/dapxsumkbn` _(by Athan Reines)_
-   [`99dc0fd`](https://github.com/stdlib-js/stdlib/commit/99dc0fd7d91a666b047c316ccfef58df5605e3ca) - **feat:** add `blas/base/wasm/zdrot` [(#5293)](https://github.com/stdlib-js/stdlib/pull/5293) _(by Aman Bhansali, stdlib-bot)_
-   [`8446185`](https://github.com/stdlib-js/stdlib/commit/8446185b02979b037363bf390bacddf937a83886) - **docs:** update related packages sections [(#5307)](https://github.com/stdlib-js/stdlib/pull/5307) _(by stdlib-bot)_
-   [`3587230`](https://github.com/stdlib-js/stdlib/commit/3587230f4c2d3a18427b3d7a09b03f56d83d6f6c) - **chore:** address commit comments regarding typo and refactor [(#5263)](https://github.com/stdlib-js/stdlib/pull/5263) _(by Suhaib Ilahi, Philipp Burckhardt)_
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - **feat:** update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254) _(by stdlib-bot)_
-   [`b090b90`](https://github.com/stdlib-js/stdlib/commit/b090b90935fa0b18e554bf98a4ed0c2f7c51ec33) - **docs:** update related packages sections [(#5253)](https://github.com/stdlib-js/stdlib/pull/5253) _(by stdlib-bot)_
-   [`8df3643`](https://github.com/stdlib-js/stdlib/commit/8df36439153e0c5f399c01b755213be55b2a696c) - **docs:** update namespace table of contents [(#5256)](https://github.com/stdlib-js/stdlib/pull/5256) _(by stdlib-bot)_
-   [`c86e76e`](https://github.com/stdlib-js/stdlib/commit/c86e76e8c9ab907aedfccfbd74ca3ad39ff75a3e) - **feat:** add C `ndarray` implementation for `blas/base/zscal` [(#4864)](https://github.com/stdlib-js/stdlib/pull/4864) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`402bd40`](https://github.com/stdlib-js/stdlib/commit/402bd405359fba77de13d0136fbf3d1fb956e0ec) - **feat:** add `blas/base/wasm/sscal` [(#5224)](https://github.com/stdlib-js/stdlib/pull/5224) _(by Aman Bhansali, Athan Reines)_
-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95) - **feat:** update namespace TypeScript declarations [(#5243)](https://github.com/stdlib-js/stdlib/pull/5243) _(by stdlib-bot)_
-   [`158bfde`](https://github.com/stdlib-js/stdlib/commit/158bfde6560ed70c956b17f29acd00d81e2bc3b7) - **docs:** update related packages sections [(#5242)](https://github.com/stdlib-js/stdlib/pull/5242) _(by stdlib-bot)_
-   [`753fd55`](https://github.com/stdlib-js/stdlib/commit/753fd557418e004412e70379dfeda947bf319183) - **docs:** update examples for `blas/base/zdrot` [(#5209)](https://github.com/stdlib-js/stdlib/pull/5209) _(by Gururaj Gurram)_
-   [`6d41523`](https://github.com/stdlib-js/stdlib/commit/6d415231212694d37366e40306fd5ffbdb04db94) - **docs:** update examples for `blas/base/zscal` [(#5226)](https://github.com/stdlib-js/stdlib/pull/5226) _(by Gururaj Gurram)_
-   [`8449e0b`](https://github.com/stdlib-js/stdlib/commit/8449e0b1753e42118df3097fc8793cfd2571646e) - **docs:** update examples for `blas/base/zswap` [(#5218)](https://github.com/stdlib-js/stdlib/pull/5218) _(by Gururaj Gurram)_
-   [`8d34c0c`](https://github.com/stdlib-js/stdlib/commit/8d34c0c773e51c464e10e67dd9ccef4f95a00f2b) - **feat:** add C implementation for `blas/base/sspr` [(#4491)](https://github.com/stdlib-js/stdlib/pull/4491) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`7cfb8f7`](https://github.com/stdlib-js/stdlib/commit/7cfb8f70164eec956307120577cdcebf933df848) - **docs:** update examples for `blas/base/zaxpy` [(#5173)](https://github.com/stdlib-js/stdlib/pull/5173) _(by Gururaj Gurram)_
-   [`2981d28`](https://github.com/stdlib-js/stdlib/commit/2981d283200482a49ced3e27416ec106eef3fd77) - **docs:** update `blas/ext/base/dfill` to follow current project conventions [(#5171)](https://github.com/stdlib-js/stdlib/pull/5171) _(by Muhammad Haris)_
-   [`189249b`](https://github.com/stdlib-js/stdlib/commit/189249b59813ed32ab40c4bafb5a827859fb7032) - **docs:** update `blas/ext/base/dcusumkbn` to follow current project conventions [(#5167)](https://github.com/stdlib-js/stdlib/pull/5167) _(by Muhammad Haris)_
-   [`76db518`](https://github.com/stdlib-js/stdlib/commit/76db5189912e676a421d5f79dc69cb4b5722c0bc) - **docs:** update `blas/ext/base/dcusumors` to follow current project conventions [(#5169)](https://github.com/stdlib-js/stdlib/pull/5169) _(by Muhammad Haris)_
-   [`8e5b82c`](https://github.com/stdlib-js/stdlib/commit/8e5b82caeae6b84d4a888397c6087b0ea8666acf) - **docs:** update `blas/ext/base/dnannsumors` to follow current project conventions [(#5189)](https://github.com/stdlib-js/stdlib/pull/5189) _(by Muhammad Haris)_
-   [`6f8225e`](https://github.com/stdlib-js/stdlib/commit/6f8225ed9afb8f2e65c672c4798253b6d8234393) - **docs:** update `blas/ext/base/dnanasumors` to follow current project conventions [(#5185)](https://github.com/stdlib-js/stdlib/pull/5185) _(by Muhammad Haris)_
-   [`e62caf3`](https://github.com/stdlib-js/stdlib/commit/e62caf3e3c27d418a7f364c5c0dd7590e4a081bd) - **docs:** update `blas/ext/base/dnannsum`  to follow current project conventions [(#5186)](https://github.com/stdlib-js/stdlib/pull/5186) _(by Muhammad Haris)_
-   [`b5cca80`](https://github.com/stdlib-js/stdlib/commit/b5cca80877dfd53f4a40e3e4c4e0ae09e326f8cd) - **docs:** update `blas/ext/base/dnannsumkbn` to follow current project conventions [(#5187)](https://github.com/stdlib-js/stdlib/pull/5187) _(by Muhammad Haris)_
-   [`d81ba51`](https://github.com/stdlib-js/stdlib/commit/d81ba51451a7b35e5b9fd259fe57cee796f3e81b) - **docs:** update `blas/ext/base/dnannsumkbn2` to follow current project conventions [(#5188)](https://github.com/stdlib-js/stdlib/pull/5188) _(by Muhammad Haris)_
-   [`858ab0a`](https://github.com/stdlib-js/stdlib/commit/858ab0aa1a1b377c1feea02dacfc387d2671e1f3) - **docs:** update `blas/ext/base/dnannsumpw` to follow current project conventions [(#5190)](https://github.com/stdlib-js/stdlib/pull/5190) _(by Muhammad Haris)_
-   [`5dde14b`](https://github.com/stdlib-js/stdlib/commit/5dde14b31ea6a661b88b7ba637e0e7a2fce272a4) - **feat:** update namespace TypeScript declarations [(#5182)](https://github.com/stdlib-js/stdlib/pull/5182) _(by stdlib-bot)_
-   [`36768b4`](https://github.com/stdlib-js/stdlib/commit/36768b4fb7c5b0c7934fc8c9f1ab7f8ffe67b3e9) - **docs:** update related packages sections [(#5181)](https://github.com/stdlib-js/stdlib/pull/5181) _(by stdlib-bot)_
-   [`d9c08b0`](https://github.com/stdlib-js/stdlib/commit/d9c08b0a4028175c0a95f5fa93617609ae65108a) - **docs:** update `blas/ext/base/dcusumkbn2` to follow current project conventions [(#5168)](https://github.com/stdlib-js/stdlib/pull/5168) _(by Muhammad Haris)_
-   [`8357863`](https://github.com/stdlib-js/stdlib/commit/8357863b87da1554b4e249fb03e712dec8a58ee0) - **feat:** add C ndarray API and refactor `blas/ext/base/ssort2ins` [(#5114)](https://github.com/stdlib-js/stdlib/pull/5114) _(by Prashant Kumar Yadav, Muhammad Haris)_
-   [`7a04093`](https://github.com/stdlib-js/stdlib/commit/7a040939ecb95a686cf2b66d7a912fcc39e5aa3d) - **docs:** update `blas/ext/base/dcusum` to follow current project conventions [(#5166)](https://github.com/stdlib-js/stdlib/pull/5166) _(by Muhammad Haris)_
-   [`4bc7b8c`](https://github.com/stdlib-js/stdlib/commit/4bc7b8cf8b26105f6a02decbe7030022024070df) - **docs:** update `blas/ext/base/dcusumpw` to follow current project conventions [(#5170)](https://github.com/stdlib-js/stdlib/pull/5170) _(by Muhammad Haris)_
-   [`0feb415`](https://github.com/stdlib-js/stdlib/commit/0feb415ee92e1d3851665ac6729b6ea819f926ff) - **docs:** update `blas/ext/base/dnanasum` to follow current project conventions [(#5172)](https://github.com/stdlib-js/stdlib/pull/5172) _(by Muhammad Haris)_
-   [`9d447dc`](https://github.com/stdlib-js/stdlib/commit/9d447dc24e6c56353c1dceae3bbfd88d11ce2066) - **docs:** update related packages sections [(#5151)](https://github.com/stdlib-js/stdlib/pull/5151) _(by stdlib-bot, Athan Reines)_
-   [`347e559`](https://github.com/stdlib-js/stdlib/commit/347e5590cf124d86a7bbe1b7f734bb620bdeb5ba) - **docs:** fix incorrect structure in READMEs of `blas/ext/base/*` [(#5163)](https://github.com/stdlib-js/stdlib/pull/5163) _(by Aayush Khanna, Athan Reines)_
-   [`d6e1030`](https://github.com/stdlib-js/stdlib/commit/d6e103056ea873a0cc9fa63fa60b56ff61d9a041) - **docs:** update namespace TypeScript declarations [(#5152)](https://github.com/stdlib-js/stdlib/pull/5152) _(by stdlib-bot)_
-   [`9a0d2cb`](https://github.com/stdlib-js/stdlib/commit/9a0d2cb8183bc4f1a13eb2ff212d0d0570b60a68) - **docs:** update namespace table of contents [(#5154)](https://github.com/stdlib-js/stdlib/pull/5154) _(by stdlib-bot)_
-   [`d226d10`](https://github.com/stdlib-js/stdlib/commit/d226d10e5119e4480721039ce892da8ae874e468) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsortins` [(#5120)](https://github.com/stdlib-js/stdlib/pull/5120) _(by Muhammad Haris, Athan Reines)_
-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a) - **feat:** update namespace TypeScript declarations [(#5130)](https://github.com/stdlib-js/stdlib/pull/5130) _(by stdlib-bot)_
-   [`152dfd2`](https://github.com/stdlib-js/stdlib/commit/152dfd2a9f6f420dee659694435c9e44f3095601) - **feat:** add accessor arrays support to `blas/ext/base/gsum` [(#5134)](https://github.com/stdlib-js/stdlib/pull/5134) _(by Muhammad Haris)_
-   [`ece4002`](https://github.com/stdlib-js/stdlib/commit/ece40025e9afce7032cd1072c1d1a8b856726564) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsortsh` [(#5122)](https://github.com/stdlib-js/stdlib/pull/5122) _(by Muhammad Haris)_
-   [`9ae04b5`](https://github.com/stdlib-js/stdlib/commit/9ae04b5c7607e49078a9ad3cdbb27e3addfaebd2) - **docs:** update namespace table of contents [(#5132)](https://github.com/stdlib-js/stdlib/pull/5132) _(by stdlib-bot, Philipp Burckhardt)_
-   [`22212ac`](https://github.com/stdlib-js/stdlib/commit/22212ac4eed8f336d9798ea7c70daf0ff0f1906a) - **docs:** update related packages sections [(#5129)](https://github.com/stdlib-js/stdlib/pull/5129) _(by stdlib-bot)_
-   [`112b7ef`](https://github.com/stdlib-js/stdlib/commit/112b7ef36a44bc8b27ad757cc3099d2595aa8aaa) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsorthp` [(#5117)](https://github.com/stdlib-js/stdlib/pull/5117) _(by Muhammad Haris)_
-   [`5997441`](https://github.com/stdlib-js/stdlib/commit/599744168e3ece421aa012335f90104148aa1a4c) - **docs:** update examples for `blas/base/zcopy` [(#5121)](https://github.com/stdlib-js/stdlib/pull/5121) _(by Gururaj Gurram)_
-   [`8ad374c`](https://github.com/stdlib-js/stdlib/commit/8ad374c4cdc7ee450a404f4f766ec772a0aa5af5) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsort2sh` [(#5113)](https://github.com/stdlib-js/stdlib/pull/5113) _(by Muhammad Haris)_
-   [`7d5e0aa`](https://github.com/stdlib-js/stdlib/commit/7d5e0aab1f348b4b4ed7e039c6e3745442f479e1) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsort2ins` [(#5089)](https://github.com/stdlib-js/stdlib/pull/5089) _(by Muhammad Haris)_
-   [`20f7173`](https://github.com/stdlib-js/stdlib/commit/20f71735fc68e3e501e5fc13fddbaf19900d0ebf) - **feat:** add accessor arrays support and refactor `blas/ext/base/gsort2hp` [(#4660)](https://github.com/stdlib-js/stdlib/pull/4660) _(by Muhammad Haris, Athan Reines)_
-   [`924f85a`](https://github.com/stdlib-js/stdlib/commit/924f85ad57aec54ede64c9db9ee96459befa2c00) - **feat:** add C implementation for `blas/base/ssyr` [(#2877)](https://github.com/stdlib-js/stdlib/pull/2877) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`32e4183`](https://github.com/stdlib-js/stdlib/commit/32e4183f26f6923e58795ce3551ddc96799e0ada) - **refactor:** address unnecessary casting and fix docs [(#5079)](https://github.com/stdlib-js/stdlib/pull/5079) _(by Saurabh Singh, Athan Reines)_
-   [`cd30ae4`](https://github.com/stdlib-js/stdlib/commit/cd30ae4e94a3874a3850eb5ddec63d9360e20413) - **feat:** add `blas/base/wasm/isamax` [(#3984)](https://github.com/stdlib-js/stdlib/pull/3984) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`e28cc73`](https://github.com/stdlib-js/stdlib/commit/e28cc73ce4cae0a780006c8256ca58f901b18624) - **feat:** add `blas/base/wasm/zcopy` [(#3982)](https://github.com/stdlib-js/stdlib/pull/3982) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`885fa05`](https://github.com/stdlib-js/stdlib/commit/885fa05dd8bef35faad5c336e30d643dce805171) - **docs:** fix example _(by Athan Reines)_
-   [`4112d6d`](https://github.com/stdlib-js/stdlib/commit/4112d6de066fb6324fead4a004882527cf38856b) - **docs:** fix example _(by Athan Reines)_
-   [`5cdd9f7`](https://github.com/stdlib-js/stdlib/commit/5cdd9f7f4b631411afcf489dbfdeb7088f1392ed) - **feat:** add `blas/base/wasm/zswap` [(#4011)](https://github.com/stdlib-js/stdlib/pull/4011) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`966f409`](https://github.com/stdlib-js/stdlib/commit/966f409c74eb6fb61c8514d0a87b19eebb9f56cd) - **docs:** update related packages sections [(#5108)](https://github.com/stdlib-js/stdlib/pull/5108) _(by stdlib-bot)_
-   [`f9561f9`](https://github.com/stdlib-js/stdlib/commit/f9561f99cd606b6fd783ed2253a425c3bdddce4e) - **docs:** update related packages sections [(#5087)](https://github.com/stdlib-js/stdlib/pull/5087) _(by stdlib-bot)_
-   [`84b7614`](https://github.com/stdlib-js/stdlib/commit/84b76143e3ee6e279536cbfcd8f3ef94e026bd60) - **chore:** address commit comment feedback [(#5078)](https://github.com/stdlib-js/stdlib/pull/5078) _(by Mohammad Bin Aftab, Philipp Burckhardt)_
-   [`88e4c0a`](https://github.com/stdlib-js/stdlib/commit/88e4c0a78b9a33f5b74417de9a0eabca256803de) - **docs:** update related packages sections [(#5074)](https://github.com/stdlib-js/stdlib/pull/5074) _(by stdlib-bot)_
-   [`beeca53`](https://github.com/stdlib-js/stdlib/commit/beeca539c35d8abd8bf52f2dabacafb56ef52d2d) - **remove:** remove `blas/base/srot-wasm` _(by Athan Reines)_
-   [`bc81929`](https://github.com/stdlib-js/stdlib/commit/bc81929038bd6393df0e76e5ad6097e2528ab967) - **feat:** add `blas/base/wasm/srot` _(by Athan Reines)_
-   [`7ff23bf`](https://github.com/stdlib-js/stdlib/commit/7ff23bf5084c883c8db90385b4986c6ac5361678) - **remove:** remove `blas/base/snrm2-wasm` _(by Athan Reines)_
-   [`fa44243`](https://github.com/stdlib-js/stdlib/commit/fa4424301c6f9d417367e79843195855c291b5be) - **feat:** add `blas/base/wasm/snrm2` _(by Athan Reines)_
-   [`7d1efc3`](https://github.com/stdlib-js/stdlib/commit/7d1efc3234e5e97e8138775d24de6883ecc353f0) - **remove:** remove `blas/base/sdot-wasm` _(by Athan Reines)_
-   [`8649400`](https://github.com/stdlib-js/stdlib/commit/864940039f6e118f031f949f7ed619e668f97034) - **feat:** add `blas/base/wasm/sdot` _(by Athan Reines)_
-   [`742eb42`](https://github.com/stdlib-js/stdlib/commit/742eb42240411f30af6d40846b1ed53cc50b3d4f) - **remove:** remove `blas/base/scopy-wasm` _(by Athan Reines)_
-   [`56a4fc3`](https://github.com/stdlib-js/stdlib/commit/56a4fc3e28da41971a00a95653c9f249e47f5d13) - **feat:** add `blas/base/wasm/scopy` _(by Athan Reines)_
-   [`68d3c7c`](https://github.com/stdlib-js/stdlib/commit/68d3c7cb33337b53fec5105734d22310b8a00f8e) - **remove:** remove `blas/base/saxpy-wasm` _(by Athan Reines)_
-   [`f19927d`](https://github.com/stdlib-js/stdlib/commit/f19927d6d375ea5ecdab52e52a5d3f92d8f63911) - **feat:** add `blas/base/wasm/saxpy` _(by Athan Reines)_
-   [`bf91fc5`](https://github.com/stdlib-js/stdlib/commit/bf91fc54f3c5b2d3170c075750ebef18971087b4) - **remove:** remove `blas/base/sasum-wasm` _(by Athan Reines)_
-   [`2fc9bf4`](https://github.com/stdlib-js/stdlib/commit/2fc9bf49fe6a935260e86d3b249e78e8c9662758) - **feat:** add `blas/base/wasm/sasum` _(by Athan Reines)_
-   [`c528ea9`](https://github.com/stdlib-js/stdlib/commit/c528ea916d5b93335f1dabc3ae5c39d0a0d4a6e4) - **remove:** remove `blas/base/idamax-wasm` _(by Athan Reines)_
-   [`caf2c7e`](https://github.com/stdlib-js/stdlib/commit/caf2c7e956b6edf338ed9e59a295f8f776b26230) - **feat:** add `blas/base/wasm/idamax` _(by Athan Reines)_
-   [`07ce325`](https://github.com/stdlib-js/stdlib/commit/07ce325d72471c7ae049f284d52627558f6dae51) - **remove:** remove `blas/base/dswap-wasm` _(by Athan Reines)_
-   [`35ad7f0`](https://github.com/stdlib-js/stdlib/commit/35ad7f0af7ec928461e62eb10d85a0730819af7b) - **feat:** add `blas/base/wasm/dswap` _(by Athan Reines)_
-   [`6e39c79`](https://github.com/stdlib-js/stdlib/commit/6e39c79befc44701587a7e3f39fa728b93a14ec2) - **remove:** remove `blas/base/dscal-wasm` _(by Athan Reines)_
-   [`8fa1f9d`](https://github.com/stdlib-js/stdlib/commit/8fa1f9d0967e01c2de08e8b2f6bae1091a2e941f) - **feat:** add `blas/base/wasm/dscal` _(by Athan Reines)_
-   [`c0b7f3c`](https://github.com/stdlib-js/stdlib/commit/c0b7f3c948744b3ef7ff57cd45fcf890602222c5) - **remove:** remove `blas/base/drotm-wasm` _(by Athan Reines)_
-   [`a519986`](https://github.com/stdlib-js/stdlib/commit/a519986026f8c8da8c4cd8ef8934356dcbf02cce) - **feat:** add `blas/base/wasm/drotm` _(by Athan Reines)_
-   [`0015bcd`](https://github.com/stdlib-js/stdlib/commit/0015bcde4419b759d390b8f8e0ca282305c70121) - **remove:** remove `blas/base/drot-wasm` _(by Athan Reines)_
-   [`8270aa6`](https://github.com/stdlib-js/stdlib/commit/8270aa6937b42072ab4208e8cede7bd00f197e88) - **feat:** add `blas/base/wasm/drot` _(by Athan Reines)_
-   [`3c378c6`](https://github.com/stdlib-js/stdlib/commit/3c378c642fe19f5c36f97798c45d6e10f812bd2b) - **remove:** remove `blas/base/dnrm2-wasm` _(by Athan Reines)_
-   [`18fef5f`](https://github.com/stdlib-js/stdlib/commit/18fef5faebcfe1acf92daf059c29ddfd64f94901) - **feat:** add `blas/base/wasm/dnrm2` _(by Athan Reines)_
-   [`c4b589f`](https://github.com/stdlib-js/stdlib/commit/c4b589f67ea7c3543f17fc1b6828bc6f72212cdc) - **remove:** remove `blas/base/ddot-wasm` _(by Athan Reines)_
-   [`b5468db`](https://github.com/stdlib-js/stdlib/commit/b5468dbd07d253621eddcb8a25363eab748d210a) - **feat:** add `blas/base/wasm/ddot` _(by Athan Reines)_
-   [`21feb97`](https://github.com/stdlib-js/stdlib/commit/21feb97bbec27eca259b929cc346e6b86bc917aa) - **remove:** remove `blas/base/dcopy-wasm` _(by Athan Reines)_
-   [`dbb0165`](https://github.com/stdlib-js/stdlib/commit/dbb0165c27aba9f90d96e37af93776a7a410e471) - **feat:** add `blas/base/wasm/dcopy` _(by Athan Reines)_
-   [`e80da18`](https://github.com/stdlib-js/stdlib/commit/e80da183a872a3c9172bd552c9f48576ea0d43fe) - **remove:** remove `blas/base/daxpy-wasm` _(by Athan Reines)_
-   [`f1d4e1d`](https://github.com/stdlib-js/stdlib/commit/f1d4e1d7dabeaa6db42630707dad76923dfe755c) - **feat:** add `blas/base/wasm/daxpy` _(by Athan Reines)_
-   [`28aeac5`](https://github.com/stdlib-js/stdlib/commit/28aeac57a7c34eedca3d6491ea09741ee1b9992f) - **remove:** remove `blas/base/dasum-wasm` _(by Athan Reines)_
-   [`0d61df4`](https://github.com/stdlib-js/stdlib/commit/0d61df43906121de7569bfc943b8c90a280f2b04) - **feat:** add `blas/base/wasm/dasum` _(by Athan Reines)_
-   [`79cdf06`](https://github.com/stdlib-js/stdlib/commit/79cdf06e44a07f896283172509f0c0a3a174d9d5) - **remove:** remove `blas/base/cswap-wasm` _(by Athan Reines)_
-   [`f067e80`](https://github.com/stdlib-js/stdlib/commit/f067e80ba5ee58232b73600e7fdfe46529d34f99) - **feat:** add `blas/base/wasm/cswap` _(by Athan Reines)_
-   [`08a68fa`](https://github.com/stdlib-js/stdlib/commit/08a68fa2382d01b74aaf1b25a8d4235465dc2a07) - **remove:** remove `blas/base/csrot-wasm` _(by Athan Reines)_
-   [`4de4aff`](https://github.com/stdlib-js/stdlib/commit/4de4affbc7b2b1c84606700dc9b5d96bd2b57c9d) - **feat:** add `blas/base/wasm/csrot` _(by Athan Reines)_
-   [`009ba31`](https://github.com/stdlib-js/stdlib/commit/009ba31b10876362faf01f08b4f94fc3a82bbf71) - **remove:** remove `blas/base/cscal-wasm` _(by Athan Reines)_
-   [`c18d344`](https://github.com/stdlib-js/stdlib/commit/c18d344951dc88690929a82ef47f5b3838f93a92) - **feat:** add `blas/base/wasm/cscal` _(by Athan Reines)_
-   [`3fc841d`](https://github.com/stdlib-js/stdlib/commit/3fc841dec353f3d7dbb5a385e8741a002223caa4) - **remove:** remove `blas/base/ccopy-wasm` _(by Athan Reines)_
-   [`ab1d701`](https://github.com/stdlib-js/stdlib/commit/ab1d701a59615ae48b61ff4444ff6c6ac006950b) - **feat:** add `blas/base/wasm/ccopy` _(by Athan Reines)_
-   [`e242eb1`](https://github.com/stdlib-js/stdlib/commit/e242eb1e35da321f0e124a65f1c5e74e9be51dfe) - **feat:** add accessor arrays support to `blas/ext/base/gnansum` [(#5066)](https://github.com/stdlib-js/stdlib/pull/5066) _(by Muhammad Haris)_
-   [`e5a8c65`](https://github.com/stdlib-js/stdlib/commit/e5a8c6593a68bdf3d385fbb4c1d75ba4309bad5d) - **feat:** add accessor arrays support to `blas/ext/base/gcusum` [(#5065)](https://github.com/stdlib-js/stdlib/pull/5065) _(by Muhammad Haris, stdlib-bot)_
-   [`068bbeb`](https://github.com/stdlib-js/stdlib/commit/068bbeb48863fd10ac825a7855192c00121b90ab) - **fix:** update return value and tests for `blas/ext/base/gcusumkbn` [(#5064)](https://github.com/stdlib-js/stdlib/pull/5064) _(by Muhammad Haris)_
-   [`9da9e46`](https://github.com/stdlib-js/stdlib/commit/9da9e464d924bae935b701593e8c7a8cc4377f5c) - **feat:** add accessor arrays support to `blas/ext/base/gnannsumkbn` [(#5023)](https://github.com/stdlib-js/stdlib/pull/5023) _(by Muhammad Haris, Athan Reines)_
-   [`6c90e8f`](https://github.com/stdlib-js/stdlib/commit/6c90e8fa6ad8f6bf254e6479d1a3ece17b5e92da) - **feat:** add accessor arrays support to `blas/ext/base/gcusumpw` [(#5012)](https://github.com/stdlib-js/stdlib/pull/5012) _(by Muhammad Haris)_
-   [`1dd8adf`](https://github.com/stdlib-js/stdlib/commit/1dd8adfd104b90f0b87cd76ce0addbbd6f723aba) - **feat:** add accessor arrays support to `blas/ext/base/gcusumkbn2` [(#5009)](https://github.com/stdlib-js/stdlib/pull/5009) _(by Muhammad Haris, Athan Reines)_
-   [`8310c1f`](https://github.com/stdlib-js/stdlib/commit/8310c1f4054d2ff0ee8b05f1c77b1d3c846a1012) - **feat:** add accessor arrays support to `blas/ext/base/gcusumors` [(#5010)](https://github.com/stdlib-js/stdlib/pull/5010) _(by Muhammad Haris)_
-   [`b74a0f9`](https://github.com/stdlib-js/stdlib/commit/b74a0f949366a73526a7ec849bc6e7fe7f0968eb) - **docs:** update namespace table of contents [(#5062)](https://github.com/stdlib-js/stdlib/pull/5062) _(by stdlib-bot)_
-   [`aa13403`](https://github.com/stdlib-js/stdlib/commit/aa1340357b9da9aaec467703bd0e0d68e4a67d3e) - **docs:** update namespace TypeScript declarations [(#5060)](https://github.com/stdlib-js/stdlib/pull/5060) _(by stdlib-bot)_
-   [`6184c0c`](https://github.com/stdlib-js/stdlib/commit/6184c0cbdfa9216a2b3743a7f52b030cbbbf28b1) - **docs:** update related packages sections [(#5059)](https://github.com/stdlib-js/stdlib/pull/5059) _(by stdlib-bot)_
-   [`a6ba17c`](https://github.com/stdlib-js/stdlib/commit/a6ba17cee3a41741a04312d78ddde029470bf338) - **feat:** add C ndarray API and refactor `blas/ext/base/dsorthp` [(#5018)](https://github.com/stdlib-js/stdlib/pull/5018) _(by Prashant Kumar Yadav, stdlib-bot)_
-   [`d924c8d`](https://github.com/stdlib-js/stdlib/commit/d924c8d2c48611f1c90312877e39bf3e8df063c2) - **feat:** add C ndarray API and refactor `blas/ext/base/dsortins` [(#5028)](https://github.com/stdlib-js/stdlib/pull/5028) _(by Prashant Kumar Yadav, stdlib-bot)_
-   [`ef11834`](https://github.com/stdlib-js/stdlib/commit/ef1183420e6bba80849c12f838aa7eb23c6d7635) - **docs:** update related packages sections [(#5048)](https://github.com/stdlib-js/stdlib/pull/5048) _(by stdlib-bot)_
-   [`367ec2c`](https://github.com/stdlib-js/stdlib/commit/367ec2c5fe4a11f2e9a450ab4b21ea66db002cc2) - **docs:** update namespace TypeScript declarations [(#5039)](https://github.com/stdlib-js/stdlib/pull/5039) _(by stdlib-bot)_
-   [`1d6c6cf`](https://github.com/stdlib-js/stdlib/commit/1d6c6cfd0bd793a8cae042416cc8dc10850f992b) - **docs:** update namespace table of contents [(#5041)](https://github.com/stdlib-js/stdlib/pull/5041) _(by stdlib-bot)_
-   [`6516030`](https://github.com/stdlib-js/stdlib/commit/65160305dccd83c8fbf6f9e011e9f9a13c2c0cf8) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansum` [(#4872)](https://github.com/stdlib-js/stdlib/pull/4872) _(by Muhammad Haris, Athan Reines)_
-   [`a660827`](https://github.com/stdlib-js/stdlib/commit/a660827c0f4b24c28029a8231783c9c7a679f714) - **feat:** add accessor arrays support to `blas/ext/base/gapxsumkbn2` [(#4928)](https://github.com/stdlib-js/stdlib/pull/4928) _(by Muhammad Haris, Athan Reines)_
-   [`5052523`](https://github.com/stdlib-js/stdlib/commit/5052523f838ba96e29282588584cfa02ed83ff8d) - **feat:** add accessor arrays support `blas/ext/base/gapxsumpw` [(#4932)](https://github.com/stdlib-js/stdlib/pull/4932) _(by Muhammad Haris, Athan Reines)_
-   [`419a872`](https://github.com/stdlib-js/stdlib/commit/419a872327435d5d3549cf6de16d1e9766a98e80) - **feat:** add accessor arrays support to `blas/ext/base/gapxsumors` [(#4930)](https://github.com/stdlib-js/stdlib/pull/4930) _(by Muhammad Haris, Athan Reines)_
-   [`c879523`](https://github.com/stdlib-js/stdlib/commit/c87952362d00ce9a096b9d9c6dc0a3e92411856a) - **feat:** add accessor arrays support to `blas/ext/base/gapxsum` [(#4927)](https://github.com/stdlib-js/stdlib/pull/4927) _(by Muhammad Haris)_
-   [`f78899e`](https://github.com/stdlib-js/stdlib/commit/f78899eb1aa02dd8364a544c99743b1c18c2c484) - **feat:** add accessor arrays support to `blas/ext/base/gnansumpw` [(#5037)](https://github.com/stdlib-js/stdlib/pull/5037) _(by Muhammad Haris)_
-   [`6af5789`](https://github.com/stdlib-js/stdlib/commit/6af5789d1be31cb3c5be066d742f3bd924ca705d) - **feat:** add accessor arrays support to `blas/ext/base/gapx` [(#4926)](https://github.com/stdlib-js/stdlib/pull/4926) _(by Muhammad Haris, Athan Reines)_
-   [`97f01ab`](https://github.com/stdlib-js/stdlib/commit/97f01ab3c49115bb526ccdb88bbe8fd07770f17a) - **feat:** add accessor arrays support to `blas/ext/base/gsumkbn2` [(#4960)](https://github.com/stdlib-js/stdlib/pull/4960) _(by Aayush Khanna)_
-   [`1d1e8b7`](https://github.com/stdlib-js/stdlib/commit/1d1e8b724cd26e6d0cd70aec5883844ea3aa8e83) - **refactor:** remove redundant code in accessor functions [(#5014)](https://github.com/stdlib-js/stdlib/pull/5014) _(by Aayush Khanna)_
-   [`9ce3d01`](https://github.com/stdlib-js/stdlib/commit/9ce3d0115c15027d2d971f8ea22950aa5b6774c5) - **feat:** add accessor arrays support to `blas/ext/base/gnansumors` [(#5036)](https://github.com/stdlib-js/stdlib/pull/5036) _(by Muhammad Haris, Athan Reines)_
-   [`6f8898d`](https://github.com/stdlib-js/stdlib/commit/6f8898dbad41926bd7d03efc778e3a9a23742220) - **feat:** add accessor arrays support to `blas/ext/base/gnansumkbn2` [(#5034)](https://github.com/stdlib-js/stdlib/pull/5034) _(by Muhammad Haris)_
-   [`2e66bec`](https://github.com/stdlib-js/stdlib/commit/2e66becd6ee0876f1ee00c55506a369bec2d7f7a) - **feat:** add accessor arrays support to `blas/ext/base/gnansumkbn` [(#5032)](https://github.com/stdlib-js/stdlib/pull/5032) _(by Muhammad Haris)_
-   [`feb71c7`](https://github.com/stdlib-js/stdlib/commit/feb71c7f3eb1875c1f654b8c8a791fe1ea9a0bb8) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sdsapxsum` [(#4885)](https://github.com/stdlib-js/stdlib/pull/4885) _(by Muhammad Haris)_
-   [`e85fab1`](https://github.com/stdlib-js/stdlib/commit/e85fab1411db8fc69df853740872de2f1387237c) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sdssum` [(#4873)](https://github.com/stdlib-js/stdlib/pull/4873) _(by Muhammad Haris)_
-   [`291d653`](https://github.com/stdlib-js/stdlib/commit/291d653c5f5dfb48cb4c65db6a352c19965a38b6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssum` [(#4871)](https://github.com/stdlib-js/stdlib/pull/4871) _(by Muhammad Haris)_
-   [`9c66f54`](https://github.com/stdlib-js/stdlib/commit/9c66f540e94405d3f8a3c97677274012b0478174) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumkbn2` [(#4870)](https://github.com/stdlib-js/stdlib/pull/4870) _(by Muhammad Haris)_
-   [`2f8eeb1`](https://github.com/stdlib-js/stdlib/commit/2f8eeb11a7228465d62f83caeb36177ed5bf11fa) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sdsnansum` [(#4882)](https://github.com/stdlib-js/stdlib/pull/4882) _(by Muhammad Haris)_
-   [`4ca8f05`](https://github.com/stdlib-js/stdlib/commit/4ca8f05752dd4751319db6d876eb4107ec682e45) - **docs:** update examples of `blas/base/cswap` [(#5007)](https://github.com/stdlib-js/stdlib/pull/5007) _(by Gururaj Gurram)_
-   [`56aeda8`](https://github.com/stdlib-js/stdlib/commit/56aeda837a38b2db883b1815f7261f2f192bd0ff) - **docs:** update namespace TypeScript declarations [(#5003)](https://github.com/stdlib-js/stdlib/pull/5003) _(by stdlib-bot)_
-   [`4bbd4bd`](https://github.com/stdlib-js/stdlib/commit/4bbd4bdc49ac6d5df7904c3e47810a455b1912bd) - **feat:** add accessor arrays support to `blas/ext/base/gcusumkbn` [(#4959)](https://github.com/stdlib-js/stdlib/pull/4959) _(by Muhammad Haris, Athan Reines)_
-   [`f3cc847`](https://github.com/stdlib-js/stdlib/commit/f3cc847524d28e24a95c04a5c0328f5a09a167c5) - **feat:** add accessor arrays support to `blas/ext/base/gasumpw` [(#4958)](https://github.com/stdlib-js/stdlib/pull/4958) _(by Muhammad Haris)_
-   [`99b9273`](https://github.com/stdlib-js/stdlib/commit/99b9273752c85e3a322ea18dfa60bb7632478fc5) - **docs:** update examples for `blas/base/csrot` [(#4963)](https://github.com/stdlib-js/stdlib/pull/4963) _(by Gururaj Gurram)_
-   [`3665b8b`](https://github.com/stdlib-js/stdlib/commit/3665b8b914466e475cfc8aa2a72bc6068ee0a5e8) - **docs:** use correct types in `blas/ext/base/gsumkbn` [(#4961)](https://github.com/stdlib-js/stdlib/pull/4961) _(by Aayush Khanna)_
-   [`14f3f1a`](https://github.com/stdlib-js/stdlib/commit/14f3f1af0988577680efc92522bb9a45a2cbd46b) - **feat:** update namespace TypeScript declarations _(by stdlib-bot)_
-   [`cbf1382`](https://github.com/stdlib-js/stdlib/commit/cbf1382a4cad52ed7c30d74282eb9a75474d32e6) - **docs:** update related packages sections [(#4964)](https://github.com/stdlib-js/stdlib/pull/4964) _(by stdlib-bot)_
-   [`db41c3d`](https://github.com/stdlib-js/stdlib/commit/db41c3de2df08f29821cb766c141f33f5d165e4f) - **docs:** update namespace table of contents [(#4965)](https://github.com/stdlib-js/stdlib/pull/4965) _(by stdlib-bot)_
-   [`3f3edff`](https://github.com/stdlib-js/stdlib/commit/3f3edffe817993b5668fd72c81e8c677bc895d14) - **feat:** add support for accessor arrays in `blas/ext/base/gsumkbn` [(#4923)](https://github.com/stdlib-js/stdlib/pull/4923) _(by Aayush Khanna)_
-   [`7456e9f`](https://github.com/stdlib-js/stdlib/commit/7456e9f877610353d1d91969bd7cd30e3ef211c8) - **refactor:** update `blas/base/gsum` to follow current project conventions [(#4924)](https://github.com/stdlib-js/stdlib/pull/4924) _(by Aayush Khanna)_
-   [`48f82a2`](https://github.com/stdlib-js/stdlib/commit/48f82a28d92c8fb065770860b65e1377a00a6e3b) - **docs:** update examples for `blas/base/cscal` [(#4942)](https://github.com/stdlib-js/stdlib/pull/4942) _(by Gururaj Gurram)_
-   [`9f88c8c`](https://github.com/stdlib-js/stdlib/commit/9f88c8cecfa7e8d67aa05a6419f2d4efd73943ff) - **docs:** update examples for `blas/base/caxpy` [(#4925)](https://github.com/stdlib-js/stdlib/pull/4925) _(by Gururaj Gurram)_
-   [`906a39e`](https://github.com/stdlib-js/stdlib/commit/906a39eec07e9c9550f6ab43197e1f75922fd920) - **feat:** add accessor arrays support to `blas/ext/base/gapxsumkbn` [(#4888)](https://github.com/stdlib-js/stdlib/pull/4888) _(by Muhammad Haris)_
-   [`06f12ee`](https://github.com/stdlib-js/stdlib/commit/06f12ee398117751359df854c9edf9e6074e1b5c) - **feat:** add support for accessor arrays in `blas/ext/base/gsumpw` [(#4859)](https://github.com/stdlib-js/stdlib/pull/4859) _(by Aayush Khanna, Athan Reines)_
-   [`cce206a`](https://github.com/stdlib-js/stdlib/commit/cce206a829b141a987e5b24c60abcfcaed32894a) - **docs:** update namespace TypeScript declarations [(#4877)](https://github.com/stdlib-js/stdlib/pull/4877) _(by stdlib-bot)_
-   [`3dbeed6`](https://github.com/stdlib-js/stdlib/commit/3dbeed658ab2b61d448847dfed5ea3d2e91e2f99) - **docs:** update namespace table of contents [(#4879)](https://github.com/stdlib-js/stdlib/pull/4879) _(by stdlib-bot)_
-   [`1e28982`](https://github.com/stdlib-js/stdlib/commit/1e28982e44845cb8a7bc45c05fac896a5d28d18d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumkbn` [(#4851)](https://github.com/stdlib-js/stdlib/pull/4851) _(by Muhammad Haris, Athan Reines)_
-   [`0112c32`](https://github.com/stdlib-js/stdlib/commit/0112c32c3b97b681d32915a72d5dc4b5a3f7be31) - **feat:** add C `ndarray` API and refactor `blas/ext/sdsnansumpw` [(#4821)](https://github.com/stdlib-js/stdlib/pull/4821) _(by Muhammad Haris, Athan Reines)_
-   [`a0fed4b`](https://github.com/stdlib-js/stdlib/commit/a0fed4bc22ae6098d4366f1d43fb4ed263f4c235) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sdssumpw` [(#4823)](https://github.com/stdlib-js/stdlib/pull/4823) _(by Muhammad Haris)_
-   [`b358161`](https://github.com/stdlib-js/stdlib/commit/b35816126979042a3a33446b8ab64d6ff0e8c68a) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumkbn` [(#4834)](https://github.com/stdlib-js/stdlib/pull/4834) _(by Muhammad Haris)_
-   [`edcbd07`](https://github.com/stdlib-js/stdlib/commit/edcbd07c090a97f6aaacd7e42c288e7685716994) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sdsapxsumpw` [(#4815)](https://github.com/stdlib-js/stdlib/pull/4815) _(by Muhammad Haris, Athan Reines)_
-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - **feat:** update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856) _(by stdlib-bot)_
-   [`15204d7`](https://github.com/stdlib-js/stdlib/commit/15204d79d9a8dfeb4c520e6948813f29972e0aa2) - **docs:** update namespace table of contents [(#4858)](https://github.com/stdlib-js/stdlib/pull/4858) _(by stdlib-bot)_
-   [`8bef034`](https://github.com/stdlib-js/stdlib/commit/8bef0343d2b8fc61121bafa7224320804b9e5932) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumkbn2` [(#4846)](https://github.com/stdlib-js/stdlib/pull/4846) _(by Muhammad Haris)_
-   [`7560ab3`](https://github.com/stdlib-js/stdlib/commit/7560ab3b55a8dfca4d494ea806f392b44fd93d09) - **refactor:** avoid temporary complex number instantiation _(by Athan Reines)_
-   [`54148e1`](https://github.com/stdlib-js/stdlib/commit/54148e18d543531ecfa547d752eb4f252d8e51f5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/srev` [(#4848)](https://github.com/stdlib-js/stdlib/pull/4848) _(by Muhammad Haris, Athan Reines)_
-   [`c97212e`](https://github.com/stdlib-js/stdlib/commit/c97212e122c2d20800469913282d9df791fcebf2) - **refactor:** avoid complex number instantiation _(by Athan Reines)_
-   [`305beea`](https://github.com/stdlib-js/stdlib/commit/305beea04159cc7ee113442662a2694c14919f19) - **refactor:** use `complex/float64/base/scale` _(by Athan Reines)_
-   [`63bb1c5`](https://github.com/stdlib-js/stdlib/commit/63bb1c5e4287293c7a7fcbcb5e1539b9d2891895) - **docs:** update related packages sections [(#4842)](https://github.com/stdlib-js/stdlib/pull/4842) _(by stdlib-bot, Athan Reines)_
-   [`8e8437c`](https://github.com/stdlib-js/stdlib/commit/8e8437c92781ac1873dc5df96daae1ef17a2ce1f) - **feat:** update namespace TypeScript declarations [(#4843)](https://github.com/stdlib-js/stdlib/pull/4843) _(by stdlib-bot)_
-   [`399942d`](https://github.com/stdlib-js/stdlib/commit/399942d86d04b5b5aba4e41d6957f3089ad58ab1) - **docs:** update examples for `blas/base/ccopy` [(#4836)](https://github.com/stdlib-js/stdlib/pull/4836) _(by Gururaj Gurram, Athan Reines)_
-   [`902977d`](https://github.com/stdlib-js/stdlib/commit/902977d7e637a7dfb1704fc4caa8fc3913d3246d) - **docs:** update related packages sections [(#4825)](https://github.com/stdlib-js/stdlib/pull/4825) _(by stdlib-bot)_
-   [`c33e77a`](https://github.com/stdlib-js/stdlib/commit/c33e77afcecf3ff1290791f4e521ad240b0500b7) - **docs:** update namespace table of contents [(#4819)](https://github.com/stdlib-js/stdlib/pull/4819) _(by stdlib-bot)_
-   [`20b9402`](https://github.com/stdlib-js/stdlib/commit/20b940262ef8f8f01a640a481636808f5213e039) - **docs:** update namespace TypeScript declaration comments [(#4817)](https://github.com/stdlib-js/stdlib/pull/4817) _(by stdlib-bot)_
-   [`6560077`](https://github.com/stdlib-js/stdlib/commit/6560077508ae3c79fbe9ba1e2f90ec6f5e610db8) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumpw` [(#4814)](https://github.com/stdlib-js/stdlib/pull/4814) _(by Muhammad Haris, Athan Reines)_
-   [`2ea4452`](https://github.com/stdlib-js/stdlib/commit/2ea4452fa0f63499be526f392fa7fdd647d1a9b5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapx` [(#4696)](https://github.com/stdlib-js/stdlib/pull/4696) _(by Muhammad Haris, Athan Reines)_
-   [`036fccd`](https://github.com/stdlib-js/stdlib/commit/036fccd5c53531a64ca81e8c4c0818d5f03ac411) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsum` [(#4812)](https://github.com/stdlib-js/stdlib/pull/4812) _(by Muhammad Haris)_
-   [`a1edb83`](https://github.com/stdlib-js/stdlib/commit/a1edb830ac6e7bb3297bddd7b5bcd4e34a51eee3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumors` [(#4813)](https://github.com/stdlib-js/stdlib/pull/4813) _(by Muhammad Haris)_
-   [`0eac1eb`](https://github.com/stdlib-js/stdlib/commit/0eac1ebde891ba75b8c4939119a6c4b7c88ceed8) - **feat:** update namespace TypeScript declarations [(#4809)](https://github.com/stdlib-js/stdlib/pull/4809) _(by stdlib-bot)_
-   [`21c2f38`](https://github.com/stdlib-js/stdlib/commit/21c2f3822dd61cce49ec0e38ea0add2b91006162) - **docs:** update namespace table of contents [(#4811)](https://github.com/stdlib-js/stdlib/pull/4811) _(by stdlib-bot)_
-   [`4b88dd6`](https://github.com/stdlib-js/stdlib/commit/4b88dd6a4fc83d387ea60a0b129bdaf53bc8c184) - **feat:** add `blas/base/zdscal` [(#4738)](https://github.com/stdlib-js/stdlib/pull/4738) _(by Ricky Reusser, Athan Reines)_
-   [`c1d2e88`](https://github.com/stdlib-js/stdlib/commit/c1d2e88ef9f39de380cc3f561cb905e013f00587) - **test:** update test-cases for stride handling in `blas/ext/base/gapxsum` [(#4801)](https://github.com/stdlib-js/stdlib/pull/4801) _(by Muhammad Haris)_
-   [`984dc38`](https://github.com/stdlib-js/stdlib/commit/984dc3890e96494a37e085efc4ee0d2bd09ad9bd) - **refactor:** update `blas/ext/base/gcusumkbn2` to follow current project conventions [(#4436)](https://github.com/stdlib-js/stdlib/pull/4436) _(by Muhammad Haris)_
-   [`897aa61`](https://github.com/stdlib-js/stdlib/commit/897aa61d3548b7dceec551b64dd353d506bb307b) - **refactor:** update `blas/ext/base/gcusum` to follow current project conventions [(#4435)](https://github.com/stdlib-js/stdlib/pull/4435) _(by Muhammad Haris, Athan Reines)_
-   [`c0a0110`](https://github.com/stdlib-js/stdlib/commit/c0a0110f91f4b6f2bef48d73c3a539d03f9dec9c) - **refactor:** update `blas/ext/base/gcusumpw` to follow current project conventions [(#4551)](https://github.com/stdlib-js/stdlib/pull/4551) _(by Muhammad Haris, Athan Reines)_
-   [`3d551c4`](https://github.com/stdlib-js/stdlib/commit/3d551c499345de88a1e897c26977cde8d5f263a9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn` [(#4714)](https://github.com/stdlib-js/stdlib/pull/4714) _(by Muhammad Haris, stdlib-bot)_
-   [`ffc3cf0`](https://github.com/stdlib-js/stdlib/commit/ffc3cf0d42d14e1f1d9de30577bb0bb80603be29) - **refactor:** update `blas/ext/base/gsumkbn` to follow current project conventions [(#4677)](https://github.com/stdlib-js/stdlib/pull/4677) _(by Muhammad Haris)_
-   [`678f294`](https://github.com/stdlib-js/stdlib/commit/678f294c5f9cc5b9e89b38e1e6e1736d3c4b621c) - **refactor:** update `blas/ext/base/gapxsum` to follow current project conventions [(#4348)](https://github.com/stdlib-js/stdlib/pull/4348) _(by Muhammad Haris, Athan Reines)_
-   [`8e4ef81`](https://github.com/stdlib-js/stdlib/commit/8e4ef81d340f7a9ab87b23569f05496ff070f8cb) - **refactor:** update `blas/ext/base/gapx` to follow current project conventions [(#4347)](https://github.com/stdlib-js/stdlib/pull/4347) _(by Muhammad Haris)_
-   [`4cc5a5b`](https://github.com/stdlib-js/stdlib/commit/4cc5a5b0170c928b2663858eddf9f24190c703f1) - **refactor:** update `blas/ext/base/gasumpw` to follow current project conventions [(#4384)](https://github.com/stdlib-js/stdlib/pull/4384) _(by Muhammad Haris)_
-   [`69e8243`](https://github.com/stdlib-js/stdlib/commit/69e82436345b2556a4e494fca32a038735af0afa) - **refactor:** update `blas/ext/base/gapxsumpw` to follow current project conventions [(#4382)](https://github.com/stdlib-js/stdlib/pull/4382) _(by Muhammad Haris)_
-   [`64846e4`](https://github.com/stdlib-js/stdlib/commit/64846e48c83b76227004369d36654c59d6f76aae) - **refactor:** update `blas/ext/base/gapxsumkbn2` to follow current project conventions [(#4378)](https://github.com/stdlib-js/stdlib/pull/4378) _(by Muhammad Haris, Athan Reines)_
-   [`04c416e`](https://github.com/stdlib-js/stdlib/commit/04c416e031e2655eb6303e1aeda40a460dab4134) - **refactor:** update `blas/ext/base/gapxsumors` to follow current project conventions [(#4381)](https://github.com/stdlib-js/stdlib/pull/4381) _(by Muhammad Haris, Athan Reines)_
-   [`6641a29`](https://github.com/stdlib-js/stdlib/commit/6641a29ca92ada4779b1a55d5c681cf375eae791) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusum` [(#4799)](https://github.com/stdlib-js/stdlib/pull/4799) _(by Muhammad Haris)_
-   [`1fa205c`](https://github.com/stdlib-js/stdlib/commit/1fa205cc4a6002a53be6fda15006749a0e18eeec) - **feat:** add support for accessor arrays _(by Athan Reines)_
-   [`e09860d`](https://github.com/stdlib-js/stdlib/commit/e09860df82de288c68c2e90f9ac8727caba3d7fd) - **fix:** update type definitions to support accessor arrays _(by Athan Reines)_
-   [`c217016`](https://github.com/stdlib-js/stdlib/commit/c217016730b128f5a0beb06e28f28d671040ab97) - **refactor:** update `blas/ext/base/gfill-by` to follow current project conventions [(#4553)](https://github.com/stdlib-js/stdlib/pull/4553) _(by Muhammad Haris, Athan Reines)_
-   [`b5162a4`](https://github.com/stdlib-js/stdlib/commit/b5162a4e01171af062b711f4be105a4e4a24fb8b) - **refactor:** update `blas/ext/base/gfill` to follow current project conventions [(#4552)](https://github.com/stdlib-js/stdlib/pull/4552) _(by Muhammad Haris)_
-   [`fb901fb`](https://github.com/stdlib-js/stdlib/commit/fb901fb3b51f47c79c0fae95afe75be9cb198b2a) - **docs:** update namespace table of contents [(#4796)](https://github.com/stdlib-js/stdlib/pull/4796) _(by stdlib-bot)_
-   [`22a3dcf`](https://github.com/stdlib-js/stdlib/commit/22a3dcfe916b7f5c979d6ee93045d37add5d685d) - **docs:** update namespace TypeScript declaration comments [(#4794)](https://github.com/stdlib-js/stdlib/pull/4794) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7aa7851`](https://github.com/stdlib-js/stdlib/commit/7aa785142a77891dfa757fb0981966345a3b65f9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumpw` [(#4747)](https://github.com/stdlib-js/stdlib/pull/4747) _(by Muhammad Haris, Athan Reines)_
-   [`04950f3`](https://github.com/stdlib-js/stdlib/commit/04950f32082d53f9dc2fa114c3885a69c02e3246) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumkbn2` [(#4730)](https://github.com/stdlib-js/stdlib/pull/4730) _(by Muhammad Haris, Athan Reines)_
-   [`aca04f8`](https://github.com/stdlib-js/stdlib/commit/aca04f8b4bd9c850d9b66a253647bac5b84c63fb) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumkbn` [(#4782)](https://github.com/stdlib-js/stdlib/pull/4782) _(by Muhammad Haris)_
-   [`8582e3f`](https://github.com/stdlib-js/stdlib/commit/8582e3f3ab1f6bb233df00cafe362954fefe24de) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sasumpw` [(#4764)](https://github.com/stdlib-js/stdlib/pull/4764) _(by Muhammad Haris, Athan Reines)_
-   [`3ca8ed8`](https://github.com/stdlib-js/stdlib/commit/3ca8ed8f2fb388fcf6890322f6f880c30fd6094e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/scusumkbn2` [(#4788)](https://github.com/stdlib-js/stdlib/pull/4788) _(by Muhammad Haris, Athan Reines)_
-   [`318ba82`](https://github.com/stdlib-js/stdlib/commit/318ba8201aedcc62f9717c216666964414be0864) - **docs:** update related packages sections [(#4784)](https://github.com/stdlib-js/stdlib/pull/4784) _(by stdlib-bot)_
-   [`efadfe5`](https://github.com/stdlib-js/stdlib/commit/efadfe575cea2d97f30b2994691c5a7c43e8d838) - **bench:** refactor array generation _(by Athan Reines)_
-   [`3d97ce8`](https://github.com/stdlib-js/stdlib/commit/3d97ce8fc13ec47c60a4698ba2668e6330c125ea) - **bench:** measure performance on generic arrays _(by Athan Reines)_
-   [`88696eb`](https://github.com/stdlib-js/stdlib/commit/88696ebda08b52c7a5e2a64680c75e3c5b113792) - **docs:** update require path _(by Athan Reines)_
-   [`46e3e8c`](https://github.com/stdlib-js/stdlib/commit/46e3e8c0bfaae55d9bf70763c6af5bff7094076b) - **docs:** update require path _(by Athan Reines)_
-   [`22cd928`](https://github.com/stdlib-js/stdlib/commit/22cd9281bd0197a555ad3c577665bbb15696119e) - **docs:** update require path _(by Athan Reines)_
-   [`dfb4d35`](https://github.com/stdlib-js/stdlib/commit/dfb4d358b0ff1905f34f0a1552feeac26e9f88ba) - **docs:** update namespace table of contents [(#4760)](https://github.com/stdlib-js/stdlib/pull/4760) _(by stdlib-bot)_
-   [`5ef1f55`](https://github.com/stdlib-js/stdlib/commit/5ef1f55b06a5ba1c096eb0ad6b07287344266bec) - **docs:** update related packages sections [(#4757)](https://github.com/stdlib-js/stdlib/pull/4757) _(by stdlib-bot)_
-   [`6028758`](https://github.com/stdlib-js/stdlib/commit/6028758df442105f1ac0d4240450c96cf3ad4032) - **docs:** update namespace TypeScript declaration comments [(#4758)](https://github.com/stdlib-js/stdlib/pull/4758) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a393090`](https://github.com/stdlib-js/stdlib/commit/a3930905a569573b8861d59e2a0b09e3f80a9831) - **feat:** add C `ndarray` API and refactor `blas/ext/base/sapxsumors` [(#4746)](https://github.com/stdlib-js/stdlib/pull/4746) _(by Muhammad Haris, Athan Reines)_
-   [`02cbff3`](https://github.com/stdlib-js/stdlib/commit/02cbff35d876dcea7efd41794f414c7df5eddca4) - **refactor:** update `blas/ext/base/dapx` to follow current project conventions [(#4737)](https://github.com/stdlib-js/stdlib/pull/4737) _(by Muhammad Haris)_
-   [`3d9c97f`](https://github.com/stdlib-js/stdlib/commit/3d9c97f44999496954f47fac902e4d67aed03425) - **fix:** add `math/base/speical/abs` in manifest.json of `blas/ext/base/dapxsumkbn` [(#4732)](https://github.com/stdlib-js/stdlib/pull/4732) _(by Aayush Khanna)_
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`ea9e425`](https://github.com/stdlib-js/stdlib/commit/ea9e42538dd6342bf5c02c2d7c68aa1eae3b15d6) - **refactor:** update `blas/ext/base/grev` to follow current project conventions [(#4659)](https://github.com/stdlib-js/stdlib/pull/4659) _(by Muhammad Haris)_
-   [`53c0427`](https://github.com/stdlib-js/stdlib/commit/53c0427db5f49ab6209c55941ff15270a3569d44) - **refactor:** update `blas/ext/base/gcusumors` to follow current project conventions [(#4453)](https://github.com/stdlib-js/stdlib/pull/4453) _(by Muhammad Haris, Athan Reines)_
-   [`dbb338e`](https://github.com/stdlib-js/stdlib/commit/dbb338e80336515e9f7ef602188985bbbe9b9010) - **docs:** update related packages sections [(#4690)](https://github.com/stdlib-js/stdlib/pull/4690) _(by stdlib-bot)_
-   [`09b5945`](https://github.com/stdlib-js/stdlib/commit/09b5945ae5fedad2de3f3154c599868b8414967d) - **docs:** update namespace TypeScript declaration comments [(#4691)](https://github.com/stdlib-js/stdlib/pull/4691) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ba7f732`](https://github.com/stdlib-js/stdlib/commit/ba7f7328fc7fe6e2049f79421f152303daa1f290) - **docs:** update namespace table of contents [(#4693)](https://github.com/stdlib-js/stdlib/pull/4693) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bb638df`](https://github.com/stdlib-js/stdlib/commit/bb638df38852d5ba3e341e9d607a0900a5d55723) - **refactor:** update `blas/ext/base/gnannsumkbn` to follow current project conventions [(#4631)](https://github.com/stdlib-js/stdlib/pull/4631) _(by Muhammad Haris)_
-   [`0639c11`](https://github.com/stdlib-js/stdlib/commit/0639c11f0aac69a249c9710c9031e4f9cec14f62) - **refactor:** update `blas/ext/base/gsumkbn2` to follow current project conventions [(#4678)](https://github.com/stdlib-js/stdlib/pull/4678) _(by Muhammad Haris)_
-   [`c36f0e7`](https://github.com/stdlib-js/stdlib/commit/c36f0e73214c70c686defbaf5adc2d3e86a6595b) - **refactor:** update `blas/ext/base/gsumors` to follow current project conventions [(#4679)](https://github.com/stdlib-js/stdlib/pull/4679) _(by Muhammad Haris)_
-   [`dbade8e`](https://github.com/stdlib-js/stdlib/commit/dbade8ed06df1ad8cef3ecf6c1f1f729ad62a53c) - **refactor:** update `blas/ext/base/gsumpw` to follow current project conventions [(#4680)](https://github.com/stdlib-js/stdlib/pull/4680) _(by Muhammad Haris)_
-   [`76642bf`](https://github.com/stdlib-js/stdlib/commit/76642bf477c7431527bdeef8b979e92e8d93e6bb) - **docs:** update namespace table of contents [(#4658)](https://github.com/stdlib-js/stdlib/pull/4658) _(by stdlib-bot)_
-   [`1d7a2df`](https://github.com/stdlib-js/stdlib/commit/1d7a2dfcb1cb9bae13f6ecd63aca3c4741433d29) - **docs:** update namespace TypeScript declarations [(#4656)](https://github.com/stdlib-js/stdlib/pull/4656) _(by stdlib-bot)_
-   [`074b9a1`](https://github.com/stdlib-js/stdlib/commit/074b9a191c77d297bab5cb51cf82a727a650fe58) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumpw` [(#4329)](https://github.com/stdlib-js/stdlib/pull/4329) _(by Muhammad Haris)_
-   [`21006f2`](https://github.com/stdlib-js/stdlib/commit/21006f2b89ee26106054fb7895792c09f1f3fc7e) - **docs:** fix examples require path for `blas/ext/base/gnansumpw` [(#4642)](https://github.com/stdlib-js/stdlib/pull/4642) _(by Muhammad Haris)_
-   [`0892e11`](https://github.com/stdlib-js/stdlib/commit/0892e116e96a8145f6d566e58bc6cff0d20ae3f2) - **refactor:** update `blas/ext/base/gnansumors` to follow current project conventions [(#4640)](https://github.com/stdlib-js/stdlib/pull/4640) _(by Muhammad Haris, Athan Reines)_
-   [`a6a0193`](https://github.com/stdlib-js/stdlib/commit/a6a019330f3ef2ab111a56dc060f232bf6716e32) - **refactor:** update `blas/ext/base/gnansum` to follow current project conventions [(#4639)](https://github.com/stdlib-js/stdlib/pull/4639) _(by Muhammad Haris, Athan Reines)_
-   [`86d1379`](https://github.com/stdlib-js/stdlib/commit/86d1379bcadc1736b92d507ce6ea03c58c24b1d3) - **refactor:** update `blas/ext/base/gnansumpw` to follow current project conventions [(#4641)](https://github.com/stdlib-js/stdlib/pull/4641) _(by Muhammad Haris)_
-   [`2cd9a7e`](https://github.com/stdlib-js/stdlib/commit/2cd9a7e46e14388370c455983f91d6ef949bf3a4) - **refactor:** update `blas/ext/base/gnansumkbn2` to follow current project conventions [(#4634)](https://github.com/stdlib-js/stdlib/pull/4634) _(by Muhammad Haris)_
-   [`e7febbb`](https://github.com/stdlib-js/stdlib/commit/e7febbb12a07c4040dcef0710f0efee4a4f38797) - **refactor:** update `blas/ext/base/gnansumkbn` to follow current project conventions [(#4632)](https://github.com/stdlib-js/stdlib/pull/4632) _(by Muhammad Haris)_
-   [`a13b924`](https://github.com/stdlib-js/stdlib/commit/a13b924cf236742b407bb6dc137eef194fdfd88f) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumors` [(#4320)](https://github.com/stdlib-js/stdlib/pull/4320) _(by Muhammad Haris, Athan Reines)_
-   [`563a4f8`](https://github.com/stdlib-js/stdlib/commit/563a4f826ab757636ae08094fc6f62746042da4b) - **docs:** update related packages sections [(#4594)](https://github.com/stdlib-js/stdlib/pull/4594) _(by stdlib-bot)_
-   [`f231799`](https://github.com/stdlib-js/stdlib/commit/f231799e1d40cfff7ceb79a6074166a08c4ba072) - **docs:** update related packages sections [(#4545)](https://github.com/stdlib-js/stdlib/pull/4545) _(by stdlib-bot)_
-   [`321e49e`](https://github.com/stdlib-js/stdlib/commit/321e49e9965648f1b5eb6a840fe454959af0ec49) - **docs:** add missing periods to list items _(by Philipp Burckhardt)_
-   [`3cd2abf`](https://github.com/stdlib-js/stdlib/commit/3cd2abf7c694c28a32c13b4702d2e12dced5cc36) - **docs:** update namespace table of contents [(#4489)](https://github.com/stdlib-js/stdlib/pull/4489) _(by stdlib-bot)_
-   [`133c539`](https://github.com/stdlib-js/stdlib/commit/133c5394889b68952968cd6f4ff192f9692deb9f) - **docs:** update namespace TypeScript declaration comments [(#4487)](https://github.com/stdlib-js/stdlib/pull/4487) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d0c4941`](https://github.com/stdlib-js/stdlib/commit/d0c49411dbdee17017f411ca1c2d1acd0e4ccca9) - **refactor:** update `blas/ext/base/gapxsumkbn` to follow current project conventions [(#4358)](https://github.com/stdlib-js/stdlib/pull/4358) _(by Muhammad Haris, Athan Reines)_
-   [`464e2cc`](https://github.com/stdlib-js/stdlib/commit/464e2cc9a3bb6430d7397db2e70c62b0ca275f09) - **refactor:** update `blas/ext/base/gcusumkbn` to follow current project conventions [(#4412)](https://github.com/stdlib-js/stdlib/pull/4412) _(by Muhammad Haris, Athan Reines)_
-   [`090e47b`](https://github.com/stdlib-js/stdlib/commit/090e47b8d61456a35d74abcb39467e107d34ebe5) - **style:** remove decimals _(by Athan Reines)_
-   [`94c28dd`](https://github.com/stdlib-js/stdlib/commit/94c28dd762780658f66507d0912e35bdcbcff573) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumkbn2` [(#4316)](https://github.com/stdlib-js/stdlib/pull/4316) _(by Muhammad Haris, Athan Reines)_
-   [`b6ba484`](https://github.com/stdlib-js/stdlib/commit/b6ba4845ebbddc5d2b76fb24e4ac036e2ef35102) - **docs:** update namespace table of contents [(#4448)](https://github.com/stdlib-js/stdlib/pull/4448) _(by stdlib-bot)_
-   [`c7ef80e`](https://github.com/stdlib-js/stdlib/commit/c7ef80ec0563a02728f398d31ccd05bc91055cdc) - **docs:** update namespace TypeScript declarations [(#4446)](https://github.com/stdlib-js/stdlib/pull/4446) _(by stdlib-bot)_
-   [`e373bc9`](https://github.com/stdlib-js/stdlib/commit/e373bc91929cd46d5ed9a520cef9bfd5dcbb04c9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsum` [(#4312)](https://github.com/stdlib-js/stdlib/pull/4312) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`99388d1`](https://github.com/stdlib-js/stdlib/commit/99388d1aeabe238c519707b8e08843a4bdeb04d4) - **test:** fix grammar in descriptions _(by Athan Reines)_
-   [`9000841`](https://github.com/stdlib-js/stdlib/commit/9000841dbe1534a4b1984975068101a641383840) - **style:** fix decimals _(by Athan Reines)_
-   [`f78ae7b`](https://github.com/stdlib-js/stdlib/commit/f78ae7b4ed12879282a4e9c20e6c7b5baf2d6e39) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssum` [(#4262)](https://github.com/stdlib-js/stdlib/pull/4262) _(by Muhammad Haris)_
-   [`0d8ee2d`](https://github.com/stdlib-js/stdlib/commit/0d8ee2dd2425d7414487f65940dfc4c25c79ad1d) - **docs:** update related packages sections [(#4334)](https://github.com/stdlib-js/stdlib/pull/4334) _(by stdlib-bot)_
-   [`cb750b6`](https://github.com/stdlib-js/stdlib/commit/cb750b6d8686990b958c9f62905dd236c86f98c6) - **docs:** fix C examples in `blas/ext/base/dsumkbn` [(#4315)](https://github.com/stdlib-js/stdlib/pull/4315) _(by Muhammad Haris)_
-   [`a6f3921`](https://github.com/stdlib-js/stdlib/commit/a6f3921560705503dcb5ee2575dd2f11417f58fb) - **docs:** update related packages sections [(#4242)](https://github.com/stdlib-js/stdlib/pull/4242) _(by stdlib-bot, Athan Reines)_
-   [`dfc908c`](https://github.com/stdlib-js/stdlib/commit/dfc908c6bc6fd95ec99c86e3b5c13b6fc7a0cf81) - **docs:** update namespace TypeScript declarations [(#4243)](https://github.com/stdlib-js/stdlib/pull/4243) _(by stdlib-bot)_
-   [`9228eef`](https://github.com/stdlib-js/stdlib/commit/9228eef3aea9350937b07e9c8a5fd33145ee45d6) - **docs:** update namespace table of contents [(#4245)](https://github.com/stdlib-js/stdlib/pull/4245) _(by stdlib-bot)_
-   [`c351e4b`](https://github.com/stdlib-js/stdlib/commit/c351e4b399c6d5c791e46db4cdfba9ce762d9548) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumors` [(#3955)](https://github.com/stdlib-js/stdlib/pull/3955) _(by Snehil Shah, Athan Reines)_
-   [`f9fce59`](https://github.com/stdlib-js/stdlib/commit/f9fce5904d09fc2f61c1d7c21d26e59f7de17420) - **docs:** update related packages sections [(#4212)](https://github.com/stdlib-js/stdlib/pull/4212) _(by stdlib-bot)_
-   [`cc8daaf`](https://github.com/stdlib-js/stdlib/commit/cc8daaf165f6426ba2b1d7edd68ff3e8f3d74478) - **fix:** update include path _(by Athan Reines)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`d3d3d14`](https://github.com/stdlib-js/stdlib/commit/d3d3d14939ac77ab7d5a4476551108f8ff1c3f1f) - **docs:** update related packages sections [(#4149)](https://github.com/stdlib-js/stdlib/pull/4149) _(by stdlib-bot, Philipp Burckhardt)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`2ea848b`](https://github.com/stdlib-js/stdlib/commit/2ea848b62b686e1e9d861f7df25ece23a7d80798) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`6a0d6b8`](https://github.com/stdlib-js/stdlib/commit/6a0d6b861f8e2079a501ca4e46a9175440eedb46) - **style:** update to use tabs for indentation _(by Philipp Burckhardt)_
-   [`8684eb4`](https://github.com/stdlib-js/stdlib/commit/8684eb429498a239bff9bdd72f443dd1cd981552) - **docs:** update related packages sections [(#4114)](https://github.com/stdlib-js/stdlib/pull/4114) _(by stdlib-bot, Athan Reines)_
-   [`2222d50`](https://github.com/stdlib-js/stdlib/commit/2222d505c97a6c4f8acf89bdb3aae6f504589e04) - **fix:** update include path and refactor addon _(by Athan Reines)_
-   [`c322b66`](https://github.com/stdlib-js/stdlib/commit/c322b6647751b73a9d0fe12bf5665e8e2243d4ca) - **docs:** update related packages sections [(#4070)](https://github.com/stdlib-js/stdlib/pull/4070) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8bf8285`](https://github.com/stdlib-js/stdlib/commit/8bf8285aba0ecbd00ae145c4c5c098cd28135814) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`b20a9e6`](https://github.com/stdlib-js/stdlib/commit/b20a9e616e5d04cfc3e5bc71bd557e15af738050) - **docs:** update related packages sections [(#3936)](https://github.com/stdlib-js/stdlib/pull/3936) _(by stdlib-bot)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`ff25e13`](https://github.com/stdlib-js/stdlib/commit/ff25e1324e1507cc076078e82badce7fdf7915f6) - **docs:** remove excess whitespace _(by Philipp Burckhardt)_
-   [`cfc0665`](https://github.com/stdlib-js/stdlib/commit/cfc0665435a1f99158d7fed39b8873dea6aa6209) - **docs:** add missing private tag _(by Philipp Burckhardt)_
-   [`b8c41df`](https://github.com/stdlib-js/stdlib/commit/b8c41df78cd2cdc9cd3c3c6b223759d32f4f6e14) - **docs:** update related packages sections [(#3915)](https://github.com/stdlib-js/stdlib/pull/3915) _(by stdlib-bot)_
-   [`1a202e3`](https://github.com/stdlib-js/stdlib/commit/1a202e3605b10cd01bf9654f8356c72c5c8a8186) - **feat:** update namespace TypeScript declarations [(#3916)](https://github.com/stdlib-js/stdlib/pull/3916) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ef82c21`](https://github.com/stdlib-js/stdlib/commit/ef82c2133cc2cb955eb1fc73da0209eda97de59a) - **docs:** update namespace table of contents [(#3918)](https://github.com/stdlib-js/stdlib/pull/3918) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bcc704d`](https://github.com/stdlib-js/stdlib/commit/bcc704dd3fcb478859932dbb4909f50f3a401608) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsumkbn` [(#3530)](https://github.com/stdlib-js/stdlib/pull/3530) _(by Muhammad Haris, Athan Reines)_
-   [`f2db85a`](https://github.com/stdlib-js/stdlib/commit/f2db85a9d8d46f224f61b0d6da9bbb36cff2b8c0) - **bench:** update benchmarks in `blas/ext/base/ssumpw` according to project conventions [(#3903)](https://github.com/stdlib-js/stdlib/pull/3903) _(by Snehil Shah)_
-   [`0c9faed`](https://github.com/stdlib-js/stdlib/commit/0c9faedab42d5b816921487891de6aef305aa54f) - **docs:** update namespace table of contents [(#3902)](https://github.com/stdlib-js/stdlib/pull/3902) _(by stdlib-bot, Philipp Burckhardt)_
-   [`1c2b313`](https://github.com/stdlib-js/stdlib/commit/1c2b3137c2a54cf42deb3c8d0a1b50afc41f99ac) - **docs:** update namespace TypeScript declarations [(#3900)](https://github.com/stdlib-js/stdlib/pull/3900) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`1f596cb`](https://github.com/stdlib-js/stdlib/commit/1f596cb9bd3a26c2a7a82ab578d460f88df8dea5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumors` [(#3891)](https://github.com/stdlib-js/stdlib/pull/3891) _(by Snehil Shah)_
-   [`5cb36ef`](https://github.com/stdlib-js/stdlib/commit/5cb36ef4c6f8158585ac88867a8dec21ed3fa372) - **docs:** update related packages sections [(#3890)](https://github.com/stdlib-js/stdlib/pull/3890) _(by stdlib-bot)_
-   [`a04a9e3`](https://github.com/stdlib-js/stdlib/commit/a04a9e31780bfb285f51dba041da0c07b905a30d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssumpw` [(#3528)](https://github.com/stdlib-js/stdlib/pull/3528) _(by Muhammad Haris, Athan Reines)_
-   [`5a3d324`](https://github.com/stdlib-js/stdlib/commit/5a3d324e7e80752fad34d120df3e6c85636f20c5) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dssumors` [(#3396)](https://github.com/stdlib-js/stdlib/pull/3396) _(by Muhammad Haris, Athan Reines)_
-   [`b6ee443`](https://github.com/stdlib-js/stdlib/commit/b6ee443347db7dcd18b281f99a0617b3b64d86fc) - **feat:** add C `ndarray` implementation for `blas/base/caxpy` [(#3456)](https://github.com/stdlib-js/stdlib/pull/3456) _(by Aman Bhansali, Athan Reines)_
-   [`cf7d38a`](https://github.com/stdlib-js/stdlib/commit/cf7d38ae3e7bce92cf47778f7b1c3da731121d77) - **docs:** update related packages sections [(#3527)](https://github.com/stdlib-js/stdlib/pull/3527) _(by stdlib-bot)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`ac06419`](https://github.com/stdlib-js/stdlib/commit/ac06419c2a8358dfd80818823f571077eb58958e) - **docs:** update related packages sections [(#3387)](https://github.com/stdlib-js/stdlib/pull/3387) _(by stdlib-bot)_
-   [`1c56b73`](https://github.com/stdlib-js/stdlib/commit/1c56b737ec018cc818cebf19e5c7947fa684e126) - **docs:** update related packages sections [(#3380)](https://github.com/stdlib-js/stdlib/pull/3380) _(by stdlib-bot)_
-   [`0a8192d`](https://github.com/stdlib-js/stdlib/commit/0a8192d68506a2abf4c3e52e1af9f1510e1660b4) - **docs:** update related packages sections [(#3370)](https://github.com/stdlib-js/stdlib/pull/3370) _(by stdlib-bot)_
-   [`1aae203`](https://github.com/stdlib-js/stdlib/commit/1aae2038eda97d6d0cc6460b96c56d797d2ccbc8) - **docs:** update namespace table of contents [(#3373)](https://github.com/stdlib-js/stdlib/pull/3373) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a64ea86`](https://github.com/stdlib-js/stdlib/commit/a64ea86886d159e09b37e8591fc53d9944618204) - **feat:** update namespace TypeScript declarations [(#3371)](https://github.com/stdlib-js/stdlib/pull/3371) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7e8187a`](https://github.com/stdlib-js/stdlib/commit/7e8187a766886c2fb9cdc356cf781f0a1802172c) - **docs:** update related packages sections [(#3368)](https://github.com/stdlib-js/stdlib/pull/3368) _(by stdlib-bot)_
-   [`1b5ac87`](https://github.com/stdlib-js/stdlib/commit/1b5ac87b89851e816807a61dd1ef29c5989b838b) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumors` [(#3247)](https://github.com/stdlib-js/stdlib/pull/3247) _(by Muhammad Haris)_
-   [`5364192`](https://github.com/stdlib-js/stdlib/commit/536419208fcd2b06d9b24526c6b2ec73dc7ef736) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumpw` [(#3248)](https://github.com/stdlib-js/stdlib/pull/3248) _(by Muhammad Haris)_
-   [`e3efb84`](https://github.com/stdlib-js/stdlib/commit/e3efb84a0ec88f76fa2a799252da98165fcd7d4d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/snansumpw` [(#3353)](https://github.com/stdlib-js/stdlib/pull/3353) _(by Snehil Shah)_
-   [`ff80d7d`](https://github.com/stdlib-js/stdlib/commit/ff80d7db842f8b1d35213fde391bb7b5f063ac42) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dasumpw` [(#3362)](https://github.com/stdlib-js/stdlib/pull/3362) _(by Muhammad Haris)_
-   [`fcedaac`](https://github.com/stdlib-js/stdlib/commit/fcedaac9fd61fd81a1aa6d522ed2c29b21465259) - **fix:** update the return type and remove unnecessary branches/tests in `blas/ext/base/ssumpw` [(#3321)](https://github.com/stdlib-js/stdlib/pull/3321) _(by Muhammad Haris)_
-   [`d7058bc`](https://github.com/stdlib-js/stdlib/commit/d7058bca74f0b2ad6a94d422209e51a23a331a0d) - **test:** add opts _(by Philipp Burckhardt)_
-   [`09ed5c5`](https://github.com/stdlib-js/stdlib/commit/09ed5c519986aee270ed1f59c13e83cc442c87e6) - **test:** add missing tests _(by Philipp Burckhardt)_
-   [`d5575ad`](https://github.com/stdlib-js/stdlib/commit/d5575ad0b379e52fa4e6cc33149f6c7f36152060) - **docs:** update namespace TypeScript declarations [(#3305)](https://github.com/stdlib-js/stdlib/pull/3305) _(by stdlib-bot, Philipp Burckhardt)_
-   [`166b3e1`](https://github.com/stdlib-js/stdlib/commit/166b3e195f2617a79ef26185d47cfe20257cfcfb) - **docs:** update namespace table of contents [(#3307)](https://github.com/stdlib-js/stdlib/pull/3307) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c83f108`](https://github.com/stdlib-js/stdlib/commit/c83f10824d14d8c0290b68a5f5bcedbdc2c52c6d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/ssumpw` [(#3285)](https://github.com/stdlib-js/stdlib/pull/3285) _(by Snehil Shah)_
-   [`9818fa6`](https://github.com/stdlib-js/stdlib/commit/9818fa6dd8c90e045a147bfd1ba83cb1f693d17b) - **feat:** update namespace TypeScript declarations [(#3259)](https://github.com/stdlib-js/stdlib/pull/3259) _(by stdlib-bot, Philipp Burckhardt)_
-   [`2bbeaab`](https://github.com/stdlib-js/stdlib/commit/2bbeaab8c9acb98f125e05ee49d8413d76dadf5e) - **docs:** update namespace table of contents [(#3290)](https://github.com/stdlib-js/stdlib/pull/3290) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5c40302`](https://github.com/stdlib-js/stdlib/commit/5c4030282872bb10818edea642da92bad5f6dfdc) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansum` [(#3268)](https://github.com/stdlib-js/stdlib/pull/3268) _(by Muhammad Haris)_
-   [`9d47d0e`](https://github.com/stdlib-js/stdlib/commit/9d47d0e141eaa5705b242eb84a2c34a94d61e462) - **test:** add tests to `blas/ext/base/dnannsumors` [(#3266)](https://github.com/stdlib-js/stdlib/pull/3266) _(by Saurabh Singh, Athan Reines)_
-   [`e3a09c9`](https://github.com/stdlib-js/stdlib/commit/e3a09c998fe7ac472456650abc0b4ea726037982) - **style:** use consistent indentation _(by Athan Reines)_
-   [`153d5f4`](https://github.com/stdlib-js/stdlib/commit/153d5f41f8402b84cd2929dc4cffc7b35c614d21) - **docs:** update namespace table of contents [(#3277)](https://github.com/stdlib-js/stdlib/pull/3277) _(by stdlib-bot, Philipp Burckhardt)_
-   [`3b3d051`](https://github.com/stdlib-js/stdlib/commit/3b3d051f432384bf94048076bc62355cd00745ef) - **docs:** fix incorrect punctuation in function description for `blas/ext/base/dsnansumpw` [(#3273)](https://github.com/stdlib-js/stdlib/pull/3273) _(by Muhammad Haris)_
-   [`de75f04`](https://github.com/stdlib-js/stdlib/commit/de75f0465fdaa762112195f16f6334b121204664) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansumpw` [(#3262)](https://github.com/stdlib-js/stdlib/pull/3262) _(by Muhammad Haris, Philipp Burckhardt)_
-   [`755b053`](https://github.com/stdlib-js/stdlib/commit/755b053d5b7d5cbd675c060afc1ee049e431fdde) - **docs:** add missing header in `blas/ext/base/dsnannsumors` [(#3263)](https://github.com/stdlib-js/stdlib/pull/3263) _(by Muhammad Haris)_
-   [`a39d0f3`](https://github.com/stdlib-js/stdlib/commit/a39d0f372c70df837af84d321fa0b9b3d61f453b) - **refactor:** update `offset` handling and function documentation for `blas/ext/base/dnannsumors` [(#3252)](https://github.com/stdlib-js/stdlib/pull/3252) _(by Muhammad Haris)_
-   [`4458c49`](https://github.com/stdlib-js/stdlib/commit/4458c49e9901bdd83048c773b8cacc6361b8729b) - **fix:** extract the scalar constant as a float in `blas/ext/base/dsapxsum` [(#3254)](https://github.com/stdlib-js/stdlib/pull/3254) _(by Muhammad Haris)_
-   [`bff0533`](https://github.com/stdlib-js/stdlib/commit/bff0533b91d79f305e1918e0faa597ca3c98f2ca) - **fix:** extract the scalar constant as a float in `blas/ext/base/dsapxsumpw` [(#3255)](https://github.com/stdlib-js/stdlib/pull/3255) _(by Muhammad Haris)_
-   [`5ac82aa`](https://github.com/stdlib-js/stdlib/commit/5ac82aa10cd4472fac182be8f6a9954e8d1263f4) - **docs:** update namespace table of contents [(#3261)](https://github.com/stdlib-js/stdlib/pull/3261) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7809a85`](https://github.com/stdlib-js/stdlib/commit/7809a85b47556362c61182b4f08563014dcb598a) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnansumors` [(#3246)](https://github.com/stdlib-js/stdlib/pull/3246) _(by Muhammad Haris)_
-   [`1ea5a78`](https://github.com/stdlib-js/stdlib/commit/1ea5a786066c959ee3560a58ca884ffe1fa6a4de) - **docs:** remove stray character in `blas/ext/base/dapx` documentation [(#3250)](https://github.com/stdlib-js/stdlib/pull/3250) _(by Muhammad Haris)_
-   [`d649da5`](https://github.com/stdlib-js/stdlib/commit/d649da5c2f30c5cb459d6c43215ce6066f5c7483) - **feat:** update namespace TypeScript declarations [(#3243)](https://github.com/stdlib-js/stdlib/pull/3243) _(by stdlib-bot, Philipp Burckhardt)_
-   [`6ae3c11`](https://github.com/stdlib-js/stdlib/commit/6ae3c11e5494f6e5750638535b46454e3e325b6e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsapxsum` [(#3225)](https://github.com/stdlib-js/stdlib/pull/3225) _(by Muhammad Haris)_
-   [`16d48af`](https://github.com/stdlib-js/stdlib/commit/16d48af4bbe9dade8ca3f9e323db29ec75c4924f) - **refactor:** update `stride` handling and function documentation for `blas/ext/base/dapxsumkbn2` [(#3227)](https://github.com/stdlib-js/stdlib/pull/3227) _(by Muhammad Haris)_
-   [`9c913e5`](https://github.com/stdlib-js/stdlib/commit/9c913e504f964aa729ec1f19abbaae30174ddbd8) - **docs:** update descriptions of the function and its parameters in `blas/ext/base/dapx` [(#3226)](https://github.com/stdlib-js/stdlib/pull/3226) _(by Muhammad Haris)_
-   [`f1fa458`](https://github.com/stdlib-js/stdlib/commit/f1fa458db16484f740ca8a80095231a31831226b) - **feat:** add `blas/ext/base/dapxsumkbn-wasm` [(#3204)](https://github.com/stdlib-js/stdlib/pull/3204) _(by Snehil Shah, Athan Reines, stdlib-bot)_
-   [`05aab7d`](https://github.com/stdlib-js/stdlib/commit/05aab7d99007e790e05e82509b50c63db761b49a) - **feat:** add `blas/base/csrot-wasm` [(#3203)](https://github.com/stdlib-js/stdlib/pull/3203) _(by Aman Bhansali, Athan Reines)_
-   [`6734e4d`](https://github.com/stdlib-js/stdlib/commit/6734e4dc3d249e2544ef1e22e2a5fd47ff3e6cd3) - **feat:** add `blas/base/ccopy-wasm` [(#3163)](https://github.com/stdlib-js/stdlib/pull/3163) _(by Aman Bhansali, Athan Reines)_
-   [`ec233ec`](https://github.com/stdlib-js/stdlib/commit/ec233ec9cadd6f17a72dafa5e79b7eeee5a821eb) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumpw` [(#2994)](https://github.com/stdlib-js/stdlib/pull/2994) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`d23d168`](https://github.com/stdlib-js/stdlib/commit/d23d16808c4c6970f8ae2c583c05261396ea9e4b) - **feat:** add C `ndarray` implementation for `blas/base/sscal` [(#3030)](https://github.com/stdlib-js/stdlib/pull/3030) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`493db03`](https://github.com/stdlib-js/stdlib/commit/493db039c45d831e1c61346ac50224a592583760) - **feat:** add `blas/base/cswap-wasm` [(#3211)](https://github.com/stdlib-js/stdlib/pull/3211) _(by Aman Bhansali, Athan Reines)_
-   [`045a348`](https://github.com/stdlib-js/stdlib/commit/045a348d16c6bf78a9ebfb31c1c74de5536e37ea) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsum` [(#3197)](https://github.com/stdlib-js/stdlib/pull/3197) _(by Muhammad Haris, stdlib-bot)_
-   [`243fe3d`](https://github.com/stdlib-js/stdlib/commit/243fe3d7fb26729eba74c461daab5b89e9c66c32) - **test:** add tests to `blas/ext/base/dnannsumkbn` [(#3218)](https://github.com/stdlib-js/stdlib/pull/3218) _(by Saurabh Singh)_
-   [`ccc2637`](https://github.com/stdlib-js/stdlib/commit/ccc263768a96cc8e3a077a9026f90b68026dc0a7) - **docs:** fix missing license header for `blas/base/cscal-wasm` [(#3215)](https://github.com/stdlib-js/stdlib/pull/3215) _(by Aman Bhansali)_
-   [`4eb9aea`](https://github.com/stdlib-js/stdlib/commit/4eb9aea88656f98ba3f65075b4a7cb3335284716) - **refactor:** replace `fabs` with `stdlib_base_abs` in C implementation of `blas/ext/base/dapxsumkbn` [(#3214)](https://github.com/stdlib-js/stdlib/pull/3214) _(by Muhammad Haris, stdlib-bot)_
-   [`49f4678`](https://github.com/stdlib-js/stdlib/commit/49f46785af07e358a254308f25b80c6b6779ae48) - **chore:** update docs and tests of `blas/ext/base/dapxsum` [(#3213)](https://github.com/stdlib-js/stdlib/pull/3213) _(by Muhammad Haris)_
-   [`f4009fd`](https://github.com/stdlib-js/stdlib/commit/f4009fd28715c51637c80513a1bf5b3b91784e7a) - **refactor:** update docs and handling of zero stride in `blas/ext/base/dapxsumkbn` [(#3212)](https://github.com/stdlib-js/stdlib/pull/3212) _(by Muhammad Haris)_
-   [`14021a5`](https://github.com/stdlib-js/stdlib/commit/14021a537b3f627a4ff0b3228b78d0433a6eb562) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumpw` [(#3202)](https://github.com/stdlib-js/stdlib/pull/3202) _(by Muhammad Haris)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`297cdff`](https://github.com/stdlib-js/stdlib/commit/297cdffbf14b0f7cd87b0455b00d4a4fbf3b6cc3) - **test:** add tests to blas/ext/base/dnannsumbn2 [(#3205)](https://github.com/stdlib-js/stdlib/pull/3205) _(by Saurabh Singh, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f9fa434`](https://github.com/stdlib-js/stdlib/commit/f9fa434610b42939102b9f87eda61c3706a06a12) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn` [(#2988)](https://github.com/stdlib-js/stdlib/pull/2988) _(by Muhammad Haris)_
-   [`b4c3fc8`](https://github.com/stdlib-js/stdlib/commit/b4c3fc8f5a8a1edeb82564db8b840b902ed1b5cd) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsapxsumpw` [(#3083)](https://github.com/stdlib-js/stdlib/pull/3083) _(by Muhammad Haris, Athan Reines, stdlib-bot)_
-   [`bc9016d`](https://github.com/stdlib-js/stdlib/commit/bc9016d5f3a7e304851e2d2ca88cce6b7d3ae7e1) - **docs:** update parameter descriptions and add missing header in C example [(#3187)](https://github.com/stdlib-js/stdlib/pull/3187) _(by Muhammad Haris)_
-   [`15d040c`](https://github.com/stdlib-js/stdlib/commit/15d040c67472ca6ffb9b3ff9414e39f907ca8294) - **refactor:** remove unnecessary variable declaration [(#3185)](https://github.com/stdlib-js/stdlib/pull/3185) _(by Muhammad Haris)_
-   [`3bdf9dc`](https://github.com/stdlib-js/stdlib/commit/3bdf9dc95f583863afe2dc2d89d553c4996d123c) - **test:** add tests to `blas/ext/base/dnanasumors` [(#3104)](https://github.com/stdlib-js/stdlib/pull/3104) _(by Neeraj Pathak, Athan Reines, stdlib-bot)_
-   [`7f76495`](https://github.com/stdlib-js/stdlib/commit/7f76495810ffc554f5c8ef36d2458f6dfd1c31f2) - **test:** add tests to `blas/ext/base/dnanasum` [(#3056)](https://github.com/stdlib-js/stdlib/pull/3056) _(by Saurabh Singh, Athan Reines, stdlib-bot)_
-   [`14b8f08`](https://github.com/stdlib-js/stdlib/commit/14b8f08874e0a6fc2f7cc6f31d6876afb159c7e4) - **feat:** add C `ndarray` implementation for `blas/base/scnrm2` [(#3133)](https://github.com/stdlib-js/stdlib/pull/3133) _(by Aman Bhansali)_
-   [`d05d7b3`](https://github.com/stdlib-js/stdlib/commit/d05d7b352455ff537847cd081aafd1fb77c67c3e) - **feat:** add C `ndarray` implementation for `blas/base/dznrm2` [(#3130)](https://github.com/stdlib-js/stdlib/pull/3130) _(by Aman Bhansali, Athan Reines)_
-   [`22b7505`](https://github.com/stdlib-js/stdlib/commit/22b75056694840ce79b3493940e442672bab96c6) - **refactor:** update `offset` handling and function documentation for `blas/ext/base/dsnannsumors` [(#3129)](https://github.com/stdlib-js/stdlib/pull/3129) _(by Muhammad Haris, stdlib-bot)_
-   [`2d0ea39`](https://github.com/stdlib-js/stdlib/commit/2d0ea39cfb5e3f2c31e13520ac6bec201e7842ef) - **feat:** add C `ndarray` implementation for `blas/base/csrot` [(#3067)](https://github.com/stdlib-js/stdlib/pull/3067) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`7462db7`](https://github.com/stdlib-js/stdlib/commit/7462db759c64f25e883c731169e57a48067d076d) - **feat:** add C `ndarray` implementation for `blas/base/zdrot` [(#3069)](https://github.com/stdlib-js/stdlib/pull/3069) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`52e9aa8`](https://github.com/stdlib-js/stdlib/commit/52e9aa8b65c4485c8a077dde000c44b5cfefc5fb) - **docs:** update example _(by Athan Reines)_
-   [`8e33b88`](https://github.com/stdlib-js/stdlib/commit/8e33b88b7c99fbfa44e9af0ade340334fddcb2fd) - **docs:** fix example _(by Athan Reines)_
-   [`b21aca4`](https://github.com/stdlib-js/stdlib/commit/b21aca4063a9e72d5f79c6788c137e481582e958) - **docs:** fix example _(by Athan Reines)_
-   [`3327fe6`](https://github.com/stdlib-js/stdlib/commit/3327fe6ecc87dc059a04be79333e83a6cbaa08ee) - **style:** resolve lint error _(by Athan Reines)_
-   [`be9fdef`](https://github.com/stdlib-js/stdlib/commit/be9fdef8ee4a08af772953051f18972be7011131) - **style:** resolve lint error _(by Athan Reines)_
-   [`d7925a2`](https://github.com/stdlib-js/stdlib/commit/d7925a2cc0b94ebe0299ed39d2f463ecc3fd1149) - **feat:** update JavaScipt implementation and add C `ndarray` implementation for `blas/base/ccopy` [(#3063)](https://github.com/stdlib-js/stdlib/pull/3063) _(by Aman Bhansali, Athan Reines)_
-   [`2defdab`](https://github.com/stdlib-js/stdlib/commit/2defdabcaaa1484616e212679d4ce72b9173d57d) - **test:** add tests for `blas/base/cscal-wasm` [(#3062)](https://github.com/stdlib-js/stdlib/pull/3062) _(by Aman Bhansali, Athan Reines)_
-   [`cef4c74`](https://github.com/stdlib-js/stdlib/commit/cef4c747d92903b039c71391c2dc52ffd9e31cb3) - **docs:** fix example _(by Athan Reines)_
-   [`17b2358`](https://github.com/stdlib-js/stdlib/commit/17b23580739e33491f1287c88d3083ec989cd756) - **feat:** update JavaScript implementation and add C `ndarray` implementation for `blas/base/scasum` [(#3068)](https://github.com/stdlib-js/stdlib/pull/3068) _(by Aman Bhansali, Athan Reines)_
-   [`953e73d`](https://github.com/stdlib-js/stdlib/commit/953e73d1fd1c06babf0ed16dcc94430152abf5a8) - **feat:** update JavaScript implementation and add C `ndarray` implementation for `blas/base/cswap` [(#3064)](https://github.com/stdlib-js/stdlib/pull/3064) _(by Aman Bhansali, Athan Reines)_
-   [`38656e4`](https://github.com/stdlib-js/stdlib/commit/38656e4893257726e3c3276ff3cead5f2f02c5c5) - **docs:** fix example _(by Athan Reines)_
-   [`cb425f9`](https://github.com/stdlib-js/stdlib/commit/cb425f9efa61a4f81ebf2154f132ebe1f125ae19) - **refactor:** remove explicit cast and update function parameter description in `blas/ext/base/drev` [(#3127)](https://github.com/stdlib-js/stdlib/pull/3127) _(by Muhammad Haris)_
-   [`ada1567`](https://github.com/stdlib-js/stdlib/commit/ada15676ce0be30b050d3c0fbcbf777492bb3cac) - **feat:** add C `ndarray` implementation for `blas/base/zswap` [(#3080)](https://github.com/stdlib-js/stdlib/pull/3080) _(by Aman Bhansali, Athan Reines)_
-   [`adbee81`](https://github.com/stdlib-js/stdlib/commit/adbee8105b6903730d070261f36127b5744cabbb) - **docs:** fix description _(by Athan Reines)_
-   [`75e000c`](https://github.com/stdlib-js/stdlib/commit/75e000ca99d19069677358c0c890b2748fa3074a) - **feat:** add C `ndarray` implementation for `blas/base/zcopy` [(#3081)](https://github.com/stdlib-js/stdlib/pull/3081) _(by Aman Bhansali, Athan Reines)_
-   [`f80e82f`](https://github.com/stdlib-js/stdlib/commit/f80e82fac77275db101aaa28f61eebd7024e2c9f) - **refactor:** update `offset` handling and function parameter description for `blas/ext/base/dnannsumkbn2` [(#3123)](https://github.com/stdlib-js/stdlib/pull/3123) _(by Muhammad Haris)_
-   [`fca01a0`](https://github.com/stdlib-js/stdlib/commit/fca01a0a8a63b87834a8beb6a4a698b8c6f7699e) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumkbn2` [(#3105)](https://github.com/stdlib-js/stdlib/pull/3105) _(by Neeraj Pathak)_
-   [`c442b93`](https://github.com/stdlib-js/stdlib/commit/c442b93d2ed3af2a2f50402b4b0dc87e9090f596) - **feat:** add `blas/base/drotm-wasm` [(#3021)](https://github.com/stdlib-js/stdlib/pull/3021) _(by Aman Bhansali, Athan Reines)_
-   [`f0ecdad`](https://github.com/stdlib-js/stdlib/commit/f0ecdad9731cd40ae9047a87981d2688693e54dc) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumkbn2` [(#2990)](https://github.com/stdlib-js/stdlib/pull/2990) _(by Muhammad Haris)_
-   [`ee9a830`](https://github.com/stdlib-js/stdlib/commit/ee9a8300ba0f24dabe4b7b67ffb3bbe94f251b36) - **feat:** add C `ndarray` API and refactor `blas/ext/base/drev` [(#3071)](https://github.com/stdlib-js/stdlib/pull/3071) _(by Muhammad Haris)_
-   [`a341f85`](https://github.com/stdlib-js/stdlib/commit/a341f857ab541502a4e2b0b4b805c41e68e46fd6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dsnannsumors` [(#3086)](https://github.com/stdlib-js/stdlib/pull/3086) _(by Muhammad Haris)_
-   [`af8d471`](https://github.com/stdlib-js/stdlib/commit/af8d471a7e01113f814a78fc411c7949b69ca1f3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnannsumors` [(#2991)](https://github.com/stdlib-js/stdlib/pull/2991) _(by Muhammad Haris)_
-   [`796d76a`](https://github.com/stdlib-js/stdlib/commit/796d76a43a378cd5496e4222baac2bde1658e6da) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansum` [(#3052)](https://github.com/stdlib-js/stdlib/pull/3052) _(by Muhammad Haris)_
-   [`02735b4`](https://github.com/stdlib-js/stdlib/commit/02735b4090dddd143b4845f4f1916f8d73b3ef19) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumors` [(#3087)](https://github.com/stdlib-js/stdlib/pull/3087) _(by Gururaj Gurram, Philipp Burckhardt)_
-   [`cc6362b`](https://github.com/stdlib-js/stdlib/commit/cc6362bffb6dbff54c3dd69257dfcb2dd7d372f4) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumkbn` [(#3051)](https://github.com/stdlib-js/stdlib/pull/3051) _(by Muhammad Haris)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 22 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Aman Bhansali
-   Athan Reines
-   Gururaj Gurram
-   Hemant M Mehta
-   Justyn Shelby
-   Lalit Narayan Yadav
-   Mohammad Bin Aftab
-   Muhammad Haris
-   Neeraj Pathak
-   Philipp Burckhardt
-   Pierre Forstmann
-   Prashant Kumar Yadav
-   Ricky Reusser
-   Rupa
-   Saurabh Singh
-   Shabareesh Shetty
-   Snehil Shah
-   Suhaib Ilahi
-   Uday Kakade
-   Vivek Maurya
-   zhanggy

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="features">

### Features

-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000)
-   [`371a494`](https://github.com/stdlib-js/stdlib/commit/371a49427e62050eb23947678b66aa529ee3890b) - add C `ndarray` API and refactor `blas/ext/base/dnansumkbn` [(#2996)](https://github.com/stdlib-js/stdlib/pull/2996)
-   [`7df5877`](https://github.com/stdlib-js/stdlib/commit/7df58771f61965f3c819af3ea3b9376fedd86a86) - add C `ndarray` API and refactor `blas/ext/base/dnansumors` [(#3001)](https://github.com/stdlib-js/stdlib/pull/3001)
-   [`e692962`](https://github.com/stdlib-js/stdlib/commit/e69296220d967abab11a41b50f5f763abf13c640) - add `blas/base/cscal-wasm`
-   [`243f857`](https://github.com/stdlib-js/stdlib/commit/243f85723b0b899c6cedcac0271f707bebdad918) - add `blas/base/snrm2-wasm` [(#3029)](https://github.com/stdlib-js/stdlib/pull/3029)
-   [`9de99eb`](https://github.com/stdlib-js/stdlib/commit/9de99eb4266af077482ae26a14c2b526f725d305) - add `blas/base/sasum-wasm` [(#3024)](https://github.com/stdlib-js/stdlib/pull/3024)
-   [`3409af0`](https://github.com/stdlib-js/stdlib/commit/3409af04eea8a65bb04643be17d40b5a7974b5d6) - add `blas/base/srot-wasm` [(#3028)](https://github.com/stdlib-js/stdlib/pull/3028)
-   [`6b238d9`](https://github.com/stdlib-js/stdlib/commit/6b238d9a0b152532351c72100a5be2ca644eba1c) - add `blas/base/sdot-wasm` [(#3025)](https://github.com/stdlib-js/stdlib/pull/3025)
-   [`fe8255a`](https://github.com/stdlib-js/stdlib/commit/fe8255aaadeae80d038625abcda3264c70e9b32b) - add `blas/base/scopy-wasm` [(#3022)](https://github.com/stdlib-js/stdlib/pull/3022)
-   [`e3512fc`](https://github.com/stdlib-js/stdlib/commit/e3512fca3391a238a1f40a030406c9354cb7cc25) - add `blas/base/dasum-wasm` [(#2987)](https://github.com/stdlib-js/stdlib/pull/2987)
-   [`8f8b649`](https://github.com/stdlib-js/stdlib/commit/8f8b6497126fee0256de7be78a9501edd37c70fb) - add `blas/base/idamax-wasm` [(#3016)](https://github.com/stdlib-js/stdlib/pull/3016)
-   [`1594f0f`](https://github.com/stdlib-js/stdlib/commit/1594f0f4dc6ff16c5b44a7ae6428784ff76f2b75) - add `blas/base/ddot-wasm` [(#2986)](https://github.com/stdlib-js/stdlib/pull/2986)
-   [`bfcfb89`](https://github.com/stdlib-js/stdlib/commit/bfcfb8907b096bb574c9dffba4cc256687a4f213) - add `blas/base/dscal-wasm` [(#2985)](https://github.com/stdlib-js/stdlib/pull/2985)
-   [`4f8bad3`](https://github.com/stdlib-js/stdlib/commit/4f8bad3ec19d742b1f08481bbb08ee2406312080) - add `blas/base/dnrm2-wasm` [(#3014)](https://github.com/stdlib-js/stdlib/pull/3014)
-   [`ea7b344`](https://github.com/stdlib-js/stdlib/commit/ea7b34499a4847bd917e120595a0c677fe8bddb9) - add C `ndarray` API and refactor `blas/ext/base/dnanasum` [(#2984)](https://github.com/stdlib-js/stdlib/pull/2984)
-   [`6fe012e`](https://github.com/stdlib-js/stdlib/commit/6fe012ee17be4a3fad36642041770de4693ef5a3) - add C `ndarray` API and refactor `blas/ext/base/dnanasumors` [(#2982)](https://github.com/stdlib-js/stdlib/pull/2982)
-   [`3bd3f48`](https://github.com/stdlib-js/stdlib/commit/3bd3f480c66a81bc012efd838cef6e0cbda52870) - add C `ndarray` API and refactor `blas/ext/base/dcusumpw` [(#2981)](https://github.com/stdlib-js/stdlib/pull/2981)
-   [`5d79f98`](https://github.com/stdlib-js/stdlib/commit/5d79f98fcf24be0adf5ab357964d8afaa6707b86) - add `blas/base/drot-wasm` [(#2979)](https://github.com/stdlib-js/stdlib/pull/2979)
-   [`86b103d`](https://github.com/stdlib-js/stdlib/commit/86b103d5332a58ad6e6a7c254453587460e5c021) - update JavaScript implementation and add C `ndarray` implementation for `blas/base/idamax` [(#2980)](https://github.com/stdlib-js/stdlib/pull/2980)
-   [`206c660`](https://github.com/stdlib-js/stdlib/commit/206c6608c3822e807d4a6cb4982838510bb36c21) - update JavaScript implementation and add C `ndarray` implementation for `blas/base/isamax` [(#2931)](https://github.com/stdlib-js/stdlib/pull/2931)
-   [`a3fb243`](https://github.com/stdlib-js/stdlib/commit/a3fb243895ebb2ad90f84bbe4d69c23e4663758c) - add `blas/base/dswap-wasm` [(#2976)](https://github.com/stdlib-js/stdlib/pull/2976)
-   [`fc1256b`](https://github.com/stdlib-js/stdlib/commit/fc1256b1cb1736d9669b986c03ceb29a77228ec8) - update JavaScript implementation and add C `ndarray` implementation for `blas/base/cscal` [(#2967)](https://github.com/stdlib-js/stdlib/pull/2967)
-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962)
-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - add C `ndarray` API and refactor `blas/ext/base/dcusumors`
-   [`98600ec`](https://github.com/stdlib-js/stdlib/commit/98600eca7ebd8e7269f051a2e87612c33dca0638) - add `blas/base/dcopy-wasm` [(#2959)](https://github.com/stdlib-js/stdlib/pull/2959)
-   [`929a224`](https://github.com/stdlib-js/stdlib/commit/929a2241acc3b3714fb01fcb4a9e295810df5bf5) - add `blas/base/saxpy-wasm` [(#2956)](https://github.com/stdlib-js/stdlib/pull/2956)
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954)
-   [`c4172be`](https://github.com/stdlib-js/stdlib/commit/c4172be96f0316ab213bbfe63b9678141a80709e) - add C `ndarray` API and refactor `blas/ext/base/dcusumkbn2` [(#2958)](https://github.com/stdlib-js/stdlib/pull/2958)
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951)
-   [`6fd2e23`](https://github.com/stdlib-js/stdlib/commit/6fd2e23eb246789e43b311eabe9f2fac532175b7) - add C `ndarray` API and refactor `blas/ext/base/dasumpw` [(#2949)](https://github.com/stdlib-js/stdlib/pull/2949)
-   [`2bcce62`](https://github.com/stdlib-js/stdlib/commit/2bcce6265ac56f754e447c3898b74f58710ea4a6) - add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn2` [(#2948)](https://github.com/stdlib-js/stdlib/pull/2948)
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946)
-   [`829713b`](https://github.com/stdlib-js/stdlib/commit/829713b1fd6081cafa25133ac90931d8ba911b5e) - add C `ndarray` API and refactor `blas/ext/base/dapxsumpw` [(#2937)](https://github.com/stdlib-js/stdlib/pull/2937)
-   [`bc97fa9`](https://github.com/stdlib-js/stdlib/commit/bc97fa994dbd0e671613e9633a551cdae30fa621) - add C `ndarray` API and refactor `blas/ext/base/dapxsumors` [(#2934)](https://github.com/stdlib-js/stdlib/pull/2934)
-   [`126c898`](https://github.com/stdlib-js/stdlib/commit/126c89855ae2df8c6db72ca48e138f6b45a179b0) - refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/dasum` [(#2942)](https://github.com/stdlib-js/stdlib/pull/2942)
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930)
-   [`b853deb`](https://github.com/stdlib-js/stdlib/commit/b853deb21c917918997772530f2d464b1bc6eb35) - refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/dnrm2` [(#2941)](https://github.com/stdlib-js/stdlib/pull/2941)
-   [`0ec855b`](https://github.com/stdlib-js/stdlib/commit/0ec855b18df29ca56cea94790c3563d038851981) - add C `ndarray` implementation for `blas/base/dsdot` [(#2938)](https://github.com/stdlib-js/stdlib/pull/2938)
-   [`e4f28df`](https://github.com/stdlib-js/stdlib/commit/e4f28df214f15513bdafeb5a6bbc3bde115dc63b) - add C `ndarray` implementation for `blas/base/ddot` [(#2936)](https://github.com/stdlib-js/stdlib/pull/2936)
-   [`faa3014`](https://github.com/stdlib-js/stdlib/commit/faa30141a0ca6c5e871a281536ab8755032b70ec) - add C `ndarray` implementation for `blas/base/drotm` [(#2935)](https://github.com/stdlib-js/stdlib/pull/2935)
-   [`a187bfc`](https://github.com/stdlib-js/stdlib/commit/a187bfc1f71912625823d786f7b1234b224b323d) - add C `ndarray` API and refactor `blas/ext/base/dapx` [(#2929)](https://github.com/stdlib-js/stdlib/pull/2929)
-   [`807613d`](https://github.com/stdlib-js/stdlib/commit/807613dc2ae504e83f77c0707f4f6a046752b022) - add C `ndarray` implementation for `blas/base/srotm` [(#2928)](https://github.com/stdlib-js/stdlib/pull/2928)
-   [`d93e862`](https://github.com/stdlib-js/stdlib/commit/d93e862d5d5919a73677b3c66e10e5f0bfd99ea0) - refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/sasum` [(#2926)](https://github.com/stdlib-js/stdlib/pull/2926)
-   [`1e1ea6f`](https://github.com/stdlib-js/stdlib/commit/1e1ea6ff33763f68e8ae501830356cc67381cc1a) - update JavaScript implementation and add C `ndarray` API for `blas/base/snrm2` [(#2924)](https://github.com/stdlib-js/stdlib/pull/2924)
-   [`57d03ad`](https://github.com/stdlib-js/stdlib/commit/57d03ad4821f87e6ea471794cd6c4a60adc40d86) - add C `ndarray` implementation for `blas/base/srot` and `blas/base/drot` [(#2896)](https://github.com/stdlib-js/stdlib/pull/2896)
-   [`b16259c`](https://github.com/stdlib-js/stdlib/commit/b16259ce187494c5274694cb9415fd254bb24e48) - add C `ndarray` implementation for `blas/base/dscal` [(#2915)](https://github.com/stdlib-js/stdlib/pull/2915)
-   [`226a6d8`](https://github.com/stdlib-js/stdlib/commit/226a6d802c38bfc6c4fb2afe7453fb1767103034) - add C `ndarray` API to `blas/ext/base/cfill` [(#2925)](https://github.com/stdlib-js/stdlib/pull/2925)
-   [`339ba1b`](https://github.com/stdlib-js/stdlib/commit/339ba1bf405e085779be64f98aa197115483b857) - add `blas/tools` namespace
-   [`c070a88`](https://github.com/stdlib-js/stdlib/commit/c070a889f13926400f2422a6334d5252df1bacaf) - add `blas/tools/swap-factory`
-   [`fd41e1b`](https://github.com/stdlib-js/stdlib/commit/fd41e1bd1dc6b7c351702bdbf95978b343215b0b) - add C `ndarray` API to `blas/ext/base/sfill` [(#2923)](https://github.com/stdlib-js/stdlib/pull/2923)
-   [`f7edbe0`](https://github.com/stdlib-js/stdlib/commit/f7edbe044289b877586d0140467cb43cdfd18c19) - add C `ndarray` implementation for `blas/base/sdsdot` [(#2921)](https://github.com/stdlib-js/stdlib/pull/2921)
-   [`2bedae9`](https://github.com/stdlib-js/stdlib/commit/2bedae91dbdd0080b38ae0413f5e8f26b88db95b) - add C `ndarray` implementation for `blas/base/sdot` [(#2919)](https://github.com/stdlib-js/stdlib/pull/2919)
-   [`e85f394`](https://github.com/stdlib-js/stdlib/commit/e85f3947aaca3cbbd6ab4f84e41577928e0a10a4) - add C `ndarray` implementation for `blas/base/saxpy` [(#2918)](https://github.com/stdlib-js/stdlib/pull/2918)
-   [`040a335`](https://github.com/stdlib-js/stdlib/commit/040a33583774b120b5e486a072cff397fdb1d273) - add a C `ndarray` API, refactor, and clean-up
-   [`08f39b4`](https://github.com/stdlib-js/stdlib/commit/08f39b45439d043323ec402647f6b3ea8a5a4a56) - add C `ndarray` implementation for `blas/base/scopy` [(#2913)](https://github.com/stdlib-js/stdlib/pull/2913)
-   [`40502bb`](https://github.com/stdlib-js/stdlib/commit/40502bb62ccef0eecf1132430422a35ae9e5dd3a) - add C `ndarray` implementation for `blas/base/dcopy` [(#2906)](https://github.com/stdlib-js/stdlib/pull/2906)
-   [`7e11338`](https://github.com/stdlib-js/stdlib/commit/7e11338ae6642c1389e51557262710bd6ebe44aa) - add `blas/ext/base/zfill` [(#2907)](https://github.com/stdlib-js/stdlib/pull/2907)
-   [`edcea47`](https://github.com/stdlib-js/stdlib/commit/edcea4761bc3065f9c5218c162b38ebec4a6c423) - add C `ndarray` implementation for `blas/base/sswap` and `blas/base/dswap` [(#2905)](https://github.com/stdlib-js/stdlib/pull/2905)
-   [`fadff3a`](https://github.com/stdlib-js/stdlib/commit/fadff3a44660678d9ccce8bb101f579ca1913a64) - add `blas/ext/base/cfill` [(#2901)](https://github.com/stdlib-js/stdlib/pull/2901)
-   [`8f29918`](https://github.com/stdlib-js/stdlib/commit/8f29918bc72b0634716eede69449d61ed28dd06c) - add `blas/base/daxpy-wasm`
-   [`2d7e925`](https://github.com/stdlib-js/stdlib/commit/2d7e9251e02cba556ad7e8b40ef90d5190d0d719) - add support for stacks in `blas/sswap` [(#2898)](https://github.com/stdlib-js/stdlib/pull/2898)
-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858) - add support for stacks in `blas/sdot` [(#2895)](https://github.com/stdlib-js/stdlib/pull/2895)
-   [`ae54d13`](https://github.com/stdlib-js/stdlib/commit/ae54d13ecd92912dea70b2d31525d7f54c3a26f1) - add C \"ndarray\" API
-   [`2e25339`](https://github.com/stdlib-js/stdlib/commit/2e2533970e09cb59f3533d474ec32756f4ca4f81) - add support for batched computation
-   [`da12183`](https://github.com/stdlib-js/stdlib/commit/da121832eca80c36e1e32929e994fef44ca8a4cc) - add `blas/base/dspr` [(#2794)](https://github.com/stdlib-js/stdlib/pull/2794)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file
-   [`9d55639`](https://github.com/stdlib-js/stdlib/commit/9d55639aa76472d280ee6c613cd338ee16552cd6) - update C function names in `blas/ext/base/sfill` to prevent name collisions [(#2945)](https://github.com/stdlib-js/stdlib/pull/2945)
-   [`1f49ad9`](https://github.com/stdlib-js/stdlib/commit/1f49ad98dfcee0a15a8bd3873508f2eaedd88807) - update C function names in `blas/ext/base/dfill` to prevent name collisions [(#2944)](https://github.com/stdlib-js/stdlib/pull/2944)
-   [`5467341`](https://github.com/stdlib-js/stdlib/commit/54673410322991eb15e9c48c2e6f43912cec3b44) - update C function names in `blas/ext/base/cfill` to prevent name collisions [(#2943)](https://github.com/stdlib-js/stdlib/pull/2943)
-   [`2d7dda3`](https://github.com/stdlib-js/stdlib/commit/2d7dda3dec5ce14e2c28b99637c88b6e3de90513) - update error message
-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - resolve bugs in addon.c files
-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - fix includes and types
-   [`6c769ad`](https://github.com/stdlib-js/stdlib/commit/6c769ad65cf528389012efc400b29b6e57a4f352) - update error message
-   [`a90c34d`](https://github.com/stdlib-js/stdlib/commit/a90c34d316f09ce5dfe165439fbcb2785fcea5a0) - update error message
-   [`00390b7`](https://github.com/stdlib-js/stdlib/commit/00390b7f27c421251760c78f75697fbf1e3449df) - add missing method in declaration tests [(#2900)](https://github.com/stdlib-js/stdlib/pull/2900)
-   [`8b1f86b`](https://github.com/stdlib-js/stdlib/commit/8b1f86b855e9f11a36ccf7f58a611650bf210078) - prevent writing to read-only ndarrays

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858): return an ndarray, rather than a scalar

    -   This commit changes the return value from a scalar to an ndarray. Previously, the function only operated on one-dimensional ndarrays and returned a scalar value. Now, the function operates on ndarrays of arbitrary rank and always returns an ndarray. In order to migrate, for one-dimensional input ndarrays, users should call `out.get()` in order to retrieve the scalar dot product.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 5 issues were closed in this release:

[#1496](https://github.com/stdlib-js/stdlib/issues/1496), [#1530](https://github.com/stdlib-js/stdlib/issues/1530), [#1534](https://github.com/stdlib-js/stdlib/issues/1534), [#1536](https://github.com/stdlib-js/stdlib/issues/1536), [#2543](https://github.com/stdlib-js/stdlib/issues/2543)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000) _(by Muhammad Haris, Athan Reines, Philipp Burckhardt)_
-   [`371a494`](https://github.com/stdlib-js/stdlib/commit/371a49427e62050eb23947678b66aa529ee3890b) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumkbn` [(#2996)](https://github.com/stdlib-js/stdlib/pull/2996) _(by Muhammad Haris, Athan Reines)_
-   [`fdd3963`](https://github.com/stdlib-js/stdlib/commit/fdd3963096904e999191e354dede1ca59461adc2) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`78a7b34`](https://github.com/stdlib-js/stdlib/commit/78a7b34ccda3efe8d2613eb2eb27f8ca00adb66e) - **chore:** update package meta data [(#3038)](https://github.com/stdlib-js/stdlib/pull/3038) _(by stdlib-bot, Athan Reines)_
-   [`7df5877`](https://github.com/stdlib-js/stdlib/commit/7df58771f61965f3c819af3ea3b9376fedd86a86) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumors` [(#3001)](https://github.com/stdlib-js/stdlib/pull/3001) _(by Muhammad Haris, Athan Reines)_
-   [`63f08ff`](https://github.com/stdlib-js/stdlib/commit/63f08ffc835fe1cf26ad835bd799123c41b5695b) - **docs:** add return annotation _(by Athan Reines)_
-   [`ba99cc0`](https://github.com/stdlib-js/stdlib/commit/ba99cc0e3cbc7bd4429c8b84aa43309c79054080) - **docs:** fix variable name _(by Athan Reines)_
-   [`e692962`](https://github.com/stdlib-js/stdlib/commit/e69296220d967abab11a41b50f5f763abf13c640) - **feat:** add `blas/base/cscal-wasm` _(by Athan Reines)_
-   [`bef1dbe`](https://github.com/stdlib-js/stdlib/commit/bef1dbefc05949b1d6db5f2f9a2b173957aa7d38) - **docs:** fix comments _(by Athan Reines)_
-   [`dd5ecf0`](https://github.com/stdlib-js/stdlib/commit/dd5ecf0a231b19a656f4024a79a0b182e42d69e9) - **docs:** fix comments _(by Athan Reines)_
-   [`5950b02`](https://github.com/stdlib-js/stdlib/commit/5950b0290ff5c39e518f70e6f3bdbef1dea31cd1) - **docs:** fix comments _(by Athan Reines)_
-   [`8967a46`](https://github.com/stdlib-js/stdlib/commit/8967a468209dffbb3a3a687615a8cdb514bc9a91) - **docs:** fix comments _(by Athan Reines)_
-   [`7d54f12`](https://github.com/stdlib-js/stdlib/commit/7d54f1260a5b93aa60793c370aace11785682fa6) - **docs:** fix comments _(by Athan Reines)_
-   [`4ace02e`](https://github.com/stdlib-js/stdlib/commit/4ace02ecce4fef6fb843449f2fa30f34d37593f0) - **docs:** fix comments _(by Athan Reines)_
-   [`263ed0d`](https://github.com/stdlib-js/stdlib/commit/263ed0d5d9557daf7e471ce88bdfff5bf0aab168) - **docs:** fix param name _(by Athan Reines)_
-   [`a7dd0cf`](https://github.com/stdlib-js/stdlib/commit/a7dd0cf36e8ff747083aff3aa4bfff4bf01dfd0c) - **style:** fix spacing _(by Athan Reines)_
-   [`d3c6d35`](https://github.com/stdlib-js/stdlib/commit/d3c6d356c0789dc258bf9c56aeeb0f5e67fa7f8a) - **docs:** remove unused require _(by Athan Reines)_
-   [`2c2e66f`](https://github.com/stdlib-js/stdlib/commit/2c2e66f414ee0df49f854cc3b48aad679a3666bd) - **docs:** fix example _(by Athan Reines)_
-   [`f8c853a`](https://github.com/stdlib-js/stdlib/commit/f8c853aafa3551b514da3c640fc2003df1840715) - **docs:** fix notes _(by Athan Reines)_
-   [`f2323a6`](https://github.com/stdlib-js/stdlib/commit/f2323a68e672e14217451bf76973084375a61e9a) - **docs:** fix notes _(by Athan Reines)_
-   [`d50be97`](https://github.com/stdlib-js/stdlib/commit/d50be9724c245443e7227165659dac0868d9dbd8) - **docs:** fix notes _(by Athan Reines)_
-   [`f7e5311`](https://github.com/stdlib-js/stdlib/commit/f7e53110fd50f318c4f908ff0fcc97d5589766c5) - **docs:** fix notes _(by Athan Reines)_
-   [`ea972a9`](https://github.com/stdlib-js/stdlib/commit/ea972a96c02f99590f04a7f36cf577782f1713d2) - **docs:** fix notes _(by Athan Reines)_
-   [`9aafd79`](https://github.com/stdlib-js/stdlib/commit/9aafd79e3f560b96d724aeade6fdaf2a72defe2a) - **docs:** fix example _(by Athan Reines)_
-   [`c8b03cb`](https://github.com/stdlib-js/stdlib/commit/c8b03cb5ef49064325b8859de640833ee715ab20) - **docs:** fix comments _(by Athan Reines)_
-   [`a7d96e6`](https://github.com/stdlib-js/stdlib/commit/a7d96e6c94fab2b408f88f966854550b66c1b620) - **docs:** fix comment _(by Athan Reines)_
-   [`b99598a`](https://github.com/stdlib-js/stdlib/commit/b99598a0257aff9d3c62a186323d1cc0dab7a04b) - **docs:** fix comment _(by Athan Reines)_
-   [`aa66ef4`](https://github.com/stdlib-js/stdlib/commit/aa66ef43fbd484c41c266300702d4f72496ff1e3) - **docs:** fix comment _(by Athan Reines)_
-   [`3de76a0`](https://github.com/stdlib-js/stdlib/commit/3de76a0863ce62bb51e324907a417370780c91bf) - **docs:** fix comments _(by Athan Reines)_
-   [`21234b9`](https://github.com/stdlib-js/stdlib/commit/21234b9591e0034916f84b49a48a4662d2da37a7) - **docs:** fix comments _(by Athan Reines)_
-   [`14e4fc8`](https://github.com/stdlib-js/stdlib/commit/14e4fc8a3ce1192c5c10e86fc2a994b438fa89cd) - **docs:** fix comment _(by Athan Reines)_
-   [`50f1d89`](https://github.com/stdlib-js/stdlib/commit/50f1d890ee83daa67370a78753c1db1be44d92cc) - **docs:** fix comment _(by Athan Reines)_
-   [`1d23b34`](https://github.com/stdlib-js/stdlib/commit/1d23b34a57833b3ab879c68b8c2a6fe8cb4445c8) - **docs:** fix comments _(by Athan Reines)_
-   [`ee1deea`](https://github.com/stdlib-js/stdlib/commit/ee1deea7bbbcaca2a57ca98406e01a90a6da1ea4) - **docs:** fix comments _(by Athan Reines)_
-   [`57a9346`](https://github.com/stdlib-js/stdlib/commit/57a9346e851b6d801be99f038961b8b42dd5b179) - **docs:** fix comments _(by Athan Reines)_
-   [`91e37be`](https://github.com/stdlib-js/stdlib/commit/91e37be0fc89c072ee006802d5a568eab3003c9a) - **docs:** fix missing license headers _(by Athan Reines)_
-   [`401609a`](https://github.com/stdlib-js/stdlib/commit/401609ac92116f94127c39ccd25edd678530a8e7) - **docs:** fix missing license header _(by Athan Reines)_
-   [`5a7ec02`](https://github.com/stdlib-js/stdlib/commit/5a7ec022b24a9081169b23ceea806c53d8ab5a4d) - **docs:** fix missing license header _(by Athan Reines)_
-   [`198a20c`](https://github.com/stdlib-js/stdlib/commit/198a20c9815eb5e0690baa5b4c2a18e29f75e62e) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`85a6c6a`](https://github.com/stdlib-js/stdlib/commit/85a6c6a051660cab231134b7043796cff7ca1f2c) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`75ff0b6`](https://github.com/stdlib-js/stdlib/commit/75ff0b69d20427fe929c697b480bee5beaf39716) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`2325635`](https://github.com/stdlib-js/stdlib/commit/2325635de551a3867b8a65ade8c1f43ef71b5871) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`4e19f61`](https://github.com/stdlib-js/stdlib/commit/4e19f611f6c3e875e976dd0c2bcab74628541d85) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`59f10a1`](https://github.com/stdlib-js/stdlib/commit/59f10a15ac63897778f1dbb98678043dba326667) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`90b36a5`](https://github.com/stdlib-js/stdlib/commit/90b36a5f3e5493be4427cbfdbd4ed6abc083f6fc) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`d681033`](https://github.com/stdlib-js/stdlib/commit/d681033f62799160a33f37a76c8ea64df6532179) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`f62e6d1`](https://github.com/stdlib-js/stdlib/commit/f62e6d1b3e4c6ca8602c14b47c25d8e23759eefc) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`f9e0fd5`](https://github.com/stdlib-js/stdlib/commit/f9e0fd5ff8176c64766214a77438c551ce9b41aa) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`f1e59ff`](https://github.com/stdlib-js/stdlib/commit/f1e59ff23bdc7b924746d39ef7bf2fc45a9f9e6d) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`b7102c9`](https://github.com/stdlib-js/stdlib/commit/b7102c9c3edcaf9903c62aa69cf00fc4282534d9) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`e0b5a46`](https://github.com/stdlib-js/stdlib/commit/e0b5a4655e834c4ad6359cb68806cb7807e5a5a0) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`1530f80`](https://github.com/stdlib-js/stdlib/commit/1530f80d4d9f298361cccc3463fee8315fbb83c3) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`def99de`](https://github.com/stdlib-js/stdlib/commit/def99deab9d392f322f0e005be7c08dac2aa5014) - **build:** update compiler flags and export resolution _(by Athan Reines)_
-   [`243f857`](https://github.com/stdlib-js/stdlib/commit/243f85723b0b899c6cedcac0271f707bebdad918) - **feat:** add `blas/base/snrm2-wasm` [(#3029)](https://github.com/stdlib-js/stdlib/pull/3029) _(by Aman Bhansali, Athan Reines)_
-   [`5c30260`](https://github.com/stdlib-js/stdlib/commit/5c302603389144ab1f9e88ce926d8a504dfe1294) - **docs:** fix missing comma _(by Athan Reines)_
-   [`9de99eb`](https://github.com/stdlib-js/stdlib/commit/9de99eb4266af077482ae26a14c2b526f725d305) - **feat:** add `blas/base/sasum-wasm` [(#3024)](https://github.com/stdlib-js/stdlib/pull/3024) _(by Aman Bhansali, Athan Reines)_
-   [`3409af0`](https://github.com/stdlib-js/stdlib/commit/3409af04eea8a65bb04643be17d40b5a7974b5d6) - **feat:** add `blas/base/srot-wasm` [(#3028)](https://github.com/stdlib-js/stdlib/pull/3028) _(by Aman Bhansali, Athan Reines)_
-   [`e2ed2a3`](https://github.com/stdlib-js/stdlib/commit/e2ed2a3f152e6b424b9479b1103dcf382110e313) - **bench:** use single-precision utility _(by Athan Reines)_
-   [`6b238d9`](https://github.com/stdlib-js/stdlib/commit/6b238d9a0b152532351c72100a5be2ca644eba1c) - **feat:** add `blas/base/sdot-wasm` [(#3025)](https://github.com/stdlib-js/stdlib/pull/3025) _(by Aman Bhansali, Athan Reines)_
-   [`45539d2`](https://github.com/stdlib-js/stdlib/commit/45539d264609d023eb189457bf4b6d326fddaa9b) - **docs:** fix description _(by Athan Reines)_
-   [`420e21c`](https://github.com/stdlib-js/stdlib/commit/420e21cbeb53062caad324e14b8ea8ca53d51755) - **docs:** fix examples and notes _(by Athan Reines)_
-   [`fe8255a`](https://github.com/stdlib-js/stdlib/commit/fe8255aaadeae80d038625abcda3264c70e9b32b) - **feat:** add `blas/base/scopy-wasm` [(#3022)](https://github.com/stdlib-js/stdlib/pull/3022) _(by Aman Bhansali, Athan Reines)_
-   [`e3512fc`](https://github.com/stdlib-js/stdlib/commit/e3512fca3391a238a1f40a030406c9354cb7cc25) - **feat:** add `blas/base/dasum-wasm` [(#2987)](https://github.com/stdlib-js/stdlib/pull/2987) _(by Aman Bhansali, Athan Reines)_
-   [`8f8b649`](https://github.com/stdlib-js/stdlib/commit/8f8b6497126fee0256de7be78a9501edd37c70fb) - **feat:** add `blas/base/idamax-wasm` [(#3016)](https://github.com/stdlib-js/stdlib/pull/3016) _(by Aman Bhansali, Athan Reines)_
-   [`6c9018c`](https://github.com/stdlib-js/stdlib/commit/6c9018cb081c3e9e0510bd5609995bf38449e6d1) - **docs:** fix note _(by Athan Reines)_
-   [`3ab8221`](https://github.com/stdlib-js/stdlib/commit/3ab82210f8241550f61dfc491345ee1ebd9bcf2f) - **docs:** fix note _(by Athan Reines)_
-   [`1594f0f`](https://github.com/stdlib-js/stdlib/commit/1594f0f4dc6ff16c5b44a7ae6428784ff76f2b75) - **feat:** add `blas/base/ddot-wasm` [(#2986)](https://github.com/stdlib-js/stdlib/pull/2986) _(by Aman Bhansali, Athan Reines)_
-   [`200e78a`](https://github.com/stdlib-js/stdlib/commit/200e78af939661bb4f435dc4f523cb57594c003e) - **docs:** add missing comma _(by Athan Reines)_
-   [`bfcfb89`](https://github.com/stdlib-js/stdlib/commit/bfcfb8907b096bb574c9dffba4cc256687a4f213) - **feat:** add `blas/base/dscal-wasm` [(#2985)](https://github.com/stdlib-js/stdlib/pull/2985) _(by Aman Bhansali, Athan Reines)_
-   [`01e414b`](https://github.com/stdlib-js/stdlib/commit/01e414bd9a03e578d44e2c284fcc77ce2fbcd825) - **docs:** fix examples in `blas/base/dnrm2-wasm` [(#3018)](https://github.com/stdlib-js/stdlib/pull/3018) _(by Aman Bhansali)_
-   [`4f8bad3`](https://github.com/stdlib-js/stdlib/commit/4f8bad3ec19d742b1f08481bbb08ee2406312080) - **feat:** add `blas/base/dnrm2-wasm` [(#3014)](https://github.com/stdlib-js/stdlib/pull/3014) _(by Aman Bhansali, Athan Reines)_
-   [`c0a5dbe`](https://github.com/stdlib-js/stdlib/commit/c0a5dbe868b88f8bcf770e128833d5768c041919) - **test:** achieve complete code coverage in `blas/base/dznrm2` and `blas/base/scnrm2` [(#2977)](https://github.com/stdlib-js/stdlib/pull/2977) _(by Gururaj Gurram)_
-   [`efbff47`](https://github.com/stdlib-js/stdlib/commit/efbff479674b3a3941278a245dedda41baf137a3) - **refactor:** `blas/ext/base/snansumkbn2` according to current project conventions [(#3002)](https://github.com/stdlib-js/stdlib/pull/3002) _(by Gururaj Gurram, Gururaj Gurram, Philipp Burckhardt)_
-   [`ea7b344`](https://github.com/stdlib-js/stdlib/commit/ea7b34499a4847bd917e120595a0c677fe8bddb9) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnanasum` [(#2984)](https://github.com/stdlib-js/stdlib/pull/2984) _(by Muhammad Haris, Athan Reines)_
-   [`6fe012e`](https://github.com/stdlib-js/stdlib/commit/6fe012ee17be4a3fad36642041770de4693ef5a3) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnanasumors` [(#2982)](https://github.com/stdlib-js/stdlib/pull/2982) _(by Muhammad Haris, Athan Reines)_
-   [`3bd3f48`](https://github.com/stdlib-js/stdlib/commit/3bd3f480c66a81bc012efd838cef6e0cbda52870) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumpw` [(#2981)](https://github.com/stdlib-js/stdlib/pull/2981) _(by Muhammad Haris, Athan Reines)_
-   [`5d79f98`](https://github.com/stdlib-js/stdlib/commit/5d79f98fcf24be0adf5ab357964d8afaa6707b86) - **feat:** add `blas/base/drot-wasm` [(#2979)](https://github.com/stdlib-js/stdlib/pull/2979) _(by Aman Bhansali, Athan Reines)_
-   [`0441176`](https://github.com/stdlib-js/stdlib/commit/0441176842aa621bace6bb098ef669638b5cd787) - **docs:** fix descriptions _(by Athan Reines)_
-   [`0010618`](https://github.com/stdlib-js/stdlib/commit/001061803801fb497616cc99943129f5817e8eed) - **docs:** fix descriptions _(by Athan Reines)_
-   [`86b103d`](https://github.com/stdlib-js/stdlib/commit/86b103d5332a58ad6e6a7c254453587460e5c021) - **feat:** update JavaScript implementation and add C `ndarray` implementation for `blas/base/idamax` [(#2980)](https://github.com/stdlib-js/stdlib/pull/2980) _(by Aman Bhansali, Athan Reines)_
-   [`206c660`](https://github.com/stdlib-js/stdlib/commit/206c6608c3822e807d4a6cb4982838510bb36c21) - **feat:** update JavaScript implementation and add C `ndarray` implementation for `blas/base/isamax` [(#2931)](https://github.com/stdlib-js/stdlib/pull/2931) _(by Aman Bhansali, Athan Reines)_
-   [`41135da`](https://github.com/stdlib-js/stdlib/commit/41135daeb35150c6f4774ef73bb9e3648d0a7c36) - **test:** fix missing argument _(by Athan Reines)_
-   [`e379b5c`](https://github.com/stdlib-js/stdlib/commit/e379b5cca26575571292841842a35a78d06f9ebd) - **test:** fix missing argument _(by Athan Reines)_
-   [`a3fb243`](https://github.com/stdlib-js/stdlib/commit/a3fb243895ebb2ad90f84bbe4d69c23e4663758c) - **feat:** add `blas/base/dswap-wasm` [(#2976)](https://github.com/stdlib-js/stdlib/pull/2976) _(by Aman Bhansali, Athan Reines)_
-   [`fc1256b`](https://github.com/stdlib-js/stdlib/commit/fc1256b1cb1736d9669b986c03ceb29a77228ec8) - **feat:** update JavaScript implementation and add C `ndarray` implementation for `blas/base/cscal` [(#2967)](https://github.com/stdlib-js/stdlib/pull/2967) _(by Aman Bhansali, Athan Reines)_
-   [`f446206`](https://github.com/stdlib-js/stdlib/commit/f4462062a216ceb2131121cbb299525b6b3b17ff) - **feat:** add C `ndarray` API and refactor `blas/ext/base/zfill` [(#2962)](https://github.com/stdlib-js/stdlib/pull/2962) _(by Muhammad Haris, Athan Reines)_
-   [`5774557`](https://github.com/stdlib-js/stdlib/commit/5774557e951cb1ae566fc0587cbf03d47b067620) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumors` _(by Muhammad Haris, Athan Reines)_
-   [`cf62100`](https://github.com/stdlib-js/stdlib/commit/cf62100c3ef0fe8318291d861f7db73ff3acec33) - **refactor:** update `blas/ext/base/dsort2ins` to follow current project conventions [(#2961)](https://github.com/stdlib-js/stdlib/pull/2961) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`c1552d8`](https://github.com/stdlib-js/stdlib/commit/c1552d85dee747d03a1d0c152566e79ad08470df) - **refactor:** update `blas/ext/base/ssort2hp` to follow current project conventions [(#2960)](https://github.com/stdlib-js/stdlib/pull/2960) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`b57ae2e`](https://github.com/stdlib-js/stdlib/commit/b57ae2e52609433b1d07e0384a1c724a7308f401) - **refactor:** updated `blas/ext/base/ssort2sh` to follow current project conventions [(#2957)](https://github.com/stdlib-js/stdlib/pull/2957) _(by Aayush Khanna, Philipp Burckhardt)_
-   [`0f8ee58`](https://github.com/stdlib-js/stdlib/commit/0f8ee58b842adebc77aeb2e6aebb41054ad6f3cd) - **docs:** fix overwriting of variables _(by Athan Reines)_
-   [`ef474af`](https://github.com/stdlib-js/stdlib/commit/ef474af3b2f1eafffbbbc9e4bcb72541f72970ef) - **docs:** fix overwriting of variables _(by Athan Reines)_
-   [`98600ec`](https://github.com/stdlib-js/stdlib/commit/98600eca7ebd8e7269f051a2e87612c33dca0638) - **feat:** add `blas/base/dcopy-wasm` [(#2959)](https://github.com/stdlib-js/stdlib/pull/2959) _(by Aman Bhansali, Athan Reines)_
-   [`929a224`](https://github.com/stdlib-js/stdlib/commit/929a2241acc3b3714fb01fcb4a9e295810df5bf5) - **feat:** add `blas/base/saxpy-wasm` [(#2956)](https://github.com/stdlib-js/stdlib/pull/2956) _(by Aman Bhansali, Athan Reines)_
-   [`1cd5988`](https://github.com/stdlib-js/stdlib/commit/1cd5988f17e8bd1e3282540d82e05536178423a4) - **docs:** fix copy _(by Athan Reines)_
-   [`a13603b`](https://github.com/stdlib-js/stdlib/commit/a13603b556defa762f7fe1d25fbfa3b621404f69) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusum` [(#2954)](https://github.com/stdlib-js/stdlib/pull/2954) _(by Muhammad Haris)_
-   [`c4172be`](https://github.com/stdlib-js/stdlib/commit/c4172be96f0316ab213bbfe63b9678141a80709e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumkbn2` [(#2958)](https://github.com/stdlib-js/stdlib/pull/2958) _(by Muhammad Haris, Athan Reines)_
-   [`aad48ea`](https://github.com/stdlib-js/stdlib/commit/aad48eab1f19217854f4ffbfaed2a8be664b0f47) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`975147f`](https://github.com/stdlib-js/stdlib/commit/975147f3125c786ec1672acb3d2564ca16eaa790) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`08f9c1a`](https://github.com/stdlib-js/stdlib/commit/08f9c1af6dee1cc36cda84b10230500e75d53ff5) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`62a5c3a`](https://github.com/stdlib-js/stdlib/commit/62a5c3ad48fc4b0d2757ecea35ae7893ae452ea6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dcusumkbn` [(#2951)](https://github.com/stdlib-js/stdlib/pull/2951) _(by Muhammad Haris, Athan Reines)_
-   [`6fd2e23`](https://github.com/stdlib-js/stdlib/commit/6fd2e23eb246789e43b311eabe9f2fac532175b7) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dasumpw` [(#2949)](https://github.com/stdlib-js/stdlib/pull/2949) _(by Muhammad Haris, Athan Reines)_
-   [`2bcce62`](https://github.com/stdlib-js/stdlib/commit/2bcce6265ac56f754e447c3898b74f58710ea4a6) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn2` [(#2948)](https://github.com/stdlib-js/stdlib/pull/2948) _(by Muhammad Haris)_
-   [`3095c9a`](https://github.com/stdlib-js/stdlib/commit/3095c9a511ea9d5291e2af2344b239a6101ab31f) - **docs:** add example using little-endian arrays _(by Athan Reines)_
-   [`dc08755`](https://github.com/stdlib-js/stdlib/commit/dc08755be693a93f1cef11bc0fe13d30829c9392) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsum` [(#2946)](https://github.com/stdlib-js/stdlib/pull/2946) _(by Muhammad Haris, Athan Reines)_
-   [`8f72b43`](https://github.com/stdlib-js/stdlib/commit/8f72b432c0fc81a78641d5689722ecc9671c6f02) - **style:** add missing spaces around parentheses _(by Philipp Burckhardt)_
-   [`9d55639`](https://github.com/stdlib-js/stdlib/commit/9d55639aa76472d280ee6c613cd338ee16552cd6) - **fix:** update C function names in `blas/ext/base/sfill` to prevent name collisions [(#2945)](https://github.com/stdlib-js/stdlib/pull/2945) _(by Muhammad Haris)_
-   [`1f49ad9`](https://github.com/stdlib-js/stdlib/commit/1f49ad98dfcee0a15a8bd3873508f2eaedd88807) - **fix:** update C function names in `blas/ext/base/dfill` to prevent name collisions [(#2944)](https://github.com/stdlib-js/stdlib/pull/2944) _(by Muhammad Haris)_
-   [`5467341`](https://github.com/stdlib-js/stdlib/commit/54673410322991eb15e9c48c2e6f43912cec3b44) - **fix:** update C function names in `blas/ext/base/cfill` to prevent name collisions [(#2943)](https://github.com/stdlib-js/stdlib/pull/2943) _(by Muhammad Haris)_
-   [`829713b`](https://github.com/stdlib-js/stdlib/commit/829713b1fd6081cafa25133ac90931d8ba911b5e) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumpw` [(#2937)](https://github.com/stdlib-js/stdlib/pull/2937) _(by Muhammad Haris, Athan Reines)_
-   [`bc97fa9`](https://github.com/stdlib-js/stdlib/commit/bc97fa994dbd0e671613e9633a551cdae30fa621) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumors` [(#2934)](https://github.com/stdlib-js/stdlib/pull/2934) _(by Muhammad Haris, Athan Reines)_
-   [`126c898`](https://github.com/stdlib-js/stdlib/commit/126c89855ae2df8c6db72ca48e138f6b45a179b0) - **feat:** refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/dasum` [(#2942)](https://github.com/stdlib-js/stdlib/pull/2942) _(by Aman Bhansali)_
-   [`bc3a86b`](https://github.com/stdlib-js/stdlib/commit/bc3a86bd7570b474ee165594dbb48e389f68fa60) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapxsumkbn` [(#2930)](https://github.com/stdlib-js/stdlib/pull/2930) _(by Muhammad Haris, Athan Reines)_
-   [`b853deb`](https://github.com/stdlib-js/stdlib/commit/b853deb21c917918997772530f2d464b1bc6eb35) - **feat:** refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/dnrm2` [(#2941)](https://github.com/stdlib-js/stdlib/pull/2941) _(by Aman Bhansali, Athan Reines)_
-   [`0ec855b`](https://github.com/stdlib-js/stdlib/commit/0ec855b18df29ca56cea94790c3563d038851981) - **feat:** add C `ndarray` implementation for `blas/base/dsdot` [(#2938)](https://github.com/stdlib-js/stdlib/pull/2938) _(by Aman Bhansali, Athan Reines)_
-   [`e4f28df`](https://github.com/stdlib-js/stdlib/commit/e4f28df214f15513bdafeb5a6bbc3bde115dc63b) - **feat:** add C `ndarray` implementation for `blas/base/ddot` [(#2936)](https://github.com/stdlib-js/stdlib/pull/2936) _(by Aman Bhansali)_
-   [`faa3014`](https://github.com/stdlib-js/stdlib/commit/faa30141a0ca6c5e871a281536ab8755032b70ec) - **feat:** add C `ndarray` implementation for `blas/base/drotm` [(#2935)](https://github.com/stdlib-js/stdlib/pull/2935) _(by Aman Bhansali, Athan Reines)_
-   [`d8a7b13`](https://github.com/stdlib-js/stdlib/commit/d8a7b13093db2dfb01ccb6ec2530753dc758a5ac) - **docs:** fix description _(by Athan Reines)_
-   [`d6b26e2`](https://github.com/stdlib-js/stdlib/commit/d6b26e2cd3ca1f5287b13304f1be7a3ac50bca2a) - **docs:** fix description _(by Athan Reines)_
-   [`6947024`](https://github.com/stdlib-js/stdlib/commit/694702469d8d189687b79b947c18c2e4522e3b7b) - **docs:** fix description _(by Athan Reines)_
-   [`3dde90f`](https://github.com/stdlib-js/stdlib/commit/3dde90f42a760647fc92b59cf47cccc6bc0a26b3) - **docs:** fix description _(by Athan Reines)_
-   [`a187bfc`](https://github.com/stdlib-js/stdlib/commit/a187bfc1f71912625823d786f7b1234b224b323d) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dapx` [(#2929)](https://github.com/stdlib-js/stdlib/pull/2929) _(by Muhammad Haris, Athan Reines)_
-   [`807613d`](https://github.com/stdlib-js/stdlib/commit/807613dc2ae504e83f77c0707f4f6a046752b022) - **feat:** add C `ndarray` implementation for `blas/base/srotm` [(#2928)](https://github.com/stdlib-js/stdlib/pull/2928) _(by Aman Bhansali)_
-   [`2d7dda3`](https://github.com/stdlib-js/stdlib/commit/2d7dda3dec5ce14e2c28b99637c88b6e3de90513) - **fix:** update error message _(by Athan Reines)_
-   [`177f16c`](https://github.com/stdlib-js/stdlib/commit/177f16cd80b9072714e7b4e976487e5e6dd19761) - **chore:** update package meta data [(#2933)](https://github.com/stdlib-js/stdlib/pull/2933) _(by stdlib-bot, Athan Reines)_
-   [`e4de24f`](https://github.com/stdlib-js/stdlib/commit/e4de24f1e086063876214e73f1f6b659dc624eb1) - **fix:** resolve bugs in addon.c files _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`0b47144`](https://github.com/stdlib-js/stdlib/commit/0b47144318f7b9c00a6015d57ff5a8fd0256eac4) - **refactor:** update `blas/ext/base/ssortins` to follow current project conventions _(by Aayush Khanna, Philipp Burckhardt)_
-   [`d93e862`](https://github.com/stdlib-js/stdlib/commit/d93e862d5d5919a73677b3c66e10e5f0bfd99ea0) - **feat:** refactor JavaScript implementation and add C `ndarray` implementation for `blas/base/sasum` [(#2926)](https://github.com/stdlib-js/stdlib/pull/2926) _(by Aman Bhansali, Athan Reines)_
-   [`1e1ea6f`](https://github.com/stdlib-js/stdlib/commit/1e1ea6ff33763f68e8ae501830356cc67381cc1a) - **feat:** update JavaScript implementation and add C `ndarray` API for `blas/base/snrm2` [(#2924)](https://github.com/stdlib-js/stdlib/pull/2924) _(by Aman Bhansali)_
-   [`57d03ad`](https://github.com/stdlib-js/stdlib/commit/57d03ad4821f87e6ea471794cd6c4a60adc40d86) - **feat:** add C `ndarray` implementation for `blas/base/srot` and `blas/base/drot` [(#2896)](https://github.com/stdlib-js/stdlib/pull/2896) _(by Aman Bhansali, Athan Reines)_
-   [`b16259c`](https://github.com/stdlib-js/stdlib/commit/b16259ce187494c5274694cb9415fd254bb24e48) - **feat:** add C `ndarray` implementation for `blas/base/dscal` [(#2915)](https://github.com/stdlib-js/stdlib/pull/2915) _(by Aman Bhansali)_
-   [`226a6d8`](https://github.com/stdlib-js/stdlib/commit/226a6d802c38bfc6c4fb2afe7453fb1767103034) - **feat:** add C `ndarray` API to `blas/ext/base/cfill` [(#2925)](https://github.com/stdlib-js/stdlib/pull/2925) _(by Muhammad Haris, Athan Reines)_
-   [`339ba1b`](https://github.com/stdlib-js/stdlib/commit/339ba1bf405e085779be64f98aa197115483b857) - **feat:** add `blas/tools` namespace _(by Athan Reines)_
-   [`dc22190`](https://github.com/stdlib-js/stdlib/commit/dc22190e473acb1a413af6d4482305c65f2420fd) - **refactor:** use `blas/tools/swap-factory` _(by Athan Reines)_
-   [`2e2f268`](https://github.com/stdlib-js/stdlib/commit/2e2f2681aa86405fd2a5d7cad8c48fe32a2b8cb5) - **refactor:** use `blas/tools/swap-factory` _(by Athan Reines)_
-   [`c070a88`](https://github.com/stdlib-js/stdlib/commit/c070a889f13926400f2422a6334d5252df1bacaf) - **feat:** add `blas/tools/swap-factory` _(by Athan Reines)_
-   [`e454c91`](https://github.com/stdlib-js/stdlib/commit/e454c91ae2af928b61effcddadb31548758f8675) - **chore:** improve code style and conditionals _(by Philipp Burckhardt)_
-   [`898b50d`](https://github.com/stdlib-js/stdlib/commit/898b50d8d705bdf6a55db8cf1858ea1e1d257c35) - **fix:** fix includes and types _(by Philipp Burckhardt)_
-   [`7e366ae`](https://github.com/stdlib-js/stdlib/commit/7e366ae8bd41439be0e99e958d1c3fbb1b7dd0c2) - **chore:** update package.json descriptions _(by Philipp Burckhardt)_
-   [`b8cc3db`](https://github.com/stdlib-js/stdlib/commit/b8cc3db63853dc4e9b4b949abc36bac20c3bf305) - **test:** use `Module` constructor directly _(by Athan Reines)_
-   [`a510e37`](https://github.com/stdlib-js/stdlib/commit/a510e375b6e6f608c7763997ff4abad7d8941f9d) - **test:** add module `ndarray` method tests _(by Athan Reines)_
-   [`f74e989`](https://github.com/stdlib-js/stdlib/commit/f74e9894ad130417d69b9763cf9a9a012ad9c251) - **test:** add tests for the `main` method _(by Athan Reines)_
-   [`faeede1`](https://github.com/stdlib-js/stdlib/commit/faeede1c216d14416e8db5441225671e55e5d865) - **test:** add `Module` constructor tests _(by Athan Reines)_
-   [`0ac4dcf`](https://github.com/stdlib-js/stdlib/commit/0ac4dcf6afd028e7f9f303d39c7c50b2ad485ccd) - **test:** add `main` and `ndarray` method tests _(by Athan Reines)_
-   [`64f9d94`](https://github.com/stdlib-js/stdlib/commit/64f9d944fbff0802562d7c3a9c13c2b16b64f6a0) - **docs:** update headings _(by Athan Reines)_
-   [`849e5da`](https://github.com/stdlib-js/stdlib/commit/849e5da8d61d41532d64e70b02a7fbbce7dd0778) - **docs:** add TypeScript declarations _(by Athan Reines)_
-   [`26aa649`](https://github.com/stdlib-js/stdlib/commit/26aa64946b2966d36338cd580d336d2be3483285) - **docs:** add REPL help _(by Athan Reines)_
-   [`6e5b8a1`](https://github.com/stdlib-js/stdlib/commit/6e5b8a1747929bc984c994b62faefb1fe96ff5f0) - **build:** add support for generating a base64-encoded Wasm module string _(by Athan Reines)_
-   [`fd41e1b`](https://github.com/stdlib-js/stdlib/commit/fd41e1bd1dc6b7c351702bdbf95978b343215b0b) - **feat:** add C `ndarray` API to `blas/ext/base/sfill` [(#2923)](https://github.com/stdlib-js/stdlib/pull/2923) _(by Muhammad Haris, Athan Reines)_
-   [`f7edbe0`](https://github.com/stdlib-js/stdlib/commit/f7edbe044289b877586d0140467cb43cdfd18c19) - **feat:** add C `ndarray` implementation for `blas/base/sdsdot` [(#2921)](https://github.com/stdlib-js/stdlib/pull/2921) _(by Aman Bhansali, Athan Reines)_
-   [`2bedae9`](https://github.com/stdlib-js/stdlib/commit/2bedae91dbdd0080b38ae0413f5e8f26b88db95b) - **feat:** add C `ndarray` implementation for `blas/base/sdot` [(#2919)](https://github.com/stdlib-js/stdlib/pull/2919) _(by Aman Bhansali, Athan Reines)_
-   [`e85f394`](https://github.com/stdlib-js/stdlib/commit/e85f3947aaca3cbbd6ab4f84e41577928e0a10a4) - **feat:** add C `ndarray` implementation for `blas/base/saxpy` [(#2918)](https://github.com/stdlib-js/stdlib/pull/2918) _(by Aman Bhansali)_
-   [`6ae1c10`](https://github.com/stdlib-js/stdlib/commit/6ae1c10d70d86520a0c915864440ef6e8d255a21) - **docs:** rename parameter _(by Athan Reines)_
-   [`7eb1266`](https://github.com/stdlib-js/stdlib/commit/7eb12667e2052db9fc1e678bf0cc2082e2993aec) - **docs:** rename parameters _(by Athan Reines)_
-   [`11889ca`](https://github.com/stdlib-js/stdlib/commit/11889ca2921a6858079c84e21a11d14ee461161f) - **docs:** fix example _(by Athan Reines)_
-   [`040a335`](https://github.com/stdlib-js/stdlib/commit/040a33583774b120b5e486a072cff397fdb1d273) - **feat:** add a C `ndarray` API, refactor, and clean-up _(by Athan Reines)_
-   [`d9580f5`](https://github.com/stdlib-js/stdlib/commit/d9580f56677f81425930dad6a0ed65c71f665314) - **refactor:** reduce code duplication in `blas/ext/base/sfill` [(#2916)](https://github.com/stdlib-js/stdlib/pull/2916) _(by Muhammad Haris)_
-   [`f387603`](https://github.com/stdlib-js/stdlib/commit/f387603e739f88a38af3263ce6ff675ad903ee8c) - **docs:** consistently use declarative instead of imperative sentences outside of intros _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_
-   [`08f39b4`](https://github.com/stdlib-js/stdlib/commit/08f39b45439d043323ec402647f6b3ea8a5a4a56) - **feat:** add C `ndarray` implementation for `blas/base/scopy` [(#2913)](https://github.com/stdlib-js/stdlib/pull/2913) _(by Aman Bhansali, Athan Reines)_
-   [`40502bb`](https://github.com/stdlib-js/stdlib/commit/40502bb62ccef0eecf1132430422a35ae9e5dd3a) - **feat:** add C `ndarray` implementation for `blas/base/dcopy` [(#2906)](https://github.com/stdlib-js/stdlib/pull/2906) _(by Aman Bhansali, Athan Reines)_
-   [`7e11338`](https://github.com/stdlib-js/stdlib/commit/7e11338ae6642c1389e51557262710bd6ebe44aa) - **feat:** add `blas/ext/base/zfill` [(#2907)](https://github.com/stdlib-js/stdlib/pull/2907) _(by Muhammad Haris, Athan Reines)_
-   [`edcea47`](https://github.com/stdlib-js/stdlib/commit/edcea4761bc3065f9c5218c162b38ebec4a6c423) - **feat:** add C `ndarray` implementation for `blas/base/sswap` and `blas/base/dswap` [(#2905)](https://github.com/stdlib-js/stdlib/pull/2905) _(by Aman Bhansali, Athan Reines)_
-   [`6c769ad`](https://github.com/stdlib-js/stdlib/commit/6c769ad65cf528389012efc400b29b6e57a4f352) - **fix:** update error message _(by Athan Reines)_
-   [`a90c34d`](https://github.com/stdlib-js/stdlib/commit/a90c34d316f09ce5dfe165439fbcb2785fcea5a0) - **fix:** update error message _(by Athan Reines)_
-   [`fadff3a`](https://github.com/stdlib-js/stdlib/commit/fadff3a44660678d9ccce8bb101f579ca1913a64) - **feat:** add `blas/ext/base/cfill` [(#2901)](https://github.com/stdlib-js/stdlib/pull/2901) _(by Muhammad Haris, Athan Reines)_
-   [`07a6dc1`](https://github.com/stdlib-js/stdlib/commit/07a6dc162582bc72e783e3e14e741d08b4a59170) - **test:** update messages _(by Athan Reines)_
-   [`ef9e5f6`](https://github.com/stdlib-js/stdlib/commit/ef9e5f6b73e787d500c555f68b705c789d552846) - **style:** disable lint rule _(by Athan Reines)_
-   [`8f29918`](https://github.com/stdlib-js/stdlib/commit/8f29918bc72b0634716eede69449d61ed28dd06c) - **feat:** add `blas/base/daxpy-wasm` _(by Athan Reines)_
-   [`00390b7`](https://github.com/stdlib-js/stdlib/commit/00390b7f27c421251760c78f75697fbf1e3449df) - **fix:** add missing method in declaration tests [(#2900)](https://github.com/stdlib-js/stdlib/pull/2900) _(by Muhammad Haris)_
-   [`2d7e925`](https://github.com/stdlib-js/stdlib/commit/2d7e9251e02cba556ad7e8b40ef90d5190d0d719) - **feat:** add support for stacks in `blas/sswap` [(#2898)](https://github.com/stdlib-js/stdlib/pull/2898) _(by Aman Bhansali, Athan Reines)_
-   [`2aae52e`](https://github.com/stdlib-js/stdlib/commit/2aae52ed394469a4252a6318fe4d933f09f28ab3) - **refactor:** move `ndarray` API to separate source file _(by Athan Reines)_
-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858) - **feat:** add support for stacks in `blas/sdot` [(#2895)](https://github.com/stdlib-js/stdlib/pull/2895) _(by Aman Bhansali, Athan Reines)_
-   [`e8fd916`](https://github.com/stdlib-js/stdlib/commit/e8fd916df0a473709b2ef1caec858f4ca8187720) - **refactor:** use utility to resolve the first indexed element _(by Athan Reines)_
-   [`18deecf`](https://github.com/stdlib-js/stdlib/commit/18deecf00e8d7a8069c0ebfe69a4479c249c98d4) - **refactor:** reduce code duplication by calling \"ndarray\" API _(by Athan Reines)_
-   [`44ebe3c`](https://github.com/stdlib-js/stdlib/commit/44ebe3cfc43a0518991823f98e2e6d96632a0d26) - **docs:** document C API _(by Athan Reines)_
-   [`ae54d13`](https://github.com/stdlib-js/stdlib/commit/ae54d13ecd92912dea70b2d31525d7f54c3a26f1) - **feat:** add C \"ndarray\" API _(by Athan Reines)_
-   [`65b685c`](https://github.com/stdlib-js/stdlib/commit/65b685c163ae4f701766bce6db1a7dfca35d780f) - **docs:** update description _(by Athan Reines)_
-   [`2544a02`](https://github.com/stdlib-js/stdlib/commit/2544a02513ab1ae73c960455671f1886bfb6cf64) - **docs:** update description _(by Athan Reines)_
-   [`9c22207`](https://github.com/stdlib-js/stdlib/commit/9c22207e20b82a0bc627e91886d3de299c78deab) - **refactor:** use stdlib `pow` function _(by Athan Reines)_
-   [`8b1f86b`](https://github.com/stdlib-js/stdlib/commit/8b1f86b855e9f11a36ccf7f58a611650bf210078) - **fix:** prevent writing to read-only ndarrays _(by Athan Reines)_
-   [`2e25339`](https://github.com/stdlib-js/stdlib/commit/2e2533970e09cb59f3533d474ec32756f4ca4f81) - **feat:** add support for batched computation _(by Athan Reines)_
-   [`b789714`](https://github.com/stdlib-js/stdlib/commit/b789714438d74aef087fed6d949a7124b302940d) - **docs:** fix definition _(by Athan Reines)_
-   [`1d666a6`](https://github.com/stdlib-js/stdlib/commit/1d666a61937d44d9c47e4b38c736f50b1666607e) - **docs:** fix parameter annotation _(by Athan Reines)_
-   [`4ca068f`](https://github.com/stdlib-js/stdlib/commit/4ca068f174225d1eaec123656682589febf1b547) - **test:** update to test for exact equality [(#2864)](https://github.com/stdlib-js/stdlib/pull/2864) _(by Aman Bhansali)_
-   [`3e80682`](https://github.com/stdlib-js/stdlib/commit/3e80682320d42a999f428fcf3d30e6711b6b9b89) - **refactor:** update implementation for `blas/ext/base/sdsnansumpw` _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`c6bf7de`](https://github.com/stdlib-js/stdlib/commit/c6bf7de53b6ab8c44263cee7fdf1cdfe2815864d) - **refactor:** update implementation for `blas/ext/base/sapxsumors` _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`7cc8bb9`](https://github.com/stdlib-js/stdlib/commit/7cc8bb9a96147bb94fe8cfddc180a6ec535fc368) - **refactor:** update `blas/ext/base/dsnannsumors` _(by HarshaNP, Philipp Burckhardt)_
-   [`e9f4e07`](https://github.com/stdlib-js/stdlib/commit/e9f4e0759a14b8da93d4e0837b886d8ed56bc696) - **refactor:** update `blas/ext/base/dsnansumpw` to follow current conventions _(by Yaswanth Kosuru, Philipp Burckhardt)_
-   [`e0cef99`](https://github.com/stdlib-js/stdlib/commit/e0cef995e884021db3001dc1a3cfef0ca7b368c2) - **style:** remove extra spaces for regular expressions in publish script _(by Philipp Burckhardt)_
-   [`da12183`](https://github.com/stdlib-js/stdlib/commit/da121832eca80c36e1e32929e994fef44ca8a4cc) - **feat:** add `blas/base/dspr` [(#2794)](https://github.com/stdlib-js/stdlib/pull/2794) _(by Aman Bhansali, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 8 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Aman Bhansali
-   Athan Reines
-   Gururaj Gurram
-   HarshaNP
-   Muhammad Haris
-   Philipp Burckhardt
-   Yaswanth Kosuru

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e) - add support for operating on stacks of vectors
-   [`8a64351`](https://github.com/stdlib-js/stdlib/commit/8a64351ca2c48164945a26eda9411193659fd554) - add `blas/base/sspr` [(#2760)](https://github.com/stdlib-js/stdlib/pull/2760)
-   [`a500a2a`](https://github.com/stdlib-js/stdlib/commit/a500a2a45b2572b852de6efcf8d329cc851861f6) - add `blas/base/dgemm` [(#2541)](https://github.com/stdlib-js/stdlib/pull/2541)
-   [`35cbdfb`](https://github.com/stdlib-js/stdlib/commit/35cbdfbbd0d8144b188bb95d56ec9f4719cc2bc5) - add support for negative strides in `idamax` and `isamax` [(#2793)](https://github.com/stdlib-js/stdlib/pull/2793)
-   [`ab0faa5`](https://github.com/stdlib-js/stdlib/commit/ab0faa5bfd04de14c250bccf4dc402f87816fb20) - add `blas/base/sgemm` [(#2742)](https://github.com/stdlib-js/stdlib/pull/2742)
-   [`09afa7c`](https://github.com/stdlib-js/stdlib/commit/09afa7cf3cf2aa5c578aff1b2e51acf818853e0e) - add `blas/base/dtrsv` [(#2753)](https://github.com/stdlib-js/stdlib/pull/2753)
-   [`1bf4328`](https://github.com/stdlib-js/stdlib/commit/1bf4328be6bc0f6aa4fb988ec84f768a9fc50594) - add `blas/base/strsv` [(#2752)](https://github.com/stdlib-js/stdlib/pull/2752)
-   [`1a0368b`](https://github.com/stdlib-js/stdlib/commit/1a0368b9aa6733bb153cd09ad91fc27200180027) - add `blas/base/dgemv` [(#2654)](https://github.com/stdlib-js/stdlib/pull/2654)
-   [`f1128aa`](https://github.com/stdlib-js/stdlib/commit/f1128aa2432497a7297ad1cc733de562f44169d5) - add `zaxpy`, `zdrot`, and `zscal` to namespace
-   [`10640df`](https://github.com/stdlib-js/stdlib/commit/10640dfff29bff48cc339c31c0fe98ab5a5d2ff3) - add `sspmv`, `ssymv`, `ssyr`, `ssyr2`, and `strmv` to namespace
-   [`1457b6c`](https://github.com/stdlib-js/stdlib/commit/1457b6c9c2107f5888436df9f0897a22ad39c16a) - add `sgemv`, `srot`, and `srotm` to namespace
-   [`4c3c742`](https://github.com/stdlib-js/stdlib/commit/4c3c7423c16b928960bcd21a5bb13669c02118ba) - add `scasum` and `scnrm2` to namespace
-   [`ed6504f`](https://github.com/stdlib-js/stdlib/commit/ed6504f204b1b4b531977b93e49c24238aee8715) - add `dtrmv` and `dznrm2` to namespace
-   [`38b338d`](https://github.com/stdlib-js/stdlib/commit/38b338d6d08bfe3e523ba02bf977430d320cbf03) - add `dspmv`, `dsymv`, `dsyr`, and `dsyr2` to namespace
-   [`d039a63`](https://github.com/stdlib-js/stdlib/commit/d039a63eabd3956155b01fbe11c5e89e94930c2a) - add `csrot`, `drot` and `drotm` to namespace
-   [`66d501a`](https://github.com/stdlib-js/stdlib/commit/66d501a60b22b7cd23cf7e79f768027ad1d8c6e5) - add `caxpy` to namespace
-   [`43439d0`](https://github.com/stdlib-js/stdlib/commit/43439d0098ad812e3276a13ecaaf41f55c501680) - add `blas/base/dsyr` [(#2659)](https://github.com/stdlib-js/stdlib/pull/2659)
-   [`640278b`](https://github.com/stdlib-js/stdlib/commit/640278bc95b4f9f87e58c328b5238606635052e6) - add `blas/base/dtrmv` [(#2540)](https://github.com/stdlib-js/stdlib/pull/2540)
-   [`81c0e52`](https://github.com/stdlib-js/stdlib/commit/81c0e52e0e1ab5367c464b8cdc6a56d8bd2ea4fa) - add `blas/base/sgemv` [(#2365)](https://github.com/stdlib-js/stdlib/pull/2365)
-   [`2254a56`](https://github.com/stdlib-js/stdlib/commit/2254a5616945ee973f080c6d35f19e51778e24ee) - add `blas/base/strmv` [(#2535)](https://github.com/stdlib-js/stdlib/pull/2535)
-   [`4300111`](https://github.com/stdlib-js/stdlib/commit/4300111c80e0bd4941dcdd30a6b6dd36f2250dce) - add `blas/base/ssyr` [(#2658)](https://github.com/stdlib-js/stdlib/pull/2658)
-   [`6966bbb`](https://github.com/stdlib-js/stdlib/commit/6966bbb8dcfdc2345fe3fb04c2100c6a313d3282) - add `blas/base/dsyr2` [(#2712)](https://github.com/stdlib-js/stdlib/pull/2712)
-   [`af15420`](https://github.com/stdlib-js/stdlib/commit/af15420d508303989931981427d6b52c49af7554) - add `blas/base/ssyr2` [(#2708)](https://github.com/stdlib-js/stdlib/pull/2708)
-   [`722452c`](https://github.com/stdlib-js/stdlib/commit/722452c97282738c0a83e336720c63ee785bc69f) - rename 'none' transpose operation to 'no-transpose'
-   [`3dda09b`](https://github.com/stdlib-js/stdlib/commit/3dda09be640b5ee96278691de75d35a61b2ecfe8) - add `blas/base/scasum` [(#2573)](https://github.com/stdlib-js/stdlib/pull/2573)
-   [`7d65943`](https://github.com/stdlib-js/stdlib/commit/7d65943604945f9a9e3ad63267c9d91a8c26da2c) - add `blas/base/caxpy` [(#2121)](https://github.com/stdlib-js/stdlib/pull/2121)
-   [`bdaa7e0`](https://github.com/stdlib-js/stdlib/commit/bdaa7e0c54b8d4cf18bc3d4eb04147971b3c69cd) - add `blas/base/csrot` [(#2256)](https://github.com/stdlib-js/stdlib/pull/2256)
-   [`4d5293d`](https://github.com/stdlib-js/stdlib/commit/4d5293d0cfd81bd1016d1bcc372afefe20b1a211) - add `blas/base/zdrot` [(#2257)](https://github.com/stdlib-js/stdlib/pull/2257)
-   [`96f2299`](https://github.com/stdlib-js/stdlib/commit/96f22991788a808caa052cb3d1e1c9618091e3d3) - add support for specifying integer size
-   [`85ffc1a`](https://github.com/stdlib-js/stdlib/commit/85ffc1a73bdcabdfc4c2a550e398a285eae49ebb) - add `blas/base/zaxpy` [(#2468)](https://github.com/stdlib-js/stdlib/pull/2468)
-   [`08eaa1b`](https://github.com/stdlib-js/stdlib/commit/08eaa1b176d0e510b0af53d7b7a02d5c63090e1f) - add `blas/base/dznrm2` [(#2271)](https://github.com/stdlib-js/stdlib/pull/2271)
-   [`dd73ff2`](https://github.com/stdlib-js/stdlib/commit/dd73ff27e89fc2a39e2fb8a6f54d8b1a1a29f575) - update namespace TypeScript declarations [(#2514)](https://github.com/stdlib-js/stdlib/pull/2514)
-   [`48703d8`](https://github.com/stdlib-js/stdlib/commit/48703d8deabd12050c18f7382c966df26d5239a3) - add utilities to namespace
-   [`defe484`](https://github.com/stdlib-js/stdlib/commit/defe4849d8043a1c5d506d84ad6172a5e0df6af2) - add `blas/base/matrix-triangle-resolve-enum` [(#2497)](https://github.com/stdlib-js/stdlib/pull/2497)
-   [`50316e4`](https://github.com/stdlib-js/stdlib/commit/50316e43a7f59092f56aebcd2acfa815871ae3bf) - add `blas/base/matrix-triangle-resolve-str` [(#2496)](https://github.com/stdlib-js/stdlib/pull/2496)
-   [`1493a14`](https://github.com/stdlib-js/stdlib/commit/1493a1446311df5c8b643e3429dba4c8850fc227) - add `blas/base/diagonal-type-*` utilities [(#2498)](https://github.com/stdlib-js/stdlib/pull/2498)
-   [`04b3803`](https://github.com/stdlib-js/stdlib/commit/04b3803f90e84a700d42da7c1f0117b4676b2040) - add `blas/base/operation-side-*` utilities [(#2499)](https://github.com/stdlib-js/stdlib/pull/2499)
-   [`a61b40c`](https://github.com/stdlib-js/stdlib/commit/a61b40cedd7518a68efb28372e4bf817aeb5a319) - add `blas/base/matrix-triangle-str2enum` and `blas/base/matrix-triangle/enum2str` [(#2495)](https://github.com/stdlib-js/stdlib/pull/2495)
-   [`bc23559`](https://github.com/stdlib-js/stdlib/commit/bc2355981ffa28082d8e23273887501bd3ba674a) - add support for specifying the index offset for `AP`
-   [`8248b4a`](https://github.com/stdlib-js/stdlib/commit/8248b4a4c72d7a981a72075583561b98646c8068) - add macro to convert a stride to an index offset
-   [`ca56638`](https://github.com/stdlib-js/stdlib/commit/ca566387ddc147c4f15fd012a09bd55713307394) - add `blas/base/dspmv` [(#2456)](https://github.com/stdlib-js/stdlib/pull/2456)
-   [`4c95c4b`](https://github.com/stdlib-js/stdlib/commit/4c95c4b36797d601976e647baf2f4a493aff8de5) - add `blas/base/dsymv` [(#2458)](https://github.com/stdlib-js/stdlib/pull/2458)
-   [`51608dc`](https://github.com/stdlib-js/stdlib/commit/51608dce38bc73594242644c3b732c37ed3dfbe8) - add `blas/base/drotm` [(#2266)](https://github.com/stdlib-js/stdlib/pull/2266)
-   [`ad36a03`](https://github.com/stdlib-js/stdlib/commit/ad36a034d88d65ae6a68a4f79122f5867c02c596) - add `blas/base/srotm` [(#2267)](https://github.com/stdlib-js/stdlib/pull/2267)
-   [`c49ba29`](https://github.com/stdlib-js/stdlib/commit/c49ba291cbed0449d7a7e21a32d3d0e9498f74ec) - add `blas/base/scnrm2` [(#2270)](https://github.com/stdlib-js/stdlib/pull/2270)
-   [`f73aeb5`](https://github.com/stdlib-js/stdlib/commit/f73aeb5549179b68269aeedde9c9b2a5351da320) - add `blas/base/sspmv` [(#2414)](https://github.com/stdlib-js/stdlib/pull/2414)
-   [`62744b5`](https://github.com/stdlib-js/stdlib/commit/62744b5bd1fc7a9502d527be5ff3239f0491e05c) - add `blas/base/ssymv` [(#2305)](https://github.com/stdlib-js/stdlib/pull/2305)
-   [`ca84473`](https://github.com/stdlib-js/stdlib/commit/ca844736f22b282b3ee33e0d62373442aaf991db) - update namespace TypeScript declarations [(#2381)](https://github.com/stdlib-js/stdlib/pull/2381)
-   [`79b486d`](https://github.com/stdlib-js/stdlib/commit/79b486d8f6787762e6eb82abb95e7f55a24dc91a) - add `transposeOperationResolveStr` to namespace
-   [`d62dd8c`](https://github.com/stdlib-js/stdlib/commit/d62dd8cc70527215253e242624afe900593117b8) - add `blas/base/transpose-operation-resolve-str`
-   [`8ca3745`](https://github.com/stdlib-js/stdlib/commit/8ca374503c82fefe69dfc281ad10a4a9d1d733a3) - add `transposeOperationResolveEnum` to namespace
-   [`f493d51`](https://github.com/stdlib-js/stdlib/commit/f493d512c7a4e5b3f3410266ea44f08bd47f7bde) - add `blas/base/transpose-operation-resolve-enum`
-   [`7ae7d15`](https://github.com/stdlib-js/stdlib/commit/7ae7d158f1f467abc1a42491f2acdfdae83ad520) - add `transposeOperationStr2Enum` to namespace
-   [`3466408`](https://github.com/stdlib-js/stdlib/commit/346640810621a54a70b8f6e175ebce2098d8a736) - add `transposeOperationEnum2Str` to namespace
-   [`74bd47b`](https://github.com/stdlib-js/stdlib/commit/74bd47b73df622246480fb51a3f7a69a7bebb0c4) - add `blas/base/transpose-operation-enum2str` and `blas/base/transpose-operation-str2enum`
-   [`8741f9c`](https://github.com/stdlib-js/stdlib/commit/8741f9ce65e3aefe3d4b1aca6d3be765f44c6f16) - add `isOperationSide` to namespace
-   [`66c7026`](https://github.com/stdlib-js/stdlib/commit/66c7026967dd937980d050a79480c425be2f61a0) - add `blas/base/assert/is-operation-side`
-   [`901d732`](https://github.com/stdlib-js/stdlib/commit/901d732e5f564d696ddfe87481eecd98d5bcf967) - add `isDiagonalType` to namespace
-   [`b55cf02`](https://github.com/stdlib-js/stdlib/commit/b55cf027c771d1ad80ca2221cb8115739eea39b4) - add `blas/base/assert/is-diagonal-type`
-   [`76e73a5`](https://github.com/stdlib-js/stdlib/commit/76e73a51987ac45b78b3f5011806c57ca33c1951) - add `blas/base/zscal` [(#2253)](https://github.com/stdlib-js/stdlib/pull/2253)
-   [`b8bd516`](https://github.com/stdlib-js/stdlib/commit/b8bd51687cabdda74299cb37b9a5527fddd35aaa) - update namespace TypeScript declarations [(#2351)](https://github.com/stdlib-js/stdlib/pull/2351)
-   [`df48448`](https://github.com/stdlib-js/stdlib/commit/df484486ee1dda67e3b5821a7531786992fd5837) - add `layoutResolveEnum` to namespace
-   [`4e6b7fd`](https://github.com/stdlib-js/stdlib/commit/4e6b7fdee8f3f217c6393c1c1043763377a8d6d5) - add `blas/base/layout-resolve-enum`
-   [`c533088`](https://github.com/stdlib-js/stdlib/commit/c533088d61f9a0d2b182dbe8d89329c9b625f27b) - add `layoutResolveStr` to namespace
-   [`68df748`](https://github.com/stdlib-js/stdlib/commit/68df748067ae7176a3f12d3d2de20def0195ffd4) - add `blas/base/layout-resolve-str`
-   [`bd2b0a6`](https://github.com/stdlib-js/stdlib/commit/bd2b0a61e51e036f7f4044cd1ec16ec7736dbf84) - add `layoutEnum2Str` and `layoutStr2Enum` to namespace
-   [`5d9a6c0`](https://github.com/stdlib-js/stdlib/commit/5d9a6c09fdc79952164cbe2869729d9dca8e1d36) - add `blas/base/layout-enum2str` and `blas/base/layout-str2enum`
-   [`3719fcd`](https://github.com/stdlib-js/stdlib/commit/3719fcd56b28595b9b101f9767b0b6d965c9e426) - add `isMatrixTriangle` to namespace
-   [`49464c6`](https://github.com/stdlib-js/stdlib/commit/49464c6b0dd287f92e145c73af1f601d000edd37) - add `blas/base/assert/is-matrix-triangle`
-   [`926dcec`](https://github.com/stdlib-js/stdlib/commit/926dcecec6a4940ecd7ee57da5db924fadfa3edb) - add `isTransposeOperation` to namespace
-   [`b59eb8b`](https://github.com/stdlib-js/stdlib/commit/b59eb8bf46debbde5e24ec21ed1c0afb184e8ae0) - add `blas/base/assert/is-transpose-operation`
-   [`af7137c`](https://github.com/stdlib-js/stdlib/commit/af7137c73ecc48cf39309290403cfab9e485d2f5) - add `assert` to namespace
-   [`b5f6754`](https://github.com/stdlib-js/stdlib/commit/b5f6754f4b180101e7b43b602d1cbfac7470c699) - add `blas/base/assert` namespace
-   [`9b21c2b`](https://github.com/stdlib-js/stdlib/commit/9b21c2b3c40d411cf2e1b4dd01def3a672774645) - add `blas/base/assert/is-layout`
-   [`44ccf84`](https://github.com/stdlib-js/stdlib/commit/44ccf84cda56714dd8624d1d3df130674b64e1dc) - add `matrixTriangles` to namespace
-   [`917e002`](https://github.com/stdlib-js/stdlib/commit/917e00207daf329791c74bba0060f9df5094b267) - add `blas/base/matrix-triangles`
-   [`91237b5`](https://github.com/stdlib-js/stdlib/commit/91237b58273c24c9e5b3925deb0053cafa90734c) - add `operationSides` to namespace
-   [`efeb385`](https://github.com/stdlib-js/stdlib/commit/efeb385e6371ff99e0cf4cacb7084d43a75a95b7) - add `blas/base/operation-sides`
-   [`38a9e4c`](https://github.com/stdlib-js/stdlib/commit/38a9e4cb046a114a11438b681437949e69b3cd75) - add `diagonalTypes` to namespace
-   [`123f7f9`](https://github.com/stdlib-js/stdlib/commit/123f7f945a9154c7518c6c0837110e0712811b5f) - add `blas/base/diagonal-types`
-   [`31aa8db`](https://github.com/stdlib-js/stdlib/commit/31aa8dbfb2c0a722710adc8a399e703b224cadab) - add `transposeOperations` to namespace
-   [`87a0d77`](https://github.com/stdlib-js/stdlib/commit/87a0d77b81cc5bc8c05e40d6ec22f548c5d3dd14) - add `blas/base/transpose-operations`
-   [`9b31a8f`](https://github.com/stdlib-js/stdlib/commit/9b31a8f861f2777d60ef74323ca1ae6dfb1839ed) - add `blas/base/layouts`
-   [`378240f`](https://github.com/stdlib-js/stdlib/commit/378240f1bb93253435f89aec4d5c7ce64eae4703) - update namespace
-   [`fe1e973`](https://github.com/stdlib-js/stdlib/commit/fe1e97344bc14c85fc73126f0d0371ed07ecfa86) - add `blas/base/orders`
-   [`b40f5c3`](https://github.com/stdlib-js/stdlib/commit/b40f5c33aaf2113c73f8f0811c8d1cdc9fbfde53) - add `blas/base/cscal` [(#2104)](https://github.com/stdlib-js/stdlib/pull/2104)
-   [`a4748fb`](https://github.com/stdlib-js/stdlib/commit/a4748fb7a658f89c268388389355ed87b5a06f84) - add `blas/base/dcabs1` [(#2204)](https://github.com/stdlib-js/stdlib/pull/2204)
-   [`70864fa`](https://github.com/stdlib-js/stdlib/commit/70864faabdacdb25caa2a7ee75bd0fcc7ba478c9) - add `blas/base/scabs1` [(#2209)](https://github.com/stdlib-js/stdlib/pull/2209)
-   [`17c7032`](https://github.com/stdlib-js/stdlib/commit/17c703258149f4d66f7f828e46e4a5972f2b0ef5) - add `blas/base/xerbla`
-   [`ee78820`](https://github.com/stdlib-js/stdlib/commit/ee788201141cbc9a25d1d74982c1c762080ae6fb) - add support for specifying integer size
-   [`4508f54`](https://github.com/stdlib-js/stdlib/commit/4508f546e500ff3c38ac50b0d2613daa40b7266e) - add support for specifying integer size
-   [`757ce66`](https://github.com/stdlib-js/stdlib/commit/757ce6615c60248091852ec6b9362647a5ec1e5d) - add support for specifying integer size
-   [`b68a188`](https://github.com/stdlib-js/stdlib/commit/b68a188a72b4037aec8b4db77c917d4fc300cb46) - add support for specifying integer size
-   [`34a206e`](https://github.com/stdlib-js/stdlib/commit/34a206ee606e162bf73ac53e9e488ee9b88d981a) - add support for specifying integer size
-   [`de65e0c`](https://github.com/stdlib-js/stdlib/commit/de65e0c599aff12d7e1bc901749474299da831a0) - add support for specifying integer size
-   [`faa875a`](https://github.com/stdlib-js/stdlib/commit/faa875a920a06b4671b59db2b574c7f7a7702372) - add support for specifying integer size
-   [`c0baf82`](https://github.com/stdlib-js/stdlib/commit/c0baf8241d75854a1334fd1add74c3028c91095d) - add support for specifying integer size
-   [`d66b177`](https://github.com/stdlib-js/stdlib/commit/d66b177c7092819c8539c32a5c5a2bdc74b53cd1) - add support for specifying integer size
-   [`0a88c6c`](https://github.com/stdlib-js/stdlib/commit/0a88c6c47ff0075c010624031572a3b1f05c2d2d) - add support for specifying integer size
-   [`8a403b0`](https://github.com/stdlib-js/stdlib/commit/8a403b02cdd283dcfc12cfca3bb0a10b5cbac993) - add support for specifying integer size
-   [`9174c02`](https://github.com/stdlib-js/stdlib/commit/9174c02e42ca651f8959fff0626ae8147a75ee09) - add `blas/base/shared`
-   [`fb6571e`](https://github.com/stdlib-js/stdlib/commit/fb6571ecebab94780dbd3b6d32b0c0275a3d636b) - add `blas/base/isamax` [(#2153)](https://github.com/stdlib-js/stdlib/pull/2153)
-   [`d1cbb09`](https://github.com/stdlib-js/stdlib/commit/d1cbb0973d127cf391ecce4efefd1390d6aab0e1) - add `blas/base/srot` [(#1844)](https://github.com/stdlib-js/stdlib/pull/1844)
-   [`3f1caa3`](https://github.com/stdlib-js/stdlib/commit/3f1caa37909030a50ec54f75dc444edea1aad950) - add `blas/base/drot` [(#1823)](https://github.com/stdlib-js/stdlib/pull/1823)
-   [`8dead56`](https://github.com/stdlib-js/stdlib/commit/8dead56dd7d25624eb7619ccb785111cf678f09d) - update namespace TypeScript declarations [(#2181)](https://github.com/stdlib-js/stdlib/pull/2181 )
-   [`95653a3`](https://github.com/stdlib-js/stdlib/commit/95653a3f070bf770e5281a46d0d85ba18d72948b) - add `blas/base/idamax` [(#2152)](https://github.com/stdlib-js/stdlib/pull/2152)
-   [`7155e52`](https://github.com/stdlib-js/stdlib/commit/7155e52806a52b6918d0de96ea2fe5da2c19bcd0) - add `blas/base/zswap` [(#2075)](https://github.com/stdlib-js/stdlib/pull/2075)
-   [`1dda7d2`](https://github.com/stdlib-js/stdlib/commit/1dda7d20d743bf44053c96cfa9bf89f456e1ed8b) - add `blas/base/zcopy` [(#2064)](https://github.com/stdlib-js/stdlib/pull/2064)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`aabe731`](https://github.com/stdlib-js/stdlib/commit/aabe7310272e138b7ae69a9297832aa7fcb21ef1) - update variable name and define `status` type
-   [`b5de107`](https://github.com/stdlib-js/stdlib/commit/b5de10702d2b6ecc6c843d61f755b429bfe3c78d) - add missing parameters and update description
-   [`1fce730`](https://github.com/stdlib-js/stdlib/commit/1fce730e287d8688956b801feb547ebb6a237756) - use correct include path
-   [`1fde962`](https://github.com/stdlib-js/stdlib/commit/1fde962b77faff072bd6296e1fbde207ad02cbe6) - use correct dependencies in manifest file
-   [`da288a4`](https://github.com/stdlib-js/stdlib/commit/da288a4cda05760681a70fc0a941ef91e0114b05) - resolve strided 2D array
-   [`81aca47`](https://github.com/stdlib-js/stdlib/commit/81aca4745dae0b9ab083f1c79f6e60617a109f4c) - update variable name
-   [`6b0d3fc`](https://github.com/stdlib-js/stdlib/commit/6b0d3fc30e73190cbf953f636e1eb39b02e7260e) - update paths, descriptions, and examples [(#2457)](https://github.com/stdlib-js/stdlib/pull/2457)
-   [`15ea69b`](https://github.com/stdlib-js/stdlib/commit/15ea69be968a9dbc98310ad06a79f53759841ffc) - update C examples and description for `blas/base/srotm` [(#2448)](https://github.com/stdlib-js/stdlib/pull/2448)
-   [`1c95092`](https://github.com/stdlib-js/stdlib/commit/1c950922dbe073c352ceec63a25b3d6972f9d668) - perform float32 emulation in `blas/base/srotm` [(#2445)](https://github.com/stdlib-js/stdlib/pull/2445)
-   [`561f98e`](https://github.com/stdlib-js/stdlib/commit/561f98ec00a05cb582b78515c759939eeaec006a) - update include path and fix typo
-   [`258cc06`](https://github.com/stdlib-js/stdlib/commit/258cc060947be206b283ff4d066953dcebb0143f) - assign enum values to CBLAS compatible aliases
-   [`0c3213e`](https://github.com/stdlib-js/stdlib/commit/0c3213e4e3219c0574d0c49e2486db1ac714c952) - rename `orders` to `layouts`
-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - specify integer type to match CBLAS
-   [`73e863a`](https://github.com/stdlib-js/stdlib/commit/73e863a31c1d25d63a26c6a3be93e745e8396d19) - address undeclared identifier
-   [`0992fe2`](https://github.com/stdlib-js/stdlib/commit/0992fe22060cb8f860cfd9e8f590d4c7a83c7287) - replace semicolons with commas
-   [`d583804`](https://github.com/stdlib-js/stdlib/commit/d583804fb1d05b8ac4d40e1e897f8682c71e0e2b) - resolve bugs in addon.c
-   [`bcf58bb`](https://github.com/stdlib-js/stdlib/commit/bcf58bbc808831edd9993072d47bb1bfdd9fb1a6) - resolve bugs in addon.c
-   [`de9ca6a`](https://github.com/stdlib-js/stdlib/commit/de9ca6a375bffa0683dde68a81da5922edd3d9c2) - update manifest.json
-   [`dd12bd9`](https://github.com/stdlib-js/stdlib/commit/dd12bd97ea123a9446e54ba1b5b71e5277beef3e) - add missing deps
-   [`7f2860f`](https://github.com/stdlib-js/stdlib/commit/7f2860f40dbc95bb2fab1efd325f7d515a4e0a70) - remove unused header
-   [`b48600a`](https://github.com/stdlib-js/stdlib/commit/b48600a4e5f504aae71205191c5c672f95835250) - add missing include
-   [`06b1e94`](https://github.com/stdlib-js/stdlib/commit/06b1e94ab81410ef61ca7ada0b7f54aca029e77d) - add missing include
-   [`e709ece`](https://github.com/stdlib-js/stdlib/commit/e709eced3f4dcc94f5a8aeb87c8331d2a5ba5092) - update libraries
-   [`04f59a2`](https://github.com/stdlib-js/stdlib/commit/04f59a288780ff5cbaf8516db4122cbb870ced1b) - **fblas/ext/base/dcusumors:** change from `int64` to `double` [(#2085)](https://github.com/stdlib-js/stdlib/pull/2085)
-   [`37a6dfc`](https://github.com/stdlib-js/stdlib/commit/37a6dfcc48019b5b72fb885fd7d6565b5e928b1a) - address typo
-   [`a0ee397`](https://github.com/stdlib-js/stdlib/commit/a0ee397c28267c3a8234c81d1eda673e74ca26f0) - update dependencies and update documentation
-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - update build configurations and add missing include
-   [`327d765`](https://github.com/stdlib-js/stdlib/commit/327d76545afdbdcaa80664d945919ab79b9fb1d0) - use correct variable names and fix configuration file
-   [`80fb571`](https://github.com/stdlib-js/stdlib/commit/80fb5712491212f6a24adc12e76c72781a1a422c) - remove trailing commas
-   [`fbb34de`](https://github.com/stdlib-js/stdlib/commit/fbb34debfe94725c767866c47607520918ef9d84) - update build configuration and remove unnecessary cast
-   [`23fba1c`](https://github.com/stdlib-js/stdlib/commit/23fba1c12a6ed102c00e7831aeb8cde2be56cff0) - update build configuration
-   [`4d9c326`](https://github.com/stdlib-js/stdlib/commit/4d9c326d71d640f99f696a29c7f257961c1484b3) - update build configuration
-   [`2d5c522`](https://github.com/stdlib-js/stdlib/commit/2d5c52271193b9a11ae43ea362dd51bd8f402de8) - update build configurations
-   [`caf0ebb`](https://github.com/stdlib-js/stdlib/commit/caf0ebb5e542074f2f2ad61f12a6c12221b124ea) - update build configurations and fix argument extraction
-   [`c7f7ea9`](https://github.com/stdlib-js/stdlib/commit/c7f7ea9c2008f55462da45c9bd641add72670872) - update build configurations
-   [`07514b1`](https://github.com/stdlib-js/stdlib/commit/07514b1f40412bc50348fe6a5c9a85c26f3c3675) - update build configurations
-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - update build configurations
-   [`4b27189`](https://github.com/stdlib-js/stdlib/commit/4b27189934e9d43d64d9438fcd94ef788eb9432b) - update build configurations
-   [`61bba7a`](https://github.com/stdlib-js/stdlib/commit/61bba7abbae8924dc615773a7e74daf920570c19) - update include path
-   [`78f03b5`](https://github.com/stdlib-js/stdlib/commit/78f03b5b21b82ba088a3fac0275faa6cf24e81ac) - use correct package names
-   [`bea0904`](https://github.com/stdlib-js/stdlib/commit/bea0904866d0e36557d9e72d8922833517dae522) - update dependencies

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e): return an ndarray, rather than a scalar

    -   To migrate, users should invoke the `#.get()` method to retrieve the scalar
        value from the returned zero-dimensional ndarray.

-   [`2254a56`](https://github.com/stdlib-js/stdlib/commit/2254a5616945ee973f080c6d35f19e51778e24ee): rename `none` transpose operation to `no-transpose` in `@stdlib/types`

    -   To migrate, users should change their usage of `none` to `no-transpose`. This change enhances code readability and aligns the string literal with the C enumeration constant.

-   [`722452c`](https://github.com/stdlib-js/stdlib/commit/722452c97282738c0a83e336720c63ee785bc69f): rename 'none' transpose operation to 'no-transpose'
-   [`bc23559`](https://github.com/stdlib-js/stdlib/commit/bc2355981ffa28082d8e23273887501bd3ba674a): add offset parameter to `ndarray` method

    -   To migrate, users should set the `offsetAP` parameter. For most cases,
        this parameter will be zero, but supporting this parameter allows
        users to specify alternative starting indices, such as needed when
        working with ndarray views.

-   [`85ec173`](https://github.com/stdlib-js/stdlib/commit/85ec1734c06b80b13eb607576e592414047c90a7): remove `blas/base/orders`

    -   To migrate, users should use `blas/base/layouts` and the
        `STDLIB_BLAS_LAYOUT` enum.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 21 issues were closed in this release:

[#276](https://github.com/stdlib-js/stdlib/issues/276), [#277](https://github.com/stdlib-js/stdlib/issues/277), [#1434](https://github.com/stdlib-js/stdlib/issues/1434), [#1464](https://github.com/stdlib-js/stdlib/issues/1464), [#1471](https://github.com/stdlib-js/stdlib/issues/1471), [#1475](https://github.com/stdlib-js/stdlib/issues/1475), [#1488](https://github.com/stdlib-js/stdlib/issues/1488), [#1504](https://github.com/stdlib-js/stdlib/issues/1504), [#1506](https://github.com/stdlib-js/stdlib/issues/1506), [#1509](https://github.com/stdlib-js/stdlib/issues/1509), [#1510](https://github.com/stdlib-js/stdlib/issues/1510), [#1511](https://github.com/stdlib-js/stdlib/issues/1511), [#1514](https://github.com/stdlib-js/stdlib/issues/1514), [#1516](https://github.com/stdlib-js/stdlib/issues/1516), [#1517](https://github.com/stdlib-js/stdlib/issues/1517), [#1533](https://github.com/stdlib-js/stdlib/issues/1533), [#1541](https://github.com/stdlib-js/stdlib/issues/1541), [#1542](https://github.com/stdlib-js/stdlib/issues/1542), [#1544](https://github.com/stdlib-js/stdlib/issues/1544), [#2047](https://github.com/stdlib-js/stdlib/issues/2047), [#2792](https://github.com/stdlib-js/stdlib/issues/2792)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`df3ed1e`](https://github.com/stdlib-js/stdlib/commit/df3ed1ee7fdc62c9f49bfa38eb1df240fb752a6e) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e) - **feat:** add support for operating on stacks of vectors _(by Athan Reines)_
-   [`8a64351`](https://github.com/stdlib-js/stdlib/commit/8a64351ca2c48164945a26eda9411193659fd554) - **feat:** add `blas/base/sspr` [(#2760)](https://github.com/stdlib-js/stdlib/pull/2760) _(by Aman Bhansali, Athan Reines)_
-   [`a500a2a`](https://github.com/stdlib-js/stdlib/commit/a500a2a45b2572b852de6efcf8d329cc851861f6) - **feat:** add `blas/base/dgemm` [(#2541)](https://github.com/stdlib-js/stdlib/pull/2541) _(by Pranav Goswami, Athan Reines, Aman Bhansali)_
-   [`35cbdfb`](https://github.com/stdlib-js/stdlib/commit/35cbdfbbd0d8144b188bb95d56ec9f4719cc2bc5) - **feat:** add support for negative strides in `idamax` and `isamax` [(#2793)](https://github.com/stdlib-js/stdlib/pull/2793) _(by Pranav Goswami)_
-   [`ab0faa5`](https://github.com/stdlib-js/stdlib/commit/ab0faa5bfd04de14c250bccf4dc402f87816fb20) - **feat:** add `blas/base/sgemm` [(#2742)](https://github.com/stdlib-js/stdlib/pull/2742) _(by Aman Bhansali, Athan Reines, stdlib-bot)_
-   [`b3f312c`](https://github.com/stdlib-js/stdlib/commit/b3f312c6b7b36862314e4163aba76e3e3999fcb4) - **test:** fix description _(by Athan Reines)_
-   [`09afa7c`](https://github.com/stdlib-js/stdlib/commit/09afa7cf3cf2aa5c578aff1b2e51acf818853e0e) - **feat:** add `blas/base/dtrsv` [(#2753)](https://github.com/stdlib-js/stdlib/pull/2753) _(by Aman Bhansali)_
-   [`de0e5b9`](https://github.com/stdlib-js/stdlib/commit/de0e5b93922db9358bd20d5b337cd32e69b8cdac) - **docs:** add note _(by Athan Reines)_
-   [`1bf4328`](https://github.com/stdlib-js/stdlib/commit/1bf4328be6bc0f6aa4fb988ec84f768a9fc50594) - **feat:** add `blas/base/strsv` [(#2752)](https://github.com/stdlib-js/stdlib/pull/2752) _(by Aman Bhansali, Athan Reines)_
-   [`2b123f6`](https://github.com/stdlib-js/stdlib/commit/2b123f66af0c8d053d0d7d0dc6fae718fc182bb3) - **style:** fix missing spaces _(by Athan Reines)_
-   [`4f98407`](https://github.com/stdlib-js/stdlib/commit/4f98407129de0fdc6a3731e984ea9fb51101225f) - **style:** fix missing spaces _(by Athan Reines)_
-   [`0be3828`](https://github.com/stdlib-js/stdlib/commit/0be382865d07a948545f6e6e6c1da14740c2d8fb) - **test:** fix test fixture _(by Athan Reines)_
-   [`8018ce3`](https://github.com/stdlib-js/stdlib/commit/8018ce3ba4efdf454633393970949dd868c532fc) - **test:** fix test fixture _(by Athan Reines)_
-   [`6c3bfbd`](https://github.com/stdlib-js/stdlib/commit/6c3bfbdcbb11a33737c24d413e661e59c4746f01) - **docs:** update description _(by Athan Reines)_
-   [`3f617f6`](https://github.com/stdlib-js/stdlib/commit/3f617f6258fd1ed2e68a305a42621672e988a1c3) - **docs:** fix source comment [(#2735)](https://github.com/stdlib-js/stdlib/pull/2735) _(by Aman Bhansali)_
-   [`1a0368b`](https://github.com/stdlib-js/stdlib/commit/1a0368b9aa6733bb153cd09ad91fc27200180027) - **feat:** add `blas/base/dgemv` [(#2654)](https://github.com/stdlib-js/stdlib/pull/2654) _(by Aman Bhansali, Athan Reines)_
-   [`283fb86`](https://github.com/stdlib-js/stdlib/commit/283fb861b91c55276e3a38b080c2983265db3b76) - **test:** update descriptions _(by Athan Reines)_
-   [`bebfa1d`](https://github.com/stdlib-js/stdlib/commit/bebfa1dea0c0303b185ff2123243616f440c5b71) - **docs:** fix text wrapping _(by Athan Reines)_
-   [`e22f5a9`](https://github.com/stdlib-js/stdlib/commit/e22f5a978215da36f0987aa667829fbc566f4e9c) - **style:** fix lint errors _(by Athan Reines)_
-   [`868c9aa`](https://github.com/stdlib-js/stdlib/commit/868c9aa323e5c49a00ecaa944ce90d968c80f6de) - **docs:** update ToC _(by Athan Reines)_
-   [`f1128aa`](https://github.com/stdlib-js/stdlib/commit/f1128aa2432497a7297ad1cc733de562f44169d5) - **feat:** add `zaxpy`, `zdrot`, and `zscal` to namespace _(by Athan Reines)_
-   [`10640df`](https://github.com/stdlib-js/stdlib/commit/10640dfff29bff48cc339c31c0fe98ab5a5d2ff3) - **feat:** add `sspmv`, `ssymv`, `ssyr`, `ssyr2`, and `strmv` to namespace _(by Athan Reines)_
-   [`1457b6c`](https://github.com/stdlib-js/stdlib/commit/1457b6c9c2107f5888436df9f0897a22ad39c16a) - **feat:** add `sgemv`, `srot`, and `srotm` to namespace _(by Athan Reines)_
-   [`4c3c742`](https://github.com/stdlib-js/stdlib/commit/4c3c7423c16b928960bcd21a5bb13669c02118ba) - **feat:** add `scasum` and `scnrm2` to namespace _(by Athan Reines)_
-   [`ed6504f`](https://github.com/stdlib-js/stdlib/commit/ed6504f204b1b4b531977b93e49c24238aee8715) - **feat:** add `dtrmv` and `dznrm2` to namespace _(by Athan Reines)_
-   [`38b338d`](https://github.com/stdlib-js/stdlib/commit/38b338d6d08bfe3e523ba02bf977430d320cbf03) - **feat:** add `dspmv`, `dsymv`, `dsyr`, and `dsyr2` to namespace _(by Athan Reines)_
-   [`d039a63`](https://github.com/stdlib-js/stdlib/commit/d039a63eabd3956155b01fbe11c5e89e94930c2a) - **feat:** add `csrot`, `drot` and `drotm` to namespace _(by Athan Reines)_
-   [`66d501a`](https://github.com/stdlib-js/stdlib/commit/66d501a60b22b7cd23cf7e79f768027ad1d8c6e5) - **feat:** add `caxpy` to namespace _(by Athan Reines)_
-   [`aabe731`](https://github.com/stdlib-js/stdlib/commit/aabe7310272e138b7ae69a9297832aa7fcb21ef1) - **fix:** update variable name and define `status` type _(by Athan Reines)_
-   [`43439d0`](https://github.com/stdlib-js/stdlib/commit/43439d0098ad812e3276a13ecaaf41f55c501680) - **feat:** add `blas/base/dsyr` [(#2659)](https://github.com/stdlib-js/stdlib/pull/2659) _(by Aman Bhansali, Athan Reines)_
-   [`b3a0bd1`](https://github.com/stdlib-js/stdlib/commit/b3a0bd1a3e9bcdde3af048c7d6b6cfcd3765138f) - **docs:** fix example order _(by Athan Reines)_
-   [`058f073`](https://github.com/stdlib-js/stdlib/commit/058f07330d309cf9009a7efc101029d40827ff31) - **test:** fix grammar _(by Athan Reines)_
-   [`0286f64`](https://github.com/stdlib-js/stdlib/commit/0286f64c5a635ec2ac7daf40bc38ae417c37b8a2) - **refactor:** use \"fast\" `max` utility _(by Athan Reines)_
-   [`640278b`](https://github.com/stdlib-js/stdlib/commit/640278bc95b4f9f87e58c328b5238606635052e6) - **feat:** add `blas/base/dtrmv` [(#2540)](https://github.com/stdlib-js/stdlib/pull/2540) _(by Aman Bhansali, Athan Reines)_
-   [`e8ef5ad`](https://github.com/stdlib-js/stdlib/commit/e8ef5ad04ba9508f9aa5846ee108afb68ef58dab) - **test:** update descriptions _(by Athan Reines)_
-   [`81c0e52`](https://github.com/stdlib-js/stdlib/commit/81c0e52e0e1ab5367c464b8cdc6a56d8bd2ea4fa) - **feat:** add `blas/base/sgemv` [(#2365)](https://github.com/stdlib-js/stdlib/pull/2365) _(by Aman Bhansali, Athan Reines)_
-   [`2254a56`](https://github.com/stdlib-js/stdlib/commit/2254a5616945ee973f080c6d35f19e51778e24ee) - **feat:** add `blas/base/strmv` [(#2535)](https://github.com/stdlib-js/stdlib/pull/2535) _(by Aman Bhansali, Athan Reines)_
-   [`4300111`](https://github.com/stdlib-js/stdlib/commit/4300111c80e0bd4941dcdd30a6b6dd36f2250dce) - **feat:** add `blas/base/ssyr` [(#2658)](https://github.com/stdlib-js/stdlib/pull/2658) _(by Aman Bhansali, Athan Reines)_
-   [`fc54a2b`](https://github.com/stdlib-js/stdlib/commit/fc54a2b7f610c9e19715d2b2d6ef14c2b3736e5f) - **docs:** update examples _(by Athan Reines)_
-   [`3517656`](https://github.com/stdlib-js/stdlib/commit/35176561bc51df0c9c6c92e81544266fed44f8a4) - **docs:** address link failures _(by Athan Reines)_
-   [`6966bbb`](https://github.com/stdlib-js/stdlib/commit/6966bbb8dcfdc2345fe3fb04c2100c6a313d3282) - **feat:** add `blas/base/dsyr2` [(#2712)](https://github.com/stdlib-js/stdlib/pull/2712) _(by Aman Bhansali, Athan Reines)_
-   [`b5de107`](https://github.com/stdlib-js/stdlib/commit/b5de10702d2b6ecc6c843d61f755b429bfe3c78d) - **fix:** add missing parameters and update description _(by Athan Reines)_
-   [`1fce730`](https://github.com/stdlib-js/stdlib/commit/1fce730e287d8688956b801feb547ebb6a237756) - **fix:** use correct include path _(by Philipp Burckhardt)_
-   [`1fde962`](https://github.com/stdlib-js/stdlib/commit/1fde962b77faff072bd6296e1fbde207ad02cbe6) - **fix:** use correct dependencies in manifest file _(by Philipp Burckhardt)_
-   [`af15420`](https://github.com/stdlib-js/stdlib/commit/af15420d508303989931981427d6b52c49af7554) - **feat:** add `blas/base/ssyr2` [(#2708)](https://github.com/stdlib-js/stdlib/pull/2708) _(by Aman Bhansali, Athan Reines)_
-   [`308005e`](https://github.com/stdlib-js/stdlib/commit/308005e8a9cf48917f0c68451bd05f7d6fb06ba4) - **bench:** adjust sample values to prevent overflow _(by Athan Reines)_
-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`f53097a`](https://github.com/stdlib-js/stdlib/commit/f53097a6061a65547260d261ea425f3c2039c6f5) - **docs:** update comments _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`ba35d8f`](https://github.com/stdlib-js/stdlib/commit/ba35d8f2e923d26640828a0f035333bd778389b7) - **refactor:** update paths _(by Athan Reines)_
-   [`e3a3679`](https://github.com/stdlib-js/stdlib/commit/e3a3679f1e733cf02ce47cdc4bd0137bd37bef41) - **refactor:** update paths _(by Athan Reines)_
-   [`ddd4403`](https://github.com/stdlib-js/stdlib/commit/ddd44032f9d8a6d318c80e3b239ff72280ffc599) - **refactor:** update paths _(by Athan Reines)_
-   [`0406147`](https://github.com/stdlib-js/stdlib/commit/04061476d1036e1b8b786736b1ba1653eddff1ef) - **refactor:** update paths _(by Athan Reines)_
-   [`b9703b5`](https://github.com/stdlib-js/stdlib/commit/b9703b569dc2f0a67e604e388a0d188b08138b48) - **refactor:** update paths _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`ad760a9`](https://github.com/stdlib-js/stdlib/commit/ad760a922086631226d8f759a0d467c707fbc0fb) - **refactor:** update paths _(by Athan Reines)_
-   [`722452c`](https://github.com/stdlib-js/stdlib/commit/722452c97282738c0a83e336720c63ee785bc69f) - **feat:** rename 'none' transpose operation to 'no-transpose' _(by Athan Reines)_
-   [`da288a4`](https://github.com/stdlib-js/stdlib/commit/da288a4cda05760681a70fc0a941ef91e0114b05) - **fix:** resolve strided 2D array _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`3dda09b`](https://github.com/stdlib-js/stdlib/commit/3dda09be640b5ee96278691de75d35a61b2ecfe8) - **feat:** add `blas/base/scasum` [(#2573)](https://github.com/stdlib-js/stdlib/pull/2573) _(by Aman Bhansali, Athan Reines)_
-   [`7d65943`](https://github.com/stdlib-js/stdlib/commit/7d65943604945f9a9e3ad63267c9d91a8c26da2c) - **feat:** add `blas/base/caxpy` [(#2121)](https://github.com/stdlib-js/stdlib/pull/2121) _(by Aman Bhansali, Athan Reines)_
-   [`e693161`](https://github.com/stdlib-js/stdlib/commit/e6931618c88d2bc3f957fecdca013bcda2558e0c) - **test:** fix test comparisons _(by Athan Reines)_
-   [`bdaa7e0`](https://github.com/stdlib-js/stdlib/commit/bdaa7e0c54b8d4cf18bc3d4eb04147971b3c69cd) - **feat:** add `blas/base/csrot` [(#2256)](https://github.com/stdlib-js/stdlib/pull/2256) _(by Aman Bhansali, Athan Reines)_
-   [`562f806`](https://github.com/stdlib-js/stdlib/commit/562f80662e928af49eac8dd78ee57b1785aab515) - **style:** group expressions based on order of operations _(by Athan Reines)_
-   [`a78f42b`](https://github.com/stdlib-js/stdlib/commit/a78f42b3295fe4513a15b90a837b60a63fc1f6bc) - **docs:** fix paths in examples and refactor array creation in benchmarks [(#2563)](https://github.com/stdlib-js/stdlib/pull/2563) _(by Aman Bhansali)_
-   [`4d5293d`](https://github.com/stdlib-js/stdlib/commit/4d5293d0cfd81bd1016d1bcc372afefe20b1a211) - **feat:** add `blas/base/zdrot` [(#2257)](https://github.com/stdlib-js/stdlib/pull/2257) _(by Aman Bhansali, Athan Reines)_
-   [`f35cb6e`](https://github.com/stdlib-js/stdlib/commit/f35cb6eb2dddc6fdcc904ef165b92970f4a50698) - **docs:** fix description _(by Athan Reines)_
-   [`96f2299`](https://github.com/stdlib-js/stdlib/commit/96f22991788a808caa052cb3d1e1c9618091e3d3) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`d9dfc21`](https://github.com/stdlib-js/stdlib/commit/d9dfc219d84a0418eae579a882ba4fc9b841aecd) - **refactor:** use common implementation and document C API _(by Athan Reines)_
-   [`85ffc1a`](https://github.com/stdlib-js/stdlib/commit/85ffc1a73bdcabdfc4c2a550e398a285eae49ebb) - **feat:** add `blas/base/zaxpy` [(#2468)](https://github.com/stdlib-js/stdlib/pull/2468) _(by Aman Bhansali, Athan Reines)_
-   [`08eaa1b`](https://github.com/stdlib-js/stdlib/commit/08eaa1b176d0e510b0af53d7b7a02d5c63090e1f) - **feat:** add `blas/base/dznrm2` [(#2271)](https://github.com/stdlib-js/stdlib/pull/2271) _(by Aman Bhansali, Athan Reines)_
-   [`72a5a6c`](https://github.com/stdlib-js/stdlib/commit/72a5a6cd80794d51bbb0489c0eab5b8bf4839c27) - **style:** use consistent spacing _(by Athan Reines)_
-   [`0b59ac0`](https://github.com/stdlib-js/stdlib/commit/0b59ac098da813bb1e8ae93b93b1bb5df30d2a18) - **refactor:** use utility to resolve offset _(by Athan Reines)_
-   [`81aca47`](https://github.com/stdlib-js/stdlib/commit/81aca4745dae0b9ab083f1c79f6e60617a109f4c) - **fix:** update variable name _(by Athan Reines)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`271f5d5`](https://github.com/stdlib-js/stdlib/commit/271f5d5d3e530225bd82f34efebf5df9a944fdde) - **refactor:** reduce code duplication in `blas/base` level 1 routines [(#2517)](https://github.com/stdlib-js/stdlib/pull/2517) _(by Aman Bhansali)_
-   [`dd73ff2`](https://github.com/stdlib-js/stdlib/commit/dd73ff27e89fc2a39e2fb8a6f54d8b1a1a29f575) - **feat:** update namespace TypeScript declarations [(#2514)](https://github.com/stdlib-js/stdlib/pull/2514) _(by stdlib-bot, Athan Reines)_
-   [`48703d8`](https://github.com/stdlib-js/stdlib/commit/48703d8deabd12050c18f7382c966df26d5239a3) - **feat:** add utilities to namespace _(by Athan Reines)_
-   [`defe484`](https://github.com/stdlib-js/stdlib/commit/defe4849d8043a1c5d506d84ad6172a5e0df6af2) - **feat:** add `blas/base/matrix-triangle-resolve-enum` [(#2497)](https://github.com/stdlib-js/stdlib/pull/2497) _(by Pranav Goswami, Athan Reines)_
-   [`50316e4`](https://github.com/stdlib-js/stdlib/commit/50316e43a7f59092f56aebcd2acfa815871ae3bf) - **feat:** add `blas/base/matrix-triangle-resolve-str` [(#2496)](https://github.com/stdlib-js/stdlib/pull/2496) _(by Pranav Goswami, Athan Reines)_
-   [`1493a14`](https://github.com/stdlib-js/stdlib/commit/1493a1446311df5c8b643e3429dba4c8850fc227) - **feat:** add `blas/base/diagonal-type-*` utilities [(#2498)](https://github.com/stdlib-js/stdlib/pull/2498) _(by Pranav Goswami, Athan Reines)_
-   [`04b3803`](https://github.com/stdlib-js/stdlib/commit/04b3803f90e84a700d42da7c1f0117b4676b2040) - **feat:** add `blas/base/operation-side-*` utilities [(#2499)](https://github.com/stdlib-js/stdlib/pull/2499) _(by Pranav Goswami, Athan Reines)_
-   [`a61b40c`](https://github.com/stdlib-js/stdlib/commit/a61b40cedd7518a68efb28372e4bf817aeb5a319) - **feat:** add `blas/base/matrix-triangle-str2enum` and `blas/base/matrix-triangle/enum2str` [(#2495)](https://github.com/stdlib-js/stdlib/pull/2495) _(by Pranav Goswami, Athan Reines)_
-   [`bc23559`](https://github.com/stdlib-js/stdlib/commit/bc2355981ffa28082d8e23273887501bd3ba674a) - **feat:** add support for specifying the index offset for `AP` _(by Athan Reines)_
-   [`43b84f7`](https://github.com/stdlib-js/stdlib/commit/43b84f7b8614a31ed5985c010572da16b2b5186d) - **refactor:** use utility to resolve an index offset _(by Athan Reines)_
-   [`5418177`](https://github.com/stdlib-js/stdlib/commit/5418177d92f26a6d99bd53d19713f2fa0d536b27) - **refactor:** use macro to convert stride to offset _(by Athan Reines)_
-   [`8248b4a`](https://github.com/stdlib-js/stdlib/commit/8248b4a4c72d7a981a72075583561b98646c8068) - **feat:** add macro to convert a stride to an index offset _(by Athan Reines)_
-   [`c3895df`](https://github.com/stdlib-js/stdlib/commit/c3895df672126473f5803e93b529bcdd0775c75a) - **refactor:** use utility to resolve an index offset _(by Athan Reines)_
-   [`1654659`](https://github.com/stdlib-js/stdlib/commit/1654659445a6dee281706379770c9cb0498c36c7) - **refactor:** update implementation to reduce code duplication [(#2480)](https://github.com/stdlib-js/stdlib/pull/2480) _(by Aman Bhansali, Athan Reines)_
-   [`4d08374`](https://github.com/stdlib-js/stdlib/commit/4d0837401b68ebd4e5b8c38e0214158dbe410a07) - **refactor:** reduce code duplication [(#2479)](https://github.com/stdlib-js/stdlib/pull/2479) _(by Aman Bhansali, Athan Reines)_
-   [`a591e05`](https://github.com/stdlib-js/stdlib/commit/a591e052cf1b1515c267781b914c6a482e150425) - **test:** fix test configuration _(by Athan Reines)_
-   [`ca56638`](https://github.com/stdlib-js/stdlib/commit/ca566387ddc147c4f15fd012a09bd55713307394) - **feat:** add `blas/base/dspmv` [(#2456)](https://github.com/stdlib-js/stdlib/pull/2456) _(by Aman Bhansali, Athan Reines)_
-   [`4c95c4b`](https://github.com/stdlib-js/stdlib/commit/4c95c4b36797d601976e647baf2f4a493aff8de5) - **feat:** add `blas/base/dsymv` [(#2458)](https://github.com/stdlib-js/stdlib/pull/2458) _(by Aman Bhansali, Athan Reines)_
-   [`6b0d3fc`](https://github.com/stdlib-js/stdlib/commit/6b0d3fc30e73190cbf953f636e1eb39b02e7260e) - **fix:** update paths, descriptions, and examples [(#2457)](https://github.com/stdlib-js/stdlib/pull/2457) _(by Aman Bhansali)_
-   [`d8b6e5a`](https://github.com/stdlib-js/stdlib/commit/d8b6e5a1d6841b05d1af0dfc627be38bb25f9cf1) - **test:** add test cases to `blas/base/drotm` [(#2454)](https://github.com/stdlib-js/stdlib/pull/2454) _(by Aman Bhansali)_
-   [`4d45aa2`](https://github.com/stdlib-js/stdlib/commit/4d45aa236afedd4bf2bcda0d444dc81bd8915a45) - **test:** add test cases to `blas/base/srotm` [(#2455)](https://github.com/stdlib-js/stdlib/pull/2455) _(by Aman Bhansali)_
-   [`e87d921`](https://github.com/stdlib-js/stdlib/commit/e87d921d5c2b73b2cd3bf7cd78ff503bd2fd49d7) - **refactor:** update `blas/ext/base/dsort2hp` to follow current project conventions _(by Jaimin Godhani, Athan Reines, Philipp Burckhardt)_
-   [`51608dc`](https://github.com/stdlib-js/stdlib/commit/51608dce38bc73594242644c3b732c37ed3dfbe8) - **feat:** add `blas/base/drotm` [(#2266)](https://github.com/stdlib-js/stdlib/pull/2266) _(by Aman Bhansali, Athan Reines)_
-   [`9de1979`](https://github.com/stdlib-js/stdlib/commit/9de1979e01566cdb52a8d7667fedd7418871e130) - **docs:** fix descriptions _(by Athan Reines)_
-   [`15ea69b`](https://github.com/stdlib-js/stdlib/commit/15ea69be968a9dbc98310ad06a79f53759841ffc) - **fix:** update C examples and description for `blas/base/srotm` [(#2448)](https://github.com/stdlib-js/stdlib/pull/2448) _(by Aman Bhansali)_
-   [`1c95092`](https://github.com/stdlib-js/stdlib/commit/1c950922dbe073c352ceec63a25b3d6972f9d668) - **fix:** perform float32 emulation in `blas/base/srotm` [(#2445)](https://github.com/stdlib-js/stdlib/pull/2445) _(by Aman Bhansali)_
-   [`ad36a03`](https://github.com/stdlib-js/stdlib/commit/ad36a034d88d65ae6a68a4f79122f5867c02c596) - **feat:** add `blas/base/srotm` [(#2267)](https://github.com/stdlib-js/stdlib/pull/2267) _(by Aman Bhansali, Athan Reines)_
-   [`c49ba29`](https://github.com/stdlib-js/stdlib/commit/c49ba291cbed0449d7a7e21a32d3d0e9498f74ec) - **feat:** add `blas/base/scnrm2` [(#2270)](https://github.com/stdlib-js/stdlib/pull/2270) _(by Aman Bhansali, Athan Reines)_
-   [`f73aeb5`](https://github.com/stdlib-js/stdlib/commit/f73aeb5549179b68269aeedde9c9b2a5351da320) - **feat:** add `blas/base/sspmv` [(#2414)](https://github.com/stdlib-js/stdlib/pull/2414) _(by Aman Bhansali, Athan Reines)_
-   [`62744b5`](https://github.com/stdlib-js/stdlib/commit/62744b5bd1fc7a9502d527be5ff3239f0491e05c) - **feat:** add `blas/base/ssymv` [(#2305)](https://github.com/stdlib-js/stdlib/pull/2305) _(by Aman Bhansali, Athan Reines)_
-   [`fb8d458`](https://github.com/stdlib-js/stdlib/commit/fb8d458e12ae4cf0d443e04debf72b4ea764de56) - **docs:** update namespace table of contents [(#2383)](https://github.com/stdlib-js/stdlib/pull/2383) _(by stdlib-bot, Athan Reines)_
-   [`ca84473`](https://github.com/stdlib-js/stdlib/commit/ca844736f22b282b3ee33e0d62373442aaf991db) - **feat:** update namespace TypeScript declarations [(#2381)](https://github.com/stdlib-js/stdlib/pull/2381) _(by stdlib-bot, Athan Reines)_
-   [`79b486d`](https://github.com/stdlib-js/stdlib/commit/79b486d8f6787762e6eb82abb95e7f55a24dc91a) - **feat:** add `transposeOperationResolveStr` to namespace _(by Athan Reines)_
-   [`d62dd8c`](https://github.com/stdlib-js/stdlib/commit/d62dd8cc70527215253e242624afe900593117b8) - **feat:** add `blas/base/transpose-operation-resolve-str` _(by Athan Reines)_
-   [`f054659`](https://github.com/stdlib-js/stdlib/commit/f054659fb9a7cdc86e6b77031dac2243422881b5) - **docs:** fix parameter name _(by Athan Reines)_
-   [`8ca3745`](https://github.com/stdlib-js/stdlib/commit/8ca374503c82fefe69dfc281ad10a4a9d1d733a3) - **feat:** add `transposeOperationResolveEnum` to namespace _(by Athan Reines)_
-   [`f493d51`](https://github.com/stdlib-js/stdlib/commit/f493d512c7a4e5b3f3410266ea44f08bd47f7bde) - **feat:** add `blas/base/transpose-operation-resolve-enum` _(by Athan Reines)_
-   [`7ae7d15`](https://github.com/stdlib-js/stdlib/commit/7ae7d158f1f467abc1a42491f2acdfdae83ad520) - **feat:** add `transposeOperationStr2Enum` to namespace _(by Athan Reines)_
-   [`3466408`](https://github.com/stdlib-js/stdlib/commit/346640810621a54a70b8f6e175ebce2098d8a736) - **feat:** add `transposeOperationEnum2Str` to namespace _(by Athan Reines)_
-   [`74bd47b`](https://github.com/stdlib-js/stdlib/commit/74bd47b73df622246480fb51a3f7a69a7bebb0c4) - **feat:** add `blas/base/transpose-operation-enum2str` and `blas/base/transpose-operation-str2enum` _(by Athan Reines)_
-   [`8741f9c`](https://github.com/stdlib-js/stdlib/commit/8741f9ce65e3aefe3d4b1aca6d3be765f44c6f16) - **feat:** add `isOperationSide` to namespace _(by Athan Reines)_
-   [`66c7026`](https://github.com/stdlib-js/stdlib/commit/66c7026967dd937980d050a79480c425be2f61a0) - **feat:** add `blas/base/assert/is-operation-side` _(by Athan Reines)_
-   [`901d732`](https://github.com/stdlib-js/stdlib/commit/901d732e5f564d696ddfe87481eecd98d5bcf967) - **feat:** add `isDiagonalType` to namespace _(by Athan Reines)_
-   [`b55cf02`](https://github.com/stdlib-js/stdlib/commit/b55cf027c771d1ad80ca2221cb8115739eea39b4) - **feat:** add `blas/base/assert/is-diagonal-type` _(by Athan Reines)_
-   [`ce25d7e`](https://github.com/stdlib-js/stdlib/commit/ce25d7e1233e6b0018df58d58d31a38d6c53c27c) - **docs:** fix examples [(#2360)](https://github.com/stdlib-js/stdlib/pull/2360) _(by stdlib-bot, Athan Reines)_
-   [`143d842`](https://github.com/stdlib-js/stdlib/commit/143d8420e7022c8464594a837831582096771a4d) - **docs:** fix examples _(by Athan Reines)_
-   [`76e73a5`](https://github.com/stdlib-js/stdlib/commit/76e73a51987ac45b78b3f5011806c57ca33c1951) - **feat:** add `blas/base/zscal` [(#2253)](https://github.com/stdlib-js/stdlib/pull/2253) _(by Aman Bhansali, Athan Reines)_
-   [`b8bd516`](https://github.com/stdlib-js/stdlib/commit/b8bd51687cabdda74299cb37b9a5527fddd35aaa) - **feat:** update namespace TypeScript declarations [(#2351)](https://github.com/stdlib-js/stdlib/pull/2351) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f9bc7dc`](https://github.com/stdlib-js/stdlib/commit/f9bc7dc126bbb1c67ea03692b71613bfba205ad7) - **test:** add test cases to ensure full coverage _(by Athan Reines)_
-   [`396d612`](https://github.com/stdlib-js/stdlib/commit/396d6128357346cafbc438d75d8797377ba4022f) - **docs:** update namespace table of contents [(#2348)](https://github.com/stdlib-js/stdlib/pull/2348 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`bd06c4d`](https://github.com/stdlib-js/stdlib/commit/bd06c4df34c340bb2a978cabfa6122bd00d44a56) - **refactor:** resolve storage layout enumeration constants _(by Athan Reines)_
-   [`df48448`](https://github.com/stdlib-js/stdlib/commit/df484486ee1dda67e3b5821a7531786992fd5837) - **feat:** add `layoutResolveEnum` to namespace _(by Athan Reines)_
-   [`4e6b7fd`](https://github.com/stdlib-js/stdlib/commit/4e6b7fdee8f3f217c6393c1c1043763377a8d6d5) - **feat:** add `blas/base/layout-resolve-enum` _(by Athan Reines)_
-   [`c533088`](https://github.com/stdlib-js/stdlib/commit/c533088d61f9a0d2b182dbe8d89329c9b625f27b) - **feat:** add `layoutResolveStr` to namespace _(by Athan Reines)_
-   [`68df748`](https://github.com/stdlib-js/stdlib/commit/68df748067ae7176a3f12d3d2de20def0195ffd4) - **feat:** add `blas/base/layout-resolve-str` _(by Athan Reines)_
-   [`bd2b0a6`](https://github.com/stdlib-js/stdlib/commit/bd2b0a61e51e036f7f4044cd1ec16ec7736dbf84) - **feat:** add `layoutEnum2Str` and `layoutStr2Enum` to namespace _(by Athan Reines)_
-   [`5d9a6c0`](https://github.com/stdlib-js/stdlib/commit/5d9a6c09fdc79952164cbe2869729d9dca8e1d36) - **feat:** add `blas/base/layout-enum2str` and `blas/base/layout-str2enum` _(by Athan Reines)_
-   [`92564b0`](https://github.com/stdlib-js/stdlib/commit/92564b0633ff473785ceb4b14691a08a97dd62be) - **style:** fix indentation and rename files _(by Athan Reines)_
-   [`5e6bc89`](https://github.com/stdlib-js/stdlib/commit/5e6bc8976dc934eeba7ff67b30a344ef4c33b559) - **style:** fix indentation _(by Athan Reines)_
-   [`3719fcd`](https://github.com/stdlib-js/stdlib/commit/3719fcd56b28595b9b101f9767b0b6d965c9e426) - **feat:** add `isMatrixTriangle` to namespace _(by Athan Reines)_
-   [`49464c6`](https://github.com/stdlib-js/stdlib/commit/49464c6b0dd287f92e145c73af1f601d000edd37) - **feat:** add `blas/base/assert/is-matrix-triangle` _(by Athan Reines)_
-   [`926dcec`](https://github.com/stdlib-js/stdlib/commit/926dcecec6a4940ecd7ee57da5db924fadfa3edb) - **feat:** add `isTransposeOperation` to namespace _(by Athan Reines)_
-   [`b59eb8b`](https://github.com/stdlib-js/stdlib/commit/b59eb8bf46debbde5e24ec21ed1c0afb184e8ae0) - **feat:** add `blas/base/assert/is-transpose-operation` _(by Athan Reines)_
-   [`af7137c`](https://github.com/stdlib-js/stdlib/commit/af7137c73ecc48cf39309290403cfab9e485d2f5) - **feat:** add `assert` to namespace _(by Athan Reines)_
-   [`b5f6754`](https://github.com/stdlib-js/stdlib/commit/b5f6754f4b180101e7b43b602d1cbfac7470c699) - **feat:** add `blas/base/assert` namespace _(by Athan Reines)_
-   [`9b21c2b`](https://github.com/stdlib-js/stdlib/commit/9b21c2b3c40d411cf2e1b4dd01def3a672774645) - **feat:** add `blas/base/assert/is-layout` _(by Athan Reines)_
-   [`35b165b`](https://github.com/stdlib-js/stdlib/commit/35b165ba743f3fe19491b0b55ac5172cae580b7e) - **refactor:** use `blas/base/matrix-triangles` enum values _(by Athan Reines)_
-   [`44ccf84`](https://github.com/stdlib-js/stdlib/commit/44ccf84cda56714dd8624d1d3df130674b64e1dc) - **feat:** add `matrixTriangles` to namespace _(by Athan Reines)_
-   [`e01e0c4`](https://github.com/stdlib-js/stdlib/commit/e01e0c4fc6a8f29142b4ade5acbd2a1b2d07473b) - **docs:** add missing punctuation _(by Athan Reines)_
-   [`917e002`](https://github.com/stdlib-js/stdlib/commit/917e00207daf329791c74bba0060f9df5094b267) - **feat:** add `blas/base/matrix-triangles` _(by Athan Reines)_
-   [`5f085d1`](https://github.com/stdlib-js/stdlib/commit/5f085d146d57ff083c24068217adb597bd14b1c5) - **refactor:** use `blas/base/operation-sides` enum values _(by Athan Reines)_
-   [`91237b5`](https://github.com/stdlib-js/stdlib/commit/91237b58273c24c9e5b3925deb0053cafa90734c) - **feat:** add `operationSides` to namespace _(by Athan Reines)_
-   [`4cf962b`](https://github.com/stdlib-js/stdlib/commit/4cf962bb62a3592651cead050e70604e455c7e0e) - **docs:** update description _(by Athan Reines)_
-   [`7a6a5e4`](https://github.com/stdlib-js/stdlib/commit/7a6a5e4e4c81b1dc344794fcde3329cc54b4cf46) - **docs:** update description _(by Athan Reines)_
-   [`6b8a994`](https://github.com/stdlib-js/stdlib/commit/6b8a9940761ea732babeae855d70d5452a877f19) - **docs:** update description and fix typo _(by Athan Reines)_
-   [`efeb385`](https://github.com/stdlib-js/stdlib/commit/efeb385e6371ff99e0cf4cacb7084d43a75a95b7) - **feat:** add `blas/base/operation-sides` _(by Athan Reines)_
-   [`561f98e`](https://github.com/stdlib-js/stdlib/commit/561f98ec00a05cb582b78515c759939eeaec006a) - **fix:** update include path and fix typo _(by Athan Reines)_
-   [`3ade07d`](https://github.com/stdlib-js/stdlib/commit/3ade07de914000d25c817fa4069d51b9eb5d2d77) - **refactor:** use `blas/base/diagonal-types` enum values _(by Athan Reines)_
-   [`38a9e4c`](https://github.com/stdlib-js/stdlib/commit/38a9e4cb046a114a11438b681437949e69b3cd75) - **feat:** add `diagonalTypes` to namespace _(by Athan Reines)_
-   [`123f7f9`](https://github.com/stdlib-js/stdlib/commit/123f7f945a9154c7518c6c0837110e0712811b5f) - **feat:** add `blas/base/diagonal-types` _(by Athan Reines)_
-   [`bd7f7aa`](https://github.com/stdlib-js/stdlib/commit/bd7f7aa6ed8442e932138fa78bd558b9181292d9) - **docs:** update comments _(by Athan Reines)_
-   [`ff6ede6`](https://github.com/stdlib-js/stdlib/commit/ff6ede65dec8b692212e539913f1dd863a73717b) - **docs:** update comments _(by Athan Reines)_
-   [`486cccd`](https://github.com/stdlib-js/stdlib/commit/486cccdfb0b3b10879bdc68b89da0900d92cee58) - **refactor:** reorder includes _(by Athan Reines)_
-   [`73cf5f1`](https://github.com/stdlib-js/stdlib/commit/73cf5f1bb0dba7e320518e6b530a98004ef86aef) - **refactor:** assign enum values to CBLAS compatible aliases _(by Athan Reines)_
-   [`258cc06`](https://github.com/stdlib-js/stdlib/commit/258cc060947be206b283ff4d066953dcebb0143f) - **fix:** assign enum values to CBLAS compatible aliases _(by Athan Reines)_
-   [`31aa8db`](https://github.com/stdlib-js/stdlib/commit/31aa8dbfb2c0a722710adc8a399e703b224cadab) - **feat:** add `transposeOperations` to namespace _(by Athan Reines)_
-   [`87a0d77`](https://github.com/stdlib-js/stdlib/commit/87a0d77b81cc5bc8c05e40d6ec22f548c5d3dd14) - **feat:** add `blas/base/transpose-operations` _(by Athan Reines)_
-   [`85ec173`](https://github.com/stdlib-js/stdlib/commit/85ec1734c06b80b13eb607576e592414047c90a7) - **remove:** delete `blas/base/orders` _(by Athan Reines)_
-   [`c61cc17`](https://github.com/stdlib-js/stdlib/commit/c61cc17ca682a9dfe76246ab9dc852c0044c6cbf) - **refactor:** migrate to `blas/base/layouts` _(by Athan Reines)_
-   [`0c3213e`](https://github.com/stdlib-js/stdlib/commit/0c3213e4e3219c0574d0c49e2486db1ac714c952) - **fix:** rename `orders` to `layouts` _(by Athan Reines)_
-   [`9b31a8f`](https://github.com/stdlib-js/stdlib/commit/9b31a8f861f2777d60ef74323ca1ae6dfb1839ed) - **feat:** add `blas/base/layouts` _(by Athan Reines)_
-   [`faf0744`](https://github.com/stdlib-js/stdlib/commit/faf0744fe424cd9a2c58e7aa98368555c8601d5c) - **refactor:** use enum definition in `blas/base/orders` _(by Athan Reines)_
-   [`378240f`](https://github.com/stdlib-js/stdlib/commit/378240f1bb93253435f89aec4d5c7ce64eae4703) - **feat:** update namespace _(by Athan Reines)_
-   [`fe1e973`](https://github.com/stdlib-js/stdlib/commit/fe1e97344bc14c85fc73126f0d0371ed07ecfa86) - **feat:** add `blas/base/orders` _(by Athan Reines)_
-   [`aea56c1`](https://github.com/stdlib-js/stdlib/commit/aea56c1678b74530f651680c18ba28ff0f90f2d9) - **docs:** fix signature _(by Athan Reines)_
-   [`b40f5c3`](https://github.com/stdlib-js/stdlib/commit/b40f5c33aaf2113c73f8f0811c8d1cdc9fbfde53) - **feat:** add `blas/base/cscal` [(#2104)](https://github.com/stdlib-js/stdlib/pull/2104) _(by Aman Bhansali, Athan Reines)_
-   [`a4748fb`](https://github.com/stdlib-js/stdlib/commit/a4748fb7a658f89c268388389355ed87b5a06f84) - **feat:** add `blas/base/dcabs1` [(#2204)](https://github.com/stdlib-js/stdlib/pull/2204) _(by Aman Bhansali, Athan Reines)_
-   [`70864fa`](https://github.com/stdlib-js/stdlib/commit/70864faabdacdb25caa2a7ee75bd0fcc7ba478c9) - **feat:** add `blas/base/scabs1` [(#2209)](https://github.com/stdlib-js/stdlib/pull/2209) _(by Aman Bhansali, Athan Reines)_
-   [`133dd8b`](https://github.com/stdlib-js/stdlib/commit/133dd8bdce3709d5aeda84906b79882f86d9989d) - **chore:** update package meta data [(#2251)](https://github.com/stdlib-js/stdlib/pull/2251) _(by stdlib-bot)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`919f75a`](https://github.com/stdlib-js/stdlib/commit/919f75a1fca3f5ff92bb3eda07dde5544f3c3fb7) - **refactor:** update `blas/ext/base/snansum` to follow current project convention _(by Xiaochuan Ye, Philipp Burckhardt)_
-   [`c65c951`](https://github.com/stdlib-js/stdlib/commit/c65c95104ca154b32d03b6282fd4b2325b049e1f) - **temp:** add `blas/base/dger` _(by Athan Reines)_
-   [`66be75a`](https://github.com/stdlib-js/stdlib/commit/66be75a9471dfc61a2885f7c42c4cb707b8d6dcf) - **build:** add configurations _(by Athan Reines)_
-   [`a5eebd0`](https://github.com/stdlib-js/stdlib/commit/a5eebd0cb3a562c48c4b924d246b7cefd2f09a10) - **docs:** update namespace TypeScript declaration documentation [(#2217)](https://github.com/stdlib-js/stdlib/pull/2217) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e82767d`](https://github.com/stdlib-js/stdlib/commit/e82767d20039fb9ca057a5ec424a6fa361db3fec) - **refactor:** update `blas/ext/base/dsortins` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`f1b1fce`](https://github.com/stdlib-js/stdlib/commit/f1b1fce972a5ba22f5305f4dca346496accfa80d) - **refactor:** update `blas/ext/ssort2ins` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`6bcf620`](https://github.com/stdlib-js/stdlib/commit/6bcf620230cce2cb888dfe6d1353e49aadf31471) - **refactor:** update `blas/ext/base/dsortsh` to follow current project conventions _(by Tirtadwipa Manunggal, Philipp Burckhardt)_
-   [`6226f32`](https://github.com/stdlib-js/stdlib/commit/6226f32ba8be2b8d880353194c510e629760b53f) - **docs:** update signatures _(by Athan Reines)_
-   [`17c7032`](https://github.com/stdlib-js/stdlib/commit/17c703258149f4d66f7f828e46e4a5972f2b0ef5) - **feat:** add `blas/base/xerbla` _(by Athan Reines)_
-   [`900ccd7`](https://github.com/stdlib-js/stdlib/commit/900ccd7dd8eeee7bd7b6525ddab7323c10a50ebc) - **refactor:** update `blas/ext/base/dsorthp` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`2ca4ab3`](https://github.com/stdlib-js/stdlib/commit/2ca4ab3fecb7cb81e96af90866185a7a17bb230e) - **refactor:** update `blas/ext/base/ssortsh` to follow current project conventions _(by Sivam Das, Philipp Burckhardt)_
-   [`11ef4bd`](https://github.com/stdlib-js/stdlib/commit/11ef4bd6b94d05687951525526fe7cd46a28ed08) - **docs:** update namespace TypeScript declarations [(#2210)](https://github.com/stdlib-js/stdlib/pull/2210) _(by stdlib-bot, Philipp Burckhardt)_
-   [`f104cf4`](https://github.com/stdlib-js/stdlib/commit/f104cf45eeb8638e70830f6d42f2a8ed96912ebc) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`10d5253`](https://github.com/stdlib-js/stdlib/commit/10d525313201bf6f4c62c6eee2b46065ad180de2) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`c313ca8`](https://github.com/stdlib-js/stdlib/commit/c313ca8741ba1255d64a47382ce4dfac3227643b) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`6c13a44`](https://github.com/stdlib-js/stdlib/commit/6c13a4458866507ed04a88da9afb92fd5b6cf02d) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`390f8f4`](https://github.com/stdlib-js/stdlib/commit/390f8f4d3ea6383a175f0faa47f64b481c5e05fe) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`9ff6e8e`](https://github.com/stdlib-js/stdlib/commit/9ff6e8e2a86e84d30f4bab902b55f43eb85e6b0d) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`101bd6d`](https://github.com/stdlib-js/stdlib/commit/101bd6d2a57bbbb447d9ac5ba8bdca48af8daafe) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`3da4848`](https://github.com/stdlib-js/stdlib/commit/3da4848115de693fb48ce5504ed070f843f79d16) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`2efa65e`](https://github.com/stdlib-js/stdlib/commit/2efa65e1f4f0370910f25f6c6d267a9309645fc1) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`4c6fd6f`](https://github.com/stdlib-js/stdlib/commit/4c6fd6fefe78a1b63247a9e5b72532e80f96711e) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`db90892`](https://github.com/stdlib-js/stdlib/commit/db90892295bdc266a307ae736a02886621956a19) - **refactor:** support building with API suffix _(by Athan Reines)_
-   [`726cca7`](https://github.com/stdlib-js/stdlib/commit/726cca7d78896f87428818a08ac788e5f3ed5be0) - **refactor:** update `blas/ext/base/ssorthp` to follow current project conventions _(by Naveen Kumar, Praveen Kumar, Philipp Burckhardt)_
-   [`5c514c7`](https://github.com/stdlib-js/stdlib/commit/5c514c7ad5828bc5047594ff001d11334f8f5670) - **fix:** specify integer type to match CBLAS _(by Athan Reines)_
-   [`ee78820`](https://github.com/stdlib-js/stdlib/commit/ee788201141cbc9a25d1d74982c1c762080ae6fb) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`a847f6b`](https://github.com/stdlib-js/stdlib/commit/a847f6bab25f80db1039bba9494e6823b43b3b6e) - **docs:** remove comments _(by Athan Reines)_
-   [`41a012f`](https://github.com/stdlib-js/stdlib/commit/41a012f6167cab7b2442be74b40819346ea9b0f1) - **docs:** remove comments _(by Athan Reines)_
-   [`4508f54`](https://github.com/stdlib-js/stdlib/commit/4508f546e500ff3c38ac50b0d2613daa40b7266e) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`757ce66`](https://github.com/stdlib-js/stdlib/commit/757ce6615c60248091852ec6b9362647a5ec1e5d) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`dbe0844`](https://github.com/stdlib-js/stdlib/commit/dbe0844794eb6473bedaa32af36b4259792c091f) - **docs:** fix parameter type _(by Athan Reines)_
-   [`59d773a`](https://github.com/stdlib-js/stdlib/commit/59d773a0f9bb4e680b6cc659cb0cbe36f588641e) - **docs:** fix parameter type _(by Athan Reines)_
-   [`b68a188`](https://github.com/stdlib-js/stdlib/commit/b68a188a72b4037aec8b4db77c917d4fc300cb46) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`34a206e`](https://github.com/stdlib-js/stdlib/commit/34a206ee606e162bf73ac53e9e488ee9b88d981a) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`0d7489e`](https://github.com/stdlib-js/stdlib/commit/0d7489e6288a3e7669927331d66841a5578aee4f) - **docs:** fix description _(by Athan Reines)_
-   [`de65e0c`](https://github.com/stdlib-js/stdlib/commit/de65e0c599aff12d7e1bc901749474299da831a0) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`faa875a`](https://github.com/stdlib-js/stdlib/commit/faa875a920a06b4671b59db2b574c7f7a7702372) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`96de2bb`](https://github.com/stdlib-js/stdlib/commit/96de2bb54e9b857e58af95eca9dd15e8ba95db92) - **docs:** fix type _(by Athan Reines)_
-   [`c0baf82`](https://github.com/stdlib-js/stdlib/commit/c0baf8241d75854a1334fd1add74c3028c91095d) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`73e863a`](https://github.com/stdlib-js/stdlib/commit/73e863a31c1d25d63a26c6a3be93e745e8396d19) - **fix:** address undeclared identifier _(by Athan Reines)_
-   [`d538def`](https://github.com/stdlib-js/stdlib/commit/d538defd4dff1ba883d273417780301a01c44096) - **bench:** fix variable declarations _(by Athan Reines)_
-   [`7699cd7`](https://github.com/stdlib-js/stdlib/commit/7699cd7cbc8de2c41b0609bb7772c05708f54809) - **build:** fix config _(by Athan Reines)_
-   [`21b83ed`](https://github.com/stdlib-js/stdlib/commit/21b83ed04421d96fa92c30fecb31077544ad5038) - **build:** fix config _(by Athan Reines)_
-   [`16b15a8`](https://github.com/stdlib-js/stdlib/commit/16b15a8bbbdc0ae212c20f9ba72f62feac88375f) - **build:** fix build config _(by Athan Reines)_
-   [`47ee818`](https://github.com/stdlib-js/stdlib/commit/47ee81892a3dbff28898593e535875f866d922ac) - **build:** fix build config _(by Athan Reines)_
-   [`f2da861`](https://github.com/stdlib-js/stdlib/commit/f2da861137486a776999be1166e6f6c84b8e52fd) - **build:** fix missing deps _(by Athan Reines)_
-   [`69fef11`](https://github.com/stdlib-js/stdlib/commit/69fef117ec8cd23b4db353a0070c2275b26fd9ca) - **build:** fix missing field _(by Athan Reines)_
-   [`a4a1e2a`](https://github.com/stdlib-js/stdlib/commit/a4a1e2a97e9e3e3eaa4d7eb8df69395c927d6a96) - **build:** fix missing configurations _(by Athan Reines)_
-   [`1021465`](https://github.com/stdlib-js/stdlib/commit/10214653aa66b14a7e96321c6db689c2375467e9) - **build:** fix missing deps _(by Athan Reines)_
-   [`4be9ab5`](https://github.com/stdlib-js/stdlib/commit/4be9ab5479119a898317c19f382a733729487308) - **build:** fix missing deps _(by Athan Reines)_
-   [`c90db88`](https://github.com/stdlib-js/stdlib/commit/c90db889bead68b46c38541eba2925b921819d38) - **build:** update config _(by Athan Reines)_
-   [`ef57ac7`](https://github.com/stdlib-js/stdlib/commit/ef57ac7c106908bab550f97430d132b0e57d16cd) - **build:** fix missing deps _(by Athan Reines)_
-   [`eba97ba`](https://github.com/stdlib-js/stdlib/commit/eba97bab6149fd8664c58d0c850c70d32b5c1f9d) - **build:** fix missing default task _(by Athan Reines)_
-   [`d66b177`](https://github.com/stdlib-js/stdlib/commit/d66b177c7092819c8539c32a5c5a2bdc74b53cd1) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`3bdd856`](https://github.com/stdlib-js/stdlib/commit/3bdd85623fc89c57ef9261e7cc6fb4e1611a2789) - **docs:** fix description _(by Athan Reines)_
-   [`38464b7`](https://github.com/stdlib-js/stdlib/commit/38464b74545be9702eda7bae820c40b56e7e7256) - **docs:** remove comments _(by Athan Reines)_
-   [`f1576ec`](https://github.com/stdlib-js/stdlib/commit/f1576ec5ade09cd8cd034dc0db8c9f5c7d70e3eb) - **docs:** remove comments _(by Athan Reines)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`0dc4409`](https://github.com/stdlib-js/stdlib/commit/0dc4409a111ac1bd680080ea0dfd941399503ba1) - **docs:** remove comments _(by Athan Reines)_
-   [`995ffd4`](https://github.com/stdlib-js/stdlib/commit/995ffd4a5bd334c07045c379a3ff5e81b48e4acd) - **docs:** remove comments _(by Athan Reines)_
-   [`0a88c6c`](https://github.com/stdlib-js/stdlib/commit/0a88c6c47ff0075c010624031572a3b1f05c2d2d) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`efe7889`](https://github.com/stdlib-js/stdlib/commit/efe78895de1bd20a87d724148c2068bf7d4325cf) - **style:** remove blank line _(by Athan Reines)_
-   [`b33c36b`](https://github.com/stdlib-js/stdlib/commit/b33c36b320defea165502087fe85e3ab5d90a51b) - **docs:** update examples and add C documentation _(by Athan Reines)_
-   [`8a403b0`](https://github.com/stdlib-js/stdlib/commit/8a403b02cdd283dcfc12cfca3bb0a10b5cbac993) - **feat:** add support for specifying integer size _(by Athan Reines)_
-   [`0992fe2`](https://github.com/stdlib-js/stdlib/commit/0992fe22060cb8f860cfd9e8f590d4c7a83c7287) - **fix:** replace semicolons with commas _(by Athan Reines)_
-   [`9174c02`](https://github.com/stdlib-js/stdlib/commit/9174c02e42ca651f8959fff0626ae8147a75ee09) - **feat:** add `blas/base/shared` _(by Athan Reines)_
-   [`d583804`](https://github.com/stdlib-js/stdlib/commit/d583804fb1d05b8ac4d40e1e897f8682c71e0e2b) - **fix:** resolve bugs in addon.c _(by Philipp Burckhardt)_
-   [`bcf58bb`](https://github.com/stdlib-js/stdlib/commit/bcf58bbc808831edd9993072d47bb1bfdd9fb1a6) - **fix:** resolve bugs in addon.c _(by Philipp Burckhardt)_
-   [`b3051ee`](https://github.com/stdlib-js/stdlib/commit/b3051eece13a0ef20b0ff0df0c95e0c0ef3ace48) - **test:** fix number of elements _(by Philipp Burckhardt)_
-   [`be25162`](https://github.com/stdlib-js/stdlib/commit/be25162ff647ef83bdc4938dc28c0a30d15b02e6) - **refactor:** update `blas/ext/base/dnannsumkbn` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`0f07a02`](https://github.com/stdlib-js/stdlib/commit/0f07a02fb8a7b51ef6ca35644a845b369cf5a683) - **refactor:** update `blas/ext/base/dnannsumkbn2` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`de9ca6a`](https://github.com/stdlib-js/stdlib/commit/de9ca6a375bffa0683dde68a81da5922edd3d9c2) - **fix:** update manifest.json _(by Philipp Burckhardt)_
-   [`8d66a07`](https://github.com/stdlib-js/stdlib/commit/8d66a07b8e4058e8459f45180281653c5622ca40) - **refactor:** update `blas/ext/base/ssum` to follow current project conventions _(by Raunak Kumar Gupta, Pranav Goswami, Philipp Burckhardt)_
-   [`f0cd892`](https://github.com/stdlib-js/stdlib/commit/f0cd892874105f78bd2eff263cdec03905c69bfd) - **refactor:** update `blas/ext/base/dnanasum` to follow current project conventions _(by Raunak Kumar Gupta, Philipp Burckhardt)_
-   [`430a72b`](https://github.com/stdlib-js/stdlib/commit/430a72b28eac37834cfb1b002078fbe372d656b7) - **refactor:** update `blas/ext/base/dnannsumpw` to follow current project conventions _(by Naveen Kumar, Philipp Burckhardt)_
-   [`0f917bd`](https://github.com/stdlib-js/stdlib/commit/0f917bd3d395be1828ce69b763d5fe9d220306e5) - **refactor:** update `blas/ext/base/snansumkbn` to follow current project conventions _(by Priyansh Prajapati, Philipp Burckhardt)_
-   [`fb6571e`](https://github.com/stdlib-js/stdlib/commit/fb6571ecebab94780dbd3b6d32b0c0275a3d636b) - **feat:** add `blas/base/isamax` [(#2153)](https://github.com/stdlib-js/stdlib/pull/2153) _(by Aman Bhansali, Athan Reines)_
-   [`8f1f9c6`](https://github.com/stdlib-js/stdlib/commit/8f1f9c67b94bf41c09ae2919af79dc5d9537d020) - **test:** fix descriptions _(by Athan Reines)_
-   [`31bffe1`](https://github.com/stdlib-js/stdlib/commit/31bffe14003da840ab3f926be8357fe868fd75de) - **docs:** fix annotation _(by Athan Reines)_
-   [`39fd57f`](https://github.com/stdlib-js/stdlib/commit/39fd57f849f2ef4f9c7ad3e63fe83704b4bb9fc9) - **docs:** fix note _(by Athan Reines)_
-   [`d1cbb09`](https://github.com/stdlib-js/stdlib/commit/d1cbb0973d127cf391ecce4efefd1390d6aab0e1) - **feat:** add `blas/base/srot` [(#1844)](https://github.com/stdlib-js/stdlib/pull/1844) _(by Aman Bhansali, Athan Reines)_
-   [`3f1caa3`](https://github.com/stdlib-js/stdlib/commit/3f1caa37909030a50ec54f75dc444edea1aad950) - **feat:** add `blas/base/drot` [(#1823)](https://github.com/stdlib-js/stdlib/pull/1823) _(by Aman Bhansali, Athan Reines, Pranav Goswami)_
-   [`95eb45b`](https://github.com/stdlib-js/stdlib/commit/95eb45b833c5599f97ce22e56f12129fbd3b7ab7) - **test:** add tests to ensure full test coverage _(by Athan Reines)_
-   [`705c20b`](https://github.com/stdlib-js/stdlib/commit/705c20bcdb563a2bc24c728d3e2c2ab17eaf7b9e) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`db9ee3e`](https://github.com/stdlib-js/stdlib/commit/db9ee3eff048868ba02c580220035812f21b9cf6) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`081d2fe`](https://github.com/stdlib-js/stdlib/commit/081d2fec4b3295d6f8356bbed0208319fcee89ea) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`d52893b`](https://github.com/stdlib-js/stdlib/commit/d52893bbb6c0f27f5d9560e6acdf53f7c68b1920) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`e96e888`](https://github.com/stdlib-js/stdlib/commit/e96e8887ddeb1d83001c281c9946a89321da0d9b) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`8724214`](https://github.com/stdlib-js/stdlib/commit/8724214db4edea41e8da4f5593f06dfe2be5da86) - **refactor:** use macro for creating doubles _(by Athan Reines)_
-   [`dd12bd9`](https://github.com/stdlib-js/stdlib/commit/dd12bd97ea123a9446e54ba1b5b71e5277beef3e) - **fix:** add missing deps _(by Athan Reines)_
-   [`7f2860f`](https://github.com/stdlib-js/stdlib/commit/7f2860f40dbc95bb2fab1efd325f7d515a4e0a70) - **fix:** remove unused header _(by Athan Reines)_
-   [`552a7bc`](https://github.com/stdlib-js/stdlib/commit/552a7bcde0a97e2aca20d65890662701881849e5) - **refactor:** use macro to create 32-bit integer _(by Athan Reines)_
-   [`b48600a`](https://github.com/stdlib-js/stdlib/commit/b48600a4e5f504aae71205191c5c672f95835250) - **fix:** add missing include _(by Athan Reines)_
-   [`06b1e94`](https://github.com/stdlib-js/stdlib/commit/06b1e94ab81410ef61ca7ada0b7f54aca029e77d) - **fix:** add missing include _(by Athan Reines)_
-   [`69681c5`](https://github.com/stdlib-js/stdlib/commit/69681c5293d067a6d0585f4635fbdebb88f0bf5d) - **refactor:** use macro to create Node-API double _(by Athan Reines)_
-   [`612861e`](https://github.com/stdlib-js/stdlib/commit/612861e0e1b499126f6ee5c6973605969781b059) - **refactor:** use macro for creating a double _(by Athan Reines)_
-   [`8dead56`](https://github.com/stdlib-js/stdlib/commit/8dead56dd7d25624eb7619ccb785111cf678f09d) - **feat:** update namespace TypeScript declarations [(#2181)](https://github.com/stdlib-js/stdlib/pull/2181 ) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a7f3e44`](https://github.com/stdlib-js/stdlib/commit/a7f3e4462eacec13b65535bfe4a39aa57a6a94cc) - **refactor:** update `blas/ext/base/sfill` to follow current projects conventions _(by Priyanshu Agarwal, Athan Reines, Pranav Goswami, Philipp Burckhardt)_
-   [`118791f`](https://github.com/stdlib-js/stdlib/commit/118791f7f5962aab921f28e52826236b16fe1d80) - **refactor:** update `blas/ext/base/dnannsumors` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`326479a`](https://github.com/stdlib-js/stdlib/commit/326479a0533ad89929eac59ad1b122cd8cd9cc5f) - **refactor:** update `blas/ext/base/snansumors` to follow current project conventions _(by Pratik Singh, Philipp Burckhardt)_
-   [`95653a3`](https://github.com/stdlib-js/stdlib/commit/95653a3f070bf770e5281a46d0d85ba18d72948b) - **feat:** add `blas/base/idamax` [(#2152)](https://github.com/stdlib-js/stdlib/pull/2152) _(by Aman Bhansali, Athan Reines)_
-   [`67e80eb`](https://github.com/stdlib-js/stdlib/commit/67e80ebd10c9a8b86fbf2f86ce1781015ce305ef) - **refactor:** update `blas/ext/base/dnansumors` follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`a65a14a`](https://github.com/stdlib-js/stdlib/commit/a65a14a9835be9bbae33c52607c537e761270ea2) - **refactor:** update `blas/ext/base/dnannsum` to follow current project conventions _(by Golden Kumar, Philipp Burckhardt)_
-   [`a5e27be`](https://github.com/stdlib-js/stdlib/commit/a5e27be21761ddb12f722eef6490a3958cb7d7bb) - **refactor:** update `blas/ext/base/sdssumpw` to follow current project conventions _(by Pranjal Jha, Philipp Burckhardt)_
-   [`c13b428`](https://github.com/stdlib-js/stdlib/commit/c13b4282c1566c301c26b3b65ee054862f244ab5) - **refactor:** update `blas/ext/base/sdssum` to follow current project conventions _(by rainn, Philipp Burckhardt)_
-   [`a0d8ed6`](https://github.com/stdlib-js/stdlib/commit/a0d8ed6fb23dddd6b674ebde3013026dd5d8ad7d) - **refactor:** update `blas/ext/base/dssumors` to follow current project conventions _(by Jaimin Godhani, Philipp Burckhardt)_
-   [`f478364`](https://github.com/stdlib-js/stdlib/commit/f47836421fb3f8e6bc9f2288d7a7dc4c546ce465) - **refactor:** update `blas/ext/base/snansumpw` to follow current projects conventions _(by Priyanshu Agarwal, Philipp Burckhardt)_
-   [`8f355fa`](https://github.com/stdlib-js/stdlib/commit/8f355faa09a8b077bbd01b0d74878f3aede80ccb) - **refactor:** update `blas/ext/base/dsumkbn` to follow current project conventions _(by Muhammad Haris, Philipp Burckhardt)_
-   [`87c4933`](https://github.com/stdlib-js/stdlib/commit/87c49335a289723224215f4bb2056a479dfca9b5) - **refactor:** update `blas/ext/base/dssumpw` to follow current project conventions _(by Soumajit Chatterjee, Philipp Burckhardt)_
-   [`3dfd403`](https://github.com/stdlib-js/stdlib/commit/3dfd40366cd676b27dc76dbd7e0278cb5189a10d) - **refactor:** update `blas/ext/base/dsumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`ab3615f`](https://github.com/stdlib-js/stdlib/commit/ab3615f734d7d91d7f5fcac06e21e35c961a3e8b) - **refactor:** update `blas/ext/base/dsnansumors` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`d2ef442`](https://github.com/stdlib-js/stdlib/commit/d2ef44233033d59437a49a5da48582836bd98444) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`9937304`](https://github.com/stdlib-js/stdlib/commit/993730440038f5f8e88eb599c8e129c20e2cf2c7) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`7a0f06f`](https://github.com/stdlib-js/stdlib/commit/7a0f06ffa642440ff005516f479d33138aa1505a) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`02d4d0a`](https://github.com/stdlib-js/stdlib/commit/02d4d0a29de26605ce637c44f8488e54e86bd8ea) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`548a867`](https://github.com/stdlib-js/stdlib/commit/548a8677c29c28909016446c3243bcd972b2a422) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`3185a5c`](https://github.com/stdlib-js/stdlib/commit/3185a5c265b3959e0b963bd3806a8a75a36099de) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`dc62f61`](https://github.com/stdlib-js/stdlib/commit/dc62f615dfa1be2b416aaca4cf1a2bcd4de2a8e5) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`eb88d43`](https://github.com/stdlib-js/stdlib/commit/eb88d4383502daa0beccc848e381a4aa0c1acf12) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`d35c90c`](https://github.com/stdlib-js/stdlib/commit/d35c90ce1982cc39fc41d1be6a13627a11925844) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`8ce2917`](https://github.com/stdlib-js/stdlib/commit/8ce29172735c92ec87194c3dafc7a90d62698bfd) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`1c696a0`](https://github.com/stdlib-js/stdlib/commit/1c696a0ef09fc302874c25e924cfbc5c4c95ce30) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`8aa07d0`](https://github.com/stdlib-js/stdlib/commit/8aa07d0853cf4ec3c58e20f7093c74b95d6b7430) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`c8aa78f`](https://github.com/stdlib-js/stdlib/commit/c8aa78f1fa9d895516d81301049556be008d06c0) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`c021239`](https://github.com/stdlib-js/stdlib/commit/c02123902052c0ec01b58a208a43d2ffaa997ed9) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`6ae034b`](https://github.com/stdlib-js/stdlib/commit/6ae034b8e7538f384eeb00354f9e2932b1b59677) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`9e3e28c`](https://github.com/stdlib-js/stdlib/commit/9e3e28cfee19c2dd7ab0aecc67ccf11b3662cc14) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`0c1f1ea`](https://github.com/stdlib-js/stdlib/commit/0c1f1eab3512cb737a9a105a8ebf9c31dc3e7367) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`99b4a63`](https://github.com/stdlib-js/stdlib/commit/99b4a630fe8ae4142a1c0cfeee3b735f43424b50) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`4e640fe`](https://github.com/stdlib-js/stdlib/commit/4e640fe823478082ee9fa643295205c00a44f7e2) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`e709ece`](https://github.com/stdlib-js/stdlib/commit/e709eced3f4dcc94f5a8aeb87c8331d2a5ba5092) - **fix:** update libraries _(by Athan Reines)_
-   [`d2ec36e`](https://github.com/stdlib-js/stdlib/commit/d2ec36e08a3c0c1bbe8c3d10d7ea28d833a42a30) - **refactor:** update `blas/ext/base/dsnansum` to follow current project conventions _(by Shubh Mehta, Pranav Goswami, Philipp Burckhardt)_
-   [`7187d1b`](https://github.com/stdlib-js/stdlib/commit/7187d1bdf7cb931b78df3b72873ba670bcb7dc95) - **build:** add separate configurations for benchmarks and examples _(by Athan Reines)_
-   [`436b897`](https://github.com/stdlib-js/stdlib/commit/436b897c512749bb9e8c89dff5b283a16d0dba7e) - **refactor:** update `blas/ext/base/dnanasumors` to follow current project conventions _(by Shubh Mehta, Philipp Burckhardt)_
-   [`c6703d9`](https://github.com/stdlib-js/stdlib/commit/c6703d9c7a7ecec2dd4f4b17fea3dfba7d9ed396) - **refactor:** update `blas/ext/base/sdsnansum` to follow current project convention _(by Aleksandr, Athan Reines, Philipp Burckhardt)_
-   [`0244027`](https://github.com/stdlib-js/stdlib/commit/0244027e1e2c0ceb1cd8ae1808196c24fa77b142) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`7155e52`](https://github.com/stdlib-js/stdlib/commit/7155e52806a52b6918d0de96ea2fe5da2c19bcd0) - **feat:** add `blas/base/zswap` [(#2075)](https://github.com/stdlib-js/stdlib/pull/2075) _(by Rutam Kathale, Athan Reines, stdlib-bot)_
-   [`9e9ba56`](https://github.com/stdlib-js/stdlib/commit/9e9ba56219655b135d38d733887f15f6cd975bf6) - **style:** remove trailing newlines _(by Athan Reines)_
-   [`edc9c69`](https://github.com/stdlib-js/stdlib/commit/edc9c69f219cd5bdcf08fe2f2bf0f03c191776b0) - **bench:** dynamically determine double-precision size _(by Athan Reines)_
-   [`1dda7d2`](https://github.com/stdlib-js/stdlib/commit/1dda7d20d743bf44053c96cfa9bf89f456e1ed8b) - **feat:** add `blas/base/zcopy` [(#2064)](https://github.com/stdlib-js/stdlib/pull/2064) _(by Aman Bhansali, Athan Reines)_
-   [`3080f03`](https://github.com/stdlib-js/stdlib/commit/3080f032a477cbd046b4201d7ffdd407c9d93816) - **chore:** fix by filling arrays with NaNs again _(by Philipp Burckhardt)_
-   [`87ccb3b`](https://github.com/stdlib-js/stdlib/commit/87ccb3b64743af368613a66232d66701715db235) - **refactor:** update `blas/ext/base/dnansumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`47cc515`](https://github.com/stdlib-js/stdlib/commit/47cc5154b1535d8d200f6cb3f6a776c282fb2711) - **refactor:** update `blas/ext/base/dcusumkbn` to follow current project conventions _(by Krishnendu Das, Pranav Goswami, Athan Reines)_
-   [`04f59a2`](https://github.com/stdlib-js/stdlib/commit/04f59a288780ff5cbaf8516db4122cbb870ced1b) - **fix(fblas/ext/base/dcusumors):** change from `int64` to `double` [(#2085)](https://github.com/stdlib-js/stdlib/pull/2085) _(by Krishnendu Das)_
-   [`8897a7d`](https://github.com/stdlib-js/stdlib/commit/8897a7db5c2d9be36132fd95cbe789906d01243a) - **refactor:** update `blas/ext/base/dcusumpw` to follow current project conventions [(#2084)](https://github.com/stdlib-js/stdlib/pull/2084) _(by Krishnendu Das)_
-   [`7d5eb79`](https://github.com/stdlib-js/stdlib/commit/7d5eb799da391f201afc4307f379e06a7b89c3f6) - **docs:** fix function calls _(by Athan Reines)_
-   [`b9f2025`](https://github.com/stdlib-js/stdlib/commit/b9f20258c101c9c53379d0704085ab0def1f1831) - **refactor:** update `blas/ext/base/dapxsum` to follow current project conventions _(by Ahmed Atwa, Athan, Philipp Burckhardt)_
-   [`a70e23d`](https://github.com/stdlib-js/stdlib/commit/a70e23d3b79c108d39c8b19392172f4776c9b043) - **refactor:** update `blas/ext/base/dasumpw` to follow current project conventions _(by Utkarsh Raj, Philipp Burckhardt)_
-   [`a9016c6`](https://github.com/stdlib-js/stdlib/commit/a9016c65a013cbabcf819c0733c05c59618d198c) - **refactor:** update `blas/ext/base/dnansumkbn` to follow current project conventions _(by Suraj Kumar)_
-   [`6246c5d`](https://github.com/stdlib-js/stdlib/commit/6246c5dcbe7163afe809a80ce221a712ea56772d) - **refactor:** update `blas/ext/base/dnansumkbn2` to follow current project conventions _(by Suraj Kumar, Philipp Burckhardt)_
-   [`7ba3296`](https://github.com/stdlib-js/stdlib/commit/7ba32967b87867957b1198cbcd5c2248235739fe) - **refactor:** update `blas/ext/base/dapxsumkbn2` to follow current project conventions _(by Suraj Kumar)_
-   [`16fabbd`](https://github.com/stdlib-js/stdlib/commit/16fabbd608ff5f4058b34e78d4e6109820bcd6b6) - **refactor:** update `blas/ext/base/dsapxsumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`71a78a5`](https://github.com/stdlib-js/stdlib/commit/71a78a5c3323c0025ecd05ca4afe7dc685f1faf5) - **refactor:** update `blas/ext/base/dcusumkbn2` to follow current project conventions _(by Varad Gupta, Philipp Burckhardt)_
-   [`8729504`](https://github.com/stdlib-js/stdlib/commit/872950417a5cd40b5e360c2bc123f007dafc3257) - **refactor:** update `blas/ext/base/dapxsumors` to follow current project conventions  _(by Shivam Ahir, Philipp Burckhardt)_
-   [`f1c46cd`](https://github.com/stdlib-js/stdlib/commit/f1c46cd7aed96dafc8b6fd7ea2a45927062b9fcd) - **refactor:** update `blas/ext/base/sasumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`8e8b47c`](https://github.com/stdlib-js/stdlib/commit/8e8b47cf5e52ef7543b99c3004075457316c611d) - **refactor:** `blas/ext/base/sapxsumkbn2` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`f5dbe2d`](https://github.com/stdlib-js/stdlib/commit/f5dbe2dafe99f775e23ff16efbccd70e2ee50c66) - **refactor:** update `blas/ext/base/dsumors` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`fd8b214`](https://github.com/stdlib-js/stdlib/commit/fd8b2148f3fe49e20a05f1663dec2e1a8f95b3bb) - **refactor:** update `blas/ext/base/dapxsumpw` to follow current project conventions _(by Shivam Ahir, Philipp Burckhardt)_
-   [`9b2ca2c`](https://github.com/stdlib-js/stdlib/commit/9b2ca2ce1281165deebb28310a8e1c73ff409245) - **refactor:** update `blas/ext/base/scusumkbn` to follow current project conventions [(#2012)](https://github.com/stdlib-js/stdlib/pull/2012) _(by Varad Gupta, Athan Reines, Philipp Burckhardt)_
-   [`f36cfab`](https://github.com/stdlib-js/stdlib/commit/f36cfab3875404fd9c58b6e2a6fedca5e04cb4d9) - **chore:** update package meta data [(#2014)](https://github.com/stdlib-js/stdlib/pull/2014) _(by stdlib-bot)_
-   [`30b95a8`](https://github.com/stdlib-js/stdlib/commit/30b95a8aa9e71f21f802c6eae85e61ff280cc499) - **refactor:** update `blas/ext/base/sapxsumpw` to follow current project conventions [(#1962)](https://github.com/stdlib-js/stdlib/pull/1962) _(by Bryan Elee)_
-   [`7c81bdd`](https://github.com/stdlib-js/stdlib/commit/7c81bdde0a34609a9e471d8d6fd14fd884482ed8) - **refactor:** update `blas/ext/base/dsumkbn2` to follow current project conventions [(#1995)](https://github.com/stdlib-js/stdlib/pull/1995 ) _(by Tirtadwipa Manunggal)_
-   [`743fd05`](https://github.com/stdlib-js/stdlib/commit/743fd055452a87d9e6d610534d9e40022d0e8235) - **refactor:** update `blas/ext/base/scusumkbn2` to follow current project conventions _(by Muhammad Haris, Philipp Burckhardt)_
-   [`37a6dfc`](https://github.com/stdlib-js/stdlib/commit/37a6dfcc48019b5b72fb885fd7d6565b5e928b1a) - **fix:** address typo _(by Athan Reines)_
-   [`a0ee397`](https://github.com/stdlib-js/stdlib/commit/a0ee397c28267c3a8234c81d1eda673e74ca26f0) - **fix:** update dependencies and update documentation _(by Athan Reines)_
-   [`f2b3fbc`](https://github.com/stdlib-js/stdlib/commit/f2b3fbce785af74072804639f615612560475202) - **refactor:** update `blas/ext/base/sapxsumkbn` to follow current project conventions [(#1895)](https://github.com/stdlib-js/stdlib/pull/1895) _(by Golden Kumar, Athan Reines)_
-   [`2fafc74`](https://github.com/stdlib-js/stdlib/commit/2fafc7432d42b9935ddf0e7c110af10ba7b5e4bd) - **refactor:** update `blas/ext/base/ssumkbn2` to follow current project conventions [(#1873)](https://github.com/stdlib-js/stdlib/pull/1873) _(by Varad Gupta, Athan Reines)_
-   [`d70b5c2`](https://github.com/stdlib-js/stdlib/commit/d70b5c2412d631ed577a3f9c7cd22457302385e3) - **refactor:** update `blas/ext/base/dsum` to follow current project conventions [(#1807)](https://github.com/stdlib-js/stdlib/pull/1807) _(by Rutam Kathale, Athan Reines)_
-   [`e3bf989`](https://github.com/stdlib-js/stdlib/commit/e3bf9895394d9a4c3db621a8c0491fc18a0fd1ba) - **fix:** update build configurations and add missing include _(by Athan Reines)_
-   [`7b29fe4`](https://github.com/stdlib-js/stdlib/commit/7b29fe431c795281b725bff2cc0911dda20c112c) - **refactor:** update `blas/ext/base/dapxsumkbn` to follow current project conventions _(by Suraj Kumar, Pranav, Philipp Burckhardt)_
-   [`079d639`](https://github.com/stdlib-js/stdlib/commit/079d6397cd66bcc13c4a83ba609796f94fe8f0ff) - **refactor:** update `blas/ext/base/sdsapxsumpw` to follow current project conventions _(by Jaimin Godhani, Pranav, Athan Reines)_
-   [`6f75d45`](https://github.com/stdlib-js/stdlib/commit/6f75d45b0ecbfa5bf67de8cd1a5e382ecf0515d7) - **refactor:** update `blas/ext/base/dsapxsum` to follow current project conventions _(by Golden Kumar, Philipp Burckhardt)_
-   [`aebb788`](https://github.com/stdlib-js/stdlib/commit/aebb78837a956e9a9035c0dcb13c82cd89dbfddd) - **refactor:** update `blas/ext/base/sdsapxsum` to follow current project conventions _(by Golden Kumar, Athan Reines)_
-   [`6f7cbb6`](https://github.com/stdlib-js/stdlib/commit/6f7cbb68f9c25352a8b6a1fe4ee361d4e532aab5) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`1852b1e`](https://github.com/stdlib-js/stdlib/commit/1852b1e1609d09a425ea0fc50397ce871e01a5d0) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`b42059b`](https://github.com/stdlib-js/stdlib/commit/b42059b2ed67d896332b671ff0d26a09fe75883d) - **refactor:** remove explicit cast _(by Athan Reines)_
-   [`327d765`](https://github.com/stdlib-js/stdlib/commit/327d76545afdbdcaa80664d945919ab79b9fb1d0) - **fix:** use correct variable names and fix configuration file _(by Athan Reines)_
-   [`80fb571`](https://github.com/stdlib-js/stdlib/commit/80fb5712491212f6a24adc12e76c72781a1a422c) - **fix:** remove trailing commas _(by Athan Reines)_
-   [`e4f0dcd`](https://github.com/stdlib-js/stdlib/commit/e4f0dcd53e364d25d1a598e20ed25dd73cf547e7) - **refactor:** update `blas/ext/base/sapx` to follow current project conventions [(#1824)](https://github.com/stdlib-js/stdlib/pull/1824) _(by Bryan Elee, Athan Reines)_
-   [`f25615d`](https://github.com/stdlib-js/stdlib/commit/f25615d97bcda98cc45f3f4ada2ce4404b4c61ef) - **style:** fix indentation _(by Athan Reines)_
-   [`fbb34de`](https://github.com/stdlib-js/stdlib/commit/fbb34debfe94725c767866c47607520918ef9d84) - **fix:** update build configuration and remove unnecessary cast _(by Athan Reines)_
-   [`8e4990d`](https://github.com/stdlib-js/stdlib/commit/8e4990df5507a997e5187f1fa05087add35a97db) - **docs:** update namespace TypeScript declarations [(#1975)](https://github.com/stdlib-js/stdlib/pull/1975) _(by stdlib-bot, Athan Reines)_
-   [`1c4fd83`](https://github.com/stdlib-js/stdlib/commit/1c4fd83fa51544ade218820397796afb02f8c1f0) - **refactor:** update `blas/ext/base/sapxsum` to follow current project conventions [(#1850)](https://github.com/stdlib-js/stdlib/pull/1850) _(by Gunj Joshi, Athan Reines, Pranav Goswami)_
-   [`0d2528e`](https://github.com/stdlib-js/stdlib/commit/0d2528ece212fef00cf6c641c298d174b3c3ba04) - **refactor:** update `blas/ext/base/dapx` to follow current project conventions [(#1954)](https://github.com/stdlib-js/stdlib/pull/1954) _(by Naveen Kumar, Athan Reines)_
-   [`23fba1c`](https://github.com/stdlib-js/stdlib/commit/23fba1c12a6ed102c00e7831aeb8cde2be56cff0) - **fix:** update build configuration _(by Athan Reines)_
-   [`4d9c326`](https://github.com/stdlib-js/stdlib/commit/4d9c326d71d640f99f696a29c7f257961c1484b3) - **fix:** update build configuration _(by Athan Reines)_
-   [`f95e706`](https://github.com/stdlib-js/stdlib/commit/f95e706ed33176af97b5ac72fe06d86931838354) - **refactor:** update `blas/ext/base/scusumpw` to follow current project conventions _(by Bryan Elee, Pranav, Philipp Burckhardt)_
-   [`548f903`](https://github.com/stdlib-js/stdlib/commit/548f903780b33e672074ce77fdaceae672679ef6) - **refactor:** update `blas/ext/base/scusumors` _(by Bryan Elee, Philipp Burckhardt)_
-   [`5ca58c5`](https://github.com/stdlib-js/stdlib/commit/5ca58c52062ee83fc9f29167a7a25c85970ea1fe) - **refactor:** update `blas/ext/base/scusum` to follow current project conventions [(#1864)](https://github.com/stdlib-js/stdlib/pull/1864) _(by Golden Kumar, Athan Reines)_
-   [`1f6eec9`](https://github.com/stdlib-js/stdlib/commit/1f6eec9ea6ed451c65a8cddea93dac70e8d1196c) - **refactor:** update `blas/ext/base/dcusum` to follow current project conventions [(#1867)](https://github.com/stdlib-js/stdlib/pull/1867) _(by Golden Kumar, Athan Reines)_
-   [`9dce525`](https://github.com/stdlib-js/stdlib/commit/9dce525e1d8c0efc375ef5a255ce356cc671de28) - **refactor:** update `blas/ext/base/dnansum` to follow current project conventions _(by Golden Kumar, Pranav)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`fba1b9f`](https://github.com/stdlib-js/stdlib/commit/fba1b9f1b85152ba9a5867b927abcd31d8f5982e) - **refactor:** update `blas/ext/base/dssum` to follow current projects conventions _(by Golden Kumar, Pranav)_
-   [`2d5c522`](https://github.com/stdlib-js/stdlib/commit/2d5c52271193b9a11ae43ea362dd51bd8f402de8) - **fix:** update build configurations _(by Athan Reines)_
-   [`caf0ebb`](https://github.com/stdlib-js/stdlib/commit/caf0ebb5e542074f2f2ad61f12a6c12221b124ea) - **fix:** update build configurations and fix argument extraction _(by Athan Reines)_
-   [`c7f7ea9`](https://github.com/stdlib-js/stdlib/commit/c7f7ea9c2008f55462da45c9bd641add72670872) - **fix:** update build configurations _(by Athan Reines)_
-   [`07514b1`](https://github.com/stdlib-js/stdlib/commit/07514b1f40412bc50348fe6a5c9a85c26f3c3675) - **fix:** update build configurations _(by Athan Reines)_
-   [`3cf3d00`](https://github.com/stdlib-js/stdlib/commit/3cf3d00039ee92c03e3a181c00fe621555162fbd) - **fix:** update build configurations _(by Athan Reines)_
-   [`c81e201`](https://github.com/stdlib-js/stdlib/commit/c81e2014d3b65f8f3ee1ad34a7c2ea08537becc8) - **refactor:** update `blas/ext/base/drev` to follow current project conventions [(#1839)](https://github.com/stdlib-js/stdlib/pull/1839) _(by Rutam Kathale, Athan Reines, Pranav Goswami)_
-   [`4b27189`](https://github.com/stdlib-js/stdlib/commit/4b27189934e9d43d64d9438fcd94ef788eb9432b) - **fix:** update build configurations _(by Athan Reines)_
-   [`61bba7a`](https://github.com/stdlib-js/stdlib/commit/61bba7abbae8924dc615773a7e74daf920570c19) - **fix:** update include path _(by Athan Reines)_
-   [`78f03b5`](https://github.com/stdlib-js/stdlib/commit/78f03b5b21b82ba088a3fac0275faa6cf24e81ac) - **fix:** use correct package names _(by Athan Reines)_
-   [`bea0904`](https://github.com/stdlib-js/stdlib/commit/bea0904866d0e36557d9e72d8922833517dae522) - **fix:** update dependencies _(by Athan Reines)_
-   [`98b0775`](https://github.com/stdlib-js/stdlib/commit/98b077561e30e6a99c7e3523e6782b007f8f5e9e) - **refactor:** update `blas/ext/base/ssumkbn` to follow current project conventions [(#1741)](https://github.com/stdlib-js/stdlib/pull/1741) _(by Snehil Shah, Athan Reines)_
-   [`16fda9a`](https://github.com/stdlib-js/stdlib/commit/16fda9aaf8c2dca876866729caca692f32856c51) - **docs:** update namespace TypeScript declarations [(#1707)](https://github.com/stdlib-js/stdlib/pull/1707) _(by stdlib-bot, Athan Reines)_
-   [`7c23a54`](https://github.com/stdlib-js/stdlib/commit/7c23a540fa9286c4ff1d7ec8411d56fc977fba82) - **refactor:** update `blas/ext/base/srev` to follow current project conventions [(#1700)](https://github.com/stdlib-js/stdlib/pull/1700) _(by Snehil Shah)_
-   [`ef026dc`](https://github.com/stdlib-js/stdlib/commit/ef026dce8372e35dca6057e58e593d084da9a05b) - **refactor:** update `blas/ext/base/ssumors`  to follow current project conventions _(by Lovelin Dhoni J B, Athan Reines, Philipp Burckhardt)_
-   [`412acd6`](https://github.com/stdlib-js/stdlib/commit/412acd6244c7712b84bfc9d9ebd138e7f43bd659) - **refactor:** update `blas/ext/base/ssumpw` to follow current project conventions [(#1673)](https://github.com/stdlib-js/stdlib/pull/1673) _(by Lovelin Dhoni J B, Athan Reines)_
-   [`3163201`](https://github.com/stdlib-js/stdlib/commit/31632017d48d98b52623397755fe880b08eb1cb4) - **docs:** update namespace TypeScript declarations [(#1676)](https://github.com/stdlib-js/stdlib/pull/1676) _(by stdlib-bot, Athan Reines)_
-   [`2675d58`](https://github.com/stdlib-js/stdlib/commit/2675d586a0877f212edf6231b529fdc9047cd694) - **refactor:** update `blas/ext/base/dfill` to follow current project conventions [(#1455)](https://github.com/stdlib-js/stdlib/pull/1455) _(by Snehil Shah, Athan Reines)_
-   [`12dcb7a`](https://github.com/stdlib-js/stdlib/commit/12dcb7a46950ebba30902c6a390a6c4244e5b1aa) - **docs:** update related packages sections [(#1421)](https://github.com/stdlib-js/stdlib/pull/1421) _(by stdlib-bot)_
-   [`1dc5966`](https://github.com/stdlib-js/stdlib/commit/1dc5966c272972122ca1bf57382deab6c432a37d) - **docs:** update related packages sections [(#1361)](https://github.com/stdlib-js/stdlib/pull/1361) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 32 people contributed to this release. Thank you to the following contributors:

-   Ahmed Atwa
-   Aleksandr
-   Aman Bhansali
-   Athan Reines
-   Bryan Elee
-   Golden Kumar
-   Gunj Joshi
-   Jaimin Godhani
-   Krishnendu Das
-   Lovelin Dhoni J B
-   Muhammad Haris
-   Naveen Kumar
-   Philipp Burckhardt
-   Pranav Goswami
-   Pranjal Jha
-   Pratik Singh
-   Praveen Kumar
-   Priyansh Prajapati
-   Priyanshu Agarwal
-   Raunak Kumar Gupta
-   Rutam Kathale
-   Shivam Ahir
-   Shubh Mehta
-   Sivam Das
-   Snehil Shah
-   Soumajit Chatterjee
-   Suraj Kumar
-   Tirtadwipa Manunggal
-   Utkarsh Raj
-   Varad Gupta
-   Xiaochuan Ye
-   rainn

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`934e2fc`](https://github.com/stdlib-js/stdlib/commit/934e2fc047e32580441a72273a04d96dacbb3c29) - improve type specificity
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`a451cbb`](https://github.com/stdlib-js/stdlib/commit/a451cbb20325ba06901c326b4576e24a7c7d8b1b) - ensure single-precision arithmetic
-   [`0c35964`](https://github.com/stdlib-js/stdlib/commit/0c359642551ee560ae376c5459bf34b0f8bcc0da) - remove unnecessary cast and fix wasm configuration
-   [`401111d`](https://github.com/stdlib-js/stdlib/commit/401111dcb29bb71ad65460fe35ba6814ab9981ed) - remove unnecessary cast
-   [`54b4641`](https://github.com/stdlib-js/stdlib/commit/54b4641053df8e23221a17660e63e581a984fe78) - remove unnecessary cast
-   [`b0b717b`](https://github.com/stdlib-js/stdlib/commit/b0b717b95f269fcbb129375f3a79026a42ca6ee3) - remove unnecessary cast
-   [`b45d78c`](https://github.com/stdlib-js/stdlib/commit/b45d78c899c8f19a8e299e2f766433e0fa212dfa) - add missing include
-   [`242c5b7`](https://github.com/stdlib-js/stdlib/commit/242c5b7680fed891efbe843e16bff6c6144cd8fe) - add missing include
-   [`cc6cba6`](https://github.com/stdlib-js/stdlib/commit/cc6cba6ed7c1675fca69ba058e12c3144317e841) - add missing include

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`18c2502`](https://github.com/stdlib-js/stdlib/commit/18c250220e23aa825b05ec5898927ea6b261ca43) - **docs:** update related packages sections [(#1303)](https://github.com/stdlib-js/stdlib/pull/1303) _(by stdlib-bot)_
-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(#1301)](https://github.com/stdlib-js/stdlib/pull/1301) _(by stdlib-bot)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`96489fa`](https://github.com/stdlib-js/stdlib/commit/96489fa603a2920bef92fb38b49ca9468851714d) - **docs:** update namespace table of contents [(#1251)](https://github.com/stdlib-js/stdlib/pull/1251) _(by stdlib-bot, Philipp Burckhardt)_
-   [`934e2fc`](https://github.com/stdlib-js/stdlib/commit/934e2fc047e32580441a72273a04d96dacbb3c29) - **feat:** improve type specificity _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`5184bd0`](https://github.com/stdlib-js/stdlib/commit/5184bd0461e8c78f983d4b619a863d93c52c6396) - **docs:** update namespace table of contents [(#1213)](https://github.com/stdlib-js/stdlib/pull/1213) _(by stdlib-bot, Athan Reines)_
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - **feat:** update namespace exports _(by Philipp Burckhardt)_
-   [`cf3668f`](https://github.com/stdlib-js/stdlib/commit/cf3668f92234f5b25369001ca6a05a434d577ba1) - **docs:** update related packages sections [(#1210)](https://github.com/stdlib-js/stdlib/pull/1210) _(by stdlib-bot)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`4d6b104`](https://github.com/stdlib-js/stdlib/commit/4d6b104a0309b9a016700badd64b137ff384de52) - **docs:** update related packages sections [(#1172)](https://github.com/stdlib-js/stdlib/pull/1172) _(by stdlib-bot, Athan Reines)_
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - **feat:** update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170) _(by stdlib-bot, Athan Reines)_
-   [`bf038c4`](https://github.com/stdlib-js/stdlib/commit/bf038c45a43a91dfdcdf5f69240e1ebc782ea8d6) - **docs:** update related packages sections [(#1168)](https://github.com/stdlib-js/stdlib/pull/1168) _(by stdlib-bot)_
-   [`6ff6caf`](https://github.com/stdlib-js/stdlib/commit/6ff6cafeb4e71cb856ded8e0b42957a627fe617d) - **docs:** update namespace table of contents [(#1162)](https://github.com/stdlib-js/stdlib/pull/1162 ) _(by stdlib-bot)_
-   [`2fa27d7`](https://github.com/stdlib-js/stdlib/commit/2fa27d7b39bce0ecff964fd95dba299abfc415bb) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`3818752`](https://github.com/stdlib-js/stdlib/commit/38187521d39bccb698a1c4ed6f20bfa20de1dc61) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`a451cbb`](https://github.com/stdlib-js/stdlib/commit/a451cbb20325ba06901c326b4576e24a7c7d8b1b) - **fix:** ensure single-precision arithmetic _(by Athan Reines)_
-   [`1589248`](https://github.com/stdlib-js/stdlib/commit/15892484dda4826886ba8a0f7740b1fed68e4476) - **test:** update assertion messages _(by Athan Reines)_
-   [`6103e65`](https://github.com/stdlib-js/stdlib/commit/6103e65700764c322d4317a868ac2b16177bdc58) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`da4db6d`](https://github.com/stdlib-js/stdlib/commit/da4db6d9d7b029d53ce947625b361a65ecc7ab82) - **test:** update assertion messages _(by Athan Reines)_
-   [`a86fb6b`](https://github.com/stdlib-js/stdlib/commit/a86fb6b874da7e1b88f005be64bf73a2ec3feb7d) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`11a8792`](https://github.com/stdlib-js/stdlib/commit/11a87920a3ca3e3de21b9cc80f1ebfe7c83a2e89) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`c1bd97d`](https://github.com/stdlib-js/stdlib/commit/c1bd97d8253e50d4f09190a3ad9ce4396291521a) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`91a2bad`](https://github.com/stdlib-js/stdlib/commit/91a2badac012efea2c027c515a1c60da7a8797cf) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`993c218`](https://github.com/stdlib-js/stdlib/commit/993c218b1fc59480347c2c4c18125e71b1bfd137) - **build:** add missing configuration _(by Athan Reines)_
-   [`f7e46de`](https://github.com/stdlib-js/stdlib/commit/f7e46de80dc93a212e5146e937afac0079d91b2a) - **docs:** add suffix _(by Athan Reines)_
-   [`65caa1a`](https://github.com/stdlib-js/stdlib/commit/65caa1a8f482f59559bce03023ebe4e2fba4d3d9) - **docs:** rename variable _(by Athan Reines)_
-   [`3272b77`](https://github.com/stdlib-js/stdlib/commit/3272b77239aa1929fa2bbda7a9ea72b8f4bbab8b) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`004b244`](https://github.com/stdlib-js/stdlib/commit/004b24478b4af2a51f2e568fe2c1efd8cb5ef59d) - **docs:** update examples to use random/array utilities _(by Athan Reines)_
-   [`efc6522`](https://github.com/stdlib-js/stdlib/commit/efc65220a39e226839fd507b59190d6402bebe61) - **bench:** update benchmarks to use random/array utilities _(by Athan Reines)_
-   [`2e4d5ae`](https://github.com/stdlib-js/stdlib/commit/2e4d5aeca71b895a3b38b4bffdd70aeba0a16a96) - **refactor:** use random/array utilities _(by Athan Reines)_
-   [`3e81e89`](https://github.com/stdlib-js/stdlib/commit/3e81e890b6d0fe256badef45d440cdb04d97f371) - **refactor:** rename variable _(by Athan Reines)_
-   [`0b3ad8a`](https://github.com/stdlib-js/stdlib/commit/0b3ad8aff5fc43c7e4103abb7f71f9108c5d0b88) - **refactor:** use random/array utilities _(by Athan Reines)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`10d7a64`](https://github.com/stdlib-js/stdlib/commit/10d7a64f4b3a6f3df553656fb54e34370aa1c2c1) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`0a89ff5`](https://github.com/stdlib-js/stdlib/commit/0a89ff5e2244f5bc7b67b70bd82c181c1d5746fc) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`85f4124`](https://github.com/stdlib-js/stdlib/commit/85f412460991aedd6e948e7407cbb6b9c004e15d) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`fed1b1f`](https://github.com/stdlib-js/stdlib/commit/fed1b1fb125f8276c71311a13e812024e73892fe) - **docs:** fix related links _(by Athan Reines)_
-   [`6db7e2f`](https://github.com/stdlib-js/stdlib/commit/6db7e2fa7a836759ed1f600e22cd2c8e5fdb12fe) - **docs:** fix related links _(by Athan Reines)_
-   [`1afb8f4`](https://github.com/stdlib-js/stdlib/commit/1afb8f478eee0f9ee7aabfa3054ca5061cda5679) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`83be0a5`](https://github.com/stdlib-js/stdlib/commit/83be0a59137e1fe6fd2ebf5ffa2073f3e0d949bc) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`83ecb8e`](https://github.com/stdlib-js/stdlib/commit/83ecb8e0e1aceeb86ebad779264f9c4570c76f1f) - **refactor:** update tests and benchmarks according to current project conventions _(by Athan Reines)_
-   [`067e5d4`](https://github.com/stdlib-js/stdlib/commit/067e5d4f360935b1961b1fbd92c1ca23e9a0a2b9) - **refactor:** update tests and benchmarks according to current project conventions _(by Athan Reines)_
-   [`4ec2cd0`](https://github.com/stdlib-js/stdlib/commit/4ec2cd0d22446eac8818845f4a816d2d4a1bfde2) - **docs:** update copy _(by Athan Reines)_
-   [`a7badd8`](https://github.com/stdlib-js/stdlib/commit/a7badd864d83199f2221f9e71eb65504df8dba3d) - **build:** add wasm configuration _(by Athan Reines)_
-   [`888e071`](https://github.com/stdlib-js/stdlib/commit/888e0715e4a32f56fdf975dedb5fbbe81b63b280) - **test:** update assertion messages _(by Athan Reines)_
-   [`2514e0a`](https://github.com/stdlib-js/stdlib/commit/2514e0afdaaa875b378bf3761a43be6c841549fd) - **refactor:** avoid unnecessary cast _(by Athan Reines)_
-   [`e14f9fe`](https://github.com/stdlib-js/stdlib/commit/e14f9fe08ccf094847acd12e17757870b9a5a417) - **docs:** update example _(by Athan Reines)_
-   [`cbee5b7`](https://github.com/stdlib-js/stdlib/commit/cbee5b72476134d157d3b7f93c73ce13b99a932f) - **build:** add and update wasm configurations _(by Athan Reines)_
-   [`c8aca89`](https://github.com/stdlib-js/stdlib/commit/c8aca89f546082a43ddb679d236d60b5d3f3a39d) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`5a36be3`](https://github.com/stdlib-js/stdlib/commit/5a36be3f681bf65914abdc58bbc3142533cb2328) - **style:** resolve lint errors _(by Athan Reines)_
-   [`0c35964`](https://github.com/stdlib-js/stdlib/commit/0c359642551ee560ae376c5459bf34b0f8bcc0da) - **fix:** remove unnecessary cast and fix wasm configuration _(by Athan Reines)_
-   [`401111d`](https://github.com/stdlib-js/stdlib/commit/401111dcb29bb71ad65460fe35ba6814ab9981ed) - **fix:** remove unnecessary cast _(by Athan Reines)_
-   [`54b4641`](https://github.com/stdlib-js/stdlib/commit/54b4641053df8e23221a17660e63e581a984fe78) - **fix:** remove unnecessary cast _(by Athan Reines)_
-   [`b0b717b`](https://github.com/stdlib-js/stdlib/commit/b0b717b95f269fcbb129375f3a79026a42ca6ee3) - **fix:** remove unnecessary cast _(by Athan Reines)_
-   [`ca64b6b`](https://github.com/stdlib-js/stdlib/commit/ca64b6b7d222aa49d4a715ad2a744dffe78be6a0) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`2b57f34`](https://github.com/stdlib-js/stdlib/commit/2b57f348e9a05aa71e1bbc857ff5b720e263d75b) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`2705ac1`](https://github.com/stdlib-js/stdlib/commit/2705ac192dbafd930d3ac0c683f792dd2023d777) - **refactor:** update implementation according to current project conventions _(by Athan Reines)_
-   [`46859da`](https://github.com/stdlib-js/stdlib/commit/46859dacafba5f446341e634a693a392dda150e4) - **docs:** update description _(by Athan Reines)_
-   [`85861b0`](https://github.com/stdlib-js/stdlib/commit/85861b0500a4b14e80236199903afa8e7c120e97) - **style:** convert indentation to spaces _(by Athan Reines)_
-   [`6785992`](https://github.com/stdlib-js/stdlib/commit/678599207a8555fa339e05783fa23e345202b69f) - **test:** update assertion descriptions _(by Athan Reines)_
-   [`edf8966`](https://github.com/stdlib-js/stdlib/commit/edf8966c7d2c25b1321d8e0a1f19f269a7c1d17c) - **docs:** update parameter description _(by Athan Reines)_
-   [`4d3baf9`](https://github.com/stdlib-js/stdlib/commit/4d3baf9116e0ce83dba9fb0a3d4ec58be4abcee4) - **style:** fix line wrapping _(by Athan Reines)_
-   [`4cdea02`](https://github.com/stdlib-js/stdlib/commit/4cdea02b93bbafe0e314bc7e3c4f7ee76de960c9) - **test:** update assertion descriptions _(by Athan Reines)_
-   [`0dc0e61`](https://github.com/stdlib-js/stdlib/commit/0dc0e61a6759632872dc01485879e803e1c3038f) - **build:** add configuration object _(by Athan Reines)_
-   [`5b15c96`](https://github.com/stdlib-js/stdlib/commit/5b15c9675be434c0e11b1ec1e1f78d7b089abbcd) - **refactor:** update implementation in accordance with current project conventions _(by Athan Reines)_
-   [`8e56b51`](https://github.com/stdlib-js/stdlib/commit/8e56b5171f9694b05c76a9e674f9d8f05cc95caf) - **style:** move declaration _(by Athan Reines)_
-   [`b45d78c`](https://github.com/stdlib-js/stdlib/commit/b45d78c899c8f19a8e299e2f766433e0fa212dfa) - **fix:** add missing include _(by Athan Reines)_
-   [`242c5b7`](https://github.com/stdlib-js/stdlib/commit/242c5b7680fed891efbe843e16bff6c6144cd8fe) - **fix:** add missing include _(by Athan Reines)_
-   [`cc6cba6`](https://github.com/stdlib-js/stdlib/commit/cc6cba6ed7c1675fca69ba058e12c3144317e841) - **fix:** add missing include _(by Athan Reines)_
-   [`4369332`](https://github.com/stdlib-js/stdlib/commit/4369332ef262f6a6820344a45fe44d5f6e944cb3) - **docs:** remove use of `floor` _(by Athan Reines)_
-   [`3c82fe7`](https://github.com/stdlib-js/stdlib/commit/3c82fe7b6c0f9fd6ef02c86d6e2024d708ac8c14) - **refactor:** update implementation in accordance with current project conventions _(by Athan Reines)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`2ee04a1`](https://github.com/stdlib-js/stdlib/commit/2ee04a1a56367b9663698aa0d01c10dca8d716df) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`8a4ff0f`](https://github.com/stdlib-js/stdlib/commit/8a4ff0fe8c4ff2d4763387c206974857f782e069) - **docs:** update links _(by Athan Reines)_
-   [`3086382`](https://github.com/stdlib-js/stdlib/commit/30863820908ec486d87c7a7c81071d7abdc6b06b) - **docs:** fix links _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version
-   [`85d9810`](https://github.com/stdlib-js/stdlib/commit/85d9810a450a6860253cef0414d0fb049f848785) - add `@stdlib/blas/base/drotg` [(#929)](https://github.com/stdlib-js/stdlib/pull/929)
-   [`410b354`](https://github.com/stdlib-js/stdlib/commit/410b354bf1f7fee6ddd641f30228a2a21b67bbdf) - update namespace TypeScript declarations [(#954)](https://github.com/stdlib-js/stdlib/pull/954)
-   [`e554460`](https://github.com/stdlib-js/stdlib/commit/e554460605019976d5ccc798e2f953050ad06dd4) - add `srotg` to namespace
-   [`e83dd85`](https://github.com/stdlib-js/stdlib/commit/e83dd85435b58df68c552b5670d7129d1798f2bc) - add `@stdlib/blas/base/srotg` [(#806)](https://github.com/stdlib-js/stdlib/pull/806)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`c1a2754`](https://github.com/stdlib-js/stdlib/commit/c1a27540e7832f4c73543f81916a678a7d8b33a9) - add missing `this` parameter
-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - update import paths for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="performance">

### Performance

-   [`61be9c0`](https://github.com/stdlib-js/stdlib/commit/61be9c0d266c264f2ac52574d45b426a41228ddd) - replace `pow` with `abs2` to better support inlining

</section>

<!-- /.performance -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#280](https://github.com/stdlib-js/stdlib/issues/280)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`c1a2754`](https://github.com/stdlib-js/stdlib/commit/c1a27540e7832f4c73543f81916a678a7d8b33a9) - **fix:** add missing `this` parameter _(by Athan Reines)_
-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`e75f7b8`](https://github.com/stdlib-js/stdlib/commit/e75f7b8bad22e572742076f4f0cabcf491cb616d) - **fix:** update import paths for `Collection` type definition _(by Athan Reines)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`e68c9b9`](https://github.com/stdlib-js/stdlib/commit/e68c9b90165fbfcc8c23acbcb7ff4fa250ac3af3) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`4d943eb`](https://github.com/stdlib-js/stdlib/commit/4d943eb98ed10314432bbfa5a3af3634ea19b969) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`a9f7c78`](https://github.com/stdlib-js/stdlib/commit/a9f7c78cf0414fd5b48418008de73910e71ec02e) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_
-   [`01a8ecb`](https://github.com/stdlib-js/stdlib/commit/01a8ecbc37710514cf17d17f12d29cef3affd9c2) - **chore:** update package meta data [(#967)](https://github.com/stdlib-js/stdlib/pull/967) _(by stdlib-bot, Athan Reines)_
-   [`f146c24`](https://github.com/stdlib-js/stdlib/commit/f146c2497ee0a8500ecb76ada00ef59ec6ea5196) - **docs:** update namespace TypeScript declarations [(#962)](https://github.com/stdlib-js/stdlib/pull/962) _(by stdlib-bot, Athan Reines)_
-   [`85d9810`](https://github.com/stdlib-js/stdlib/commit/85d9810a450a6860253cef0414d0fb049f848785) - **feat:** add `@stdlib/blas/base/drotg` [(#929)](https://github.com/stdlib-js/stdlib/pull/929) _(by Pranav Goswami, Athan Reines)_
-   [`9d552f8`](https://github.com/stdlib-js/stdlib/commit/9d552f8ee1087df295267fd3ddc2e5a04526ed6a) - **docs:** standardize parameter description and update docs _(by Athan Reines)_
-   [`ee57f9e`](https://github.com/stdlib-js/stdlib/commit/ee57f9e8313d28bc7e8119d01f89965899f54733) - **docs:** update note and adjust line wrapping _(by Athan Reines)_
-   [`61be9c0`](https://github.com/stdlib-js/stdlib/commit/61be9c0d266c264f2ac52574d45b426a41228ddd) - **perf:** replace `pow` with `abs2` to better support inlining _(by Athan Reines)_
-   [`c8985f2`](https://github.com/stdlib-js/stdlib/commit/c8985f24ec8929f5b539fbcdf782f5bc3a7a9242) - **refactor:** update add-on, examples, benchmarks, and docs [(#799)](https://github.com/stdlib-js/stdlib/pull/799) _(by Pranav Goswami, Athan Reines)_
-   [`686df7d`](https://github.com/stdlib-js/stdlib/commit/686df7df62db26067eb43b590e783a269b0fc14b) - **docs:** update namespace TypeScript declarations [(#958)](https://github.com/stdlib-js/stdlib/pull/958) _(by stdlib-bot, Athan Reines)_
-   [`710ea41`](https://github.com/stdlib-js/stdlib/commit/710ea41e3ed7f1d701cce0fe96d2a2355529b1a9) - **refactor:** update add-on, benchmarks, tests, and examples [(#800)](https://github.com/stdlib-js/stdlib/pull/800) _(by Pranav Goswami, Athan Reines)_
-   [`f99da59`](https://github.com/stdlib-js/stdlib/commit/f99da59cadb9ee832a2dde14d28a551d5908889c) - **docs:** update namespace table of contents [(#956)](https://github.com/stdlib-js/stdlib/pull/956) _(by stdlib-bot, Athan Reines)_
-   [`410b354`](https://github.com/stdlib-js/stdlib/commit/410b354bf1f7fee6ddd641f30228a2a21b67bbdf) - **feat:** update namespace TypeScript declarations [(#954)](https://github.com/stdlib-js/stdlib/pull/954) _(by stdlib-bot, Athan Reines)_
-   [`663577c`](https://github.com/stdlib-js/stdlib/commit/663577cd142af70fe529054d0754f38f0423a1d7) - **refactor:** update add-on, examples, benchmarks, and docs [(#798)](https://github.com/stdlib-js/stdlib/pull/798) _(by Pranav Goswami, Athan Reines)_
-   [`e554460`](https://github.com/stdlib-js/stdlib/commit/e554460605019976d5ccc798e2f953050ad06dd4) - **feat:** add `srotg` to namespace _(by Athan Reines)_
-   [`36b75b3`](https://github.com/stdlib-js/stdlib/commit/36b75b3271e9c3ee29c2c4488c3c1420fe48dd2e) - **refactor:** clean-up benchmarks, examples, documentation, and tests _(by Athan Reines)_
-   [`e83dd85`](https://github.com/stdlib-js/stdlib/commit/e83dd85435b58df68c552b5670d7129d1798f2bc) - **feat:** add `@stdlib/blas/base/srotg` [(#806)](https://github.com/stdlib-js/stdlib/pull/806) _(by Pranav Goswami, Athan Reines)_
-   [`a6aafba`](https://github.com/stdlib-js/stdlib/commit/a6aafba4ff5ee16ff039777addcea4af3b9f9412) - **docs:** remove extra empty lines and fix indent _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Pranav Goswami

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-08-23)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

