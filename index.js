// TO DO On click change the appearance
// TO DO On click add the sound
// TO DO When pressing the touch : change the appearance and the sound

document.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(!audio) return; // if a key is not associated with a sound, function stops
  audio.play(); //if I type on a key sounds come out but if I type twice it does not work
  // the sound has to find its 'finish line to be activated again'


});

