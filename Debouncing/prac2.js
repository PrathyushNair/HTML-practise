
let mapping=(arr)=>{
    document.querySelector(".news").innerText=""
    arr.map((el)=>{
        let main=document.querySelector(".news")
        let div=document.createElement("div")
        let p=document.createElement("p")
        p.innerText=el.title
        div.append(p)
        main.append(div)
    })
}
let apicallandmap=(country)=>{
    console.log("in fnc")
      fetch(`https://masai-api.herokuapp.com/news/top-headlines?country=${country}`)
      .then((resp)=>{
      
          return resp.json()
      })
      .then((resp)=>{
            mapping(resp.articles)
      })
      .catch((err)=>{
          console.log(err)
      })
}
export default apicallandmap
