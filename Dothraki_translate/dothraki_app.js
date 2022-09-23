var btntranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output")
var serverurl="https://api.funtranslations.com/translate/dothraki.json"
// outputdiv.innerText="Saurabh Shinde"
// Get translation url
function gettranslationurl(text){
    return serverurl+"?"+"text="+text
}
console.log(outputdiv)

// Defining errors
function errorhandler(error){
    console.log("Erro occured",error)
    alert("SOmething went wrong with serve! Try after sometime")
}

// Defining click action
function clickhandler(){

    var inputtext=txtinput.value;

    // call server for processing
    fetch(gettranslationurl(inputtext))
        .then(response=>response.json())
        .then(json=> {
            var translatedtext=json.contents.translated
            outputdiv.innerText=translatedtext;
         })
    .catch(errorhandler)
}
btntranslate.addEventListener('click',clickhandler)
// btntranslate.addEventListener('click',clickhandler)










