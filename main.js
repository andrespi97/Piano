import "./style.css";
import * as Tone from "tone";
import getNoteFromKey from "./noteUtils.js";

//create a synth and connect it to the main output (your speakers)
// const synth = new Tone.Synth().toDestination();

const synth = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
  },
  release: 1,
  baseUrl: "./Piano/",
}).toDestination();
let keys = document.querySelectorAll(".key");

for (let key of keys) {
  let noteToPlay = key.getAttribute("data-note");
  key.addEventListener("click", () => playNote(noteToPlay));
}
document.addEventListener("keypress", ctrlTeclado);

function ctrlTeclado(event) {
  let keyName = event.key;
  let note = getNoteFromKey(keyName);
  console.log(note);

  playNote(note);
}

function playNote(note) {
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note, "8n");
}
