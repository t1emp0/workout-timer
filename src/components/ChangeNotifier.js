import audio from "../assets/bells.mp3";

function notifyChange(vol, volEnabled) {
  let audioF = new Audio(audio);

  audioF.volume = vol;

  if (volEnabled) {
    audioF.play();
  }
}

export default notifyChange;
