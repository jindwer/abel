/*
* @description Test 'deleteEmpty'
*/
const colors = require( 'colors/safe' )

const expect = require( 'chai' ).expect
const deleteEmpty = require( '../deleteEmpty' )

console.log(colors.green('测试: ') + colors.yellow("'deleteEmpty'"));

describe('function: deleteEmpty', function(){
  it("Array:[1,0,'',null,{}] to be Array:[1,0]", function(){
    expect(deleteEmpty([1,0,'',null,{}])).to.be.deep.equal([1,0])
  })
})
