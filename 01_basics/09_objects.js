//objects declared in 2 ways
//1. singleton(constructor)-literals declared are not singleton but constructer created 
//are singleton

//2. object literals-key,value

//Object.create --singleton
const mySymbol = Symbol("Key")

const jsuser = {
    name: "Srijan",
    age: 20,
    [mySymbol]: "KeyValue",
    email: "srijan@gmail.com",
    location: "Mangaluru",
    isLoggedIn: false,
    lastLoggedDays: ["Monday","Wednesday","Friday"]
}

// console.log(jsuser.location);  ---printing location using dot operator(method 1)
// console.log(jsuser["email"]); ---printing email using sqaure brackets(method 2) 
// console.log(typeof jsuser["mySymbol"]); ---typeof symbol
// console.log(jsuser[mySymbol]); ---printing Symbol

jsuser.location = "Bengaluru"  //overwriting location as Bengaluru
// Object.freeze(jsuser)  //freezing the object jsuser
jsuser.location = "Singapore" //again overwriting but not overwritten because object is freezed
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello World!!!");
}

console.log(jsuser.greeting());

jsuser.greetingTwo = function(){
    console.log(`How you doing Mr.${this.name}`);
}
console.log(jsuser.greetingTwo());





