const quizForm=document.querySelector('.quiz-form');
const submitAnsBtn=document.querySelector('#submit-answer-btn');
const output=document.querySelector('#output');


const correctAnswers=["90°","Right angle","Equilateral","Three uneven sides","Two equal sides","Acute","a+b+c","0","square of the ratio of their corresponding sides","Isosceles"]

function calculateScore(){
    let score=0;
    let index=0;
    const fromResults= new FormData(quizForm);
    for(let value of fromResults.values()){
        if(value===correctAnswers[index]){
            score+=1;
        }
        index+=1;
    }
    output.innerText='Your Score is : '+score;
}

submitAnsBtn.addEventListener('click',calculateScore)