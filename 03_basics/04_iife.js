// Immediately Invoked Function Expresions
// Why do we use iife? to remove the pollution caused from the global scope we use iife. 
(function chai(){
    console.log(`DB connected`)// named iife
})();

((name) => {
    console.log(`DB connected two ${name}`);// arrow function syntax// unnamed iife
})("Nayan");



//++++++----+++++---+++  JavaScript Execution Context ++ 
/* {}-- Global Execution
 Functionn Execution 
 Eval Execution