/*
* 2017-10-13
* @description check var whether to be empty
*/
function isEmpty( target ){
  let type     = typeof target;
  if( type != 'boolean' && type != 'number'){
      if( type == 'string'){
        return target.trim() ? false : true;
      }else if( type == 'undefined' || target == null){
        return true;
      }else{
        if( target instanceof Number || target instanceof Boolean ){
          return false;
        }else if( target instanceof String ){
          return target.toString().trim() ? false : true;
        }else if( target instanceof Array ){
          return target.length ? false : true;
        }else if( target instanceof Object ){
          for( let k in target ) return false;
          return true;
        }
      }
   }
   return false;
}

module.exports = isEmpty
