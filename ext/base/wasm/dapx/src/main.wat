;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 f64 i32 i32)))
  (type (;2;) (func (param i32 f64 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f64 i32 i32)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    i32.const 1
    local.get 0
    i32.sub
    local.get 3
    i32.mul
    i32.const 0
    local.get 3
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 f64 i32 i32 i32)
    (local i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.eq
      i32.or
      br_if 0 (;@1;)
      local.get 3
      i32.const 1
      i32.ne
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 5
          i32.eq
          br_if 2 (;@1;)
          local.get 2
          local.get 4
          i32.const 3
          i32.shl
          i32.add
          local.tee 6
          local.get 1
          local.get 6
          f64.load
          f64.add
          f64.store
          local.get 5
          i32.const 1
          i32.add
          local.set 5
          local.get 3
          local.get 4
          i32.add
          local.set 4
          br 0 (;@3;)
        end
        unreachable
      end
      block  ;; label = @2
        local.get 0
        i32.const 5
        i32.rem_u
        local.tee 6
        i32.eqz
        br_if 0 (;@2;)
        loop  ;; label = @3
          local.get 5
          local.get 6
          i32.eq
          br_if 1 (;@2;)
          local.get 2
          local.get 4
          i32.const 3
          i32.shl
          i32.add
          local.tee 3
          local.get 1
          local.get 3
          f64.load
          f64.add
          f64.store
          local.get 5
          i32.const 1
          i32.add
          local.set 5
          local.get 4
          i32.const 1
          i32.add
          local.set 4
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 0
      i32.const 5
      i32.lt_s
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 0
        local.get 6
        i32.le_s
        br_if 1 (;@1;)
        local.get 2
        local.get 4
        i32.const 3
        i32.shl
        i32.add
        local.tee 3
        local.get 1
        local.get 3
        f64.load
        f64.add
        f64.store
        local.get 3
        local.get 1
        local.get 3
        f64.load offset=8
        f64.add
        f64.store offset=8
        local.get 3
        local.get 1
        local.get 3
        f64.load offset=16
        f64.add
        f64.store offset=16
        local.get 3
        local.get 1
        local.get 3
        f64.load offset=24
        f64.add
        f64.store offset=24
        local.get 3
        local.get 1
        local.get 3
        f64.load offset=32
        f64.add
        f64.store offset=32
        local.get 6
        i32.const 5
        i32.add
        local.set 6
        local.get 4
        i32.const 5
        i32.add
        local.set 4
        br 0 (;@2;)
      end
      unreachable
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dapx" (func 1))
  (export "stdlib_strided_dapx_ndarray" (func 2)))
