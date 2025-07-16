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
  (type (;1;) (func (param i32 i32 i32) (result f64)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f64)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f64)
    (local f64 f64 f64 f64 f64 i32 i32 i32 i32)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f64.const 0x0p+0 (;=0;)
      return
    end
    local.get 3
    i32.const 1
    i32.shl
    local.set 9
    local.get 2
    i32.const 1
    i32.shl
    local.set 11
    i32.const 0
    local.set 3
    i32.const 1
    local.set 2
    loop  ;; label = @1
      local.get 0
      local.get 3
      i32.eq
      i32.eqz
      if  ;; label = @2
        block  ;; label = @3
          local.get 1
          local.get 9
          i32.const 3
          i32.shl
          i32.add
          local.tee 12
          f64.load
          local.tee 6
          f64.abs
          local.tee 8
          f64.const 0x1p+486 (;=1.99792e+146;)
          f64.gt
          if  ;; label = @4
            local.get 7
            local.get 8
            f64.const 0x1p-538 (;=1.11138e-162;)
            f64.mul
            local.tee 6
            local.get 6
            f64.mul
            f64.add
            local.set 7
            i32.const 0
            local.set 2
            br 1 (;@3;)
          end
          local.get 8
          f64.const 0x1p-511 (;=1.49167e-154;)
          f64.lt
          if  ;; label = @4
            local.get 2
            i32.const 1
            i32.and
            local.set 10
            i32.const 0
            local.set 2
            local.get 10
            i32.eqz
            br_if 1 (;@3;)
            local.get 4
            local.get 8
            f64.const 0x1p+537 (;=4.49891e+161;)
            f64.mul
            local.tee 4
            local.get 4
            f64.mul
            f64.add
            local.set 4
            i32.const 1
            local.set 2
            br 1 (;@3;)
          end
          local.get 5
          local.get 6
          local.get 6
          f64.mul
          f64.add
          local.set 5
        end
        block  ;; label = @3
          local.get 12
          f64.load offset=8
          local.tee 6
          f64.abs
          local.tee 8
          f64.const 0x1p+486 (;=1.99792e+146;)
          f64.gt
          if  ;; label = @4
            local.get 7
            local.get 8
            f64.const 0x1p-538 (;=1.11138e-162;)
            f64.mul
            local.tee 6
            local.get 6
            f64.mul
            f64.add
            local.set 7
            i32.const 0
            local.set 2
            br 1 (;@3;)
          end
          local.get 8
          f64.const 0x1p-511 (;=1.49167e-154;)
          f64.lt
          if  ;; label = @4
            local.get 2
            i32.const 1
            i32.and
            local.set 10
            i32.const 0
            local.set 2
            local.get 10
            i32.eqz
            br_if 1 (;@3;)
            local.get 4
            local.get 8
            f64.const 0x1p+537 (;=4.49891e+161;)
            f64.mul
            local.tee 4
            local.get 4
            f64.mul
            f64.add
            local.set 4
            i32.const 1
            local.set 2
            br 1 (;@3;)
          end
          local.get 5
          local.get 6
          local.get 6
          f64.mul
          f64.add
          local.set 5
        end
        local.get 3
        i32.const 1
        i32.add
        local.set 3
        local.get 9
        local.get 11
        i32.add
        local.set 9
        br 1 (;@1;)
      end
    end
    block (result f64)  ;; label = @1
      local.get 7
      f64.const 0x0p+0 (;=0;)
      f64.gt
      if  ;; label = @2
        local.get 5
        f64.const 0x1p-538 (;=1.11138e-162;)
        f64.mul
        f64.const 0x1p-538 (;=1.11138e-162;)
        f64.mul
        local.get 7
        f64.add
        local.tee 4
        local.get 7
        local.get 5
        f64.const 0x1.fffffffffffffp+1023 (;=1.79769e+308;)
        f64.gt
        select
        local.get 4
        local.get 5
        f64.const 0x0p+0 (;=0;)
        f64.le
        select
        local.set 5
        f64.const 0x1p+538 (;=8.99783e+161;)
        br 1 (;@1;)
      end
      f64.const 0x1p+0 (;=1;)
      local.get 4
      f64.const 0x0p+0 (;=0;)
      f64.gt
      i32.eqz
      br_if 0 (;@1;)
      drop
      local.get 5
      f64.const 0x0p+0 (;=0;)
      f64.le
      i32.eqz
      local.get 5
      f64.const 0x1.fffffffffffffp+1023 (;=1.79769e+308;)
      f64.gt
      i32.or
      i32.eqz
      if  ;; label = @2
        local.get 4
        local.set 5
        f64.const 0x1p-537 (;=2.22276e-162;)
        br 1 (;@1;)
      end
      local.get 4
      f64.sqrt
      f64.const 0x1p-537 (;=2.22276e-162;)
      f64.mul
      local.tee 6
      local.get 5
      f64.sqrt
      local.tee 5
      local.get 5
      local.get 6
      f64.lt
      local.tee 0
      select
      local.tee 4
      local.get 4
      f64.mul
      local.get 5
      local.get 6
      local.get 0
      select
      local.get 4
      f64.div
      local.tee 4
      local.get 4
      f64.mul
      f64.const 0x1p+0 (;=1;)
      f64.add
      f64.mul
      local.set 5
      f64.const 0x1p+0 (;=1;)
    end
    local.get 5
    f64.sqrt
    f64.mul)
  (export "__wasm_call_ctors" (func 0))
  (export "c_dznrm2" (func 1))
  (export "c_dznrm2_ndarray" (func 2)))
