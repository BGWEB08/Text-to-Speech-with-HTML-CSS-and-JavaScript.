document.addEventListener("DOMContentLoaded", function() {
    let speech = new SpeechSynthesisUtterance();
    const button = document.querySelector('button');
    let voices = [];
    let voiceSelect = document.querySelector("select");

    window.speechSynthesis.onvoiceschanged = () =>{
        voices = window.speechSynthesis.getVoices();
        populateVoiceList();
    }

    function populateVoiceList() {
        voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    }

    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
    });

    button.addEventListener("click", ()=>{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    });
});
