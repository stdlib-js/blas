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
  (type (;1;) (func (param i32 f32 i32 i32) (result f32)))
  (type (;2;) (func (param i32 f32 i32 i32 i32) (result f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f32 i32 i32) (result f32)
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
  (func (;2;) (type 2) (param i32 f32 i32 i32 i32) (result f32)
    (local f32 f32 f32 i32)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f32.const 0x0p+0 (;=0;)
      return
    end
    local.get 3
    if  ;; label = @1
      loop  ;; label = @2
        local.get 0
        local.get 8
        i32.eq
        i32.eqz
        if  ;; label = @3
          local.get 5
          local.get 1
          local.get 2
          local.get 4
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.add
          local.tee 5
          local.get 6
          local.get 6
          local.get 5
          f32.add
          local.tee 7
          f32.sub
          f32.add
          local.get 6
          local.get 5
          local.get 7
          f32.sub
          f32.add
          local.get 6
          f32.abs
          local.get 5
          f32.abs
          f32.ge
          select
          f32.add
          local.set 5
          local.get 8
          i32.const 1
          i32.add
          local.set 8
          local.get 3
          local.get 4
          i32.add
          local.set 4
          local.get 7
          local.set 6
          br 1 (;@2;)
        end
      end
      local.get 6
      local.get 5
      f32.add
      return
    end
    local.get 1
    local.get 2
    local.get 4
    i32.const 2
    i32.shl
    i32.add
    f32.load
    f32.add
    local.get 0
    f32.convert_i32_u
    f32.mul)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_sapxsumkbn" (func 1))
  (export "stdlib_strided_sapxsumkbn_ndarray" (func 2)))
