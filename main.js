import "./style.css";
import * as Tone from "tone";
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();
// document
//   .querySelector('[data-note="C4"]')
//   .addEventListener("click", () => playNote("C4"));

let keys = document.querySelectorAll(".key");
for (let key of keys) {
  let noteToPlay = key.getAttribute("data-note");
  key.addEventListener("click", () => playNote(noteToPlay));
}
function playNote(note) {
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease(note, "8n");
}
