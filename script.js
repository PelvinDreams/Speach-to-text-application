
const resultElement = document.getElementById("result");
// the variable to be updating
let recognition;


function startConverting() {
if('webkitSpeechRecognition' in window) {
    recognition  = new webkitSpeechRecognition();

    setupRecognition(recognition);
    // starting up the recognition
    recognition.start();
}

// they are 2 types of recognition 
// 1. Intrim Results= listen the result
// 2. Final Results= displays the data inside the filed  element

function setupRecognition(recognition) {
     
    recognition.continuous = true;

    // enabling the recognition in a bash/ this is going to be listening to the voice and also will be displaying 
    // the data and text to be diisplayed
    recognition.interimResults = true;

    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        // processResult function will be called here.

        // this function is going to accept our para meters (event)
        processResult(event.results)
    }
}


function processResult(results) {

    let finalTranscript =  '';
    let interTranscript = '';


    // for each will make it more complicated
    for(let i = 0 ; i< results.length; i++) {
                                      
                                    //   get the refrence by specifying the zero
        let transscript = results[i][0].transscript;
        transscript.replace("\n", "<br>");


        // to get the data when the user is speaking
    }

}

 

function stopConverting() {

}
}