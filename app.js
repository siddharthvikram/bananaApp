var txtInput =  document.querySelector("#txt-input");
var btn = document.querySelector("#txt-button");
var outputDiv = document.querySelector("#outputbox");
var server = "https://api.funtranslations.com/translate/minion.json"

function getTranslateUrl(text){
    return server + "?" + "text=" + text
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslateUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var traslate = json.contents.translated;
        outputDiv.innerText = traslate;
    })

}

btn.addEventListener("click", clickHandler)