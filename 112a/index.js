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

function readline() {
  return inputString[currentLine++];
}

function main() {
  const firstWord = readline().toLowerCase();
  const secondWord = readline().toLowerCase();

  if (firstWord < secondWord) {
    console.log(-1);
  } else if (secondWord < firstWord) {
    console.log(1);
  } else {
    console.log(0);
  }
}
