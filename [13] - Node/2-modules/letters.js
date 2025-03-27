// Modules/Files: self-contained units of code that encapsulates
//                variables and functions.

const letters = ["A", "B", "C"];

function displayLetters() {
  console.log("Display Letters:");
  letters.forEach((letter) => {
    console.log("Letter:", letter);
  });
}

module.exports = {
  letters,
  displayLetters,
};
