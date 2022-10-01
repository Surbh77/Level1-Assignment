const base=document.querySelector("#base-input");
const height=document.querySelector("#height-input");
const areaBtn=document.querySelector("#area-btn");
const output=document.querySelector("#output");


function AreaOfTriangle(){
    if(Number(base.value)<=0 || Number(height.value)<=0 ){
        output.innerText="Enter all values greater than zero";
    }else{
        const prod=Number(base.value)*Number(height.value);
        const area=0.5*prod;
        output.innerText="The area of triangle is:- "+area;
    }
}
areaBtn.addEventListener('click',AreaOfTriangle)