function playColorSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

