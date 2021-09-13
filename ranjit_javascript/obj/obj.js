// const obj={
//     name:"ranjit",
//     roll:72
// }
// obj.lastname="sah"

//////////////// create obj using new kayboard
// const person =new Object()
// person.name="mohan",

// console.log(person)

////////////////// mutable obj
// const mutable={
//     name:"okok",
//     age:56
// }
// const x = mutable
// x.age=22
// console.log(mutable)


////////////// acess obj
// const acess={
//     name:"okok",
//      age:56
// }
// console.log(acess.age)
// console.log(acess["name"])


////////////// for in loop
// const loop={
//     name:"okok",
//           age:56 
// }
// for(ok in loop){
//     if(ok =="age" ){
//       console.log(loop[ok]) 
//     }
// console.log(loop[ok])
// }


// ////////////////add a propertise in obj
// loop.names="ranjit"

////////////// delete propertise from obj
// const ok = delete loop.names

// console.log(loop)

////////////nested obj////////////
// const obj={
//     name:"ranjit",
//     ph:"2143872",
//     addr:{
//         state:"bihar",
//         district:"madhubani"
//     }
// }

// console.log(obj)
// console.log(obj.addr.state)
// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }
//   let x;
//   for(i in myObj.cars){
//       x+= myObj.cars[i].name

//        x+=myObj.cars[i].models.map(ok=>ok)

//   }
//   console.log(x)

// const models=["Fiesta", "Focus", "Mustang"]
// for(obj in models){
//     console.log(obj)
// }