/*
* @description Test
*/
const deleteEmpty = require('../')
const isEmpty = require('../lib/isEmpty')

let array = [ 1, 0, 'Abel', '', ' ', [ 1, 2, ''], [], true, false, {name: 'Kennedy', age: 0, sex: '', hobby: []}];

let json  = {
  number1: 1, number2: 0,
  string1: 'Abel', string2: '', string3: '   ',
  boolean1: true, boolean2: false,
  array: [ 1, '', null ],
  json: { name: 'Abel', age: null, sex: false, hobby: [ 'basketball', '' ] }
};

console.log( 'Test Array: ------------> start' );
console.log( 'before: ' );
console.log( array );
console.log( 'after: ' );
console.log( deleteEmpty( array ) );
console.log( 'Test Array: ------------> end' );
console.log( '------------------------------------------------------------------------' );
console.log( 'Test Json: ------------> start' );
console.log( 'before: ' );
console.log( json );
console.log( 'after: ' );
console.log( deleteEmpty( json ) );
console.log( 'Test Json: ------------> end' );
