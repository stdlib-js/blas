!>
! @license Apache-2.0
!
! Copyright (c) 2024 The Stdlib Authors.
!
! Licensed under the Apache License, Version 2.0 (the "License");
! you may not use this file except in compliance with the License.
! You may obtain a copy of the License at
!
!    http://www.apache.org/licenses/LICENSE-2.0
!
! Unless required by applicable law or agreed to in writing, software
! distributed under the License is distributed on an "AS IS" BASIS,
! WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
! See the License for the specific language governing permissions and
! limitations under the License.
!<

!> Wraps `scasum` as a subroutine.
!
! @param {integer} N - number of indexed elements
! @param {Array<complex>} cx - input array
! @param {integer} strideX - `cx` stride length
! @param {real} out - output variable reference
!<
subroutine scasumsub( N, cx, strideX, out )
  implicit none
  ! ..
  ! External functions:
  interface
    real function scasum( N, cx, strideX )
      complex :: cx(*)
      integer :: strideX, N
    end function scasum
  end interface
  ! ..
  ! Scalar arguments:
  integer :: strideX, N
  real :: out
  ! ..
  ! Array arguments:
  complex :: cx(*)
  ! ..
  out = scasum( N, cx, strideX )
  return
end subroutine scasumsub