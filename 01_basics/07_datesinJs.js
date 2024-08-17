let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);  //Date is a object

// let myCreatedDate = new Date(2022, 4, 25, 17, 38, 45)  //Month starts with 0 i.e, Jan = 0, Feb = 1
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2024-08-15")
let myCreatedDate = new Date("08-15-2024")  //MM-DD-YYYY Format
console.log(myCreatedDate.toLocaleString());

console.log(Math.floor(Date.now()/1000));


