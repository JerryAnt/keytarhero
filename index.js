// TO DO When pressing the touch : change the appearance and the sound done
// TO DO On click change the appearance
// TO DO On click add the sound


document.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // if a key is not associated with a sound, function stops
  audio.currentTime = 0; // doesnt wait for the sound to finish, it rewinds automatically
  audio.play(); //can press multiple times, the sounds plays from the beginning
});

