let a = 300;

if(true){
    let a = 10;
    const b = 20;
    //console.log("Inner", a);
}
//console.log(a);
//console.log(b);


function one(){
    const username = "Nayan";

    function two(){
        const website = "YouTube";
        console.log(username);
    }
    //node 03_basics/02_scope.jsconsole.log(website);
    //two();
}
//one();

if(true){
    const unsername = "Nayan";
    if (username === "Nayan"){
        const website = " YouTube";
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
console.log(addone(5));
function addone(num){
    return num+1;
}
//addone(5);

const addTwo = function(num){
    return num+2;
}
addTwo(5);