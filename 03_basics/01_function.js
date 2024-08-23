function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}
//sayMyName();

// function addTwoNumbers(num1, num2){
//    console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2){
    //    let result = num1 + num2;// we can store the value in a variable only after we return the function.
    //    return result;
     return num1+num2;
 }
const result = addTwoNumbers(3,5);
//console.log("Result:", result);


function loginUserMessage(username = "Sam"){
    if(username===undefined){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in.`;
}

//console.log(loginUserMessage("Nayan"));
console.log(loginUserMessage("Nayan"));