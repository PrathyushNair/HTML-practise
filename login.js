let gotohome=()=>{
    window.location.href="index.html"
}
let signupdata=JSON.parse(localStorage.getItem("signupdata"))||[]

let login=(e)=>{
    e.preventDefault()
   
       
       let email=document.querySelector(".loginemail").value
      let password=document.querySelector(".loginpassword").value
      console.log(email,password)
      signupdata.map((el)=>{
        if(password==el.password&&email==el.email)
        {
            console.log("logged in")
        }
      })
  
   

}
document.querySelector(".login").addEventListener("submit",login)