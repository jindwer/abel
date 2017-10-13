/*
* 2017-10-13
* @description delete empty value of variable
*/
const isEmpty = require('./isEmpty')

function deleteEmpty( target ){
    if( typeof target != 'object' ){
      return target;
    }
    return target instanceof Array ? deleteArrayEmpty( target ) : deleteObjEmpty( target );
}

function deleteArrayEmpty( arr ){
  for( let i = 0,len = arr.length; i < len; i++ ){
    if( isEmpty( arr[i] ) ){
      arr.splice( i, 1 );
      i--;
      len = arr.length;
    }else{
      deleteEmpty( arr[i] );
    }
  }
  return arr;
}

function deleteObjEmpty( obj ){
  for( let k in obj ){
    if( isEmpty( obj[k]) ){
      delete obj[k];
    }else{
      deleteEmpty( obj[k] );
    }
  }
  return obj;
}

module.exports = deleteEmpty
