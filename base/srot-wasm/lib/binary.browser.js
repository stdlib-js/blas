/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );


// MAIN //

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEaA2AAAGAHf39/f399fQBgCX9/f39/f399fQACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgdKBBFfX3dhc21fY2FsbF9jdG9ycwAAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwAABmNfc3JvdAABDmNfc3JvdF9uZGFycmF5AAIKqwEDAwABCz8BAn4gACABIAIgAqwiB0IBIACsIgh9fkIAIAdCAFcbpyADIAQgBKwiB0IBIAh9fkIAIAdCAFcbpyAFIAYQAgtlAgJ/An0gAEEASgRAA0AgBCAGQQJ0aiIJIAcgCSoCACILlCAIIAEgA0ECdGoiCSoCACIMlJM4AgAgCSAHIAyUIAggC5SSOAIAIAUgBmohBiACIANqIQMgCkEBaiIKIABHDQALCws=' );


// EXPORTS //

module.exports = wasm;
