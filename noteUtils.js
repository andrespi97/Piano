let touchableKeys = {
  a: "C4",
  w: "C#4",
  s: "D4",
  e: "D#4",
  d: "E4",
  f: "F4",
  g: "G4",
  y: "G#4",
  h: "A4",
  u: "A#4",
  j: "B4",
  i: "B#4",
  k: "C5",
};
export default function getNoteFromKey(key) {
  if (!key) return;
  return touchableKeys[key.toLowerCase()];
}
