/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import isDiagonalType = require( './../../../../base/assert/is-diagonal-type' );
import isLayout = require( './../../../../base/assert/is-layout' );
import isMatrixTriangle = require( './../../../../base/assert/is-matrix-triangle' );
import isOperationSide = require( './../../../../base/assert/is-operation-side' );
import isTransposeOperation = require( './../../../../base/assert/is-transpose-operation' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests whether an input value is a BLAS diagonal type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a diagonal type
	*
	* @example
	* var bool = ns.isDiagonalType( 'unit' );
	* // returns true
	*
	* bool = ns.isDiagonalType( 'non-unit' );
	* // returns true
	*
	* bool = ns.isDiagonalType( 'foo' );
	* // returns false
	*/
	isDiagonalType: typeof isDiagonalType;

	/**
	* Tests whether an input value is a BLAS memory layout.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a memory layout
	*
	* @example
	* var bool = ns.isLayout( 'row-major' );
	* // returns true
	*
	* bool = ns.isLayout( 'column-major' );
	* // returns true
	*
	* bool = ns.isLayout( 'foo' );
	* // returns false
	*/
	isLayout: typeof isLayout;

	/**
	* Tests whether an input value is a BLAS matrix triangle.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a matrix triangle
	*
	* @example
	* var bool = ns.isMatrixTriangle( 'lower' );
	* // returns true
	*
	* bool = ns.isMatrixTriangle( 'upper' );
	* // returns true
	*
	* bool = ns.isMatrixTriangle( 'foo' );
	* // returns false
	*/
	isMatrixTriangle: typeof isMatrixTriangle;

	/**
	* Tests whether an input value is a BLAS operation side.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is an operation side
	*
	* @example
	* var bool = ns.isOperationSide( 'right' );
	* // returns true
	*
	* bool = ns.isOperationSide( 'left' );
	* // returns true
	*
	* bool = ns.isOperationSide( 'foo' );
	* // returns false
	*/
	isOperationSide: typeof isOperationSide;

	/**
	* Tests whether an input value is a BLAS transpose operation.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a transpose operation
	*
	* @example
	* var bool = ns.isTransposeOperation( 'transpose' );
	* // returns true
	*
	* bool = ns.isTransposeOperation( 'conjugate-transpose' );
	* // returns true
	*
	* bool = ns.isTransposeOperation( 'foo' );
	* // returns false
	*/
	isTransposeOperation: typeof isTransposeOperation;
}

/**
* Base BLAS assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
