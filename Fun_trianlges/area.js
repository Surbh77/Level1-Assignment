const base=document.querySelector("#base-input");
const height=document.querySelector("#height-input");
const areaBtn=document.querySelector("#area-btn");
const output=document.querySelector("#output");


function AreaOfTriangle(){
    // console.log(base.value,height.value)
    const prod=Number(base.value)*Number(height.value);
    const area=0.5*prod;
    console.log(area)
    output.innerText="The area of triangle is:- "+area;
}

areaBtn.addEventListener('click',AreaOfTriangle)