// TO DO On click change the appearance
// TO DO On click add the sound
// TO DO When pressing the touch : change the appearance and the sound

document.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
});

