const inputs=document.querySelectorAll(".angle-input")
const isTriangleBtn=document.querySelector("#is-triangle-btn")
const output=document.querySelector("#output")

function CalculatesumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
}



function isTriangle(){
    const angle1=inputs[0].value
    const angle2=inputs[1].value
    const angle3=inputs[2].value
    const sumOfAngles=CalculatesumOfAngles(Number(angle1),Number(angle2),Number(angle3))
    // console.log(sumOfAngles)
    if(sumOfAngles==180){
        output.innerText=("Yah, The angles form a triangle")
        console.log("Yah, The angles form a triangle")
    }else{
        output.innerText=("Oh Oh!, The angles dont form a triangle")
        console.log("Oh Oh!, The angles dont form a triangle")
    }
}

isTriangleBtn.addEventListener('click',isTriangle)