function Class(obj){
  var obj = obj || {};
  
  if(obj && obj.hasOwnProperty('initialize') && (typeof obj['initialize'] === "function")){
    for(var props in obj){
      if(obj.hasOwnProperty(props) && props !== "initialize"){
        obj['initialize'].prototype[props] = obj[props];
      }
    }
    return obj['initialize'];
  }else{
    obj['initialize'] = function(){};
    
    return obj['initialize'];
  }
 
}


module.exports = Class;