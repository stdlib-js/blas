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
  (type (;1;) (func (param i32 i32 i32) (result f64)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f64)
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
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f64)
    (local f64 f64 f64 f64 i32 i32 i32)
    i32.const 1
    local.set 8
    local.get 0
    i32.const 0
    i32.gt_s
    if (result f64)  ;; label = @1
      loop  ;; label = @2
        block  ;; label = @3
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.abs
          local.tee 6
          f64.const 0x1p+486 (;=1.99792e+146;)
          f64.gt
          if  ;; label = @4
            local.get 7
            local.get 6
            f64.const 0x1p-538 (;=1.11138e-162;)
            f64.mul
            local.tee 6
            local.get 6
            f64.mul
            f64.add
            local.set 7
            i32.const 0
            local.set 8
            br 1 (;@3;)
          end
          local.get 6
          f64.const 0x1p-511 (;=1.49167e-154;)
          f64.lt
          if  ;; label = @4
            local.get 8
            local.set 9
            i32.const 0
            local.set 8
            local.get 9
            i32.eqz
            br_if 1 (;@3;)
            local.get 5
            local.get 6
            f64.const 0x1p+537 (;=4.49891e+161;)
            f64.mul
            local.tee 5
            local.get 5
            f64.mul
            f64.add
            local.set 5
            i32.const 1
            local.set 8
            br 1 (;@3;)
          end
          local.get 4
          local.get 6
          local.get 6
          f64.mul
          f64.add
          local.set 4
        end
        local.get 2
        local.get 3
        i32.add
        local.set 3
        local.get 10
        i32.const 1
        i32.add
        local.tee 10
        local.get 0
        i32.ne
        br_if 0 (;@2;)
      end
      block (result f64)  ;; label = @2
        local.get 7
        f64.const 0x0p+0 (;=0;)
        f64.gt
        if  ;; label = @3
          local.get 4
          f64.const 0x1p-538 (;=1.11138e-162;)
          f64.mul
          f64.const 0x1p-538 (;=1.11138e-162;)
          f64.mul
          local.get 7
          f64.add
          local.tee 5
          local.get 7
          local.get 4
          f64.const 0x1.fffffffffffffp+1023 (;=1.79769e+308;)
          f64.gt
          select
          local.get 5
          local.get 4
          f64.const 0x0p+0 (;=0;)
          f64.le
          select
          local.set 4
          f64.const 0x1p+538 (;=8.99783e+161;)
          br 1 (;@2;)
        end
        f64.const 0x1p+0 (;=1;)
        local.get 5
        f64.const 0x0p+0 (;=0;)
        f64.gt
        i32.eqz
        br_if 0 (;@2;)
        drop
        block  ;; label = @3
          local.get 4
          local.get 4
          f64.ne
          br_if 0 (;@3;)
          local.get 4
          f64.const 0x0p+0 (;=0;)
          f64.gt
          br_if 0 (;@3;)
          local.get 4
          f64.const 0x1.fffffffffffffp+1023 (;=1.79769e+308;)
          f64.gt
          br_if 0 (;@3;)
          local.get 5
          local.set 4
          f64.const 0x1p-537 (;=2.22276e-162;)
          br 1 (;@2;)
        end
        local.get 5
        f64.sqrt
        f64.const 0x1p-537 (;=2.22276e-162;)
        f64.mul
        local.tee 5
        local.get 4
        f64.sqrt
        local.tee 4
        local.get 4
        local.get 5
        f64.lt
        local.tee 0
        select
        local.tee 6
        local.get 6
        f64.mul
        local.get 4
        local.get 5
        local.get 0
        select
        local.get 6
        f64.div
        local.tee 4
        local.get 4
        f64.mul
        f64.const 0x1p+0 (;=1;)
        f64.add
        f64.mul
        local.set 4
        f64.const 0x1p+0 (;=1;)
      end
      local.get 4
      f64.sqrt
      f64.mul
    else
      f64.const 0x0p+0 (;=0;)
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_dnrm2" (func 1))
  (export "c_dnrm2_ndarray" (func 2)))
