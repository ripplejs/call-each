module.exports = function(arr) {
  return function(){
    arr.forEach(function(fn){
      fn();
    });
  };
};