// callback 
// callback is a function that is passed as an argument to another function

// function that takes a callback function as an argument
function doSomething(callback) {
  // call the callback function
  callback();
}

// callback function
function sayHello() {
  console.log('Hello');
}