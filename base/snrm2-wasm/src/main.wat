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
  (type (;1;) (func (param i32 i32 i32) (result f32)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f32)
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
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f32)
    (local f32 f32 f32 f32 f32 i32 i32 i32)
    i32.const 1
    local.set 9
    local.get 0
    i32.const 0
    i32.gt_s
    if (result f32)  ;; label = @1
      loop  ;; label = @2
        block  ;; label = @3
          local.get 1
          local.get 3
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.abs
          local.tee 7
          f32.const 0x1p+52 (;=4.5036e+15;)
          f32.gt
          if  ;; label = @4
            local.get 6
            local.get 7
            f32.const 0x1p-76 (;=1.32349e-23;)
            f32.mul
            local.tee 6
            local.get 6
            f32.mul
            f32.add
            local.set 6
            i32.const 0
            local.set 9
            br 1 (;@3;)
          end
          local.get 7
          f32.const 0x1p-63 (;=1.0842e-19;)
          f32.lt
          if  ;; label = @4
            local.get 9
            local.set 10
            i32.const 0
            local.set 9
            local.get 10
            i32.eqz
            br_if 1 (;@3;)
            local.get 5
            local.get 7
            f32.const 0x1p+75 (;=3.77789e+22;)
            f32.mul
            local.tee 5
            local.get 5
            f32.mul
            f32.add
            local.set 5
            i32.const 1
            local.set 9
            br 1 (;@3;)
          end
          local.get 4
          local.get 7
          local.get 7
          f32.mul
          f32.add
          local.set 4
        end
        local.get 2
        local.get 3
        i32.add
        local.set 3
        local.get 11
        i32.const 1
        i32.add
        local.tee 11
        local.get 0
        i32.ne
        br_if 0 (;@2;)
      end
      block  ;; label = @2
        local.get 6
        f32.const 0x0p+0 (;=0;)
        f32.gt
        if  ;; label = @3
          local.get 4
          f32.const 0x1p-76 (;=1.32349e-23;)
          f32.mul
          f32.const 0x1p-76 (;=1.32349e-23;)
          f32.mul
          local.get 6
          f32.add
          local.tee 5
          local.get 6
          local.get 4
          f32.const 0x1.fffffep+127 (;=3.40282e+38;)
          f32.gt
          select
          local.get 5
          local.get 4
          f32.const 0x0p+0 (;=0;)
          f32.le
          select
          local.set 4
          f32.const 0x1p+76 (;=7.55579e+22;)
          local.set 6
          br 1 (;@2;)
        end
        f32.const 0x1p+0 (;=1;)
        local.set 6
        local.get 5
        f32.const 0x0p+0 (;=0;)
        f32.gt
        i32.eqz
        br_if 0 (;@2;)
        block  ;; label = @3
          local.get 4
          local.get 4
          f32.ne
          br_if 0 (;@3;)
          local.get 4
          f32.const 0x0p+0 (;=0;)
          f32.gt
          br_if 0 (;@3;)
          local.get 4
          f32.const 0x1.fffffep+127 (;=3.40282e+38;)
          f32.gt
          br_if 0 (;@3;)
          local.get 5
          local.set 4
          f32.const 0x1p-75 (;=2.64698e-23;)
          local.set 6
          br 1 (;@2;)
        end
        local.get 5
        f32.sqrt
        f32.const 0x1p-75 (;=2.64698e-23;)
        f32.mul
        local.tee 5
        local.get 4
        f32.sqrt
        local.tee 4
        local.get 4
        local.get 5
        f32.lt
        local.tee 0
        select
        local.tee 7
        local.get 7
        f32.mul
        local.set 8
        local.get 4
        local.get 5
        local.get 0
        select
        local.get 7
        f32.div
        local.tee 4
        local.get 4
        f32.mul
        f64.promote_f32
        f64.const 0x1p+0 (;=1;)
        f64.add
        local.get 8
        f64.promote_f32
        f64.mul
        f32.demote_f64
        local.set 4
      end
      local.get 6
      local.get 4
      f32.sqrt
      f32.mul
    else
      f32.const 0x0p+0 (;=0;)
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_snrm2" (func 1))
  (export "c_snrm2_ndarray" (func 2)))
