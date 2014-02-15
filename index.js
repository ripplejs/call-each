module.exports = function(arr, context) {
  return function(){
    arr.forEach(function(fn){
      fn.call(context);
    });
  };
};