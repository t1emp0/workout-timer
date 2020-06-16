import audio from "../assets/bells.mp3";

function notifyChange(vol, volEnabled, flashEnabled, targetDiv) {
  let audioF = new Audio(audio);

  audioF.volume = vol;

  if (volEnabled) {
    audioF.play();
  }

  if (flashEnabled) {
    setTimeout(function () {
      targetDiv.style.backgroundColor = "#000000";
    }, 0);

    setTimeout(function () {
      targetDiv.style.backgroundColor = "#F2F5FF";
    }, 100);

    setTimeout(function () {
      targetDiv.style.backgroundColor = "#000000";
    }, 150);

    setTimeout(function () {
      targetDiv.style.backgroundColor = "#F2F5FF";
    }, 250);
  }
}

export default notifyChange;
