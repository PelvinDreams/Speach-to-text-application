
const resultElement = document.getElementById("result");
// the variable to be updating
let recognition;


function startConverting() {
if('webkitSpeechRecognition' in window) {
    recognition  = new webkitSpeechRecognition();

    setupRecognition(recognition)
}



function setupRecognition(recognition) {

}


function processResult(results) {

}

 

function stopConverting() {

}
}