let input=document.querySelector(".input1")
let useName=""
let btn_input=document.querySelector(".btn_input").addEventListener("click",function () {

    useName=input.value
    
});

document.querySelector(".btn_showname").addEventListener("click",function () {
    alert(useName)
    
})