const sides=document.querySelectorAll('.inside-input');
const hypotenusBtn=document.querySelector('#hypotenuse');
const output=document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;
        return sumOfSquares;
    
}

function calculateHypoyenus(){
    if(Number(sides[0].value)<=0 || Number(sides[1].value)<=0){
        output.innerText='Enter all values greater than zero';
    }else{
        const sumOfSquare= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse=Math.sqrt(sumOfSquare)
        output.innerText='The length of the hypotenuse is:- '+lengthOfHypotenuse;
    }
}

hypotenusBtn.addEventListener('click',calculateHypoyenus)