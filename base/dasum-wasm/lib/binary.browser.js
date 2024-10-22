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

var wasm = base64ToUint8Array( 'AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAETA2AAAGADf39/AXxgBH9/f38BfAIPAQNlbnYGbWVtb3J5AgAAAwQDAAECB0wEEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAHY19kYXN1bQABD2NfZGFzdW1fbmRhcnJheQACCocCAwMAAQshAQF+IAAgASACIAKsIgNCASAArH1+QgAgA0IAVxunEAIL3gECAXwCfyAAQQBMBEBEAAAAAAAAAAAPCwJAIAJBAUcEQANAIAQgASADQQN0aisDAJmgIQQgAiADaiEDIAVBAWoiBSAARw0ACwwBCwJAIABBBnAiAkUEQCADIQUMAQsDQCAEIAEgA0EDdGorAwCZoCEEIANBAWoiBSEDIAZBAWoiBiACRw0ACwsgAEEGSA0AA0AgBCABIAVBA3RqIgMrAwCZIAMrAwiZoCADKwMQmaAgAysDGJmgIAMrAyCZoCADKwMomaCgIQQgBUEGaiEFIAJBBmoiAiAASA0ACwsgBAs=' );


// EXPORTS //

module.exports = wasm;
