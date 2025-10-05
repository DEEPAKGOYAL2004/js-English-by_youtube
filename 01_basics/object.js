
let mysym=Symbol("KEY1")

const student={
    name:"Deepak Goyal",
    age: 21,
    [mysym]:"mykey1",
    location:"jaipur",
    email:"deepak@google.com",
    lastlogin:["Mon","Wed"]
}

//for overriting 
student.age=25

//for not want to change in future 
Object.freeze(student.age)

// console.log(student.age)
// console.log(student[mysym])
// console.log(student)

student.greet= function(){
           console.log("My friend is kashish")
}
// console.log(student.greet())

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign({},obj1,obj2)

// console.log(obj3)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

const course={
    coursename:"Aerospace",
    price:"200k",
    courseinstructor:"Goyal"

}
console.log(course.courseinstructor)

const {courseinstructor: Inst}=course
console.log(Inst)




