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
// pass the callback function as an argument 
doSomething(sayHello); 

// Hello
// In this example, the sayHello function is passed as an argument to the doSomething function. The doSomething function then calls the callback function, resulting in the output "Hello". This is an example of a callback function.

