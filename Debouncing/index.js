// function toggler()
// {
//     let arr=arguments
//     let index=-1
//     return function()
//     {
//         if(index>=arr.length-1)
//         {
//             index=-1
//         }
//         index=index+1
//         console.log(arr[index])
//     }
// }
// const toggle=toggler("on","of")
// import diva from "./shop.js"
// document.querySelector(".shop").innerHTML=diva()
// document.querySelector(".hello").style.color="red"
// document.querySelector(".hello").addEventListener("click",()=>{
//     alert("clicked hello")
// })

///Deboincing starts///
function mapping(arr) {
  document.querySelector(".movielist").innerHTML = "";
    arr.map((el) => {
    let movielist = document.querySelector(".movielist");
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = el.Title;
    div.append(p);
    movielist.append(div);
    movielist.style.display = "block";
  });
}
function n(name) {
  
  return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2d582b9a&s=${name}`)
    .then((response) => response.json())
    .then((response) => {
        if (response.Search !== undefined) {   //if I get proper response I will append the data
        mapping(response.Search);
      } else {                              //else I will display "movies not found"
        let arr = [{ Title: "Movie Not Found" }];
        mapping(arr);
        setTimeout(() => {                  // if movies not found the the div will disappear after 2sec
          document.querySelector(".movielist").style.display = "none";
        }, 2000);
      }
    })
    .catch((err) => console.error(err));
}

//First  create  debouncer function which takes in function to be debounced and the required delay
let debouncer = (fn, delay) => {
  let id;
  return function () {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => fn.apply(this, arguments), delay);
  };
};
let input = document.querySelector(".searchbox");
input.addEventListener("keyup", () => debouncer(n(input.value), 1000));

//Debouncing ends////

///Throttler////
function print(name) {
  console.log(name);
}
let throttler = (f, wait) => {
  let lastcall = 0;

  return function () {
    console.log(Date.now(), lastcall);
    if (Date.now() - lastcall > wait) {
      lastcall = Date.now();
      f.apply(this, arguments);
    }
  };
};
document.querySelector(".btn").addEventListener("click", () => {
  throttler(print("Prathyush"), 5000);
});
///Throttler ends////

//  let min= document.querySelector(".min")
//  let sec= document.querySelector(".sec")
//  let mlsec= document.querySelector(".mlsec")
// let timer=()=>{
//     let m=0
//     let s=0
//     let ms=0
//     setInterval(()=>{
//         mlsec.innerText=ms
//         ms++
//         if(ms==1000)
//         {
//             ms=0
//             s=s+1
//             sec.innerText=s
//             if(s==60)
//             {   s=0
//                 m++
//                 min.innerText=m
//             }
//         }
//     },1)
//  }
//timer()

///image slider///
let images_arr = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
];
let i = 0;
let id;
let img = document.querySelector(".imagetag");
function st() {
  id = setInterval(() => {
    if (i >= images_arr.length) {
      i = 0;
    }

    img.src = images_arr[i];
    i++;
  }, 3000);
}
function stop() {
  console.log("in stop");
  clearInterval(id);
}
document.querySelector(".start").addEventListener("click", () => {
  st();
});
document.querySelector(".stop").addEventListener("click", () => {
  stop();
});
