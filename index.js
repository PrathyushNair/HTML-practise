let gotohome=()=>{
    window.location.href="index.html"
}
let gotoindex1=()=>{
    window.location.href="index1.html"
}
let gotoshop=()=>{
    window.location.href="shop.html"
}
let gotoindex3=()=>{
    window.location.href="index3.html"
}

let signupdata=JSON.parse(localStorage.getItem("signupdata"))||[]

let signup=(e)=>{
    e.preventDefault()
    let obj={
        name:document.querySelector(".signupname").value,
       email:document.querySelector(".signupemail").value,
      password:document.querySelector(".signuppassword").value
    }
    console.log(obj)
    signupdata.push(obj)
    localStorage.setItem("signupdata",JSON.stringify(signupdata))

}

document.querySelector("form").addEventListener("submit",signup)


