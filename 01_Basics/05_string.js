const name ="Nayan";
const repoCount = 50;
// console.log(name +   repoCount + " Value");
// for concatenation of string using (`) is the modern method. place the variable inside of {} by using a $ in front. like ${}.== String Interpulation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 const gameName = new String("Nayan-nc-yc");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));// to find the position of a character
console.log(gameName.indexOf("c"));// to find the index of a character
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Nayan  ";
console.log(newStringOne.trim());


const url = "http//hitech.com/hitech%20ch";


console.log(url.replace('%20', "-"));

console.log(gameName.split("-"))