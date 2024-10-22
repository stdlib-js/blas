;; @license Apache-2.0
;;
;; Copyright (c) 2024 The Stdlib Authors.
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
  (type (;1;) (func (param i32 i32 i32) (result i32)))
  (type (;2;) (func (param i32 i32 i32 i32) (result i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result i32)
    (local i64)
    local.get 0
    local.get 1
    local.get 2
    local.get 2
    i64.extend_i32_s
    local.tee 3
    i64.const 1
    local.get 0
    i64.extend_i32_s
    i64.sub
    i64.mul
    i64.const 0
    local.get 3
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result i32)
    (local f64 f64 i32 i32 i32)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      i32.const -1
      return
    end
    local.get 0
    i32.const 1
    i32.eq
    if  ;; label = @1
      i32.const 0
      return
    end
    local.get 1
    local.get 3
    i32.const 3
    i32.shl
    i32.add
    f64.load
    f64.abs
    local.set 4
    i32.const 1
    local.set 6
    loop  ;; label = @1
      local.get 1
      local.get 2
      local.get 3
      i32.add
      local.tee 3
      i32.const 3
      i32.shl
      i32.add
      f64.load
      f64.abs
      local.tee 5
      local.get 4
      local.get 4
      local.get 5
      f64.lt
      local.tee 8
      select
      local.set 4
      local.get 6
      local.get 7
      local.get 8
      select
      local.set 7
      local.get 6
      i32.const 1
      i32.add
      local.tee 6
      local.get 0
      i32.ne
      br_if 0 (;@1;)
    end
    local.get 7)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_idamax" (func 1))
  (export "c_idamax_ndarray" (func 2)))
