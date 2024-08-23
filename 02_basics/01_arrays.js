//Arrays

// const myArr = [0, 1, 2, 3, 4, 5,];
// const myHeros = ["Nayan", "Brigitte"];
// const myArr2 = new Array(1, 2 , 3, 4);
//console.log(myArr[1]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

//myArr.unshift(9);// insert values in the beginning of the array.
// myArr.shift();// removes the fisrt element from the Array

// console.log(myArr.indexOf(9));
// console.log(myArr);

// const newArr = myArr.join();// join() converts the array into string data type.

// console.log(myArr);
// console.log(newArr);

//slice, splice


// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3);
// console.log(myn2);


const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];
//marvel_heros.push(dc_heros);
//const allHeros = marvel_heros.concat(dc_heros);
//const all_new_heros = [...marvel_heros, ...dc_heros];

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

console.log(Array.isArray("Nayan"));

console.log(Array.from("Nayan"));
console.log(real_another_array);


