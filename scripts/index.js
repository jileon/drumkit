//Removes 'playing class'
function removePlaying(e) {
  if (e.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
}

//Plays audio when user uses keyboard
function audioFromKey(e) {
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  // console.log(audio);
  if (!audio) {
    return; // if no audio file associated with key, just stop the function
  } else {
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}

//Plays audio when user uses mouse
function audioFromClick(e) {
  let keyElement = '';
  if (e.target.nodeName === 'KBD') {
    keyElement = e.path[1];
  }

  if (e.target.nodeName === 'DIV' && e.target.hasAttribute('data-key')) {
    keyElement = e.target;
  }

  if (e.target.classList.contains('sound')) {
    keyElement = e.target.parentNode;
  }
  const keyCode = keyElement.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) {
    return; // if no audio file associated with key, just stop the function
  } else {
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
}

const keys = document.querySelectorAll('.key');

//Adds event listeners
window.addEventListener('keydown', audioFromKey);

keys.forEach(key => {
  key.addEventListener('click', audioFromClick);
  key.addEventListener('transitionend', removePlaying);
});
