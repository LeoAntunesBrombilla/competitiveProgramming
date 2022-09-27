"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readLine() {
  return inputString[currentLine++];
}

function main() {
  let n = parseInt(readLine());
  for (let i = 0; i < n; i++) {
    let word = readLine();
    let length = word.length - 1;
    if (length <= 10) {
      console.log(word);
    } else {
      console.log(word.charAt(0) + (length - 2) + word.charAt(length - 1));
    }
  }
}
