import audio from "../assets/bells.mp3";

export function notifyChange() {
  var audioF = new Audio(audio);
  audioF.play();
}

export default notifyChange;