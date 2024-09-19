import getNoteFromKey from "./noteUtils";
import { test, expect } from "vitest";
test("si le paso la letra a devolverá C4", () => {
  let note = getNoteFromKey("a");
  expect(note).toBe("C4");
});
test("si le paso la letra A devolverá C4", () => {
  let note = getNoteFromKey("A");
  expect(note).toBe("C4");
});
test("si no le paso una letra falla", () => {
  let note = getNoteFromKey(null);
  expect(note).toBeUndefined();
});
test("si no le paso una letra falla", () => {
  let note = getNoteFromKey(undefined);
  expect(note).toBeUndefined();
});
