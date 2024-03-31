document.addEventListener("DOMContentLoaded", function() {
    let speech = new SpeechSynthesisUtterance();
    const button = document.querySelector('button');
    let voices = [];
    let voiceSelect = document.querySelector("select");

    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        voiceSelect.innerHTML = '';
        voices.forEach((voice, i) => {
            const option = document.createElement('option');
            option.textContent = voice.name + ' (' + voice.lang + ')';
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceSelect.appendChild(option);
        });
    }

    populateVoiceList(); // Konuşmacı seçeneklerini başlangıçta doldur

    // Mobil cihazlarda konuşmacı seçeneklerinin alınması için biraz gecikme ekleyelim
    setTimeout(() => {
        populateVoiceList();
    }, 1000);

    voiceSelect.addEventListener("change", () => {
        const selectedOption = voiceSelect.selectedOptions[0];
        speech.voice = voices.find(voice => voice.name === selectedOption.getAttribute('data-name'));
        speech.lang = selectedOption.getAttribute('data-lang');
    });

    button.addEventListener("click", ()=>{
        speech.text = document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
    });
});
