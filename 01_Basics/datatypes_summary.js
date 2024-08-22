// Primitive DataType/ call by variables
//  7 types, String, Number, Boolean, Null, Undefined, BigInt, Symbol.

// Non-Primitive DataType/Reference Type/ call by reference

//Array, Objects, Functions

let heros = ["Strange", "Spider-Man", "Captain"];

let myObj = {
    name: "Nayan",
    age: 29,
};

const myFunction = function(){
    console.log("Hello World")
};
// How to find out the data types;== we can use the "typeof" to find out the type of the variable.


console.log(typeof myObj);

//+++++++++++++++++++Memory++++++++++++++++
/*
Stack (Primitive) , Heap (Non-Primitive)



*/
 let myYoutubename = "NayanSutradhardotcom";
  
 let anotherName = myYoutubename;
  anotherName = "JonnySutradhar";

  console.log(myYoutubename);
  console.log(anotherName);
  
  let userOne = {
    email: "one@google.com",
    upi: "user@ybl",
  }
   let userTwo = userOne;
   userTwo.email = "nayan@gmail.com";
   console.log(userOne.email);
   console.log(userTwo.email);
   
   

  