

// A method is any object whose property is a function.
// rule for this:
  // 1. If this is in a method.
// This is the object that received the method call.

// 2. If this is not directly called from a method.  Then this is the window.

//
myFunction = function(callback){
  console.log(this)
  callback()
}



var myCallback = function(){
  console.log(this)
}
obj =  {myFun: myFunction}

obj.myFun(myCallback)
