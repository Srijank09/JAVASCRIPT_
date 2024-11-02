// Primitive types

// 7 types
// string, number,  boolean, null(empty), undefined, symbol=unique, BigInt

const value = Symbol('123')
const anotherValue = Symbol('123')

console.log(value==anotherValue);  //false

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// reference types (Non primitive)

// Array, Objects, Functions

// ***************************************************//

// stack memory (primitve types)--copy,,>>>> Heap memory (non primitve)--reference

// Values changed in primitive i.e copy id, only copy is changed but,

// values changed in non primitve i.e reference id, wherever changes are made, it effects the parent!!!