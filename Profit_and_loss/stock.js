var initialPrice=document.querySelector('#initial-price');
var stocksQuantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector('#current-price');
var submitBtn=document.querySelector('#submit-btn');
var output=document.querySelector('#output');

submitBtn.addEventListener('click',submitHandler)

function submitHandler(){
    calculateProfitAndLoss(Number(initialPrice.value),Number(stocksQuantity.value),Number(currentPrice.value));


}    

function calculateProfitAndLoss(initial,quantity,current){
    if(initial<=0 || quantity<=0 || current<=0){
        showOutput(`Please enter values greater than zero`)
    }else if(initial>current){
        var loss=(initial-current)*quantity;
        var losspercentage=(loss / (initial * quantity))*100;
        showOutput(`Hey, the loss is ${loss} and the percentage is ${losspercentage}%`)
    }else if (current>initial) {
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit / (initial * quantity))*100;
        showOutput(`Hey the profit is ${profit} and the percentage is ${profitPercentage}%`)
    }else{
        showOutput(`No pain no gain no gain no pain`)
    }

}

function showOutput(msg){
    // switch (status) {
    //     case 'PROFIT':
    //         output.innerHTML=msg;
    //         break;
    //     case "LOSS":
    //         output.innerHTML=msg;
    //     case 
    //     default:
    //         break;
    // }
    output.style.display='block'
    output.innerHTML=msg
}