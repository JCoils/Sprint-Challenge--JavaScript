// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function dividen(x, y, cb) {
  return cb(x, y)
  }
  
  function divide(x, y) {
    console.log (x / y);
  }
  
  dividen(34, 2, divide)

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function sum(x, y, cb) {
  return cb(x, y);
}

function add(x, y) {
  console.log (x + y);
}

sum(2, 2, add);

function product(x, y, cb) {
  return cb(x, y)
  }
  
  function multiply(x, y) {
    console.log (x * y);
  }
  
  product(10, 16, multiply)
  
function consume(x, y, cb) {
  return cb(x, y)
}

  function greeting(x, y){
  console.log(`hello ${x} ${y}, nice to meet you!`)
  }

  consume("Mary","Poppins", greeting);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// a closure lets you access an outer scope from an inner function thats why it can acccess th the variable


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();