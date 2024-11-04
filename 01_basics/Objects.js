const TinderUser = new Object() //With Singleton
// const User = {} Without singleton


TinderUser.id = 69
TinderUser.name = "Google"
// console.log(TinderUser)

const regularUser = {
    email: "someone@gmail.com",
    Fullname: {
        FirstName: "Some",
        LastName: "One"
    }
}
// console.log(regularUser.Fullname.LastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) //--(target,source) --let target be empty object i.e {}

const obj3 = {...obj1, ...obj2} //---Spreading all the objects by using ...
// console.log(obj3);

//Array of Objects

const newObj = [
    {
        email: "some@google.com",
        id: 876
    },
    {
        email: "some@google.com",
        id: 876
    },
    {
        email: "some@google.com",
        id: 899
    },
]

console.log(newObj[2]);





