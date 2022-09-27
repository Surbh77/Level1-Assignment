const sides=document.querySelectorAll('.inside-input');
const hypotenusBtn=document.querySelector('#hypotenuse');
const output=document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const sumOfSquares=a*a+b*b;
    return sumOfSquares;
}

function calculateHypoyenus(){
    const sumOfSquare= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse=Math.sqrt(sumOfSquare)
    output.innerText='The length of the hypotenuse is:- '+lengthOfHypotenuse;
    // console.log(lengthOfHypotenuse);
}

hypotenusBtn.addEventListener('click',calculateHypoyenus)