document.addEventListener("DOMContentLoaded", function() {
    let speech = new SpeechSynthesisUtterance();
    const button = document.querySelector('button');
    let voices = [];
    let voiceSelect = document.querySelector("select");

    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        voices.forEach((voice, i) => {
            voiceSelect.options[i] = new Option(voice.name, i);
        });
    }

    populateVoiceList(); // Konuşmacı seçeneklerini başlangıçta doldur

    // Mobil cihazlarda konuşmacı seçeneklerinin alınması için biraz gecikme ekleyelim
    setTimeout(() => {
        populateVoiceList();
    }, 1000);

    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
        // Seçilen dili belirle
        const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
        speech.lang = selectedOption.lang;
    });

    button.addEventListener("click", ()=>{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    });
});
