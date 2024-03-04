// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false; // Change var to let
  let task2 = true; // Change var to let

  if (trueOrFalse) {
    task = true; // Remove var
    task2 = false; // Remove var
  }

  return [task, task2];
}

