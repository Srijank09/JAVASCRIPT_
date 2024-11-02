

const myArr = new Array(1,2,3,4,5)

// console.log(myArr[1]);
// console.log(typeof arr);

// myArr.push(6)

// myArr.unshift(9)    //for to-do's .... adds at first
// console.log(myArr.includes(9));

// console.log(myArr);
console.log("A - ",myArr); //Before

const myn1 = myArr.slice(1,3)

console.log(myn1," Slicing");
console.log("B - ",myArr); //After slicing

const myn2 = myArr.splice(1,3)  
console.log(myn2," Splicing");
console.log("C - ",myArr);  //After splicing

//Splicing manipulates the oroginal array while slicing just slices n-1 index arrays and shows the result



