function Class(child, parent){
  
  var child = child || {};
  var parent = parent || {};
   
  function F(){};
  F.prototype = parent || {};
  var f = new F(); 
  
  if(child && child.hasOwnProperty('initialize') && (typeof child['initialize'] === "function")){
    child['initialize'].prototype = f;
    child['initialize'].prototype.constructor = child['initialize'];
    // child['initialize'].super = parent;
    for(var props in child){
      if(child.hasOwnProperty(props) && props !== "initialize"){
        child['initialize'].prototype[props] = child[props];
      }
    }
    
    return child['initialize'];
  }else{
    child['initialize'] = function(){};
    child['initialize'].prototype = f;
    child['initialize'].prototype.constructor = child['initialize'];
    // child['initialize'].super = parent
    for(var props in child){
      if(child.hasOwnProperty(props) && props !== "initialize"){
        child['initialize'].prototype[props] = child[props];
      }
    }

    return child['initialize'];
  }
 
}


// module.exports = Class;



const A = Class({
  a: function() {
    return 1;
  }
});

const B = Class({
  b: function() {
    return 2;
  }
}, A);

const b = new B();
const a = new A();

