// TO DO When pressing the touch : change the appearance and the sound done
// TO DO On click change the appearance
// TO DO On click add the sound



function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const display = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; // if a key is not associated with a sound, function stops
  audio.currentTime = 0; // doesnt wait for the sound to finish, it rewinds automatically
  audio.play(); //can press multiple times, the sounds plays from the beginning

  display.classList.add('playing');
};


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  // this equals key
  this.classList.remove('playing');
}

function stopDisplay(e){
 const display = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  display.classList.remove('playing')
}

  const keys = document.querySelectorAll(".key");
  console.log(keys)
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));



document.addEventListener('keydown', playSound);
document.addEventListener('keyup', stopDisplay);

