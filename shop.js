let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[]

let shopdata=[
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6040b194e6ae752634265459/webp/491892773_1-640x640.jpg",
        name : "LOL SURPRISE! FLUFFY PETS WINTER DISCO",
        age : "2-5 years",
        brand : "LOL SURPRISE",
        price : "₹1,899",
        price2:1899,
        strikedPrice : "₹1999",
        category:"Learn with fun"
    },
    
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/60000146d6148715d43dee29/webp/hp5563-640x640.jpg",
        name : "EIFILL TOWER",
        age : "2-5 years",
        brand : "HAPE",
        price : "₹1079",
        price2:1079,
        strikedPrice : "₹1199",
        category:"Learn with fun"
    },
    
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6005dbef9d57de3ca1e53b02/webp/47460_1-640x640.jpg",
        name : "ORBEEZ SPARKLE SURPRISE",
        age : "5-9 years",
        brand : "ORBEEZ",
        price : "₹1,599",
        price2:1599,
        strikedPrice : "₹1799",
        category:"Learn with fun"
    },
    
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/600bf7cd5bac148eda65738d/webp/4010-640x640.jpg",
        name : "MY FIRST JCB - BIG WHEELER JOEY",
        age : "0-2 years",
        brand : "JCB",
        price : "₹919",
        price2:919,
        strikedPrice : "₹999",
        category:"Learn with fun"
    },
    
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/600c0367d708505a915b0f1c/webp/4012_4-640x640.jpg",
        name : "MY FIRST HELPFUL DUMP TRUCK",
        age : "0-2 years",
        brand : "JCB",
        price : "₹1,287",
        price2:1287,
        strikedPrice : "₹1399",
        category:"Learn with fun"
    },
    
    {
        imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/6196a9f7e4c8d4c2993255cc/webp/toy-store-1500-x-1500-px-1--640x640.png",
        name : "DISNEY FROZEN 2 TALKING PLUSH - ANNA & ELSA",
        age : "2-5 years",
        brand : "FROZEN",
        price : "₹2,110",
        price2:2110,
        strikedPrice : "₹2398",
        category:"Learn with fun"
    },
    
{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61811a469dd751ce11db0656/webp/chevrolet-green-color--640x640.jpeg",
    name : "NEW RAY CITY CRUISER COLLECTION CHEVROLET GREEN 1:43",
    age : "5-9 years",
    brand : "NEW RAY",
    price : "₹499",
    price2:499,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61e6baca677f063eac6bf84f/webp/ferrari-set-of-5-640x640.jpg",
    name : "BBURAGO FERRARI RACE AND PLAY 1/48 SET OF 5 CARS",
    age : "2-5 years",
    brand : "BBURAGO",
    price : "₹1,995",
    price2:1995,
    strikedPrice : "",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61ed13630e0d4a4f88e1391d/webp/imagimake-monument-640x640.jpg",
    name : "MAPOLOGY MONUMENTS OF INDIA",
    age : "5-9 years",
    brand : "IMAGIMAKE",
    price : "₹679",
    price2:679,
    strikedPrice : "₹799",
    category:"Learn with fun"
},

{
    imageUrl : "https://d2pyicwmjx3wii.cloudfront.net/s/5f447e14285691dcc9bfcdf2/61c8c30ebb5f9c3623d1adb9/webp/sparkle-girl_baking-set_2-640x640.jpeg",
    name : "SPARKLE GIRLZ BAKING SET",
    age : "2-5 years",
    brand : "SPARKLE GIRLZ",
    price : "₹1,099",
    price2:1099,
    strikedPrice : "₹1199",
    category:"Learn with fun"
},
]
let addtocart=(el)=>{
    console.log("in cartdata")
    let cartdata=JSON.parse(localStorage.getItem("cartdata"))||[]
    cartdata.push(el)
    localStorage.setItem("cartdata",JSON.stringify(cartdata))
}
localStorage.setItem("shopdata",JSON.stringify(shopdata))
data=JSON.parse(localStorage.getItem("shopdata"))
let displaydata=(data)=>{
 document.querySelector(".maincontainer").innerText=""
 data.map((el)=>{
    let main=document.querySelector(".maincontainer")
    let div=document.createElement("div")
    div.setAttribute("class","indidiv")
    let prodname=document.createElement("h4")
    let prodprice=document.createElement("h4")
    let imagediv=document.createElement("div")
    imagediv.setAttribute("class","imagediv")
    let btn2=document.createElement("button")
    let img=document.createElement("img")
    img.setAttribute("class","imagecss")
    img.src=el.imageUrl
    prodname.innerText=el.name
    prodprice.innerText=el.price
    imagediv.append(img)
    let buttondiv=document.createElement("div")
    buttondiv.setAttribute("class","buttondiv")
    let btn1=document.createElement("button")
    btn1.innerText="Add to cart"
    btn1.addEventListener("click",()=>{
        addtocart(el)
    })
    btn2.innerText="Add to wishlist"
    buttondiv.append(btn1,btn2)
    div.append(imagediv,prodname,prodprice,buttondiv)
    main.append(div)

 })
}
displaydata(data)
let select=document.querySelector("select")
let sorting=(e)=>{
    console.log()
    if(e.target.value=="lowtohigh")
    {
        data.sort((a,b)=>{
            return a.price2-b.price2
        })
    }
    else if(e.target.value=="hightolow")
    {
        data.sort((a,b)=>{
            return b.price2-a.price2
        })
    }
    else if(e.target.value=="asc")
    {
        data.sort((a,b)=>{
            let f=a.name.toLowerCase()
            let s=b.name.toLowerCase()
            if(f>s)
            {
                return 1
            }
            else if(f<s)
            {
                return -1
            }
            else{
                return 0
            }
        })
    }
    displaydata(data)
}

select.addEventListener("change",sorting)
