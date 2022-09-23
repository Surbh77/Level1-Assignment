// console.log("Script is working from a different file!");
// // imput
// var username=prompt('Give me username');

// // Process
// var welcomemessage='This Script is working!!'+username;

// // output
// alert(welcomemessage)
var btntranslate=document.querySelector('#btn-translate');
var txtinput=document.querySelector('#txt-input');
var outputdiv=document.querySelector('#output');
// var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverurl="https://api.funtranslations.com/translate/minion.json"
// outputdiv.innerText="Saurabh Shinde"

function gettranslationurl(text){
    return serverurl+"?"+"text="+text
}
console.log(outputdiv)

// Defining error 
function errorhandler(error){
    console.log("Error occured",error)
    alert("Something wrong with server! try after sometime")
}

// defining click
function clickhandler(){
    // console.log('Clicked!')
    // console.log("Input:- "+txtinput.value)
  
    var inputtext=txtinput.value; // taking input

    // calling server for processing
    fetch(gettranslationurl(inputtext))
        .then(response=>response.json())
        .then(json=> {
            var translatedtext=json.contents.translated
            outputdiv.innerText=translatedtext;
        })
    .catch(errorhandler)
}

btntranslate.addEventListener('click',clickhandler)

