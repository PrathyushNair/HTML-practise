function toggler()
{
    let arr=arguments
    
    let index=-1
    return function()
    {
        if(index>=arr.length-1)
        {
            index=-1
        }
        index=index+1
        console.log(arr[index])
    }
}
let toggle=toggler(1,2,3)
toggle()
toggle()
toggle()
toggle()