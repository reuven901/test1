

let btn_play=document.querySelector(".btn_name").addEventListener("click",function () {

    let FirstName=document.querySelector(".input1").value
    let secondName=document.querySelector(".input2").value
    localStorage["FirstName"]=FirstName
    localStorage["secondName"]=secondName

})  
   document.querySelector(".btn_clear").addEventListener("click", function()
 {
    localStorage.clear()
})
     document.querySelector(".btn_delete1").addEventListener("click", function()
{
    localStorage.removeItem("FirstName")

    })

document.querySelector(".btn_delete2").addEventListener("click", function()
{

    localStorage.removeItem("secondName")
    
})