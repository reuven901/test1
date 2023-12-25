let names=[]
let greade=[]

function calfGreade() {

    let nameStudent=document.querySelector(".namestudent")
    let greadeStudent=document.querySelector(".gradestudent")
    let finalGreade=document.getElementById("finalgrade")
    let midGreade=nameStudent.value.length*2+ +greadeStudent.value
    if (midGreade>100){
        finalGreade.innerHTML=100
    }
    else
    {
        finalGreade.innerHTML= midGreade
    }

document.querySelector(".names").innerHTML=nameStudent.value
names.push(nameStudent)
document.querySelector(".greads").innerHTML=midGreade
greade.push(nameStudent)
   }
let btn_play=document.querySelector(".btn_play")
btn_play.addEventListener("click",calfGreade)
