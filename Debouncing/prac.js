// let input=document.querySelector(".pass")
// let btn=document.querySelector(".btn")

// let check=( input)=>{
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(input=="Prathyush")
//             {
//                resolve("perfecto")
//             }
//             else{
//                 reject("incorrect password")
//             }
//         },3000)
//     })

//     promise.then((resolve)=>{
//         console.log(resolve)
//     }).catch((reject)=>{
//         console.log(reject)
//     })


// }

// btn.addEventListener("click",()=>{
//     check(input.value)
// })
// import apicallandmap from "./prac2.js"

// apicallandmap("in")
// document.querySelector(".in").addEventListener("click",()=>{
//     apicallandmap("in") 
// })
// document.querySelector(".ch").addEventListener("click",()=>{
//     apicallandmap("ch") 
// })
// document.querySelector(".us").addEventListener("click",()=>{
//     apicallandmap("us") 
// })
// document.querySelector(".uk").addEventListener("click",()=>{
//     apicallandmap("uk") 
// })

// console.log(9&&4||6&&60||78)
// 7&&
// 8&&
//5 && 2 && 0 || 2 && 3 || 15 && 21
let arr=[1,2,3]

var rec = (arr,i=0) => {
    let obj={}
  if(i===arr.length){
    console.log("finally")
    return obj
  }
  else{
      obj[arr[i]] = rec( arr, i+1 )
      console.log("inhello")
      return obj
  }
}
console.log(rec(arr,0))
