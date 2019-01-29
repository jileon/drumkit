window.addEventListener('keydown', function(e) {
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) {
    return; // if no audio file associated with key, just stop the function
  } else {
    return audio.play();
  }
});
