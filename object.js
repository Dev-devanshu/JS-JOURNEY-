
// // const student={Name:"devanshu",age:20}
// // console.log(student)
// // // we can use array in the object
// // const student2={
// //     Name:"sharma",
// //     age:20,
// //     hobbies:["guitar","sleeping","music"]
// // }
// // console.log(student2)
// // console.log(student)
// // // how to add key value pair in the object :
// // student2.gender="male"
// // console.log(student2)



// // bracket notation and dot }

// // const person={Name:"devanshu",age:20,class:12}
// // console.log(person)
// // person.gender="male"
// // console.log(person)

// // console.log(person["Name"])
// // console.log(person["age"])
// // console.log(person["class"])

// // const key="email"
// // person[key]="okaysendme01@gmail.com"
// // console.log(person)



// // for in loop 
// // const person={
// //     Name:"devanshu",
// //     Class:12,
// //     rollno: 202,
// //     hobbies:["guitar","then","okay"]
// // }

// // for(let key in person){
// //     console.log( key," :",person[key])

// // }


// const person={
// id:1,
// Name :"devanshu",
// hobbies:["music","writing","lisitning"]
// }
// for(let ok in person){
//     console.log(ok," :",person[ok])
// }


// console.log( typeof (Object.keys(person)))

// let val=Array.isArray(Object.keys(person))
// console.log(val)


// computed proprties

// const key1="objvalue1"
// const key2="objvalue2"

// const value1="myvalue1"
// const value2="myvalue2"

// const obj={
//     [key1]:value1,
//     [key2]: value2

// }
// console.log(obj)


// spread operator                         




// const obj1={
//     key1:"hi",
//     key2:"namste",
// }
// const obj2={
//     key3:"hi",
//     key4:"sir",
//     key1:"namskar"
// }
// const newobject={...obj2,...obj1}
// console.log(newobject)


// object destructring
//  const shop={
//     paper:"a4 size",
//     stock:"is available",
//     year:1920,
//     famous:"yes"
//  }
//  const{paper:var1,stock:var2,...restprops}=shop
//  console.log(restprops)

// const newobject={...shop,...restprops}
// console.log(newobject)

// // array inside object 


// const obj={
//     key:"hi",
//     key1:"namste"
// }

// const obj2={
//     key2:"namste",
//     key3:"hi"
// }
// const object={...obj,...obj2}
// console.log(object)


// function sing(){
//     console.log("happy birthday song ")
// }


// sing();

// function twoplusfour(){
//     console.log(2+4)

// }
// twoplusfour(); 
// function sumtwo(number1,number2){
//     return(number1+number2)
// }
// const sum=sumtwo(5,3)
// console.log(sum)
