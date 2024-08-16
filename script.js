const resultElement = document.getElementById("result");
// The variable to be updating
let recognition;

function startConverting() {
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();

        setupRecognition(recognition);
        // Start recognition
        recognition.start();
    }
}

function setupRecognition(recognition) {
    recognition.continuous = true;

    // Enabling interim results to display text as the user speaks
    recognition.interimResults = true;

    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        // Call processResult function to handle the event results
        const { finalTranscript, interTranscript } = processResult(event.results);

        resultElement.innerHTML = finalTranscript + interTranscript;
    }
}

function processResult(results) {
    let finalTranscript = '';
    let interTranscript = '';

    for (let i = 0; i < results.length; i++) {
        // Get the transcript of the current result
        let transcript = results[i][0].transcript;

        // Replace newline characters with <br>
        transcript = transcript.replace(/\n/g, "<br>");

        // Determine if the result is final or interim
        if (results[i].isFinal) {
            finalTranscript += transcript;
        } else {
            interTranscript += transcript;
        }
    }

    return { finalTranscript, interTranscript };
}

function stopConverting() {
    // Check if recognition is active and stop it
    if (recognition) {
        recognition.stop();
    }
}
